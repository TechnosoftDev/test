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
 Sami Akkari            2019-04-23      Le Belier        cfTs                   First Release 
 Faouzi Ben Mabrouk     2019-06-07      Le Belier        cfTs                   Update strToDateMs(date)
 Sami Akkari            2019-06-12      Le Belier        cfTs                   Update updateBatchMap 
 Sami Akkari            2019-06-25      Le Belier        cfTs                   Add WipState Interlocking
 Sami Akkari            2019-07-16      Le Belier        cfTs                   Fix wip states + batches removal accordingly 
 Sami Akkari            2019-07-26      Le Belier        cfTs                   Update updateBatchMap + deleteBatchFromMap
 Sami Akkari            2019-08-01      Le Belier        cfTs                   add dry time interlocking
 Sami Akkari            2019-08-29      Le Belier        cfTs                   Remove registration checks for X trolley
 Sami Akkari            2019-09-04      Le Belier        cfTs                   Update on updateBatchQueue map
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

function cfTsGetTrolleySetup(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var trolleyId = data.trolleyId;
        var positions = data.positions;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
        // API integration -----------------------------------------------------
        
        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("DC_TROLLEY_MAP","DC_PART_MAP");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DC_TROLLEY_MAP = result_attribGetAttributeValues.attributeResultValues[4];
        var TEMP_DC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_ERROR = 0;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        var TEMP_OBJECT = updateMap(positions, TEMP_DC_TROLLEY_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0 && TEMP_ERROR != 2){
   
            errorCode = -1000;
            errorMessage = "[Error in updatenMap] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        if(TEMP_ERROR == 2){

            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("DC_TROLLEY_MAP",TEMP_OBJECT.map,"0", "DC_PART_MAP",TEMP_OBJECT.map,"0");
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
                result.return_value = errorCode;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 

            var trolleys = [];
            for(y=0; y<positions.length;y++){
    
                //In case of empty trolley
                trolleys.push(
                    {
                        position:"" + positions[y],
                        trolley: {
                            trolleyId : "",
                            setupTime : "",
                            batches : []
                        }
                    }
                );                
            }
            var resultData = {
                errorCode : errorCode,
                errorMessage : errorMessage,
                trolleys : trolleys
            };
        
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_TROLLEY_ID = "";
        var TEMP_ERROR = 0;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // collecting the trolleys info

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var trolleys= [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        for(y=0; y<positions.length;y++){

            // parsing trolley info in each position
            TEMP_OBJECT = getIdFromPosition(positions[y], TEMP_DC_TROLLEY_MAP, TEMP_TROLLEY_ID, TEMP_ERROR);
            TEMP_ERROR = TEMP_OBJECT.err;

            if(TEMP_ERROR != 0 ){
   
                errorCode = -1001;
                errorMessage = "[Error in getIdFromPosition] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            TEMP_TROLLEY_ID = TEMP_OBJECT.trolleyId;
            
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
            if(TEMP_TROLLEY_ID!=""){
                // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
                var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER", "SERIAL_NUMBER_TYPE", "WORKORDER_NUMBER");
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
                    result.return_value = errorCode ;             result.errorString = errorMessage;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }   
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var batches =[];
                var TEMP_BATCH_ID_AR = [];
                var TEMP_PART_NUMBER_AR = [];
                var TEMP_PART_DESC_AR = [];
                var TEMP_WORKORDER_NUMBER_AR = [];
                var TEMP_BATCH_QTY_AR = [] ;
                var TEMP_SCRAP_QTY_AR = [] ;
                var TEMP_SETUP_TIME;
                //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
                    TEMP_BATCH_ID_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
                    TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+1]);
                    TEMP_PART_DESC_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+0]);
                    TEMP_WORKORDER_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+4]);

                    // <attribGetAttributeValues> ---------------------------------------------------------
                    var attributeCodeArray = new Array("PASS_QTY","SCRAP_QTY");
                    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                    var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                        stationNumber, 
                        2,
                        result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2],
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
                    
                    TEMP_BATCH_QTY_AR.push(result_attribGetAttributeValues.attributeResultValues[1]) ;
                    TEMP_SCRAP_QTY_AR.push(result_attribGetAttributeValues.attributeResultValues[4]) ;
                }  
                
                //Filling the batches infos for the trolley
                for (x=0; x< TEMP_BATCH_ID_AR.length; x++){      

                    batches.push(
                        {
                        batchId : "" + TEMP_BATCH_ID_AR[x],
                        partNumber: "" + TEMP_PART_NUMBER_AR[x],
                        partDescription: "" + TEMP_PART_DESC_AR[x],
                        workOrder: "" + TEMP_WORKORDER_NUMBER_AR[x],
                        qty: "" + TEMP_BATCH_QTY_AR[x],
                        scrapQty : ""+ TEMP_SCRAP_QTY_AR[x]
                        }
                    );
                }

                // <attribGetAttributeValues> ---------------------------------------------------------
                var attributeCodeArray = new Array("START_TIME");
                var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_TROLLEY_ID,
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
                    result.return_value = errorCode;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                } 

                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_CURRENT_TIME = parseInt(result_mdataGetCalendarData.calendarDataResultValues[0]);
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                TEMP_SETUP_TIME = msToTime(TEMP_CURRENT_TIME-TEMP_START_TIME);

                //Filling the list of trolleys and their infos
                trolleys.push(
                    {
                        position: "" + positions[y],
                        trolley: {
                            trolleyId : TEMP_TROLLEY_ID,
                            setupTime : "" + TEMP_SETUP_TIME,
                            batches : batches
                        }
                    }
                );

            }else{
                //In case of empty trolley
               
                trolleys.push(
                    {
                        position:"" + positions[y],
                        trolley: {
                            trolleyId : "",
                            setupTime : "",
                            batches : []
                        }
                    }
                );
            } 
        }

        var k = 0;
        // JSON result ---------------------------------------------------------
        if(trolleyId== undefined || trolleyId==""){
            var resultData = {
                errorCode : errorCode,
                errorMessage : errorMessage,
                trolleys : trolleys
            };  
        }else{
            for(j=0; j< trolleys.length;j++){ 
                if(trolleyId==trolleys[j].trolley.trolleyId){
                    k+=1;
                    var resultData = {
                        errorCode : errorCode,
                        errorMessage : errorMessage,
                        trolleys : trolleys[j]
                    };  
                }
            }
            if(k==0){ 
                errorCode = -1002;
                errorMessage = "trolley not found in the configuration";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
                
            }

        }
       
        result.return_value = errorCode ;             result.errorString = errorMessage;
        result.outArgs = [JSON.stringify(resultData)];
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTsGetTrolleySetup failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfTsRemoveTrolley(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
                     
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var position = data.position;
        var trolleyId = data.trolleyId;
        var wipState = data.wipState;
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration -----------------------------------------------------
        // <shipActivateShippingLotAtKap> -----------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            trolleyId
            );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipActivateShippingLotAtKap] " + getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("DC_TROLLEY_MAP","DC_PART_MAP");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DC_TROLLEY_MAP = result_attribGetAttributeValues.attributeResultValues[4];
        var TEMP_DC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_UPDATE = position + ":";
        var TEMP_OLDTROLLEYID = "";
        var TEMP_TROLLEY_ID = "";
        var TEMP_ERROR = 0;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //checking if trolley matches  position
        TEMP_OBJECT = getIdFromPosition(position, TEMP_DC_TROLLEY_MAP, TEMP_TROLLEY_ID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0 ){

            errorCode = -1001;
            errorMessage = "[Error in getIdFromPosition] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        TEMP_TROLLEY_ID = TEMP_OBJECT.trolleyId;

        if(TEMP_TROLLEY_ID != trolleyId && TEMP_TROLLEY_ID != ""){
            errorCode = -1002;
            errorMessage = "The trolley Id selected does not match the trolley Id in the configuration";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //Removing the trolley from the selected position in the configuration
        var TEMP_OBJECT = updatePositionMap(TEMP_UPDATE, TEMP_DC_TROLLEY_MAP, TEMP_OLDTROLLEYID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0){
   
            errorCode = -1003;
            errorMessage = "[Error in updatePositionMap] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvv saving old trolley and the new part map vvvvvvvvvvvvvvvv
        TEMP_DC_TROLLEY_MAP = TEMP_OBJECT.map; 
        TEMP_OLDTROLLEYID = TEMP_OBJECT.oldTrolleyId;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(TEMP_OLDTROLLEYID == ""){
   
            errorCode = -1005;
            errorMessage = "No trolley found in the selected position";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // updating the the mapping to empty in the position of the trolley that was finished 
        TEMP_OBJECT = updatePartMap(TEMP_UPDATE, TEMP_DC_PART_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;
        
        if(TEMP_ERROR != 0){
   
            errorCode = -1004;
            errorMessage = "[Error updatePartMap] "+ TEMP_OBJECT.message;
            
            var resultData = {

                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_DC_PART_MAP = TEMP_OBJECT.map;       
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
        var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_ID_AR = [];
        var TEMP_PART_NUMBER_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("BATCH_QUEUE_MAP");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
         var TEMP_BATCH_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];

        if(TEMP_OLDTROLLEYID!=""){

            // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
            var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER", "SERIAL_NUMBER_TYPE", "WORKORDER_NUMBER");
            var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                stationNumber, 
                TEMP_OLDTROLLEYID,
                serialNumberResultKeys);

            var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

            if (return_value != 0) {

                errorCode = return_value;
                errorMessage = "[shipGetSerialNumberDataForShippingLot] " + getImsApiErrorText(return_value);
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }   

            for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
                TEMP_BATCH_ID_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
                TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+1]);
            }
            var TEMP_QUANTITY = 0;

            for (x=0; x< TEMP_BATCH_ID_AR.length; x++){

                TEMP_OBJECT = deleteBatchFromMap(TEMP_BATCH_MAP, TEMP_BATCH_ID_AR[x], TEMP_PART_NUMBER_AR[x], TEMP_ERROR );
                TEMP_ERROR = TEMP_OBJECT.err;

                if(TEMP_ERROR != 0){
   
                    errorCode = -1008;
                    errorMessage = "[Error deleteBatchFromMap] "+ TEMP_OBJECT.message;
                    
                    var resultData = {
        
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;             result.errorString = errorMessage;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }

                TEMP_BATCH_MAP = TEMP_OBJECT.map;

                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("BATCH_QUEUE_MAP",TEMP_BATCH_MAP,"0");
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
                    result.return_value = errorCode ;             result.errorString = errorMessage;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                } 
            }

            for (x=0; x< TEMP_BATCH_ID_AR.length; x++){
                // <attribGetAttributeValues> ---------------------------------------------------------
                var attributeCodeArray = new Array("PASS_QTY");
                var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_BATCH_ID_AR[x],
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
                logHandler.logMessage("vvvvvvvvvvvv"+parseInt(""+result_attribGetAttributeValues.attributeResultValues[1]));
                if(parseInt(""+result_attribGetAttributeValues.attributeResultValues[1])<0){
                    errorCode = -2000;
                    errorMessage = "[Negative Quantity in the batch " + TEMP_BATCH_ID_AR[x]+" ]" ;

                    var resultData = {

                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;             result.errorString = errorMessage;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }else{
                    TEMP_QUANTITY += parseInt("" + result_attribGetAttributeValues.attributeResultValues[1]);
                    logHandler.logMessage("vvvvvvvvvvvv"+TEMP_QUANTITY);
                }
            }
            logHandler.logMessage("vvvvvvvvvvvv"+TEMP_QUANTITY);
            if(TEMP_QUANTITY==0 && trolleyId.slice(trolleyId.length-1,trolleyId.length)!="X"){
                for (x=0; x< TEMP_BATCH_ID_AR.length; x++){

                    // <shipRemoveSerialNumberFromShippingLot> ------------------------------
                    var result_shipRemoveSerialNumberFromShippingLot = imsApiService.shipRemoveSerialNumberFromShippingLot(imsApiSessionContext, 
                        stationNumber, 
                        trolleyId,
                        TEMP_BATCH_ID_AR[x],
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
                        result.return_value = errorCode ;             result.errorString = errorMessage;
                        result.outArgs = [JSON.stringify(resultData)];
                        return result;
                    }  
                }
                
                wipState = "BEFORE_SAND_CORE";

            }else{
                wipState = "TO_SCRAP";

            }

        }

        // <shipDeactivateShippingLotAtKap> ------------------------------------    
        var result_shipDeactivateShippingLotAtKap = imsApiService.shipDeactivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            TEMP_OLDTROLLEYID);

        var return_value = result_shipDeactivateShippingLotAtKap.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipDeactivateShippingLotAtKap] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 

        // Appending the updated part and position configurations

        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("DC_TROLLEY_MAP",TEMP_DC_TROLLEY_MAP,"0", "DC_PART_MAP",TEMP_DC_PART_MAP,"0");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
      
        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("END_TIME",TEMP_CURRENT_TIME ,"0","WIP_STATE",wipState,"0");
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
            errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // JSON result ---------------------------------------------------------
        var resultData = {
           errorCode : errorCode,
           errorMessage : errorMessage
            
        };

        result.return_value = errorCode ;             result.errorString = errorMessage;
        result.outArgs = [JSON.stringify(resultData)];
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTsRemoveTrolley failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfTsCancelTrolley(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
                     
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var position = data.position;
        var trolleyId = data.trolleyId;
        
        // Intermediate variables ------------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration -------------------------------------------------------

        // <shipActivateShippingLotAtKap> ----------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            trolleyId
            );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipActivateShippingLotAtKap] " + getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("WIP_STATE_BKP");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            trolleyId,
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
        var TEMP_WIP_STATE_BKP = result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("DC_TROLLEY_MAP","DC_PART_MAP");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_DC_TROLLEY_MAP = result_attribGetAttributeValues.attributeResultValues[4];
        var TEMP_DC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_UPDATE = position + ":";
        var TEMP_OLDTROLLEYID = "";
        var TEMP_TROLLEY_ID = "";
        var TEMP_ERROR = 0;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //checking if trolley matches  position
        TEMP_OBJECT = getIdFromPosition(position, TEMP_DC_TROLLEY_MAP, TEMP_TROLLEY_ID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0 ){

            errorCode = -1001;
            errorMessage = "[Error in getIdFromPosition] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        TEMP_TROLLEY_ID = TEMP_OBJECT.trolleyId;

        if(TEMP_TROLLEY_ID != trolleyId && TEMP_TROLLEY_ID != ""){
            errorCode = -1002;
            errorMessage = "The trolley Id selected does not match the trolley Id in the configuration";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //Removing the trolley from the selected position in the configuration
        var TEMP_OBJECT = updatePositionMap(TEMP_UPDATE, TEMP_DC_TROLLEY_MAP, TEMP_OLDTROLLEYID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0){
   
            errorCode = -1003;
            errorMessage = "[Error in updatePositionMap] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvv saving old trolley and the new part map vvvvvvvvvvvvvvvv
        TEMP_DC_TROLLEY_MAP = TEMP_OBJECT.map; 
        TEMP_OLDTROLLEYID = TEMP_OBJECT.oldTrolleyId;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(TEMP_OLDTROLLEYID == ""){
   
            errorCode = -1005;
            errorMessage = "No trolley found in the selected position";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // updating the the mapping to empty in the position of the trolley that was finished 
        TEMP_OBJECT = updatePartMap(TEMP_UPDATE, TEMP_DC_PART_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;
        
        if(TEMP_ERROR != 0){
   
            errorCode = -1004;
            errorMessage = "[Error updatePartMap] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };

            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;

        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_DC_PART_MAP = TEMP_OBJECT.map;       
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
        var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("BATCH_QUEUE_MAP");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_ID_AR = [];
        var TEMP_PART_NUMBER_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        if(TEMP_OLDTROLLEYID!=""){

            // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
            var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER", "SERIAL_NUMBER_TYPE", "WORKORDER_NUMBER");
            var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                stationNumber, 
                TEMP_OLDTROLLEYID,
                serialNumberResultKeys);

            var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

            if (return_value != 0) {

                errorCode = return_value;
                errorMessage = "[shipGetSerialNumberDataForShippingLot] " + getImsApiErrorText(return_value);
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }   

            for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
                TEMP_BATCH_ID_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
                TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+1]);
            }
            
            for (x=0; x< TEMP_BATCH_ID_AR.length; x++){

                TEMP_OBJECT = deleteBatchFromMap(TEMP_BATCH_MAP, TEMP_BATCH_ID_AR[x], TEMP_PART_NUMBER_AR[x], TEMP_ERROR );
                TEMP_ERROR = TEMP_OBJECT.err;

                if(TEMP_ERROR != 0){
   
                    errorCode = -1008;
                    errorMessage = "[Error deleteBatchFromMap] "+ TEMP_OBJECT.message;
                    
                    var resultData = {
        
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;             result.errorString = errorMessage;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }

                TEMP_BATCH_MAP = TEMP_OBJECT.map;

                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("BATCH_QUEUE_MAP",TEMP_BATCH_MAP,"0");
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
                    result.return_value = errorCode ;             result.errorString = errorMessage;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                } 
            }
        }

        // <shipDeactivateShippingLotAtKap> ------------------------------------    
        var result_shipDeactivateShippingLotAtKap = imsApiService.shipDeactivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            TEMP_OLDTROLLEYID);

        var return_value = result_shipDeactivateShippingLotAtKap.return_value;
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipDeactivateShippingLotAtKap] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("DC_TROLLEY_MAP",TEMP_DC_TROLLEY_MAP,"0", "DC_PART_MAP",TEMP_DC_PART_MAP,"0");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("END_TIME",TEMP_CURRENT_TIME ,"0","WIP_STATE","CANCELLED_TS","0");
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
            errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // JSON result ---------------------------------------------------------
        var resultData = {
           errorCode : errorCode,
           errorMessage : errorMessage
            
        };

        result.return_value = errorCode ;             result.errorString = errorMessage;
        result.outArgs = [JSON.stringify(resultData)];
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTsCancelTrolley failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfTsRegisterTrolley(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ------------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var position = data.position;
        var trolleyId = data.trolleyId;
        var wipState = data.wipState; 
        wipState ="";

        // Intermediate variables -------------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
        var TEMP_DC_TROLLEY_MAP;
        var TEMP_DC_PART_MAP;
        
        var TEMP_UPDATE;
        // API integration --------------------------------------------------------

        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("WIP_STATE");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            trolleyId,
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

        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_WIP_STATE = "" + result_attribGetAttributeValues.attributeResultValues[1];   
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(TEMP_WIP_STATE!="BEFORE_CASTING"&&TEMP_WIP_STATE!="BEFORE_PAINTING"&&TEMP_WIP_STATE!="CANCELLED_TS"&& trolleyId.slice(trolleyId.length-1,trolleyId.length)!="X"){
            errorCode = "-1020";
            errorMessage = " Trolley is not released from sand core process." ;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        if(TEMP_WIP_STATE!="CANCELLED_TS"){
            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("END_TIME");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                trolleyId,
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
            var TEMP_END_TIME = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);
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
            var TEMP_DRY_TIME = TEMP_CURRENT_TIME-TEMP_END_TIME;

            if(TEMP_DRY_TIME < 14400000 && trolleyId.slice(trolleyId.length-1,trolleyId.length)!="X"){
                

                var resultData = {
                        errorCode : -1444,
                        errorMessage : "[Trolley is not ready for casting |    Dry time =" + msToTime(TEMP_DRY_TIME) +" ] " 
                    };
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }
        // <shipActivateShippingLotAtKap> -----------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            trolleyId
            );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipActivateShippingLotAtKap] " + getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 

        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("DC_TROLLEY_MAP","DC_PART_MAP");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_DC_TROLLEY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[4];     
        TEMP_DC_PART_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1] ;
        TEMP_UPDATE = position + ":" + trolleyId;       
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_OLDTROLLEYID = "";
        var TEMP_ERROR = 0;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //Updating a position (new trolley ID) in the configuration
        var TEMP_OBJECT = updatePositionMap(TEMP_UPDATE, TEMP_DC_TROLLEY_MAP, TEMP_OLDTROLLEYID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0){
   
            errorCode = -1003;
            errorMessage = "[Error in updatePositionMap] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             
            result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvv saving old trolley and the new part map vvvvvvvvvvvvvvvv
        TEMP_DC_TROLLEY_MAP = TEMP_OBJECT.map; 
        TEMP_OLDTROLLEYID = TEMP_OBJECT.oldTrolleyId;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 

        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("WIP_STATE");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            trolleyId,
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
        var TEMP_WIP_STATE_BKP = result_attribGetAttributeValues.attributeResultValues[1] ;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER", "SERIAL_NUMBER_TYPE", "WORKORDER_NUMBER");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }   

        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("BATCH_QUEUE_MAP");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var batches = [];
        var TEMP_BATCH_ID_AR = [];
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        var TEMP_WORKORDER_NUMBER_AR = [];
        var TEMP_BATCH_QTY_AR = [];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
            TEMP_BATCH_ID_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
            TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+1]);
            TEMP_PART_DESC_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+0]);
            TEMP_WORKORDER_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+4]);

            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("PASS_QTY");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2],
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
            
            TEMP_BATCH_QTY_AR.push( "" +result_attribGetAttributeValues.attributeResultValues[1]) ;
        }    
        //Verification for any duplication in part numbers and creating posData
        TEMP_OBJECT = checkTrolley(stationNumber, trolleyId, position, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0){
   
            errorCode = -1006;
            errorMessage = "[Error in checkTrolley] "+ TEMP_OBJECT.message;
            
            var resultData = {
                trolleyId : trolleyId,
                errorCode : errorCode,
                errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_POS_DATA = TEMP_OBJECT.posData;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // updating the new part numbers of the new trolley in the mapping in the position that was changed 
        TEMP_OBJECT = updatePartMap(TEMP_POS_DATA, TEMP_DC_PART_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;
        
        
        if(TEMP_ERROR != 0){
   
            errorCode = -1004;
            errorMessage = "[Error in updatePartMap] "+ TEMP_OBJECT.message;
            
            var resultData = {

                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_DC_PART_MAP = TEMP_OBJECT.map;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //filling the batches infos
        for (x=0; x< TEMP_BATCH_ID_AR.length; x++){    

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
            var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("START_TIME",TEMP_CURRENT_TIME,"0");
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                TEMP_BATCH_ID_AR[x],
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
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 

            batches.push(
                {
                batchId : "" + TEMP_BATCH_ID_AR[x],
                partNumber: "" + TEMP_PART_NUMBER_AR[x],
                partDescription: "" + TEMP_PART_DESC_AR[x],
                workOrder: "" + TEMP_WORKORDER_NUMBER_AR[x],
                qty: "" + TEMP_BATCH_QTY_AR[x]
                }
            ); 

            // preparing data for PLC attributes
            TEMP_OBJECT = updateBatchMap(TEMP_BATCH_MAP, TEMP_BATCH_ID_AR[x], TEMP_PART_NUMBER_AR[x], "0", TEMP_ERROR );
            TEMP_ERROR = TEMP_OBJECT.err;

            if(TEMP_ERROR != 0){

                errorCode = -1012;
                errorMessage = "[Error updateBatchMap] "+ TEMP_OBJECT.message;
                
                var resultData = {
    
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            TEMP_BATCH_MAP = TEMP_OBJECT.map;

            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("BATCH_QUEUE_MAP",TEMP_BATCH_MAP,"0");
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
                result.return_value = errorCode ;             result.errorString = errorMessage;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
            
        }
        
        
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("DC_TROLLEY_MAP",TEMP_DC_TROLLEY_MAP,"0","DC_PART_MAP",TEMP_DC_PART_MAP,"0");
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
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("WIP_STATE",wipState,"0", "WIP_STATE_BKP",TEMP_WIP_STATE_BKP,"0");
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
            errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("START_TIME",TEMP_CURRENT_TIME ,"0", "END_TIME","-1","0" );
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
            errorMessage = "[attribAppendAttributeValues] " + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;             result.errorString = errorMessage;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 

        
        
        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage: errorMessage,
            trolleyInfo :{
                trolleyId: "" + trolleyId,
                setupTime : "0 sec",
                batches : batches
                }
        };

        result.return_value = errorCode ;             result.errorString = errorMessage;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTsRegisterTrolley failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
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
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
    if (result != null) {
        errorText = result.errorString;
    }
    return errorText;
    
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

function updateMap(pos, map, err){
    map = "" + map;

    var trolley_pos = []; //list of all trolley positions in map
    var trolley_id = []; // list of all trolley ids in map

    var pos_id = map.split("|");//["POS.:ID", "POS.:ID", "POS.:ID", "POS.:ID"]
    
    
    // check for duplicate positions
    for(i=0; i < pos.length; i++){
        k=0
        for(j=0; j < pos_id.length; j++){
            if(pos[i]==pos[j]){
               k+=1;
            } 
        }
        if(k>=2){
            return {
                map:map,
                err:1,
                message:"Error in updateMap : Duplicate positions" 
            };
        }
    }
    for(i=0; i < pos_id.length; i++){
        trolley_pos.push(pos_id[i].split(":")[0]);
        trolley_id.push(pos_id[i].split(":")[1]);
    }

    for (i=0; i < pos.length; i++){
        if(pos[i]!=trolley_pos[i] || pos.length != trolley_pos.length){
            err= 2;
        }
    }
   
    var new_map = "";
    if (err == 2){
        for (i=0; i < pos.length; i++){
            new_map += pos[i] + ":" +"|";

        }

        new_map = new_map.slice(0,new_map.length-1); 
        map = new_map;

        return {
            map:map,
            err:err,
            message: "Configuration reinitialized"
        };
    } 

    err=0;
 
    return {
        map:map,
        err:err,
        message: "PASS : Configuration is valid"
    };
}

function updatePositionMap(posData, map, oldTrolleyId, err){

    map = "" + map;
    var pos_id = map.split("|");//["POS.:ID", "POS.:ID", "POS.:ID", "POS.:ID"]
    var trolley_pos = []; //list of all trolley positions in map
    var trolley_id = []; // list of all trolley ids in map
    
    var position= posData.toString().split(":")[0];
    var id = posData.toString().split(":")[1];
    
    var update_flag = false;
 
    for(i=0; i<pos_id.length; i++){
        trolley_pos.push(pos_id[i].split(":")[0]);
        trolley_id.push(pos_id[i].split(":")[1]);
    }

    for(i=0; i<trolley_pos.length; i++){
        
        if(trolley_pos[i] == position ){
            
            trolley_pos[i] = position;
            oldTrolleyId = trolley_id[i]; 
            trolley_id[i] = id;
            update_flag = true;
        } 
    }
    if (update_flag == false){
        err = 1 ;
        return {
                map:map,
                err:err,
                message:"Position not found"
            };
    }

    var new_map = "";
    for (i=0; i < trolley_pos.length; i++){
        new_map += trolley_pos[i] + ":"+ trolley_id[i] +"|";
    }

    new_map = new_map.slice(0,new_map.length-1); 
    map = new_map ;

    return {
        map:map,
        err:err,
        oldTrolleyId :oldTrolleyId,
        message :"PASS"
    };
}

function getIdFromPosition(pos, map, trolleyId, err){

    map = map +"";
    var pos_id = map.split("|");//["POS.:ID", "POS.:ID", "POS.:ID", "POS.:ID"]
    var trolley_pos = []; //list of all trolley positions in map
    var trolley_id = []; // list of all trolley ids in map
    
    var position_flag = false; 
  
    for(i=0; i<pos_id.length; i++){
        trolley_pos.push(pos_id[i].split(":")[0]);
        trolley_id.push(pos_id[i].split(":")[1]);
    }

    for(i=0; i<trolley_pos.length; i++){
        
        if(trolley_pos[i] == pos){
            
            trolleyId = trolley_id[i];
            position_flag = true;
        } 
    }
    if (position_flag ==false){
        err = 1;
        return{
            map: map,
            trolleyId: "",
            err: err,
            message: "Position not found in the configuration"
        } 
    }
    
    return {
        map:map,
        trolleyId: "" + trolleyId,
        err:err,
        message: "PASS" 
    }
}

function getScrapForPartNumber(scrapQuantity, partNumber, scrapQty){
  
    var part_number = "";
    var part_number_flag = false;
    var err = 1;

    for(i=0; i < scrapQuantity.length; i++){

        part_number = scrapQuantity[i].partNumber;
        scrapQty = scrapQuantity[i].qty;
      
        if (partNumber == part_number){
            err = 0;
            part_number_flag = true;
            return {
                err : err ,
                part_number : part_number,
                scrapQty : scrapQty,
                message:"PASS"
            }
        }   
    }
    return {
        err : err ,
        part_number : part_number,
        scrapQty : 0,
        message:"No scrap quantity found for part number" + partNumber
    }
}

function checkTrolley(station, trolleyId, position, err){
    
    var result = new Result_customFunctionCommon();


    // <attribGetAttributeValues> -------------------------------------------------------------------
    var attributeCodeArray = new Array("DC_PART_MAP");
    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
    var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
        station, 
        7,
        station,
        "-1",
        attributeCodeArray,
        1,
        attributeResultKeys);

    var return_value = result_attribGetAttributeValues.return_value;

    if (return_value != 0) {
        var errorCode = return_value;
        var errorMessage = "[]" + getImsApiErrorText(return_value);

        var resultData = {
                 errorCode : errorCode,
                 errorMessage : "" + errorMessage
            };
        result.return_value = errorCode ;             result.errorString = errorMessage;
        result.outArgs = [JSON.stringify(resultData)];
        return result;
    } 

    TEMP_DC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1] ;
    var posData = "";
    temp_obj = createPosData(station, trolleyId, position, posData);
    check = checkPartNumberForPosition(TEMP_DC_PART_MAP, temp_obj.posData, temp_obj.err);

    err = check.err;

    if (err==0){
        return temp_obj ;
    }else{
        return check;
    }  
}

function createPosData(station, trolleyId, position, posData){

    var result = new Result_customFunctionCommon();

    // <shipGetSerialNumberDataForShippingLot> -------------------------------------------------------------------
    
    var serialNumberResultKeys = new Array("SERIAL_NUMBER", "PART_NUMBER");
    var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
        station, 
        trolleyId,
        serialNumberResultKeys);



    var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

    if (return_value != 0) {
        var errorCode = return_value;
        var errorMessage = "[]" + getImsApiErrorText(return_value);

        var resultData = {
                errorCode : errorCode,
                errorMessage : "" + errorMessage
            };
        result.return_value = errorCode ;             result.errorString = errorMessage;
        result.outArgs = [JSON.stringify(resultData)];
        return result;
    } 

    var TEMP_BATCH_ID_AR = [];
    var TEMP_PART_NUMBER_AR = [];
    
    //Filling the list of batches and part numbers

    for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/2; x++){

        TEMP_BATCH_ID_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*2+0]);
        TEMP_PART_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*2+1]);
    }

    posData = position + ":";

    for(x=0; x<TEMP_PART_NUMBER_AR.length; x++){
        posData += TEMP_PART_NUMBER_AR[x];

        if (TEMP_PART_NUMBER_AR[x+1] != null){
            posData += ",";
        }
    }
    
    return {
        station: station,
        trolleyId: trolleyId,
        position: position,
        posData: posData,
        err:0,
        message :"PASS"
    } ;

}

