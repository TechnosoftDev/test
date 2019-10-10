/*
 * Copyright (c) 2019 iTAC Software AG, Germany. All Rights Reserved.
 *
 * This software is protected by copyright. Under no circumstances may any part of this file in any form be copied,
 * printed, edited or otherwise distributed, be stored in a retrieval system, or be translated into another language
 * without the written permission of iTAC Software AG.
 *
 */

/*##################################################################################################################################################*/

//          @@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 @@@@@@@@@@@@@@@@                                @@@@@@@@@@@@@@@@@@      
//       @@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 @@@@@@@@@@@@@@@@                            @@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                  @@@@@@@@@@@@@@@@                        @@@@@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@                     @@@@@@@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                    @@@@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                    @@@@@@@@@@@@@@@@                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
//       @@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                     @@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
//         @@@@@@@@                                                                  @@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@                
//                                                                                   @@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@@@@                     
//                                                                                    @@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@@@                       
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@                            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@                         
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@                          
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                          @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@                          
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                         @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@                          
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                         @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@                          
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                        @@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@                          
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                       @@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@                         
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                       @@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@                        
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                      @@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@                      
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@                      @@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@                    
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@               
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@@             @@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@@@@@@@      
//      @@@@@@@@@@@@@@@                @@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@      
//                                                                                                                                                                                                                                                                                                                                                                                                                                                            
//      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       
//                                                                                                                                                                                                                                                                                              
//        @@@@@@@@          @@@@@@@          @@@@@@@@       @@@@@@@@@@       @@     @@@     @@          @@@            @@@@@@@@          @@@@@@@@       
//      @@@@@ @@@@        @@@@@@@@@@@        @@@@@@@@       @@@@@@@@@@       @@@    @@@    @@@         @@@@@           @@@@@@@@@        @@@@@@@@@       
//      @@@              @@@       @@        @@                 @@            @@   @@@@@   @@@         @@ @@@          @@     @@        @@@             
//      @@@@@@           @@@       @@@       @@@@@@@            @@            @@@  @@ @@   @@         @@@  @@          @@    @@@        @@@@@@@@        
//        @@@@@@@@       @@@       @@@       @@@@@@@            @@            @@@ @@@ @@@ @@@        @@@   @@@         @@@@@@@@         @@@@@@@@        
//             @@@@      @@@       @@@       @@                 @@             @@ @@@  @@ @@         @@@@@@@@@         @@ @@@           @@@             
//              @@@       @@       @@        @@                 @@             @@@@@   @@@@@        @@@     @@@        @@   @@@         @@@             
//      @@@@@@@@@@        @@@@@@@@@@@        @@                 @@              @@@@   @@@@        @@@       @@@       @@    @@@        @@@@@@@@@@      
//      @@@@@@@@            @@@@@@@          @@                 @@              @@@     @@@        @@@        @@       @@     @@@        @@@@@@@@@  

/*##################################################################################################################################################*/       

/**
 Change index:

 Name:                  Date:           Customer:        Function:               Comment:
 Sami Akkari            2019-03-26      Le Belier        cfVi                    First Release 
 Faouzi Ben Mabrouk     2019-05-16      Le belier        cfVi                    Update version 2
 Sami Akkari            2019-06-18      Le Belier        cfVi                    Add trCheckSerialNumberState in cfViRegisterSerialNumber
 Sami Akkari            2019-06-22      Le Belier        cfVi                    Add Max Quantity check
 Faouzi Ben Mabrouk     2019-08-26      Le belier        cfVi                    Add managing of reintroduced part in VI - cavity 00
 Faouzi Ben Mabrouk     2019-08-27      Le belier        cfVi                    Add managing of part coming from MOHACS plant - cavity 99 and line A
 Faouzi Ben Mabrouk     2019-08-28      Le belier        cfVi                    Add managing of scrap process
 Sami Akkari            2019-08-29      Le Belier        cfVi                    Add Release button interlocking in cfViPackPart + cfViUploadInspection result
 Sami Akkari            2019-08-29      Le Belier        cfVi                    Add WP and WO assignment with new the customer logic
 Sami Akkari            2019-09-05      Le Belier        cfVi                    Remove the assign in the visual inspection of the final packing
 Sami Akkari            2019-09-26      Le Belier        cfVi                    Scrap station update + SIIF upload 
 Ala Khiari             2019-10-10      Le Belier        cfVi                    Add config functions to getReference,getLine,getReference_ms,getPartNumber,getReference2_ms
 **/

importPackage(com.itac.mes.api.custom);
importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.mes.api.business);
importPackage(java.lang);
importPackage(java.util);
importPackage(java.text);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.util.constants.imsapi);
importPackage(com.itac.mes.api.service);

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
    get Reference informations based on product code and side
    in  : configContent, code, side
    out : 
        { 
            partNumber              //? part number (returned only when side is used)
            productFamily           //? productFamily
        }
    ============================================================================
*/
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
/*  ============================================================================
*/

/*  ============================================================================
    get line id based on the line code
    in  : configContent, code
    out : 
        { 
            line                            //? line id
        }
    ============================================================================
*/
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
/*  ============================================================================
*/

/*  ============================================================================
    get Product informations based on product family and side
    in  : configContent, code, side
    out : 
        { 
            partNumber              //? part number (returned only when side is used)
            code                    //? product code
        }
    ============================================================================
*/
function fct_getProductInformation(configContent, productFamily, side) {
    var errorCode = 0;
    var errorMessage = "";
    var code = "-1";
    var partNumber = "-1";

    var configuration = configContent.monoblocProducts;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".monoblocProducts is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            partNumber: partNumber,
            code: code
        }
    }

    var SIDE_AR = [];
    var PN_AR = [];

    if (code != "") {
        for (var i = 0; i < configuration.length; i++) {
            if (configuration[i].productFamily == productFamily) {
                if (side != "") {
                    SIDE_AR = configuration[i].side.split("|");
                    var pos = Arrays.asList(SIDE_AR).indexOf(side);
                    if (pos > -1) {
                        PN_AR = configuration[i].linkedPartNumbers.split("|");
                        partNumber = PN_AR[pos];
                    }
                    code = configuration[i].code;
                }
                else {
                    code = configuration[i].code;
                }
            }
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        partNumber: partNumber,
        code: code
    }
}
/*  ============================================================================
*/

