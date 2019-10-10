/*
 * Copyright (c) 2016 iTAC Software AG, Germany. All Rights Reserved.
 *
 * This software is protected by copyright. Under no circumstances may any part of this file in any form be copied,
 * printed, edited or otherwise distributed, be stored in a retrieval system, or be translated into another language
 * without the written permission of iTAC Software AG.
 *
 */

/**
 Change index:
 Name:                  Date:           Customer:        Function:                 Comment:
 Faouzi Ben Mabrouk     2019-04-12      Le belier        cfTest                    APIs integration 
 Sami Akkari            2019-06-29      Le belier        cfTest                    Add List of Operators and alloys 
 Ala Khiari             2019-10-09      Le Nbelier       cfTest                    Add config functions in cfTestGetOperator
 **/

importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.util.constants.imsapi);
importPackage(java.lang);
importPackage(com.itac.mes.api.custom);

/*  ============================================================================
    used to load the configuration file from MDA
    in  : stationNumber
    out : 
        { 
            resultData              //? configuration (json)
        }
    ============================================================================
*/
function fct_readDocument(stationNumber) {
    var attributeFilters = new Array();
    var dataTypeFilters = new Array(new KeyValue("MDA_ACTIVE", 1),
        new KeyValue("MDA_DATA_TYPE", 13),
        new KeyValue("MDA_FILE_EXTENSION", "json")
    );

    var mdaResultKeys = new Array("MDA_DOCUMENT_ID");
    var result_mdaGetDocuments = imsApiService.mdaGetDocuments(imsApiSessionContext,
        stationNumber,
        attributeFilters,
        dataTypeFilters,
        mdaResultKeys);

    return_value = result_mdaGetDocuments.return_value;

    if (return_value != 0) {
        errorMessage = "[mdaGetDocuments] " + getImsApiErrorText(return_value);
        return resultUploadProcessData("CF", return_value, errorMessage, tempOb);
    }

    var DOC_ID = result_mdaGetDocuments.mdaResultValues[0];

    var result_mdaGetDocumentContent = imsApiService.mdaGetDocumentContent(imsApiSessionContext,
        stationNumber,
        DOC_ID);

    var return_value = result_mdaGetDocumentContent.return_value;

    if (return_value != 0) {
        errorMessage = "[mdaGetDocumentContent] " + getImsApiErrorText(return_value);
        return resultUploadProcessData("CF", return_value, errorMessage, tempOb);
    }

    var DOC_CONTENT = "";

    for (i = 0; i < result_mdaGetDocumentContent.content.length; i++) {
        DOC_CONTENT += String.fromCharCode(parseInt(result_mdaGetDocumentContent.content[i]));
    }

    var resultData = JSON.parse(DOC_CONTENT);

    return resultData;
}
/*  ============================================================================
*/

/*  ============================================================================
    get operators for melting
    in  : configContent
    out : 
        { 
            operators[]                     //? list of melting operators
        }
    ============================================================================
*/
function fct_getMeltingOperators(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var operators = [];

    var configuration = configContent.melting.degassing.operators;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.operators is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            operators: operators
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        operators.push("" + configuration[i].firstName + " " + configuration[i].name + " " + configuration[i].id);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        operators: operators
    }
}
/*  ============================================================================
*/