function updatePartMap(posData, map, err){
    
    map = "" + map;
    var pos_id = map.split("|");//["POS.:ID", "POS.:ID", "POS.:ID", "POS.:ID"]
    var trolley_pos = []; //list of all trolley positions in map
    var trolley_part_numbers = []; // list of all  part numbers in trolley

    var position = posData.toString().split(":")[0];
    var part_numbers = posData.toString().split(":")[1];
    var update_flag = false;
 
    for(i=0; i<pos_id.length; i++){
        trolley_pos.push(pos_id[i].split(":")[0]);
        trolley_part_numbers.push(pos_id[i].split(":")[1]);
    }
   for(i=0; i<trolley_pos.length; i++){
        
        if(trolley_pos[i] == position ){
            
            trolley_pos[i] = position;
            trolley_part_numbers[i] = part_numbers;
            update_flag = true;
            err = 0;
            } 
    }
    if (update_flag == false){
        err = 1 ;
        return {
                map:map,
                err:err,
                message:"Position not found"
            };
    }

    var new_map = "";
    for (i=0; i < trolley_pos.length; i++){
        new_map += trolley_pos[i] + ":"+ trolley_part_numbers[i] +"|";
    }

    new_map = new_map.slice(0,new_map.length-1); 

    return {
        map:new_map,
        err:0,
        message :"PASS"
    };
}