function cfViUploadInspectionResult(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var serialNumber = data.serialNumber;
        var serialNumberState = data.serialNumberState;    serialNumberState = 2;
        var serialNumberMode = data.serialNumberMode; 
        var failureData = data.failureData;
        var sandcoreCavity = data.sandcoreCavity;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        var TEMP_PASS_QTY = "";
        var TEMP_SCRAP_QTY = "";
        var TEMP_INSP_MAP = "";

        var stationType="";
        var log = "";
        
        // API integration -----------------------------------------------------
        //Check if there is enough quantity after shooting
        if ((stationNumber=="04002011")||(stationNumber=="04002021")){
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("SC_CONSUMED_QUANTITY","SC_PRODUCED_QUANTITY","CAVITY_MAP");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
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

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {

                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_CAVITY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
            var TEMP_CAVITIES = TEMP_CAVITY_MAP.split("|");
            var TEMP_NUMBER_OF_CAVITIES = TEMP_CAVITIES.length;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_PRODUCED_QUANTITY = parseInt(result_attribGetAttributeValues.attributeResultValues[7]);
            var TEMP_CONSUMED_QUANTITY = parseInt(result_attribGetAttributeValues.attributeResultValues[4]);
            var TEMP_AVAILABLE_QUANTITY = parseInt(TEMP_PRODUCED_QUANTITY-TEMP_CONSUMED_QUANTITY);
            logHandler.logMessage("TEMP_PRODUCED_Q"+TEMP_PRODUCED_QUANTITY+"?????? TEMP_CONSUMED_QUANTITY"+TEMP_CONSUMED_QUANTITY);
            logHandler.logMessage("TEMP_NUMBER_OF_CAVITIES"+TEMP_NUMBER_OF_CAVITIES);
            logHandler.logMessage("TEMP_AVAILABLE_QUANTITY"+TEMP_AVAILABLE_QUANTITY);
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            if(TEMP_AVAILABLE_QUANTITY<=0){
                errorCode = 99999;
                errorMessage = "[Shooting number is not changed yet] ";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage,
                        redButton : 1
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }
        // Update serail number state based on the repair states
        // ---------------------------------------------------------------------
        serialNumberState = 0;
        for (var i=0;i<failureData.length;i++){

            if (failureData[i].repairState == "0") {
                serialNumberState = 2;
            }
        }
        // ---------------------------------------------------------------------

        if (stationNumber=="06012010") stationType="X-RAY";
        if (stationNumber=="06014010") stationType="3D-MEASUREMENTS";


        if (serialNumberMode.equals("BATCH")) {
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("PASS_QTY","SCRAP_QTY");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                serialNumber,
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys);

            var return_value = result_attribGetAttributeValues.return_value;

            if (return_value != 0) {

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {

                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 

            TEMP_PASS_QTY = result_attribGetAttributeValues.attributeResultValues[1];
            TEMP_SCRAP_QTY = result_attribGetAttributeValues.attributeResultValues[4];

            var TEMP_SCRAP_ID;
            var TEMP_SCQTY;
            var TEMP_PSQTY;
                      
            if (serialNumberState==2){
                TEMP_SCRAP_ID = serialNumber + "-S" + TEMP_SCRAP_QTY;
                TEMP_SCQTY = parseInt(TEMP_SCRAP_QTY);
                TEMP_SCQTY++;  // increment scrap quantity
                TEMP_SCRAP_QTY = ""+TEMP_SCQTY;     
            }
            else{
                TEMP_SCRAP_ID = serialNumber + "-R" + TEMP_PASS_QTY;
                TEMP_PSQTY = parseInt(TEMP_PASS_QTY);
                TEMP_PSQTY++;  // increment scrap quantity
                TEMP_PASS_QTY = ""+TEMP_PSQTY;     
                
            }

            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("PASS_QTY", TEMP_PASS_QTY, "0",
                                                  "SCRAP_QTY", TEMP_SCRAP_QTY, "0");
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                serialNumber,
                "-1",
                -1,
                1,
                attributeUploadKeys,
                attributeUploadValues);

            var return_value = result_attribAppendAttributeValues.return_value;

            if (return_value != 0) { 

                errorCode = return_value;
                errorMessage = "[attribAppendAttributeValues] "+ getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 

            // < trGetSerialNumberInfo> --------------------------------------------
            var serialNumberResultKeys = new Array("PART_DESC","PART_NUMBER","QUANTITY","WORKORDER_NUMBER");

            var result_trGetSerialNumberInfo = imsApiService.trGetSerialNumberInfo(imsApiSessionContext, 
                stationNumber, 
                serialNumber,
                "-1",
                serialNumberResultKeys);

            var return_value = result_trGetSerialNumberInfo.return_value;

            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "[trGetSerialNumberInfo] " + errorMessage
                    };
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_PART_DESC = result_trGetSerialNumberInfo.serialNumberResultValues[0]; 
            var TEMP_PART_NUMBER = result_trGetSerialNumberInfo.serialNumberResultValues[1];
            var TEMP_QUANTITY = result_trGetSerialNumberInfo.serialNumberResultValues[2];
            var TEMP_WORKORDER_NUMBER = result_trGetSerialNumberInfo.serialNumberResultValues[3];
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            var serialNumberArrayList = [];
            // <trAssignSerialNumberMergeAndUploadState> ---------------------------
            var result_trAssignSerialNumberForProductOrWorkOrder = imsApiService.trAssignSerialNumberForProductOrWorkOrder(imsApiSessionContext, 
                stationNumber, 
                TEMP_WORKORDER_NUMBER, 
                "-1",
                "-1",
                TEMP_SCRAP_ID, 
                "1", 
                2,
                serialNumberArrayList, 
                0);

            var return_value = result_trAssignSerialNumberForProductOrWorkOrder.return_value;

            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "[trAssignSerialNumberForProductOrWorkOrder] " + errorMessage
                    };
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }
        
        if (!serialNumberMode.equals("BATCH")) {
            TEMP_SCRAP_ID = serialNumber;
        }
        
        // < trUploadFailureAndResultData> -------------------------------------
        var measureKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE");
        var measureValues = new Array();
        var failureKeys = new Array("ERROR_CODE", "FAILURE_TYPE_CODE", "GRID_X", "GRID_Y", "IMAGE_NAME", "REPAIRED");
        var failureValues = new Array();
        var failureSlipKeys = new Array();
        var failureSlipValues = new Array();
        //Preparing the failure data items to be uploaded
        for (var y=0; y < failureData.length; y++){
             
            failureValues.push("0");
            failureValues.push(failureData[y].FailureTypeCode);
            failureValues.push(failureData[y].gridX);
            failureValues.push(failureData[y].gridY);
            failureValues.push(failureData[y].gridImageName);
            failureValues.push(failureData[y].repairState);
             
        }
        
        var result_trUploadFailureAndResultData = imsApiService.trUploadFailureAndResultData(imsApiSessionContext, 
            stationNumber, 
            2,
            TEMP_SCRAP_ID,
            "-1",
            serialNumberState,
            0,
            0,
            -1,
            measureKeys,
            measureValues,
            failureKeys,
            failureValues,
            failureSlipKeys,
            failureSlipValues
            );

        var return_value = result_trUploadFailureAndResultData.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[trUploadFailureAndResultData] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        
        // When unit scrapped for serial number mode and X-Ray
       
        var SNR_AR = [];

        //==========================================================================================

        //<mdataGetCalendarData>----------------------------------------------------------------
        var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
        var result_mdataGetCalendarData= imsApiService.mdataGetCalendarData(imsApiSessionContext, 
            stationNumber, 
            calendarDataResultKeys);

        var return_value = result_mdataGetCalendarData.return_value;
        var TEMP_CURRENT_TIME = parseInt(result_mdataGetCalendarData.calendarDataResultValues[0]);
        
        //------------------------------------------------------------------
        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("LAST_INSPECTION_MAP");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            7,
            stationNumber,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0 ) {

            errorCode = return_value;
            errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_INSP_MAP = ""+result_attribGetAttributeValues.attributeResultValues[1];
        
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var lastInspTime = getLastInspectionTime(serialNumber,TEMP_INSP_MAP).time;
        log += ""+ TEMP_INSP_MAP + " > " +lastInspTime;
        
        //==========================================================================================
    
        //==========================================================================================
        // only called for XRAY and 3D Measurement
        //==========================================================================================

        if ( (!serialNumberMode.equals("BATCH")) && (serialNumberState==2) && ((stationNumber=="06012010") || (stationNumber=="06014010"))){
            
            // <trGetSerialNumberInfo> -----------------------------------------------
            var serialNumberResultKeys = new Array("WORKORDER_NUMBER");
            var result_trGetSerialNumberInfo = imsApiService.trGetSerialNumberInfo(imsApiSessionContext, 
                        stationNumber, 
                        serialNumber,
                        "-1",
                serialNumberResultKeys);

            return_value = result_trGetSerialNumberInfo.return_value;
            if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[trGetSerialNumberInfo] " + errorMessage
                };

            return resultData;
            }
         
            var TEMP_WORKORDER = ""+result_trGetSerialNumberInfo.serialNumberResultValues[0];
            //log = TEMP_WORKORDER;
            
            //------------------------------------------------------------------
            //START trGetSerialNumberForWorkOrderAndWorkstep
            var serialNumberResultKeys = new Array("SERIAL_NUMBER","SERIAL_NUMBER_STATE","BOOK_DATE","STATION_NUMBER","WORKSTEP_NUMBER");	
            var result_trGetSerialNumberForWorkOrderAndWorkstep = imsApiService.trGetSerialNumberForWorkOrderAndWorkstep(imsApiSessionContext, 
                stationNumber, 
                2, 
                TEMP_WORKORDER,
                0,
                0,
                0,
                0,
                10000,
                0,
                1,
                serialNumberResultKeys
                );

            return_value = result_trGetSerialNumberForWorkOrderAndWorkstep.return_value;
            var objectUploadValues = [];
            var cav = "";
            var refcav = "";
            for (var i=0;i<(result_trGetSerialNumberForWorkOrderAndWorkstep.serialNumberResultValues.length)/5;i++){
                var BOOK_DATE=parseInt(result_trGetSerialNumberForWorkOrderAndWorkstep.serialNumberResultValues[5*i+2]);
                var SNR=""+result_trGetSerialNumberForWorkOrderAndWorkstep.serialNumberResultValues[5*i+0];
               
                refcav = getInfoFromUID(serialNumber).cavity;
                cav=getInfoFromUID(SNR).cavity;
                // when first inspection get units fromsince last houre
                if (lastInspTime<=-1) {
                    if (( cav == refcav) && ((TEMP_CURRENT_TIME-BOOK_DATE)<3600*1000)) {    
                        SNR_AR.push(SNR);
                        objectUploadValues.push(0,SNR);
                        log = "LASTHOUR";
                    }
                }
                // get units since last inspection time
                else{
                    if (( cav == refcav) && ((BOOK_DATE)>=lastInspTime)) {    
                        SNR_AR.push(SNR);
                        objectUploadValues.push(0,SNR);
                        log = "LASTINSP";
                    }
                }
            }
            
            
            //------------------------------------------------------------------
            if ((SNR_AR.length>0)){
                var lock_info = "All units produced with cavity " + cav + " to be inspected in " + stationType + " !";
                var objectUploadKeys = new Array("ERROR_CODE","SERIAL_NUMBER");
                var result_lockObjects = imsApiService.lockObjects(imsApiSessionContext, 
                    stationNumber, 
                    0,
                    stationType,
                    lock_info,
                    -1,
                    0,
                    objectUploadKeys,
                    objectUploadValues);

                return_value = result_lockObjects.return_value;    
            }
          
        }
        //----------------------------------------------------------------------

     

        if ( (!serialNumberMode.equals("BATCH"))  && (serialNumberState==2) && ((stationNumber=="06012010") || (stationNumber=="06014010"))){

            var TEMP_NEW_INSP_MAP = updateInspectionTime(serialNumber,TEMP_INSP_MAP,TEMP_CURRENT_TIME).map;
            
            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("LAST_INSPECTION_MAP", TEMP_NEW_INSP_MAP, "0");
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
                errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }   
            
            // ------------------------------------------------------------------------------------
        }
        if(stationNumber=="04002011"||stationNumber=="04002021"){
            //Increment the consumed quantity for the shooting number check

            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("SC_CONSUMED_QUANTITY");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
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

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {

                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_SC_CONSUMED_QUANTITY = result_attribGetAttributeValues.attributeResultValues[1];
            TEMP_SC_CONSUMED_QUANTITY ++;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            
            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("SC_CONSUMED_QUANTITY", TEMP_SC_CONSUMED_QUANTITY, "0");
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
                errorMessage = "[attribAppendAttributeValues] "+ getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
        }
       

        // JSON result ---------------------------------------------------------
        var resultData = {
            log : log,
            cav : cav,
            refcav : refcav,
            wo : ""+log,
            xray : return_value,
            snr : ""+SNR_AR,
            errorcode : 0,
            errorMessage : "",
            redButton : 0 

        };
        
        result.outArgs = [JSON.stringify(resultData)];

        // ---------------------------------------------------------------------

    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfViUploadInspectionResult failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function getWorkorder(stationNumber,partNumber,infoText){
    var workorder = "";
    var errorCode = 0;
    var TEMP_WO_AR = [];
    var TEMP_START_DATE_AR = [];
    var TEMP_INFO_TXT = [];
    //--------------------------------------------------------------------------
    
    // <mdataGetWorkorders> ----------------------------------------------------
    var mdataGetWorkordersFilers = new Array(new KeyValue("PART_NUMBER",partNumber), new KeyValue("WORKORDER_STATE","F,S"));
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
            workorder:workorder,
            errorCode:errorCode
        }
    }
    
    for (var x=0; x< result_mdataGetWorkorders.mdataGetWorkordersResultValues.length/3; x++){
        var txt = result_mdataGetWorkorders.mdataGetWorkordersResultValues[x*3+2];
        if (txt == infoText) {
            TEMP_WO_AR.push(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x*3+0]);
            TEMP_START_DATE_AR.push(parseInt(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x*3+1]));
            TEMP_INFO_TXT.push(txt);
        }
    }
    
    // Sort Workorders by start date (from newest to oldest)
    if (TEMP_WO_AR.length>1){
        for (var x=0;x<TEMP_WO_AR.length;x++){
            for (var y=x+1;y<TEMP_WO_AR.length;y++){
                if (TEMP_START_DATE_AR[y]>TEMP_START_DATE_AR[x]){
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
        workorder:workorder,
        errorCode:errorCode
    }
}

function assignSnr(stationNumber,serialNumber,workorder){
    var errorCode = 0;
    
    var snrArray = new Array();
    
    // <trAssignSerialNumberForProductOrWorkOrder> -----------------------------
    var result_trAssignSerialNumberForProductOrWorkOrder = imsApiService.trAssignSerialNumberForProductOrWorkOrder(imsApiSessionContext,
                    stationNumber,
                    workorder,
                    "-1",
                    "-1",
                    serialNumber,
                    "1",
                    2,
                    snrArray,
                    0);
                    
    var return_value = result_trAssignSerialNumberForProductOrWorkOrder.return_value;
    
    if (return_value != 0 && return_value != -206){
        errorCode = return_value;
    }
    
    return {
        errorCode:errorCode
    }
}

  

function ims_assignSnr(stationNumber,serialNumber,workorder){
    var errorCode = 0;
    
    var snrArray = new Array();
    
    // <trAssignSerialNumberForProductOrWorkOrder> -----------------------------
    var result_trAssignSerialNumberForProductOrWorkOrder = imsApiService.trAssignSerialNumberForProductOrWorkOrder(imsApiSessionContext,
                    stationNumber,
                    workorder,
                    "-1",
                    "-1",
                    serialNumber,
                    "1",
                    2,
                    snrArray,
                    0);
                    
    var return_value = result_trAssignSerialNumberForProductOrWorkOrder.return_value;
    
    return {
        errorCode:return_value
    }
}

function ims_uploadSnr(stationNumber,serialNumber){
    var errorCode = 0;
    
    //<trUploadState>-------------------------------------------------------------
    var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
    var serialNumberUploadValues = new Array();
    var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
        stationNumber,
        2, 
        serialNumber,
        "-1",
        0,
        0,
        "-1",
        0,
        serialNumberUploadKeys,
        serialNumberUploadValues);
          
    var return_value = result_trUploadState.return_value;    
    
    return {
        errorCode:return_value
    }
}

function getErpGroup(station){
    return station.substring(0,6);
}

function isVisualInspectionStation(station){
    if ((station != "06012010") && (station != "06014010")) return true;
    return false;
}


function cfViRegisterSerialNumber(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var serialNumber = data.serialNumber;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        var return_value = 0;
        
        // API integration -----------------------------------------------------
        //check if serial number is packed
		// <shipGetLotFromSerialNumber> ---------------------------------------------
		var lotResultKeys = new Array("SHIPPING_LOT_NUMBER");
		var result_shipGetLotFromSerialNumber = imsApiService.shipGetLotFromSerialNumber(imsApiSessionContext, 
			stationNumber, 
			serialNumber,
			"-1",
			lotResultKeys);

		var return_value = result_shipGetLotFromSerialNumber.return_value;

		if (return_value != -418) {

			errorCode = -7979;
			errorMessage = "[shipGetLotFromSerialNumber] " + "Packed serial numbers cannot be scrapped";
			
			var resultData = {
					errorCode : errorCode,
					errorMessage : "" + errorMessage
				};
			result.return_value = errorCode ;
			result.outArgs = [JSON.stringify(resultData)];
			return result;
		}
        // =====================================================================
        var stationType = "";
        if (stationNumber=="06012010") stationType="X-RAY";
        if (stationNumber=="06014010") stationType="3D-MEASUREMENTS";
        // Check serial number - The serial number will be created when the UID will have the cavity number "00".
        
        var uidInf = getInfoFromUID(serialNumber);
        var cav = uidInf.cavity;
        var line = uidInf.line;      
        var WORKORDER = "";
        var log = "";
        var AUTO_PROCESS = true;
        
        if(stationNumber.slice(0,stationNumber.length-2) != "100040"){
            var configContent = fct_readDocument(stationNumber);
            if (cav == "00") {
                var uidInfo = getInfoFromUID(serialNumber);
                var cav = uidInfo.cavity;  
                var ref = fct_getReference(configContent, uidInfo.reference, uidInfo.side).partNumber;
                
                AUTO_PROCESS = false;
                var WP = "WP2";
                var woResult = getWorkorder(stationNumber, ref, WP);   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP2"
                WORKORDER = woResult.workorder; 
                var fct_assignSnr = assignSnr(stationNumber,serialNumber,WORKORDER);
            
                return_value = fct_assignSnr.errorCode;
                if ( return_value != 0) {
                    errorCode = return_value;
                    errorMessage = getImsApiErrorText(return_value);
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "[trAssignSerialNumberForProductOrWorkOrder] " + errorMessage
                        };
                    result.outArgs = [JSON.stringify(resultData)];
                    result.return_value = return_value;
                    return result;
                }

            }else if(cav == "99" && stationNumber == "06010030" && isKaizenLine(line)=="true" ){
                var uidInfo = getInfoFromUID_ms(serialNumber);
                var uidInfo2 = getInfoFromUID2(configContent,serialNumber);
                var cav = uidInfo.cavity;  
                var ref = fct_getReference(configContent, uidInfo.reference, uidInfo.side).partNumber;
                
                AUTO_PROCESS = false;
                var WP = "WP3";
                var woResult = getWorkorder(stationNumber,ref, WP);   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP3"
                WORKORDER = woResult.workorder;

                //Getting the part number for the consumption 
                var TEMP_PART_NUMBER = "";
                
                TEMP_OBJECT = fct_getProductInformation(configContent, uidInfo2.reference, uidInfo2.side ).partNumber;
                TEMP_ERROR = TEMP_OBJECT.err; 

                if(TEMP_ERROR != 0){

                    errorCode = -1035;
                    errorMessage = "[Error in getPartNumber] "+ TEMP_OBJECT.message;
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                    };
                    
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }
                TEMP_PART_NUMBER = TEMP_OBJECT.partNumber;
                
                
                var fct_assignSnr = assignSnr(stationNumber,serialNumber,WORKORDER);
            
                return_value = fct_assignSnr.errorCode;
                if ( return_value != 0) {
                    errorCode = return_value;
                    errorMessage = getImsApiErrorText(return_value);
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "[trAssignSerialNumberForProductOrWorkOrder] " + errorMessage
                        };
                    result.outArgs = [JSON.stringify(resultData)];
                    result.return_value = return_value;
                    return result;
                }

            }else if(cav == "99" && line !="C" ){
                var uidInfo = getInfoFromUID(serialNumber);
                var cav = uidInfo.cavity;  
                var ref = fct_getReference(configContent, uidInfo.reference, uidInfo.side).partNumber;

                AUTO_PROCESS = false;
                var WP = "WP4";
                var woResult = getWorkorder(stationNumber,ref, WP);   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP4"
                WORKORDER = woResult.workorder;
                var fct_assignSnr = assignSnr(stationNumber,serialNumber,WORKORDER);
            
                return_value = fct_assignSnr.errorCode;
                if ( return_value != 0) {
                    errorCode = return_value;
                    errorMessage = getImsApiErrorText(return_value);
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "[trAssignSerialNumberForProductOrWorkOrder] " + errorMessage
                        };
                    result.outArgs = [JSON.stringify(resultData)];
                    result.return_value = return_value;
                    return result;
                }
            }
            
            /*// Only available from [060100]
            if ((cav == "00") && (getErpGroup(stationNumber) == "060100")) {
                AUTO_PROCESS = false;
                var woResult = getWorkorder(stationNumber,ref,"WP2");   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP2"
                WORKORDER = woResult.workorder; 
    
                var fct_assignSnr = ims_assignSnr(stationNumber,serialNumber,WORKORDER);
                
                return_value = fct_assignSnr.errorCode;
                if ( return_value != 0) {
                    errorCode = return_value;
                    errorMessage = getImsApiErrorText(return_value);
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "[ims_assignSnr] " + errorMessage
                        };
                    result.outArgs = [JSON.stringify(resultData)];
                    result.return_value = return_value;
                    return result;
                }
            }*/
        }

        // Only available from [100040] --> Part coming from MOHACS plant
        if ((cav == "99") && (line == "A") && (getErpGroup(stationNumber) == "100040")) {
            var uidInfo = getInfoFromUID(serialNumber);
            var cav = uidInfo.cavity;  
            var ref = fct_getReference(configContent, uidInfo.reference, uidInfo.side).partNumber;
            var log =""+ref;
            AUTO_PROCESS = false;
            var shootBalstSt = stationNumber.replace("100040","100020");
            var woResult = getWorkorder(shootBalstSt,ref,"WP5");   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP5"
            WORKORDER = woResult.workorder; 
            log += shootBalstSt;
            var fct_assignSnr = ims_assignSnr(shootBalstSt,serialNumber,WORKORDER);
            
            return_value = fct_assignSnr.errorCode;
            if ( return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                        log : log,
                        errorCode : errorCode,
                        errorMessage : "[ims_assignSnr] " + errorMessage
                    };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

            // upload state in shot balasting station
            
            var fct_uploadSnr = ims_uploadSnr(shootBalstSt,serialNumber);

            if ( return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "[ims_uploadSnr] " + errorMessage
                    };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
                }
        }
       
        
        var _snr = serialNumber;
        var _wo = WORKORDER;
        
        if (WORKORDER != "") {
            _snr = "-1";
            _wo = WORKORDER;
        }
        else {
            _snr = serialNumber;
            _wo = "-1";
        }
           
        //log += "WO: " + _wo + " - SNR: " + _snr;
        
        // <trActivateWorkOrder> -----------------------------------------------
        var result_trActivateWorkOrder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
           stationNumber,
           _wo,
           _snr,
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
        
        // Check serial number state only for unit coming from automatic process
        if (AUTO_PROCESS) {

            if (isVisualInspectionStation(stationNumber)) {
                // <trCheckSerialNumberState> -----------------------------------------------
                var serialNumberStateResultKeys = new Array("ERROR_CODE", "LOOP_COUNTER", "SERIAL_NUMBER", "SERIAL_NUMBER_POS", "SERIAL_NUMBER_STATE");
                var result_trCheckSerialNumberState = imsApiService.trCheckSerialNumberState(imsApiSessionContext,
                        stationNumber,
                        2,
                        0,
                        serialNumber,
                        "-1",
                        serialNumberStateResultKeys);

                return_value = result_trCheckSerialNumberState.return_value;
                var ERROR_CODE = result_trCheckSerialNumberState.serialNumberStateResultValues[0];
                if ((return_value != 0) && (ERROR_CODE != -202)) {
                    errorCode = return_value;
                    errorMessage = getImsApiErrorText(return_value);
                    var resultData = {
                            log : log,
                            errorCode : errorCode,
                            errorMessage : "[trCheckSerialNumberState] " + errorMessage
                        };
                    result.outArgs = [JSON.stringify(resultData)];
                    result.return_value = return_value;
                    return result;
                }
				var SIIFStation = getSIIFStation(line);
			
				 if(stationNumber.slice(0,stationNumber.length-2) != "100040"){
					 var SIIFStation = getSIIFStation(line);
					//<trUploadState>----------------------------------------------------------------
					var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
					var serialNumberUploadValues = new Array();
					var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
						SIIFStation,
						2, 
						serialNumber,
						"-1",
						0,
						0,
						"-1",
						0,
						serialNumberUploadKeys,
						serialNumberUploadValues);
						
					var return_value = result_trUploadState.return_value;

					if (return_value != 0) { 

						errorCode = return_value;
						errorMessage = "[trUploadState] "+ getImsApiErrorText(return_value);
						
						var resultData = {
								errorCode : errorCode,
								errorMessage : "" + errorMessage
							};
						result.return_value = errorCode ;
						result.outArgs = [JSON.stringify(resultData)];
						return result;
					}	
				}					
            }
            
            if ( (isVisualInspectionStation(stationNumber)) && (ERROR_CODE == -202) ){
                // ------------------------------------------------------------------------------------
                var objectUploadValues = [];

                objectUploadValues.push(0,serialNumber);
                var lock_info = "Inspected and validated in " + stationType + " !";
                var objectUploadKeys = new Array("ERROR_CODE","SERIAL_NUMBER");
                var result_lockUnlockObjects = imsApiService.lockUnlockObjects(imsApiSessionContext, 
                    stationNumber, 
                    0,
                    stationType,
                    lock_info,
                    0,
                    -1,
                    0,
                    objectUploadKeys,
                    objectUploadValues);

                return_value = result_lockUnlockObjects.return_value;  
                // ------------------------------------------------------------------------------------
            }

        }
        if(stationNumber.slice(0,stationNumber.length-2) != "100040"){
            //Kaizen consumption

            if( WP=="WP3"){
                var kaizenStation = getKaizenStation(line);
                // <attribGetAttributeValues> ---------------------------------------------
                var attributeCodeArray = new Array("DC_TROLLEY_MAP","DC_PART_MAP");
                var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                    kaizenStation, 
                    7,
                    kaizenStation,
                    "-1",
                    attributeCodeArray,
                    1,
                    attributeResultKeys);

                var return_value = result_attribGetAttributeValues.return_value;

                if (return_value != 0 ) {

                    errorCode = return_value;
                    errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }

                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_DC_TROLLEY_MAP = ""+result_attribGetAttributeValues.attributeResultValues[4];
                var TEMP_DC_PART_MAP = ""+result_attribGetAttributeValues.attributeResultValues[1];
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                TEMP_OBJECT = getTrolleyId("SC-"+TEMP_PART_NUMBER, TEMP_DC_PART_MAP, TEMP_DC_TROLLEY_MAP);
                TEMP_ERROR = TEMP_OBJECT.errorCode;

                if(TEMP_ERROR != 0){
        
                    errorCode = -10335;
                    errorMessage = "[Error in getTrolleyId] "+ TEMP_OBJECT.message;
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                    };
                    
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }
                var TEMP_TROLLEY_ID = TEMP_OBJECT.trolleyId;

                // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
                var serialNumberResultKeys = new Array("PART_NUMBER", "SERIAL_NUMBER");
                var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                    kaizenStation, 
                    TEMP_TROLLEY_ID,
                    serialNumberResultKeys);

                var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

                if (return_value != 0) {

                    errorCode = return_value;
                    errorMessage = "[shipGetSerialNumberDataForShippingLot] " + getImsApiErrorText(return_value);

                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }  
                var TEMP_BATCH_AR = [];
                var TEMP_PART_NB_AR =[];

                for (var y=0; y< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/2; y++){

                    TEMP_PART_NB_AR.push( ""+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[y*2+0]);
                    TEMP_BATCH_AR.push( ""+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[y*2+1]);

                }    
                for (var y=0; y< TEMP_PART_NB_AR.length; y++){
                    logHandler.logMessage("bbbbbbb"+"  SC-" + TEMP_PART_NUMBER+" +++++++++++ "+TEMP_PART_NB_AR[y]);
                    if(("SC-" + TEMP_PART_NUMBER)==TEMP_PART_NB_AR[y]){

                        // <attribGetAttributeValues> ---------------------------------------------------------
                        var attributeCodeArray = new Array("PASS_QTY");
                        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                            kaizenStation, 
                            2,
                            TEMP_BATCH_AR[y],
                            "-1",
                            attributeCodeArray,
                            1,
                            attributeResultKeys);

                        var return_value = result_attribGetAttributeValues.return_value;

                        if (return_value != 0) {

                            errorCode = return_value;
                            errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                            var resultData = {

                                    errorCode : errorCode,
                                    errorMessage : "" + errorMessage
                                };
                            result.return_value = errorCode ;
                            result.outArgs = [JSON.stringify(resultData)];
                            return result;
                        } 

                        var TEMP_PASS_QTY = "" + result_attribGetAttributeValues.attributeResultValues[1];
                        TEMP_PASS_QTY = "" + (parseInt(TEMP_PASS_QTY) - 1 );

                        // <attribAppendAttributeValues> ------------------------------------------------------
                        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                        var attributeUploadValues = new Array("PASS_QTY", TEMP_PASS_QTY, "0");
                        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                            kaizenStation, 
                            2,
                            TEMP_BATCH_AR[y],
                            "-1",
                            -1,
                            1,
                            attributeUploadKeys,
                            attributeUploadValues);

                        var return_value = result_attribAppendAttributeValues.return_value;

                        if (return_value != 0) { 

                            errorCode = return_value;
                            errorMessage = "[attribAppendAttributeValues] "+ getImsApiErrorText(return_value);

                            var resultData = {
                                    errorCode : errorCode,
                                    errorMessage : "" + errorMessage
                                };
                            result.return_value = errorCode ;
                            result.outArgs = [JSON.stringify(resultData)];
                            return result;
                        }
                    }
                }

                //<trUploadState>----------------------------------------------------------------
                var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
                var serialNumberUploadValues = new Array();
                var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                    kaizenStation,
                    2, 
                    serialNumber,
                    "-1",
                    0,
                    0,
                    "-1",
                    0,
                    serialNumberUploadKeys,
                    serialNumberUploadValues);
                    
                var return_value = result_trUploadState.return_value;

                if (return_value != 0) { 

                    errorCode = return_value;
                    errorMessage = "[trUploadState] "+ getImsApiErrorText(return_value);
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }
            }
        }
