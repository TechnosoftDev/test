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

 Faouzi Ben Mabrouk     2019-05-29      Le belier        cfOpc                  OPC integration 
 M.Oueld Oubaii         2019-06-07      Le belier                            add :
                                                                                    IN_STATION_NUMBER 
                                                                                    as input



 **/


importPackage(com.itac.mes.api.custom);
importPackage(java.lang);
importPackage(java.util);
importPackage(java.text);
importPackage(com.itac.mes.imsapi.domain.container);


// #############################################################################
// #############################################################################
// #############################################################################
// 
//                                  UPLOADPROCESSDATA
// #############################################################################
// #############################################################################
// #############################################################################
function uploadProcessData() {

    var inArgs = uploadProcessData.arguments;
    var result = new Result_customFunctionCommon();
	
    try {
        var tempOb = parseUploadProcessData(inArgs);
        
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        
        // <trUploadStationResult> ---------------------------------------------

        var stationResultUploadKeys = new Array("ERROR_CODE","MEASURE_FAIL_CODE","MEASURE_NAME", "MEASURE_VALUE");
        var stationResultUploadValues = new Array();
        logHandler.logMessage("]]]]]]]]]]]]]]]]NOK0"+tempOb.IN_PROCESS_DATA_AR);
        for (var x=0;x<tempOb.IN_PROCESS_DATA_AR.length;x++){
            stationResultUploadValues.push(0,"0",tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME,tempOb.IN_PROCESS_DATA_AR[x].MEASURE_VALUE);
        }
        
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
            result.errorString = "uploadProcessData:trUploadStationResult|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        
        // <End call> ----------------------------------------------------------
         
        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        
        logHandler.logMessage("custom function OPC.uploadProcessData finished.");
		
		logHandler.logMessage("]]]]]]]]]]]]]]]]NOK1");
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
    
    this.IN_PROCESS_DATA_SIZE = 0;
    this.IN_PROCESS_DATA_AR = [];
   
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUploadProcessData(inArgs) {
  
    var tempObject = new uploadProcessDataOb();
    tempObject.IN_STATION_NUMBER =  inArgs[0];
    var blocsize = 2;
    
    logHandler.logMessage("]]]]]]]]]]]]]]]]NOK2 inargs"+inArgs);
    for (var x = 1; x < inArgs.length; x++) {
       
        if (x==1) {
            tempObject.IN_PROCESS_DATA_SIZE = parseInt( inArgs[x]);
        }
        
        for (var y = 0; y < tempObject.IN_PROCESS_DATA_SIZE; y++) {
            if (x== 1 + (y * blocsize)) {
                tempObject.IN_PROCESS_DATA_AR.push(new Measure(inArgs[x+1], "", inArgs[x+2], "", "", "", ""));
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
    logHandler.logMessage("]]]]]]]]]]]]]]]]NOK3"+tempOb.IN_PROCESS_DATA_AR);
    for (var x=0;x<tempOb.IN_PROCESS_DATA_AR.length;x++){
        result.outArgs[0] += "\n" + " name : " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_NAME + 
                                    " ; value : " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_VALUE +
                                    " ; unit : " + tempOb.IN_PROCESS_DATA_AR[x].MEASURE_UNIT;
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

 ///UPDATE CAROUSEL
// #############################################################################
// #############################################################################
// #############################################################################
function updateCarousel() {

    var inArgs = updateCarousel.arguments;
    
    try {
        var tempOb = parseUpdateCarouselData(inArgs);
        
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        
        // <trGetStationSetting> ---------------------------------------------
        var stationSettingResultsKeys = new Array ("PROCESS_LAYER","WORKORDER_NUMBER");
        var result_trGetStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext,
        tempOb.IN_STATION_NUMBER,
        stationSettingResultsKeys);
        
        var return_value = result_trGetStationSetting.return_value;
        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "updateCarousel:trUploadStationResult|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        
        tempOb.TEMP_PROCESSLAYER = result_trGetStationSetting.stationSettingResultValues[0];
        tempOb.TEMP_WORKORDER= result_trGetStationSetting.stationSettingResultValues[1];       
        // <End call> ----------------------------------------------------------
        //<equGetSetupEquipmentData> Get setup equipment---------------------------------------------
        var equipmentSetupFilters = new Array() ;
        var equipmentSetupResultKeys = new Array("EQUIPMENT_INDEX","EQUIPMENT_NUMBER");
        
        var result_equGetSetupEquipmentData = imsApiService.equGetSetupEquipmentData(imsApiSessionContext,
        tempOb.IN_STATION_NUMBER,
        equipmentSetupFilters,
        equipmentSetupResultKeys);
        return_value = result_equGetSetupEquipmentData.return_value;
        
        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "updateCarousel:equGetSetupEquipmentData|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        // <End call> ----------------------------------------------------------
        // <equUpdateEquipmentData> Strip down everything---------------------------------------------
        
            var equipmentUploadKeys = new Array("EQUIPMENT_INDEX","EQUIPMENT_NUMBER","ERROR_CODE");
            var equipmentUploadValues = new Array();
            for(var x=0;x<result_equGetSetupEquipmentData.equipmentSetupResultValues.length/2;x++){
                equipmentUploadValues.push(result_equGetSetupEquipmentData.equipmentSetupResultValues[2*x],result_equGetSetupEquipmentData.equipmentSetupResultValues[2*x+1],0);
            }
            
            var result_equUpdateEquipmentData = imsApiService.equUpdateEquipmentData(imsApiSessionContext,
                                                                                    tempOb.IN_STATION_NUMBER,
                                                                                    1,
                                                                                    "-1",
                                                                                    tempOb.TEMP_WORKORDER,
                                                                                    tempOb.TEMP_PROCESSLAYER,
                                                                                    equipmentUploadKeys,
                                                                                    equipmentUploadValues
                                                                                    );
            var return_value = result_equUpdateEquipmentData.return_value;
            if (return_value != 0){
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "updateEquipmentData:equGetSetupEquipmentData|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }         
        // <End call> ----------------------------------------------------------
        // <equUpdateEquipmentData> setUp the input equipment----------------------------
        
            var equipmentUploadKeys = new Array("EQUIPMENT_NUMBER","EQUIPMENT_INDEX","ERROR_CODE");
            var equipmentUploadValues = new Array();
            for(var x=0;x<tempOb.IN_EQUIPMENT_DATA_AR.length;x++){
                equipmentUploadValues.push(tempOb.IN_EQUIPMENT_DATA_AR[x].EQUIPMENT_NUMBER,tempOb.IN_EQUIPMENT_DATA_AR[x].EQUIPMENT_INDEX,0);
            }
            
            var result_equUpdateEquipmentData = imsApiService.equUpdateEquipmentData(imsApiSessionContext,
                                                                                    tempOb.IN_STATION_NUMBER,
                                                                                    0,
                                                                                    "-1",
                                                                                    tempOb.TEMP_WORKORDER,
                                                                                    tempOb.TEMP_PROCESSLAYER,
                                                                                    equipmentUploadKeys,
                                                                                    equipmentUploadValues
                                                                                    );
            var return_value = result_equUpdateEquipmentData.return_value;
            if (return_value != 0){
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "updateCarouselData:equGetSetupEquipmentData|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }   
        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        
        logHandler.logMessage("custom function OPC.updateCarouselData finished.");
        return resultUploadProcessData("CF", 0, "PASS", tempOb);
        
    } catch (e) {
        logHandler.logMessage("custom function OPC.updateCarouselData failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function updateCarouselDataOb() {
   
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    
    this.IN_EQUIPMENT_DATA_SIZE = 0;
    this.IN_EQUIPMENT_DATA_AR = [];
    this.TEMP_SETUPEQU = new Array();
    this.TEMP_WORKORDER="";
    this.TEMP_PROCESSLAYER ="";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUpdateCarouselData(inArgs) {
  
    var tempObject = new updateCarouselDataOb();
    var blocsize = 2;
    
    tempObject.IN_STATION_NUMBER = inArgs[0];
    
    for (var x = 1; x < inArgs.length; x++) {
       
        if (x==1) {
            tempObject.IN_EQUIPMENT_DATA_SIZE = parseInt( inArgs[x]);
        }
        
        for (var y = 0; y < tempObject.IN_EQUIPMENT_DATA_SIZE; y++) {
            if (x== 1 + (y * blocsize)) {
                tempObject.IN_EQUIPMENT_DATA_AR.push(new Equipment(inArgs[x],inArgs[x+1]));
            }
        }
    
    }
    return tempObject;
}
// #############################################################################
// #############################################################################
// #############################################################################
// UPDATE Equipment
// #############################################################################
// #############################################################################
// #############################################################################

function updateEquipmentData() {

    var inArgs = updateEquipmentData.arguments;
    
    try {
        var tempOb = parseUpdateEquipmentData(inArgs);
        
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        
        // <trGetStationSetting> ---------------------------------------------
        var stationSettingResultsKeys = new Array ("PROCESS_LAYER","WORKORDER_NUMBER");
        var result_trGetStationSetting = imsApiService.trGetStationSetting(imsApiSessionContext,
        tempOb.IN_STATION_NUMBER,
        stationSettingResultsKeys);
        
        var return_value = result_trGetStationSetting.return_value;
        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "updateEquipmentData:trUploadStationResult|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        
        tempOb.TEMP_PROCESSLAYER = result_trGetStationSetting.stationSettingResultValues[0];
        tempOb.TEMP_WORKORDER= result_trGetStationSetting.stationSettingResultValues[1];       
        // <End call> ----------------------------------------------------------
        //<equGetSetupEquipmentData> Get setup equipment---------------------------------------------
        var equipmentSetupFilters = new Array() ;
        var equipmentSetupResultKeys = new Array("EQUIPMENT_INDEX","EQUIPMENT_NUMBER");
        
        var result_equGetSetupEquipmentData = imsApiService.equGetSetupEquipmentData(imsApiSessionContext,
        tempOb.IN_STATION_NUMBER,
        equipmentSetupFilters,
        equipmentSetupResultKeys);
        return_value = result_equGetSetupEquipmentData.return_value;
        
        if (return_value != 0) {
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "updateEquipmentData:equGetSetupEquipmentData|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        // <End call> ----------------------------------------------------------
        // <equUpdateEquipmentData> Strip down everything---------------------------------------------
        
            var equipmentUploadKeys = new Array("EQUIPMENT_INDEX","EQUIPMENT_NUMBER","ERROR_CODE");
            var equipmentUploadValues = new Array();
            for(var x=0;x<result_equGetSetupEquipmentData.equipmentSetupResultValues.length/2;x++){
                equipmentUploadValues.push(result_equGetSetupEquipmentData.equipmentSetupResultValues[2*x],result_equGetSetupEquipmentData.equipmentSetupResultValues[2*x+1],0);
            }
            
            var result_equUpdateEquipmentData = imsApiService.equUpdateEquipmentData(imsApiSessionContext,
                                                                                    tempOb.IN_STATION_NUMBER,
                                                                                    1,
                                                                                    "-1",
                                                                                    tempOb.TEMP_WORKORDER,
                                                                                    tempOb.TEMP_PROCESSLAYER,
                                                                                    equipmentUploadKeys,
                                                                                    equipmentUploadValues
                                                                                    );
            var return_value = result_equUpdateEquipmentData.return_value;
            if (return_value != 0){
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "updateEquipmentData:equGetSetupEquipmentData|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }         
        // <End call> ----------------------------------------------------------
        // <equUpdateEquipmentData> setUp the input equipment----------------------------
        
            var equipmentUploadKeys = new Array("EQUIPMENT_NUMBER","EQUIPMENT_INDEX","ERROR_CODE");
            var equipmentUploadValues = new Array();
            for(var x=0;x<tempOb.IN_EQUIPMENT_DATA_AR.length;x++){
                equipmentUploadValues.push(tempOb.IN_EQUIPMENT_DATA_AR[x].EQUIPMENT_NUMBER,tempOb.IN_EQUIPMENT_DATA_AR[x].EQUIPMENT_INDEX,0);
            }
            
            var result_equUpdateEquipmentData = imsApiService.equUpdateEquipmentData(imsApiSessionContext,
                                                                                    tempOb.IN_STATION_NUMBER,
                                                                                    0,
                                                                                    "-1",
                                                                                    tempOb.TEMP_WORKORDER,
                                                                                    tempOb.TEMP_PROCESSLAYER,
                                                                                    equipmentUploadKeys,
                                                                                    equipmentUploadValues
                                                                                    );
            var return_value = result_equUpdateEquipmentData.return_value;
            if (return_value != 0){
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "updateEquipmentData:equGetSetupEquipmentData|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }   
        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        
        logHandler.logMessage("custom function OPC.updateEquipmentData finished.");
        return result_equUpdateEquipmentData("CF", 0, "PASS", tempOb);
        
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
    
    this.IN_EQUIPMENT_DATA_SIZE = 0;
    this.IN_EQUIPMENT_DATA_AR = [];
    this.TEMP_SETUPEQU = new Array();
    this.TEMP_WORKORDER="";
    this.TEMP_PROCESSLAYER ="";
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUpdateEquipmentData(inArgs) {
  
    var tempObject = new updateEquipmentDataOb();
    var blocsize = 2;
    
    tempObject.IN_STATION_NUMBER = inArgs[0];
    
    for (var x = 1; x < inArgs.length; x++) {
       
        if (x==1) {
            tempObject.IN_EQUIPMENT_DATA_SIZE = parseInt( inArgs[x]);
        }
        
        for (var y = 0; y < tempObject.IN_EQUIPMENT_DATA_SIZE; y++) {
            if (x== 1 + (y * blocsize)) {
                tempObject.IN_EQUIPMENT_DATA_AR.push(new Equipment(inArgs[x],inArgs[x+1]));
            }
        }
    
    }
    return tempObject;
}

function result_equUpdateEquipmentData(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;
    
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    
    for (var x=0;x<tempOb.IN_EQUIPMENT_DATA_AR.length;x++){
        result.outArgs[0] += "\n" + " name : " + tempOb.IN_EQUIPMENT_DATA_AR[x].MEASURE_NAME + 
                                    " ; value : " + tempOb.IN_EQUIPMENT_DATA_AR[x].MEASURE_VALUE +
                                    " ; unit : " + tempOb.IN_EQUIPMENT_DATA_AR[x].MEASURE_UNIT;
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
//  upload MachineState
// #############################################################################
// #############################################################################
// #############################################################################

function uploadMachineCondition() {

    var inArgs = uploadMachineCondition.arguments;
    
    try {
        var tempOb = parseMachineCondition(inArgs);
        
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        
        // <mdcUploadStationCondition> ---------------------------------------------

        var stationConditionUploadKeys = new Array("BOOKING_TARGET","CONDITION_CODE","ERROR_CODE");
        var stationConditionUploadValues = new Array();
        for (var x=0;x<tempOb.IN_CONDITION_DATA_AR.length;x++){
            stationConditionUploadValues.push(0,tempOb.IN_CONDITION_DATA_AR[x].CONDITION_CODE,0);
        
        }
        /*for (var x=0;x<tempOb.IN_CONDITION_DATA_AR.length;x++){
            stationResultUploadValues.push(0,"0",tempOb.IN_CONDITION_DATA_AR[x].MEASURE_NAME,tempOb.IN_CONDITION_DATA_AR[x].MEASURE_VALUE,tempOb.IN_CONDITION_DATA_AR[x].MEASURE_UNIT);
        }*/
        
        var result_mdcStationUploadCondition = imsApiService.mdcUploadStationCondition(imsApiSessionContext, 
                tempOb.IN_STATION_NUMBER, 
                stationConditionUploadKeys,
                stationConditionUploadValues);

        var return_value = result_mdcStationUploadCondition.return_value;
        
        if (return_value != 0) {
            var result = new Result_customFunctionCommon();
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "uploadMachineCondition:mdcStationUploadCondition|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        
        // <End call> ----------------------------------------------------------
         
        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        
        logHandler.logMessage("custom function OPC.uploadMachineCondition finished.");
        return resultMachineState("CF", 0, "PASS", tempOb);
        
    } catch (e) {
        logHandler.logMessage("custom function OPC.uploadMachineCondition failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function uploadMachineConditionOb() {
   
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    
    this.IN_CONDITION_DATA_SIZE = 0;
    this.IN_CONDITION_DATA_AR = [];
   
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseMachineCondition(inArgs) {
    
    
    
    var tempObject = new uploadMachineConditionOb();
    tempObject.IN_STATION_NUMBER = inArgs[0];
    var blocsize = 1;
   
    for (var x = 0; x < inArgs.length; x++) {
       
        if (x==1) {
            tempObject.IN_CONDITION_DATA_SIZE = parseInt( inArgs[x]);
        }
        
        for (var y =0; y < tempObject.IN_CONDITION_DATA_SIZE; y++) {
            if (x== 2 + (y * blocsize)) {
                tempObject.IN_CONDITION_DATA_AR.push(new Condition(inArgs[x]));
            }
        }
    
    }
    return tempObject;
}

function resultMachineState(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;
    
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    
    for (var x=0;x<tempOb.IN_CONDITION_DATA_AR.length;x++){
        result.outArgs[0] += "\n" + " conditionCode : " + tempOb.IN_CONDITION_DATA_AR[x].CONDITION_CODE 
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
// upload SkimmingData
// #############################################################################
// #############################################################################
// #############################################################################
function uploadSkimmingData() {

    var inArgs = uploadSkimmingData.arguments;
    
    try {
        var tempOb = parseUploadSkimmingData(inArgs);
 
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        
        // <trUploadStationResult> ---------------------------------------------

        var stationResultUploadKeys = new Array("ERROR_CODE","MEASURE_FAIL_CODE","MEASURE_NAME", "MEASURE_VALUE");
        var stationResultUploadValues = new Array();
        
        for (var x=0;x<tempOb.IN_SKIMMING_DATA_AR.length;x++){
            stationResultUploadValues.push(0,"0",tempOb.IN_SKIMMING_DATA_AR[x].MEASURE_NAME,tempOb.IN_SKIMMING_DATA_AR[x].MEASURE_VALUE);
        }
        
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
            result.errorString = "uploadSkimmingData:trUploadStationResult|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }
        
        // <End call> ----------------------------------------------------------
         
        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        
        logHandler.logMessage("custom function OPC.uploadSkimmingData finished.");
        return resultUploadProcessData1("CF", 0, "PASS", tempOb);
        
    } catch (e) {
        logHandler.logMessage("custom function OPC.uploadSkimmingData failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function uploadSkimmingDataOb() {
   
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    
    this.IN_SKIMMING_DATA_SIZE = 0;
    this.IN_SKIMMING_DATA_AR = [];
   
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUploadSkimmingData(inArgs) {
  
    var tempObject = new uploadSkimmingDataOb();
    tempObject.IN_STATION_NUMBER =  inArgs[0];
    var blocsize = 3;
   
    for (var x = 0; x < inArgs.length; x++) {
       
        if (x==0) {
            tempObject.IN_SKIMMING_DATA_SIZE = parseInt( inArgs[x]);
        }
        
        for (var y = 0; y < tempObject.IN_SKIMMING_DATA_SIZE; y++) {
            if (x== 1 + (y * blocsize)) {
                tempObject.IN_SKIMMING_DATA_AR.push(new Measure(inArgs[x], "", inArgs[x+1], "", "", "", inArgs[x+2]));
            }
        }
    
    }
    return tempObject;
}

function resultUploadProcessData1(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;
    
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    
    for (var x=0;x<tempOb.IN_SKIMMING_DATA_AR.length;x++){
        result.outArgs[0] += "\n" + " name : " + tempOb.IN_SKIMMING_DATA_AR[x].MEASURE_NAME + 
                                    " ; value : " + tempOb.IN_SKIMMING_DATA_AR[x].MEASURE_VALUE +
                                    " ; unit : " + tempOb.IN_SKIMMING_DATA_AR[x].MEASURE_UNIT;
    }
    
    result.outArgs[0] += "\n" + "";
    logHandler.logMessage("#### OPC Execution : \n" + result.outArgs[0]);

    result.return_value = returnCode;
    result.errorString = apiName + " : " + errorString;
    return result;
}
function uploadUnitState() {

    var inArgs = uploadUnitState.arguments;
    
    try {
        var tempOb = parseUploadUnit(inArgs);
        
        // API integration -----------------------------------------------------
        // ---------------------------------------------------------------------
        // <trGetStationSetting> ---------------------------------------------
        // ---------------------------------------------------------------------
        var getStationSettingResultKeys = new Array("PROCESS_LAYER","WORKORDER_NUMBER");
        var result_getStationSettingInfo = imsApiService.trGetStationSetting(imsApiSessionContext, 
                                                                                tempOb.IN_STATION_NUMBER, 
                                                                                getStationSettingResultKeys);

        return_value = result_getStationSettingInfo.return_value;
        
        if (return_value != 0) {
            return result_bmdMachineOUTSpp("trGetStationSetting", return_value , getImsApiErrorText(return_value), tempOb);
        } 
        tempOb.TEMP_PROCESS_LAYER = result_getStationSettingInfo.stationSettingResultValues[0];
        tempOb.TEMP_WORKORDER= result_getStationSettingInfo.stationSettingResultValues[1];    
        if (return_value != 0) {
                var result = new Result_customFunctionCommon();
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "uploadUnitState:trGetStationSetting|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }
        // <uploadState> ---------------------------------------------
        var serialNumberUploadKeys = new Array("ERROR_CODE","SERIAL_NUMBER","SERIAL_NUMBER_STATE");
        var serialNumberUploadValues = new Array();
    
        
        for(var x=0;x<tempOb.IN_SNR_DATA_AR.length;x++){
            var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext,
            tempOb.IN_STATION_NUMBER,
            tempOb.TEMP_PROCESS_LAYER,
            tempOb.IN_SNR_DATA_AR[x].SERIAL_NUMBER,
            "-1",
            tempOb.IN_SNR_DATA_AR[x].SERIAL_NUMBER_STATE,
            1,
            -1,
            0.0,
            serialNumberUploadKeys,
            serialNumberUploadValues);

            var return_value = result_trUploadState.return_value;

            if (return_value != 0) {
                var result = new Result_customFunctionCommon();
                var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
                result.errorString = "uploadUnitState:trUploadState|" + return_value + "|" + res.errorString;
                result.return_value = return_value;
                return result;
            }
        }
        // <End call> ----------------------------------------------------------
         
        // CF result -----------------------------------------------------------
        // ---------------------------------------------------------------------
        
        logHandler.logMessage("custom function OPC.uploadUnitState finished.");
        return resultUploadUnit("CF", 0, "PASS", tempOb);
        
    } catch (e) {
        logHandler.logMessage("custom function OPC.uploadUnitState failed: " + e);
        result = new Result_customFunctionCommon();
        result.outArgs = new Array();
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
}

function uploadUnitStateOb() {
   
    this.IN_STATION_NUMBER = "";                    //Input Station Number
    this.TEMP_PROCESS_LAYER="";
    this.TEMP_WORKORDER="";
    this.IN_SNR_DATA_SIZE = 0;
    this.IN_SNR_DATA_AR = [];
   
    this.RETURN_CODE = 0;                           //ErrorCode for inArgs Parsing
    this.ERROR_API = "";                            //ErrorAPI which API has an error
    this.ERROR_MESSAGE = "";                        //ErrorMessage for inArgs Parsing
}

function parseUploadUnit(inArgs) {
    
    
    
    var tempObject = new uploadUnitStateOb();
    tempObject.IN_STATION_NUMBER = inArgs[0];
    var blocsize = 1;
   
    for (var x = 0; x < inArgs.length; x++) {
       
        if (x==1) {
            tempObject.IN_SNR_DATA_SIZE = parseInt( inArgs[x]);
        }
        
        for (var y =0; y < tempObject.IN_SNR_DATA_SIZE; y++) {
            if (x== 2 + (y * blocsize)) {
                tempObject.IN_SNR_DATA_AR.push(new SNR(inArgs[x],inArgs[x+1]));
            }
        }
    
    }
    return tempObject;
}

function resultUploadUnit(apiName, returnCode, errorString, tempOb) {

    var result = new Result_customFunctionCommon();
    var counter = 1;
    
    result.outArgs = new Array(counter);
    result.outArgs[0] = "\n" + "";
    
    for (var x=0;x<tempOb.IN_SNR_DATA_AR.length;x++){
        result.outArgs[0] += "\n" + " conditionCode : " + tempOb.IN_SNR_DATA_AR[x].SNR_CODE 
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