function checkPartNumberForPosition(map, posData, err){
    map = "" + map; 
    var pos_id = map.split("|");//["POS:PNs", "POS:PNs", "POS.:ID", "POS.:ID"]
    var trolley_pos = []; //list of all trolley positions in map
    var trolley_part_numbers = []; // list of all part numbers in the trolley

    var position = posData.toString().split(":")[0]; 
    var part_numbers = posData.toString().split(":")[1]; 
    var position_parts = part_numbers.split(",");
    
    var check_flag = false;
    var all_parts = []; 
    
    
    for(i=0; i<position_parts.length; i++){
      
        k=0
        for(j=0; j < position_parts.length; j++){
            if(position_parts[i]==position_parts[j]){ 
               k+=1;
            } 
        }
        if(k>=2){
            return {
                map:map,
                err:1,
                message:"Error in checkPartNumberForPosition : Duplicate part number in the trolley"

            };        
        }
    }
    
    for(i=0; i<pos_id.length; i++){
        trolley_pos.push(pos_id[i].split(":")[0]);
        trolley_part_numbers.push(pos_id[i].split(":")[1]);
    }
  
    for(i=0; i<trolley_pos.length; i++){
      var trolley_pos_parts = trolley_part_numbers[i].split(",");
      
      for(j=0; j<trolley_pos_parts.length; j++){
          
          all_parts.push(trolley_pos_parts[j]); 
         
      }
    }

    for(i=0; i<all_parts.length; i++){ 

       for(j=0; j<position_parts.length; j++){
         
           if(position_parts[j]==all_parts[i] && all_parts[i]!=""){
                check_flag = true;
                err =1;
             
                return{
                  map:map,
                  err:err,
                  message:"At least one part number is already used in one of the trolleys registered"
                };   
            } 
        }
    } 
  
    if (check_flag == false){
        err = 0 ;
        return {
                map:map,
                err:err,
                message:"Parts numbers can be introduced to the trolley"
        };
    }
}