//        // <trActivateWorkOrder> -----------------------------------------------
//        var result_trActivateWorkOrder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
//           stationNumber,
//           "-1",
//           serialNumber,
//           "-1",
//           2,
//           1);
//           
//        return_value = result_trActivateWorkOrder.return_value;
//        
//        if (return_value != 0) {
//            errorCode = return_value;
//            errorMessage = getImsApiErrorText(return_value);
//            var resultData = {
//                    errorCode : errorCode,
//                    errorMessage : "[trActivateWorkOrder] " + errorMessage
//                };
//            result.outArgs = [JSON.stringify(resultData)];
//            result.return_value = return_value;
//            return result;
//        }   


        // <trGetStationSetting> -----------------------------------------------
        var stationSettingResultKeys = new Array("BOM_VERSION", "PART_DESC", "PART_NUMBER", "PROCESS_VERSION", "QUANTITY", "WORKORDER_NUMBER");
        var result_trGetStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext, 
                stationNumber, 
                stationSettingResultKeys
            );

        var return_value = result_trGetStationSetting.return_value;
        
        if (return_value != 0) {
            
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[trGetStationSetting] " + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BV = result_trGetStationSetting.stationSettingResultValues[0];
        var TEMP_PN_DESC = result_trGetStationSetting.stationSettingResultValues[1];
        var TEMP_PN = result_trGetStationSetting.stationSettingResultValues[2];
        var TEMP_PV = result_trGetStationSetting.stationSettingResultValues[3];
        var TEMP_WO_QTY = result_trGetStationSetting.stationSettingResultValues[4];
        var TEMP_WO = result_trGetStationSetting.stationSettingResultValues[5];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        printTitle("trGetStationSetting","result");
        printTxtValue("TEMP_BV", TEMP_BV);
        printTxtValue("TEMP_PN_DESC", TEMP_PN_DESC);
        printTxtValue("TEMP_PN", TEMP_PN);
        printTxtValue("TEMP_PV", TEMP_PV);
        printTxtValue("TEMP_WO_QTY", TEMP_WO_QTY);
        printTxtValue("TEMP_WO", TEMP_WO);
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_ID_AR = [];//list of all ids generated
        var TEMP_NAME_AR = [];// list of all documents mda Names generated
        var TEMP_EXTENSION_AR = [];// list of all documents extensions generated
        var TEMP_ID = "";
        var TEMP_MDA_NAME = "";
        var TEMP_NAME = "";
        var TEMP_EXT = "";
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // < mdaGetDocuments> -------------------------------------------------
        var attributeFilters = new Array(new KeyValue("PART_NUMBER", TEMP_PN));               
        var dataTypeFilters = new Array(new KeyValue("MDA_ACTIVE", 1), new KeyValue("MDA_DATA_TYPE", 3));
        var mdaResultKeys = new Array("MDA_DOCUMENT_ID", "MDA_FILE_NAME", "MDA_NAME");

        var result_mdaGetDocuments = imsApiService.mdaGetDocuments(imsApiSessionContext, 
                stationNumber, 
                attributeFilters,
                dataTypeFilters,
                mdaResultKeys
            );

        return_value = result_mdaGetDocuments.return_value;

        if (return_value!=0){

            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);

            var resultData = {
                errorCode : "" + errorCode,
                errorMessage : "[mdaGetDocuments] " + errorMessage
            };

        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
        return result;
        }

        /* collecting all ids, extensions and documents names*/
        for (var x=0; x< result_mdaGetDocuments.mdaResultValues.length/3; x++) {
            TEMP_ID_AR.push("" + result_mdaGetDocuments.mdaResultValues[x*3+0]);
            TEMP_NAME_AR.push("" + result_mdaGetDocuments.mdaResultValues[x*3+2]);
            TEMP_NAME  = "" + result_mdaGetDocuments.mdaResultValues[x*3+1];
            TEMP_EXT  = TEMP_NAME.substr(TEMP_NAME.lastIndexOf('.') + 1); 
            TEMP_EXTENSION_AR.push(TEMP_EXT);    
        }
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        printTitle("mdaGetDocuments","result");
        for (var x=0; x< TEMP_ID_AR.length; x++) {
            printTxtValue("TEMP_ID_AR[" + x + "]", TEMP_ID_AR[x]);
            printTxtValue("TEMP_NAME_AR[" + x + "]", TEMP_NAME_AR[x]);
            printTxtValue("TEMP_EXTENSION_AR[" + x + "]", TEMP_EXTENSION_AR[x]);  
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        

        // < trGetSerialNumberUploadInfo> -----------------------------------------------
        var serialNumberResultKeys = new Array("PART_NUMBER","PROCESS_LAYER");
        var result_trGetSerialNumberUploadInfo = imsApiService.trGetSerialNumberUploadInfo(imsApiSessionContext, 
                stationNumber,
                "-1", 
                serialNumber,
                "-1",
                0,
                serialNumberResultKeys
            );

        var return_value = result_trGetSerialNumberUploadInfo.return_value;
        
        if (return_value != 0) {
            
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[trGetSerialNumberUploadInfo] " + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_PART_NUMBER = result_trGetSerialNumberUploadInfo.uploadInfoResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        printTxtValue("TEMP_PART_NUMBER", TEMP_PART_NUMBER);
        

//        if(TEMP_PART_NUMBER != TEMP_PN){
//
//            errorCode = "1111";
//            errorMessage = "Part numbers do not match.";
//            
//            var resultData = {
//                    errorCode : errorCode,
//                    errorMessage : "" + errorMessage
//                };
//                
//            result.outArgs = [JSON.stringify(resultData)];
//            result.return_value = return_value;
//            return result;
//
//        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP2_GRID_X_AR = [];
        var TEMP2_GRID_Y_AR = [];
        var TEMP2_IMAGE_NAME_AR = [];
        var TEMP2_MDA_DOCUMENT_ID_AR = [];
        var TEMP_CONTENT_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <mdataGetFailureData> -----------------------------------------------
        var mdataGetFailureDataForPartFilter = new Array(new KeyValue("MAX_ROWS",100), new KeyValue("PART_NUMBER", TEMP_PART_NUMBER));
        var failureDataKeys = new Array();
        var imageDataKeys = new Array("GRID_X","GRID_Y","IMAGE_NAME","MDA_DOCUMENT_ID","PART_NUMBER");
        
        var result_mdataGetFailureDataForPart = imsApiService.mdataGetFailureDataForPart(imsApiSessionContext, 
                stationNumber, 
                mdataGetFailureDataForPartFilter,
                failureDataKeys,
                imageDataKeys
            );

        var return_value = result_mdataGetFailureDataForPart.return_value;
        
        if (return_value != 0) {
            
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[mdataGetFailureDataForPart] " + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        for(var i=0; i<result_mdataGetFailureDataForPart.imageDataValues.length/5; i++){

            TEMP2_GRID_X_AR.push(result_mdataGetFailureDataForPart.imageDataValues[i*5+0]);
            TEMP2_GRID_Y_AR.push(result_mdataGetFailureDataForPart.imageDataValues[i*5+1]);
            TEMP2_IMAGE_NAME_AR.push(result_mdataGetFailureDataForPart.imageDataValues[i*5+2]);
            TEMP2_MDA_DOCUMENT_ID_AR.push(result_mdataGetFailureDataForPart.imageDataValues[i*5+3]);
        }
        
        printTitle("mdataGetFailureDataForPart","result");
        for(var x=0; x<TEMP2_MDA_DOCUMENT_ID_AR.length; x++){
            printTxtValue("TEMP2_MDA_DOCUMENT_ID_AR[" + x + "]", TEMP2_MDA_DOCUMENT_ID_AR[x]);
            printTxtValue("TEMP2_IMAGE_NAME_AR[" + x + "]", TEMP2_IMAGE_NAME_AR[x]);
            printTxtValue("TEMP2_GRID_X_AR[" + x + "]", TEMP2_GRID_X_AR[x]);
            printTxtValue("TEMP2_GRID_Y_AR[" + x + "]", TEMP2_GRID_Y_AR[x]);
            
        }
        
      
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DOCUMENT_NAME_AR = [];
        var TEMP_DOCUMENT_ID_AR = [];
        var TEMP_DOCUMENT_EXT_AR = [];
        var TEMP_DOCUMENT_CONTENT_AR = [];
        
        var TEMP_GRID_X_AR = [];
        var TEMP_GRID_Y_AR = [];
        var TEMP_IMAGE_NAME_AR = [];
        
        var gridImages = [];
        var documents = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        for (var x=0; x <TEMP_ID_AR.length; x++) { 
           
            // < mdaGetDocumentContent> to get content of each doc--------------
            var result_mdaGetDocumentContent = imsApiService.mdaGetDocumentContent(imsApiSessionContext, 
                stationNumber, 
                TEMP_ID_AR[x]);
                                                                                  
            var return_value = result_mdaGetDocumentContent.return_value;    
           
            if (return_value!=0){
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
           
           
                var resultData = {
                   errorCode : "" + errorCode,
                   errorMessage : "[mdaGetDocumentContent] ["+x+"] " + errorMessage
                };
                
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
               
            }  
            
            //Building the list of contents
            var TEMP_CONTENT = "";
            var content = result_mdaGetDocumentContent.content;
            
            //------------------------------------------------------------------
            var StrContent="";
            
            for (var y=0;y<content.length;y++){
                var i=parseInt(content[y]);
                if (i<0) {i+=256;}
                StrContent += String.fromCharCode(i);
            }
      
            var content_b64=base64Encode(StrContent);
            // -----------------------------------------------------------------
            
            TEMP_CONTENT = content_b64;
            TEMP_CONTENT_AR.push("" + TEMP_CONTENT);
        }
        
        for (var x=0; x <TEMP_ID_AR.length; x++) { 
            printLineX(80);
            printTxtValue("TEMP_CONTENT_AR[" + x + "]", TEMP_CONTENT_AR[x]);
            printLineX(80);
        }
        
        
        for (var x=0; x < TEMP_ID_AR.length; x++) { 
            for (var y=0; y < TEMP2_MDA_DOCUMENT_ID_AR.length; y++) { 
                if (TEMP_ID_AR[x].equals(TEMP2_MDA_DOCUMENT_ID_AR[y])){
                    TEMP_GRID_X_AR.push(""+TEMP2_GRID_X_AR[y]);
                    TEMP_GRID_Y_AR.push(""+TEMP2_GRID_Y_AR[y]);
                    TEMP_IMAGE_NAME_AR.push(""+TEMP2_IMAGE_NAME_AR[y]);
                }
                
            }
        }
        
        for (x=0; x < TEMP_ID_AR.length; x++) { 
            documents.push(
                {
                    id :  "" + TEMP_ID_AR[x],
                    name : "" + TEMP_NAME_AR[x],
                    documentExt : "" + TEMP_EXTENSION_AR[x],
                    documentContent: "" + TEMP_CONTENT_AR[x] 
                }
            );  
        }
        
        for(var x=0; x < TEMP_ID_AR.length; x++) { 
            //for(var y=0; y < TEMP_ID_AR.length; y++) {  
                gridImages.push(
                    {
                        gridImageName : "" + TEMP_IMAGE_NAME_AR[x],
                        gridX : "" + TEMP_GRID_X_AR[x],
                        gridY : "" + TEMP_GRID_Y_AR[x],
                        documents : documents[x]
                    }
                );        
            //}
        }
        var err = 0;
        var errMes = "";
        if ( ((stationNumber=="06012010") || (stationNumber=="06014010")) && (ERROR_CODE == -202) ){
            err = 50000;
            errMes = "Unit is unlocked";
        }

        // JSON result ---------------------------------------------------------
        var resultData = {
            log : log,
            serialNumber : "" + serialNumber,
            partNumber : "" + TEMP_PN,
            partDescription : "" + TEMP_PN_DESC,
            workOrder : "" + TEMP_WO,
            workOrderQty: "" + TEMP_WO_QTY,
            batchQty : "" + 1,
            gridImages : gridImages,
            errorCode : err,
            errorMessage : errMes
        };

        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfViRegisterSerialNumber failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfViGetFailureCodes(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";
        
        // API integration -----------------------------------------------------
        
        // < mdataGetFailureDataForStation> ------------------------------------
        var failureDataResultKeys = new Array("FAILURE_TYPE_CODE","FAILURE_TYPE_DESC","FAILURE_TYPE_GROUP_CODE","FAILURE_TYPE_GROUP_DESC");
        
        var result_mdataGetFailureDataForStation = imsApiService.mdataGetFailureDataForStation(imsApiSessionContext, 
            stationNumber, 
            0,
            failureDataResultKeys);

        var return_value = result_mdataGetFailureDataForStation.return_value;
        
        if (return_value != 0) {
            
            errorcode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorcode : errorcode,
                    errorMessage : "" + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // Preparing the output data
        var failureTypeData = new Array();
        
        for (x=0; x< result_mdataGetFailureDataForStation.failureDataResultValues.length/4; x++){
            failureTypeData.push(
                    {    
                        FailureTypeCode : "" + result_mdataGetFailureDataForStation.failureDataResultValues[x*4+0],
                        FailureTypeDescription : "" + result_mdataGetFailureDataForStation.failureDataResultValues[x*4+1],
                        FailureTypeGroupCode: "" + result_mdataGetFailureDataForStation.failureDataResultValues[x*4+2],
                        FailureTypeGroupDesc : "" + result_mdataGetFailureDataForStation.failureDataResultValues[x*4+3]
                    }

            );
        }
        
        // JSON result ---------------------------------------------------------
        var resultData = {
            
            failureTypeData : failureTypeData

        };

        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfViGetFailureCodes failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfViRegisterBatchByCavityPos(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var cavityPos = data.cavityPos ;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        var TEMP_BATCH_ID = "";
        var TEMP_PASS_QTY = 0;
        
        // API integration -----------------------------------------------------
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_BATCH_ID = "SCBSCMOB001L-107150222";
        TEMP_BATCH_ID = "";
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                
        // #####################################################################
        // #####################################################################
        // < equGetSetupEquipmentData> -----------------------------------------
        
        var equipmentSetupFilters = new Array(new KeyValue("EQUIPMENT_TYPE","E"));
        var equipmentSetupResultKeys = new Array("EQUIPMENT_INDEX","EQUIPMENT_NUMBER","SETUP_POSITION","EQUIPMENT_NUMBER_EXT");
        
        var result_equGetSetupEquipmentData = imsApiService.equGetSetupEquipmentData(imsApiSessionContext, 
                stationNumber, 
                equipmentSetupFilters,
                equipmentSetupResultKeys
            );

        var return_value = result_equGetSetupEquipmentData.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[equGetSetupEquipmentData] " + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        var TEMP_EQ_INDEX_AR = [];
        var TEMP_EQ_NUMBER_AR = [];
        var TEMP_EQ_POSITION_AR = [];
        var TEMP_EQ_PN_AR = [];
        var TEMP_EQ_LINKED_PRODUCT_AR = [];
        var cavities = [];
        var linkedproduct = [];
		
        var TEMP_EQ_NUMBER = "";
        var TEMP_EQ_PN = "";
        var TEMP_EQ_LINKED_PRODUCT = "";
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        for (var x=0;x<result_equGetSetupEquipmentData.equipmentSetupResultValues.length/4;x++){
            
            TEMP_EQ_INDEX_AR.push(result_equGetSetupEquipmentData.equipmentSetupResultValues[x*4+0]);
            TEMP_EQ_NUMBER_AR.push(result_equGetSetupEquipmentData.equipmentSetupResultValues[x*4+1]);
            var cav = result_equGetSetupEquipmentData.equipmentSetupResultValues[x*4+3].replace("SCAV-","").replace("-"," ");
            TEMP_EQ_POSITION_AR.push(""+cav);
            cavities.push(TEMP_EQ_POSITION_AR[x]);
        } 
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // Get equipment number based on the provided cavity number
        // cavityPosition --> TEMP_EQ_NUMBER
        for (var x=0;x<cavities.length;x++){
            if (cavities[x].equals(cavityPos)) {
                    TEMP_EQ_NUMBER = TEMP_EQ_NUMBER_AR[x];
            }	
        }
        // Get TEMP_EQ_PN based on TEMP_EQ_NUMBER
        // TEMP_EQ_NUMBER --> TEMP_EQ_PN

        // <equGetEquipment> --------------------------------------------------
        var equipmentGetFilters = new Array(new KeyValue("EQUIPMENT_NUMBER", TEMP_EQ_NUMBER));
        var equipmentGetResultKeys = new Array("ERROR_CODE","PART_NUMBER");
            
        var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
                stationNumber, 
                equipmentGetFilters,
                equipmentGetResultKeys
                );
        
        var return_value = result_equGetEquipment.return_value;
        
        if (return_value != 0) {
			errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);

            var resultData = {
                errorCode : errorCode,
                errorMessage : "[equGetEquipment] " + errorMessage
            };

            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
            
        TEMP_EQ_PN = ""+result_equGetEquipment.equipmentGetResultValues[1];
        //---------------------------------------------------------------------
        

        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE"); 
        var attributeCodeArray = new Array("LINKED_PRODUCT");
       
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber,
                10,
                TEMP_EQ_PN,     // Cavity Number from the position
                "-1",
                attributeCodeArray,
                0,
                attributeResultKeys);
            
        var return_value = result_attribGetAttributeValues.return_value;
            
        if ((return_value != 0) && (return_value != -121)) {
//                errorCode = return_value;
//                errorMessage = getImsApiErrorText(return_value);
//
//                var resultData = {
//                        errorCode : errorCode,
//                        errorMessage : "[attribGetAttributeValues] ["+x+"] " + errorMessage
//                    };
//
//                result.outArgs = [JSON.stringify(resultData)];
//                result.return_value = return_value;
//                return result;
        }
        if ((return_value == -121)) {
            TEMP_EQ_LINKED_PRODUCT = "";
        }
        else{
            TEMP_EQ_LINKED_PRODUCT = ""+result_attribGetAttributeValues.attributeResultValues[1];
        }
            
   
        
        
        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("SC_TROLLEY_MAP","SC_PART_MAP");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            7,
            stationNumber,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0 ) {

            errorCode = return_value;
            errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SC_TROLLEY_MAP = ""+result_attribGetAttributeValues.attributeResultValues[4];
        var TEMP_SC_PART_MAP = ""+result_attribGetAttributeValues.attributeResultValues[1];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        var batchId = [];
        
            
        logHandler.logMessage(">>>> TEMP_SC_TROLLEY_MAP = " + TEMP_SC_TROLLEY_MAP);
        logHandler.logMessage(">>>> TEMP_SC_PART_MAP = " + TEMP_SC_PART_MAP);
        logHandler.logMessage(">>>> TEMP_EQ_LINKED_PRODUCT = " + TEMP_EQ_LINKED_PRODUCT);

        var TEMP_TROLLEY_ID = getTrolleyId(TEMP_EQ_LINKED_PRODUCT, TEMP_SC_PART_MAP, TEMP_SC_TROLLEY_MAP).trolleyId;

        logHandler.logMessage(">>>> TEMP_TROLLEY_ID = " + TEMP_TROLLEY_ID);

        // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
        var serialNumberResultKeys = new Array("PART_NUMBER", "SERIAL_NUMBER");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
            stationNumber, 
            TEMP_TROLLEY_ID,
            serialNumberResultKeys);

        var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;
        
        if (return_value != 0) {

            errorCode = return_value;
            errorMessage = "[shipGetSerialNumberDataForShippingLot] " + getImsApiErrorText(return_value);

            var resultData = {
                    log : TEMP_TROLLEY_ID,
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }   
            
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_ID = "";
        var TEMP_PART_NUMBER = "";
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        for (var y=0; y< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/2; y++){

            TEMP_PART_NUMBER = ""+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[y*2+0];

            if (TEMP_PART_NUMBER == TEMP_EQ_LINKED_PRODUCT){
                TEMP_BATCH_ID = ""+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[y*2+1];
            }
        }    
        //batchId.push(TEMP_BATCH_ID);
        
        
        // #####################################################################
	// #####################################################################

        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        
      
        // <trActivateWorkOrder> -----------------------------------------------
        var result_trActivateWorkOrder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
           stationNumber,
           "-1",
           TEMP_BATCH_ID,
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
        
        // <trGetStationSetting> -----------------------------------------------
        var stationSettingResultKeys = new Array("BOM_VERSION", "PART_DESC", "PART_NUMBER", "PROCESS_VERSION", "QUANTITY", "WORKORDER_NUMBER");
        var result_trGetStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext, 
                stationNumber, 
                stationSettingResultKeys
            );

        var return_value = result_trGetStationSetting.return_value;
        
        if (return_value != 0) {
            
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[trGetStationSetting] " + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BV = result_trGetStationSetting.stationSettingResultValues[0];
        var TEMP_PN_DESC = result_trGetStationSetting.stationSettingResultValues[1];
        var TEMP_PN = result_trGetStationSetting.stationSettingResultValues[2];
        var TEMP_PV = result_trGetStationSetting.stationSettingResultValues[3];
        var TEMP_WO_QTY = result_trGetStationSetting.stationSettingResultValues[4];
        var TEMP_WO = result_trGetStationSetting.stationSettingResultValues[5];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        printTitle("trGetStationSetting","result");
        printTxtValue("TEMP_BV", TEMP_BV);
        printTxtValue("TEMP_PN_DESC", TEMP_PN_DESC);
        printTxtValue("TEMP_PN", TEMP_PN);
        printTxtValue("TEMP_PV", TEMP_PV);
        printTxtValue("TEMP_WO_QTY", TEMP_WO_QTY);
        printTxtValue("TEMP_WO", TEMP_WO);
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_ID_AR = [];//list of all ids generated
        var TEMP_NAME_AR = [];// list of all documents mda Names generated
        var TEMP_EXTENSION_AR = [];// list of all documents extensions generated
        var TEMP_ID = "";
        var TEMP_MDA_NAME = "";
        var TEMP_NAME = "";
        var TEMP_EXT = "";
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // < mdaGetDocuments> -------------------------------------------------
        var attributeFilters = new Array(new KeyValue("PART_NUMBER", TEMP_PN));               
        var dataTypeFilters = new Array(new KeyValue("MDA_ACTIVE", 1), new KeyValue("MDA_DATA_TYPE", 3));
        var mdaResultKeys = new Array("MDA_DOCUMENT_ID", "MDA_FILE_NAME", "MDA_NAME");

        var result_mdaGetDocuments = imsApiService.mdaGetDocuments(imsApiSessionContext, 
                stationNumber, 
                attributeFilters,
                dataTypeFilters,
                mdaResultKeys
            );

        return_value = result_mdaGetDocuments.return_value;

        if (return_value!=0){

            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);

            var resultData = {
                errorCode : "" + errorCode,
                errorMessage : "" + errorMessage
            };

        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
        return result;
        }

        /* collecting all ids, extensions and documents names*/
        for (var x=0; x< result_mdaGetDocuments.mdaResultValues.length/3; x++) {
            TEMP_ID_AR.push("" + result_mdaGetDocuments.mdaResultValues[x*3+0]);
            TEMP_NAME_AR.push("" + result_mdaGetDocuments.mdaResultValues[x*3+2]);
            TEMP_NAME  = "" + result_mdaGetDocuments.mdaResultValues[x*3+1];
            TEMP_EXT  = TEMP_NAME.substr(TEMP_NAME.lastIndexOf('.') + 1); 
            TEMP_EXTENSION_AR.push(TEMP_EXT);    
        }
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        printTitle("mdaGetDocuments","result");
        for (var x=0; x< TEMP_ID_AR.length; x++) {
            printTxtValue("TEMP_ID_AR[" + x + "]", TEMP_ID_AR[x]);
            printTxtValue("TEMP_NAME_AR[" + x + "]", TEMP_NAME_AR[x]);
            printTxtValue("TEMP_EXTENSION_AR[" + x + "]", TEMP_EXTENSION_AR[x]);  
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        

        // < trGetSerialNumberUploadInfo> -----------------------------------------------
        var serialNumberResultKeys = new Array("PART_NUMBER","PROCESS_LAYER");
        var result_trGetSerialNumberUploadInfo = imsApiService.trGetSerialNumberUploadInfo(imsApiSessionContext, 
                stationNumber,
                "-1", 
                TEMP_BATCH_ID,
                "-1",
                0,
                serialNumberResultKeys
            );

        var return_value = result_trGetSerialNumberUploadInfo.return_value;
        
        if (return_value != 0) {
            
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_PART_NUMBER = result_trGetSerialNumberUploadInfo.uploadInfoResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        printTxtValue("TEMP_PART_NUMBER", TEMP_PART_NUMBER);
        

        if(TEMP_PART_NUMBER != TEMP_PN){

            errorCode = "1111";
            errorMessage = "Part numbers do not match.";
            
            var resultData = {
                    errorcode : errorcode,
                    errorMessage : "" + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;

        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP2_GRID_X_AR = [];
        var TEMP2_GRID_Y_AR = [];
        var TEMP2_IMAGE_NAME_AR = [];
        var TEMP2_MDA_DOCUMENT_ID_AR = [];
        var TEMP_CONTENT_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <mdataGetFailureData> -----------------------------------------------
        var mdataGetFailureDataForPartFilter = new Array(new KeyValue("MAX_ROWS",100), new KeyValue("PART_NUMBER", TEMP_PART_NUMBER));
        var failureDataKeys = new Array();
        var imageDataKeys = new Array("GRID_X","GRID_Y","IMAGE_NAME","MDA_DOCUMENT_ID","PART_NUMBER");
        
        var result_mdataGetFailureDataForPart = imsApiService.mdataGetFailureDataForPart(imsApiSessionContext, 
                stationNumber, 
                mdataGetFailureDataForPartFilter,
                failureDataKeys,
                imageDataKeys
            );

        var return_value = result_mdataGetFailureDataForPart.return_value;
        
        if (return_value != 0) {
            
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }

        for(var i=0; i<result_mdataGetFailureDataForPart.imageDataValues.length/5; i++){

            TEMP2_GRID_X_AR.push(result_mdataGetFailureDataForPart.imageDataValues[i*5+0]);
            TEMP2_GRID_Y_AR.push(result_mdataGetFailureDataForPart.imageDataValues[i*5+1]);
            TEMP2_IMAGE_NAME_AR.push(result_mdataGetFailureDataForPart.imageDataValues[i*5+2]);
            TEMP2_MDA_DOCUMENT_ID_AR.push(result_mdataGetFailureDataForPart.imageDataValues[i*5+3]);
        }
        
        printTitle("mdataGetFailureDataForPart","result");
        for(var x=0; x<TEMP2_MDA_DOCUMENT_ID_AR.length; x++){
            printTxtValue("TEMP2_MDA_DOCUMENT_ID_AR[" + x + "]", TEMP2_MDA_DOCUMENT_ID_AR[x]);
            printTxtValue("TEMP2_IMAGE_NAME_AR[" + x + "]", TEMP2_IMAGE_NAME_AR[x]);
            printTxtValue("TEMP2_GRID_X_AR[" + x + "]", TEMP2_GRID_X_AR[x]);
            printTxtValue("TEMP2_GRID_Y_AR[" + x + "]", TEMP2_GRID_Y_AR[x]);
            
        }
        
      
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DOCUMENT_NAME_AR = [];
        var TEMP_DOCUMENT_ID_AR = [];
        var TEMP_DOCUMENT_EXT_AR = [];
        var TEMP_DOCUMENT_CONTENT_AR = [];
        
        var TEMP_GRID_X_AR = [];
        var TEMP_GRID_Y_AR = [];
        var TEMP_IMAGE_NAME_AR = [];
        
        var gridImages = [];
        var documents = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        for (var x=0; x <TEMP_ID_AR.length; x++) { 
           
            // < mdaGetDocumentContent> to get content of each doc--------------
            var result_mdaGetDocumentContent = imsApiService.mdaGetDocumentContent(imsApiSessionContext, 
                stationNumber, 
                TEMP_ID_AR[x]);
                                                                                  
            var return_value = result_mdaGetDocumentContent.return_value;    
           
            if (return_value!=0){
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
           
           
                var resultData = {
                   errorCode : "" + errorCode,
                   errorMessage : "" + errorMessage
                };
                
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
               
            }  
            
            //Building the list of contents
            var TEMP_CONTENT = "";
            var content = result_mdaGetDocumentContent.content;
            
            //------------------------------------------------------------------
            var StrContent="";
            
            for (var y=0;y<content.length;y++){
                var i=parseInt(content[y]);
                if (i<0) {i+=256;}
                StrContent += String.fromCharCode(i);
            }
      
            var content_b64=base64Encode(StrContent);
            // -----------------------------------------------------------------
            
            TEMP_CONTENT = content_b64;
            TEMP_CONTENT_AR.push("" + TEMP_CONTENT);
        }
        
        for (var x=0; x <TEMP_ID_AR.length; x++) { 
            printLineX(80);
            printTxtValue("TEMP_CONTENT_AR[" + x + "]", TEMP_CONTENT_AR[x]);
            printLineX(80);
        }
        
        
        for (var x=0; x < TEMP_ID_AR.length; x++) { 
            for (var y=0; y < TEMP2_MDA_DOCUMENT_ID_AR.length; y++) { 
                if (TEMP_ID_AR[x].equals(TEMP2_MDA_DOCUMENT_ID_AR[y])){
                    TEMP_GRID_X_AR.push(""+TEMP2_GRID_X_AR[y]);
                    TEMP_GRID_Y_AR.push(""+TEMP2_GRID_Y_AR[y]);
                    TEMP_IMAGE_NAME_AR.push(""+TEMP2_IMAGE_NAME_AR[y]);
                }
                
            }
        }
        
        for (x=0; x < TEMP_ID_AR.length; x++) { 
            documents.push(
                {
                    id :  "" + TEMP_ID_AR[x],
                    name : "" + TEMP_NAME_AR[x],
                    documentExt : "" + TEMP_EXTENSION_AR[x],
                    documentContent: "" + TEMP_CONTENT_AR[x] 
                }
            );  
        }

        for(var x=0; x < TEMP_ID_AR.length; x++) { 
            //for(var y=0; y < TEMP_ID_AR.length; y++) {  
                gridImages.push(
                    {
                        gridImageName : "" + TEMP_IMAGE_NAME_AR[x],
                        gridX : "" + TEMP_GRID_X_AR[x],
                        gridY : "" + TEMP_GRID_Y_AR[x],
                        documents : documents[x]
                    }
                );        
            //}
        }
        

        // JSON result ---------------------------------------------------------
        var resultData = {

            serialNumber : "" + TEMP_BATCH_ID,
            partNumber : "" + TEMP_PN,
            partDescription : "" + TEMP_PN_DESC,
            workOrder : "" + TEMP_WO,
            workOrderQty: "" + TEMP_WO_QTY,
            batchQty : "" + TEMP_PASS_QTY,
            gridImages : gridImages,
            errorcode : 0,
            errorMessage : ""
        };

        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfViRegisterBatchbyCavityPos failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfViGetUsedCavitiesOld(jsonData) {
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
        
        
        // API integration -----------------------------------------------------
        
        var TEMP_SC_PART_MAP = "POS1:SCMOB002R,SCMOB002L|POS2:SCMOB001R,SCMOB001L|POS3:|POS4:";
        var TEMP_SC_TROLLEY_MAP = "POS1:BEL005|POS2:BEL001|POS3:|POS4:";
        var TEMP_TROLLEY_ID = getTrolleyId("SCMOB002R", TEMP_SC_PART_MAP, TEMP_SC_TROLLEY_MAP);
           
        errorMessage = ">> " + TEMP_TROLLEY_ID.trolleyId;
        // JSON result ---------------------------------------------------------        
        var resultData = {
                cavities : ['Cavity I','Cavity II','Cavity III','Cavity IV','Cavity V','Cavity VI'],
                productPartNumber : ['SCMOB001L','SCMOB001L','SCMOB001L','SCMOB001R','SCMOB001R','SCMOB001R'],
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }    
    catch (e) {
        logHandler.logMessage("Custom function cfViGetUsedCavities failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfViGetUsedCavities(jsonData) {
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
        var batchId = [];
        var TEMP_CAVITY_MAP = "";
        
        // API integration -----------------------------------------------------
        
        // < equGetSetupEquipmentData> -----------------------------------------
        var equipmentSetupFilters = new Array(new KeyValue("EQUIPMENT_TYPE","E"));
        var equipmentSetupResultKeys = new Array("EQUIPMENT_INDEX","EQUIPMENT_NUMBER","SETUP_POSITION","EQUIPMENT_NUMBER_EXT");
        
        var result_equGetSetupEquipmentData = imsApiService.equGetSetupEquipmentData(imsApiSessionContext, 
                stationNumber, 
                equipmentSetupFilters,
                equipmentSetupResultKeys
            );

        var return_value = result_equGetSetupEquipmentData.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[equGetSetupEquipmentData] " + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        var TEMP_EQ_INDEX_AR = [];
        var TEMP_EQ_NUMBER_AR = [];
        var TEMP_EQ_POSITION_AR = [];
        var TEMP_EQ_NUMBER_EXT_AR = [];
        var TEMP_EQ_PN_AR = [];
        var TEMP_EQ_LINKED_PRODUCT_AR = [];
        var cavities = [];
        var linkedproduct = [];

        
          
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        for (var x=0;x<result_equGetSetupEquipmentData.equipmentSetupResultValues.length/4;x++){
            var quip_id = ""+result_equGetSetupEquipmentData.equipmentSetupResultValues[x*4+1];
            
            var pref = quip_id.substr(0,6);
            
            if ((pref=="SC-CAV") || (pref=="CR-CAV")) {
                TEMP_EQ_INDEX_AR.push(result_equGetSetupEquipmentData.equipmentSetupResultValues[x*4+0]);
                TEMP_EQ_NUMBER_AR.push(quip_id);
                TEMP_EQ_NUMBER_EXT_AR.push(result_equGetSetupEquipmentData.equipmentSetupResultValues[x*4+3]);

//                var cav = TEMP_EQ_NUMBER_EXT_AR[x].replace("SCAV-","").replace("-"," ");
//                TEMP_EQ_POSITION_AR.push(""+cav);
//                cavities.push(TEMP_EQ_POSITION_AR[x]);
            }
        } 
        for (var x=0;x<TEMP_EQ_NUMBER_EXT_AR.length;x++){
            var cav = TEMP_EQ_NUMBER_EXT_AR[x].replace("SCAV-","").replace("-"," ");
            TEMP_EQ_POSITION_AR.push(""+cav);
            cavities.push(TEMP_EQ_POSITION_AR[x]);
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var res = SortArrays(cavities,TEMP_EQ_NUMBER_AR,TEMP_EQ_POSITION_AR,TEMP_EQ_NUMBER_EXT_AR);
        cavities = res.ar1;
        TEMP_EQ_NUMBER_AR = res.ar2;
        TEMP_EQ_POSITION_AR = res.ar3;
        TEMP_EQ_NUMBER_EXT_AR = res.ar4;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
       
        for (var x=0;x<TEMP_EQ_NUMBER_AR.length;x++){
            var equipmentGetFilters = new Array(new KeyValue("EQUIPMENT_NUMBER", TEMP_EQ_NUMBER_AR[x]));
            var equipmentGetResultKeys = new Array("ERROR_CODE","PART_NUMBER");
            
            var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
                stationNumber, 
                equipmentGetFilters,
                equipmentGetResultKeys
                );
        
            var return_value = result_equGetEquipment.return_value;
        
            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "[equGetEquipment] ["+x+"] " + errorMessage
                    };

                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }
            
            TEMP_EQ_PN_AR.push(""+result_equGetEquipment.equipmentGetResultValues[1]);
        }
        
      
        for(var x=0; x<TEMP_EQ_PN_AR.length; x++){
            printTxtValue("TEMP_EQ_PN_AR[" + x + "]", TEMP_EQ_PN_AR[x]);           
        }
        
        for (var x=0;x<TEMP_EQ_PN_AR.length;x++){
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE"); 
            var attributeCodeArray = new Array("LINKED_PRODUCT");
       
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber,
                10,
                TEMP_EQ_PN_AR[x],     // Cavity Number from the position
                "-1",
                attributeCodeArray,
                0,
                attributeResultKeys);
            
            var return_value = result_attribGetAttributeValues.return_value;
            
            if ((return_value != 0) && (return_value != -121)) {
//                errorCode = return_value;
//                errorMessage = getImsApiErrorText(return_value);
//
//                var resultData = {
//                        errorCode : errorCode,
//                        errorMessage : "[attribGetAttributeValues] ["+x+"] " + errorMessage
//                    };
//
//                result.outArgs = [JSON.stringify(resultData)];
//                result.return_value = return_value;
//                return result;
            }
            if ((return_value == -121)) {
                TEMP_EQ_LINKED_PRODUCT_AR.push("");
                linkedproduct.push("");
                batchId.push("");
            }
            else{
                var lp = ""+result_attribGetAttributeValues.attributeResultValues[1];
                TEMP_EQ_LINKED_PRODUCT_AR.push(lp);
                linkedproduct.push(lp);
                batchId.push("");
                printTxtValue("TEMP_EQ_LINKED_PRODUCT_AR[" + x + "]", lp);     
            }
            
        }
        
        for(var x=0; x<linkedproduct.length; x++){
            printTxtValue("%%% linkedproduct[" + x + "]", linkedproduct[x]);           
        }
        
        
        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("SC_TROLLEY_MAP","SC_PART_MAP");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            7,
            stationNumber,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys);

        var return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0 ) {

            errorCode = return_value;
            errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SC_TROLLEY_MAP = ""+result_attribGetAttributeValues.attributeResultValues[4];
        var TEMP_SC_PART_MAP = ""+result_attribGetAttributeValues.attributeResultValues[1];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        var batchId = [];
        for (var x=0;x<linkedproduct.length;x++){
            
            logHandler.logMessage(">>>> TEMP_SC_TROLLEY_MAP = " + TEMP_SC_TROLLEY_MAP);
            logHandler.logMessage(">>>> TEMP_SC_PART_MAP = " + TEMP_SC_PART_MAP);
            logHandler.logMessage(">>>> linkedproduct[" + x + "] = " + linkedproduct[x]);
            
            var TEMP_TROLLEY_ID = getTrolleyId(linkedproduct[x], TEMP_SC_PART_MAP, TEMP_SC_TROLLEY_MAP).trolleyId;
            
            logHandler.logMessage(">>>> TEMP_TROLLEY_ID = " + TEMP_TROLLEY_ID);
             
            if (!TEMP_TROLLEY_ID.equals("")) {
                // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
                var serialNumberResultKeys = new Array("PART_NUMBER", "SERIAL_NUMBER");
                var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                    stationNumber, 
                    TEMP_TROLLEY_ID,
                    serialNumberResultKeys);

                var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

                if (return_value != 0) {

                    errorCode = return_value;
                    errorMessage = "[shipGetSerialNumberDataForShippingLot] " + getImsApiErrorText(return_value);

                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }   

                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_BATCH_ID = "";
                var TEMP_PART_NUMBER = "";
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                for (var y=0; y< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/2; y++){

                    TEMP_PART_NUMBER = ""+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[y*2+0];

                    if (TEMP_PART_NUMBER == linkedproduct[x]){
                        TEMP_BATCH_ID = ""+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[y*2+1];
                    }
                }    
                batchId.push(TEMP_BATCH_ID);
            }

            TEMP_CAVITY_MAP = "";
            for (var xx=0;xx<cavities.length;xx++){
                TEMP_CAVITY_MAP = TEMP_CAVITY_MAP + "" + cavities[xx] + ":" + linkedproduct[xx] + ":" + batchId[xx];
                if (xx<cavities.length-1) TEMP_CAVITY_MAP = TEMP_CAVITY_MAP + "|";
            }

            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("CAVITY_MAP", TEMP_CAVITY_MAP, "0");
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
                errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }   
        }
        if (isScrapStation(stationNumber)){
            cavities.push("DUMMY");
            linkedproduct.push("DUMMY");
            batchId.push("DUMMY");
        }
        // JSON result ---------------------------------------------------------        
        var resultData = {
              
                cavities : cavities,
                productPartNumber : linkedproduct,
                batchId : batchId,
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
        
       
    }    
    catch (e) {
        logHandler.logMessage("Custom function cfViGetUsedCavities failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfViGetAvailableCavities(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var serialNumber = data.serialNumber;
       

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var cavities = [];
        
        var cavity = "";
        
        cavity = {cavityId:"I",cavityDescription:"Cavity I",productNumber:"Product A"};
        cavities.push(cavity);
        cavity = {cavityId:"II",cavityDescription:"Cavity II",productNumber:"Product A"};
        cavities.push(cavity);
        cavity = {cavityId:"III",cavityDescription:"Cavity III",productNumber:"Product A"};
        cavities.push(cavity);
        
        // API integration -----------------------------------------------------
        
        
        
        // JSON result ---------------------------------------------------------        
        var resultData = {
                cavities : cavities,
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
        
       
    }    
    catch (e) {
        logHandler.logMessage("Custom function cfViGetUsedCavities failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function isScrapStation(station){
    result = false;
    if ((station=="04002051") || (station=="04002061")) result = true;
    return result;
}
function isDummy(val){
    result = false;
    if (val.toUpperCase()=="DUMMY" ) result = true;
    return result;
}

function cfViPackPart(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
                     
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var cavityPos = data.cavityPos;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        var serialNumber = "";
        var partNumber = "";
        var TEMP_PASS_QTY = "";
        var TEMP_SCRAP_QTY = "";
        var TEMP_CAVITY_MAP = "";
        var log = "";
        
        // API integration -----------------------------------------------------

        //Check if there is enough quantity after shooting
        if(stationNumber=="04002011"||stationNumber=="04002021"){
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("SC_CONSUMED_QUANTITY","SC_PRODUCED_QUANTITY","CAVITY_MAP");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
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

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {

                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_CAVITY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
            var TEMP_CAVITIES = TEMP_CAVITY_MAP.split("|");
            var TEMP_NUMBER_OF_CAVITIES = TEMP_CAVITIES.length;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_PRODUCED_QUANTITY = parseInt(result_attribGetAttributeValues.attributeResultValues[7]);
            var TEMP_CONSUMED_QUANTITY = parseInt(result_attribGetAttributeValues.attributeResultValues[4]);
            var TEMP_AVAILABLE_QUANTITY = parseInt(TEMP_PRODUCED_QUANTITY-TEMP_CONSUMED_QUANTITY);
            logHandler.logMessage("TEMP_PRODUCED_Q"+TEMP_PRODUCED_QUANTITY+"?????? TEMP_CONSUMED_QUANTITY"+TEMP_CONSUMED_QUANTITY);
            logHandler.logMessage("TEMP_NUMBER_OF_CAVITIES"+TEMP_NUMBER_OF_CAVITIES);
            logHandler.logMessage("TEMP_AVAILABLE_QUANTITY"+TEMP_AVAILABLE_QUANTITY);
            
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            if(TEMP_AVAILABLE_QUANTITY <= 0){
                errorCode = 99999;
                errorMessage = "[Shooting number is not changed yet] ";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage,
                        redButton : 1
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }

        // <attribGetAttributeValues>--------------------------------------------------------
        var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
        var result_mdataGetCalendarData = imsApiService.mdataGetCalendarData(imsApiSessionContext,
            stationNumber,
            calendarDataResultKeys);

        return_value = result_mdataGetCalendarData.return_value;

        if (return_value != 0) {

            errorCode = return_value;
            errorMessage = "[mdataGetCalendarData] " + getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        

        var timeStamp = parseInt(""+result_mdataGetCalendarData.calendarDataResultValues[0]);
        
        logHandler.logMessage("#### ########################################### ");
        logHandler.logMessage("#### ########################################### ")
        logHandler.logMessage("#### timeStamp = " + timeStamp);
        

        if (!isScrapStation(stationNumber) && (!isDummy(cavityPos))) {
            // Get serial Number for cavity
            // 
            
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("CAVITY_MAP");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
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

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {

                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 

            TEMP_CAVITY_MAP = ""+result_attribGetAttributeValues.attributeResultValues[1];
            
            
            logHandler.logMessage("#### TEMP_CAVITY_MAP = " + TEMP_CAVITY_MAP);
            
            var TEMP_CAVITY_AR = TEMP_CAVITY_MAP.split("|");       
            for (var x=0;x<TEMP_CAVITY_AR.length;x++){
                var cav = TEMP_CAVITY_AR[x].split(":")[0];
                var pnr = TEMP_CAVITY_AR[x].split(":")[1];
                var snr = TEMP_CAVITY_AR[x].split(":")[2];
                logHandler.logMessage("####     cav = " + cav);
                logHandler.logMessage("####     pnr = " + pnr);
                logHandler.logMessage("####     snr = " + snr);
                logHandler.logMessage("####     ----------------------------");
                if (cav==cavityPos) {
                    serialNumber = snr;
                    partNumber = pnr;
                }
            }
            
            logHandler.logMessage("#### ==========================================");
            logHandler.logMessage("#### serialNumber = " + serialNumber);
            logHandler.logMessage("#### cavityPos = " + cavityPos);
            
            // ================================================================================
            
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("PASS_QTY","SCRAP_QTY");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                serialNumber,
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys);

            var return_value = result_attribGetAttributeValues.return_value;

            if (return_value != 0) {

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {

                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 

            TEMP_PASS_QTY = ""+result_attribGetAttributeValues.attributeResultValues[1];
            TEMP_SCRAP_QTY = ""+result_attribGetAttributeValues.attributeResultValues[4];
            
            logHandler.logMessage("#### TEMP_PASS_QTY = " + TEMP_PASS_QTY);
            logHandler.logMessage("#### TEMP_SCRAP_QTY = " + TEMP_SCRAP_QTY);
      

       
            //-------------------------------------------------------------------------------------
            //Max quantity check (Sami)
            //-------------------------------------------------------------------------------------

            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("SC_MAX_QUANTITY");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                serialNumber,
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys);

            var return_value = result_attribGetAttributeValues.return_value;

            if (return_value != 0) {

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {

                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_SC_MAX_QUANTITY = "" + result_attribGetAttributeValues.attributeResultValues[1];
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            if(parseInt(TEMP_PASS_QTY)>=parseInt(TEMP_SC_MAX_QUANTITY)){
                var TEMP_BATCHES_AR = [];
                // <shipGetLotFromSerialNumber> ---------------------------------------------
                var lotResultKeys = new Array("SHIPPING_LOT_NUMBER");
                var result_shipGetLotFromSerialNumber = imsApiService.shipGetLotFromSerialNumber(imsApiSessionContext, 
                    stationNumber, 
                    serialNumber,
                    "-1",
                    lotResultKeys);

                var return_value = result_shipGetLotFromSerialNumber.return_value;

                if (return_value != 0) {

                    errorCode = return_value;
                    errorMessage = "[result_shipGetLotFromSerialNumber] " + getImsApiErrorText(return_value);
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }   

                var trolleyId = "" + result_shipGetLotFromSerialNumber.lotResultValues[0];

                // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
                var serialNumberResultKeys = new Array("SERIAL_NUMBER");
                var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                    stationNumber, 
                    trolleyId,
                    serialNumberResultKeys);

                var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

                if (return_value != 0) {

                    errorCode = return_value;
                    errorMessage = "[shipGetSerialNumberDataForShippingLot] " + getImsApiErrorText(return_value);
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }   

                for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length; x++){
                    TEMP_BATCHES_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x]);
                }
                if(serialNumber==TEMP_BATCHES_AR[0]){
                    var batch =TEMP_BATCHES_AR[1];
                }else{
                    var batch =TEMP_BATCHES_AR[0];
                }

                // <attribAppendAttributeValues> ------------------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("PASS_QTY", TEMP_SC_MAX_QUANTITY, "0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    batch,
                    "-1",
                    -1,
                    1,
                    attributeUploadKeys,
                    attributeUploadValues);

                var return_value = result_attribAppendAttributeValues.return_value;

                if (return_value != 0) { 

                    errorCode = return_value;
                    errorMessage = "[attribAppendAttributeValues] "+ getImsApiErrorText(return_value);

                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }

                errorCode = -1110;
                errorMessage = "[Max trolley quantity reached] ";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage,
                        redButton : 1
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            var TEMP_PASSQTY = parseInt(TEMP_PASS_QTY);
            TEMP_PASSQTY++;  // increment scrap quantity
            TEMP_PASS_QTY = ""+TEMP_PASSQTY;
            
            logHandler.logMessage("#### TEMP_PASS_QTY (updated) = " + TEMP_PASS_QTY);
            
            
            //-------------------------------------------------------------------------------------- 
            //--------------------------------------------------------------------------------------
        

            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("PASS_QTY", TEMP_PASS_QTY, "0");
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                serialNumber,
                "-1",
                -1,
                1,
                attributeUploadKeys,
                attributeUploadValues);

            var return_value = result_attribAppendAttributeValues.return_value;

            if (return_value != 0) { 

                errorCode = return_value;
                errorMessage = "[attribAppendAttributeValues] "+ getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
        }
        else{
            // Will be executed to Scrap all registered Trolleys in the scrap station
            // ----------------------------------------------------------------------
            log = "SCRAP";
            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("SC_TROLLEY_MAP","SC_PART_MAP");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                7,
                stationNumber,
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys);

            var return_value = result_attribGetAttributeValues.return_value;

            if (return_value != 0 ) {

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_SC_TROLLEY_MAP = ""+result_attribGetAttributeValues.attributeResultValues[4];
            var TEMP_SC_PART_MAP = ""+result_attribGetAttributeValues.attributeResultValues[1];
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            logHandler.logMessage(">>>> TEMP_SC_TROLLEY_MAP = " + TEMP_SC_TROLLEY_MAP);
            logHandler.logMessage(">>>> TEMP_SC_PART_MAP = " + TEMP_SC_PART_MAP);
            log = " -> ";
            var TEMP_SC_TROLLEY_AR = getRegisteredTrolley(TEMP_SC_TROLLEY_MAP).trolleyList;
            var TEMP_BATCHES_AR = [];

            // Look over all registered Trolleys at the scrap station
            for (var t=0;t<TEMP_SC_TROLLEY_AR.length;t++){
                var cnt1 = 0;
                var cnt2 = 0;
                if (TEMP_SC_TROLLEY_AR[t]!=""){
                    TEMP_BATCHES_AR = getLinkedBatches(stationNumber,TEMP_SC_TROLLEY_AR[t]).linkedBatches;
                    // Look over all used 
                    for (var b=0;b<TEMP_BATCHES_AR.length;b++){
                        var batchQty= getBatcheQuantity(stationNumber,TEMP_BATCHES_AR[b]);
                       
                        var toScrap = parseInt(batchQty.pass);  // number of unti to be scrapped
                        for (var n=1;n<=toScrap;n++){
                            var scrapId = TEMP_BATCHES_AR[b] + "-C" + n;
                            log += scrapId + " | ";
                            var scrapPart = scrapPartFromBatch(stationNumber,scrapId,TEMP_BATCHES_AR[b]);
                            cnt1++;
                            if (scrapPart.errorCode == 0) cnt2++;
                        }
                    }    
                }   
				logHandler.logMessage(">>>> cnt1 = " + cnt1);
                logHandler.logMessage(">>>> cnt2 = " + cnt2);
				if (cnt1==cnt2){
                    var releaseTr = releaseTrolley(stationNumber, TEMP_SC_TROLLEY_AR[t]);
                    log += releaseTr.log;
                    for (var b=0;b<TEMP_BATCHES_AR.length;b++){
                        var return_value = setBatchPassQty(stationNumber,TEMP_BATCHES_AR[b],0); // reset pass qty
                    }
                }
            }

        }
        
        //var result_getTrolleyId = getTrolleyId(pn, part_map, trolley_map);
        //Increment the consumed quantity for the shooting number check
        if(stationNumber=="04002011"||stationNumber=="04002021"){
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("SC_CONSUMED_QUANTITY");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
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

                errorCode = return_value;
                errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

                var resultData = {

                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_SC_CONSUMED_QUANTITY = result_attribGetAttributeValues.attributeResultValues[1];
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            TEMP_SC_CONSUMED_QUANTITY ++;

            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("SC_CONSUMED_QUANTITY", TEMP_SC_CONSUMED_QUANTITY, "0");
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
                errorMessage = "[attribAppendAttributeValues] "+ getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
        }
        // JSON result ---------------------------------------------------------
        var resultData = {
            log : log,
            errorCode : errorCode,
            errorMessage : errorMessage,
            redButton : 0 
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfViPackPart failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function setBatchPassQty(stationNumber,batchId,qty){
    var log = "";
    var errorCode = 0;
    var errorMessage = "";
    // --------------------------------------------------------------------

    // <attribAppendAttributeValues> ------------------------------------------------------
    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
    var attributeUploadValues = new Array("PASS_QTY", qty, "0");
    var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
        stationNumber, 
        2,
        batchId,
        "-1",
        -1,
        1,
        attributeUploadKeys,
        attributeUploadValues);

    var return_value = result_attribAppendAttributeValues.return_value;

    // --------------------------------------------------------------------
    return {
        log : log,
        errorCode : return_value, 
        errorMessage : errorMessage
    }
}

function releaseTrolley(stationNumber, trolleyId){
    var log = "releaseTrolley > ";
    var errorCode = 0;
    var errorMessage = "";
    var TEMP_BATCH_NUMBER_AR = [];
    // --------------------------------------------------------------------

    // <shipGetSerialNumberDataForShippingLot> -----------------------------
    var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
    var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
        stationNumber, 
        trolleyId,
        serialNumberResultKeys);

    var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;


    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "releaseTrolley.shipGetSerialNumberDataForShippingLot : " + getImsApiErrorText(return_value);
        //return {errorCode : errorCode, errorMessage : errorMessage}
    }
    

    for (var x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
        TEMP_BATCH_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
        log += " "+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]+" | ";
    }
    // ---------------------------------------------------------------------

    for (var x=0;x<TEMP_BATCH_NUMBER_AR.length;x++){
        // <shipRemoveSerialNumberFromShippingLot> ------------------------------
        var result_shipRemoveSerialNumberFromShippingLot = imsApiService.shipRemoveSerialNumberFromShippingLot(imsApiSessionContext, 
            stationNumber, 
            trolleyId,
            TEMP_BATCH_NUMBER_AR[x],
            "-1",
            "-1");

        var return_value = result_shipRemoveSerialNumberFromShippingLot.return_value;
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "releaseTrolley.shipGetSerialNumberDataForShippingLot : " + getImsApiErrorText(return_value);
            //return {errorCode : errorCode, errorMessage : errorMessage}
        }
       
    }

    // ---------------------------------------------------------------------
    // <attribGetAttributeValues> ---------------------------------------------
    var attributeCodeArray = new Array("SC_TROLLEY_MAP","SC_PART_MAP");
    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
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
            //return {errorCode : errorCode, errorMessage : errorMessage}
        }
    }

    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    var TEMP_SC_TROLLEY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[4];
    var TEMP_SC_PART_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
         
    var updatedMaps = removeTrolley(trolleyId, TEMP_SC_TROLLEY_MAP, TEMP_SC_PART_MAP);
	logHandler.logMessage("+1+1+1+1+1"+ updatedMaps.trolleyMap +"+1+1+1+1+1" + updatedMaps.partMap);
    // <attribAppendAttributeValues> ---------------------------------------------
    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
    var attributeUploadValues = new Array("SC_TROLLEY_MAP",updatedMaps.trolleyMap,"0","SC_PART_MAP",updatedMaps.partMap,"0");
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
            //return {errorCode : errorCode, errorMessage : errorMessage}
    }

    // <attribAppendAttributeValues> ------------------------------------------------------
    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
    var attributeUploadValues = new Array("START_TIME","-1" ,"0", "END_TIME","-1","0","WIP_STATE","BEFORE_SAND_CORE","0" );
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
        //return {errorCode : errorCode, errorMessage : errorMessage}
    }   

    // --------------------------------------------------------------------
    return {
        log : log,
        errorCode : errorCode, 
        errorMessage : errorMessage
    }

}

function removeTrolley(trolleyId, trolleyMap, partMap){

    var trolleyAr = trolleyMap.split("|");
    var partAr = partMap.split("|");
    var pos = -1;
    var pa="";
  
    for(i=0; i<trolleyAr.length; i++){
        var tr = trolleyAr[i].split(":")[1];
    
        if (tr==trolleyId) {
          pa = partAr[i].split(":")[1];
        }
    }
  
   var tr_map = trolleyMap.replace(trolleyId,"");
   var pn_map = partMap.replace(pa,"");

 
    return {
        trolleyMap:tr_map,
        partMap:pn_map
    };
}

function scrapPartFromBatch(stationNumber,serialNumber,batchNumber){

    var log = "";
    var errorCode = 0;
    var errorMessage = "";
    // --------------------------------------------------------------------

    logHandler.logMessage("#### scrapPartFromBatch");
    // < trGetSerialNumberInfo> --------------------------------------------
    var serialNumberResultKeys = new Array("PART_DESC","PART_NUMBER","QUANTITY","WORKORDER_NUMBER");

    var result_trGetSerialNumberInfo = imsApiService.trGetSerialNumberInfo(imsApiSessionContext, 
        stationNumber, 
        batchNumber,
        "-1",
        serialNumberResultKeys);

    var return_value = result_trGetSerialNumberInfo.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "scrapPartFromBatch.trGetSerialNumberInfo : " + getImsApiErrorText(return_value);
        //return {errorCode : errorCode, errorMessage : errorMessage}
    }
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    var TEMP_PART_DESC = result_trGetSerialNumberInfo.serialNumberResultValues[0]; 
    var TEMP_PART_NUMBER = result_trGetSerialNumberInfo.serialNumberResultValues[1];
    var TEMP_QUANTITY = result_trGetSerialNumberInfo.serialNumberResultValues[2];
    var TEMP_WORKORDER_NUMBER = result_trGetSerialNumberInfo.serialNumberResultValues[3];
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

    var serialNumberArrayList = [];
    // <trAssignSerialNumberMergeAndUploadState> ---------------------------
    var result_trAssignSerialNumberForProductOrWorkOrder = imsApiService.trAssignSerialNumberForProductOrWorkOrder(imsApiSessionContext, 
        stationNumber, 
        TEMP_WORKORDER_NUMBER, 
        "-1",
        "-1",
        serialNumber, 
        "1", 
        2,
        serialNumberArrayList, 
        0);

    var return_value = result_trAssignSerialNumberForProductOrWorkOrder.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "scrapPartFromBatch.trAssignSerialNumberForProductOrWorkOrder : " + getImsApiErrorText(return_value);
        //return {errorCode : errorCode, errorMessage : errorMessage}
    }

    //<trUploadState>-------------------------------------------------------------
    var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
    var serialNumberUploadValues = new Array();
    var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
        stationNumber,
        2, 
        serialNumber,
        "-1",
        2,
        0,
        "-1",
        0,
        serialNumberUploadKeys,
        serialNumberUploadValues);
          
    var return_value = result_trUploadState.return_value;    
    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "scrapPartFromBatch.trUploadState : " + getImsApiErrorText(return_value);
        //return {errorCode : errorCode, errorMessage : errorMessage}
    }

    // <batchSplitBatchNumberToSerialNumber> --------------------------------------------- 
    var result_batchSplitBatchNumberToSerialNumber = imsApiService.batchSplitBatchNumberToSerialNumber(imsApiSessionContext, 
        stationNumber, 
        serialNumber,
        "-1",
        batchNumber,
        2,
        1,
        0,
        1);

    var return_value = result_batchSplitBatchNumberToSerialNumber.return_value;
    
    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "scrapPartFromBatch.batchSplitBatchNumberToSerialNumber : " + getImsApiErrorText(return_value);
        //return {errorCode : errorCode, errorMessage : errorMessage}
    }
    // --------------------------------------------------------------------
    return {
        log : log,
        errorCode : errorCode, 
        errorMessage : errorMessage
    }
}

