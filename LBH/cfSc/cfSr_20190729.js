/*
 * Copyright (c) 2018 iTAC Software AG, Germany. All Rights Reserved.
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

/*  History
 
    Date                Developer                       Information
 -----------------------------------------------------------------------------------------------------------------------------------------------------
    2018-11-12          Faouzi Ben Mabrouk              Release for test v1.1 (using static json responses)
   
    
 */

importPackage(com.itac.mes.api.custom);
importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.mes.api.business);
importPackage(java.lang);
importPackage(java.util);
importPackage(java.text);
//importPackage(com.itac.easyworks.api.idl);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.util.constants.imsapi);
importPackage(com.itac.mes.api.service);

// 1 ===========================================================================
function cfSrGetAvailablePositions(jsonData) {
    var result = new Result_customFunctionCommon();
    
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
     
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
        
        var machineName = "";
        var numberOfPositions = 8;
        if (stationNumber.equals("0600200601")) machineName = "Casting Carousel C06";
        if (stationNumber.equals("0600201001")) machineName = "Casting Carousel C10";
        
        if (stationNumber.equals("060020K101")) {
            machineName = "Casting Kaizen 1 ..";
            numberOfPositions = 2;
            
        }
        
        
         
       
        
        var positions = [];
        var position = "";
        var log ="";
        
        for (var i=0;i<numberOfPositions;i++){
            // < mdcGetStationConditions> ------------------------------------------
            
            var stations=[];
            for (var j=1;j<=2;j++){
                
                var st = getStationId(stationNumber,i*2+j).station;
                stations.push(st);
                
                log += "<"+st+">";
  
                var conditionResultKeys = new Array( "COLOR_RGB",
                    "CONDITION_CODE",
                    "CONDITION_DESC",
                    "CONDITION_NAME",
                    "CONDITION_TYPE",
                    "DATE_FROM",
                    "DATE_TO",
                    "STATION_DESC",
                    "TEXT");    

                var result_mdcGetStationConditions = imsApiService.mdcGetStationConditions(imsApiSessionContext, 
                    stations[0], 
                    -1,
                    -1,
                    "-1",
                    1,
                    conditionResultKeys);

                var return_value = result_mdcGetStationConditions.return_value;
            }
            for (var k=0; k< result_mdcGetStationConditions.conditionResultValues.length/9; k++){
                var colorRgb = ""+result_mdcGetStationConditions.conditionResultValues[k*9+0]; 
                
            }   
            position = {position:"0"+(i+1),stationNumbers:stations,colorRgb:colorRgb,state:"1"}; 
            if ((position.colorRgb==undefined) || (colorRgb=undefined)) {
                colorRgb="224;224;224;255";
                position = {position:"0"+(i+1),stationNumbers:stations,colorRgb:colorRgb,state:"1"}; 
            }
            positions.push(position);
        }
        

        // API integration -----------------------------------------------------
        
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                    log:log,
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage,
                    machineName : "" + machineName,
                    numberOfPositions : "" + numberOfPositions,
                    positions : positions
			
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrGetAvailablePositions failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// 2 ===========================================================================
function cfSrGetStationsForPosition(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
        var position = data.position;
     
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
             
        var stations = [];
    
        stations.push("ST01");
        stations.push("ST02");
        stations.push("ST03");
        stations.push("ST04");
        
        
        // API integration -----------------------------------------------------
        
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage,
                    stations : stations
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrGetStationsForPosition failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// 3 ===========================================================================
function cfSrGetMachineConditionGroups(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
        
     
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
             
        var groups = [];
        var group = "";
        
//        group = {colorRgb:"0;255;0;255",groupCode:"GR01",groupDescription:"Description for GR01"};
//        groups.push(group);
//        group = {colorRgb:"0;255;0;255",groupCode:"GR02",groupDescription:"Description for GR02"};
//        groups.push(group);       
        
        // API integration -----------------------------------------------------
        
        // < mdcGetConditionCodes> ---------------------------------------------
        var conditionCodeResultKeys = new Array( "COLOR_RGB",
            "CONDITION_CAUSE",
            "CONDITION_CLASS",
            "CONDITION_CLASS_DESC",
            "CONDITION_CODE",
            "CONDITION_DESC",
            "CONDITION_GROUP",
            "CONDITION_GROUP_DESC",
            "CONDITION_NAME",
            "CONDITION_TYPE",
            "LEVEL_2",
            "LEVEL_2_DESC",
            "LEVEL_3",
            "LEVEL_3_DESC",
            "LEVEL_4",
            "LEVEL_4_DESC");
                                                    
        var conditionCodeFilter = new Array(new KeyValue("ALL_CONDITIONS",0));
        
        var result_mdcGetConditionCode = imsApiService.mdcGetConditionCodes(imsApiSessionContext, 
            stationNumber, 
            conditionCodeFilter,
            conditionCodeResultKeys);

        var return_value = result_mdcGetConditionCode.return_value;
        
        if (return_value != 0) {
            
            errorcode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        
        var TEMP_MACHINE_CONDITIONS = [];
        
        for (var x=0; x< result_mdcGetConditionCode.conditionCodeResultValues.length/16; x++){
            TEMP_MACHINE_CONDITIONS.push(
                    {    
                        colorRgb: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+0],
                        conditionCause: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+1],
                        conditionClass: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+2],
                        conditionClassDesc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+3],
                        conditionCode: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+4],
                        conditionDesc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+5],
                        conditionGroup: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+6],
                        conditionGroupDesc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+7],
                        conditionName: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+8],
                        conditionType: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+9],
                        level2: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+10],
                        level2Desc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+11],
                        level3: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+12],
                        level3Desc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+13],
                        level4: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+14],
                        level4Desc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+15]
                    }
            );
            
        }
        
        for (var x=0; x< TEMP_MACHINE_CONDITIONS.length; x++){
            var val = true;
            for (var y=0; y< groups.length; y++){
                if (TEMP_MACHINE_CONDITIONS[x].level3.equals(groups[y].groupCode)) val=false;
            }
            if (val) {
                group = {colorRgb:TEMP_MACHINE_CONDITIONS[x].colorRgb,groupCode:TEMP_MACHINE_CONDITIONS[x].level3,groupDescription:TEMP_MACHINE_CONDITIONS[x].level3Desc};
                groups.push(group);
            }
        }
           
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage,
                    groups : groups
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrGetMachineConditionGroups failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// 4 ===========================================================================
function cfSrGetMachineConditions(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
        var groupCode = data.groupCode;
     
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
             
        var groups = [];
        var group = "";
        
//        group = {colorRgb:"0;255;0;255",conditionCause:"",conditionCode:"CC01",conditionDescription:"CC01 Description"};
//        groups.push(group);
//        group = {colorRgb:"0;255;0;255",conditionCause:"",conditionCode:"CC02",conditionDescription:"CC02 Description"};
//        groups.push(group);
       
        
        // API integration -----------------------------------------------------
        
        // < mdcGetConditionCodes> ---------------------------------------------
        var conditionCodeResultKeys = new Array( "COLOR_RGB",
            "CONDITION_CAUSE",
            "CONDITION_CLASS",
            "CONDITION_CLASS_DESC",
            "CONDITION_CODE",
            "CONDITION_DESC",
            "CONDITION_GROUP",
            "CONDITION_GROUP_DESC",
            "CONDITION_NAME",
            "CONDITION_TYPE",
            "LEVEL_2",
            "LEVEL_2_DESC",
            "LEVEL_3",
            "LEVEL_3_DESC",
            "LEVEL_4",
            "LEVEL_4_DESC");
                                                    
        var conditionCodeFilter = new Array(new KeyValue("ALL_CONDITIONS",0));
        
        var result_mdcGetConditionCode = imsApiService.mdcGetConditionCodes(imsApiSessionContext, 
            stationNumber, 
            conditionCodeFilter,
            conditionCodeResultKeys);

        var return_value = result_mdcGetConditionCode.return_value;
        
        if (return_value != 0) {
            
            errorcode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage
                };
                
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        
        var TEMP_MACHINE_CONDITIONS = [];
        
        for (var x=0; x< result_mdcGetConditionCode.conditionCodeResultValues.length/16; x++){
            TEMP_MACHINE_CONDITIONS.push(
                    {    
                        colorRgb: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+0],
                        conditionCause: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+1],
                        conditionClass: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+2],
                        conditionClassDesc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+3],
                        conditionCode: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+4],
                        conditionDesc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+5],
                        conditionGroup: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+6],
                        conditionGroupDesc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+7],
                        conditionName: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+8],
                        conditionType: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+9],
                        level2: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+10],
                        level2Desc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+11],
                        level3: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+12],
                        level3Desc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+13],
                        level4: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+14],
                        level4Desc: "" + result_mdcGetConditionCode.conditionCodeResultValues[x*16+15]
                    }
            );
            
        }
        
        for (var x=0; x< TEMP_MACHINE_CONDITIONS.length; x++){
      
            //group = {colorRgb:"0;255;0;255",conditionCause:"",conditionCode:"CC01",conditionDescription:"CC01 Description"};
            if (TEMP_MACHINE_CONDITIONS[x].level3.equals(groupCode)) {
                group = {colorRgb:TEMP_MACHINE_CONDITIONS[x].colorRgb,conditionCause:TEMP_MACHINE_CONDITIONS[x].conditionCause,conditionCode:TEMP_MACHINE_CONDITIONS[x].conditionCode,conditionDescription:TEMP_MACHINE_CONDITIONS[x].conditionDesc};
                groups.push(group);
            }
        }
        
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage,
                    groups : groups
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrGetMachineConditions failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// 5 ===========================================================================
function cfSrUploadMachineCondition(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
        var bookingTarget = data.bookingTarget;
        var conditionCode = data.conditionCode;
        var dateFrom = data.dateFrom;
        var dateTo = data.dateTo;
        var comment = data.comment;
        
        var positions = data.positions;
     
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
             
        // API integration -----------------------------------------------------
        
        for (var x=0;x<positions.length;x++){
            for (var y=0;y<positions[x].stationNumbers.length;y++){
                var station = positions[x].stationNumbers[y];
                
                // < mdcUploadStationCondition> ------------------------------------
                var stationConditionUploadKeys = new Array("BOOKING_TARGET", "CONDITION_CODE", "ERROR_CODE", "DATE_FROM", "DATE_TO", "TEXT");
                var stationConditionUploadValues = new Array(0, conditionCode, 0, dateFrom, dateTo, comment); 
                var result_uploadStationCondition = imsApiService.mdcUploadStationCondition(imsApiSessionContext, 
                                                                                            station, 
                                                                                            stationConditionUploadKeys,
                                                                                            stationConditionUploadValues);

                var return_value = result_uploadStationCondition.return_value; 
                
                if (return_value != 0) {
            
                    errorcode = return_value;
                    errorMessage = getImsApiErrorText(return_value);

                    var resultData = {
                            errorCode : errorcode,
                            errorMessage : "" + errorMessage
                        };

                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                } 
                
            }
        }
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage      
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrUploadMachineCondition failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// 6 ===========================================================================
function cfSrGetMachineMessages(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
             
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
             
       
        var groups = [];
        var group = "";
        
        group = {colorRgb:"0;0;255;255",conditionCause:"",conditionCode:"MS01",conditionDescription:"Message 01 Description"};
        groups.push(group);
        group = {colorRgb:"0;255;0;255",conditionCause:"",conditionCode:"MS02",conditionDescription:"Message 02 Description"};
        groups.push(group);
       
        
        // API integration -----------------------------------------------------
        
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage,
                    groups : groups
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrGetMachineMessages failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// 7 ===========================================================================
function cfSrUploadMachineMessage(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
        var bookingTarget = data.bookingTarget;
        var conditionCode = data.conditionCode;
        var dateFrom = data.dateFrom;
        var dateTo = data.dateTo;
        var comment = data.comment;
             
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
             
  
        // API integration -----------------------------------------------------
        
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage      
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrUploadMachineMessage failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function StateDuration(code, from, to, rgb, period) {
    this.CODE = code;
    this.FROM = from;
    this.TO = to;
    this.RGB = rgb;
    this.PERIOD = period;
}

// 8 ===========================================================================
function cfSrMachineStatistics(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
        var positions = data.Positions;
             
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
        var condition = {};
             
        var cycleTime = {target:"0",current:"0",deviation:"0",machineCounter:"0"};
        var quantities = {target:"0",current:"0",pass:"0",fail:"0",scrap:"0"};
        var machineConditions = [];
        
        condition = {conditionCode:"-",colorRgb:"220;220;220;255",dateFrom:"1",dateTo:"5",totalTime:"100"};
        machineConditions.push(condition);
        
//        condition = {conditionCode:"CC2",colorRgb:"255;0;0;255",dateFrom:"1",dateTo:"5",totalTime:"100"};
//        machineConditions.push(condition);
//        
//        condition = {conditionCode:"CC3",colorRgb:"0;0;255;255",dateFrom:"1",dateTo:"10",totalTime:"100"};
//        machineConditions.push(condition);
//        
//         condition = {conditionCode:"CC3",colorRgb:"0;0;255;255",dateFrom:"1",dateTo:"10",totalTime:"100"};
//        machineConditions.push(condition);
        
        
  
        // API integration -----------------------------------------------------
        
         //<mdataGetCalendarData>--------------------------------------------
//        var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
//        var result_mdataGetCalendarData= imsApiService.mdataGetCalendarData(imsApiSessionContext, 
//            stationNumber, 
//            calendarDataResultKeys);
//
//        var return_value = result_mdataGetCalendarData.return_value;
//        var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
//        
//        var startTime = TEMP_CURRENT_TIME - (8*3600/1000);  // Last 8 hours
//        
//        var GLOBAL_STATE_AR=[];
//        var STATE_AR = [];
//        
//        var log ="";
//        
//        for (var i=0;i<positions.length;i++){
//            var st = positions[i].stationNumbers[0];
//            log +="<" + st+ ">";
//            // < mdcGetStationConditions> --------------------------------------
//            var conditionResultKeys = new Array("CONDITION_CODE","DATE_FROM", "DATE_TO","COLOR_RGB");    
//            var result_mdcGetStationConditions = imsApiService.mdcGetStationConditions(imsApiSessionContext, 
//                st, 
//                startTime,      
//                TEMP_CURRENT_TIME,
//                "-1",
//                1,
//                conditionResultKeys);
//
//            var return_value = result_mdcGetStationConditions.return_value;
//            
//            
//            for (var x=0;x<result_mdcGetStationConditions.conditionResultValues.length/4;x++){
//                var code=result_mdcGetStationConditions.conditionResultValues[x*4+0];
//                var from=result_mdcGetStationConditions.conditionResultValues[x*4+1];
//                var to=result_mdcGetStationConditions.conditionResultValues[x*4+2];
//                var rgb=result_mdcGetStationConditions.conditionResultValues[x*4+3];
//                
//                if (from<startTime) from = startTime;
//                if (to>TEMP_CURRENT_TIME) to = TEMP_CURRENT_TIME;
//                
//                STATE_AR.push(new StateDuration(code,from,to,rgb,from-to));
//                log +="<" + code + ">";
//            }
//            
//          
//            for (var x=0;x<STATE_AR.length;x++){
//                var el = 0;
//                for (var y=0;y<GLOBAL_STATE_AR.length;y++){
//                    if (GLOBAL_STATE_AR[y].CODE == STATE_AR[x].CODE) {
//                        GLOBAL_STATE_AR[y].PERIOD += STATE_AR[x].PERIOD;
//                        el++;
//                    }
//                }
//                if (el=0) {
//                    GLOBAL_STATE_AR[y].push(new StateDuration(  STATE_AR[x].CODE,
//                                                                STATE_AR[x].FROM,
//                                                                STATE_AR[x].TO,
//                                                                STATE_AR[x].RGB,
//                                                                STATE_AR[x].PERIOD));
//                }
//            }
//        }
//        
//        
//        for (var x=0;x<GLOBAL_STATE_AR.length;x++){
//            log+=" >"+x;
//            condition = {conditionCode:""+GLOBAL_STATE_AR[x].CODE,colorRgb:""+GLOBAL_STATE_AR[x].RGB,dateFrom:""+GLOBAL_STATE_AR[x].FROM,dateTo:""+GLOBAL_STATE_AR[x].TO,totalTime:999};
//            machineConditions.push(condition);
//        }
//        
        
        
        
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage,
                    cycleTime : cycleTime,
                    quantities : quantities,
                    machineConditions : machineConditions
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrUploadMachineMessage failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

// 9 ===========================================================================
function cfSrLogBook(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        var data = JSON.parse(jsonData);
        
        // JSON parser ---------------------------------------------------------
        var stationNumber = data.stationNumber;
        var positions = data.Positions;
             
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";   
        var condition = {};
             
        var stationNumbers = ["0600200601", "0600200602"];
        var entries = [];
        
        var entry = "";
        
        entry = {title:"Title 1",position:positions[0],station:"$$$",message:"-1",date:"16/07/2019",time:"15:05:00"};
        entries.push(entry);
        
        entry = {title:"Title 2",position:positions[1],station:"$$$",message:"-1",date:"15/07/2019",time:"14:05:00"};
        entries.push(entry);
 
        
  
        // API integration -----------------------------------------------------
        
        
        // JSON result ---------------------------------------------------------
        var resultData = { 
                    errorCode : errorcode,
                    errorMessage : "" + errorMessage,      
                    stationNumbers : stationNumbers,
                    entries : entries
		};
        result.outArgs = [JSON.stringify(resultData)];
        
        // ---------------------------------------------------------------------
    }
    catch (e) {
        logHandler.logMessage("Custom function cfSrUploadMachineMessage failed: " + e);
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

// #############################################################################
function zeroPad(numberStr) {
    if (numberStr < 10) return "0" + numberStr;
    return "" + numberStr;
}
// #############################################################################


// #############################################################################
function getStationId(station, id) {
    var temp = "";

    var l = station.length;

    st = station.substring(0, l - 2);
    var nb = zeroPad(station.substring(l - 1, l + 1));
    var sid = zeroPad("" + id);

    temp = "" + st + sid;

    return {
        station: temp,
        id: id
    }
}
// #############################################################################


// #############################################################################
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
// #############################################################################