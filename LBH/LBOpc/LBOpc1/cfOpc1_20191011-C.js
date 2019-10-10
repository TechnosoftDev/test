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

  Faouzi Ben Mabrouk     2019-06-18      Le belier        cfOpc                  OPC integration 
  Faouzi Ben Mabrouk     2019-07-20      Le belier        cfOpc                  OPC integration - update machine state
  Faouzi Ben Mabrouk     2019-07-20      Le belier        cfOpc                  OPC integration - update process data all
  Faouzi Ben Mabrouk     2019-07-23      Le belier        cfOpc                  OPC integration - add upload process data all 2 with message publishing when value is out of limits
  Sami Akkari            2019-08-19      Le belier        cfOpc                  Add dummy trolly consumption 
  Faouzi Ben Mabrouk     2019-09-01      Le belier        cfOpc                  Add Melt Batch Consumption
  Faouzi Ben Mabrouk     2019-09-02      Le belier        cfOpc                  Remove Melt Batch from the storage when finished
  Faouzi Ben Mabrouk     2019-10-09      Le Belier        cfOpc                  Implement configuration functions
  Faouzi Ben Mabrouk     2019-10-11      Le Belier        cfOpc                  Update material andling with removing emty material from setup
 **/


importPackage(com.itac.mes.api.custom);
importPackage(java.lang);
importPackage(java.util);
importPackage(java.text);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.util.constants.imsapi);

//SECTION 2019-10-09 fct_readDocument(stationNumber)
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

//SECTION 2019-10-09 fct_getCarousselConfig(configContent, refCode, pos)
function fct_getCarousselConfig(configContent, refCode, pos) {
    var errorCode = 0;
    var errorMessage = "";
    var cavityPartNumber = [];
    var cavitySide = [];

    var configuration = configContent.plcSettings.carousselConfig;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".plcSettings.carousselConfig is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            cavityPartNumber: cavityPartNumber,
            cavitySide: cavitySide
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if ((configuration[i].refCode == refCode) && (configuration[i].pos == pos)) {
            cavityPartNumber = configuration[i].cavityPartNumber;
            cavitySide = configuration[i].cavitySide;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        cavityPartNumber: cavityPartNumber,
        cavitySide: cavitySide
    }
}

//SECTION 2019-10-09 fct_getDummyTrolleyInformation(configContent, refCode)
function fct_getDummyTrolleyInformation(configContent, refCode) {
    var errorCode = 0;
    var errorMessage = "";
    var trolleyPartNumber = "-1";
    var dummyTrolleyId = "-1";

    var configuration = configContent.plcSettings.dummyTrolleyInfo;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".plcSettings.dummyTrolleyInfo is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            trolleyPartNumber: trolleyPartNumber,
            dummyTrolleyId: dummyTrolleyId
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].refCode == refCode) {
            trolleyPartNumber = configuration[i].trolleyPartNumber;
            dummyTrolleyId = configuration[i].dummyTrolleyId;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        trolleyPartNumber: trolleyPartNumber,
        dummyTrolleyId: dummyTrolleyId
    }
}

//SECTION 2019-10-09 fct_getCastingEqData(configContent)
function fct_getCastingEqData(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var castingEquipments = configuration;

    var configuration = configContent.castingEquipments;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".castingEquipments is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            castingEquipments: castingEquipments
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        castingEquipments: castingEquipments
    }
}

//SECTION 2019-10-09 fct_getTopicTemplate(configContent, stationNumber)
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

//SECTION 2019-10-09 fct_getAlarms(configContent)
function fct_getAlarms(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var messageType = configuration;

    var configuration = configContent.plcSettings.parameterAlarmCodes;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".plcSettings.parameterAlarmCodes is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            messageType: messageType
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        messageType: messageType
    }
}

//SECTION 2019-10-09 fct_getReference(configContent, code, side)
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

//SECTION 2019-10-09 fct_getLine(configContent, code)
function fct_getLine(configContent, code) {
    var errorCode = 0;
    var errorMessage = "";
    var line = "-1";

    var configuration = configContent.castingLines;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".castingLines is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            line: line
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].code == code) {
            line = configuration[i].line;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        line: line
    }
}


// #############################################################################
// #############################################################################
// #############################################################################
function getWorkorder(stationNumber, partNumber, infoText) {
    var workorder = "";
    var errorCode = 0;
    var TEMP_WO_AR = [];
    var TEMP_START_DATE_AR = [];
    var TEMP_INFO_TXT = [];
    //--------------------------------------------------------------------------

    // <mdataGetWorkorders> ----------------------------------------------------
    var mdataGetWorkordersFilers = new Array(new KeyValue("PART_NUMBER", partNumber), new KeyValue("WORKORDER_STATE", "F,S"));
    var mdataGetWorkordersResultKeys = new Array("WORKORDER_NUMBER", "PLANNED_START_DATE", "INFO_TXT_1");
    var result_mdataGetWorkorders = imsApiService.mdataGetWorkorders(imsApiSessionContext,
        stationNumber,
        mdataGetWorkordersFilers,
        mdataGetWorkordersResultKeys
    );

    var return_value = result_mdataGetWorkorders.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        workorder = "";
        return {
            workorder: workorder,
            errorCode: errorCode
        }
    }

    for (var x = 0; x < result_mdataGetWorkorders.mdataGetWorkordersResultValues.length / 3; x++) {
        var txt = result_mdataGetWorkorders.mdataGetWorkordersResultValues[x * 3 + 2];
        if (txt == infoText) {
            TEMP_WO_AR.push(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x * 3 + 0]);
            TEMP_START_DATE_AR.push(parseInt(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x * 3 + 1]));
            TEMP_INFO_TXT.push(txt);
        }
    }

    // Sort Workorders by start date (from newest to oldest)
    if (TEMP_WO_AR.length > 1) {
        for (var x = 0; x < TEMP_WO_AR.length; x++) {
            for (var y = x + 1; y < TEMP_WO_AR.length; y++) {
                if (TEMP_START_DATE_AR[y] > TEMP_START_DATE_AR[x]) {
                    var wo = TEMP_WO_AR[y];
                    TEMP_WO_AR[y] = TEMP_WO_AR[x];
                    TEMP_WO_AR[x] = wo;
                    var sd = TEMP_START_DATE_AR[y];
                    TEMP_START_DATE_AR[y] = TEMP_START_DATE_AR[x];
                    TEMP_START_DATE_AR[x] = sd;
                }
            }
        }
    }

    // Most recent workorder
    //--------------------------------------------------------------------------
    workorder = TEMP_WO_AR[0];
    //--------------------------------------------------------------------------

    return {
        workorder: workorder,
        errorCode: errorCode
    }
}