function getBatcheQuantity(stationNumber, batchId){

    var pass = "0";
    var scrap = "0";

    var log = "";
    var errorCode = 0;
    var errorMessage = "";
    // --------------------------------------------------------------------

    // <attribGetAttributeValues> ---------------------------------------------------------
    var attributeCodeArray = new Array("PASS_QTY","SCRAP_QTY");
    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
    var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
        stationNumber, 
        2,
        batchId,
        "-1",
        attributeCodeArray,
        1,
        attributeResultKeys);

    var return_value = result_attribGetAttributeValues.return_value;

    if (return_value != 0) {

        errorCode = return_value;
        errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);

        var resultData = {

                errorCode : errorCode,
                errorMessage : "" + errorMessage
            };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        return result;
    } 
    
    pass = result_attribGetAttributeValues.attributeResultValues[1];
    scrap = result_attribGetAttributeValues.attributeResultValues[4];
    // --------------------------------------------------------------------
    return {
        errorCode : errorCode,
        pass : pass,
        scrap : scrap
    }
}

function getLinkedBatches(stationNumber,trolleyId){
    
    var TEMP_BATCHES_AR = [];
    var log = "";
    var errorCode = 0;
    var errorMessage = "";
    // --------------------------------------------------------------------

    // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
    var serialNumberResultKeys = new Array("SERIAL_NUMBER");
    var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
        stationNumber, 
        trolleyId,
        serialNumberResultKeys);

    var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

    if (return_value != 0) {
        return {
            errorCode : return_value,
            linkedBatches : TEMP_BATCHES_AR
        }
    }   

    for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length; x++){
        TEMP_BATCHES_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x]);
    }
    // --------------------------------------------------------------------
    return {
        errorCode : return_value,
        linkedBatches : TEMP_BATCHES_AR
    }

}

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

