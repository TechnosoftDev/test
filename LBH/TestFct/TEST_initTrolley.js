importPackage(com.itac.mes.api.custom);
importPackage(java.lang);
importPackage(java.util);
importPackage(java.text);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.util.constants.imsapi);



function initTrolley(jsonData) {
    var result = new Result_customFunctionCommon();
    try {

        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var trolleyId = data.trolleyId;
        var wipState = data.wipState;


        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var ws = "";
        var help = "";

        help += "\n" + "    wipState    Can be used to set trolley WIP_STATE attribute.";
        help += "\n" + "        0   :   WIP_STATE = ";
        help += "\n" + "        1   :   WIP_STATE = BEFORE_SAND_CORE";
        help += "\n" + "        2   :   WIP_STATE = BEFORE_PAINTING";
        help += "\n" + "        3   :   WIP_STATE = BEFORE_CASTING";
        help += "\n" + "        4   :   WIP_STATE = TO_SCRAP";
        help += "\n";

        // API integration -----------------------------------------------------

        if ((wipState == 0) || (wipState == undefined)) ws = "";
        if (wipState == 1) ws = "BEFORE_SAND_CORE";
        if (wipState == 2) ws = "BEFORE_PAINTING";
        if (wipState == 3) ws = "BEFORE_CASTING";
        if (wipState == 4) ws = "TO_SCRAP";


        var resp = fct_releaseTrolley(stationNumber, trolleyId, ws);
        errorCode = resp.errorCode;
        errorMessage = resp.errorMessage;

        // JSON result ---------------------------------------------------------        
        var resultData = {
            wipState: ws,
            errorCode: return_value,
            errorMessage: errorMessage
        };
        result.outArgs = [JSON.stringify(resultData), help];
        result.return_value = return_value;

        return result;
    }
    catch (e) {
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// ========================================================================================================================

function fct_releaseTrolley(stationNumber, trolleyId, wipState) {

    var log = "";
    var errorCode = 0;
    var errorMessage = "";

    var TEMP_BATCH_NUMBER_AR = [];
    // --------------------------------------------------------------------
    logHandler.logMessage("#### Start : fct_releaseTrolley");
    // <shipGetSerialNumberDataForShippingLot> -----------------------------
    var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER", "WORKORDER_NUMBER");
    var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext,
        stationNumber,
        trolleyId,
        serialNumberResultKeys);

    var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "releaseTrolley.shipGetSerialNumberDataForShippingLot : " + getImsApiErrorText(return_value);
        return { log: log, errorCode: errorCode, errorMessage: errorMessage }
    }


    for (var x = 0; x < result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length / 4; x++) {
        TEMP_BATCH_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x * 4 + 2]);
        log += " " + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x * 4 + 2] + " | ";
    }
    // ---------------------------------------------------------------------

    for (var s = 0; s < TEMP_BATCH_NUMBER_AR.length; s++) {
        // <shipRemoveSerialNumberFromShippingLot> ------------------------------
        var result_shipRemoveSerialNumberFromShippingLot = imsApiService.shipRemoveSerialNumberFromShippingLot(imsApiSessionContext,
            stationNumber,
            trolleyId,
            TEMP_BATCH_NUMBER_AR[s],
            "-1",
            "-1");

        var return_value = result_shipRemoveSerialNumberFromShippingLot.return_value;
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "releaseTrolley.shipGetSerialNumberDataForShippingLot : " + getImsApiErrorText(return_value);
            //return {log : log, errorCode : errorCode, errorMessage : errorMessage}
        }

    }

    // ---------------------------------------------------------------------
    // <attribGetAttributeValues> ---------------------------------------------
    var attributeCodeArray = new Array("SC_TROLLEY_MAP", "SC_PART_MAP");
    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
    var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
        stationNumber,
        7,
        stationNumber,
        "-1",
        attributeCodeArray,
        1,
        attributeResultKeys);

    var return_value = result_attribGetAttributeValues.return_value;

    if (return_value != 0) {
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "releaseTrolley.attribGetAttributeValues : " + getImsApiErrorText(return_value);
            //return {log : log, errorCode : errorCode, errorMessage : errorMessage}
        }
    }

    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    var TEMP_SC_TROLLEY_MAP = result_attribGetAttributeValues.attributeResultValues[4];
    var TEMP_SC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1];

    var updatedMaps = removeTrolley(trolleyId, TEMP_SC_TROLLEY_MAP, TEMP_SC_PART_MAP);

    // <attribAppendAttributeValues> ---------------------------------------------
    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
    var attributeUploadValues = new Array("SC_TROLLEY_MAP", updatedMaps.trolleyMap, "0", "SC_PART_MAP", updatedMaps.partMap, "0");
    var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
        stationNumber,
        7,
        stationNumber,
        "-1",
        -1,
        1,
        attributeUploadKeys,
        attributeUploadValues);

    var return_value = result_attribAppendAttributeValues.return_value;
    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "releaseTrolley.attribAppendAttributeValues : " + getImsApiErrorText(return_value);
        //return {log : log, errorCode : errorCode, errorMessage : errorMessage}
    }

    // <attribAppendAttributeValues> ------------------------------------------------------
    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
    var attributeUploadValues = new Array("START_TIME", "-1", "0", "END_TIME", "-1", "0", "WIP_STATE", wipState, "0");
    var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
        stationNumber,
        2,
        trolleyId,
        "-1",
        -1,
        1,
        attributeUploadKeys,
        attributeUploadValues);

    var return_value = result_attribAppendAttributeValues.return_value;
    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "releaseTrolley.attribAppendAttributeValues : " + getImsApiErrorText(return_value);
        //return {log : log, errorCode : errorCode, errorMessage : errorMessage}
    }
    logHandler.logMessage("#### End : fct_releaseTrolley");
    // --------------------------------------------------------------------
    return {
        log: log,
        errorCode: errorCode,
        errorMessage: errorMessage
    }
}

