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
 Faouzi Ben Mabrouk     2019-06-039      Le belier        cf3d                      APIs integration 
 Mohamed Oueld Oubaii   2019-06-20       Le belier        -cf3dGetAvailibleRecipes
                                                          -cf3dUpdateMeasures
                                                          -cf3dValidateMeasures
                

 **/

importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.util.constants.imsapi);
importPackage(java.lang);
importPackage(com.itac.mes.api.custom);

function cf3dGetReferences(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        
        var stationNumber = data.stationNumber;

        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";
        var return_value = 0;
        var log = "";
        var references = [];
        
        // API integration -----------------------------------------------------
        
        // mdataGetPartData ----------------------------------------------------
        var partFilter = new Array(new KeyValue("PART_GROUP","MONOBLOC"));
        var partDataResultKeys = new Array("PART_NUMBER","PART_DESC","ATTRIBUTE_1","ATTRIBUTE_2");    

        var result_mdataGetPartData = imsApiService.mdataGetPartData(imsApiSessionContext,
            stationNumber,
            partFilter,
            partDataResultKeys);

        return_value = result_mdataGetPartData.return_value;

        for (var i=0;i<result_mdataGetPartData.partDataResultValues.length/4;i++){
            references.push(""+result_mdataGetPartData.partDataResultValues[i*4+0]);
        }
        log += references[0];
        var resultData = {
                log : log,
                references : references,
                errorcode : errorcode,
                errorMessage : "" + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
    }    
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cf3dGetReferences failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cf3dGetToolNumber(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
       
        var stationNumber = data.stationNumber;

        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";
        var toolNumbers = ["@1","@2","@3","@4","@5","@6","@7","@8","@9","@10","@11","@12","@13","@14","@15","@16"];
        
        // API integration -----------------------------------------------------
        
        
            
        var resultData = {
                toolNumbers : toolNumbers,
                errorcode : errorcode,
                errorMessage : "" + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
    }    
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cf3dGetToolNumber failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cf3dGetSandCoreNumber(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        
        var stationNumber = data.stationNumber;

        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";
        var sandCoreNumbers = ["@I","@II","@III","@IV","@V","@VI","@VII","@VIII","@IX","@X","@XI","@XII","@XIII","@XIV","@XV","@XVI"];
        
        // API integration -----------------------------------------------------
        
        
            
        var resultData = {
                sandCoreNumbers : sandCoreNumbers,
                errorcode : errorcode,
                errorMessage : "" + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
    }    
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cf3dGetToolNumber failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cf3dGetAvailableRecipes(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        
        var stationNumber = data.stationNumber;
        var referenceNumber = data.referenceNumber;

        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";
        
        // API integration -----------------------------------------------------
        
        //----- mdaGetRecipeData ---- //
        var recipeFilters = new Array(new KeyValue("PART_NUMBER", referenceNumber));

        var recipeResultKeys = new Array("MEASURE_NAME","NOMINAL","MIN_VALUE","MAX_VALUE");

        var result_mdaGRD = imsApiService.mdaGetRecipeData(imsApiSessionContext,
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

        var return_value =  result_mdaGRD.return_value;

        if (return_value != 0){
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "cf3dGetAvailableRecipes:mdaGetRecipeDatas|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }  

        var recipes = [];
            
        
        for(var x=0;x< result_mdaGRD.recipeResultValues.length/4; x++){
            var number = result_mdaGRD.recipeResultValues[x*4];
            var nominal = result_mdaGRD.recipeResultValues[x*4+1];
            var lower = (result_mdaGRD.recipeResultValues[x*4+2]-nominal).toFixed(2);
            var upper = (result_mdaGRD.recipeResultValues[x*4+3]-nominal).toFixed(2);
            
            if ((number!="TOOL_NUMBER") && (number!="SANDCORE_NUMBER")){
                recipes.push(
                    {
                        number: ""+ number,
                        nominalValue: "" + nominal,
                        lowerTolerance : "" + lower,
                        upperTolerance: "" + upper
                    }
                );
            }
        }
        
        // Sort measures
        
        if (recipes.length>1){
            for (var i=0;i<recipes.length;i++){
                for (var j=i+1;j<recipes.length;j++){
                    if (parseInt(recipes[j].number)<parseInt(recipes[i].number)) {
                        var t;
                        t=recipes[i].number;recipes[i].number=recipes[j].number;recipes[j].number=t;
                        t=recipes[i].nominalValue;recipes[i].nominalValue=recipes[j].nominalValue;recipes[j].nominalValue=t;
                        t=recipes[i].lowerTolerance;recipes[i].lowerTolerance=recipes[j].lowerTolerance;recipes[j].lowerTolerance=t;
                        t=recipes[i].upperTolerance;recipes[i].upperTolerance=recipes[j].upperTolerance;recipes[j].upperTolerance=t;
                    }
                }
            }
        }
        
        var resultData = {
                recipes : recipes,
                errorcode : errorcode,
                errorMessage : "" + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
    }    
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cf3dGetAvailableRecipes failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cf3dUpdateMeasures(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
       
        var stationNumber = data.stationNumber;
        var referenceNumber = data.referenceNumber;
        var number = parseFloat(data.number);
        var actualValue = data.actualValue;
        
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";
        
        // API integration -----------------------------------------------------
        
        //----- mdaGetRecipeData ---- //
        var recipeFilters = new Array(new KeyValue("PART_NUMBER", referenceNumber));

        var recipeResultKeys = new Array("MEASURE_NAME","NOMINAL","MIN_VALUE","MAX_VALUE");

        var result_mdaGRD = imsApiService.mdaGetRecipeData(imsApiSessionContext,
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

        var return_value =  result_mdaGRD.return_value;

        if (return_value != 0){
            var res = imsApiService.imsapiGetErrorText(imsApiSessionContext, return_value);
            result.errorString = "cf3dGetAvailableRecipes:mdaGetRecipeDatas|" + return_value + "|" + res.errorString;
            result.return_value = return_value;
            return result;
        }  

        var measures = [];
        var gapValue = 0; 
        var outOfTolerance = false;
        
        for(var x=0;x< result_mdaGRD.recipeResultValues.length/4; x++){
            var number_fromrecipe = result_mdaGRD.recipeResultValues[x*4];
            var nominal = result_mdaGRD.recipeResultValues[x*4+1];
            var lower = result_mdaGRD.recipeResultValues[x*4+2];
            var upper = result_mdaGRD.recipeResultValues[x*4+3];
            
            
            
            if (number == number_fromrecipe){
                if (actualValue >  upper) {
                    gapValue = actualValue - upper;
                    outOfTolerance =  true;
                }
                if (actualValue< lower){
                    gapValue = actualValue - lower;
                    outOfTolerance =  true;
                }   
                
                measures.push(
                    {
                        number: "" + number,
                        nominalValue: "" +nominal,
                        lowerTolerance : "" + (lower-nominal).toFixed(2),
                        upperTolerance: "" + (upper-nominal).toFixed(2),
                        gapValue: "" + gapValue.toFixed(2),
                        isOutOfTolerance:""+outOfTolerance  
                    }
               )
            }
            
        }
        
        
        
        var resultData = {
                measures : measures,
                errorcode : errorcode,
                errorMessage : "" + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
    }    
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cf3dUpdateMeasures failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cf3dValidateMeasures(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
       
        var stationNumber = data.stationNumber;
        var referenceNumber = data.referenceNumber;
        var toolNumber = data.toolNumber;
        var sandCoreNumber = data.sandCoreNumber;
        var measures = data.measures;
        
        // Intermediate variables ----------------------------------------------
        var errorcode = 0;
        var errorMessage = "";
        
        // API integration -----------------------------------------------------
        
        var stationResultUploadValues = [];
        var log ="";
        for (var i=0;i<measures.length;i++){
            stationResultUploadValues.push(0,"0",measures[i].number,measures[i].actualValue,0,0,0);    
            //log += measures[i].number;
        }
        
        //----- mdaGetRecipeData ---- //
        var recipeFilters = new Array(new KeyValue("PART_NUMBER", referenceNumber));

        var recipeResultKeys = new Array("MEASURE_NAME","NOMINAL","MIN_VALUE","MAX_VALUE");

        var result_mdaGRD = imsApiService.mdaGetRecipeData(imsApiSessionContext,
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

        var return_value =  result_mdaGRD.return_value;
        if (return_value != 0) {
            errorcode = return_value;
            errorMessage = getImsApiErrorText(return_value);

            var resultData = {
                    log : log,
                    errorCode : errorcode,
                    errorMessage : errorMessage
                };

            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }
        
        var MES = [];

        var outOfTolerance = false;
        
        for(var x=0;x< result_mdaGRD.recipeResultValues.length/4; x++){
            var name = result_mdaGRD.recipeResultValues[x*4];
            var nominal = result_mdaGRD.recipeResultValues[x*4+1];
            var lower = result_mdaGRD.recipeResultValues[x*4+2];
            var upper = result_mdaGRD.recipeResultValues[x*4+3];
            MES.push(new Measure(name,"","",nominal,lower,upper,""));
        }
        
        
        log += "LEN "+ MES.length + " // ";
        for(var x=0;x< MES.length; x++){
            for(var y=0;y< stationResultUploadValues.length/7; y++){
                //log += ""+stationResultUploadValues[(y*7)+2] + " / ";
                if (MES[x].MEASURE_NAME == stationResultUploadValues[(y*7)+2]){
                    
                    stationResultUploadValues[(y*7)+4] = MES[x].MEASURE_LOWERLIMIT;
                    stationResultUploadValues[(y*7)+5] = MES[x].MEASURE_UPPERLIMIT;
                    stationResultUploadValues[(y*7)+6] = MES[x].MEASURE_NOMINAL;
                    
//                    log += "MES[x].MEASURE_LOWERLIMIT "+ MES[x].MEASURE_LOWERLIMIT+ " | MES[x].MEASURE_UPPERLIMIT " + MES[x].MEASURE_UPPERLIMIT+ " : "
//                          + " | MES[x].MEASURE_NOMINAL " + MES[x].MEASURE_NOMINAL+ " ";
                }
//                if ((stationResultUploadValues[(y*7)+2] == "TOOL_NUMBER")){
//                    stationResultUploadValues[(y*7)+3] = toolNumber;
//                    stationResultUploadValues[(y*7)+4] = "TOOL_NUMBER";
//                    stationResultUploadValues[(y*7)+5] = "TOOL_NUMBER";
//                    stationResultUploadValues[(y*7)+6] = "TOOL_NUMBER";
//                }
//                if ((stationResultUploadValues[(y*7)+2] == "SANDCORE_NUMBER")){
//                    stationResultUploadValues[(y*7)+3] = sandCoreNumber;
//                    stationResultUploadValues[(y*7)+4] = "SANDCORE_NUMBER";
//                    stationResultUploadValues[(y*7)+5] = "SANDCORE_NUMBER";
//                    stationResultUploadValues[(y*7)+6] = "SANDCORE_NUMBER";
//                }
    
            }
        }
        
        var stationResultUploadKeys = new Array ("ERROR_CODE","MEASURE_FAIL_CODE","MEASURE_NAME","MEASURE_VALUE","LOWER_LIMIT","UPPER_LIMIT","NOMINAL");
        stationResultUploadValues.push(0,"0","TOOL_NUMBER",toolNumber,"TOOL_NUMBER","TOOL_NUMBER","TOOL_NUMBER");
        stationResultUploadValues.push(0,"0","SANDCORE_NUMBER",sandCoreNumber,"SANDCORE_NUMBER","SANDCORE_NUMBER","SANDCORE_NUMBER");
     
        //----trUploadStationResult
        var result_trUploadStationResult = imsApiService.trUploadStationResult(imsApiSessionContext,
                    stationNumber,
                    referenceNumber,
                    -1,
                    "-1",
                    "-1",
                    "-1",
                    -1,
                    0,
                    stationResultUploadKeys,
                    stationResultUploadValues);
                    
        var return_value =  result_trUploadStationResult.return_value;
        if (return_value != 0) {
            errorcode = return_value;
            errorMessage = getImsApiErrorText(return_value);

            var resultData = {
                    log : log,
                    errorCode : errorcode,
                    errorMessage : errorMessage
                };

            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }


        var errorcode = 0;
        var errorMessage = "";
        var resultData = {
                log : log,
                errorcode : errorcode,
                errorMessage : "" + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
    }    
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cf3dUpdateMeasures failed: " + e);
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
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
        return result;
    }
    if (result != null) {
        errorText = result.errorString;
    }
    return errorText;
    
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