function strToDateMs(date){
    
    date = new Date(date.substr(0,4),
                    (parseInt(date.substr(5,2))-1).toString(),
                    date.substr(8,2),
                    date.substr(11,2),
                    date.substr(14,2),
                    date.substr(17,2));         

    return  date.getTime();
}

function dateMsToStr(milliseconds){
    
    var date = new Date(milliseconds); 
    var year = parseInt(date.getFullYear());
    var month = parseInt(date.getMonth()) + 1;
    var day = parseInt(date.getDate());
    var hour = parseInt(date.getHours());
    var minute = parseInt(date.getMinutes());
    var second = parseInt(date.getSeconds());
    var a =  "" + year.toString() + "-" + month.toString() + "-" + day.toString() + " " + hour.toString() + ":" + minute.toString() + ":" + second.toString();

    return a;
}



function base64Encode(text){

    if (/([^\u0000-\u00ff])/.test(text)){
        throw new Error("Can't base64 encode non-ASCII characters.");
    } 

    var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = 0,
        cur, prev, byteNum,
        result=[];      

    while(i < text.length){

        cur = text.charCodeAt(i);
        byteNum = i % 3;

        switch(byteNum){
            case 0: //first byte
                result.push(digits.charAt(cur >> 2));
                break;

            case 1: //second byte
                result.push(digits.charAt((prev & 3) << 4 | (cur >> 4)));
                break;

            case 2: //third byte
                result.push(digits.charAt((prev & 0x0f) << 2 | (cur >> 6)));
                result.push(digits.charAt(cur & 0x3f));
                break;
        }

        prev = cur;
        i++;
    }

    if (byteNum == 0){
        result.push(digits.charAt((prev & 3) << 4));
        result.push("==");
    } else if (byteNum == 1){
        result.push(digits.charAt((prev & 0x0f) << 2));
        result.push("=");
    }

    return result.join("");
}