function uploadVirtualEngravingId() {

    var inArgs = uploadVirtualEngravingId.arguments;
    var logs = "";
    try {
        var tempOb = parseUploadVirtualEngravingId(inArgs);
        var errorCode = 0;
        var errorMessage = "";
        var state = 0;

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------

        //SECTION 2019-10-09 Get configContent for uploadVirtualEngravingId
        var configContent = fct_readDocument(tempOb.IN_STATION_NUMBER);

        if (tempOb.IN_MCT_MANAGEMENT.equals("0")) {
            state = 0; //pass
        }
        else {
            state = 2; //scrap
        }

        logHandler.logMessage(">>>> START FUNCTION");

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("BATCH_QUEUE_MAP");
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
            return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
        }


        var BATCH_QUEUE_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];


        logs = "\n >>>> BATCH_QUEUE_MAP : " + BATCH_QUEUE_MAP; tempOb.OUT_RESULT += logs;


        // <End call> ----------------------------------------------------------

        var OUT_ID_AR = [];
        var OUT_PN_AR = [];
        var OUT_STATION_AR = [];


        OUT_STATION_AR.push(getStationId(tempOb.IN_STATION_NUMBER, (tempOb.IN_ACTUAL_POSITION - 1) * 2 + 1).station);
        OUT_STATION_AR.push(getStationId(tempOb.IN_STATION_NUMBER, (tempOb.IN_ACTUAL_POSITION - 1) * 2 + 2).station);


        var ref = "";
        var prod = "";
        tempOb.OUT_RESULT += " -> \n";


        for (var i = 0; i < tempOb.IN_UID_AR.length; i++) {
            var r = getInfoFromUID(tempOb.IN_UID_AR[i]);
            var reference = r.reference;
            tempOb.OUT_RESULT += "@@ " + r.reference + "\n";

            //SECTION 2019-10-09 Load caroussel configuration
            var res = fct_getCarousselConfig(configContent, r.reference, i);            //? get caroussel config --> {cavityPartNumber[], cavitySide[]}
            var cavityPartNumber = res.cavityPartNumber;
            var cavitySide = res.cavitySide;
            // ----------------------------------------------------------------

            if (cavityPartNumber.length == 2) {
                OUT_PN_AR.push(cavityPartNumber[0]);
                OUT_ID_AR.push(cavitySide[0] + tempOb.IN_UID_AR[i]);
                OUT_PN_AR.push(cavityPartNumber[1]);
                OUT_ID_AR.push(cavitySide[1] + tempOb.IN_UID_AR[i]);
                tempOb.OUT_RESULT += "      @" + i + " " + OUT_STATION_AR[i] + "\n";
            }

            if (cavityPartNumber.length == 1) {
                OUT_PN_AR.push(cavityPartNumber[0]);
                OUT_ID_AR.push(cavitySide[0] + tempOb.IN_UID_AR[i]);
                tempOb.OUT_RESULT += "      @" + i + " " + OUT_STATION_AR[i] + "\n";
            }
            //!SECTION
            // ----------------------------------------------------------------
        }

        tempOb.IN_SCPN_AR = [];

        for (var x = 0; x < OUT_PN_AR.length; x++) {
            tempOb.IN_SCPN_AR.push(getCastingProduct(OUT_PN_AR[x]));
        }

        for (var x = 0; x < tempOb.IN_SCPN_AR.length; x++) {
            logs = "\n >>>> IN_SCPN_AR : " + tempOb.IN_SCPN_AR[x]; tempOb.OUT_RESULT += logs;
            logs = "\n >>>> OUT_PN_AR : " + OUT_PN_AR[x]; tempOb.OUT_RESULT += logs;
            logs = "\n >>>> OUT_ID_AR : " + OUT_ID_AR[x]; tempOb.OUT_RESULT += logs;
            logs = "\n--------------"; tempOb.OUT_RESULT += logs;
            logHandler.logMessage(logs);
        }

        var TEMP_BATCH_QUEUE_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        tempOb.TEMP_BATCH_AR = getCurrentBatches(tempOb.IN_SCPN_AR, TEMP_BATCH_QUEUE_MAP).queue;

        for (var x = 0; x < tempOb.IN_PN_AR.length; x++) {
            logs = "\n >>>> IN_PN_AR : " + tempOb.IN_PN_AR[x]; tempOb.OUT_RESULT += logs;
        }

        logs = "\n >>>> TEMP_BATCH_QUEUE_MAP : " + TEMP_BATCH_QUEUE_MAP; tempOb.OUT_RESULT += logs;

        for (var x = 0; x < tempOb.TEMP_BATCH_AR.length; x++) {
            logs = "\n >>>> TEMP_BATCH_AR : " + tempOb.TEMP_BATCH_AR[x]; tempOb.OUT_RESULT += logs;
        }

        // ---------------------------------------------------------------------
        // <Loop i> ------------------------------------------------------------
        for (var i = 0; i < tempOb.TEMP_BATCH_AR.length; i++) {
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("PASS_QTY");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
                tempOb.IN_STATION_NUMBER,
                2,
                tempOb.TEMP_BATCH_AR[i],
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys);

            var return_value = result_attribGetAttributeValues.return_value;
            logs = "  \n [i=" + i + "] [attribGetAttributeValues] : " + return_value; tempOb.OUT_RESULT += logs;
            if (return_value != 0) {
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
                return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
            }


            var batch_qty = parseInt("" + result_attribGetAttributeValues.attributeResultValues[1]);
            tempOb.IN_QTY_AR.push(batch_qty);

        }
        // <End loop i> -------------------------------------------------------- 
        // ---------------------------------------------------------------------

        // main loop
        // ---------------------------------------------------------------------
        var END_OF_TROLLEY = false;
        var CONSUME_FLAG = false;

        var P = 0;
        for (var i = 0; i < OUT_STATION_AR.length; i++) {
            logs = "\n %%% Station : " + OUT_STATION_AR[i]; tempOb.OUT_RESULT += logs;
            var nb = tempOb.IN_SCPN_AR.length;

            var dim = tempOb.IN_SCPN_AR.length;
            if (dim == 4) {
                dim = 2;
            }
            else {
                dim = 1;
            }
            for (var j = 0; j < (dim); j++) {

                if (tempOb.TEMP_BATCH_AR[i * dim + j] != undefined) {


                    //P=(i*dim+j);		
                    //tempOb.IN_QTY_AR[P]--;        		
                    // ---------------------------------------------------------		
                    if (tempOb.IN_QTY_AR[P] < 0) {
                        END_OF_TROLLEY = true;
                    }

                    // ---------------------------------------------------------

                    logs = "  \n %%% ID : " + OUT_ID_AR[i * dim + j]; tempOb.OUT_RESULT += logs;
                    logs = "  \n %%% PN : " + OUT_PN_AR[i * dim + j]; tempOb.OUT_RESULT += logs;
                    logs = "  \n %%% BT : " + tempOb.TEMP_BATCH_AR[i * dim + j]; tempOb.OUT_RESULT += logs;
                    logs = "  \n ---------------------------"; tempOb.OUT_RESULT += logs;
                    // APIs --------------------------------------------------------
                    if (!END_OF_TROLLEY) {

                        var woResult = getWorkorder(OUT_STATION_AR[i], OUT_PN_AR[i * dim + j], "WP1");   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP1"
                        var WORKORDER = woResult.workorder;

                        var snrArray = new Array();
                        // <trAssignSerialNumberForProductOrWorkOrder> -------------------------------
                        var result_trAssignSerialNumberForProductOrWorkOrder = imsApiService.trAssignSerialNumberForProductOrWorkOrder(imsApiSessionContext,
                            OUT_STATION_AR[i],
                            WORKORDER,
                            OUT_PN_AR[i * dim + j],
                            "-1",
                            OUT_ID_AR[i * dim + j],
                            "1",
                            -1,
                            snrArray,
                            0);

                        var return_value = result_trAssignSerialNumberForProductOrWorkOrder.return_value;
                        logs = "  \n [i=" + i + ",j=" + j + "] [trAssignSerialNumberForProductOrWorkOrder 1] : " + return_value; tempOb.OUT_RESULT += logs;
                        if (return_value != 0 && return_value != -206) {
                            errorMessage = "[trAssignSerialNumberForProductOrWorkOrder] " + getImsApiErrorText(return_value);
                            return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                        }

                        // <batchMergeBatch> ---------------------------------------------------------
                        var result_batchMergeBatch = imsApiService.batchMergeBatch(imsApiSessionContext,
                            OUT_STATION_AR[i],
                            OUT_ID_AR[i * dim + j],
                            "1",
                            tempOb.TEMP_BATCH_AR[i * dim + j],
                            "2",
                            1,
                            0,
                            1);

                        var return_value = result_batchMergeBatch.return_value;
                        logs = "  \n [i=" + i + ",j=" + j + "] [batchMergeBatch] : " + return_value; tempOb.OUT_RESULT += logs;
                        if (return_value != 0) {
                            errorMessage = "[batchMergeBatch] " + getImsApiErrorText(return_value);
                            return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                        }



                        P = (i * dim + j);
                        tempOb.IN_QTY_AR[P]--;

                        logs = "  \n %%% tempOb.TEMP_BATCH_AR[i*dim+j] i=" + i + " j=" + j + " dim=" + dim + " : " + tempOb.TEMP_BATCH_AR[i * dim + j]; tempOb.OUT_RESULT += logs;
                        logs = "  \n %%% IN_QTY_AR[" + P + "] : " + tempOb.IN_QTY_AR[P]; tempOb.OUT_RESULT += logs;
                        logs = "  \n"; tempOb.OUT_RESULT += logs;
                        if (tempOb.IN_QTY_AR[P] >= 0) {
                            // <attribAppendAttributeValues> ---------------------------------------------
                            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                            var attributeUploadValues = new Array("PASS_QTY", tempOb.IN_QTY_AR[P], "0");
                            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
                                OUT_STATION_AR[i],
                                2,
                                tempOb.TEMP_BATCH_AR[i * dim + j],
                                "-1",
                                -1,
                                1,
                                attributeUploadKeys,
                                attributeUploadValues);

                            var return_value = result_attribAppendAttributeValues.return_value;
                            logs = "  \n [i=" + i + ",j=" + j + "] [attribAppendAttributeValues 1] : " + return_value; tempOb.OUT_RESULT += logs;
                            if (return_value != 0) {
                                errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
                                return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                            }
                        }

                        var cycle_time = 0;
                        cycle_time = parseInt(tempOb.IN_CYCLE_TIME);
                        logs = "  \n %%% IN_CYCLE_TIME : " + tempOb.IN_CYCLE_TIME; tempOb.OUT_RESULT += logs;

                        //<trUploadState>-------------------------------------------------------------
                        var result_trActivateWorkOrder = imsApiService.trActivateWorkOrder(imsApiSessionContext,
                            OUT_STATION_AR[i],
                            "-1",
                            OUT_ID_AR[i * dim + j],
                            "-1",
                            2,
                            1);

                        var return_value = result_trActivateWorkOrder.return_value;
                        if (return_value != 0) {
                            errorMessage = "[trActivateWorkOrder] " + getImsApiErrorText(return_value);
                            return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                        }

                        // ANCHOR Update material consumption ----------------------------------------
                        // ---------------------------------------------------------------------------

                        var result_setupStateChange = imsApiService.setupStateChange(imsApiSessionContext,
                            OUT_STATION_AR[i],
                            2,
                            "-1",
                            OUT_ID_AR[i * dim + j],
                            -1,
                            0);

                        var storage = getStorage(OUT_STATION_AR[i]);
                        var res = fct_uploadMaterialBinBooking(OUT_STATION_AR[i], OUT_ID_AR[i * dim + j], storage);
                        logHandler.logMessage("#### fct_uploadMaterialBinBooking [" + i + "] for " + OUT_STATION_AR[i]);

                        //<trUploadState>-------------------------------------------------------------
                        var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
                        var serialNumberUploadValues = new Array();
                        var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext,
                            OUT_STATION_AR[i],
                            2,
                            OUT_ID_AR[i * dim + j],
                            "-1",
                            state,
                            0,
                            "-1",
                            cycle_time,
                            serialNumberUploadKeys,
                            serialNumberUploadValues);

                        var return_value = result_trUploadState.return_value;
                        logs = "  \n [i=" + i + ",j=" + j + "] [trUploadState] : " + return_value; tempOb.OUT_RESULT += logs;
                        if (return_value != 0) {
                            errorMessage = "[trUploadState] " + getImsApiErrorText(return_value);
                            return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                        }

                        var result_setupStateChange = imsApiService.setupStateChange(imsApiSessionContext,
                            OUT_STATION_AR[i],
                            2,
                            "-1",
                            OUT_ID_AR[i * dim + j],
                            -1,
                            1);

                        // -------------------------------------------------------------                

                        // ----------------------------------------------------------------------------------------------------------------------

                        logs = "\n >>>> tempOb.IN_QTY_AR[i] : " + tempOb.IN_QTY_AR[P]; tempOb.OUT_RESULT += logs;
                        logs = "\n >>>> -------------------------------- \n"; tempOb.OUT_RESULT += logs;

                        if (tempOb.IN_QTY_AR[P] > 0) {
                            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                            //tempOb.TEMP_NEW_QUEUE = updateQueueMap(tempOb.IN_PN_AR[i],tempOb.TEMP_BATCH_AR[i],TEMP_BATCH_QUEUE_MAP).queue;

                            //var UQMQ = updateQueueMapQuantity(OUT_PN_AR[P],tempOb.TEMP_BATCH_AR[P],tempOb.IN_QTY_AR[P],TEMP_BATCH_QUEUE_MAP);
                            var UQMQ = updateQueueMapQuantity(tempOb.IN_SCPN_AR[P], tempOb.TEMP_BATCH_AR[P], tempOb.IN_QTY_AR[P], TEMP_BATCH_QUEUE_MAP);

                            tempOb.TEMP_NEW_QUEUE = UQMQ.queue;
                            TEMP_BATCH_QUEUE_MAP = tempOb.TEMP_NEW_QUEUE;

                            logs = "\n >>>> [i*dim+j] : " + (P); tempOb.OUT_RESULT += logs;
                            logs = "\n >>>> OUT_PN_AR[i] : " + OUT_PN_AR[P]; tempOb.OUT_RESULT += logs;
                            logs = "\n >>>> IN_SCPN_AR[i] : " + tempOb.IN_SCPN_AR[P]; tempOb.OUT_RESULT += logs;
                            logs = "\n >>>> TEMP_BATCH_AR[i*dim+j] : " + tempOb.TEMP_BATCH_AR[P]; tempOb.OUT_RESULT += logs;
                            logs = "\n >>>> IN_QTY_AR[i*dim+j] : " + tempOb.IN_QTY_AR[P]; tempOb.OUT_RESULT += logs;
                            logs = "\n >>>> TEMP_NEW_QUEUE : " + tempOb.TEMP_NEW_QUEUE; tempOb.OUT_RESULT += logs;

                            // <attribAppendAttributeValues> ---------------------------------------------
                            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                            var attributeUploadValues = new Array("BATCH_QUEUE_MAP", tempOb.TEMP_NEW_QUEUE, "0");
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
                            logs = "  \n [i=" + i + ",j=" + j + "] [attribAppendAttributeValues 2] : " + return_value; tempOb.OUT_RESULT += logs;
                            if (return_value != 0) {
                                errorMessage = "[attribAppendAttributeValues 2] " + getImsApiErrorText(return_value);
                                return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                            }
                        }
                        else {

                        }

                        // ----------------------------------------------------------------------------------------------------------------------
                    }
                }
                else {
                    return_value = -55000;
                    errorMessage = "No available Trolley in the setup";
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                }
            }

            if (END_OF_TROLLEY) {
                errorMessage = "Trolley is finished Dummy troley is used!";
                //                return_value = -10000;
                //                return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                CONSUME_FLAG = true;
                // <attribGetAttributeValues> ---------------------------------------------
                var attributeCodeArray = new Array("DC_TROLLEY_MAP", "DC_PART_MAP");
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
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                }
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_DC_TROLLEY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[4];
                var TEMP_DC_PART_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                //SECTION 2019-10-09 getting the dummy trolley information from the product code
                var res = fct_getDummyTrolleyInformation(configContent, reference);           //? get dummyTrolley information -->{trolleyPartNumber, dummyTrolleyId}
                var MATERIAL_BIN_PART_NUMBER = res.trolleyPartNumber;
                var MATERIAL_BIN_NUMBER = res.dummyTrolleyId;
                //!SECTION

                //getting the batches part numbers
                var TEMP_PART_NUMBER_AR = [];
                for (var s = 0; s < tempOb.TEMP_BATCH_AR.length; s++) {

                    var serialNumberResultKeys = new Array("PART_NUMBER");
                    var result_trGetSerialNumberInfo = imsApiService.trGetSerialNumberInfo(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        tempOb.TEMP_BATCH_AR[s],
                        "-1",
                        serialNumberResultKeys
                    );

                    var return_value = result_trGetSerialNumberInfo.return_value;

                    if (return_value != 0) {
                        errorMessage = "[trGetSerialNumberInfo] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                    }
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    TEMP_PART_NUMBER_AR.push("" + result_trGetSerialNumberInfo.serialNumberResultValues[0]);
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                }

                //checking if there is a dummy trolley with its batches created for this part


                // <mlCreateNewMaterialBin> ----------------------------------------
                var materialBinUploadKeys = new Array("ERROR_CODE", "MATERIAL_BIN_NUMBER", "MATERIAL_BIN_PART_NUMBER", "MATERIAL_BIN_QTY_ACTUAL");
                var materialBinUploadValues = new Array("0", MATERIAL_BIN_NUMBER, MATERIAL_BIN_PART_NUMBER, "0");

                var result_mlCreateNewMaterialBin = imsApiService.mlCreateNewMaterialBin(imsApiSessionContext,
                    tempOb.IN_STATION_NUMBER,
                    materialBinUploadKeys,
                    materialBinUploadValues
                );

                var return_value = result_mlCreateNewMaterialBin.return_value;

                if (return_value != 0 && return_value != -504 && (return_value != 5 && result_mlCreateNewMaterialBin.materialBinResultValues[0].ERROR_CODE != -505)) {
                    errorMessage = "[mlCreateNewMaterialBin] " + getImsApiErrorText(return_value);
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                }



                //<mdataGetCalendarData>----------------------------------------------------------------
                var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
                var result_mdataGetCalendarData = imsApiService.mdataGetCalendarData(imsApiSessionContext,
                    tempOb.IN_STATION_NUMBER,
                    calendarDataResultKeys);

                var return_value = result_mdataGetCalendarData.return_value;

                if (return_value != 0) {
                    errorMessage = "[mdataGetCalendarData] " + getImsApiErrorText(return_value);
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                }
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                var attributeUploadValues = new Array("START_TIME", TEMP_CURRENT_TIME, "0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
                    tempOb.IN_STATION_NUMBER,
                    2,
                    MATERIAL_BIN_NUMBER,
                    "-1",
                    -1,
                    1,
                    attributeUploadKeys,
                    attributeUploadValues);

                var return_value = result_attribAppendAttributeValues.return_value;

                if (return_value != 0) {

                    errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                }


                var generation_flag = false;
                var TEMP_BATCHES_AR = [];
                logHandler.logMessage("part ar" + TEMP_PART_NUMBER_AR);
                for (var s = 0; s < TEMP_PART_NUMBER_AR.length; s++) {
                    if (generation_flag == false) {
                        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                        var TEMP_BATCH = "SCB" + TEMP_PART_NUMBER_AR[s] + "--DUMMY"
                        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                        generation_flag = true;

                    } else {
                        var TEMP_BATCH = "SCB" + TEMP_PART_NUMBER_AR[s] + "--DUMMY";
                    }
                    logHandler.logMessage("*****" + TEMP_BATCH);

                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    var TEMP_WO_AR = [];
                    var TEMP_START_DATE_AR = [];
                    var TEMP_WORKORDERS_AR = [];
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                    // <mdataGetWorkorders> ---------------------------------------------
                    var mdataGetWorkordersFilers = new Array(new KeyValue("PART_NUMBER", TEMP_PART_NUMBER_AR[s]));
                    var mdataGetWorkordersResultKeys = new Array("WORKORDER_NUMBER", "PLANNED_START_DATE");
                    var result_mdataGetWorkorders = imsApiService.mdataGetWorkorders(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        mdataGetWorkordersFilers,
                        mdataGetWorkordersResultKeys
                    );

                    var return_value = result_mdataGetWorkorders.return_value;

                    if (return_value != 0 && return_value != 1) {

                        errorMessage = "[mdataGetWorkorders] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                    }

                    for (x = 0; x < result_mdataGetWorkorders.mdataGetWorkordersResultValues.length / 2; x++) {
                        TEMP_WO_AR.push(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x * 2 + 0]);
                        TEMP_START_DATE_AR.push(parseInt(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x * 2 + 1]));
                    }


                    if (TEMP_WO_AR.length == 0) {
                        // <mdataCreateWorkorder> ---------------------------------------------
                        var workorderUploadValues = new Array(new KeyValue("PART_NUMBER", TEMP_PART_NUMBER_AR[s]),
                            new KeyValue("WORKORDER_QUANTITY", 10000),
                            new KeyValue("WORKPLAN_ALT", "01"), new KeyValue("CUSTOMER_WORKORDER_NUMBER", "WO_" + TEMP_PART_NUMBER_AR[s] + "_" + TEMP_CURRENT_TIME),
                            new KeyValue("WORKORDER_NUMBER", "WO_" + TEMP_PART_NUMBER_AR[s] + "_" + TEMP_CURRENT_TIME));

                        var workorderResultKeys = new Array("WORKORDER_NUMBER");
                        var result_mdataCreateWorkorder = imsApiService.mdataCreateWorkorder(imsApiSessionContext,
                            tempOb.IN_STATION_NUMBER,
                            workorderUploadValues,
                            workorderResultKeys
                        );

                        var return_value = result_mdataCreateWorkorder.return_value;

                        if (return_value != 0) {

                            errorMessage = "[mdataCreateWorkorder] " + getImsApiErrorText(return_value);
                            return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                        }
                        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                        var TEMP_AVAILABLE_WO = result_mdataCreateWorkorder.workorderResultValues[0];
                        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv


                    } else {
                        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                        var TEMP_AVAILABLE_WO = getLatestWo(TEMP_WO_AR, TEMP_START_DATE_AR);
                        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                    }
                    TEMP_WORKORDERS_AR.push(TEMP_AVAILABLE_WO);

                    // <batchAssignBatchNumberToWorkOrder> --------------------------------------------- 
                    var result_batchAssignBatchNumberToWorkOrder = imsApiService.batchAssignBatchNumberToWorkOrder(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        TEMP_AVAILABLE_WO,
                        "-1",
                        "-1",
                        "-1",
                        "-1",
                        2,
                        TEMP_BATCH,
                        0,
                        0);

                    var return_value = result_batchAssignBatchNumberToWorkOrder.return_value;

                    if (return_value != 0 && return_value != -206 && return_value != -504) {
                        errorMessage = "[batchAssignBatchNumberToWorkOrder] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                    }
                    //<trGetSerialNumberUploadInfo>----------------------------------------------------------------
                    var uploadInfoResultKeys = new Array("LOOP_COUNTER");
                    var serialNumberUploadValues = new Array();
                    var result_trGetSerialNumberUploadInfo = imsApiService.trGetSerialNumberUploadInfo(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        2,
                        TEMP_BATCH,
                        "-1",
                        0,
                        uploadInfoResultKeys);

                    var return_value = result_trGetSerialNumberUploadInfo.return_value;

                    if (return_value != 0 && return_value != -507) {

                        errorMessage = "[trGetSerialNumberUploadInfo] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                    }
                    var TEMP_LOOP_COUNTER = "" + result_trGetSerialNumberUploadInfo.uploadInfoResultValues[0];

                    // ANCHOR Need clarification
                    if (TEMP_LOOP_COUNTER == "0") {
                        //<trUploadState>----------------------------------------------------------------
                        var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
                        var serialNumberUploadValues = new Array();
                        var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext,
                            "04002011",
                            2,
                            TEMP_BATCH,
                            "-1",
                            0,
                            0,
                            "-1",
                            0,
                            serialNumberUploadKeys,
                            serialNumberUploadValues);

                        var return_value = result_trUploadState.return_value;

                        if (return_value != 0 && return_value != -507) {

                            errorMessage = "[trUploadState] " + getImsApiErrorText(return_value);
                            return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                        }
                    }
                    // <mlChangeMaterialBinData> --------------------------------------------- 
                    var materialBinUploadValues = new Array(new KeyValue("MATERIAL_BIN_QTY_TOTAL", 10000000));
                    var result_mlChangeMaterialBinData = imsApiService.mlChangeMaterialBinData(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        TEMP_BATCH,
                        materialBinUploadValues);

                    var return_value = result_mlChangeMaterialBinData.return_value;

                    if (return_value != 0) {
                        errorMessage = "[mlChangeMaterialBinData] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                    }
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv           
                    TEMP_BATCHES_AR.push(TEMP_BATCH);
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                    // <attribAppendAttributeValues> ------------------------------------------------------
                    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                    var attributeUploadValues = new Array("PASS_QTY", "100000000", "0", "SCRAP_QTY", "100000000", "0");
                    var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        2,
                        TEMP_BATCH,
                        "-1",
                        -1,
                        1,
                        attributeUploadKeys,
                        attributeUploadValues);

                    var return_value = result_attribAppendAttributeValues.return_value;

                    if (return_value != 0) {

                        errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                    }
                }


                // <shipActivateShippingLotAtKap> --------------------------------------
                var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext,
                    tempOb.IN_STATION_NUMBER,
                    MATERIAL_BIN_NUMBER
                );

                var return_value = result_shipActivateShippingLotAtKap.return_value;

                if (return_value != 0) {
                    errorMessage = "[shipActivateShippingLotAtKap] " + getImsApiErrorText(return_value);
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);

                }

                logHandler.logMessage("batches ar" + TEMP_BATCHES_AR);
                for (s = 0; s < TEMP_BATCHES_AR.length; s++) {

                    // <shipAddSerialNumberToShippingLot> ------------------------------
                    var result_shipAddSerialNumberToShippingLot = imsApiService.shipAddSerialNumberToShippingLot(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        MATERIAL_BIN_NUMBER,
                        TEMP_BATCHES_AR[s],
                        "-1",
                        "-1");

                    var return_value = result_shipAddSerialNumberToShippingLot.return_value;

                    if (return_value != 0 && return_value != 406 && return_value != -424) {
                        errorMessage = "[shipAddSerialNumberToShippingLot] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);

                    }
                    //<mdataGetCalendarData>----------------------------------------------------------------
                    var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
                    var result_mdataGetCalendarData = imsApiService.mdataGetCalendarData(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        calendarDataResultKeys);

                    var return_value = result_mdataGetCalendarData.return_value;

                    if (return_value != 0) {

                        errorMessage = "[mdataGetCalendarData] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);

                    }

                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                    // <attribAppendAttributeValues> ---------------------------------------------
                    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                    var attributeUploadValues = new Array("START_TIME", TEMP_CURRENT_TIME, "0");
                    var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
                        tempOb.IN_STATION_NUMBER,
                        2,
                        TEMP_BATCHES_AR[s],
                        "-1",
                        -1,
                        1,
                        attributeUploadKeys,
                        attributeUploadValues);

                    var return_value = result_attribAppendAttributeValues.return_value;

                    if (return_value != 0) {

                        errorMessage = "[mdataGetCalendarData] " + getImsApiErrorText(return_value);
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                    }
                }


                var TEMP_OBJECT = getPositionFromBatchId(TEMP_DC_PART_MAP, TEMP_PART_NUMBER_AR[0], 0);
                var TEMP_ERROR = TEMP_OBJECT.err;

                if (TEMP_ERROR != 0) {

                    errorCode = TEMP_ERROR;
                    errorMessage = "[Error in getPositionFromBatchId] " + TEMP_OBJECT.message;


                    return resultUploadVirtualEngravingId("CF", errorCode, errorMessage, tempOb);
                }

                var TEMP_POSTION = TEMP_OBJECT.position;

                // updating trolely wipstate
                TEMP_OBJECT = getIdFromPosition(TEMP_POSTION, TEMP_DC_TROLLEY_MAP, "", 0);
                TEMP_ERROR = TEMP_OBJECT.err;

                if (TEMP_ERROR != 0) {

                    errorCode = -10001;

                    errorMessage = "[Error in getIdFromPosition] " + TEMP_OBJECT.message;


                    return resultUploadVirtualEngravingId("CF", errorCode, errorMessage, tempOb);
                }
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                TEMP_TROLLEY_ID = TEMP_OBJECT.trolleyId;
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                var attributeUploadValues = new Array("WIP_STATE", "TO_SCRAP", "0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext,
                    tempOb.IN_STATION_NUMBER,
                    2,
                    TEMP_TROLLEY_ID,
                    "-1",
                    -1,
                    1,
                    attributeUploadKeys,
                    attributeUploadValues);

                var return_value = result_attribAppendAttributeValues.return_value;

                if (return_value != 0) {

                    errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                }

                //update position map
                var TEMP_UPDATE = TEMP_POSTION + ":" + MATERIAL_BIN_NUMBER;
                var TEMP_OBJECT = updatePositionMap(TEMP_UPDATE, TEMP_DC_TROLLEY_MAP, "", TEMP_ERROR);
                TEMP_ERROR = TEMP_OBJECT.err;


                if (TEMP_ERROR != 0) {

                    errorCode = -1003;
                    errorCode = TEMP_ERROR;
                    errorMessage = "[Error in updatePositionMap] " + TEMP_OBJECT.message;


                    return resultUploadVirtualEngravingId("CF", errorCode, errorMessage, tempOb);
                }

                // vvvvvvvvvvvv saving old trolley and the new part map vvvvvvvvvvvvvvvv
                TEMP_DC_TROLLEY_MAP = TEMP_OBJECT.map;
                var TEMP_OLDTROLLEYID = TEMP_OBJECT.oldTrolleyId;
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 


                //update part map
                // updating the new part numbers of the new trolley in the mapping in the position that was changed 
                var TEMP_POS_DATA = TEMP_POSTION + ":" + TEMP_PART_NUMBER_AR[0] + "," + TEMP_PART_NUMBER_AR[1];
                TEMP_OBJECT = updatePartMap(TEMP_POS_DATA, TEMP_DC_PART_MAP, TEMP_ERROR);
                TEMP_ERROR = TEMP_OBJECT.err;


                if (TEMP_ERROR != 0) {

                    errorCode = -1004;


                    errorMessage = "[Error in updatePartMap] " + TEMP_OBJECT.message;


                    return resultUploadVirtualEngravingId("CF", errorCode, errorMessage, tempOb);
                }
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                TEMP_DC_PART_MAP = TEMP_OBJECT.map;
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                var attributeUploadValues = new Array("DC_TROLLEY_MAP", TEMP_DC_TROLLEY_MAP, "0", "DC_PART_MAP", TEMP_DC_PART_MAP, "0");
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
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                }


                // <attribGetAttributeValues> ------------------------------------------
                var attributeCodeArray = new Array("BATCH_QUEUE_MAP");
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
                    return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                }


                var TEMP_BATCH_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
                logHandler.logMessage("ddddd" + TEMP_BATCH_MAP);
                //update batch queue map
                logHandler.logMessage("ddddd" + TEMP_BATCHES_AR);
                for (var q = 0; q < TEMP_BATCHES_AR.length; q++) {
                    TEMP_OBJECT = updateBatchMap(TEMP_BATCH_MAP, TEMP_BATCHES_AR[q], TEMP_PART_NUMBER_AR[q], "0", TEMP_ERROR);
                    TEMP_ERROR = TEMP_OBJECT.err;

                    if (TEMP_ERROR != 0) {

                        errorCode = -1012;
                        errorMessage = "[Error in updateBatchMap] " + TEMP_OBJECT.message;


                        return resultUploadVirtualEngravingId("CF", errorCode, errorMessage, tempOb);
                    }

                    TEMP_BATCH_MAP = TEMP_OBJECT.map;

                    logHandler.logMessage("ddddd2" + TEMP_BATCH_MAP);
                    // <attribAppendAttributeValues> ---------------------------------------------
                    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
                    var attributeUploadValues = new Array("BATCH_QUEUE_MAP", TEMP_BATCH_MAP, "0");
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
                        return resultUploadVirtualEngravingId("CF", return_value, errorMessage, tempOb);
                    }
                }
                //setup position and Batch queue map need to be updated before the second execution
                return uploadVirtualEngravingId(tempOb.IN_STATION_NUMBER, tempOb.IN_ACTUAL_POSITION, tempOb.IN_MCT_MANAGEMENT, tempOb.IN_UID_AR[0], tempOb.IN_UID_AR[1]);



            }


        }


        // ---------------------------------------------------------------------


        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------  
        logHandler.logMessage("custom function OPC.uploadVirtualEngravingId finished.");
        return resultUploadVirtualEngravingId("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.uploadVirtualEngravingId failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function uploadVirtualEngravingIdOb() {

    this.IN_STATION_NUMBER = "";                    //Input Station Number

    this.IN_ID_SIZE = 0;
    this.IN_UID_AR = [];

    this.IN_ID_AR = [];
    this.IN_PN_AR = [];
    this.IN_CPN_AR = [];
    this.IN_QTY_AR = [];

    this.IN_ACTUAL_POSITION = "";
    this.IN_MCT_MANAGEMENT = "0";
    this.IN_CYCLE_TIME = "0";

    this.TEMP_BATCH_AR = [];
    this.TEMP_NEW_QUEUE = "";

    this.OUT_RESULT = "";

    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUploadVirtualEngravingId(inArgs) {

    var tempObject = new uploadVirtualEngravingIdOb();
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
                logHandler.logMessage("#### IN_UID_AR " + trim("" + inArgs[x]));
                logHandler.logMessage("#### --------------------------- ");
            }
        }

        // Bloc #5
        if (x == (3 + (1 * blocsize) + 1)) {
            tempObject.IN_CYCLE_TIME = trim("" + inArgs[x]);
        }

    }
    return tempObject;
}