function removeTrolley(trolleyId, trolleyMap, partMap) {

    var trolleyAr = trolleyMap.split("|");
    var partAr = partMap.split("|");
    var pos = -1;
    var pa = "";

    for (i = 0; i < trolleyAr.length; i++) {
        var tr = trolleyAr[i].split(":")[1];

        if (tr == trolleyId) {
            pa = partAr[i].split(":")[1];
        }
    }

    var tr_map = trolleyMap.replace(trolleyId, "");
    var pn_map = partMap.replace(pa, "");


    return {
        trolleyMap: tr_map,
        partMap: pn_map
    };
}

function getImsApiErrorText(retCode) {
    var errorText = "";
    var result;
    try {
        result = imsApiService.imsapiGetErrorText(imsApiSessionContext, retCode);
    } catch (e) {

        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
    if (result != null) {
        errorText = result.errorString;
    }
    return errorText;
}

function initDummyTrolley(jsonData) {
    var result = new Result_customFunctionCommon();
    try {

        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var trolleyId = data.trolleyId;
        var wipState = data.wipState;
        var product = data.product;
        var dummyBatches = data.dummyBatches;


        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var ws = "";
        var help = "";

        help += "\n" + "    wipState    Can be used to set trolley WIP_STATE attribute.";
        help += "\n" + "        0   :   WIP_STATE = ";
        help += "\n" + "        1   :   WIP_STATE = BEFORE_SAND_CORE";
        help += "\n" + "        2   :   WIP_STATE = BEFORE_PAINTING";
        help += "\n" + "        3   :   WIP_STATE = BEFORE_CASTING";
        help += "\n" + "        4   :   WIP_STATE = TO_SCRAP";
        help += "\n";

        // API integration -----------------------------------------------------

        if ((wipState == 0) || (wipState == undefined)) ws = "";
        if (wipState == 1) ws = "BEFORE_SAND_CORE";
        if (wipState == 2) ws = "BEFORE_PAINTING";
        if (wipState == 3) ws = "BEFORE_CASTING";
        if (wipState == 4) ws = "TO_SCRAP";


        var resp = fct_releaseTrolley(stationNumber, trolleyId, ws);
        errorCode = resp.errorCode;
        errorMessage = resp.errorMessage;

        // JSON result ---------------------------------------------------------        
        var resultData = {
            wipState: ws,
            errorCode: return_value,
            errorMessage: errorMessage
        };
        result.outArgs = [JSON.stringify(resultData), help];
        result.return_value = return_value;

        return result;
    }
    catch (e) {
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}