function base64Decode(text){

    text = text.replace(/\s/g,"");

    if(!(/^[a-z0-9\+\/\s]+\={0,2}$/i.test(text)) || text.length % 4 > 0){
        throw new Error("Not a base64-encoded string.");
    }   

    //local variables
    var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        cur, prev, digitNum,
        i=0,
        result = [];

    text = text.replace(/=/g, "");

    while(i < text.length){

        cur = digits.indexOf(text.charAt(i));
        digitNum = i % 4;

        switch(digitNum){

            //case 0: first digit - do nothing, not enough info to work with

            case 1: //second digit
                result.push(String.fromCharCode(prev << 2 | cur >> 4));
                break;

            case 2: //third digit
                result.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2));
                break;

            case 3: //fourth digit
                result.push(String.fromCharCode((prev & 3) << 6 | cur));
                break;
        }

        prev = cur;
        i++;
    }

    return result.join("");
}

function getTrolleyId(pn, part_map, trolley_map){
  
  var batchId = "";
  var errorCode = 0;
  var errorMessage = "";
  var partmap = []; 
  var trolleymap = [];  
  var trolleyId = "";
  
  partmap = part_map.split("|");
  trolleymap = trolley_map.split("|");
    
  if (partmap.length != trolleymap.length){
    return {
        batchId:"-1",
        errorCode:-10,
        errorMessage:"The trolley mapping is not matching the part mapping.",
    };
  }
  
  for (var i=0;i<partmap.length;i++){  
    partmap[i]=partmap[i].split(":")[1];
    trolleymap[i]=trolleymap[i].split(":")[1];
    if (partmap[i]===undefined) partmap[i]="";
    if (trolleymap[i]===undefined) trolleymap[i]="";
  }
  
  for (i=0;i<partmap.length;i++){ 
     var s = partmap[i].split(",");
     for (var j=0;j<s.length;j++){
       if ((s[j]==pn)){
         trolleyId=trolleymap[i]; 
       } 
     }
  }
  
  return {
        trolleyId : trolleyId,
        errorCode : errorCode,
        errorMessage : ""
  };
  
}

