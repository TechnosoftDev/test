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
 Sami Akkari            2019-04-25      Le Belier        cfCt                    First release 
 Sami Akkari            2019-05-31      Le Belier        cfCt                    Add cancel container 
 Sami Akkari            2019-07-08      Le Belier        cfCt                    Add Multiple baskets feature
 Sami Akkari            2019-07-13      Le Belier        cfCt                    Add Packing function + printing function
 Sami Akkari            2019-07-25      Le Belier        cfCt                    Activating WO for each SNR before packing
 Sami Akkari            2019-08-05      Le Belier        cfCt                    Add duration parameter
 Sami Akkari            2019-08-22      Le Belier        cfCt                    Add unpack all in unregisterContainer + Aging and htt oven management
 Sami Akkari            2019-08-28      Le Belier        cfCt                    Add register container wipStates
 
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


function cfCtPrintContainerInfo(jsonData){
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ------------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var containerId = data.containerId;

        // Intermediate variables -------------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        var TEMP_SERIAL_NUMBER_AR = [];
        var TEMP_WORKORDER_AR = [];
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        var TEMP_SNR_AR = [];
        var TEMP_SHIPPING_DATE_AR = [];
		
        // API integration --------------------------------------------------------
        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            containerId
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
        var attributeUploadValues = new Array("CT_ACTIVE_BOX", containerId, "0");
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
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER","SHIPPING_DATE");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
            stationNumber, 
            containerId,
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

        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
            TEMP_WORKORDER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+3]);
            TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+1]);
            TEMP_PART_DESC_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+0]);
			TEMP_SHIPPING_DATE_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+4]);
        }

        for (x=0; x< TEMP_SERIAL_NUMBER_AR.length; x++){
            
                TEMP_SNR_AR.push(
                    {
                        serialNumber: TEMP_SERIAL_NUMBER_AR[x],
                        partNumber : TEMP_PART_NUMBER_AR[x],
                        partDescription : TEMP_PART_DESC_AR[x],
                        workorders: TEMP_WORKORDER_AR[x],
						date : TEMP_SHIPPING_DATE_AR[x],
						layer: "" 
                    }
                );
            
        }
		TEMP_SNR_AR.sort(
			function(a,b) {
				return parseInt(a.date) - parseInt(b.date);
			}
		);
		for (var x=0; x< TEMP_SNR_AR.length; x++){
			if(x<=31){
				TEMP_SNR_AR[x].layer="1";
			}else if(x>31 && x<=63){
				TEMP_SNR_AR[x].layer="2";
			}else if(x>63 && x<=95){
				TEMP_SNR_AR[x].layer="3";
			}else if(x>95){
				TEMP_SNR_AR[x].layer="4";
			}
		}

        var TEMP_QTY = "" + TEMP_SERIAL_NUMBER_AR.length; 

        // <attribGetAttributeValues> ---------------------------------------------------------
        var attributeCodeArray = new Array("START_TIME");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            containerId,
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

    
    


        // JSON result ------------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            containerId : containerId,
            setupTime : "" + TEMP_SETUP_TIME,
            quantity: TEMP_QTY,
            serialNumbers : TEMP_SNR_AR
            
        };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfCtPrintContainerInfo failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfCtUnpackContainer(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var containerId = data.containerId;
        var serialNumber= data.serialNumber;
        
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";

        var TEMP_SERIAL_NUMBER_AR = [];
        var TEMP_WORKORDER_AR = [] ;
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        var TEMP_SNR_AR = [];
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
                    errorMessage : "" + getImsApiErrorText(result_trCheckSerialNumberState.serialNumberStateResultValues[0])
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }  

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
        
        if(containerId == TEMP_SHIPPING_LOT_NUMBER ){
            
            // <shipRemoveSerialNumberFromShippingLot> ------------------------------
            var result_shipRemoveSerialNumberFromShippingLot = imsApiService.shipRemoveSerialNumberFromShippingLot(imsApiSessionContext, 
                stationNumber, 
                containerId,
                serialNumber,
                "-1",
                "-1");

            var return_value = result_shipRemoveSerialNumberFromShippingLot.return_value;
            
            if (return_value != 0 ) {
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

            // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
            var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
            var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                stationNumber, 
                containerId,
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
                        layer: "" + Math.floor(Math.random()*4 + 1) 
                    }
                );
            }
            var TEMP_QTY = "" + TEMP_SERIAL_NUMBER_AR.length ;
          
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("START_TIME");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                containerId,
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

            var resultData = {
                errorCode : errorCode,
                errorMessage : errorMessage,
                serialNumber : serialNumber,
                containerId : containerId,
                setupTime : "" + TEMP_SETUP_TIME,
                quantity : TEMP_QTY,
                serialNumbers : TEMP_SNR_AR
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        
        }else{

            var resultData = {
                errorCode : -50003,
                errorMessage : "The selected Basket is not found or not active at the station."
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        
       
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfCtUnpackContainer failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfCtPackContainer(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var containerId = data.containerId;
        var serialNumber= data.serialNumber;
        
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";

        var TEMP_SERIAL_NUMBER_AR = [];
        var TEMP_WORKORDER_AR = [] ;
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        var TEMP_SNR_AR = [];
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
                    errorMessage : "" + getImsApiErrorText(result_trCheckSerialNumberState.serialNumberStateResultValues[0])
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }  
		
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
        
        if(containerId == TEMP_SHIPPING_LOT_NUMBER ){
            
            // <shipAddSerialNumberToShippingLot> ------------------------------
            var result_shipAddSerialNumberToShippingLot = imsApiService.shipAddSerialNumberToShippingLot(imsApiSessionContext, 
                stationNumber, 
                containerId,
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

            // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
            var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
            var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                stationNumber, 
                containerId,
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
                        layer: "" + Math.floor(Math.random()*4 + 1) 
                    }
                );
            }
            var TEMP_QTY = "" + TEMP_SERIAL_NUMBER_AR.length ;
          
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("START_TIME");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                containerId,
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

            var resultData = {
                errorCode : errorCode,
                errorMessage : errorMessage,
                serialNumber : serialNumber,
                containerId : containerId,
                setupTime : "" + TEMP_SETUP_TIME,
                quantity : TEMP_QTY,
                serialNumbers : TEMP_SNR_AR
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        
        }else{

            var resultData = {
                errorCode : -50003,
                errorMessage : "The selected basket is not found or not active at the station."
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        
       
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfCtUnpackContainer failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

	

function cfCtUnregisterContainer(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var containerId = data.containerId;
        var wipState = data.wipState;
        var duration = data.duration;
        var unpackMode = data.unpackMode;

        // Intermediate variables ----------------------------------------------

        var errorCode = 0;
        var errorMessage = "";
        var resultData = {};
        var TEMP_SERIAL_NUMBER_AR =[];
		var TEMP_WORKORDER_AR =[];
		var TEMP_PART_NUMBER_AR =[];
		var TEMP_PART_DESC_AR =[];
        // API integration -----------------------------------------------------
        logHandler.logMessage("wwwwwwwwww"+duration);
        logHandler.logMessage("wwwwwwwwww"+wipState);
        
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("CT_REGISTERED_CONTAINERS");
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
        var TEMP_CONTAINERS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        //basket check
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_CONTAINERS_LIST = TEMP_CONTAINERS.split("|");
        var k=0;
        for(var x=0; x<TEMP_CONTAINERS_LIST.length; x++){
            if(containerId==TEMP_CONTAINERS_LIST[x]){
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
        var NEW_TEMP_CONTAINERS = "";
        for(var x=0; x<TEMP_CONTAINERS_LIST.length; x++){
            if(TEMP_CONTAINERS_LIST[x]==containerId){
                NEW_TEMP_CONTAINERS += "";
            }else{
                NEW_TEMP_CONTAINERS += TEMP_CONTAINERS_LIST[x]+"|";    
            }
        }
        NEW_TEMP_CONTAINERS = NEW_TEMP_CONTAINERS.slice(0,NEW_TEMP_CONTAINERS.length-1); 
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if(wipState=="BEFORE_AGING"){
            
            
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("CT_HTT_START");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                containerId,
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
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_HTT_START = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);
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
                result.return_value = errorCode ;             result.errorString = errorMessage;             
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_CURRENT_TIME = parseInt(result_mdataGetCalendarData.calendarDataResultValues[0]);
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_HTT_TIME = TEMP_CURRENT_TIME-TEMP_HTT_START;

            logHandler.logMessage(duration);
            if(TEMP_HTT_TIME < parseInt(duration) ){
                logHandler.logMessage(duration);

                var resultData = {
                        errorCode : -1444,
                        errorMessage : "[HTT Basket is not ready to be removed |    HTT time =" + msToTime(TEMP_HTT_TIME) +" ] " 
                    };
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }

        if(wipState=="BEFORE_HARDNESS"){
            
            
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("CT_AGING_START");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                containerId,
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
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_AGING_START = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);
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
                result.return_value = errorCode ;             result.errorString = errorMessage;             
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_CURRENT_TIME = parseInt(result_mdataGetCalendarData.calendarDataResultValues[0]);
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_AGING_TIME = TEMP_CURRENT_TIME-TEMP_AGING_START;

            logHandler.logMessage(duration);
            if(TEMP_AGING_TIME < parseInt(duration) ){
                logHandler.logMessage(duration);

                var resultData = {
                        errorCode : -1444,
                        errorMessage : "[HTT Basket is not ready to be removed |    Aging time =" + msToTime(TEMP_AGING_TIME) +" ] " 
                    };
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }
        // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
            stationNumber, 
            containerId,
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
    
        for (var x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
            TEMP_WORKORDER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+3]);
            TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+1]);
            TEMP_PART_DESC_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+0]);
        }

        for(var x=0; x< TEMP_SERIAL_NUMBER_AR.length; x++){
            //<trActivateWorkorder>----------------------------------------------------------------
            var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
            var serialNumberUploadValues = new Array();
            var result_trActivateWorkorder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
                stationNumber,
                "-1", 
                TEMP_SERIAL_NUMBER_AR[x],
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

            if(stationNumber.slice(0,stationNumber.length-4)=="1000"){
                // <shipRemoveSerialNumberFromShippingLot> ------------------------------
                var result_shipRemoveSerialNumberFromShippingLot = imsApiService.shipRemoveSerialNumberFromShippingLot(imsApiSessionContext, 
                    stationNumber, 
                    containerId,
                    TEMP_SERIAL_NUMBER_AR[x],
                    "-1",
                    "-1");

                var return_value = result_shipRemoveSerialNumberFromShippingLot.return_value;
                
                if (return_value != 0 ) {
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
            }  
            //<trUploadState>----------------------------------------------------------------
            var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
            var serialNumberUploadValues = new Array();
            var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                stationNumber,
                2, 
                TEMP_SERIAL_NUMBER_AR[x],
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
        }

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("CT_ACTIVE_BOX","" ,"0", "CT_REGISTERED_CONTAINERS", NEW_TEMP_CONTAINERS, "");
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
        
        // <attribAppendAttributeValues> ---------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var attributeUploadValues = new Array("WIP_STATE",wipState,0);
        
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
            stationNumber,
            2,
            containerId,
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
        resultData["errorMessage"] = "";

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfCtUnregisterContainer failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfCtCancelContainer(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var containerId = data.containerId;
        var wipState = data.wipState;
        wipState = "CANCELED_BASKET";
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        var resultData = {};
        
        // API integration -----------------------------------------------------
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("CT_REGISTERED_CONTAINERS");
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
        var TEMP_CONTAINERS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        //basket registration check
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_CONTAINERS_LIST = TEMP_CONTAINERS.split("|");
        var k=0;
        for(var x=0; x<TEMP_CONTAINERS_LIST.length; x++){
           if(containerId==TEMP_CONTAINERS_LIST[x]){
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
        var NEW_TEMP_CONTAINERS = "";
        for(var x=0; x<TEMP_CONTAINERS_LIST.length; x++){
            if(TEMP_CONTAINERS_LIST[x]==containerId){
                NEW_TEMP_CONTAINERS += "";
            }else{
                NEW_TEMP_CONTAINERS += TEMP_CONTAINERS_LIST[x]+"|";    
            }
        }
        NEW_TEMP_CONTAINERS = NEW_TEMP_CONTAINERS.slice(0,NEW_TEMP_CONTAINERS.length-1); 
       // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("CT_ACTIVE_BOX","" ,"0","CT_REGISTERED_CONTAINERS", NEW_TEMP_CONTAINERS, "0");
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
            containerId);

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
            containerId,
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
        resultData["errorMessage"] = "";

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfCtCancelContainer failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}



function cfCtRegisterContainer(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var containerId = data.containerId;       
       
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";

        var TEMP_SERIAL_NUMBER_AR = [];
        var TEMP_WORKORDER_AR = [];
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        var TEMP_SNR_AR = [];
        // API integration -----------------------------------------------------
        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("WIP_STATE");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            containerId,
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
        var TEMP_WIP_STATE = "" + result_attribGetAttributeValues.attributeResultValues[1];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(stationNumber.slice(0,stationNumber.length-2)=="080020"){
            var wipState= "HTT";
            if(TEMP_WIP_STATE!="BEFORE_HTT"){
                
                errorCode = -20000;
                errorMessage = "[Basket was not not processed on HTT Packing] ";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }else if (stationNumber.slice(0,stationNumber.length-2)=="080021"){
            var wipState= "AGING";
            if(TEMP_WIP_STATE!="BEFORE_AGING"){
                
                errorCode = -20000;
                errorMessage = "[Basket was not not processed on HTT Oven ] ";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }else if (stationNumber.slice(0,stationNumber.length-4)=="1000"){
            var wipState = "SHOT_BLAST";
            if(TEMP_WIP_STATE!="BEFORE_SHOT_BLAST"){
                
                errorCode = -20000;
                errorMessage = "[Basket is blocked in hardness and tesile test or was wrongly processed ] ";
                
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
        var attributeCodeArray = new Array("CT_REGISTERED_CONTAINERS");
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
        var TEMP_CONTAINERS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        //basket registration check
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_CONTAINERS_LIST = TEMP_CONTAINERS.split("|");
        for(var x=0; x<TEMP_CONTAINERS_LIST.length; x++){
            if(containerId==TEMP_CONTAINERS_LIST[x]){
                errorCode = "-1050";
                errorMessage = "[Basket Already registered] ";
                
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
        
        if(TEMP_CONTAINERS=="" || TEMP_CONTAINERS==undefined){
            TEMP_CONTAINERS += containerId ;
        }else{
            TEMP_CONTAINERS += "|" + containerId;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            containerId
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
        // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
            stationNumber, 
            containerId,
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
                    layer: "" + Math.floor(Math.random()*4 + 1) 
                }
            );
        }

        var TEMP_QTY = "" + TEMP_SERIAL_NUMBER_AR.length;

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("CT_ACTIVE_BOX",containerId ,"0","CT_REGISTERED_CONTAINERS", TEMP_CONTAINERS, "0");
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
        if(stationNumber.slice(0,stationNumber.length-2)=="080020"){
            // <attribAppendAttributeValues> ---------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
            var attributeUploadValues = new Array("CT_HTT_START",TEMP_CURRENT_TIME,"0");
            
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber,
                2,
                containerId,
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
        if(stationNumber.slice(0,stationNumber.length-2)=="080021"){
            // <attribAppendAttributeValues> ---------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
            var attributeUploadValues = new Array("CT_AGING_START",TEMP_CURRENT_TIME,"0");
            
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber,
                2,
                containerId,
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
        var attributeUploadValues = new Array("START_TIME",TEMP_CURRENT_TIME,0,"WIP_STATE", wipState,0);
        
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
            stationNumber,
            2,
            containerId,
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
            containerId : "" + containerId,
            setupTime : "0 Sec",
            quantity : TEMP_QTY,
            serialNumbers : TEMP_SNR_AR

        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfCtRegisterContainer failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfCtGetContainersInfo(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var containerId = data.containerId;    
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
       
        var TEMP_WORKORDER_AR = [] ;
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        
        // API integration -----------------------------------------------------

        if((containerId!="") && (containerId!="undefined") && (containerId!=undefined) ){
            // <shipActivateShippingLotAtKap> --------------------------------------
            var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
                stationNumber,
                containerId
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
            var attributeUploadValues = new Array("CT_ACTIVE_BOX", containerId, "0");
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
        var attributeCodeArray = new Array("CT_REGISTERED_CONTAINERS");
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
        var TEMP_CONTAINERS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_CONTAINERS_LIST = TEMP_CONTAINERS.split("|");
        var baskets = [];
        
		if(TEMP_CONTAINERS!=""){
			for(var y=0; y<TEMP_CONTAINERS_LIST.length;y++){
				var TEMP_SNR_AR = [];
                var TEMP_SERIAL_NUMBER_AR = [];
                var TEMP_WORKORDER_AR = [];
                var TEMP_PART_DESC_AR = [];
                var TEMP_PART_NUMBER_AR = [];
				// <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
				var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
				var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
					stationNumber, 
					TEMP_CONTAINERS_LIST[y],
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
							layer: "" + Math.floor(Math.random()*4 + 1) 
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
					TEMP_CONTAINERS_LIST[y],
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

				baskets.push(
					{
						containerId : "" + TEMP_CONTAINERS_LIST[y],
						setupTime : "" + TEMP_SETUP_TIME,
						quantity : TEMP_QTY,
						serialNumbers : TEMP_SNR_AR
					}
				)
			}
		}
        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            basketsInfo : baskets
            
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfCtGetContainerInfo failed: " + e);
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