function getLatestWo(TEMP_WO_AR, TEMP_START_DATE_AR){

    var latestWo = TEMP_WO_AR[0];
    var latestDate = TEMP_START_DATE_AR[0];

    for(i=1; i<TEMP_WO_AR.length;i++){
        if(latestDate<TEMP_START_DATE_AR[i]){
            latestWo = TEMP_WO_AR[i];
            latestDate = TEMP_START_DATE_AR[i];
        }
    }
    return latestWo
}


function updateBatchMap(map, batchId, partNumber, quantity, err){
    map += "";
  
    var pn_batch = map.split("|");
    var pns = []; // list of pns in the attribute
    var batches = [];// list of batches in the attribute
    var quantities = [];
    var update_flag = false;
  
    // initialization
    if(map==""){
      
        var new_map = partNumber + "," + quantity +":"+batchId;
        return{
            map: new_map,
            err: 0,
            message : "Initializing mapping"
        }
    }
  
    for(var i = 0; i < pn_batch.length; i++){   
        pns.push((pn_batch[i].split(":")[0]).split(",")[0]);//[pn1,pn2,pn3]
        quantities.push((pn_batch[i].split(":")[0]).split(",")[1]);//[pn1,pn2,pn3]
        batches.push(pn_batch[i].split(":")[1]);//[batch1 batch2, batch3, batch4 batch5]
    }

    for(var i = 0; i < pns.length; i++){
      
        if(partNumber== pns[i]){
         
            
                batches[i]= batchId;
              
            
          
            update_flag = true;
            err = 0
        }
    }
    if (update_flag == false){ 
        map += "|" + partNumber + "," + quantity + ":" + batchId;
        return{
            map:map,
            err:0,
            message :"PASS"
        }
    }
    var new_map = "";

    for (i=0; i < pns.length; i++){
        new_map += pns[i] + "," + quantities[i] + ":"+ batches[i] +"|";
    }

    new_map = new_map.slice(0,new_map.length-1); 

    return {
        map:new_map,
        err:0,
        message :"PASS"
    };
}