function getRegisteredTrolley(trolley_map){
  var errorCode = 0;
  var errorMessage = "";
  var trolleymap = trolley_map.split("|");
  var trolleyList = [];
  
  for (var i=0;i<trolleymap.length;i++){  
     trolleyList.push(trolleymap[i].split(":")[1]);
  }
  
  return {
        trolleyList:trolleyList,
        errorCode:errorCode,
        errorMessage:errorMessage
  };
}

function printLineX(x){
    var s="### ";
    for(var i=0;i<x;i++){
        s+="-";
    }
    logHandler.logMessage(s);
}

function printTitle(title1,title2){
    var title = title1;
    if (!title2.equals("")) title = title1 + " - " + title2;
    printLineX(81);
    logHandler.logMessage("### " + title);
    printLineX(81);
}

function printValue(value1,value2){
    var value = value1;
    if (isInt(value2)) value = value + " = " + value2;
    logHandler.logMessage("### " + value);   
}

function printTxtValue(value1,value2){
    var value = value1;
    if (!value2.toString().equals("")) value = value + " = " + value2.toString();
    logHandler.logMessage("### " + value);   
}

function SortArrays(ar1,ar2,ar3,ar4){
  
    var ar11 = [];
    var ar22 = [];
    var ar33 = [];
    var ar44 = [];
    var c;
  
    for (var x=0;x<ar1.length;x++){
        for (var y=x+1;y<ar1.length;y++){
          if (ar1[y]<ar1[x]) {
                c = ar1[y];
                ar1[y] = ar1[x];
                ar1[x] = c;

                c = ar2[y];
                ar2[y] = ar2[x];
                ar2[x] = c;

                c = ar3[y];
                ar3[y] = ar3[x];
                ar3[x] = c;
                
                c = ar4[y];
                ar4[y] = ar4[x];
                ar4[x] = c;
            }
        }  
    }

    return {
      ar1 : ar1,
      ar2 : ar2,
      ar3 : ar3,
      ar4 : ar4
    }
  
}