function cfTestThermalValidate(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var operator= data.operator;
        var meltingLineId = data.meltingLineId;
        var testNumber = data.testNumber;
        var comment = data.testNumber;
        var alloyType = data.alloyType;
        var liquidTemperature = data.liquidTemperature;
        var surfusion = data.surfusion;
        var surfusionTime = data.surfusionTime;
        var grainSize = data.grainSize;

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var TEMP_BATCH_ID =  "";
        // API integration -----------------------------------------------------
        
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("BATCH_LIST");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                7,
                meltingLineId,
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys
            );

        return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[attribGetAttributeValues] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_BATCH_ID = result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if (TEMP_BATCH_ID.equals("")) {
            errorCode = -50100;
            errorMessage = "There is no available melt batch in the melting station";
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[Melting Station] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        // <batchGetBatchInfo> -------------------------------------------------
        var batchInfoFilter =  new Array(new KeyValue("BATCH_NUMBER", TEMP_BATCH_ID));
        var batchInfoResultKeys = new Array("WORKORDER_NUMBER", "BATCH_QUANTITY_TOTAL");
        var result_batchGetBatchInfo = imsApiService.batchGetBatchInfo(imsApiSessionContext, 
                stationNumber, 
                batchInfoFilter, 
                batchInfoResultKeys 
            );

        return_value = result_batchGetBatchInfo.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[batchGetBatchInfo] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_WORKORDER = result_batchGetBatchInfo.batchInfoResultValues[0];
        var TEMP_BATCH_QTY = result_batchGetBatchInfo.batchInfoResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        // <trActivateWorkOrder> -----------------------------------------------
        var result_trActivateWorkOrder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
           stationNumber,
           TEMP_WORKORDER,
           "-1",
           "-1",
           2,
           1);
           
        return_value = result_trActivateWorkOrder.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[trActivateWorkOrder] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }   
        
        // <batchRegisterBatch> -----------------------------------------------
        var result_batchRegisterBatch = imsApiService.batchRegisterBatch(imsApiSessionContext, 
                stationNumber, 
                TEMP_BATCH_ID,
                2,
                1,
                "-1");
        
        return_value = result_batchRegisterBatch.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[batchRegisterBatch] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }   
        
        // <batchUnregisterBatch> ----------------------------------------------
        var result_batchUnregisterBatch = imsApiService.batchUnregisterBatch(imsApiSessionContext, 
                stationNumber, 
                TEMP_BATCH_ID,
                2,
                TEMP_BATCH_QTY,
                0,
                "-1"
            );

        return_value = result_batchUnregisterBatch.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[batchUnregisterBatch] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        // <trUploadResultDataAndRecipe> ---------------------------------------
        var recipeVersionId=-1;	    	    
        var duplicateSerialNumber=0;   
        var bookDate=-1;
        var cycleTime=0;
        var recipeVersionMode=-1;
        var resultUploadKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE", "UNIT");
        var resultUploadValues = new Array(0, 0, "THERMAL_OPERATOR"             , operator,             "",
                                           0, 0, "THERMAL_TEST_NUMBER"          , testNumber,           "",
                                           0, 0, "THERMAL_COMMENT"              , comment,              "",
                                           0, 0, "THERMAL_ALLOY_TYPE"           , alloyType,            "",
                                           0, 0, "THERMAL_LIQUID_TEMPERATURE"   , liquidTemperature,    "(degC)",
                                           0, 0, "THERMAL_SURFUSION"            , surfusion,            "(degC)",
                                           0, 0, "THERMAL_SURFUSION_TIME"       , surfusionTime,        "(s)",
                                           0, 0, "THERMAL_GRAIN_SIZE"           , grainSize,            "(um)"
                                           );
               
        
        var trUploadResultDataAndRecipeResult = imsApiService.trUploadResultDataAndRecipe(imsApiSessionContext, 
                stationNumber, 
                2, 
                recipeVersionId, 
                TEMP_BATCH_ID, 
                -1, 
                -1, 
                duplicateSerialNumber, 
                bookDate, 
                cycleTime, 
                recipeVersionMode, 
                resultUploadKeys, 
                resultUploadValues
            );

        return_value = trUploadResultDataAndRecipeResult.return_value;  
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[trUploadResultDataAndRecipe] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        // JSON result ---------------------------------------------------------        
        var resultData = {
                meltBatchId : "" + TEMP_BATCH_ID,
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
        
    }    
    catch (e) {
        logHandler.logMessage("Custom function cfTestThermalValidate failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfTestGetAvailableMeltingStations(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var operator = data.operator;
        
       

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var meltBatchId = "";
        
        
        var TEMP_ST_AR = [];
        var TEMP_ST_DESC_AR = [];
        var TEMP_BATCH_ID_AR = [];
        
        // API integration -----------------------------------------------------
        var machineAssetStructureFilter = new Array(new KeyValue("CELL_NUMBER","020"), 
                                                    new KeyValue("DISSOLVING_LEVEL",1),
                                                    new KeyValue("MACHINE_GROUP_NUMBER","020020"));
        var machineAssetStructureResultKeys = new Array("STATION_NUMBER","STATION_DESC");
        var resut_mdataGetMachineAssetStructure = imsApiService.mdataGetMachineAssetStructure(imsApiSessionContext, 
                stationNumber, 
                machineAssetStructureFilter, 
                machineAssetStructureResultKeys
            );

        return_value = resut_mdataGetMachineAssetStructure.return_value;  
       
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[mdataGetMachineAssetStructure] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        for (var x=0; x< resut_mdataGetMachineAssetStructure.machineAssetStructureValues.length / 2; x++){
            TEMP_ST_AR.push(""+resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x*2+0]);
            TEMP_ST_DESC_AR.push(""+resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x*2+1]);
        }
        
       
           
        // JSON result ---------------------------------------------------------        
        var resultData = {
                meltingStations : TEMP_ST_AR,
                meltingStationDesc : TEMP_ST_DESC_AR,
                alloy : ["AS7G03-SR", "AS7G06-SR"],
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }    
    catch (e) {
        logHandler.logMessage("Custom function cfTestGetAvailableMeltingStations failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfTestGetMeltingInformation(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        
       

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var meltBatchId = "";
        
        
        var TEMP_ST_AR = [];
        var TEMP_ST_DESC_AR = [];
        var TEMP_BATCH_ID_AR = [];
        
        // API integration -----------------------------------------------------
        var machineAssetStructureFilter = new Array(new KeyValue("CELL_NUMBER","020"), 
                                                    new KeyValue("DISSOLVING_LEVEL",1),
                                                    new KeyValue("MACHINE_GROUP_NUMBER","020020"));
        var machineAssetStructureResultKeys = new Array("STATION_NUMBER","STATION_DESC");
        var resut_mdataGetMachineAssetStructure = imsApiService.mdataGetMachineAssetStructure(imsApiSessionContext, 
                stationNumber, 
                machineAssetStructureFilter, 
                machineAssetStructureResultKeys
            );

        return_value = resut_mdataGetMachineAssetStructure.return_value;  
       
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[mdataGetMachineAssetStructure] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        for (var x=0; x< resut_mdataGetMachineAssetStructure.machineAssetStructureValues.length / 2; x++){
            TEMP_ST_AR.push(""+resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x*2+0]);
            TEMP_ST_DESC_AR.push(""+resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x*2+1]);
        }
        
        for (var x=0; x< TEMP_ST_AR.length; x++){
            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("BATCH_LIST");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                7,
                TEMP_ST_AR[x],
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys);

            var return_value = result_attribGetAttributeValues.return_value;
            
            if (return_value == 0){
                if (result_attribGetAttributeValues.attributeResultValues.length>0) {
                    for (var y=0; y< result_attribGetAttributeValues.attributeResultValues.length / 3; y++){
                        TEMP_BATCH_ID_AR.push(""+result_attribGetAttributeValues.attributeResultValues[y*3+1]);
                    }
                }
                else{
                    TEMP_BATCH_ID_AR.push("");
                }
               
            }
            else{
                TEMP_BATCH_ID_AR.push("");
            }
        }
           
        // JSON result ---------------------------------------------------------        
        var resultData = {
                meltingStations : TEMP_ST_AR,
                meltingStationDesc : TEMP_ST_DESC_AR,
                meltBatches : TEMP_BATCH_ID_AR,
                alloy : ["AS7G03-SR", "AS7G06-SR"],
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }    
    catch (e) {
        logHandler.logMessage("Custom function cfTestGetMeltingInformation failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfTestGetOperator(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        
       

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
   
        
        // API integration -----------------------------------------------------
        
        var configContent = fct_readDocument(stationNumber);
        var res = fct_getMeltingOperators(configContent).operators; 
           
        // JSON result ---------------------------------------------------------        
        var resultData = {
                operators : res,
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }    
    catch (e) {
        logHandler.logMessage("Custom function cfTestGetOperator failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// Extra functions -------------------------------------------------------------
// -----------------------------------------------------------------------------

/* -----------------------STANDARD FUNCTIONS---------------------------------*/
 function getImsApiErrorText(retCode) {
    logHandler.logMessage("OfficeClientController.getImsApiErrorText() Code: " + retCode);
    var errorText = "";
    var result;
    try {
        result = imsApiService.imsapiGetErrorText(imsApiSessionContext, retCode);
    } catch (th) {
        logHandler.logMessage("custom function resetPipe failed: " + th);
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
