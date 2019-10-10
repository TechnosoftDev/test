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
 Name:                  Date:           Customer:        Function:              Comment:

 Sami Akkari            2019-06-03      Le Belier        cfOpc                  OPC integration 
 Sami Akkari            2019-06-13      Le Belier        cfOpc                  Add packPanel and unpackPanel
 Sami Akkari            2019-06-24      Le Belier        cfOpc                  Add getUidForManual
 Sami Akkari            2019-07-13      Le Belier        cfOpc                  Change Max quantity for batches
 Sami Akkari            2019-07-13      Le Belier        cfOpc                  Add getVirtualUids
 Sami Akkari            2019-08-07      Le Belier        cfOpc                  OPC integration - add upload machine conditions function for sand core machine
 Sami Akkari            2019-08-26      Le Belier        cfOpc                  Add function for incrementing shoot number and interlocking the packing in HMI
 Sami Akkari            2019-08-07      Le Belier        cfOpc                  OPC integration - add upload machine conditions function for SIIF stations
 Sami Akkari            2019-08-31      Le Belier        cfOpc                  Update shooting gap feature
 Sami Akkari            2019-09-02      Le Belier        cfOpc                  Add uploadProcessData for resin measurements
 Faouzi Ben Mabrouk     2019-09-04      Le Belier        cfOpc                  Create Melt Batch with TOTAL QUANTITY
 Faouzi Ben Mabrouk     2019-09-05      Le Belier        cfOpc                  Alert management for Resin 1 and Resin 2
 Faouzi Ben Mabrouk     2019-09-10      Le Belier        cfOpc                  Implement configuration functions

 **/

importPackage(com.itac.mes.api.custom);
importPackage(java.lang);
importPackage(java.util);
importPackage(java.text);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.util.constants.imsapi);

//SECTION 2019-10-10 fct_readDocument(stationNumber)
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

//SECTION 2019-10-10 fct_getReference(configContent, code, side)
function fct_getReference(configContent, code, side) {
    var errorCode = 0;
    var errorMessage = "";
    var productFamily = "-1";
    var partNumber = "-1";

    var configuration = configContent.monoblocProducts;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".monoblocProducts is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            partNumber: partNumber,
            productFamily: productFamily
        }
    }

    var SIDE_AR = [];
    var PN_AR = [];

    if (code != "") {
        for (var i = 0; i < configuration.length; i++) {
            if (configuration[i].code == code) {
                if (side != "") {
                    SIDE_AR = configuration[i].side.split("|");
                    var pos = Arrays.asList(SIDE_AR).indexOf(side);
                    if (pos > -1) {
                        PN_AR = configuration[i].linkedPartNumbers.split("|");
                        partNumber = PN_AR[pos];
                    }
                }
                else {
                    productFamily = configuration[i].productFamily;
                }
            }
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        partNumber: partNumber,
        productFamily: productFamily
    }
}

//SECTION 2019-10-10 fct_getTopicTemplate(configContent, stationNumber)
function fct_getTopicTemplate(configContent, stationNumber) {
    var errorCode = 0;
    var errorMessage = "";
    var topicTemplate = "";

    var configuration = configContent.plcSettings.topicTemplates;
    if (configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".plcSettings.topicTemplates is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            topicTemplate: topicTemplate
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].stationNumber == stationNumber) {
            topicTemplate = configuration[i].topicTemplate;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        topicTemplate: topicTemplate
    }
}