function deleteBatchFromMap(map, batchId, partNumber, err){
    map += "";
    var pn_batch = map.split("|");
    var pns = []; // list of pns in the attribute
    var batches = [];// list of batches in the attribute
    var quantities = [];  
    var update_flag = false;
     
    if(map==""){
        return {
            map:map,
            err:0,
            message :"PASS"
        };
    }

    for(var i = 0; i < pn_batch.length; i++){
        pns.push((pn_batch[i].split(":")[0]).split(",")[0]);//[pn1,pn2,pn3]
        quantities.push((pn_batch[i].split(":")[0]).split(",")[1]);//[q1,q2,q3]
        batches.push(pn_batch[i].split(":")[1]);//[batch1 batch2, batch3, batch4 batch5]
    }
    
    for(var i = 0; i < pns.length; i++){
      
        if(partNumber == pns[i]){
            
            batches[i] = "";
            
            update_flag = true
        }
    }

    /* if (update_flag == false){
        err = 1 ;
        return {
            map:map,
            err:err,
            message:"Part Number not found"
        };
    } */

    var new_map = "";
    for (i=0; i < pns.length; i++){
        if(partNumber == pns[i]){
            new_map += "";
    
        }else{
            new_map += pns[i] + "," + "0" + ":"+ batches[i] +"|";
    
        }
    }

    new_map = new_map.slice(0,new_map.length-1); 

    return {
        map:new_map,
        err:0,
        message :"PASS"
    };
}