// Get Information from UID
//   Output
//        err: err,
//        uid: uid,
//        side: side,
//        year: year,
//        day: day,
//        line: line,
//        reference: reference,
//        cavity: cavity,
//        pouring: pouring


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
 
function getReference(code,side) { 
    switch (code) {
        case "A":
            if (side == "L") return "141116-10410";
            if (side == "R") return "141115-10410";
            return "Advics Daimler MRA";
        case "B":
            if (side == "L") return "13.4426-9973.9";
            if (side == "R") return "13.4426-9974.9";
            return "Continental MLBevo 16";
        case "C":
            if (side == "L") return "13.4446-9963.9";
            if (side == "R") return "13.4446-9964.9";
            return "Continental MLBevo 17";
        case "D":
            if (side == "L") return "51-D3606-17110";
            if (side == "R") return "51-D3606-27110";
            return "Akebono MLBevo 18 NAO";
        case "E":
            if (side == "L") return "51-D3507-17110";
            if (side == "R") return "51-D3507-27110";
            return "Akebono MLBevo 18 ECE";
        case "F":
            if (side == "L") return "51-D3508-17110";
            if (side == "R") return "51-D3508-27110";
            return "Akebono MLBevo 19 ECE";
        case "G":
            if (side == "L") return "51-D3517-17110";
            if (side == "R") return "51-D3517-27110";
            return "Akebono MLBevo 18 RS Q3";
        case "H":
            if (side == "L") return "13.4446-9801.9";
            if (side == "R") return "13.4446-9802.9";
            return "Continental Hyundai M3 18";
        case "I":
            if (side == "L") return "13.4446-9805.9";
            if (side == "R") return "13.4446-9806.9";
            return "Continental Hyundai M3 19";
        default:
            return "";
    }
    return "";
}

function getLastInspectionTime(serial,map){
    var UidInfo = getInfoFromUID(serial);
    var line = UidInfo.line;
    var ref = UidInfo.reference;
    var side = UidInfo.side;
    var t = -1;
    var A = map.split("|");
    for (var i=0;i<A.length;i++){
      var  B = A[i].split(",");
        if ((B[0]==line) && (B[1]==ref) && (B[2]==side)) {
          t=parseInt(B[3]);
        }
    }
  
    return{
        time : t
    }
}

function updateInspectionTime(serial,map,time){
  var mapping = map;
  
  var UidInfo = getInfoFromUID(serial);
  var line = UidInfo.line;
  var ref = UidInfo.reference;
  var side = UidInfo.side;
  var t=time;
  var pos = -1;
  var log = "";
  var A = map.split("|");
  for (var i=0;i<A.length;i++){
    var  B = A[i].split(",");
      if ((B[0]==line) && (B[1]==ref) && (B[2]==side)) {
        pos=i;
      }
  }  
  
  log = pos;
  
  if (pos==-1){
    if ((A.length>0) && (mapping != ""))  mapping += "|";
    mapping += line+","+ref+","+side+","+time;
    
    log += "C"+A.length;
  }
  var mp = "";
  if (pos>-1){
   
    if (A.length>=1){
      for (var i=0;i<A.length;i++){
        if (i!=pos){
          mp += A[i];
          if ((i<A.length-1) ) mp += "|";
          log += "A";
        }
        else {
          //if (i>0) mp += "|";
          mp +=line+","+ref+","+side+","+time;
          if (i<A.length-1) mp += "|";
          log += "B";
        }
      
      }
    }

    mapping = mp;
    
  }

    
  return{
    map :  mapping,
    log : log
  }
  
}




// #############################################################################
function getLine(configContent,code) {
    var res = fct_getLine(configContent, code).line; 
    return res;
}
// #############################################################################


//#############################################################################


function getTrolleyId(pn, part_map, trolley_map){
  
    var batchId = "";
    var errorCode = 0;
    var errorMessage = "";
    var partmap = []; 
    var trolleymap = [];  
    var trolleyId = "";
    
    partmap = part_map.split("|");
    trolleymap = trolley_map.split("|");
      
    if (partmap.length != trolleymap.length){
      return {
          batchId:"-1",
          errorCode:-10,
          errorMessage:"The trolley mapping is not matching the part mapping.",
      };
    }
    
    for (var i=0;i<partmap.length;i++){  
      partmap[i]=partmap[i].split(":")[1];
      trolleymap[i]=trolleymap[i].split(":")[1];
      if (partmap[i]===undefined) partmap[i]="";
      if (trolleymap[i]===undefined) trolleymap[i]="";
    }
    
    for (i=0;i<partmap.length;i++){ 
       var s = partmap[i].split(",");
       for (var j=0;j<s.length;j++){
         if ((s[j]==pn)){
           trolleyId=trolleymap[i]; 
         } 
       }
    }
    
    return {
          trolleyId : trolleyId,
          errorCode : errorCode,
          errorMessage : ""
    };
    
  }

//MS MSMSMSMSMSMSMSMSM
function getReference_ms(code) {
    switch (code) {
        case "A":
            return "Advics Daimler MRA";
        case "B":
            return "Continental MLBevo 16\" ECE";
        case "C":
            return "Continental MLBevo 17\" NAO";
        case "D":
            return "Akebono MLBevo 18\" NAO";
        case "F":
            return "Akebono MLBevo 19\" ECE";
        case "H":
            return "Continental Hyundai M3 18\"";
        case "I":
            return "Continental Hyundai M3 19\"";
        case "E":
            return "Akebono MLBevo 18\" ECE";
        case "G":
            return "Akebono MLBevo 18\" RS Q3";
        default:
            return "";
    }
    return "";
}

function getInfoFromUID_ms(uid) {
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


function getInfoFromUID2(configContent,uid) {
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
        line = fct_getLine(configContent,uid.substring(6, 7));
        reference = fct_getReference(configContent, uid.substring(7, 8), "").productFamily;
        cavity = uid.substring(8, 10);
        pouring = uid.substring(10, 13);
    } else if ((uid.length == 12)) {
       err = 0;
        side = "";
        year = uid.substring(0, 2);
        day = uid.substring(2, 5);
        line = fct_getLine(configContent,uid.substring(5, 6));
        reference = fct_getReference(configContent, uid.substring(7, 8), "").productFamily;
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



function getPartNumber(configContent, productFamily, side){
    var res = fct_getProductInformation(configContent, productFamily, side).partNumber;

    return{
        err : 0,
        message: "PASS",
        partNumber : res
    }
}

 
function getReference2_ms(code,side) {
    switch (code) {
        case "A":
            if (side == "L") return "141116-10410";
            if (side == "R") return "141115-10410";
            return "Advics Daimler MRA";
        case "B":
            if (side == "L") return "13.4426-9973.9";
            if (side == "R") return "13.4426-9974.9";
            return "Continental MLBevo 16";
        case "C":
            if (side == "L") return "13.4446-9963.9";
            if (side == "R") return "13.4446-9964.9";
            return "Continental MLBevo 17";
        case "D":
            if (side == "L") return "51-D3606-17110";
            if (side == "R") return "51-D3606-27110";
            return "Akebono MLBevo 18 NAO";
        case "E":
            if (side == "L") return "51-D3507-17110";
            if (side == "R") return "51-D3507-27110";
            return "Akebono MLBevo 18 ECE";
        case "F":
            if (side == "L") return "51-D3508-17110";
            if (side == "R") return "51-D3508-27110";
            return "Akebono MLBevo 19 ECE";
        case "G":
            if (side == "L") return "51-D3517-17110";
            if (side == "R") return "51-D3517-27110";
            return "Akebono MLBevo 18 RS Q3";
        case "H":
            if (side == "L") return "13.4446-9801.9";
            if (side == "R") return "13.4446-9802.9";
            return "Continental Hyundai M3 18";
        case "I":
            if (side == "L") return "13.4446-9805.9";
            if (side == "R") return "13.4446-9806.9";
            return "Continental Hyundai M3 19";
        default:
            return "";
    }
    return "";
}

function getKaizenStation(line){
    switch (line) {
         case "C":
             return "060020K101";
         default:
             return "";
     }
}
function isKaizenLine(line){
    switch (line) {
        case "C":
            return "true";
        default:
            return "false";
    }
}
function getSIIFStation(line){
    switch (line) {
        case "A":
            return "06008010";
		case "B":
			return "06008020";
		default:
			return "";
    }
}