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
 Sami Akkari            2019-04-24      Le Belier        cfFp                    First release 
 Sami Akkari            2019-05-31      Le Belier        cfFp                    Add cancel box 
 Sami Akkari            2019-07-13      Le Belier        cfFp                    Add multi trolleys Handling + printing and unpacking functions
 Sami Akkari            2019-07-25      Le Belier        cfFp                    Activating WO for each SNR before packing
 Sami Akkari            2019-07-25      Le Belier        cfFp                    Add interlocking of part numbers in the shipping box
 Sami Akkari            2019-09-13      Le Belier        cfFp                    Add max quantities
 Sami Akkari            2019-09-19      Le Belier        cfFp                    Move closing the shipping box to cfFpFinishBox
 Sami Akkari            2019-09-23      Le Belier        cfFp                    Change the API for closing shipping boxes
 Ala Khiari             2019-10-09      Le Belier        cfFp                    Add config functions
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
    get SAP code for partNumber
    in  : configContent
    out : 
        { 
            sapCode                     //? return sapCode from the configuration
        }
    ============================================================================
*/
function fct_getFpSapCode(configContent, partNumber) {
    var errorCode = 0;
    var errorMessage = "";
    var sapCode = "-1";

    var configuration = configContent.finalPacking.sapCodes;

    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".finalPacking.sapCodes is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            sapCode: sapCode
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].partNumber == partNumber) {
            sapCode = configuration[i].sapCode;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        sapCode: sapCode
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get max basket quantities for final packing
    in  : configContent
    out : 
        { 
            basketQuantities[]              //? return final packing max basket quantities from the configuration
        }
    ============================================================================
*/
function fct_getFpMaxBasketQuantities(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var maxBasketQuantities = [];

    var configuration = configContent.finalPacking.maxBasketQuantities;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".finalPacking.maxBasketQuantities is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            maxBasketQuantities: maxBasketQuantities
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        maxBasketQuantities.push(configuration[i].quantity);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        maxBasketQuantities: maxBasketQuantities
    }
}
/*  ============================================================================
*/


