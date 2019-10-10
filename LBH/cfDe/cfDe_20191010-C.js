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
    Name:                   Date:           Customer:        Function:                 Comment:
    Faouzi Ben Mabrouk      2019-04-12      Le belier        cfDe                      APIs integration 
    Sami Akkari             2019-06-11      Le Belier        cfDe                      Add DEGASSING_INFO + DEGASSING_DURATION attributes
                                                                                       Change furnace, supplier, and alloy to dynamic 
    Sami Akkari             2019-06-18      Le Belier       cfDe                       Add cfDeGetPot + update cfDeGetStationInformation + cfDeRegisterBatch 
    Sami Akkari             2019-06-25      Le Belier       cfDe                       Add list of operators, suppliers, pots, weigths and alloys
    Sami Akkari             2019-06-25      Le Belier       cfDe                       Add the 
    Faouzi Ben Mabrouk      2019-09-01      Le Belier       cfDe                       Manage Melt in Holding Storages
    Ala Khiari              2019-10-10      Le Belier       cfDe                       Add config functions in cfDeGetOperator,cfDeGetAlloy,cfDeGetSupplier,cfDeGetWeight,cfDeGetPot
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

/*  ============================================================================
    get availble alloys
    in  : configContent
    out : 
        { 
            alloys[]                        //? available alloys code from the configuration
        }
    ============================================================================
*/
function fct_getAlloys(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var alloys = [];

    var configuration = configContent.melting.degassing.alloys;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.alloys is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            alloys: alloys
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        alloys.push(configuration[i].alloy);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        alloys: alloys
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get availble suppliers
    in  : configContent
    out : 
        { 
            suppliers[]                     //? available suppliers from the configuration
        }
    ============================================================================
*/
function fct_getSuppliers(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var suppliers = [];

    var configuration = configContent.melting.degassing.suppliers;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.suppliers is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            suppliers: suppliers
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        suppliers.push(configuration[i].supplier);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        suppliers: suppliers
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get availble weights
    in  : configContent
    out : 
        { 
            suppliers[]                     //? available weights from the configuration
        }
    ============================================================================
*/
function fct_getWeights(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var weights = [];

    var configuration = configContent.melting.degassing.weights;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.weights is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            weights: weights
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        weights.push(configuration[i].weight);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        weights: weights
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get availble pots
    in  : configContent
    out : 
        { 
            pots[]                      //? available pots from the configuration
        }
    ============================================================================
*/
function fct_getPots(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var pots = [];

    var configuration = configContent.melting.degassing.pots;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.pots is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            pots: pots
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        pots.push(configuration[i].pot);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        pots: pots
    }
}
/*  ============================================================================
*/

function cfDeRegisterBatch(jsonData) {
    var result = new Result_customFunctionCommon();
    try {

        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var sourceStation = data.sourceStation;
        var alloy = data.alloy;
        var supplier = data.supplier;
        var pot = data.pot;

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var meltBatchId = "";

        // Get station Id from station description
        sourceStation = getStationFromField(data.sourceStation).station;

        // API integration -----------------------------------------------------
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("DEGASSING_DURATION");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            stationNumber,
            7,
            sourceStation,
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
                errorCode: errorCode,
                errorMessage: "[attribGetAttributeValues] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DEGASSING_DURATION = result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("BATCH_LIST");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            stationNumber,
            7,
            sourceStation,
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
                errorCode: errorCode,
                errorMessage: "[attribGetAttributeValues] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_ID = result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribAppendAttributeValues> ---------------------------------------
        // NEED TO BE UPDATED 

        //        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        //        var attributeUploadValues = new Array("BATCH_LIST", "", "0"); 
        //        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
        //            stationNumber,
        //            7,      
        //            sourceStation,
        //            "-1",
        //            -1,
        //            1,
        //            attributeUploadKeys,
        //            attributeUploadValues
        //        );
        //        
        //        return_value = result_attribAppendAttributeValues.return_value;
        //        
        //        if (return_value != 0) {
        //            errorCode = return_value;
        //            errorMessage = getImsApiErrorText(return_value);
        //            var resultData = {
        //                    errorCode : errorCode,
        //                    errorMessage : "[attribAppendAttributeValues] " + errorMessage
        //                };
        //            result.outArgs = [JSON.stringify(resultData)];
        //            result.return_value = return_value;
        //            return result;
        //        }


        // <batchGetBatchInfo> -------------------------------------------------
        var batchInfoFilter = new Array(new KeyValue("BATCH_NUMBER", TEMP_BATCH_ID));
        var batchInfoResultKeys = new Array("WORKORDER_NUMBER");
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
                errorCode: errorCode,
                errorMessage: "[batchGetBatchInfo] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_WORKORDER = result_batchGetBatchInfo.batchInfoResultValues[0];
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
                errorCode: errorCode,
                errorMessage: "[trActivateWorkOrder] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
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
                errorCode: errorCode,
                //errorMessage : "[batchRegisterBatch] " + errorMessage
                errorMessage: "No available melt pot from the station"
            };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // <attribAppendAttributeValues> ---------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("DEGASSING_INFO", "" + sourceStation + "|" + supplier + "|" + alloy + "|" + pot, "0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
            stationNumber,
            7,
            stationNumber,
            "-1",
            -1,
            1,
            attributeUploadKeys,
            attributeUploadValues
        );

        return_value = result_attribAppendAttributeValues.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                errorCode: errorCode,
                errorMessage: "[attribAppendAttributeValues] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        // JSON result ---------------------------------------------------------        
        var resultData = {
            meltBatchId: "" + TEMP_BATCH_ID,
            furnace: sourceStation,
            supplier: supplier,
            alloy: alloy,
            pot: pot,
            setupTime: "0s",
            degassingDuration: "" + TEMP_DEGASSING_DURATION,
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeRegisterContainer failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function isCarousel(station) {
    var isCar = false;
    if ((station.substr(0, 8) == "06002006") || (station.substr(0, 8) == "06002010")) isCar = true;

    return isCar;
}

function getStorage(stationNumber) {
    return stationNumber.substr(0, 8);
}

function fct_updateMaterialSetup(stationNumber, batchId) {

    var nb = 2;
    if (isCarousel(stationNumber)) nb = 16;

    var return_value = 0;
    var erroCode = 0;
    var errorMessage = "";
    logHandler.logMessage("####  isCarousel = " + isCarousel(stationNumber) + " - nb = " + nb);
    var storage = getStorage(stationNumber);
    var res = fct_storeMaterial(stationNumber, batchId, storage);

    for (var i = 1; i <= nb; i++) {

        var station = getStationId(stationNumber, i).station;
        logHandler.logMessage("####  " + station + " --> " + batchId);

        var stationSettingResultKeys = new Array("WORKORDER_NUMBER");

        var result_trGetStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext,
            station,
            stationSettingResultKeys);

        return_value = result_trGetStationSetting.return_value;

        if (return_value != 0) {
            workOrder = "-1";
        }
        else {
            workOrder = result_trGetStationSetting.stationSettingResultValues[0];
        }

        var materialSetupUploadKeys = new Array("ERROR_CODE", "MATERIAL_BIN_NUMBER", "SETUP_POSITION", "SETUP_STATE");
        var materialSetupUploadValues = new Array("0", batchId, batchId, 0);

        var compPositionsUploadKeys = new Array();
        var compPositionsUploadValues = new Array();
        var result_setupUpdateMaterialSetup = imsApiService.setupUpdateMaterialSetup(imsApiSessionContext,
            station,
            2,
            workOrder,
            "-1",
            "-1",
            materialSetupUploadKeys,
            materialSetupUploadValues,
            compPositionsUploadKeys,
            compPositionsUploadValues);

        return_value = result_setupUpdateMaterialSetup.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            // return {
            //     errorCode : return_value,
            //     errorMessage : errorMessage
            // }
        }

        // var result_setupStateChange = imsApiService.setupStateChange(imsApiSessionContext,
        //     station,
        //     2,
        //     workOrder,
        //     "-1",
        //     -1,
        //     0);

        // return_value = result_setupStateChange.return_value;

        // if (return_value != 0) {
        //     errorCode = return_value;
        //     errorMessage = getImsApiErrorText(return_value);
        //     // return {
        //     //     errorCode : return_value,
        //     //     errorMessage : errorMessage
        //     // }
        // }
    }
    return {
        errorCode: return_value,
        errorMessage: errorMessage
    }
}

function cfDeUnregisterBatch(jsonData) {
    var result = new Result_customFunctionCommon();
    try {

        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;


        var degassingTime = data.degassingTime;
        var degassingTemperature = data.degassingTemperature;
        var degassingDuration = data.degassingDuration;
        var tappingWeight = data.tappingWeight;
        var gasContent = data.gasContent;
        var thermotest = data.thermotest;
        var chemicalComposition = data.chemicalComposition;
        var ladleCleaning = data.ladleCleaning;
        var comp1 = data.comp1;
        var comp2 = data.comp2;
        var comp3 = data.comp3;
        var comp4 = data.comp4;
        var operator = data.operator;
        var supplier = data.supplier;
        var alloy = data.alloy;

        var destinationStations = data.destinationStations;

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var meltBatchId = "";

        // Get station Id from station description
        //destinationStation = getStationFromField(data.destinationStation).station;

        // API integration -----------------------------------------------------

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("DEGASSING_INFO");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            stationNumber,
            7,
            stationNumber,
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
                errorCode: errorCode,
                errorMessage: "[attribGetAttributeValues] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DEGASSING_INFO = "" + result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_FURNACE = TEMP_DEGASSING_INFO.split("|")[0];
        var TEMP_SUPPLIER = TEMP_DEGASSING_INFO.split("|")[1];
        var TEMP_ALLOY = TEMP_DEGASSING_INFO.split("|")[2];
        var TEMP_POT = TEMP_DEGASSING_INFO.split("|")[3];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <batchGetRegisteredBatch> -------------------------------------------------
        var batchResultKeys = new Array("BATCH_NUMBER");
        var result_batchGetRegisteredBatch = imsApiService.batchGetRegisteredBatch(imsApiSessionContext,
            stationNumber,
            2,
            batchResultKeys
        );

        return_value = result_batchGetRegisteredBatch.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                errorCode: errorCode,
                errorMessage: "[batchGetRegisteredBatch] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_ID = result_batchGetRegisteredBatch.batchResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        logHandler.logMessage("#### TEMP_BATCH_ID : " + TEMP_BATCH_ID);

        // In case the produced melt batch is splitted between two casting lines
        // ---------------------------------------------------------------------


        if (destinationStations.length > 1) {
            //logHandler.logMessage("++++ "+i+" ---- "+destinationStations.length);
            // <batchGetBatchInfo> -------------------------------------------------
            var batchInfoFilter = new Array(new KeyValue("BATCH_NUMBER", TEMP_BATCH_ID));
            var batchInfoResultKeys = new Array("BATCH_QUANTITY_TOTAL");
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
                    errorCode: errorCode,
                    errorMessage: "[batchGetBatchInfo] " + errorMessage
                };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_BATCH_QTY = result_batchGetBatchInfo.batchInfoResultValues[0];
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            // <batchUnregisterBatch> ----------------------------------------------
            var result_batchUnregisterBatch = imsApiService.batchUnregisterBatch(imsApiSessionContext,
                stationNumber,
                TEMP_BATCH_ID,
                2,
                880,
                0,
                "-1"
            );

            return_value = result_batchUnregisterBatch.return_value;

            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                    errorCode: errorCode,
                    errorMessage: "[batchUnregisterBatch] " + errorMessage
                };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

            var TEMP_BATCH_ID_AR = [];

            for (var i = 0; i < destinationStations.length; i++) {
                //logHandler.logMessage("++1st loop++ "+i);
                var TEMP_OBJECT = fct_splitBatch(stationNumber, TEMP_BATCH_ID, destinationStations[i].proportion, i + 1);
                var TEMP_ERROR = TEMP_OBJECT.errorCode;


                if (TEMP_ERROR != 0) {

                    errorCode = TEMP_OBJECT.errorCode;
                    errorMessage = "[Error in fct_splitBatch] " + TEMP_OBJECT.errorMessage;

                    var resultData = {
                        errorCode: errorCode,
                        errorMessage: "" + errorMessage
                    };

                    result.return_value = errorCode;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }
                TEMP_BATCH_ID_AR.push(TEMP_OBJECT.batchId);
            }

            //logHandler.logMessage("++++ batch id array length "+TEMP_BATCH_ID_AR);
            for (var i = 0; i < TEMP_BATCH_ID_AR.length; i++) {
                //logHandler.logMessage("++++ batch id array  "+i);
                // <attribAppendAttributeValues> ---------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                var attributeUploadValues = new Array("CASTING_STATION", getStationFromField(destinationStations[i].destinationStation).station, "0",
                    "MELTING_STATION", getStationFromField(TEMP_FURNACE).station, "0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
                    stationNumber,
                    2,      //Container (2)
                    TEMP_BATCH_ID_AR[i],
                    "-1",
                    -1,
                    1,
                    attributeUploadKeys,
                    attributeUploadValues
                );

                return_value = result_attribAppendAttributeValues.return_value;

                if (return_value != 0) {
                    errorCode = return_value;
                    errorMessage = getImsApiErrorText(return_value);
                    var resultData = {
                        errorCode: errorCode,
                        errorMessage: "[attribAppendAttributeValues] " + errorMessage
                    };
                    result.outArgs = [JSON.stringify(resultData)];
                    result.return_value = return_value;
                    return result;
                }



                // <trUploadResultDataAndRecipe> ---------------------------------------
                var recipeVersionId = -1;
                var duplicateSerialNumber = 0;
                var bookDate = -1;
                var cycleTime = 0;
                var recipeVersionMode = -1;
                var resultUploadKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE", "UNIT");
                var resultUploadValues = new Array(0, 0, "DEGASSING_TIME", degassingTime, "(sec)",
                    0, 0, "DEGASSING_TEMPERATURE", degassingTemperature, "(degC)",
                    0, 0, "DEGASSING_DURATION", degassingDuration, "(sec)",
                    0, 0, "DEGASSING_WEIGHT", tappingWeight, "(kg)",
                    0, 0, "DEGASSING_GAS_CONTENT", gasContent, "",
                    0, 0, "DEGASSING_THERMOTEST", thermotest, "",
                    0, 0, "DEGASSING_CHEMICAL_COMPOSITION", chemicalComposition, "",
                    0, 0, "DEGASSING_LADLE_CLEANING", ladleCleaning, "",
                    0, 0, "DEGASSING_KBlock%", comp1, "(%)",
                    0, 0, "DEGASSING_AlTi5b1", comp2, "(%)",
                    0, 0, "DEGASSING_AlMg99", comp3, "(%)",
                    0, 0, "DEGASSING_AlSr10", comp4, "(%)",
                    0, 0, "DEGASSING_ALLOY", TEMP_ALLOY, "",
                    0, 0, "DEGASSING_SUPPLIER", TEMP_SUPPLIER, "",
                    0, 0, "DEGASSING_FURNACE", TEMP_FURNACE, "",
                    0, 0, "DEGASSING_POT", TEMP_POT, ""
                );

                var result_trUploadResultDataAndRecipeResult = imsApiService.trUploadResultDataAndRecipe(imsApiSessionContext,
                    stationNumber,
                    2,
                    recipeVersionId,
                    TEMP_BATCH_ID_AR[i],
                    -1,
                    0,
                    duplicateSerialNumber,
                    bookDate,
                    cycleTime,
                    recipeVersionMode,
                    resultUploadKeys,
                    resultUploadValues
                );

                return_value = result_trUploadResultDataAndRecipeResult.return_value;

                if (return_value != 0) {
                    errorCode = return_value;
                    errorMessage = getImsApiErrorText(return_value);
                    var resultData = {
                        errorCode: errorCode,
                        errorMessage: "[trUploadResultDataAndRecipe] " + errorMessage
                    };
                    result.outArgs = [JSON.stringify(resultData)];
                    result.return_value = return_value;
                    return result;
                }

                // Melt batch setup (one batch to one station)
                var res = fct_updateMaterialSetup(getStationFromField(destinationStations[i].destinationStation).station, TEMP_BATCH_ID_AR[i]);

                // var materialSetupUploadKeys = new Array("ERROR_CODE", "MATERIAL_BIN_NUMBER", "SETUP_POSITION", "SETUP_STATE");
                // var materialSetupUploadValues = new Array("0",TEMP_BATCH_ID_AR[i],TEMP_BATCH_ID_AR[i],0);

                // var compPositionsUploadKeys = new Array();
                // var compPositionsUploadValues = new Array();
                // var result_setupUpdateMaterialSetup = imsApiService.setupUpdateMaterialSetup(imsApiSessionContext, 
                //         getStationFromField(destinationStations[i].destinationStation).station,
                //         2,
                //         "-1",
                //         "-1",
                //         "-1",
                //         materialSetupUploadKeys,
                //         materialSetupUploadValues,
                //         compPositionsUploadKeys,
                //         compPositionsUploadValues);

                // return_value = result_setupUpdateMaterialSetup.return_value;

                // if (return_value != 0) {
                //     errorCode = return_value;
                //     errorMessage = getImsApiErrorText(return_value);
                //     var resultData = {
                //             errorCode : errorCode,
                //             errorMessage : "[setupUpdateMaterialSetup] " + errorMessage
                //         };
                //     result.outArgs = [JSON.stringify(resultData)];
                //     result.return_value = return_value;
                //     return result;
                // }

                // var result_setupStateChange = imsApiService.setupStateChange(imsApiSessionContext,
                //     getStationFromField(destinationStations[i].destinationStation).station,
                //     2,
                //     "-1",
                //     "-1",
                //     -1,
                //     0);

                // return_value = result_setupStateChange.return_value;

                // if (return_value != 0) {
                //     errorCode = return_value;
                //     errorMessage = getImsApiErrorText(return_value);
                //     var resultData = {
                //             errorCode : errorCode,
                //             errorMessage : "[setupStateChange] " + errorMessage
                //         };
                //     result.outArgs = [JSON.stringify(resultData)];
                //     result.return_value = return_value;
                //     return result;
                // }
            }

        }
        else {
            // In case the produced melt batch is assigned to one casting line
            // ---------------------------------------------------------------------

            // <attribAppendAttributeValues> ---------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
            var attributeUploadValues = new Array("CASTING_STATION", getStationFromField(destinationStations[0].destinationStation).station, "0",
                "MELTING_STATION", getStationFromField(TEMP_FURNACE).station, "0");
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
                stationNumber,
                2,      //Container (2)
                TEMP_BATCH_ID,
                "-1",
                -1,
                1,
                attributeUploadKeys,
                attributeUploadValues
            );

            return_value = result_attribAppendAttributeValues.return_value;

            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                    errorCode: errorCode,
                    errorMessage: "[attribAppendAttributeValues] " + errorMessage
                };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

            // <batchGetBatchInfo> -------------------------------------------------
            var batchInfoFilter = new Array(new KeyValue("BATCH_NUMBER", TEMP_BATCH_ID));
            var batchInfoResultKeys = new Array("BATCH_QUANTITY_TOTAL");
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
                    errorCode: errorCode,
                    errorMessage: "[batchGetBatchInfo] " + errorMessage
                };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_BATCH_QTY = result_batchGetBatchInfo.batchInfoResultValues[0];
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            // <batchUnregisterBatch> ----------------------------------------------
            var result_batchUnregisterBatch = imsApiService.batchUnregisterBatch(imsApiSessionContext,
                stationNumber,
                TEMP_BATCH_ID,
                2,
                880,
                0,
                "-1"
            );

            return_value = result_batchUnregisterBatch.return_value;

            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                    errorCode: errorCode,
                    errorMessage: "[batchUnregisterBatch] " + errorMessage
                };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

            // <trUploadResultDataAndRecipe> ---------------------------------------
            var recipeVersionId = -1;
            var duplicateSerialNumber = 0;
            var bookDate = -1;
            var cycleTime = 0;
            var recipeVersionMode = -1;
            var resultUploadKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE", "UNIT");
            var resultUploadValues = new Array(0, 0, "DEGASSING_TIME", degassingTime, "(sec)",
                0, 0, "DEGASSING_TEMPERATURE", degassingTemperature, "(degC)",
                0, 0, "DEGASSING_WEIGHT", tappingWeight, "(kg)",
                0, 0, "DEGASSING_DURATION", degassingDuration, "(sec)",
                0, 0, "DEGASSING_GAS_CONTENT", gasContent, "",
                0, 0, "DEGASSING_THERMOTEST", thermotest, "",
                0, 0, "DEGASSING_CHEMICAL_COMPOSITION", chemicalComposition, "",
                0, 0, "DEGASSING_LADLE_CLEANING", ladleCleaning, "",
                0, 0, "DEGASSING_KBlock%", comp1, "(%)",
                0, 0, "DEGASSING_AlTi5b1", comp2, "(%)",
                0, 0, "DEGASSING_AlMg99", comp3, "(%)",
                0, 0, "DEGASSING_AlSr10", comp4, "(%)",
                0, 0, "DEGASSING_ALLOY", TEMP_ALLOY, "",
                0, 0, "DEGASSING_SUPPLIER", TEMP_SUPPLIER, "",
                0, 0, "DEGASSING_FURNACE", TEMP_FURNACE, "",
                0, 0, "DEGASSING_POT", TEMP_POT, ""
            );

            var result_trUploadResultDataAndRecipeResult = imsApiService.trUploadResultDataAndRecipe(imsApiSessionContext,
                stationNumber,
                2,
                recipeVersionId,
                TEMP_BATCH_ID,
                -1,
                0,
                duplicateSerialNumber,
                bookDate,
                cycleTime,
                recipeVersionMode,
                resultUploadKeys,
                resultUploadValues
            );

            return_value = result_trUploadResultDataAndRecipeResult.return_value;

            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                    errorCode: errorCode,
                    errorMessage: "[trUploadResultDataAndRecipe] " + errorMessage
                };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

            // Melt batch setup (one batch to one station)

            var res = fct_updateMaterialSetup(getStationFromField(destinationStations[0].destinationStation).station, TEMP_BATCH_ID);

            // var materialSetupUploadKeys = new Array("ERROR_CODE", "MATERIAL_BIN_NUMBER", "SETUP_POSITION", "SETUP_STATE");
            // var materialSetupUploadValues = new Array("0",TEMP_BATCH_ID,TEMP_BATCH_ID,0);

            // var compPositionsUploadKeys = new Array();
            // var compPositionsUploadValues = new Array();
            // var result_setupUpdateMaterialSetup = imsApiService.setupUpdateMaterialSetup(imsApiSessionContext, 
            //         getStationFromField(destinationStations[0].destinationStation).station,
            //         2,
            //         "-1",
            //         "-1",
            //         "-1",
            //         materialSetupUploadKeys,
            //         materialSetupUploadValues,
            //         compPositionsUploadKeys,
            //         compPositionsUploadValues);

            // return_value = result_setupUpdateMaterialSetup.return_value;

            // if (return_value != 0) {
            //     errorCode = return_value;
            //     errorMessage = getImsApiErrorText(return_value);
            //     var resultData = {
            //             errorCode : errorCode,
            //             errorMessage : "[setupUpdateMaterialSetup] " + errorMessage
            //         };
            //     result.outArgs = [JSON.stringify(resultData)];
            //     result.return_value = return_value;
            //     return result;
            // }

            // var result_setupStateChange = imsApiService.setupStateChange(imsApiSessionContext,
            //     getStationFromField(destinationStations[0].destinationStation).station,
            //     2,
            //     "-1",
            //     "-1",
            //     -1,
            //     0);

            // return_value = result_setupStateChange.return_value;

            // if (return_value != 0) {
            //     errorCode = return_value;
            //     errorMessage = getImsApiErrorText(return_value);
            //     var resultData = {
            //             errorCode : errorCode,
            //             errorMessage : "[setupStateChange] " + errorMessage
            //         };
            //     result.outArgs = [JSON.stringify(resultData)];
            //     result.return_value = return_value;
            //     return result;
            // }
        }
        // JSON result --------------------------------------------------------- 
        var resultData = {
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeUnregisterContainer failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfDeGetMeltingInformation(jsonData) {
    var result = new Result_customFunctionCommon();
    try {

        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        stationNumber = "04002014";


        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var meltBatchId = "";

        var TEMP_ST_AR = [];
        var TEMP_ST_DESC_AR = [];
        var TEMP_BATCH_ID_AR = [];

        // API integration -----------------------------------------------------
        var machineAssetStructureFilter = new Array(new KeyValue("CELL_NUMBER", "020"),
            new KeyValue("DISSOLVING_LEVEL", 1),
            new KeyValue("MACHINE_GROUP_NUMBER", "020020"));
        var machineAssetStructureResultKeys = new Array("STATION_NUMBER", "STATION_DESC");
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
                errorCode: errorCode,
                errorMessage: "[mdataGetMachineAssetStructure] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        for (var x = 0; x < resut_mdataGetMachineAssetStructure.machineAssetStructureValues.length / 2; x++) {
            TEMP_ST_AR.push("" + resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x * 2 + 0]);
            TEMP_ST_DESC_AR.push("" + resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x * 2 + 1]);
        }

        for (var x = 0; x < TEMP_ST_AR.length; x++) {
            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("BATCH_LIST");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
                stationNumber,
                7,
                TEMP_ST_AR[x],
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys);

            var return_value = result_attribGetAttributeValues.return_value;

            if (return_value == 0) {
                if (result_attribGetAttributeValues.attributeResultValues.length > 0) {
                    for (var y = 0; y < result_attribGetAttributeValues.attributeResultValues.length / 3; y++) {
                        TEMP_BATCH_ID_AR.push("" + result_attribGetAttributeValues.attributeResultValues[y * 3 + 1]);
                    }
                }
                else {
                    TEMP_BATCH_ID_AR.push("");
                }

            }
            else {
                TEMP_BATCH_ID_AR.push("");
            }
        }

        for (var i = 0; i < TEMP_ST_AR.length; i++) {
            TEMP_ST_AR[i] += " [" + TEMP_ST_DESC_AR[i] + "]";
        }
        // JSON result ---------------------------------------------------------     

        var resultData = {
            meltingStations: TEMP_ST_AR,
            meltingStationsDesc: TEMP_ST_DESC_AR,
            meltBatches: TEMP_BATCH_ID_AR,
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeGetMeltingInformation failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}