function resultUploadVirtualEngravingId(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;

    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";

    for (var x = 0; x < tempOb.IN_ID_AR.length; x++) {
        result.outArgs[0] += "\n" + "; ID : " + tempOb.IN_ID_AR[x] +
            "\n" + "; ACTUAL POSITION : " + tempOb.IN_ACTUAL_POSITION;
    }

    result.outArgs[0] += "\n";
    for (var x = 0; x < tempOb.TEMP_BATCH_AR.length; x++) {
        result.outArgs[0] += "\n" + " BATCH [" + x + "] : " + tempOb.TEMP_BATCH_AR[x];
    }

    result.outArgs[0] += "\n\n" + "QUEUE : " + tempOb.TEMP_NEW_QUEUE + "\n\n";

    result.outArgs[0] += "\n" + tempOb.OUT_RESULT;

    logHandler.logMessage("#### OPC Execution : \n" + result.outArgs[0]);

    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################




// #############################################################################
// updateEquipmentData(New)
// #############################################################################

/**
 * updateEquipmentData (Time 5 sec)
 * =============================================================================
 * [0]  Station Number
 * [1]  Number of positions
 * [2]  Product ID
 * [3]  Cavity 1
 * [4]  Cavity 2
 * 
 * [i]  Product ID
 * [j]  Cavity 1
 * [k]  Cavity 2
 * =============================================================================
 */

function inArray(el, arr) {
    return arr.indexOf(el) > -1;
}

function updateEquipmentForStation(station, equipmentId, error, tempOb) {

    //var stationToRelease = getStationsToRelease(station).station;

    tempOb.OUT_RESULT += "\n Station # : [" + station + "]";
    tempOb.OUT_RESULT += "\n Removed equipments from : [" + station + "]";
    tempOb.OUT_RESULT += "\n Rigged equipment id " + equipmentId + " in : [" + station + "]";

    var equipmentSetupFilters = new Array(new KeyValue("EQUIPMENT_TYPE", "E"));
    var equipmentSetupResultKeys = new Array("EQUIPMENT_INDEX", "EQUIPMENT_NUMBER", "SETUP_POSITION");

    var result_equGetSetupEquipmentData = imsApiService.equGetSetupEquipmentData(imsApiSessionContext,
        station,
        equipmentSetupFilters,
        equipmentSetupResultKeys
    );

    var return_value = result_equGetSetupEquipmentData.return_value;

    tempOb.OUT_RESULT += "\n equGetSetupEquipmentData return_value = " + return_value + "";

    var EQ_AR = [];

    var equipmentUploadValues = [];
    var op1 = true;

    logHandler.logMessage(">>>> =========================== ");
    for (var i = 0; i < result_equGetSetupEquipmentData.equipmentSetupResultValues.length / 3; i++) {
        var eq = "" + result_equGetSetupEquipmentData.equipmentSetupResultValues[i * 3 + 1];
        EQ_AR.push(eq);
        logHandler.logMessage(">>>> INARRAY :: " + eq + " - " + inArray(eq, equipmentUploadValues));
        if ((!eq.equals(equipmentId)) && (!inArray(eq, equipmentUploadValues))) {
            equipmentUploadValues.push(eq);
            equipmentUploadValues.push(0);
            equipmentUploadValues.push(eq);
            tempOb.OUT_RESULT += "\n TO REMOVE ARRAY = " + result_equGetSetupEquipmentData.equipmentSetupResultValues[i * 3 + 1];
            logHandler.logMessage(">>>> TO REMOVE :: " + eq);
        }
        else {
            op1 = false;
            logHandler.logMessage(">>>> NOTHING");
        }

    }

    logHandler.logMessage("$$$$ Number of EQ : " + equipmentUploadValues.length / 3);
    for (var i = 0; i < equipmentUploadValues.length / 3; i++) {
        logHandler.logMessage("$$$$ EQ = " + equipmentUploadValues[i * 3 + 0] + " - ER = " + equipmentUploadValues[i * 3 + 1] + " - POS = " + equipmentUploadValues[i * 3 + 2]);
    }

    // remove only unused equipments

    if ((equipmentUploadValues.length / 3) > 0) {
        logHandler.logMessage("$$$$ Equipment is removing...");

        var equipmentUploadKeys = new Array("EQUIPMENT_NUMBER", "ERROR_CODE", "SETUP_POSITION");
        logHandler.logMessage("##### equUpdateEquipmentData --  ");
        var result_equUpdateEquipmentData = imsApiService.equUpdateEquipmentData(imsApiSessionContext,
            station,
            1,
            "-1",
            "-1",
            2,
            equipmentUploadKeys,
            equipmentUploadValues
        );


        var return_value = result_equUpdateEquipmentData.return_value;

        tempOb.OUT_RESULT += "\n equUpdateEquipmentData -- return_value = " + return_value + " ERR = " + result_equUpdateEquipmentData.equipmentResultValues[1];
        logHandler.logMessage(">>>> ERRORCODE = " + return_value);

    }


    // only if new equipment is changed
    if (op1) {
        var equipmentUploadKeys = new Array("EQUIPMENT_NUMBER", "ERROR_CODE", "SETUP_POSITION");
        var equipmentUploadValues = new Array(equipmentId, 0, equipmentId);
        logHandler.logMessage("##### equUpdateEquipmentData ++  ");
        var result_equUpdateEquipmentData = imsApiService.equUpdateEquipmentData(imsApiSessionContext,
            station,
            0,
            "-1",
            "-1",
            2,
            equipmentUploadKeys,
            equipmentUploadValues
        );

        var return_value = result_equUpdateEquipmentData.return_value;

        tempOb.OUT_RESULT += "\n equUpdateEquipmentData ++ return_value = " + return_value + " ERR = " + result_equUpdateEquipmentData.equipmentResultValues[1];
    }

    error = return_value;
}

function updateEquipmentData() {

    var inArgs = updateEquipmentData.arguments;
    var return_value = 0;
    var errorMessage = "";
    var error = 0;
    try {
        var tempOb = parseUpdateEquipmentData(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------

        //SECTION 2019-10-09 Get configContent and load data object
        // ---------------------------------------------------------------------
        var configContent = fct_readDocument(tempOb.IN_STATION_NUMBER);
        var res = fct_getCastingEqData(configContent);                            //? get casting equipments data blocks --> {castingEquipments(json)}
        var data = res.castingEquipments;
        //!SECTION 
        // ---------------------------------------------------------------------

        tempOb.OUT_RESULT += "\n IN_EQUIPMENT_DATA_AR : " + tempOb.IN_EQUIPMENT_DATA_AR.length;


        for (var i = 0; i < tempOb.IN_EQUIPMENT_DATA_AR.length; i++) {
            tempOb.IN_EQUIPMENT_DATA_AR[i].PRODUCT = tempOb.IN_EQUIPMENT_DATA_AR[i].PRODUCT.toUpperCase();
            tempOb.OUT_RESULT += "\n  [" + i + "] Product : " + tempOb.IN_EQUIPMENT_DATA_AR[i].PRODUCT;
            tempOb.OUT_RESULT += " Cavity 1 : " + tempOb.IN_EQUIPMENT_DATA_AR[i].CAVITY1;
            tempOb.OUT_RESULT += " Cavity 2 : " + tempOb.IN_EQUIPMENT_DATA_AR[i].CAVITY2;
        }

        // ---------------------------------------------------------------------
        var equipments = data.castingEquipments;

        for (var i = 0; i < equipments.length; i++) {
            var prod = equipments[i].product.toUpperCase();
            tempOb.OUT_RESULT += "\n" + prod + "\n";

            for (var POS = 0; POS < tempOb.IN_EQUIPMENT_DATA_AR.length; POS++) {
                if (prod.equals(tempOb.IN_EQUIPMENT_DATA_AR[POS].PRODUCT)) {

                    var info = equipments[i].informations;
                    //--------------------------------------------------------------
                    // One print per die, one die for each station --> One die produce one produnct (L or R)
                    //--------------------------------------------------------------
                    if (tempOb.IN_EQUIPMENT_DATA_AR[POS].CAVITY1 == (tempOb.IN_EQUIPMENT_DATA_AR[POS].CAVITY2)) {
                        for (var j = 0; j < info.length; j++) {
                            if ((info[j].cavity == tempOb.IN_EQUIPMENT_DATA_AR[POS].CAVITY1) && ((info[j].cavity == tempOb.IN_EQUIPMENT_DATA_AR[POS].CAVITY2))) {
                                if (info[j].printPerDie == "1") {
                                    if (info[j].position == "L") {
                                        var station = getStationId(tempOb.IN_STATION_NUMBER, (POS) * 2 + 1).station;
                                        var equipmentId = info[j].equipmentId;
                                        tempOb.OUT_RESULT += "\n Left position : " + equipmentId + "";
                                        tempOb.OUT_RESULT += "\n Station : " + station + "\n";
                                        //--------------------------------------------------------------

                                        updateEquipmentForStation(station, equipmentId, error, tempOb);

                                        //--------------------------------------------------------------

                                    }
                                    if (info[j].position == "R") {
                                        var station = getStationId(tempOb.IN_STATION_NUMBER, (POS) * 2 + 2).station;
                                        var equipmentId = info[j].equipmentId;
                                        tempOb.OUT_RESULT += "\n Right position : " + equipmentId + "";
                                        tempOb.OUT_RESULT += "\n Station : " + station + "\n";
                                        //--------------------------------------------------------------

                                        updateEquipmentForStation(station, equipmentId, error, tempOb);

                                        //--------------------------------------------------------------
                                    }
                                }
                            }
                        }
                    }
                    //--------------------------------------------------------------
                    // Two prints per die, one die for each station --> One die produce two products (L and R)
                    if ((!tempOb.IN_EQUIPMENT_DATA_AR[POS].CAVITY1 == tempOb.IN_EQUIPMENT_DATA_AR[POS].CAVITY2)) {
                        for (var j = 0; j < info.length; j++) {
                            if ((info[j].cavity == tempOb.IN_EQUIPMENT_DATA_AR[POS].CAVITY1) && (info[j].position == "L")) {
                                var station = getStationId(tempOb.IN_STATION_NUMBER, (POS) * 2 + 1).station;
                                var equipmentId = info[j].equipmentId;
                                tempOb.OUT_RESULT += "\n Left position : " + info[j].equipmentId + "";
                                tempOb.OUT_RESULT += "\n Station : " + station + "\n";
                                //--------------------------------------------------------------

                                updateEquipmentForStation(station, equipmentId, error, tempOb);

                                //--------------------------------------------------------------

                            }
                            if ((info[j].cavity == tempOb.IN_EQUIPMENT_DATA_AR[POS].CAVITY2) && (info[j].position == "R")) {
                                var station = getStationId(tempOb.IN_STATION_NUMBER, (POS) * 2 + 2).station;
                                var equipmentId = info[j].equipmentId;
                                tempOb.OUT_RESULT += "\n Right position : " + equipmentId + "";
                                tempOb.OUT_RESULT += "\n Station : " + station + "\n";
                                //--------------------------------------------------------------

                                updateEquipmentForStation(station, equipmentId, error, tempOb);

                                //--------------------------------------------------------------
                            }
                        }
                    }
                }
                // End If ----------------
            }
        }



        //var info = equipments[0].information[0];


        //tempOb.OUT_RESULT = info.cavity ;

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.updateEquipmentData finished.");
        return resultUploadProcessData("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.updateEquipmentData failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function updateEquipmentDataOb() {

    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_ACTIVE_POSITION = "";

    this.IN_EQUIPMENT_DATA_AR = [];

    this.OUT_RESULT = "";

    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

// under 
function parseUpdateEquipmentData(inArgs) {

    var tempObject = new updateEquipmentDataOb();

    tempObject.IN_STATION_NUMBER = trim("" + inArgs[0]);
    var blocsize = 3;

    for (var x = 0; x < inArgs.length; x++) {
        if (x == 1) {
            tempObject.IN_EQUIPMENT_DATA_SIZE = parseInt(trim("" + inArgs[x]));
        }

        for (var y = 0; y < tempObject.IN_EQUIPMENT_DATA_SIZE; y++) {
            if (x == 2 + (y * blocsize)) {
                var c1 = byteToInt(inArgs[x + 1]).toString();
                var c2 = byteToInt(inArgs[x + 2]).toString();
                logHandler.logMessage("#### %% CHAR1 " + inArgs[x + 1] + " TO INT : >" + c1 + "<");
                logHandler.logMessage("#### %% CHAR2 " + inArgs[x + 2] + " TO INT : >" + c2 + "<");
                tempObject.IN_EQUIPMENT_DATA_AR.push(new EquipmentData(trim("" + inArgs[x]), c1, c2));
            }
        }

    }
    return tempObject;
}

function resultUploadProcessData(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;

    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";


    result.outArgs[0] += "\n" + " RESULT : \n" + tempOb.OUT_RESULT;


    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}


// #########################################################################################################################################################
// uploadProcessDataAll
// #########################################################################################################################################################

/**
 * uploadProcessDataAll (Time 5 sec)
 * =============================================================================
 * [0]              Station Number
 * [1]              Number of measures (N)
 * [2]              Measure name 1                                              [n] prefix can be used to identify the position
 * [3]              Measure value 1
 * ... 
 * [3+(N-1)*2]      Measure name N
 * [3+(N-1)*2+1]    Measure value N
 * =============================================================================
 */

function uploadProcessDataAll() {

    var inArgs = uploadProcessDataAll.arguments;
    var result = new Result_customFunctionCommon();

    var return_value = 0;
    var errorMessage = "";
    try {
        var tempOb = parseUploadProcessDataAll(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------

        var stationNr = tempOb.IN_STATION_NUMBER;

        tempOb.OUT_MEAS_AR = new Array(16);
        for (var x = 0; x < 16; x++) {
            tempOb.OUT_MEAS_AR[x] = [];
        }
        for (var x = 0; x < tempOb.IN_PROCESS_DATA_AR.length; x++) {
            var info = getParamInfo(tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME, tempOb.IN_PROCESS_DATA_AR[x].MEASURE_VALUE);
            if (info.id == -1) {
                //tempOb.OUT_RESULT+= "\n All stations : " + info.param + " = " + info.value;
                //tempOb.OUT_MEAS_AR[0].push(new Measure(info.param, "", info.value, "", "", "", ""));
                for (var y = 0; y < 16; y++) {
                    tempOb.OUT_MEAS_AR[y].push(new Measure(info.param, "", info.value, "", "", "", ""));
                }
            }
            else {

                //tempOb.OUT_RESULT+= "\n ST# " + getStationId(stationNr,info.id).station + " : " + info.param + " = " + info.value;
                tempOb.OUT_MEAS_AR[info.id - 1].push(new Measure(info.param, "", info.value, "", "", "", ""));
            }
        }

        // <mdaGetRecipeData> --------------------------------------------------
        //        var partNumber = "MOB001L";
        //        
        //        var recipeFilters = new Array(new KeyValue("PART_NUMBER", partNumber));
        //        var recipeResultKeys = new Array("MAX_VALUE","MEASURE_NAME","MIN_VALUE","UNIT");
        //      
        //        var result_mdaGetRecipeData = imsApiService.mdaGetRecipeData(imsApiSessionContext,
        //                station,
        //                -1,
        //                "-1",
        //                "-1",
        //                "-1",
        //                -1.0,
        //                "-1",
        //                "T",
        //                1,
        //                recipeFilters,
        //                recipeResultKeys);
        //
        //        if (result_mdaGetRecipeData.return_value != 0) {
        //            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
        //            result.errorString = "uploadProcessData:mdaGetRecipeData|" + return_value + "|" + res.errorString;
        //            result.return_value = return_value;
        //            return result;
        //        }

        var TEMP_REIPE_AR = new Array();

        //        for (var i=0;i<result_mdaGetRecipeData.recipeResultValues.length;i++){
        //            var name = result_mdaGetRecipeData.recipeResultValues[i*4+1];
        //            var upperlimit = result_mdaGetRecipeData.recipeResultValues[i*4];
        //            var lowerlimit = result_mdaGetRecipeData.recipeResultValues[i*4+2];
        //            var unit = result_mdaGetRecipeData.recipeResultValues[i*4+3];
        //            
        //            TEMP_REIPE_AR.push(new Measure(name, "", "", "", lowerlimit, upperlimit, unit));
        //        }


        //        this.MEASURE_NAME = name;
        //        this.MEASURE_TYPE = type;
        //        this.MEASURE_VALUE = value;
        //        this.MEASURE_NOMINAL = nominal;
        //        this.MEASURE_LOWERLIMIT = lowerlimit;
        //        this.MEASURE_UPPERLIMIT = upperlimit;
        //        this.MEASURE_UNIT = unit;    

        //        for (var i=0;i<TEMP_REIPE_AR.length;i++){
        //           
        //           tempOb.OUT_RESULT+="\n" + TEMP_REIPE_AR[i].MEASURE_NAME + " *** " + TEMP_REIPE_AR[i].MEASURE_LOWERLIMIT + " *** " + TEMP_REIPE_AR[i].MEASURE_UPPERLIMIT;
        //           
        //        }

        // <trUploadStationResult> ---------------------------------------------
        var stationResultUploadKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE");


        for (var x = 0; x < tempOb.OUT_MEAS_AR.length; x++) {
            var stationResultUploadValues = new Array();
            if (x >= 0) tempOb.OUT_RESULT += "\n ST# " + getStationId(stationNr, x + 1).station;
            var station = getStationId(stationNr, x + 1).station;
            for (var y = 0; y < tempOb.OUT_MEAS_AR[x].length; y++) {
                tempOb.OUT_RESULT += "\n        --> data     name: " + tempOb.OUT_MEAS_AR[x][y].MEASURE_NAME + "  ---  value: " + tempOb.OUT_MEAS_AR[x][y].MEASURE_VALUE;
                stationResultUploadValues.push(0, "0", tempOb.OUT_MEAS_AR[x][y].MEASURE_NAME, tempOb.OUT_MEAS_AR[x][y].MEASURE_VALUE);
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
            //
            //            if (return_value != 0) {
            //                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            //                result.errorString = "uploadProcessData:trUploadStationResult|" + return_value + "|" + res.errorString;
            //                result.return_value = return_value;
            //                return result;
            //            }

        }
        // <End call> ----------------------------------------------------------


        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.uploadProcessDataAll finished.");
        return resultUploadProcessDataAll("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.uploadProcessDataAll failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function uploadProcessDataAllOb() {

    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_PROCESS_DATA_SIZE = 0;
    this.IN_PROCESS_DATA_AR = [];

    this.OUT_MEAS_AR = [];
    this.OUT_RESULT = "";

    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUploadProcessDataAll(inArgs) {

    var tempObject = new uploadProcessDataAllOb();
    tempObject.IN_STATION_NUMBER = trim("" + inArgs[0]);
    var blocsize = 2;

    for (var x = 0; x < inArgs.length; x++) {
        if (x == 1) {
            tempObject.IN_PROCESS_DATA_SIZE = parseInt(trim("" + inArgs[x]));
        }

        for (var y = 0; y < tempObject.IN_PROCESS_DATA_SIZE; y++) {
            if (x == 2 + (y * blocsize)) {
                tempObject.IN_PROCESS_DATA_AR.push(new Measure(trim("" + inArgs[x]), "", inArgs[x + 1], "", "", "", ""));
            }
        }

    }
    return tempObject;
}

function resultUploadProcessDataAll(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;

    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";


    result.outArgs[0] += "\n" + " RESULT : " + tempOb.OUT_RESULT + "\n";

    //    for (var x=0;x<tempOb.IN_PROCESS_DATA_AR.length;x++){
    //        result.outArgs[0] += "\n" + " name : " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME + 
    //                                    " ; value : " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_VALUE;
    //    }

    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

// #########################################################################################################################################################
// uploadProcessDataAll2
// #########################################################################################################################################################

/**
 * uploadProcessDataAll2 (Actual Position)
 * =============================================================================
 * [0]              Station Number
 * [1]              Actual Position         (Trigger)
 * [2]              Number of measures (N)
 * [3]              Measure name 1                                              [n] prefix can be used to identify the position
 * [4]              Measure value 1
 * ... 
 * [3+(N-1)*2]      Measure name N
 * [3+(N-1)*2+1]    Measure value N
 * =============================================================================
 */


function getRecipesForPosition(stationNumber, id, tempOb) {
    var station = getStationId(stationNumber, ((tempOb.IN_ACTUAL_POSITION - 1) * 2) + id).station; // First station of the position

    // <trGetStationSetting> -----------------------------------------------
    var getStationSettingResultKeys = new Array("PART_NUMBER", "WORKORDER_NUMBER");
    var result_getStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext,
        station,
        getStationSettingResultKeys);

    var return_value = result_getStationSetting.return_value;

    if (return_value != 0) {

    }
    var TEMP_PART_NUMBER = result_getStationSetting.stationSettingResultValues[0];

    var recipeFilters = new Array(new KeyValue("PART_NUMBER", TEMP_PART_NUMBER));
    var recipeResultKeys = new Array("MAX_VALUE", "MEASURE_NAME", "MIN_VALUE", "UNIT");

    var result_mdaGetRecipeData = imsApiService.mdaGetRecipeData(imsApiSessionContext,
        station,
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



function uploadProcessDataAll2() {

    var inArgs = uploadProcessDataAll2.arguments;
    var result = new Result_customFunctionCommon();

    var return_value = 0;
    var errorMessage = "";
    var message = "";
    var topic = "";
    var availableMessage = false;

    var log = "";

    try {
        var tempOb = parseUploadProcessDataAll2(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------           
        var stationNr = tempOb.IN_STATION_NUMBER;
        var Messages = [];

        //SECTION 2019-10-09 Get configContent for uploadProcessDataAll2
        var configContent = fct_readDocument(tempOb.IN_STATION_NUMBER);

        //SECTION 2019-10-10 Calculate topicTemplate for the station
        var res = fct_getTopicTemplate(configContent, stationNr);             //? get topicTemplate for the station --> {topicTemplate}

        topic = res.topicTemplate;
        logHandler.logMessage("##### topic = " + topic);

        var TEMP_REIPE_AR = new Array(2);
        var PART_AR = [];
        var tag = new Array(2);

        tempOb.OUT_MEAS_AR = new Array(2);
        for (var x = 0; x < 2; x++) {
            tempOb.OUT_MEAS_AR[x] = [];
            TEMP_REIPE_AR[x] = [];
            var getRFP = getRecipesForPosition(stationNr, x + 1, tempOb);
            TEMP_REIPE_AR[x] = TEMP_REIPE_AR[x].concat(getRFP.recipe);
            PART_AR.push(getRFP.part);
            tag[x] = new Array(TEMP_REIPE_AR[x].length);
            for (var y = 0; y < tag[x].length; y++) tag[x][y] = "[ ]";
        }

        // Preapare measurements for stations / position
        for (var x = 0; x < tempOb.IN_PROCESS_DATA_AR.length; x++) {

            // Get station id for the measure
            var info = getParamInfo(tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME, tempOb.IN_PROCESS_DATA_AR[x].MEASURE_VALUE);
            // Case upload for all station (id=-1)
            if (info.id == -1) {
                for (var y = 0; y < 2; y++) {
                    for (var k = 0; k < TEMP_REIPE_AR[y].length / 4; k++) {
                        if (TEMP_REIPE_AR[y][k].MEASURE_NAME == info.param) {
                            tempOb.OUT_MEAS_AR[y].push(new Measure(info.param, "", info.value, "", TEMP_REIPE_AR[y][k].MEASURE_LOWERLIMIT, TEMP_REIPE_AR[y][k].MEASURE_UPPERLIMIT, TEMP_REIPE_AR[y][k].MEASURE_UNIT));
                            tag[y][k] = "[X]";
                        }
                    }
                }
            }

            // Case upload for dedicated station (id>0)
            else {
                for (var k = 0; k < TEMP_REIPE_AR[info.id - 1].length / 4; k++) {
                    if (TEMP_REIPE_AR[info.id - 1][k].MEASURE_NAME == info.param) {
                        tempOb.OUT_MEAS_AR[info.id - 1].push(new Measure(info.param, "", info.value, "", TEMP_REIPE_AR[info.id - 1][k].MEASURE_LOWERLIMIT, TEMP_REIPE_AR[info.id - 1][k].MEASURE_UPPERLIMIT, TEMP_REIPE_AR[info.id - 1][k].MEASURE_UNIT));
                        tag[info.id - 1][k] = "[X]";
                    }
                }
            }
        }


        for (var y = 0; y < 2; y++) {
            tempOb.OUT_RESULT += "\n # Part: " + PART_AR[y] + " / number of recipes = " + TEMP_REIPE_AR[y].length / 4;

            for (var k = 0; k < TEMP_REIPE_AR[y].length / 4; k++) {
                tempOb.OUT_RESULT += "\n  " + tag[y][k] + "   " + TEMP_REIPE_AR[y][k].MEASURE_NAME;
            }
        }

        // <trUploadStationResult> ---------------------------------------------
        var stationResultUploadKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE", "LOWER_LIMIT", "UPPER_LIMIT", "UNIT");
        for (var x = 0; x < tempOb.OUT_MEAS_AR.length; x++) {
            var stationResultUploadValues = new Array();
            var station = getStationId(stationNr, ((tempOb.IN_ACTUAL_POSITION - 1) * 2) + x + 1).station;
            tempOb.OUT_RESULT += "\n (2) ST# " + station;
            tempOb.OUT_RESULT += "\n\n tempOb.OUT_MEAS_AR[x].length = " + tempOb.OUT_MEAS_AR[x].length + "\n\n";

            for (var y = 0; y < tempOb.OUT_MEAS_AR[x].length; y++) {
                tempOb.OUT_RESULT += "\n     --> name: " + tempOb.OUT_MEAS_AR[x][y].MEASURE_NAME + " \t\tvalue: " + tempOb.OUT_MEAS_AR[x][y].MEASURE_VALUE;
                tempOb.OUT_RESULT += "\t\tlow: " + tempOb.OUT_MEAS_AR[x][y].MEASURE_LOWERLIMIT + "\t\tup: " + tempOb.OUT_MEAS_AR[x][y].MEASURE_UPPERLIMIT + "\t\tunit: " + tempOb.OUT_MEAS_AR[x][y].MEASURE_UNIT;
                stationResultUploadValues.push(0, "0", tempOb.OUT_MEAS_AR[x][y].MEASURE_NAME, tempOb.OUT_MEAS_AR[x][y].MEASURE_VALUE, tempOb.OUT_MEAS_AR[x][y].MEASURE_LOWERLIMIT, tempOb.OUT_MEAS_AR[x][y].MEASURE_UPPERLIMIT, tempOb.OUT_MEAS_AR[x][y].MEASURE_UNIT);

                // Messaging Functions -----------------------------------------------------------
                var par = tempOb.OUT_MEAS_AR[x][y].MEASURE_NAME;
                var val = parseInt(tempOb.OUT_MEAS_AR[x][y].MEASURE_VALUE);
                var min = parseInt(tempOb.OUT_MEAS_AR[x][y].MEASURE_LOWERLIMIT);
                var max = parseInt(tempOb.OUT_MEAS_AR[x][y].MEASURE_UPPERLIMIT);

                var pos = getPositionFromStation(station).position;
                var side = getPositionFromStation(station).side;


                var alarmType = getAlarmText(getParamAlarmType(configContent, par));
                var alarmCode = getParamAlarmType(configContent, par);
                //return_value = ims_msgPublish(station,"processdata/info/casting/carousel_06","Test "+par+"" +alarmType);
                if (alarmCode > -1) {
                    if (val < min) {
                        message = "[Position " + pos + "][" + side + "] " + par + " = " + val + " is under minimum limit";
                        availableMessage = true;

                        topic = topic.replace("empty", alarmType);
                        //return_value = ims_msgPublish(station,topic,message);

                        Messages.push(new Message(topic, message));
                        return_value = exec_mdcCreateLog(station, topic, message);
                    }
                    if (val > max) {
                        message = "[Position " + pos + "][" + side + "] " + par + " = " + val + " is over maximum limit";
                        availableMessage = true;

                        topic = topic.replace("empty", alarmType);
                        //return_value = ims_msgPublish(station,topic,message);

                        Messages.push(new Message(topic, message));
                        return_value = exec_mdcCreateLog(station, topic, message);

                    }
                }
                // ------------------------------------------------------------------------------
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

            }
            // <End call> ----------------------------------------------------------
        }

        for (var z = 0; z < Messages.length; z++) {
            var topic_ = "" + Messages[z].TOPIC;
            var message_ = "" + Messages[z].MESSAGE;

            return_value = ims_msgPublish(topic_, message_);
            return_value = exec_mdcCreateLog("52", topic_, message_ + " - E " + return_value);
        }

        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.uploadProcessDataAll2 finished.");
        return resultUploadProcessDataAll2("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.uploadProcessDataAll2 failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function uploadProcessDataAll2Ob() {

    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_ACTUAL_POSITION = 0;                    //Input Actual Position
    this.IN_PROCESS_DATA_SIZE = 0;                  //Size of process data bloc
    this.IN_PROCESS_DATA_AR = [];                   //Array of process data bloc

    this.OUT_MEAS_AR = [];
    this.OUT_RESULT = "";

    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUploadProcessDataAll2(inArgs) {

    var tempObject = new uploadProcessDataAll2Ob();
    tempObject.IN_STATION_NUMBER = trim("" + inArgs[0]);
    var blocsize = 2;

    for (var x = 0; x < inArgs.length; x++) {
        if (x == 1) {
            tempObject.IN_ACTUAL_POSITION = parseInt(trim("" + inArgs[x]));
        }

        if (x == 2) {
            tempObject.IN_PROCESS_DATA_SIZE = parseInt(trim("" + inArgs[x]));
        }

        for (var y = 0; y < tempObject.IN_PROCESS_DATA_SIZE; y++) {
            if (x == 3 + (y * blocsize)) {
                tempObject.IN_PROCESS_DATA_AR.push(new Measure(trim("" + inArgs[x]), "", inArgs[x + 1], "", "", "", ""));
            }
        }

    }
    return tempObject;
}

function resultUploadProcessDataAll2(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;

    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";


    result.outArgs[0] += "\n" + " RESULT Upload Process Data All 2: " + tempOb.OUT_RESULT + "\n";


    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}

// #############################################################################
// #############################################################################
// #############################################################################

// #############################################################################
// updateMachineState
// #############################################################################

/**
 * updateMachineState (Time 5 sec)
 * =============================================================================
 * [0]  Station Number
 * [1]  Number of records
 * [2]  Position 1
 * [3]  State 1
 * 
 * [j]  Position n
 * [k]  State n
 * =============================================================================
 */

function updateMachineState() {

    var inArgs = updateMachineState.arguments;
    var result = new Result_customFunctionCommon();

    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";
    var conditionCode = "PR";
    var dateFrom = -1;
    var dateTo = -1;
    var comment = "OPC_MACHINE_STATE_CHANNGE";

    try {
        var tempOb = parseUpdateMachineState(inArgs);

        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------


        for (var i = 0; i < tempOb.IN_MACHINE_STATE_AR.length; i++) {
            var pos = tempOb.IN_MACHINE_STATE_AR[i].POSITION;
            var state = tempOb.IN_MACHINE_STATE_AR[i].STATE;
            tempOb.OUT_RESULT += "\n     position : " + pos + " --- state : " + state;
            for (var j = 1; j <= 2; j++) {
                var station = getStationId(tempOb.IN_STATION_NUMBER, ((pos - 1) * 2) + j).station
                tempOb.OUT_RESULT += "\n     station : " + station;
                // upload machine state
                if (state == "true") {
                    conditionCode = "PR";    // Set condition code for productive time
                    tempOb.OUT_RESULT += "\n     CONDITION OK -- > PR";
                }
                if (state == "false") {
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

                if (((((CC == undefined) || (CC == "PR") || (CC == "NA")) && (conditionCode == "NA")) || (conditionCode == "PR")) ||

                    (conditionCode == "PR")) {



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

                        errorCode = return_value;
                        errorMessage = getImsApiErrorText(return_value);
                        var resultData = {
                            errorCode: errorCode,
                            errorMessage: "" + errorMessage
                        };

                        //result.outArgs = [JSON.stringify(resultData)];
                        //return result;
                    }

                }

            }

        }

        // <End call> ----------------------------------------------------------


        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------

        logHandler.logMessage("custom function OPC.updateMachineState finished.");
        return resultUpdateMachineState("CF", 0, "PASS", tempOb);

    } catch (e) {
        logHandler.logMessage("custom function OPC.updateMachineState failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function updateMachineStateOb() {

    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.IN_MACHINE_STATE_SIZE = 0;
    this.IN_MACHINE_STATE_AR = [];


    this.OUT_RESULT = "";

    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUpdateMachineState(inArgs) {

    var tempObject = new updateMachineStateOb();
    tempObject.IN_STATION_NUMBER = trim("" + inArgs[0]);
    var blocsize = 2;

    for (var x = 0; x < inArgs.length; x++) {
        if (x == 1) {
            tempObject.IN_MACHINE_STATE_SIZE = parseInt(trim("" + inArgs[x]));
        }

        for (var y = 0; y < tempObject.IN_MACHINE_STATE_SIZE; y++) {
            if (x == 2 + (y * blocsize)) {
                tempObject.IN_MACHINE_STATE_AR.push(new MachineState(trim("" + inArgs[x]), trim("" + inArgs[x + 1])));
            }
        }

    }
    return tempObject;
}

function resultUpdateMachineState(apiName, returnCode, errorString, tempOb) {

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


// #############################################################################

function Position(position, state) {
    this.POSITION = position;
    this.STATE = state;
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

function Equipment(equipmentNumber, equipmentIndex) {
    this.EQUIPMENT_NUMBER = equipmentNumber;
    this.EQUIPMENT_INDEX = equipmentIndex;

}

function EquipmentData(product, cavity1, cavity2) {
    this.PRODUCT = product;
    this.CAVITY1 = cavity1;
    this.CAVITY2 = cavity2;

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

function MachineState(position, state) {
    this.POSITION = position;
    this.STATE = state;
}

function Message(topic, message) {
    this.TOPIC = topic;
    this.MESSAGE = message;
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// #############################################################################
function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g, "");
}
function ltrim(stringToTrim) {
    return stringToTrim.replace(/^\s+/, "");
}
function rtrim(stringToTrim) {
    return stringToTrim.replace(/\s+$/, "");
}
// #############################################################################

// #############################################################################
function getParamInfo(str, value) {
    var temp = str;

    var p1 = str.indexOf("[");
    var p2 = str.indexOf("]");

    var id = parseInt(str.substring(p1 + 1, p2));
    if (!id) id = -1;
    temp = str.substring(p2 + 1, str.length).replace(/(^[\s]+|[\s]+$)/g, '');

    return {
        param: temp,
        id: id,
        value: value
    }
}
// #############################################################################


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

// #############################################################################
function getStationsToRelease(station) {

    var temp = station.substr(0, 8);
    var id = parseInt(station.substr(-2));
    var st = "";
    switch (id) {
        case 1: st = temp + "09"; break;
        case 2: st = temp + "10"; break;
        case 3: st = temp + "11"; break;
        case 4: st = temp + "12"; break;
        case 5: st = temp + "13"; break;
        case 6: st = temp + "14"; break;
        case 7: st = temp + "15"; break;
        case 8: st = temp + "16"; break;
        case 9: st = temp + "01"; break;
        case 10: st = temp + "02"; break;
        case 11: st = temp + "03"; break;
        case 12: st = temp + "04"; break;
        case 13: st = temp + "05"; break;
        case 14: st = temp + "06"; break;
        case 15: st = temp + "07"; break;
        case 16: st = temp + "08"; break;
        default: st = temp + "01";
    }

    return {
        station: st,
        initial: station,

    }
}
// #############################################################################

// #############################################################################
function getCurrentBatches(part_array, queue_map) {

    var part_ar = part_array;
    var queue_ar = [];

    var queue = queue_map.split("|");
    for (j = 0; j < part_ar.length; j++) {

        for (i = 0; i < queue.length; i++) {
            pn = queue[i].split(":")[0].split(",")[0];
            bt = queue[i].split(":")[1];
            if (pn == part_ar[j]) {
                queue_ar.push(bt.split(",")[0]);
            }
        }
    }
    return {
        queue: queue_ar,
        err: 0,
        message: ""

    };
}
// #############################################################################


// #############################################################################
function updateQueueMap(part_number, batch_id, queue_map) {

    var queue_ar = [];
    var queue = queue_map.split("|");


    for (i = 0; i < queue.length; i++) {
        pn = queue[i].split(":")[0].split(",")[0];
        qt = queue[i].split(":")[0].split(",")[1];
        bt = queue[i].split(":")[1];
        if (pn == part_number) {
            queue_ar.push(bt.split(","));
        }
    }
    var new_queue = "";
    for (i = 0; i < queue.length; i++) {
        pn = queue[i].split(":")[0].split(",")[0];
        qt = queue[i].split(":")[0].split(",")[1];
        if (qt == undefined) qt = 0;
        bt_ar = queue[i].split(":")[1].split(",");
        bts = queue[i].split(":")[1];

        if ((bt_ar.length > 1) && (bt_ar[0] == batch_id)) {
            new_queue += "" + pn + "," + qt + ":" + bt_ar[1];
        } else {
            new_queue += "" + pn + "," + qt + ":" + bts;
        }
        if (i < queue.length - 1) {
            new_queue += "|";
        }
    }
    return {
        queue: new_queue,
        err: 0,
        message: ""

    };
}
// #############################################################################

// #############################################################################
function cleanQueue(queue) {
    var cqueue = queue;

    cqueue = cqueue.replace('||', '|');
    if (cqueue.substr(cqueue.length - 1, cqueue.length) == "|") {
        cqueue = cqueue.substr(0, cqueue.length - 1);
    }
    if (cqueue.substr(0, 1) == "|") {
        cqueue = cqueue.substr(1, cqueue.length);
    }


    return cqueue;
}

function updateQueueMapQuantity(part_number, batch_id, newQt, queue_map) {

    var queue_ar = [];
    var queue = queue_map.split("|");
    var qnt = -1;
    var err = 0;
    var nextbatch = "";


    for (i = 0; i < queue.length; i++) {
        pn = queue[i].split(":")[0].split(",")[0];
        qt = queue[i].split(":")[0].split(",")[1];
        bt = queue[i].split(":")[1];
        if (pn == part_number) {
            queue_ar.push(bt.split(","));
        }
    }
    var new_queue = "";
    for (i = 0; i < queue.length; i++) {
        pn = queue[i].split(":")[0].split(",")[0];
        qt = queue[i].split(":")[0].split(",")[1];

        if ((qt == undefined)) qt = 0;
        bt_ar = queue[i].split(":")[1].split(",");
        bts = queue[i].split(":")[1];

        if ((newQt > -1) && (pn == part_number)) {
            qt = newQt;
            qnt = newQt;
        }
        if ((newQt <= -1) && (pn == part_number)) {
            qnt = qt;
        }
        if ((bt_ar.length > 1) && (bt_ar[0] == batch_id)) {
            if (newQt == 0) {
                new_queue += "" + pn + "," + qt + ":" + bt_ar[1];
                if (pn == part_number) nextbatch = bt_ar[1];
                err = 1;
                //onsole.log("ERR 1 " + i);
            } else {
                new_queue += "" + pn + "," + qt + ":" + bts;
                if (pn == part_number) {
                    nextbatch = bt_ar[0];
                }
                err = 2;
                //console.log("ERR 2 " + i);
            }
        } else if ((bt_ar.length == 1) && (bt_ar[0] == batch_id)) {
            if (newQt > 0) {
                new_queue += "" + pn + "," + qt + ":" + bts;
            }
            if (pn == part_number) {
                nextbatch = "-1";
            }
            err = 3;
            //console.log("ERR 3 " + i);
        } else {
            new_queue += "" + pn + "," + qt + ":" + bts;
            if (pn == part_number) {
                nextbatch = bt_ar[0];
            }
            err = 4;
            //console.log("ERR 4 " + i);
        }
        if (i < queue.length - 1) {
            new_queue += "|";
        }
    }
    return {
        queue: cleanQueue(new_queue),
        quantity: qnt,
        err: err,
        nextBatch: nextbatch,
        message: ""

    };
}
// #############################################################################

// #############################################################################
function getCastingProduct(scpn) {
    var ref = "SC-" + scpn;
    return ref;

    //    switch(scpn) {
    //        case "MOB001R": return "SCMOB001R";
    //        case "MOB001L": return "SCMOB001L";
    //        case "MOB002R": return "SCMOB002R";
    //        case "MOB002L": return "SCMOB002L";
    //        default: return "";
    //    }
    //    return "";

}
// #############################################################################


// #############################################################################
//SECTION 2019-10-09 getReference(configContent, code)
function getReference(configContent, code) {
    varside = "";
    var res = fct_getReference(configContent, code, side);                    //? get reference informations --> {partNumber, productFamily}
    return res.productFamily;
}
// #############################################################################


// #############################################################################
//SECTION 2019-10-09 getLine(configContent, code)
function getLine(configContent, code) {
    var res = fct_getLine(configContent, code);                               //? get lineid --> {line}
    return res.line;
}
// #############################################################################


// #############################################################################
function getInfoFromUID(uid) {
    var err = 0;
    var side = "";
    var year = "";
    var day = "";
    var line = "";
    var reference = "";
    var cavity = "";
    var pouring = "";
    if ((uid.length == 13) && ((uid.charAt(0) == "L") || (uid.charAt(0) == "R"))) {
        err = 0;
        side = uid.substring(0, 1);
        year = uid.substring(1, 3);
        day = uid.substring(3, 6);
        line = (uid.substring(6, 7));
        reference = (uid.substring(7, 8));
        cavity = uid.substring(8, 10);
        pouring = uid.substring(10, 13);
    } else if ((uid.length == 12)) {
        err = 0;
        side = "";
        year = uid.substring(0, 2);
        day = uid.substring(2, 5);
        line = (uid.substring(5, 6));
        reference = (uid.substring(6, 7));
        cavity = uid.substring(7, 9);
        pouring = uid.substring(9, 12);
    } else {
        err = -1;
        side = "";
        year = "";
        day = "";
        line = "";
        reference = "";
        cavity = "";
        pouring = "";
    }

    return {
        err: err,
        uid: uid,
        side: side,
        year: year,
        day: day,
        line: line,
        reference: reference,
        cavity: cavity,
        pouring: pouring
    }
}
// #############################################################################

//SECTION 2019-10-09 getInfoFromUID2(configContent, uid)
function getInfoFromUID2(configContent, uid) {
    var err = 0;
    var side = "";
    var year = "";
    var day = "";
    var line = "";
    var reference = "";
    var cavity = "";
    var pouring = "";
    if ((uid.length == 13) && ((uid.charAt(0) == "L") || (uid.charAt(0) == "R"))) {
        err = 0;
        side = uid.substring(0, 1);
        year = uid.substring(1, 3);
        day = uid.substring(3, 6);
        line = getLine(configContent, uid.substring(6, 7));
        reference = getReference(configContent, uid.substring(7, 8));
        cavity = uid.substring(8, 10);
        pouring = uid.substring(10, 13);
    } else if ((uid.length == 12)) {
        err = 0;
        side = "";
        year = uid.substring(0, 2);
        day = uid.substring(2, 5);
        line = getLine(configContent, uid.substring(5, 6));
        reference = getReference(configContent, uid.substring(6, 7));
        cavity = uid.substring(7, 9);
        pouring = uid.substring(9, 12);
    } else {
        err = -1;
        side = "";
        year = "";
        day = "";
        line = "";
        reference = "";
        cavity = "";
        pouring = "";
    }

    return {
        err: err,
        uid: uid,
        side: side,
        year: year,
        day: day,
        line: line,
        reference: reference,
        cavity: cavity,
        pouring: pouring
    }
}

function ims_msgPublish2(station, topic, message) {
    var state = false;
    var return_value = 0;

    // <attribGetAttributeValues> ------------------------------------------
    var attributeCodeArray = new Array("MESSAGIG_FLAG");
    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
    var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext,
        station,
        3,  // Site
        station,
        "-1",
        attributeCodeArray,
        1,
        attributeResultKeys);

    var return_value = result_attribGetAttributeValues.return_value;

    if (return_value == 0) {
        state = result_attribGetAttributeValues.attributeResultValues[1];
    }

    //if (!state) logHandler.logMessage("##### Messaging api is deactivated!");

    //if (state) {
    //--------------------------------------------------------------------
    logHandler.logMessage("##### Messaging api is activated!");
    var result_msgPublish = imsApiService.msgPublish(imsApiSessionContext,
        topic,
        message);
    var return_value = result_msgPublish.return_value;
    //}    

    return return_value;
}

function ims_msgPublish3(station, topic, message) {
    var return_value = 0;
    try {
        logHandler.logMessage("##### Messaging Start Call");
        var result_msgPublish = imsApiService.msgPublish(imsApiSessionContext,
            topic,
            message);
        var return_value = result_msgPublish.return_value;
        logHandler.logMessage("##### Messaging End Call with errorcode = " + return_value);
    }
    catch (e) {
        logHandler.logMessage("##### Messaging Exception : " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
    return return_value;
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

function unixToTime(unix) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}

function charToInt(char) {
    return char.charCodeAt(0)
}

function byteToInt(byte) {
    var s = 0;
    var l = byte.length;
    for (var i = 0; i < l; i++) {
        var v = byte.charCodeAt(i);
        if ("0123456789".indexOf(byte[i]) >= 0) s += ((v - 48) * (Math.pow(16, l - i - 1)));
        if ("abcdef".indexOf(byte[i]) >= 0) s += (((v - 97) + 10) * (Math.pow(16, l - i - 1)));
        if ("ABCDEF".indexOf(byte[i]) >= 0) s += (((v - 65) + 10) * (Math.pow(16, l - i - 1)));
    }
    return s;
}

//SECTION 2019-10-09 getParamAlarmType(configContent, param)
function getParamAlarmType(configContent, param) {

    var res = fct_getAlarms(configContent);
    var jsonData = res.messageType;

    for (var i = 0; i < jsonData.MessageType.length; i++) {
        if (jsonData.MessageType[i].name == param) {
            return parseInt(jsonData.MessageType[i].type);
        }
    }
    return -1;
}

function getAlarmText(code) {
    var text = "info";
    switch (code) {
        case 1: text = "error"; break;
        case 2: text = "info"; break;
        case 3: text = "warning"; break;
        default: text = "info";
    }
    return text;
}


function getPositionFromStation(station) {
    var id = parseInt(station.slice(-2));
    // var pos = Math.round(id/2);
    var pos = 1;
    if ((id == "01") || (id == "02")) pos = 1;
    if ((id == "03") || (id == "04")) pos = 2;
    if ((id == "05") || (id == "06")) pos = 3;
    if ((id == "07") || (id == "08")) pos = 4;
    if ((id == "09") || (id == "10")) pos = 5;
    if ((id == "11") || (id == "12")) pos = 6;
    if ((id == "13") || (id == "14")) pos = 7;
    if ((id == "15") || (id == "16")) pos = 8;


    var position = "" + pos;
    var side = "R";
    if ((id % 2) > 0) side = "L";
    if (pos < 10) position = "0" + pos;
    return {
        id: id,
        position: position,
        side: side
    }
}



function getPositionFromBatchId(map, partNumber, err) {
    map = "" + map;
    var pos_pn = map.split("|");//["POS1:pn1,pn2", "POS.:ID", "POS.:ID", "POS.:ID"]		
    var positions = []; //list of all trolley positions in map		
    var pns = []; // list of all trolley ids in map		
    var update_flag = false;
    var position = "";
    for (i = 0; i < pos_pn.length; i++) {
        positions.push(pos_pn[i].split(":")[0]);
        pns.push(pos_pn[i].split(":")[1]);//["pn1,pn2","pn3,pn4"]		
    }
    for (i = 0; i < positions.length; i++) {


        if (partNumber != "" && ((pns[i].split(",")[0] == partNumber) || (pns[i].split(",")[1] == partNumber))) {

            position = positions[i];
            update_flag = true;
        }

    }
    if (update_flag == false) {
        err = 1;
        return {
            map: map,
            err: err,
            message: "batch not found in mapping"
        };
    }
    return {
        map: map,
        err: err,
        position: position,
        message: "PASS"
    };
}

function getLatestWo(TEMP_WO_AR, TEMP_START_DATE_AR) {
    var latestWo = TEMP_WO_AR[0];
    var latestDate = TEMP_START_DATE_AR[0];
    for (i = 1; i < TEMP_WO_AR.length; i++) {
        if (latestDate < TEMP_START_DATE_AR[i]) {
            latestWo = TEMP_WO_AR[i];
            latestDate = TEMP_START_DATE_AR[i];
        }
    }
    return latestWo
}

function updatePartMap(posData, map, err) {

    map = "" + map;
    var pos_id = map.split("|");//["POS.:ID", "POS.:ID", "POS.:ID", "POS.:ID"]		
    var trolley_pos = []; //list of all trolley positions in map		
    var trolley_part_numbers = []; // list of all  part numbers in trolley		
    var position = posData.toString().split(":")[0];
    var part_numbers = posData.toString().split(":")[1];
    var update_flag = false;

    for (i = 0; i < pos_id.length; i++) {
        trolley_pos.push(pos_id[i].split(":")[0]);
        trolley_part_numbers.push(pos_id[i].split(":")[1]);
    }
    for (i = 0; i < trolley_pos.length; i++) {

        if (trolley_pos[i] == position) {

            trolley_pos[i] = position;
            trolley_part_numbers[i] = part_numbers;
            update_flag = true;
            err = 0;
        }
    }
    if (update_flag == false) {
        err = 1;
        return {
            map: map,
            err: err,
            message: "Position not found"
        };
    }
    var new_map = "";
    for (i = 0; i < trolley_pos.length; i++) {
        new_map += trolley_pos[i] + ":" + trolley_part_numbers[i] + "|";
    }
    new_map = new_map.slice(0, new_map.length - 1);
    return {
        map: new_map,
        err: 0,
        message: "PASS"
    };
}
function updatePositionMap(posData, map, oldTrolleyId, err) {
    map = "" + map;
    var pos_id = map.split("|");//["POS.:ID", "POS.:ID", "POS.:ID", "POS.:ID"]		
    var trolley_pos = []; //list of all trolley positions in map		
    var trolley_id = []; // list of all trolley ids in map		

    var position = posData.toString().split(":")[0];
    var id = posData.toString().split(":")[1];

    var update_flag = false;

    for (i = 0; i < pos_id.length; i++) {
        trolley_pos.push(pos_id[i].split(":")[0]);
        trolley_id.push(pos_id[i].split(":")[1]);
    }
    for (i = 0; i < trolley_pos.length; i++) {

        if (trolley_pos[i] == position) {

            trolley_pos[i] = position;
            oldTrolleyId = trolley_id[i];
            trolley_id[i] = id;
            update_flag = true;
        }
    }
    if (update_flag == false) {
        err = 1;
        return {
            map: map,
            err: err,
            message: "Position not found"
        };
    }
    var new_map = "";
    for (i = 0; i < trolley_pos.length; i++) {
        new_map += trolley_pos[i] + ":" + trolley_id[i] + "|";
    }
    new_map = new_map.slice(0, new_map.length - 1);
    map = new_map;
    return {
        map: map,
        err: err,
        oldTrolleyId: oldTrolleyId,
        message: "PASS"
    };
}
function getIdFromPosition(pos, map, trolleyId, err) {
    map = map + "";
    var pos_id = map.split("|");//["POS.:ID", "POS.:ID", "POS.:ID", "POS.:ID"]		
    var trolley_pos = []; //list of all trolley positions in map		
    var trolley_id = []; // list of all trolley ids in map		

    var position_flag = false;

    for (i = 0; i < pos_id.length; i++) {
        trolley_pos.push(pos_id[i].split(":")[0]);
        trolley_id.push(pos_id[i].split(":")[1]);
    }
    for (i = 0; i < trolley_pos.length; i++) {

        if (trolley_pos[i] == pos) {

            trolleyId = trolley_id[i];
            position_flag = true;
        }
    }
    if (position_flag == false) {
        err = 1;
        return {
            map: map,
            trolleyId: "",
            err: err,
            message: "Position not found in the configuration"
        }
    }

    return {
        map: map,
        trolleyId: "" + trolleyId,
        err: err,
        message: "PASS"
    }
}
function updateBatchMap(map, batchId, partNumber, quantity, err) {
    map += "";

    var pn_batch = map.split("|");
    var pns = []; // list of pns in the attribute		
    var batches = [];// list of batches in the attribute		
    var quantities = [];
    var update_flag = false;

    // initialization		
    if (map == "") {

        var new_map = partNumber + "," + quantity + ":" + batchId;
        return {
            map: new_map,
            err: 0,
            message: "Initializing mapping"
        }
    }

    for (var i = 0; i < pn_batch.length; i++) {
        pns.push((pn_batch[i].split(":")[0]).split(",")[0]);//[pn1,pn2,pn3]		
        quantities.push((pn_batch[i].split(":")[0]).split(",")[1]);//[pn1,pn2,pn3]		
        batches.push(pn_batch[i].split(":")[1]);//[batch1 batch2, batch3, batch4 batch5]		
    }
    for (var i = 0; i < pns.length; i++) {

        if (partNumber == pns[i]) {


            batches[i] = batchId;



            update_flag = true;
            err = 0
        }
    }
    if (update_flag == false) {
        map += "|" + partNumber + "," + quantity + ":" + batchId;
        return {
            map: map,
            err: 0,
            message: "PASS"
        }
    }
    var new_map = "";
    for (i = 0; i < pns.length; i++) {
        new_map += pns[i] + "," + quantities[i] + ":" + batches[i] + "|";
    }
    new_map = new_map.slice(0, new_map.length - 1);
    return {
        map: new_map,
        err: 0,
        message: "PASS"
    };
}

// Melt Batch Handeling

function fct_getStoredMeltBatch(station, storage) {
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";

    var container_ar = [];
    var quantity_ar = [];

    //--------------------------------------------------------------------------
    var materialBinFilters = new Array(new KeyValue("MAX_ROWS", 100), new KeyValue("STORAGE_NUMBER", storage));
    var materialBinResultKeys = new Array("MATERIAL_BIN_NUMBER", "MATERIAL_BIN_QTY_ACTUAL", "MATERIAL_BIN_STATE");
    var attributes = [];

    var result_mlGetMaterialBinData = imsApiService.mlGetMaterialBinData(imsApiSessionContext,
        station,
        materialBinFilters,
        attributes,
        materialBinResultKeys);

    return_value = result_mlGetMaterialBinData.return_value;
    if (return_value != 0) {
        return {
            errorCode: return_value,
            errorMessage: errorMessage,
            listContainer: container_ar,
            listQuantity: quantity_ar
        };
    }
    var materialBinResultValues = result_mlGetMaterialBinData.materialBinResultValues;
    for (var i = 0; i < materialBinResultValues.length / 3; i++) {
        var mb = materialBinResultValues[i * 3 + 0];
        var qt = materialBinResultValues[i * 3 + 1];
        var st = materialBinResultValues[i * 3 + 2];
        if ((st == "R") || (st == "S")) {
            container_ar.push(mb);
            quantity_ar.push(qt);
        }
    }
    //--------------------------------------------------------------------------

    return {
        errorCode: return_value,
        errorMessage: errorMessage,
        listContainer: container_ar,
        listQuantity: quantity_ar
    };
}

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

function fct_finishMaterial(stationNumber, materialBin) {
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";

    //--------------------------------------------------------------------------
    var materialBinUploadValues = new Array(new KeyValue("MATERIAL_BIN_STATE", "E"));  // E : Completed - C : Closed
    var result_mlChangeMaterialBinData = imsApiService.mlChangeMaterialBinData(imsApiSessionContext,
        stationNumber,
        materialBin,
        materialBinUploadValues);

    return_value = result_mlChangeMaterialBinData.return_value;
    //--------------------------------------------------------------------------
    var materialSetupUploadKeys = new Array("ERROR_CODE", "MATERIAL_BIN_NUMBER", "SETUP_POSITION", "SETUP_STATE");
    var materialSetupUploadValues = new Array("0", materialBin, materialBin, 1);

    var compPositionsUploadKeys = new Array();
    var compPositionsUploadValues = new Array();
    var result_setupUpdateMaterialSetup = imsApiService.setupUpdateMaterialSetup(imsApiSessionContext,
        stationNumber,
        2,
        "-1",
        "-1",
        "-1",
        materialSetupUploadKeys,
        materialSetupUploadValues,
        compPositionsUploadKeys,
        compPositionsUploadValues);

    return_value = result_setupUpdateMaterialSetup.return_value;

    //--------------------------------------------------------------------------
    return {
        errorCode: return_value,
        errorMessage: errorMessage,
    };
}

function fct_getMeltQuantity(stationNumber, serialNumber) {
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";

    var partNumber = "";
    var quantity = 0;
    //--------------------------------------------------------------------------

    var bomDataFilters = new Array(new KeyValue("SERIAL_NUMBER", serialNumber));
    var bomDataResultKeys = new Array("PART_NUMBER", "SETUP_FLAG", "QUANTITY");
    var result_mdataGetBomData = imsApiService.mdataGetBomData(imsApiSessionContext,
        stationNumber,
        bomDataFilters,
        bomDataResultKeys);

    return_value = result_mdataGetBomData.return_value;
    logHandler.logMessage("#### mdataGetBomData return_value  = " + return_value);
    if (return_value != 0) {
        return {
            errorCode: return_value,
            errorMessage: errorMessage,
            partNumber: partNumber,
            quantity: quantity
        };
    }

    var bomDataResultValues = result_mdataGetBomData.bomDataResultValues;
    for (var i = 0; i < bomDataResultValues.length / 3; i++) {
        var pn = bomDataResultValues[i * 3 + 0];
        var sf = parseInt(bomDataResultValues[i * 3 + 1]);
        var qt = bomDataResultValues[i * 3 + 2];
        if (pn == "ALUMELT001" && sf == 1) {
            partNumber = pn;
            quantity = parseFloat(qt);
        };
    }
    //--------------------------------------------------------------------------
    return {
        errorCode: return_value,
        errorMessage: errorMessage,
        partNumber: partNumber,
        quantity: quantity
    };
}

function fct_getProp(listContainer, listProp, C, seuil) {
    var res = [];
    var den = 0;
    var newProp = [];
    var toRemove = [];
    var consume = [];
    var tot = 0;

    for (var i = 0; i < listProp.length; i++) {
        if (listProp[i] > seuil) den += parseFloat("" + listProp[i]);

    }
    //logHandler.logMessage("#### den " + den);
    var val1 = 0;
    var val2 = 0;
    for (var i = 0; i < listProp.length; i++) {

        val1 = (listProp[i] * (1 - (C / den))).toFixed(2);
        val2 = (listProp[i] * (0 - (C / den))).toFixed(2);


        newProp.push(val1);
        consume.push(val2);
        logHandler.logMessage("#### consume [" + i + "] " + val2);
        if (parseFloat("" + newProp[i]) < seuil) {
            toRemove.push(listContainer[i]);
        }
        tot += parseFloat("" + newProp[i]);
    }

    return {
        listContainer: listContainer,
        listProp: listProp,
        listNewProp: newProp,
        consume: consume,
        tot: tot,
        toRemove: toRemove
    };
}

function fct_uploadMaterialBinBooking(stationNumber, serialNumber, storage) {
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";
    //--------------------------------------------------------------------------

    var res = fct_getStoredMeltBatch(stationNumber, storage);                   // get the list of available melt batch in the holding furnace
    var listContainer = res.listContainer;
    var listQuantity = res.listQuantity;

    var res = fct_getMeltQuantity(stationNumber, serialNumber);                 // get melt quantity from the BOM
    var bomQty = res.quantity;
    logHandler.logMessage("#### bomQty = " + bomQty);

    var res = fct_getProp(listContainer, listQuantity, bomQty, 25);             // calculate melt consumption and return empty containers
    var listContainer = res.listContainer;      // list of in use melt batch
    var listConsume = res.consume;              // list of quantity to be consumed
    var listNewProp = res.listNewProp;          // list of remaining quantity
    var toRemove = res.toRemove;                // list of container to remove

    logHandler.logMessage("#### StationNumber : " + stationNumber);
    logHandler.logMessage("#### In Containers");
    for (var i = 0; i < listContainer.length; i++) {
        logHandler.logMessage("#### Container [" + i + "] = " + listContainer[i] + "    /   " + listQuantity[i]);
    }

    logHandler.logMessage("#### Out Containers");
    for (var i = 0; i < listContainer.length; i++) {
        logHandler.logMessage("#### Container [" + i + "] = " + listContainer[i] + "    /   " + listNewProp[i]);
    }

    logHandler.logMessage("#### To Remove");
    for (var i = 0; i < toRemove.length; i++) {
        logHandler.logMessage("#### Container [" + i + "] = " + toRemove[i]);
        var res = fct_finishMaterial(stationNumber, toRemove[i]);
    }


    var transactionCode = 201;

    // -------------------------------------------------------------------------
    var materialBinBookingUploadKeys = new Array("ERROR_CODE", "MATERIAL_BIN_NUMBER", "QUANTITY", "TRANSACTION_CODE");
    var materialBinBookingUploadValues = [];

    for (var i = 0; i < listContainer.length; i++) {
        materialBinBookingUploadValues.push(0);
        materialBinBookingUploadValues.push(listContainer[i]);
        materialBinBookingUploadValues.push(listConsume[i]);
        materialBinBookingUploadValues.push(transactionCode);
        logHandler.logMessage("#### listConsume [" + i + "] = " + listConsume[i]);

        errorMessage += "[" + listContainer[i] + ":" + listConsume[i] + "]";
    }

    errorMessage += " > " + bomQty;

    var result_mlUploadMaterialBinBooking = imsApiService.mlUploadMaterialBinBooking(imsApiSessionContext,
        stationNumber,
        materialBinBookingUploadKeys,
        materialBinBookingUploadValues);

    return_value = result_mlUploadMaterialBinBooking.return_value;
    //--------------------------------------------------------------------------


    return {
        errorCode: return_value,
        errorMessage: errorMessage,
    };
}

function getStorage(stationNumber) {
    return stationNumber.substr(0, 8);
}

function isCarousel(station) {
    var isCar = false;
    if ((station.substr(0, 8) == "06002006") || (station.substr(0, 8) == "06002010")) isCar = true;

    return isCar;
}