function cfFpPrintBoxInfo(jsonData){
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ------------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;

        // Intermediate variables -------------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        var TEMP_SERIAL_NUMBER_AR = [];
        var TEMP_WORKORDER_AR = [];
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        var TEMP_SNR_AR = [];
        
        // API integration --------------------------------------------------------
        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            boxId
            );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipActivateShippingLotAtKap] " + getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("FP_ACTIVE_BOX", boxId, "0");
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

        
        // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
            stationNumber, 
            boxId,
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

        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
            TEMP_WORKORDER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+3]);
            TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+1]);
            TEMP_PART_DESC_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+0]);
        }
		
        for (x=0; x< TEMP_SERIAL_NUMBER_AR.length; x++){
            
                TEMP_SNR_AR.push(
                    {
                        serialNumber: TEMP_SERIAL_NUMBER_AR[x],
                        partNumber : TEMP_PART_NUMBER_AR[x],
                        partDescription : TEMP_PART_DESC_AR[x],
                        workorders: TEMP_WORKORDER_AR[x],
                        layer: "1" 
                    }
                );
			
        }
		TEMP_SNR_AR.sort(
			function(a,b) {
				return parseInt(a.date) - parseInt(b.date);
			}
		);
		var partNumber = "" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[1]; 
        var TEMP_QTY = "" + TEMP_SERIAL_NUMBER_AR.length; 

        // <attribGetAttributeValues> ---------------------------------------------------------
        var attributeCodeArray = new Array("START_TIME");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            boxId,
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

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_START_TIME = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //<mdataGetCalendarData>----------------------------------------------------------------
        var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
        var result_mdataGetCalendarData= imsApiService.mdataGetCalendarData(imsApiSessionContext, 
            stationNumber, 
            calendarDataResultKeys);

        var return_value = result_mdataGetCalendarData.return_value;

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

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_CURRENT_TIME = parseInt(result_mdataGetCalendarData.calendarDataResultValues[0]);
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_SETUP_TIME = msToTime(TEMP_CURRENT_TIME-TEMP_START_TIME);

        var configContent = fct_readDocument(stationNumber);
        var res = fct_getFpSapCode(configContent, partNumber).sapCode;
    
        // JSON result ------------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            boxId : boxId,
			sapCode: "" +res,
            setupTime : "" + TEMP_SETUP_TIME,
            quantity: TEMP_QTY,
            serialNumbers : TEMP_SNR_AR
            
        };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfFpPrintBoxInfo failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfFpGetMaxQuantity(jsonData){
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ------------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        

        // Intermediate variables -------------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration --------------------------------------------------------

        var configContent = fct_readDocument(stationNumber);
        var res = fct_getFpMaxBasketQuantities(configContent).maxBasketQuantities;

        // JSON result ------------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            maxQuantites : res
            
        };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpGetMaxQuantity failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfFpRemoveSnFromBox(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;
        var serialNumber= data.serialNumber;
        
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration --------------------------------------------------------
        
        
        // < shipGetShippingLotInfo> ----------------------------------------------
        var shippingLotFilters = new Array(new KeyValue("FUNC_MODE",1));
        var shippingLotResultKeys = new Array("SHIPPING_LOT_NUMBER");
        
        var result_shipGetShippingLotInfo = imsApiService.shipGetShippingLotInfo(imsApiSessionContext, 
            stationNumber,
            shippingLotFilters,
            shippingLotResultKeys);

        var return_value = result_shipGetShippingLotInfo.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipGetShippingLotInfo] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SHIPPING_LOT_NUMBER = result_shipGetShippingLotInfo.shippingLotResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if(boxId == TEMP_SHIPPING_LOT_NUMBER ){
           // <shipRemoveSerialNumberFromShippingLot> ------------------------------
            var result_shipRemoveSerialNumberFromShippingLot = imsApiService.shipRemoveSerialNumberFromShippingLot(imsApiSessionContext, 
                stationNumber, 
                boxId,
                serialNumber,
                "-1",
                "-1");

            var return_value = result_shipRemoveSerialNumberFromShippingLot.return_value;
            
            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = "[shipRemoveSerialNumberFromShippingLot] " + getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }  

            //<trUploadState>----------------------------------------------------------------
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

            if (return_value != 0) { 

                errorCode = return_value;
                errorMessage = "[trUploadState] " + getImsApiErrorText(return_value);
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            // <trGetSerialNumberInfo> ------------------------------
            var serialNumberResultKeys = new Array ("PART_DESC","PART_NUMBER","SERIAL_NUMBER","WORKORDER_NUMBER");
            var result_trGetSerialNumberInfo = imsApiService.trGetSerialNumberInfo(imsApiSessionContext, 
                stationNumber, 
                serialNumber,
                "-1",
                serialNumberResultKeys);

            var return_value = result_trGetSerialNumberInfo.return_value;
            
            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = "[trGetSerialNumberInfo] " + getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }  
            var TEMP_PART_DESC = "" + result_trGetSerialNumberInfo.serialNumberResultValues[0] ;
            var TEMP_PART_NUMBER = "" + result_trGetSerialNumberInfo.serialNumberResultValues[1] ;
            var TEMP_WORKORDER = "" + result_trGetSerialNumberInfo.serialNumberResultValues[3] ;

            var resultData = {
                errorCode : errorCode,
                errorMessage : errorMessage,
                serialNumber : serialNumber,
                partNumber: TEMP_PART_NUMBER,
                partDescription: TEMP_PART_DESC,
                workOrder: TEMP_WORKORDER
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        
        }else{

            var resultData = {
                errorCode : -1075,
                errorMessage : "The selected basket is not found or not active at the station."
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        
       
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfFpRemoveSnFromBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfFpPackSnToBox(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;
        var serialNumber= data.serialNumber;
        
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration --------------------------------------------------------

		//<trActivateWorkorder>----------------------------------------------------------------
        var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
        var serialNumberUploadValues = new Array();
        var result_trActivateWorkorder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
            stationNumber,
            "-1", 
            serialNumber,
            "-1",
            2,
            1);
            
        var return_value = result_trActivateWorkorder.return_value;

        if (return_value != 0) { 

            errorCode = return_value;
            errorMessage = "[trActivateWorkOrder] "+ getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
    
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
         
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" +  getImsApiErrorText(result_trCheckSerialNumberState.serialNumberStateResultValues[0])
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }   
		
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("FP_MAX_QUANTITY");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            boxId,
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
        var TEMP_MAX_QUANTITY = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        var TEMP_SERIAL_NUMBER_AR=[];

        // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
            stationNumber, 
            boxId,
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

        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
        }
        if(TEMP_SERIAL_NUMBER_AR.length >= parseInt(TEMP_MAX_QUANTITY)){
            errorCode = -1110;
            errorMessage = "[Max basket quantity reached] ";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }   
        

        // < shipGetShippingLotInfo> ----------------------------------------------
        var shippingLotFilters = new Array(new KeyValue("FUNC_MODE",1));
        var shippingLotResultKeys = new Array("PART_NUMBER","SHIPPING_LOT_NUMBER");
        
        var result_shipGetShippingLotInfo = imsApiService.shipGetShippingLotInfo(imsApiSessionContext, 
            stationNumber,
            shippingLotFilters,
            shippingLotResultKeys);

        var return_value = result_shipGetShippingLotInfo.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipGetShippingLotInfo] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SHIPPING_LOT_NUMBER = result_shipGetShippingLotInfo.shippingLotResultValues[1];
        var TEMP_LOT_PART_NUMBER = "" + result_shipGetShippingLotInfo.shippingLotResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <trGetSerialNumberInfo> ------------------------------
        var serialNumberResultKeys = new Array ("PART_DESC","PART_NUMBER","SERIAL_NUMBER","WORKORDER_NUMBER");
        var result_trGetSerialNumberInfo = imsApiService.trGetSerialNumberInfo(imsApiSessionContext, 
            stationNumber, 
            serialNumber,
            "-1",
            serialNumberResultKeys);

        var return_value = result_trGetSerialNumberInfo.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[trGetSerialNumberInfo] " + getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }  
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_PART_DESC = "" + result_trGetSerialNumberInfo.serialNumberResultValues[0] ;
        var TEMP_PART_NUMBER = "" + result_trGetSerialNumberInfo.serialNumberResultValues[1] ;
        var TEMP_WORKORDER = "" + result_trGetSerialNumberInfo.serialNumberResultValues[3] ;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        if(boxId == TEMP_SHIPPING_LOT_NUMBER && (TEMP_PART_NUMBER == TEMP_LOT_PART_NUMBER || TEMP_LOT_PART_NUMBER=="0") ){
            
            // <shipAddSerialNumberToShippingLot> ------------------------------
            var result_shipAddSerialNumberToShippingLot = imsApiService.shipAddSerialNumberToShippingLot(imsApiSessionContext, 
                stationNumber, 
                boxId,
                serialNumber,
                "-1",
                "-1");

            var return_value = result_shipAddSerialNumberToShippingLot.return_value;
            
            if (return_value != 0 && return_value != 406) {
                errorCode = return_value;
                errorMessage = "[shipAddSerialNumberToShippingLot] " + getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }  
            //<trUploadState>----------------------------------------------------------------
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

            if (return_value != 0) { 

                errorCode = return_value;
                errorMessage = "[trUploadState] " + getImsApiErrorText(return_value);
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            var resultData = {
                errorCode : errorCode,
                errorMessage : errorMessage,
                serialNumber : serialNumber,
                partNumber: TEMP_PART_NUMBER,
                partDescription: TEMP_PART_DESC,
                workOrder: TEMP_WORKORDER
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;

        }else{

            var resultData = {
                errorCode : -1075,
                errorMessage : "Invalid reference for the shipping basket."
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
    
       
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfFpPackSnToBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

	

function cfFpFinishBox(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;
        var finalLabelTemplate = data.finalLabelTemplate;
        var tempLabelTemplate = data.tempLabelTemplate ;
        var wipState = data.wipState;
        var completeWipState =  data.completeWipState ;
        var incompleteBox = data.incompleteBox;
        wipState = "AFTER_FINAL_PACKING";
        completeWipState = "AFTER_FINAL_PACKING";
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        var resultData = {};
        
        // API integration -----------------------------------------------------

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("FP_REGISTERED_BOXES");
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
        var TEMP_BOXES = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        //trolley registration check
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BOXES_LIST = TEMP_BOXES.split("|");
        var k=0;
        for(var x=0; x<TEMP_BOXES_LIST.length; x++){
           if(boxId==TEMP_BOXES_LIST[x]){
               k+=1;
           }        
        }
        if(k==0){
           errorCode = "-1070";
           errorMessage = "[Basket Not registered] ";
           
           var resultData = {
                   errorCode : errorCode,
                   errorMessage : "" + errorMessage
               };
           result.return_value = errorCode ;
           result.outArgs = [JSON.stringify(resultData)];
           return result;
       }
       // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var NEW_TEMP_BOXES = "";
        for(var x=0; x<TEMP_BOXES_LIST.length; x++){
            if(TEMP_BOXES_LIST[x]==boxId){
                NEW_TEMP_BOXES += "";
            }else{
                NEW_TEMP_BOXES += TEMP_BOXES_LIST[x]+"|";    
            }
        }
        NEW_TEMP_BOXES = NEW_TEMP_BOXES.slice(0,NEW_TEMP_BOXES.length-1); 
       // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("FP_ACTIVE_BOX","" ,"0","FP_REGISTERED_BOXES",NEW_TEMP_BOXES,"0");
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
        /*// <shipDeactivateShippingLotAtKap> ------------------------------------    
        var result_shipDeactivateShippingLotAtKap = imsApiService.shipDeactivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            boxId);

        var return_value = result_shipDeactivateShippingLotAtKap.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipDeactivateShippingLotAtKap] " + getImsApiErrorText(return_value);
            
            resultData["errorCode"] = errorCode;
            resultData["errorMessage"] = "" + errorMessage;

            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } */

        

		// <shipCompleteLot> --------------------------------------------- 
		var result_shipCompleteLot = imsApiService.shipCompleteLot(imsApiSessionContext, 
			stationNumber, 
			boxId,
			1,
			"-1");

		var return_value = result_shipCompleteLot.return_value;

		if (return_value != 0) {

			errorCode = return_value;
			errorMessage = "[shipCompleteLot] "+ getImsApiErrorText(return_value);
			
			var resultData = {
					errorCode : errorCode,
					errorMessage : "" + errorMessage
			};
			result.return_value = errorCode ;
			result.outArgs = [JSON.stringify(resultData)];
			return result;
		}
		
        // <attribAppendAttributeValues> ---------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("WIP_STATE",completeWipState,0);
        
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
            stationNumber,
            2,
            boxId,
            "-1",
            "-1",
            1,
            attributeUploadKeys,
            attributeUploadValues
            );

        var return_value = result_attribAppendAttributeValues.return_value;

        if (return_value != 0) {
            
            errorCode = return_value;
            errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);

            resultData["errorCode"] = errorCode;
            resultData["errorMessage"] = "" + errorMessage;
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        resultData["finalLabelTemplate"] = finalLabelTemplate;
    
        // JSON result ---------------------------------------------------------
        resultData["errorCode"] = 0;
        resultData["errorMessage"] = "[OK]";
        resultData["boxId"] = boxId;

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfFpFinishBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfFpCancelBox(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;
        var wipState = data.wipState;
        wipState = "BEFORE_FINAL_PACKING";
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        var resultData = {};
        
        // API integration -----------------------------------------------------

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("FP_REGISTERED_BOXES");
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
        var TEMP_BOXES = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        //trolley registration check
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BOXES_LIST = TEMP_BOXES.split("|");
        var k=0;
        for(var x=0; x<TEMP_BOXES_LIST.length; x++){
           if(boxId==TEMP_BOXES_LIST[x]){
               k+=1;
           }        
        }
        if(k==0){
           errorCode = "-1070";
           errorMessage = "[Basket Not registered] ";
           
           var resultData = {
                   errorCode : errorCode,
                   errorMessage : "" + errorMessage
               };
           result.return_value = errorCode ;
           result.outArgs = [JSON.stringify(resultData)];
           return result;
       }
       // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var NEW_TEMP_BOXES = "";
        for(var x=0; x<TEMP_BOXES_LIST.length; x++){
            if(TEMP_BOXES_LIST[x]==boxId){
                NEW_TEMP_BOXES += "";
            }else{
                NEW_TEMP_BOXES += TEMP_BOXES_LIST[x]+"|";    
            }
        }
        NEW_TEMP_BOXES = NEW_TEMP_BOXES.slice(0,NEW_TEMP_BOXES.length-1); 
       // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("FP_ACTIVE_BOX","" ,"0","FP_REGISTERED_BOXES",NEW_TEMP_BOXES,"0");
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
        /*// <shipDeactivateShippingLotAtKap> ------------------------------------    
        var result_shipDeactivateShippingLotAtKap = imsApiService.shipDeactivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            boxId);

        var return_value = result_shipDeactivateShippingLotAtKap.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipDeactivateShippingLotAtKap] " + getImsApiErrorText(return_value);
            
            resultData["errorCode"] = errorCode;
            resultData["errorMessage"] = "" + errorMessage;

            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } */
        
        // <attribAppendAttributeValues> ---------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("WIP_STATE",wipState,0);
        
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
            stationNumber,
            2,
            boxId,
            "-1",
            "-1",
            1,
            attributeUploadKeys,
            attributeUploadValues
            );

        var return_value = result_attribAppendAttributeValues.return_value;

        if (return_value != 0) {
            
            errorCode = return_value;
            errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);

            resultData["errorCode"] = errorCode;
            resultData["errorMessage"] = "" + errorMessage;
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        
        // JSON result ---------------------------------------------------------
        resultData["errorCode"] = 0;
        resultData["errorMessage"] = "[OK]";

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfFpCancelBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfFpRegisterBox(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;      
        var maxQuantity = data.maxQuantity; 
        var containerMode = data.containerMode;
        var wipState = data.wipState;
    
       
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";

        
        // API integration -----------------------------------------------------
        
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("FP_REGISTERED_BOXES");
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
        var TEMP_BOXES = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if (boxId == "" && maxQuantity!=""){
            
            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("BOX_PN");
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

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_BOX_PART_NUMBER = result_attribGetAttributeValues.attributeResultValues[1];
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            
            // <trGetNextSerialNumber> -----------------------------------------
            var result_trGetNextSerialNumber = imsApiService.trGetNextSerialNumber(imsApiSessionContext, 
                stationNumber,
                "-1",
                TEMP_BOX_PART_NUMBER,
                1);

            var return_value = result_trGetNextSerialNumber.return_value;
            
            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = "[trGetNextSerialNumber] " + getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_BOX_ID = result_trGetNextSerialNumber.serialNumberArray[0].serialNumber;
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            
            // <mlCreateNewMaterialBin> ----------------------------------------
            var materialBinUploadKeys = new Array("ERROR_CODE","MATERIAL_BIN_NUMBER","MATERIAL_BIN_PART_NUMBER","MATERIAL_BIN_QTY_ACTUAL");
            var materialBinUploadValues = new Array("0", TEMP_BOX_ID, TEMP_BOX_PART_NUMBER, "0");
            
            var result_mlCreateNewMaterialBin = imsApiService.mlCreateNewMaterialBin(imsApiSessionContext, 
                stationNumber,
                materialBinUploadKeys ,
                materialBinUploadValues
                );

            var return_value = result_mlCreateNewMaterialBin.return_value;
            
            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = "[mlCreateNewMaterialBin] " + getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
            
        }else if(boxId != "" && maxQuantity==""){
            TEMP_BOX_ID = boxId ;
        }else{
            errorCode = -1061;
            errorMessage = "[Box Id and quantity mismatch]";

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //trolley registration check
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BOXES_LIST = TEMP_BOXES.split("|");
        for(var x=0; x<TEMP_BOXES_LIST.length; x++){
            if(TEMP_BOX_ID==TEMP_BOXES_LIST[x]){
                errorCode = "-1050";
                errorMessage = "[Box Already registered] ";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if(TEMP_BOXES=="" || TEMP_BOXES==undefined){
            TEMP_BOXES += TEMP_BOX_ID ;
        }else{
            TEMP_BOXES += "|" + TEMP_BOX_ID;
        }


        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            TEMP_BOX_ID
            );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipActivateShippingLotAtKap] " + getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("FP_ACTIVE_BOX",TEMP_BOX_ID ,"0","FP_REGISTERED_BOXES", TEMP_BOXES, "0");
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
        //<mdataGetCalendarData>----------------------------------------------------------------
        var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
        var result_mdataGetCalendarData= imsApiService.mdataGetCalendarData(imsApiSessionContext, 
            stationNumber, 
            calendarDataResultKeys);

        var return_value = result_mdataGetCalendarData.return_value;

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

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(maxQuantity!=""){
            // <attribAppendAttributeValues> ---------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
            var attributeUploadValues = new Array("FP_MAX_QUANTITY", maxQuantity, "0");
            
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber,
                2,
                TEMP_BOX_ID,
                "-1",
                "-1",
                1,
                attributeUploadKeys,
                attributeUploadValues
                );

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
        // <attribAppendAttributeValues> ---------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("WIP_STATE", "", 0, "START_TIME",TEMP_CURRENT_TIME,0);
        
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
            stationNumber,
            2,
            TEMP_BOX_ID,
            "-1",
            "-1",
            1,
            attributeUploadKeys,
            attributeUploadValues
            );

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

        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            boxId : "" + TEMP_BOX_ID,
            
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfFpRegisterBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfFpGetBoxesInfo(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;       
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        var TEMP_SERIAL_NUMBER_AR = [];
        var TEMP_WORKORDER_AR = [];
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        

        // API integration -----------------------------------------------------
        if((boxId!="") && (boxId!="undefined") && (boxId!=undefined) ){
            // <shipActivateShippingLotAtKap> --------------------------------------
            var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
                stationNumber,
                boxId
                );

            var return_value = result_shipActivateShippingLotAtKap.return_value;

            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = "[shipActivateShippingLotAtKap] " + getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("FP_ACTIVE_BOX", boxId, "0");
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
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("FP_REGISTERED_BOXES");
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
        var TEMP_BOXES = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BOXES_LIST = TEMP_BOXES.split("|");
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var boxes = [];
       
		if(TEMP_BOXES!=""){
			for(var y=0; y<TEMP_BOXES_LIST.length; y++){
				
				var TEMP_SERIAL_NUMBER_AR = [];
				var TEMP_SNR_AR = [];
                var TEMP_WORKORDER_AR = [];
                var TEMP_PART_DESC_AR = [];
                var TEMP_PART_NUMBER_AR = [];
				// <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
				var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
				var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
					stationNumber, 
					TEMP_BOXES_LIST[y],
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

				for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
					TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
					TEMP_WORKORDER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+3]);
					TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+1]);
					TEMP_PART_DESC_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+0]);
				}

				for (x=0; x< TEMP_SERIAL_NUMBER_AR.length; x++){

					TEMP_SNR_AR.push(
						{
							serialNumber: TEMP_SERIAL_NUMBER_AR[x],
							partNumber : TEMP_PART_NUMBER_AR[x],
							partDescription : TEMP_PART_DESC_AR[x],
							workorders: TEMP_WORKORDER_AR[x],
							layer: "1"   
						}
					);
				}

				var TEMP_QTY = "" + TEMP_SERIAL_NUMBER_AR.length; 

				// <attribGetAttributeValues> ---------------------------------------------------------
				var attributeCodeArray = new Array("START_TIME");
				var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
				var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
					stationNumber, 
					2,
					TEMP_BOXES_LIST[y],
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
			
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_START_TIME = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            //<mdataGetCalendarData>----------------------------------------------------------------
            var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
            var result_mdataGetCalendarData= imsApiService.mdataGetCalendarData(imsApiSessionContext, 
                stationNumber, 
                calendarDataResultKeys);

            var return_value = result_mdataGetCalendarData.return_value;

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

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_CURRENT_TIME = parseInt(result_mdataGetCalendarData.calendarDataResultValues[0]);
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            TEMP_SETUP_TIME = msToTime(TEMP_CURRENT_TIME-TEMP_START_TIME);

            boxes.push(
                {
                    boxId : TEMP_BOXES_LIST[y],
                    setupTime : "" + TEMP_SETUP_TIME,
                    quantity: TEMP_QTY,
                    serialNumbers : TEMP_SNR_AR
                }
            );
			
			}
        }

        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            boxesInfo : boxes,
            
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfFpGetBoxesInfo failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
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
function msToTime(ms) {
    var d, h, m, s, dur;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    
    dur = "";
    if ((ms>59999) || (s>59)){
        dur = ("0" + s).slice(-2);
        dur = ("0" + m).slice(-2) + ":" + dur;
        dur = ("0" + h).slice(-2) + ":" + dur;
        if (d!=0) dur = ("0" + d).slice(-2) + " day(s) / " + dur;
    }
    else{
        dur = ("" + s).slice(-2) + " sec";
    }
    
        
    return dur;
   
}