function cfDeGetCastingInformation(jsonData) {
    var result = new Result_customFunctionCommon();
    try {

        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        stationNumber = "04002014";


        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var meltBatchId = "";


        // API integration -----------------------------------------------------

        var TEMP_ST_AR = [];
        var TEMP_ST_DESC_AR = [];


        // API integration -----------------------------------------------------
        var machineAssetStructureFilter = new Array(new KeyValue("CELL_NUMBER", "060"),
            new KeyValue("DISSOLVING_LEVEL", 1),
            new KeyValue("MACHINE_GROUP_NUMBER", "060020"));
        var machineAssetStructureResultKeys = new Array("STATION_NUMBER", "STATION_DESC");
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
                errorCode: errorCode,
                errorMessage: "[mdataGetMachineAssetStructure] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        for (var x = 0; x < resut_mdataGetMachineAssetStructure.machineAssetStructureValues.length / 2; x++) {
            var st = "" + resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x * 2 + 0];
            if (isMainCastingStation(st)) {
                TEMP_ST_AR.push("" + resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x * 2 + 0]);
                TEMP_ST_DESC_AR.push("" + resut_mdataGetMachineAssetStructure.machineAssetStructureValues[x * 2 + 1]);
            }
        }

        for (var i = 0; i < TEMP_ST_AR.length; i++) {
            TEMP_ST_AR[i] += " [" + TEMP_ST_DESC_AR[i] + "]";
        }

        // JSON result ---------------------------------------------------------        
        var resultData = {
            castingStations: TEMP_ST_AR,
            castingStationsDesc: TEMP_ST_DESC_AR,
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeGetCastingInformation failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfDeGetAlloy(jsonData) {
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
        var res = fct_getAlloys(configContent).alloys;

        // JSON result ---------------------------------------------------------        
        var resultData = {
            alloys: res,
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeGetAlloy failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfDeGetOperator(jsonData) {
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
            operators: res,
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeGetOperator failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfDeGetSupplier(jsonData) {
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
        var res = fct_getSuppliers(configContent).suppliers;

        // JSON result ---------------------------------------------------------        
        var resultData = {
            suppliers: res,
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeGetSupplier failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfDeGetWeight(jsonData) {
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
        var res = fct_getWeights(configContent).weights;

        // JSON result ---------------------------------------------------------        
        var resultData = {
            weights: res,
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeGetWeight failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfDeGetPot(jsonData) {
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
        var res = fct_getPots(configContent).pots;

        // JSON result ---------------------------------------------------------        
        var resultData = {
            pots: res,
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeGetPot failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfDeGetStationInformation(jsonData) {
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

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("DEGASSING_INFO");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            stationNumber,
            7,
            stationNumber,
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
                errorCode: errorCode,
                errorMessage: "[attribGetAttributeValues] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DEGASSING_INFO = "" + result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_FURNACE = TEMP_DEGASSING_INFO.split("|")[0];
        var TEMP_SUPPLIER = TEMP_DEGASSING_INFO.split("|")[1];
        var TEMP_ALLOY = TEMP_DEGASSING_INFO.split("|")[2];
        var TEMP_POT = TEMP_DEGASSING_INFO.split("|")[3];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("DEGASSING_DURATION");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            stationNumber,
            7,
            TEMP_FURNACE,
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
                errorCode: errorCode,
                errorMessage: "[attribGetAttributeValues] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DEGASSING_DURATION = result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <batchGetRegisteredBatch> -------------------------------------------------
        var batchResultKeys = new Array("BATCH_NUMBER");
        var result_batchGetRegisteredBatch = imsApiService.batchGetRegisteredBatch(imsApiSessionContext,
            stationNumber,
            2,
            batchResultKeys
        );

        return_value = result_batchGetRegisteredBatch.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                errorCode: errorCode,
                errorMessage: "[batchGetRegisteredBatch] " + errorMessage
            };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_ID = result_batchGetRegisteredBatch.batchResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // JSON result ---------------------------------------------------------        
        var resultData = {
            furnace: "" + TEMP_FURNACE,
            alloy: "" + TEMP_ALLOY,
            supplier: "" + TEMP_SUPPLIER,
            pot: "" + TEMP_POT,
            registeredBatchId: "" + TEMP_BATCH_ID,
            degassingDuration: "" + TEMP_DEGASSING_DURATION,
            setupTime: "xx s",
            errorCode: errorCode,
            errorMessage: "[OK] " + errorMessage
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        //logHandler.logMessage("Custom function cfDeGetStationInformation failed: " + e);
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
    //logHandler.logMessage("OfficeClientController.getImsApiErrorText() Code: " + retCode);
    var errorText = "";
    var result;
    try {
        result = imsApiService.imsapiGetErrorText(imsApiSessionContext, retCode);
    } catch (th) {
        //logHandler.logMessage("custom function resetPipe failed: " + th);
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

function getStationFromField(desc) {
    var pos = desc.indexOf(" ");
    var st = "";
    if (pos > 0) {
        st = desc.substring(0, pos);
    }
    else {
        st = desc;
    }

    return {
        station: st,
        pos: pos
    };
}

function isMainCastingStation(station) {
    var state = false;
    var st = station.substring(8, 10);
    if (st === "01") state = true;
    return state;
}


function fct_splitBatch(stationNumber, batchId, portion, number) {

    // <batchGetRegisteredBatch> -----------------------------------------------
    var batchResultResultKeys = new Array("BATCH_NUMBER");
    var result_batchGetRegisteredBatch = imsApiService.batchGetRegisteredBatch(imsApiSessionContext,
        stationNumber,
        2,
        batchResultResultKeys);

    return_value = result_batchGetRegisteredBatch.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = getImsApiErrorText(return_value);
        var resultData = {
            errorCode: errorCode,
            errorMessage: "[fct_splitBatch-batchGetRegisteredBatch] " + errorMessage
        };

        return resultData;
    }
    var TEMP_OLD_BATCH = result_batchGetRegisteredBatch.batchResultValues[0];

    if (TEMP_OLD_BATCH != "") {
        // <batchUnregisterBatch> -----------------------------------------------
        var result_batchUnregisterBatch = imsApiService.batchUnregisterBatch(imsApiSessionContext,
            stationNumber,
            TEMP_OLD_BATCH,
            2,
            880,
            1,
            "-1");

        return_value = result_batchUnregisterBatch.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                errorCode: errorCode,
                errorMessage: "[fct_splitBatch-batchUnregisterBatch] " + errorMessage
            };

            return resultData;
        }
    }


    // <trGetSerialNumberInfo> -----------------------------------------------
    var serialNumberResultKeys = new Array("WORKORDER_NUMBER");
    var result_trGetSerialNumberInfo = imsApiService.trGetSerialNumberInfo(imsApiSessionContext,
        stationNumber,
        batchId,
        "-1",
        serialNumberResultKeys);

    return_value = result_trGetSerialNumberInfo.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = getImsApiErrorText(return_value);
        var resultData = {
            errorCode: errorCode,
            errorMessage: "[fct_splitBatch-trGetSerialNumberInfo] " + errorMessage
        };

        return resultData;
    }
    //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    var TEMP_WORKORDER = result_trGetSerialNumberInfo.serialNumberResultValues[0];
    //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

    // <batchAssignBatchNumberToWorkOrder> --------------------------------------------- 
    var result_batchAssignBatchNumberToWorkOrder = imsApiService.batchAssignBatchNumberToWorkOrder(imsApiSessionContext,
        stationNumber,
        TEMP_WORKORDER,
        "-1",
        "-1",
        "-1",
        "-1",
        2,
        batchId + "-" + number,
        0,
        0);

    var return_value = result_batchAssignBatchNumberToWorkOrder.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = getImsApiErrorText(return_value);
        var resultData = {
            errorCode: errorCode,
            errorMessage: "[fct_splitBatch-batchAssignBatchNumberToWorkOrder] " + errorMessage
        };

        return resultData;
    }

    var quantity = (880 * parseInt(portion)) / 100;

    // <mlChangeMaterialBinData> --------------------------------------------- 
    var materialBinUploadValues = new Array(new KeyValue("MATERIAL_BIN_QTY_TOTAL", quantity));
    var result_mlChangeMaterialBinData = imsApiService.mlChangeMaterialBinData(imsApiSessionContext,
        stationNumber,
        batchId + "-" + number,
        materialBinUploadValues);

    var return_value = result_mlChangeMaterialBinData.return_value;

    if (return_value != 0) {
        var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
        result.errorString = "fct_splitBatch-mlChangeMaterialBinData|" + return_value + "|" + res.errorString;
        result.return_value = return_value;
        return result;
    }


    // <batchRegisterBatch> -----------------------------------------------
    var result_batchRegisterBatch = imsApiService.batchRegisterBatch(imsApiSessionContext,
        stationNumber,
        batchId + "-" + number,
        2,
        1,
        "-1");

    return_value = result_batchRegisterBatch.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = getImsApiErrorText(return_value);
        var resultData = {
            errorCode: errorCode,
            errorMessage: "[fct_splitBatch-batchRegisterBatch] " + errorMessage
        };

        return resultData;
    }

    // <batchSplitBatchNumberToSerialNumber> --------------------------------------------- 
    var result_batchSplitBatchNumberToSerialNumber = imsApiService.batchSplitBatchNumberToSerialNumber(imsApiSessionContext,
        stationNumber,
        batchId + "-" + number,
        "-1",
        batchId,
        2,
        quantity,
        0,
        1);

    var return_value = result_batchSplitBatchNumberToSerialNumber.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = getImsApiErrorText(return_value);
        var resultData = {
            errorCode: errorCode,
            errorMessage: "[fct_splitBatch-batchSplitBatchNumberToSerialNumber] " + errorMessage
        };

        return resultData;
    }

    // <batchUnregisterBatch> -----------------------------------------------
    var result_batchUnregisterBatch = imsApiService.batchUnregisterBatch(imsApiSessionContext,
        stationNumber,
        batchId + "-" + number,
        2,
        quantity,
        1,
        "-1");

    return_value = result_batchUnregisterBatch.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = getImsApiErrorText(return_value);
        var resultData = {
            errorCode: errorCode,
            errorMessage: "[fct_splitBatch-batchUnregisterBatch] " + errorMessage
        };

        return resultData;
    }

    return {
        errorCode: 0,
        errorMessage: "",
        batchId: batchId + "-" + number
    }
}


// #############################################################################
function zeroPad(numberStr) {
    return numberStr > 9 ? "" + numberStr : "0" + numberStr;
}
// #############################################################################


// #############################################################################
function getStationId(station, id) {
    var temp = "";

    var l = station.length;

    var st = station.substr(0, l - 2);
    var nb = zeroPad(station.substr(-2));
    var sid = "" + zeroPad(id);

    temp = "" + st + sid;

    return {
        station: temp,
        id: id
    }
}
// #############################################################################

function fct_storeMaterial(stationNumber, materialBin, storage) {
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";

    var binLocationBarCode = "";
    var transactionType = 310; // Material reservation for work order


    //--------------------------------------------------------------------------
    var result_mlSetMaterialBinLocation = imsApiService.mlSetMaterialBinLocation(imsApiSessionContext,
        stationNumber,
        materialBin,
        -1,
        storage,
        binLocationBarCode,
        transactionType);

    return_value = result_mlSetMaterialBinLocation.return_value;
    //--------------------------------------------------------------------------

    return {
        errorCode: return_value,
        errorMessage: errorMessage,
    };
}