function generateMeltBatch() {

    var inArgs = generateMeltBatch.arguments;
    var result = new Result_customFunctionCommon();
    try {
        var tempOb = parseGenerateMeltBatch(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------

        // <trGetStationSetting> -----------------------------------------------
        var stationSettingResultKeys = new Array("WORKORDER_NUMBER");
        var result_trGetStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            stationSettingResultKeys);

        return_value = result_trGetStationSetting.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "generateMeltBatch:trGetStationSetting|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        var TEMP_WORKORDER = result_trGetStationSetting.stationSettingResultValues[0];

        // <trGetNextSerialNumber> -----------------------------------------------
        var result_trGetNextSerialNumber = imsApiService.trGetNextSerialNumber(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_WORKORDER,
            "-1",
            1);

        return_value = result_trGetNextSerialNumber.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "generateMeltBatch:trGetNextSerialNumber|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        var TEMP_NEW_BATCH = result_trGetNextSerialNumber.serialNumberArray[0].serialNumber;

        // <batchGetRegisteredBatch> -----------------------------------------------
        var batchResultResultKeys = new Array("BATCH_NUMBER");
        var result_batchGetRegisteredBatch = imsApiService.batchGetRegisteredBatch(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            2,
            batchResultResultKeys);

        return_value = result_batchGetRegisteredBatch.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "generateMeltBatch:batchGetRegisteredBatch|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        var TEMP_OLD_BATCH = result_batchGetRegisteredBatch.batchResultValues[0];

        if (TEMP_OLD_BATCH != "") {
            // <batchUnregisterBatch> -----------------------------------------------
            var result_batchUnregisterBatch = imsApiService.batchUnregisterBatch(imsApiSessionContext,
                tempOb.IN_STATION_NUMBER,
                TEMP_OLD_BATCH,
                2,
                0,
                1,
                "-1");

            return_value = result_batchUnregisterBatch.return_value;

            if (return_value != 0) {
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "generateMeltBatch:batchUnregisterBatch|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }
        }
        // <batchAssignBatchNumberToWorkOrder> --------------------------------------------- 
        var result_batchAssignBatchNumberToWorkOrder = imsApiService.batchAssignBatchNumberToWorkOrder(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_WORKORDER,
            "-1",
            "-1",
            "-1",
            "-1",
            2,
            TEMP_NEW_BATCH,
            0,
            0);

        var return_value = result_batchAssignBatchNumberToWorkOrder.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "generateMeltBatch:batchAssignBatchNumberToWorkOrder|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <mlChangeMaterialBinData> --------------------------------------------- 
        var materialBinUploadValues = new Array(new KeyValue("MATERIAL_BIN_QTY_TOTAL", 999999));
        var result_mlChangeMaterialBinData = imsApiService.mlChangeMaterialBinData(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_NEW_BATCH,
            materialBinUploadValues);

        var return_value = result_mlChangeMaterialBinData.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "generateMeltBatch:mlChangeMaterialBinData|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <batchRegisterBatch> -----------------------------------------------
        var result_batchRegisterBatch = imsApiService.batchRegisterBatch(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_NEW_BATCH,
            2,
            1,
            "-1");

        return_value = result_batchRegisterBatch.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "generateMeltBatch:batchRegisterBatch|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("MAIN_BATCH", TEMP_NEW_BATCH, "0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            -1,
            1,
            attributeUploadKeys,
            attributeUploadValues);

        var return_value = result_attribAppendAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "generateMeltBatch:attribAppendAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("COUNTER", 0, "0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            2,
            TEMP_NEW_BATCH,
            "-1",
            -1,
            1,
            attributeUploadKeys,
            attributeUploadValues);

        var return_value = result_attribAppendAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "generateMeltBatch:attribAppendAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        tempOb.OUT_BATCH_ID = TEMP_NEW_BATCH;

        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.generateMeltBatch finished.");
        return resultGenerateMeltBatch("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.generateMeltBatch failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function generateMeltBatchOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.OUT_BATCH_ID = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseGenerateMeltBatch(inArgs) {
    var tempObject = new generateMeltBatchOb();
    tempObject.IN_STATION_NUMBER = inArgs[0];
    return tempObject;
}

function resultGenerateMeltBatch(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + " Generated Batch : " + tempOb.OUT_BATCH_ID;
    result.outArgs[0] += "\n" + "";
    logHandler.logMessage("#### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

function releaseMeltBatch() {
    var inArgs = releaseMeltBatch.arguments;
    var result = new Result_customFunctionCommon();
    try {
        var tempOb = parseReleaseMeltBatch(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        // <trGetStationSetting> -----------------------------------------------
        var stationSettingResultKeys = new Array("WORKORDER_NUMBER");
        var result_trGetStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            stationSettingResultKeys);
        return_value = result_trGetStationSetting.return_value;
        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:trGetStationSetting|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        var TEMP_WORKORDER = result_trGetStationSetting.stationSettingResultValues[0];

        // <attribGetAttributeValues> ---------------------------------------------------------
        var attributeCodeArray = new Array("MAIN_BATCH");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:attribGetAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        var TEMP_MAIN_BATCH = result_attribGetAttributeValues.attributeResultValues[1];

        // <batchGetRegisteredBatch> -----------------------------------------------
        var batchResultResultKeys = new Array("BATCH_NUMBER");
        var result_batchGetRegisteredBatch = imsApiService.batchGetRegisteredBatch(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            2,
            batchResultResultKeys);

        return_value = result_batchGetRegisteredBatch.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:batchGetRegisteredBatch|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        var TEMP_OLD_BATCH = result_batchGetRegisteredBatch.batchResultValues[0];

        if (TEMP_OLD_BATCH != "") {
            // <batchUnregisterBatch> -----------------------------------------------
            var result_batchUnregisterBatch = imsApiService.batchUnregisterBatch(imsApiSessionContext,
                tempOb.IN_STATION_NUMBER,
                TEMP_OLD_BATCH,
                2,
                10000,
                1,
                "-1");

            return_value = result_batchUnregisterBatch.return_value;

            if (return_value != 0) {
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "releaseMeltBatch:batchUnregisterBatch|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }
        }

        // <attribGetAttributeValues> ---------------------------------------------------------
        var attributeCodeArray = new Array("COUNTER");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            2,
            TEMP_MAIN_BATCH,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:attribGetAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        var TEMP_COUNTER = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);
        TEMP_COUNTER += 1;

        // <batchAssignBatchNumberToWorkOrder> --------------------------------------------- 
        var result_batchAssignBatchNumberToWorkOrder = imsApiService.batchAssignBatchNumberToWorkOrder(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_WORKORDER,
            "-1",
            "-1",
            "-1",
            "-1",
            2,
            TEMP_MAIN_BATCH + "-" + TEMP_COUNTER,
            0,
            0);

        var return_value = result_batchAssignBatchNumberToWorkOrder.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:batchAssignBatchNumberToWorkOrder|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // ANCHOR Added to update max melt batchquantity
        // <mlChangeMaterialBinData> --------------------------------------------- 
        var materialBinUploadValues = new Array(new KeyValue("MATERIAL_BIN_QTY_TOTAL", tempOb.IN_SUB_BATCH_QUANTITY));
        var result_mlChangeMaterialBinData = imsApiService.mlChangeMaterialBinData(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_MAIN_BATCH + "-" + TEMP_COUNTER,
            materialBinUploadValues);

        var return_value = result_mlChangeMaterialBinData.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:mlChangeMaterialBinData|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("COUNTER", TEMP_COUNTER, "0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            2,
            TEMP_MAIN_BATCH,
            "-1",
            -1,
            1,
            attributeUploadKeys,
            attributeUploadValues);

        var return_value = result_attribAppendAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:attribAppendAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <batchRegisterBatch> -----------------------------------------------
        var result_batchRegisterBatch = imsApiService.batchRegisterBatch(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_MAIN_BATCH + "-" + TEMP_COUNTER,
            2,
            1,
            "-1");

        return_value = result_batchRegisterBatch.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:batchRegisterBatch|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <batchSplitBatchNumberToSerialNumber> --------------------------------------------- 
        var result_batchSplitBatchNumberToSerialNumber = imsApiService.batchSplitBatchNumberToSerialNumber(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_MAIN_BATCH + "-" + TEMP_COUNTER,
            "-1",
            TEMP_MAIN_BATCH,
            2,
            tempOb.IN_SUB_BATCH_QUANTITY,
            0,
            1);

        var return_value = result_batchSplitBatchNumberToSerialNumber.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:batchSplitBatchNumberToSerialNumber|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        // <batchUnregisterBatch> -----------------------------------------------
        var result_batchUnregisterBatch = imsApiService.batchUnregisterBatch(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_MAIN_BATCH + "-" + TEMP_COUNTER,
            2,
            tempOb.IN_SUB_BATCH_QUANTITY,
            1,
            "-1");

        return_value = result_batchUnregisterBatch.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:batchUnregisterBatch|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("BATCH_LIST", TEMP_MAIN_BATCH + "-" + TEMP_COUNTER, "0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            -1,
            1,
            attributeUploadKeys,
            attributeUploadValues);

        var return_value = result_attribAppendAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "releaseMeltBatch:attribAppendAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        tempOb.OUT_BATCH_ID = TEMP_MAIN_BATCH;
        tempOb.OUT_SUB_BATCH_ID = TEMP_MAIN_BATCH + "-" + TEMP_COUNTER;
        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.releaseMeltBatch finished.");
        return resultReleaseMeltBatch("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.releaseMeltBatch failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function releaseMeltBatchOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_SUB_BATCH_QUANTITY = "";
    this.OUT_BATCH_ID = "";
    this.OUT_SUB_BATCH_ID = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseReleaseMeltBatch(inArgs) {
    var tempObject = new releaseMeltBatchOb();
    tempObject.IN_STATION_NUMBER = inArgs[0];
    tempObject.IN_SUB_BATCH_QUANTITY = inArgs[1];
    return tempObject;
}

function resultReleaseMeltBatch(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + " Main Batch : " + tempOb.OUT_BATCH_ID;
    result.outArgs[0] += "\n" + " Generated Sub-Batch : " + tempOb.OUT_SUB_BATCH_ID;
    result.outArgs[0] += "\n" + "";
    logHandler.logMessage("#### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

function uploadTransferTime() {
    var inArgs = uploadTransferTime.arguments;
    try {
        var tempOb = parseUploadTransferTime(inArgs);
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------

        // <trUploadStationResult> ---------------------------------------------
        var stationResultUploadKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE", "UNIT");
        var stationResultUploadValues = new Array(0, "0", "TRANSFER_TIME", tempOb.IN_TRANSFER_TIME, "sec");
        var result_trUploadStationResult = imsApiService.trUploadStationResult(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            "-1",
            -1,
            "-1",
            "-1",
            "-1",
            -1,
            1,
            stationResultUploadKeys,
            stationResultUploadValues
        );

        var return_value = result_trUploadStationResult.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "uploadTransferTime:trUploadStationResult|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        tempOb.OUT_TRANSFER_TIME = tempOb.IN_TRANSFER_TIME;
        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.uploadTransferTime finished.");
        return resultUploadTransferTime("CF", 0, "PASS", tempOb);
    } catch (e) {
        logHandler.logMessage("custom function OPC.uploadTransferTime failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function uploadTransferTimeOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_TRANSFER_TIME = "";
    this.OUT_TRANSFER_TIME = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUploadTransferTime(inArgs) {
    var tempObject = new uploadTransferTimeOb();
    tempObject.IN_STATION_NUMBER = "" + inArgs[0];
    tempObject.IN_TRANSFER_TIME = "" + inArgs[1];
    return tempObject;
}

function resultUploadTransferTime(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + " Transfer Time uploaded : " + tempOb.OUT_TRANSFER_TIME;
    result.outArgs[0] += "\n" + "";
    logHandler.logMessage("#### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}
// #############################################################################
// #############################################################################
// #############################################################################

function packPanel() {
    var inArgs = packPanel.arguments;
    var result = new Result_customFunctionCommon();
    try {
        var tempOb = parsePackPanel(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        //Creating material bin for scanned pannel
        // <mlCreateNewMaterialBin> ------------------------------------------
        var materialBinUploadKeys = new Array("ERROR_CODE", "MATERIAL_BIN_NUMBER", "MATERIAL_BIN_PART_NUMBER", "MATERIAL_BIN_QTY_ACTUAL");
        var materialBinUploadValues = new Array(0, tempOb.IN_PANEL_QR, "PANEL_BOX", 10);
        var result_mlCreateNewMaterialBin = imsApiService.mlCreateNewMaterialBin(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            materialBinUploadKeys,
            materialBinUploadValues);

        var return_value = result_mlCreateNewMaterialBin.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "packPanel:mlCreateNewMaterialBin|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // activating panel to enable  packaging
        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            tempOb.IN_PANEL_QR
        );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "packPanel:shipActivateShippingLotAtKap|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        //packing the Unique IDs
        for (var x = 0; x < tempOb.IN_PART_DATA_AR.length; x++) {
            // <shipAddSerialNumberToShippingLot> ------------------------------
            var result_shipAddSerialNumberToShippingLot = imsApiService.shipAddSerialNumberToShippingLot(imsApiSessionContext,
                tempOb.IN_STATION_NUMBER,
                tempOb.IN_PANEL_QR,
                tempOb.IN_PART_DATA_AR[x].UID,
                "-1",
                "-1");

            var return_value = result_shipAddSerialNumberToShippingLot.return_value;

            if (return_value != 0 && return_value != 406) {
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "packPanel:shipAddSerialNumberToShippingLot|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }
        }

        // <shipCompleteLot> ------------------------------
        var result_shipCompleteLot = imsApiService.shipCompleteLot(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            tempOb.IN_PANEL_QR,
            1,
            "-1");

        var return_value = result_shipCompleteLot.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "packPanel:shipCompleteLot|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("STORAGE_BOX");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "packPanel:attribGetAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_STORAGE_BOX = result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //Activating Storage Box to pack the panel
        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_STORAGE_BOX
        );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "packPanel:shipActivateShippingLotAtKap|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        //Packing the panel in the storage Box
        // <shipAddChildLotToParentLot> ------------------------------
        var result_shipAddChildLotToParentLot = imsApiService.shipAddChildLotToParentLot(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            tempOb.IN_PANEL_QR,
            TEMP_STORAGE_BOX,
            "-1");

        var return_value = result_shipAddChildLotToParentLot.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "packPanel:shipAddChildLotToParentLot|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        //Getting the list of part numbers in the box

        // <shipGetSerialNumberDataForShippingLot> -----------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER", "SERIAL_NUMBER_TYPE", "WORKORDER_NUMBER");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_STORAGE_BOX,
            serialNumberResultKeys);

        var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "packPanel:shipGetSerialNumberDataForShippingLot|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        logHandler.logMessage("custom function OPC.packPanel finished.");
        return resultPackPanel("CF", 0, "PASS", tempOb);
    } catch (e) {
        logHandler.logMessage("custom function OPC.packPanel failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function packPanelOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_PANEL_QR = "";
    this.IN_NUMBER_OF_IDS = 0;
    this.IN_PART_DATA_AR = [];
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parsePackPanel(inArgs) {
    var tempObject = new packPanelOb();
    var blocsize = 2;
    tempObject.IN_STATION_NUMBER = inArgs[0];
    tempObject.IN_PANEL_QR = inArgs[1];
    tempObject.IN_NUMBER_OF_IDS = parseInt(inArgs[2]);
    for (var x = 0; x < inArgs.length; x++) {
        for (var y = 0; y < tempObject.IN_NUMBER_OF_IDS; y++) {
            if (x == 3 + (y * blocsize)) {
                tempObject.IN_PART_DATA_AR.push(new Part(inArgs[x], inArgs[x + 1]));
            }
        }
    }
    return tempObject;
}

function resultPackPanel(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "Panel QR :" + tempOb.IN_PANEL_QR;
    result.outArgs[0] = "\n" + "Packed Parts :";
    for (var x = 0; x < tempOb.IN_PART_DATA_AR.length; x++) {
        result.outArgs[0] += "\n" + " Part Number : " + tempOb.IN_PART_DATA_AR[x].PART_NUMBER +
            " ; UID : " + tempOb.IN_PART_DATA_AR[x].UID;
    }
    result.outArgs[0] += "\n" + "";
    logHandler.logMessage("#### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}
// #############################################################################
// #############################################################################
// #############################################################################

function unpackPanel() {
    var inArgs = unpackPanel.arguments;
    var result = new Result_customFunctionCommon();
    try {
        var tempOb = parseUnpackPanel(inArgs);
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("STORAGE_BOX");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "unpackPanel:attribGetAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_STORAGE_BOX = result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //Activating Storage Box to pack the panel
        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_STORAGE_BOX
        );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "unpackPanel:shipActivateShippingLotAtKap|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // <shipRemoveChildLots> --------------------------------------
        var lotNubmersChild = new Array(tempOb.IN_PANEL_QR);
        var result_shipRemoveChildLots = imsApiService.shipRemoveChildLots(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            TEMP_STORAGE_BOX,
            lotNubmersChild,
            "-1");

        var return_value = result_shipRemoveChildLots.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "unpackPanel:shipRemoveChildLots|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        // activating panel to enable  unpackaging

        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            tempOb.IN_PANEL_QR
        );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "unpackPanel:shipActivateShippingLotAtKap|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        //Getting the list of part numbers in the box

        // <shipGetSerialNumberDataForShippingLot> -----------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER", "SERIAL_NUMBER_TYPE", "WORKORDER_NUMBER");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            tempOb.IN_PANEL_QR,
            serialNumberResultKeys);

        var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "unpackPanel:shipGetSerialNumberDataForShippingLot|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }


        for (x = 0; x < result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length / 5; x++) {
            tempOb.OUT_UIDS.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x * 5 + 2]);
        }

        // <shipReuseCompletedShippingLot> ------------------------------
        var shippingLotResultKeys = new Array();
        var result_shipReuseCompletedShippingLot = imsApiService.shipReuseCompletedShippingLot(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            1,
            tempOb.IN_PANEL_QR,
            shippingLotResultKeys);

        var return_value = result_shipReuseCompletedShippingLot.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "unpackPanel:shipReuseCompletedShippingLot|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        //unpacking the Unique IDs
        for (var x = 0; x < tempOb.OUT_UIDS.length; x++) {
            // <shipRemoveSerialNumberFromShippingLot> ------------------------------
            var result_shipRemoveSerialNumberFromShippingLot = imsApiService.shipRemoveSerialNumberFromShippingLot(imsApiSessionContext,
                tempOb.IN_STATION_NUMBER,
                tempOb.IN_PANEL_QR,
                tempOb.OUT_UIDS[x],
                "-1",
                "-1");

            var return_value = result_shipRemoveSerialNumberFromShippingLot.return_value;

            if (return_value != 0) {
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "unpackPanel:result_shipRemoveSerialNumberFromShippingLot|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }
        }
        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        logHandler.logMessage("custom function OPC.unpackPanel finished.");
        return resultUnpackPanel("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.unpackPanel failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function unpackPanelOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_PANEL_QR = "";
    this.OUT_UIDS = [];
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUnpackPanel(inArgs) {
    var tempObject = new unpackPanelOb();
    var blocsize = 2;
    tempObject.IN_STATION_NUMBER = inArgs[0];
    tempObject.IN_PANEL_QR = inArgs[1];
    return tempObject;
}

function resultUnpackPanel(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "Panel QR :" + tempOb.IN_PANEL_QR;
    result.outArgs[0] = "\n" + "Unpacked Parts :";
    logHandler.logMessage("+++++++++++++HERE***********")
    for (var x = 0; x < tempOb.OUT_UIDS.length; x++) {
        result.outArgs[0] += "\n" + "UID : " + tempOb.OUT_UIDS[x];
    }
    result.outArgs[0] += "\n" + "";
    logHandler.logMessage("#### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

function getUidForManual() {
    var inArgs = getUidForManual.arguments;
    var result = new Result_customFunctionCommon();
    try {
        var tempOb = parseGetUidForManual(inArgs);
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("VIRTUAL_UIDS");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "getUidForManual:attribGetAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_VIRTUAL_UIDS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        if (tempOb.IN_UID_1 == tempOb.IN_UID_2) {
            var UIDS = [tempOb.IN_UID_1]
        } else {
            var UIDS = [tempOb.IN_UID_1, tempOb.IN_UID_2]
        }

        var TEMP_VI_UIDS = TEMP_VIRTUAL_UIDS.split("|");
        var TEMP_UIDS = [];//list of all uids in the attribute

        for (var x = 0; x < TEMP_VI_UIDS.length; x++) {
            for (var y = 0; y < TEMP_VI_UIDS[x].split(",").length; y++) {
                TEMP_UIDS.push(TEMP_VI_UIDS[x].split(",")[y]);
            }
        }

        var k = 0;
        for (var x = 0; x < UIDS.length; x++) {
            if (!(TEMP_UIDS.indexOf(UIDS[x]) >= 0)) {
                k += 1;
            }
        }

        if (k > 0) {
            if (TEMP_VIRTUAL_UIDS != "") {
                TEMP_VIRTUAL_UIDS += "|";
            }
            for (var x = 0; x < UIDS.length; x++) {
                if (!(TEMP_UIDS.indexOf(UIDS[x]) >= 0)) {
                    TEMP_VIRTUAL_UIDS += UIDS[x] + ",";
                }
            }
            TEMP_VIRTUAL_UIDS = TEMP_VIRTUAL_UIDS.slice(0, TEMP_VIRTUAL_UIDS.length - 1);
        }

        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("VIRTUAL_UIDS", TEMP_VIRTUAL_UIDS, "0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            -1,
            1,
            attributeUploadKeys,
            attributeUploadValues);

        var return_value = result_attribAppendAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "getUidForManual:attribAppendAttributeValues|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        tempOb.OUT_TRANSFER_TIME = tempOb.IN_TRANSFER_TIME;

        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.getUidForManual finished.");
        return resultGetUidForManual("CF", 0, "PASS", tempOb);
    } catch (e) {
        logHandler.logMessage("custom function OPC.getUidForManual failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function getUidForManualOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_UID_1 = "";
    this.IN_UID_2 = "";
    this.OUT_UID_1 = "";
    this.OUT_UID_2 = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseGetUidForManual(inArgs) {
    var tempObject = new getUidForManualOb();
    tempObject.IN_STATION_NUMBER = "" + inArgs[0];
    tempObject.IN_UID_1 = "" + inArgs[1];
    tempObject.IN_UID_2 = "" + inArgs[2];
    tempObject.OUT_UID_1 = "" + inArgs[1];
    tempObject.OUT_UID_2 = "" + inArgs[2];
    return tempObject;
}

function resultGetUidForManual(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + " UID 1 : " + tempOb.OUT_UID_1;
    result.outArgs[0] += "\n" + " UID 2 : " + tempOb.OUT_UID_2;
    result.outArgs[0] += "\n" + "";
    logHandler.logMessage("#### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}
// #############################################################################
// #############################################################################
// #############################################################################

function getVirtualUids() {

    var inArgs = getVirtualUids.arguments;
    var result = new Result_customFunctionCommon();
    try {
        var tempOb = parseGetVirtualUids(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------

        //SECTION 2019-10-10 Get configContent for uploadVirtualEngravingId
        var configContent = fct_readDocument(tempOb.IN_STATION_NUMBER);

        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("VIRTUAL_UIDS");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "getVirtualUids:|attribGetAttributeValues" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }

        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_VIRTUAL_UIDS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        logHandler.logMessage("##### tempOb.IN_VIRTUAL_UIDS.length = " + tempOb.IN_VIRTUAL_UIDS.length);
        if (tempOb.IN_VIRTUAL_UIDS.length != 2) {
            result.errorString = "getVirtualUids:|Wrong number of Uids:" + " -15000";
            result.return_value = -15000;
            return result;
        }

        var TEMP_OBJECT = getUidsBySide(tempOb.IN_VIRTUAL_UIDS);
        var TEMP_ERROR = TEMP_OBJECT.err;

        if (TEMP_ERROR != 0) {

            result.errorString = "getVirtualUids:getUidsBySide|" + "-15001" + "|" + TEMP_OBJECT.message;
            result.return_value = TEMP_ERROR;
            return result;
        }

        var TEMP_RIGHT_UIDS = TEMP_OBJECT.rightUids;
        var TEMP_LEFT_UIDS = TEMP_OBJECT.leftUids;

        TEMP_OBJECT = getUidsPairs(TEMP_RIGHT_UIDS, TEMP_LEFT_UIDS);
        var TEMP_PAIRS = TEMP_OBJECT.pairs;

        //SECTION 2019-10-10 Implement configContent
        TEMP_OBJECT = updateVirtualUidsMap(configContent, TEMP_VIRTUAL_UIDS, TEMP_PAIRS);
        TEMP_ERROR = TEMP_OBJECT.err;

        if (TEMP_ERROR != 0) {

            result.errorString = "getVirtualUids:updateVirtualUidsMap|" + "-15002" + "|" + TEMP_OBJECT.message;
            result.return_value = TEMP_ERROR;
            return result;
        }
        var TEMP_NEW_VIRTUAL_UIDS = TEMP_OBJECT.map;
        /*    // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("VIRTUAL_UIDS", TEMP_NEW_VIRTUAL_UIDS, "0");
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                tempOb.IN_STATION_NUMBER, 
                7,
                tempOb.IN_STATION_NUMBER,
                "-1",
                -1,
                1,
                attributeUploadKeys,
                attributeUploadValues);
    
            var return_value = result_attribAppendAttributeValues.return_value;
    
            if (return_value != 0) {
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "getVirtualUids:attribAppendAttributeValues|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }
        */

        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.getVirtualUids finished.");
        return resultGetVirtualUids("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.getVirtualUids failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function getVirtualUidsOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_VIRTUAL_UIDS = [];
    this.OUT_BATCH_ID = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseGetVirtualUids(inArgs) {
    var tempObject = new getVirtualUidsOb();
    tempObject.IN_STATION_NUMBER = inArgs[0];
    for (var x = 1; x < inArgs.length; x++) {
        tempObject.IN_VIRTUAL_UIDS.push(inArgs[x]);
    }
    return tempObject;
}

function resultGetVirtualUids(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + " VIRTUAL UID 1: " + tempOb.IN_VIRTUAL_UIDS[0];
    result.outArgs[0] += "\n" + " VIRTUAL UID 2: " + tempOb.IN_VIRTUAL_UIDS[1];
    result.outArgs[0] += "\n" + " VIRTUAL UID 3: " + tempOb.IN_VIRTUAL_UIDS[2];
    result.outArgs[0] += "\n" + " VIRTUAL UID 4: " + tempOb.IN_VIRTUAL_UIDS[3];
    result.outArgs[0] += "\n" + "";
    logHandler.logMessage("##### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

// #############################################################################
// updateMachineStateSc
// #############################################################################

/**
 * updateMachineStateSc (Time 5 sec)
 * =============================================================================
 * [0]  Station Number
 * [1]  Machine State (0 or 1 / true or false)
 
 * =============================================================================
 */

function updateMachineStateSc() {
    var inArgs = updateMachineStateSc.arguments;
    var result = new Result_customFunctionCommon();
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";
    var conditionCode = "PR";
    var dateFrom = -1;
    var dateTo = -1;
    var comment = "OPC_MACHINE_STATE_CHANGE";

    try {
        var tempOb = parseUpdateMachineStateSc(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        tempOb.OUT_RESULT += "\n     station : " + tempOb.IN_STATION_NUMBER + " --- state : " + tempOb.IN_MACHINE_STATE;

        // upload machine state
        if (tempOb.IN_MACHINE_STATE == "true" || tempOb.IN_MACHINE_STATE == "1") {
            conditionCode = "PR";    // Set condition code for productive time
            tempOb.OUT_RESULT += "\n     CONDITION OK -- > PR";
        }
        if (tempOb.IN_MACHINE_STATE == "false" || tempOb.IN_MACHINE_STATE == "0") {
            conditionCode = "NA";   // Set condition code for not assigned time
            tempOb.OUT_RESULT += "\n     CONDITION OK -- > NA";
        }
        // -----------------------------------------------------------------

        // < mdcGetStationConditions> --------------------------------------
        var conditionResultKeys = new Array("CONDITION_CODE");

        var result_mdcGetStationConditions = imsApiService.mdcGetStationConditions(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            -1,
            -1,
            "-1",
            1,
            conditionResultKeys);

        var return_value = result_mdcGetStationConditions.return_value;

        var CC = result_mdcGetStationConditions.conditionResultValues[0];

        //------------------------------------------------------------------
        if (((((CC == undefined) || (CC == "PR") || (CC == "NA")) && (conditionCode == "NA")) || (conditionCode == "PR")) || (conditionCode == "PR")) {
            dateFrom = -1;
            dateTo = -1;

            // < mdcUploadStationCondition> ------------------------------------
            var stationConditionUploadKeys = new Array("BOOKING_TARGET", "CONDITION_CODE", "ERROR_CODE", "DATE_FROM", "DATE_TO", "TEXT");
            var stationConditionUploadValues = new Array(0, conditionCode, 0, dateFrom, dateTo, comment);
            var result_uploadStationCondition = imsApiService.mdcUploadStationCondition(imsApiSessionContext,
                tempOb.IN_STATION_NUMBER,
                stationConditionUploadKeys,
                stationConditionUploadValues);

            var return_value = result_uploadStationCondition.return_value;

            if (return_value != 0) {
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "updateMachineStateSc:stationConditionUploadKeys|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }
        }
        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.updateMachineStateSc finished.");
        return resultUpdateMachineStateSc("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.updateMachineStateSc failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function updateMachineStateScOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_MACHINE_STATE = "";
    this.OUT_RESULT = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUpdateMachineStateSc(inArgs) {
    var tempObject = new updateMachineStateScOb();
    tempObject.IN_STATION_NUMBER = trim("" + inArgs[0]);
    tempObject.IN_MACHINE_STATE = trim("" + inArgs[1]);
    return tempObject;
}

function resultUpdateMachineStateSc(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + " RESULT : " + tempOb.OUT_RESULT + "\n";
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

function scrapShootingGap() {
    var inArgs = scrapShootingGap.arguments;
    var logs = "";
    try {
        var tempOb = parseScrapShootingGap(inArgs);
        var errorCode = 0;
        var errorMessage = "";

        // API integration -----------------------------------------------------
        // --------------------------------------------------------------------

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("SC_SHOOTING_MAP");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
            return resultScrapShootingGap("CF", return_value, errorMessage, tempOb);
        }

        var TEMP_SHOOTING_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        var tr_nb = TEMP_SHOOTING_MAP.split("|");
        var trolleys = [];

        for (var x = 0; x < tr_nb.length; x++) {
            trolleys.push(tr_nb[x].split(":")[0]);
        }

        for (var x = 0; x < trolleys.length; x++) {
            if (trolleys[x] != "" && trolleys[x] != undefined) {
                // <attribGetAttributeValues> ------------------------------------------
                var attributeCodeArray = new Array("SC_SHOOTING_MAP");
                var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
                    tempOb.IN_STATION_NUMBER,
                    7,
                    tempOb.IN_STATION_NUMBER,
                    "-1",
                    attributeCodeArray,
                    1,
                    attributeResultKeys);

                var return_value = result_attribGetAttributeValues.return_value;

                if (return_value != 0) {
                    errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
                    return resultScrapShootingGap("CF", return_value, errorMessage, tempOb);
                }

                var TEMP_SHOOTING_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var tOb = getTrolleyShootingNumber(TEMP_SHOOTING_MAP, trolleys[x]);
                var number = parseInt(tOb.numberOfShots);
                number++;

                var tOb2 = updateShootingMap(TEMP_SHOOTING_MAP, trolleys[x], number, 0);
                var TEMP_NEW_SHOOTING_MAP = tOb2.map;

                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                var attributeUploadValues = new Array("SC_SHOOTING_MAP", TEMP_NEW_SHOOTING_MAP, "0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
                    tempOb.IN_STATION_NUMBER,
                    7,
                    tempOb.IN_STATION_NUMBER,
                    "-1",
                    -1,
                    1,
                    attributeUploadKeys,
                    attributeUploadValues);

                var return_value = result_attribAppendAttributeValues.return_value;
                if (return_value != 0) {
                    errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
                    return resultScrapShootingGap("CF", return_value, errorMessage, tempOb);
                }
            }
        }
        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------  
        logHandler.logMessage("custom function OPC.scrapShootingGap finished.");
        return resultScrapShootingGap("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.scrapShootingGap failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function scrapShootingGapOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_SHOOTING_NUMBER = "";                    //Input for shooting number
    this.OUT_RESULT = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseScrapShootingGap(inArgs) {
    var tempObject = new scrapShootingGapOb();
    var blocsize = 1;
    for (var x = 0; x < inArgs.length; x++) {
        // Bloc #1
        if (x == 0) {
            tempObject.IN_STATION_NUMBER = trim("" + inArgs[x]);
        }

        // Bloc #2
        if (x == 1) {
            tempObject.IN_ACTUAL_POSITION = trim("" + inArgs[x]);
        }

        // Bloc #3
        if (x == 2) {
            tempObject.IN_MCT_MANAGEMENT = trim("" + inArgs[x]);
        }

        // Bloc #4
        for (var y = 0; y < 2; y++) {
            if (x == (3 + (y * blocsize))) {
                tempObject.IN_UID_AR.push(trim("" + inArgs[x]));
                tempObject.OUT_RESULT += "  == " + trim("" + inArgs[x]) + "\n";
                logHandler.logMessage("##### IN_UID_AR " + trim("" + inArgs[x]));
                logHandler.logMessage("##### --------------------------- ");
            }
        }

        // Bloc #5
        if (x == (3 + (1 * blocsize) + 1)) {
            tempObject.IN_CYCLE_TIME = trim("" + inArgs[x]);
        }

    }
    return tempObject;
}

function resultScrapShootingGap(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + " Shooting number incremented";
    logHandler.logMessage("##### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

function checkShootingNumber() {

    var inArgs = checkShootingNumber.arguments;
    var logs = "";
    try {
        var tempOb = parseCheckShootingNumber(inArgs);
        var errorCode = 0;
        var errorMessage = "";

        // API integration -----------------------------------------------------
        // --------------------------------------------------------------------

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("CAVITY_MAP");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
            return resultCheckShootingNumber("CF", return_value, errorMessage, tempOb);
        }

        var TEMP_CAVITY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_CAVITIES = TEMP_CAVITY_MAP.split("|");
        var TEMP_NUMBER_OF_CAVITIES = parseInt(TEMP_CAVITIES.length);

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("SC_PRODUCED_QUANTITY");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
            return resultCheckShootingNumber("CF", return_value, errorMessage, tempOb);
        }
        var TEMP_PRODUCED_QUANTITY = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);
        TEMP_PRODUCED_QUANTITY += parseInt(TEMP_NUMBER_OF_CAVITIES);

        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("SC_PRODUCED_QUANTITY", TEMP_PRODUCED_QUANTITY, "0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            7,
            tempOb.IN_STATION_NUMBER,
            "-1",
            -1,
            1,
            attributeUploadKeys,
            attributeUploadValues);

        var return_value = result_attribAppendAttributeValues.return_value;
        if (return_value != 0) {
            errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
            return resultCheckShootingNumber("CF", return_value, errorMessage, tempOb);
        }

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------  
        logHandler.logMessage("custom function OPC.checkShootingNumber finished.");
        return resultCheckShootingNumber("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.checkShootingNumber failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function checkShootingNumberOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_SHOOTING_NUMBER = "";                    //Input for shooting number
    this.OUT_RESULT = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseCheckShootingNumber(inArgs) {
    var tempObject = new checkShootingNumberOb();
    var blocsize = 1;
    for (var x = 0; x < inArgs.length; x++) {
        // Bloc #1
        if (x == 0) {
            tempObject.IN_STATION_NUMBER = trim("" + inArgs[x]);
        }
    }
    return tempObject;
}

function resultCheckShootingNumber(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + "; SHOOTING_NUMBER : " + tempOb.IN_SHOOTING_NUMBER;
    logHandler.logMessage("##### OPC Execution : \n" + result.outArgs[0]);
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

// #############################################################################
// updateMachineStateSIIF
// #############################################################################

/**
 * updateMachineStateSIIF (Time 5 sec)
 * =============================================================================
 * [0]  Station Number
 * [1]  Machine State (0 or 1 / true or false)
 
 * =============================================================================
 */

function updateMachineStateSIIF() {
    var inArgs = updateMachineStateSIIF.arguments;
    var result = new Result_customFunctionCommon();
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";
    var conditionCode = "PR";
    var dateFrom = -1;
    var dateTo = -1;
    var comment = "OPC_MACHINE_STATE_CHANGE";

    try {
        var tempOb = parseUpdateMachineStateSIIF(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        for (var x = 1; x <= parseInt(tempOb.IN_NUMBER_OF_STATIONS); x++) {
            var station = tempOb.IN_STATION_NUMBER.slice(0, tempOb.IN_STATION_NUMBER.length - 1) + "" + x;
            tempOb.OUT_RESULT += "\n     station : " + station + " --- state : " + tempOb.IN_MACHINE_STATE_AR[x - 1];
            // upload machine state
            if (tempOb.IN_MACHINE_STATE_AR[x - 1] == "true" || tempOb.IN_MACHINE_STATE_AR[x - 1] == "1") {
                conditionCode = "PR";    // Set condition code for productive time
                tempOb.OUT_RESULT += "\n     CONDITION OK -- > PR";
            }
            if (tempOb.IN_MACHINE_STATE_AR[x - 1] == "false" || tempOb.IN_MACHINE_STATE_AR[x - 1] == "0") {
                conditionCode = "NA";   // Set condition code for not assigned time
                tempOb.OUT_RESULT += "\n     CONDITION OK -- > NA";
            }
            // -----------------------------------------------------------------

            // < mdcGetStationConditions> --------------------------------------
            var conditionResultKeys = new Array("CONDITION_CODE");

            var result_mdcGetStationConditions = imsApiService.mdcGetStationConditions(imsApiSessionContext,
                station,
                -1,
                -1,
                "-1",
                1,
                conditionResultKeys);

            var return_value = result_mdcGetStationConditions.return_value;

            var CC = result_mdcGetStationConditions.conditionResultValues[0];

            //------------------------------------------------------------------
            if (((((CC == undefined) || (CC == "PR") || (CC == "NA")) && (conditionCode == "NA")) || (conditionCode == "PR")) || (conditionCode == "PR")) {
                dateFrom = -1;
                dateTo = -1;
                // < mdcUploadStationCondition> ------------------------------------
                var stationConditionUploadKeys = new Array("BOOKING_TARGET", "CONDITION_CODE", "ERROR_CODE", "DATE_FROM", "DATE_TO", "TEXT");
                var stationConditionUploadValues = new Array(0, conditionCode, 0, dateFrom, dateTo, comment);
                var result_uploadStationCondition = imsApiService.mdcUploadStationCondition(imsApiSessionContext,
                    station,
                    stationConditionUploadKeys,
                    stationConditionUploadValues);

                var return_value = result_uploadStationCondition.return_value;

                if (return_value != 0) {
                    var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                    result.errorString = "updateMachineStateSIIF:stationConditionUploadKeys|" + return_value + "|" + res.errorString;
                    result.return_value = return_value;
                    return result;
                }
            }
        }
        // <End call> ----------------------------------------------------------

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        logHandler.logMessage("Custom function OPC.updateMachineStateSIIF finished.");
        return resultUpdateMachineStateSIIF("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("Custom function OPC.updateMachineStateSIIF failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function updateMachineStateSIIFOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_NUMBER_OF_STATIONS = 0;
    this.IN_MACHINE_STATE_AR = [];
    this.OUT_RESULT = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUpdateMachineStateSIIF(inArgs) {
    var tempObject = new updateMachineStateSIIFOb();
    tempObject.IN_STATION_NUMBER = trim("" + inArgs[0]);
    tempObject.IN_NUMBER_OF_STATIONS = trim("" + inArgs[1]);
    for (var x = 2; x < inArgs.length; x++) {
        tempObject.IN_MACHINE_STATE_AR.push(trim("" + inArgs[x]));
    }
    return tempObject;
}

function resultUpdateMachineStateSIIF(apiName, returnCode, errorString, tempOb) {
    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    result.outArgs[0] += "\n" + " RESULT : " + tempOb.OUT_RESULT + "\n";
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

/**
 * uploadProcessData (scada save)
 * =============================================================================
 * [0]              Station Number
 * [1]              Station selection 
 * [2]              Processdata 1 : Resin1
 * [3]              Processdata 2 : Resin2 

 * =============================================================================
 */

function getRecipesForPosition(stationNumber, tempOb) {
    // <trGetStationSetting> -----------------------------------------------
    var getStationSettingResultKeys = new Array("PART_NUMBER", "WORKORDER_NUMBER");
    var result_getStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext,
        stationNumber,
        getStationSettingResultKeys);

    var return_value = result_getStationSetting.return_value;
    if (return_value != 0) {
    }
    var TEMP_PART_NUMBER = result_getStationSetting.stationSettingResultValues[0];

    var recipeFilters = new Array(new KeyValue("PART_NUMBER", TEMP_PART_NUMBER));
    var recipeResultKeys = new Array("MAX_VALUE", "MEASURE_NAME", "MIN_VALUE", "UNIT");

    var result_mdaGetRecipeData = imsApiService.mdaGetRecipeData(imsApiSessionContext,
        stationNumber,
        -1,
        "-1",
        "-1",
        "-1",
        -1.0,
        "-1",
        "-1",
        1,
        recipeFilters,
        recipeResultKeys);

    return_value = result_mdaGetRecipeData.return_value;
    if (return_value != 0) {
        tempOb.OUT_RESULT += "\n API result_mdaGetRecipeData : " + return_value;
    }
    var TEMP_REIPE_AR = new Array();
    for (var i = 0; i < result_mdaGetRecipeData.recipeResultValues.length; i++) {
        var name = result_mdaGetRecipeData.recipeResultValues[i * 4 + 1];
        var upperlimit = result_mdaGetRecipeData.recipeResultValues[i * 4];
        var lowerlimit = result_mdaGetRecipeData.recipeResultValues[i * 4 + 2];
        var unit = result_mdaGetRecipeData.recipeResultValues[i * 4 + 3];

        TEMP_REIPE_AR.push(new Measure(name, "", "", "", lowerlimit, upperlimit, unit));
    }
    return {
        recipe: TEMP_REIPE_AR,
        part: TEMP_PART_NUMBER
    }
}

function uploadProcessData() {
    var inArgs = uploadProcessData.arguments;
    var result = new Result_customFunctionCommon();
    var return_value = 0;
    var errorMessage = "";
    try {
        var tempOb = parseUploadProcessData(inArgs);
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        var station = getHansbergStation(tempOb.IN_STATION_SELECTION);
        var Messages = [];
        var message = "";
        var topic = "";

        // if (station == "04002011") topic = "processdata/warning/sandcore/hansberg3";
        // if (station == "04002021") topic = "processdata/warning/sandcore/hansberg4";

        //SECTION 2019-10-10 Get configContent for uploadProcessData
        var configContent = fct_readDocument(tempOb.IN_STATION_NUMBER);

        //SECTION 2019-10-10 Calculate topicTemplate for the station
        var res = fct_getTopicTemplate(configContent, station);                 //? get topicTemplate for the station --> {topicTemplate}

        topic = res.topicTemplate;
        topic = topic.replace("empty", "warning");
        logHandler.logMessage("##### topic = " + topic);
        //!SECTION 
        // --------------------------------------------------------------------

        // <trUploadStationResult> ---------------------------------------------
        var stationResultUploadKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE", "LOWER_LIMIT", "UPPER_LIMIT");
        var grfp = getRecipesForPosition(station, tempOb);
        var RECIP = grfp.recipe;

        for (var y = 0; y < RECIP.length; y++) {
            logHandler.logMessage("##### RECIP : " + RECIP[y].MEASURE_NAME + " - " + RECIP[y].MEASURE_LOWERLIMIT + " - " + RECIP[y].MEASURE_UPPERLIMIT);
        }

        for (var x = 0; x < tempOb.IN_PROCESS_DATA_AR.length; x++) {
            for (var y = 0; y < RECIP.length; y++) {
                if (tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME == RECIP[y].MEASURE_NAME) {
                    tempOb.IN_PROCESS_DATA_AR[x].MEASURE_LOWERLIMIT = RECIP[y].MEASURE_LOWERLIMIT;
                    tempOb.IN_PROCESS_DATA_AR[x].MEASURE_UPPERLIMIT = RECIP[y].MEASURE_UPPERLIMIT;
                }
            }
        }

        var stationResultUploadValues = new Array();
        for (var x = 0; x < tempOb.IN_PROCESS_DATA_AR.length; x++) {
            stationResultUploadValues.push(0, "0", tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME, tempOb.IN_PROCESS_DATA_AR[x].MEASURE_VALUE, tempOb.IN_PROCESS_DATA_AR[x].MEASURE_LOWERLIMIT, tempOb.IN_PROCESS_DATA_AR[x].MEASURE_UPPERLIMIT);
            logHandler.logMessage("##### MEAS : " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME + " = " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_VALUE + " / " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_LOWERLIMIT + " -- " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_UPPERLIMIT);
        }

        var result_trUploadStationResult = imsApiService.trUploadStationResult(imsApiSessionContext,
            station,
            "-1",
            -1,
            "-1",
            "-1",
            "-1",
            -1,
            1,
            stationResultUploadKeys,
            stationResultUploadValues
        );

        var return_value = result_trUploadStationResult.return_value;
        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "uploadProcessData:trUploadStationResult|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        // <End call> ----------------------------------------------------------

        for (var x = 0; x < tempOb.IN_PROCESS_DATA_AR.length; x++) {
            var meas_name = tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME;
            var meas_value = parseInt(tempOb.IN_PROCESS_DATA_AR[x].MEASURE_VALUE);
            var minval = parseInt(tempOb.IN_PROCESS_DATA_AR[x].MEASURE_LOWERLIMIT);
            var maxval = parseInt(tempOb.IN_PROCESS_DATA_AR[x].MEASURE_UPPERLIMIT);
            if (meas_value < minval) {
                message = "[" + station + "] " + meas_name + " = " + meas_value + " is under minimum limit";
                Messages.push(new Message(topic, message));
                return_value = exec_mdcCreateLog(station, topic, message);
            }
            if (meas_value > maxval) {
                message = "[" + station + "] " + meas_name + " = " + meas_value + " is over maximum limit";
                Messages.push(new Message(topic, message));
                return_value = exec_mdcCreateLog(station, topic, message);
            }
        }

        for (var z = 0; z < Messages.length; z++) {
            var topic_ = "" + Messages[z].TOPIC;
            var message_ = "" + Messages[z].MESSAGE;

            return_value = ims_msgPublish(topic_, message_);
            //return_value = exec_mdcCreateLog("52",topic_, message_ + " - E " + return_value);
        }

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.uploadProcessData finished.");
        return resultUploadProcessData("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.uploadProcessData failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function uploadProcessDataOb() {
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_STATION_SELECTION = "";
    this.IN_PROCESS_DATA_AR = [];
    this.OUT_MEAS_AR = [];
    this.OUT_RESULT = "";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUploadProcessData(inArgs) {
    var tempObject = new uploadProcessDataOb();
    tempObject.IN_STATION_NUMBER = trim("" + inArgs[0]);
    for (var x = 0; x < inArgs.length; x++) {
        if (x == 1) {
            tempObject.IN_STATION_SELECTION = parseInt(trim("" + inArgs[x]));
        }
        if (x > 1) {
            tempObject.IN_PROCESS_DATA_AR.push(new Measure("Resin " + (x - 1), "", inArgs[x], "", "", "", ""));
        }
    }
    return tempObject;
}

function resultUploadProcessData(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "Station number :" + tempOb.IN_STATION_NUMBER;
    for (var x = 0; x < tempOb.IN_PROCESS_DATA_AR; x++) {
        result.outArgs[0] += "\n" + "Resin " + x + 1 + " measurement :" + tempOb.IN_PROCESS_DATA_AR[x];
    }
    result.outArgs[0] += "\n" + " RESULT : " + tempOb.OUT_RESULT + "\n";
    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

// -----------------------------------------------------------------------------
// ------------------------ STANDARD FUNCTIONS ---------------------------------
// -----------------------------------------------------------------------------

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

function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g, "");
}
function ltrim(stringToTrim) {
    return stringToTrim.replace(/^\s+/, "");
}
function rtrim(stringToTrim) {
    return stringToTrim.replace(/\s+$/, "");
}


function Position(position, state) {
    this.POSITION = position;
    this.STATE = state;
}

function MaterialBin(materialBinNumber, materialBinPartNumber) {
    this.MATERIAL_BIN_NUMBER = materialBinNumber;
    this.MATERIAL_BIN_PART_NUMBER = materialBinPartNumber;
}

function Part(partNumber, uid) {
    this.PART_NUMBER = partNumber;
    this.UID = uid;
}

function Measure(name, type, value, nominal, lowerlimit, upperlimit, unit) {
    this.MEASURE_NAME = name;
    this.MEASURE_TYPE = type;
    this.MEASURE_VALUE = value;
    this.MEASURE_NOMINAL = nominal;
    this.MEASURE_LOWERLIMIT = lowerlimit;
    this.MEASURE_UPPERLIMIT = upperlimit;
    this.MEASURE_UNIT = unit;
}

function Equipment(equipmenId, equipmentName, equipmentPartNumber) {
    this.EQUIPMENT_ID = equipmenId;
    this.EQUIPMENT_NAME = equipmentName;
    this.EQUIPMENT_PARTNUMBER = equipmentPartNumber;
}

function Carousel(carouselId, carouselName, carouselPartNumber, carouselPosition, carouselState) {
    this.CAROUSEL_ID = carouselId;
    this.CAROUSEL_NAME = carouselName;
    this.CAROUSEL_PARTNUMBER = carouselPartNumber;
    this.CAROUSEL_POSITION = carouselPosition;
    this.CAROUSEL_STATE = carouselState;
}

function Machine(machineId, machineName, machinePartNumber, machinePosition) {
    this.MACHINE_ID = machineId;
    this.MACHINE_NAME = machineName;
    this.MACHINE_PARTNUMBER = machinePartNumber;
    this.MACHINE_POSITION = machinePosition;
}

function Cavity(cavityId, cavityName, cavityPartNumber, cavityPosition) {
    this.CAVITY_ID = cavityId;
    this.CAVITY_NAME = cavityName;
    this.CAVITY_PARTNUMBER = cavityPartNumber;
    this.CAVITY_POSITION = cavityPosition;
}

function Message(topic, message) {
    this.TOPIC = topic;
    this.MESSAGE = message;
}

//SECTION 2019-10-10 implement configContent
function updateVirtualUidsMap(configContent, map, pairs) {
    map += "";
    var reference = getReference(configContent, pairs[0].substring(7, 8));
    var references_uidslr = map.split("|");
    var references = [];
    var uidslr = [];
    var reference_flag = false;

    //map initialitzation
    if (map == "") {
        references.push(reference);
        if (pairs.length == 1) {
            uidslr.push(pairs[0]);
        } else if (pairs.length == 2) {
            uidslr.push(pairs[0] + ";" + pairs[1]);
        }
        var new_map = "";
        for (var i = 0; i < references.length; i++) {
            new_map += references[i] + ":" + uidslr[i] + "|";
        }
        new_map = new_map.slice(0, new_map.length - 1);
        return {
            map: new_map,
            err: 0,
            message: "",
            reference: reference
        }
    }

    for (var i = 0; i < references_uidslr.length; i++) {
        references.push(references_uidslr[i].split(":")[0]);

        uidslr.push(references_uidslr[i].split(":")[1]);

    }

    for (var i = 0; i < references.length; i++) {
        if (reference == references[i]) {
            reference_flag = true;
            if (pairs.length == 1) {
                uidslr[i] += ";" + pairs[0];
            } else if (pairs.length == 2) {
                uidslr[i] += ";" + pairs[0] + ";" + pairs[1];
            }
        }
    }
    if (reference_flag == false) {
        references.push(reference);
        if (pairs.length == 1) {
            uidslr.push(pairs[0]);
        } else if (pairs.length == 2) {
            uidslr.push(pairs[0] + ";" + pairs[1]);
        }
    }
    var new_map = "";
    for (var i = 0; i < references.length; i++) {
        new_map += references[i] + ":" + uidslr[i] + "|";
    }
    new_map = new_map.slice(0, new_map.length - 1);
    return {
        err: 0,
        message: "",
        map: new_map,
        reference: reference
    }
}

//SECTION 2019-10-10 getReference(configContent, code)
function getReference(configContent, code) {
    var side = "";
    var res = fct_getReference(configContent, code, side);              //? get reference informations --> {partNumber, productFamily}
    return res.productFamily;
}

function getUidsBySide(uids) {
    var bkp_uids = uids;
    var left_uids = [];
    var right_uids = [];
    var new_uids = [];

    for (var i = 0; i < uids.length; i++) {
        if (uids[i] != null && uids[i] != "") {
            if (uids[i][0] == "R" && uids[i] != "R") {
                right_uids.push(uids[i]);
            } else if (uids[i][0] == "L" && uids[i] != "L") {
                left_uids.push(uids[i]);
            }
        }
    }

    if (left_uids[0] == left_uids[1] && right_uids[0] == right_uids[1]) {
        left_uids = [left_uids[0]];
        right_uids = [right_uids[0]];
    } else if ((left_uids[0] == left_uids[1] && right_uids[0] != right_uids[1]) || (left_uids[0] != left_uids[1] && right_uids[0] == right_uids[1])) {
        return {
            err: 1,
            message: "Invalid UID from OPC",
            rightUids: [],
            leftUids: []
        }
    }

    return {
        rightUids: right_uids,
        leftUids: left_uids,
        err: 0,
        message: ""
    }
}

function getUidsPairs(rightUids, leftUids) {
    var pairs = [];
    for (var i = 0; i < rightUids.length; i++) {
        for (var j = 0; j < leftUids.length; j++) {
            if (rightUids[i].slice(1, rightUids[i].length) == leftUids[j].slice(1, leftUids[i].length)) {
                pairs.push(leftUids[j] + "," + rightUids[i]);
            }
        }
    }

    return {
        pairs: pairs
    }
}

function updateShootingMap(map, trolleyId, nb, mode) {
    //mode 0 = normal update; 
    //mode 1 = delete trolley and its number
    map += "";
    var trs_nbs = map.split("|");
    var trs = [];
    var nbs = [];
    var update_flag = false;

    if (map == "") {
        return {
            map: trolleyId + ":" + nb
        }
    }

    for (var i = 0; i < trs_nbs.length; i++) {
        trs.push(trs_nbs[i].split(":")[0]);
        nbs.push(trs_nbs[i].split(":")[1]);
    }


    if (mode == 0) {
        for (var i = 0; i < trs.length; i++) {
            if (trolleyId == trs[i]) {
                nbs[i] = nb;
                update_flag = true;
            }
        }
    } else if (mode == 1) {
        for (var i = 0; i < trs.length; i++) {
            if (trolleyId == trs[i]) {
                trs[i] = "";
                nbs[i] = "";

            }
        }
    }

    if (mode == 0 && update_flag == false && trolleyId != "" && nb != "") {
        trs.push(trolleyId);
        nbs.push(nb);
    }

    var new_map = "";

    for (var i = 0; i < trs.length; i++) {
        if (trs[i] != "") {
            new_map += trs[i] + ":" + nbs[i] + "|";
        }
    }

    new_map = new_map.slice(0, new_map.length - 1)

    return {
        map: new_map
    }
}


function getTrolleyShootingNumber(map, trolleyId) {
    map += "";
    var trs_nbs = map.split("|");
    var trs = [];
    var nbs = [];
    var update_flag = false;

    for (var i = 0; i < trs_nbs.length; i++) {
        trs.push(trs_nbs[i].split(":")[0]);
        nbs.push(trs_nbs[i].split(":")[1]);
    }
    for (var i = 0; i < trs.length; i++) {
        if (trolleyId == trs[i]) {
            var numberOfShots = nbs[i];
            update_flag = true;
        }
    }
    if (update_flag == false) {
        return {
            err: 1,
            message: "trolley not found",
            trolleyId: "",
            numberOfShots: ""
        }
    }
    return {
        trolleyId: trolleyId,
        numberOfShots: numberOfShots
    }
}

function getHansbergStation(code) {
    if (code == 1 || code == "1") {
        return "04002011"
    } else if (code == 2 || code == "2") {
        return "04002021"
    }
}

function ims_msgPublish(topic, message) {
    var result_msgPublish = imsApiService.msgPublish(imsApiSessionContext,
        topic,
        message);
    var return_value = result_msgPublish.return_value;
    return return_value;
}

function exec_mdataGetCalendarData(station) {
    var TIMESTAMP;
    var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
    var result_mdataGetCalendarData = imsApiService.mdataGetCalendarData(imsApiSessionContext,
        station,
        calendarDataResultKeys);
    return_value = result_mdataGetCalendarData.return_value;
    TIMESTAMP = parseInt("" + result_mdataGetCalendarData.calendarDataResultValues[0]);
    TIMESTAMP = parseInt("" + result_mdataGetCalendarData.calendarDataResultValues[0]) == NaN ? -1 : parseInt("" + result_mdataGetCalendarData.calendarDataResultValues[0]);
    return TIMESTAMP;
}

function exec_mdcCreateLog(station, subject, text) {
    var TIMESTAMP = exec_mdataGetCalendarData(station);
    var result_mdcCreateLog = imsApiService.mdcCreateLog(imsApiSessionContext,
        station,
        TIMESTAMP,
        TIMESTAMP + 1,
        subject,
        text,
        0);
    var return_value = result_mdcCreateLog.return_value
    return return_value;
}

// End of script