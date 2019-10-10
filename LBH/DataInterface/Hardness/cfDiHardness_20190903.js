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
 Faouzi Ben Mabrouk     2019-05-19      Le belier        cfDi                      APIs integration 
 Sami Akkari            2019-06-24      Le belier        cfDi                      Associtating Results to sample serial Numbers
 Sami Akkari            2019-08-29      Le belier        cfDi                      Update for getting the partnumber from API (and not from the parser)
 Sami Akkari            2019-08-29      Le belier        cfDi                      Multiple samples/1 sample handling
 **/

importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.util.constants.imsapi);
importPackage(java.lang);
importPackage(com.itac.mes.api.custom);

function cfDiHardnessUploadResult(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var basketId= data.basketId;
        var sampleId = data.sampleId;
        var operator = data.operator;
        var referenceId = data.referenceId;
        var hardnessTest = data.hardnessTest;
        var cavity = data.cavity;
        var Results = data.results;
        var wipState = "BEFORE_SHOT_BLAST"; 

        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        var return_value = 0;
        
        var TEMP_SERIAL_NUMBER_AR = [];
        var TEMP_PART_NUMBERS_AR = [];
        var TEMP_BASKET_ID = basketId;

        // API integration ------------------------------------------------------
        
        // <shipGetSerialNumberDataForShippingLot> -----------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
        var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
            stationNumber, 
            TEMP_BASKET_ID,
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
            TEMP_PART_NUMBERS_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+1]);
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
        }

        var code = getCodeFromPartNumber(TEMP_PART_NUMBERS_AR[0]);
        logHandler.logMessage("code h+h+h+h"+code);
        var numberOfSamples = 0;
        for(var x=0; x<Results.length; x++){
            if(Results[x].typeResult=="Rm"){
                numberOfSamples += 1;
            }
        } 
        var numberOfMeasurements = 0;
        var refMeasure = Results[0].typeResult;
        var p=0;
        while(p<Results.length){
            if(p>0 && refMeasure==Results[p].typeResult){
                break;
            }
            numberOfMeasurements ++;
            p++;
        }

        logHandler.logMessage("number of sample h+h+h+h "+numberOfSamples);
        logHandler.logMessage("numberOfMeasurements h+h+h+h "+numberOfMeasurements);
        //Hardness check + Min values for tensiles
        switch(code.toUpperCase()) {
            case "B":
                var TEMP_HD_MIN = 80 ;
                var TEMP_HD_MAX = 115;
                
                if(parseInt(hardnessTest)<80 || parseInt(hardnessTest)>115){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =250;
                var TEMP_LE_MIN=210; 
                var TEMP_A_MIN=3;
                
                break;
            
            case "C":  
                var TEMP_HD_MIN = 80 ;
                var TEMP_HD_MAX = 115;    
                
                if(parseInt(hardnessTest)<80 || parseInt(hardnessTest)>115){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =250;
                var TEMP_LE_MIN=210; 
                var TEMP_A_MIN=3;
                
                break;
            
            case "A":      
                var TEMP_HD_MIN = 80 ;
                var TEMP_HD_MAX = 9999;
                
                if(parseInt(hardnessTest)<80 ){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =250;
                var TEMP_LE_MIN=210; 
                var TEMP_A_MIN=3;
                
                break;
            
            case "D":      
                var TEMP_HD_MIN = 89 ;
                var TEMP_HD_MAX = 9999;

                if(parseInt(hardnessTest)<89){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =290;
                var TEMP_LE_MIN=220; 
                var TEMP_A_MIN=3;
                
                break;
            
            case "F":
                var TEMP_HD_MIN = 89 ;
                var TEMP_HD_MAX = 9999;   

                if(parseInt(hardnessTest)<89){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =290;
                var TEMP_LE_MIN=220; 
                var TEMP_A_MIN=3;
                
                break;
            
            case "H":  
                var TEMP_HD_MIN = 100 ;
                var TEMP_HD_MAX = 130;   
                
                if(parseInt(hardnessTest)<100 || parseInt(hardnessTest)>130){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =260;
                var TEMP_LE_MIN=210; 
                var TEMP_A_MIN=3;
                
                break;
            
            case "I":  
                var TEMP_HD_MIN = 100 ;
                var TEMP_HD_MAX = 130;  

                if(parseInt(hardnessTest)<100 || parseInt(hardnessTest)>130){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =260;
                var TEMP_LE_MIN=210; 
                var TEMP_A_MIN=3;
                
                break;
            
            case "E":      
                var TEMP_HD_MIN = 89 ;
                var TEMP_HD_MAX = 9999;  
                
                if(parseInt(hardnessTest)<89 ){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =290;
                var TEMP_LE_MIN=220; 
                var TEMP_A_MIN=3;
                
                break;
            
            case "G":      
                var TEMP_HD_MIN = 89 ;
                var TEMP_HD_MAX = 9999;

                if(parseInt(hardnessTest)<89){
                    wipState = "HARDNESS_AND_TENSILE_NOK";
                }
                var TEMP_RM_MIN =290;
                var TEMP_LE_MIN=220; 
                var TEMP_A_MIN=3;
                
                break;  
            default: 
                var resultData = {
                    errorCode : -16000,
                    errorMessage : "Invalid reference in the file name."
                };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;

        }
        //Upload of the results for all serial numbers

        var recipeVersionId=-1;	    	    
        var duplicateSerialNumber=0;   
        var bookDate=-1;
        var cycleTime=0;
        var recipeVersionMode=-1;
        var resultUploadKeys = new Array("ERROR_CODE","LOWER_LIMIT", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE", "UNIT", "UPPER_LIMIT");
        
        for (var x=0;x<TEMP_SERIAL_NUMBER_AR.length;x++){
            
            for(var y=0; y<Results.length/numberOfMeasurements; y++){
                // <trUploadResultDataAndRecipe> -----------------------------------   
                var resultUploadValues = new Array(0, "", 0, "HARDNESS_BASKET_ID", basketId, "", "",
                    0, "", 0, "HARDNESS_SAMPLE_ID", sampleId, "", "",
                    0, "", 0, "HARDNESS_OPERATOR", operator, "", "",
                    0, "", 0, "HARDNESS_REF_ID", code.toUpperCase(), "", "",
                    0, TEMP_HD_MIN, 0, "HARDNESS_TEST", hardnessTest, "", TEMP_HD_MAX,
                    0, "", 0, "HARDNESS_CAVITY_NUMBER", cavity, "", "");      
                                                
                
                resultUploadValues.push(0, TEMP_RM_MIN, 0, Results[y*numberOfMeasurements].typeResult, Results[y*numberOfMeasurements].valueResult, Results[y*numberOfMeasurements].unitResult, "");
                resultUploadValues.push(0, TEMP_LE_MIN, 0, Results[y*numberOfMeasurements+1].typeResult, Results[y*numberOfMeasurements+1].valueResult, Results[y*numberOfMeasurements+1].unitResult, "");
                resultUploadValues.push(0, TEMP_A_MIN, 0, Results[y*numberOfMeasurements+2].typeResult, Results[y*numberOfMeasurements+2].valueResult, Results[y*numberOfMeasurements+2].unitResult, "");
                resultUploadValues.push(0, "", 0, Results[y*numberOfMeasurements+3].typeResult, Results[y*numberOfMeasurements+3].valueResult, Results[y*numberOfMeasurements+3].unitResult, "");
                
                

                logHandler.logMessage("######### trUploadResultDataAndRecipeResult > " + y);
                var Result_trUploadResultDataAndRecipeResult = imsApiService.trUploadResultDataAndRecipe(imsApiSessionContext, 
                        stationNumber, 
                        2, 
                        recipeVersionId, 
                        TEMP_SERIAL_NUMBER_AR[x], 
                        "-1", 
                        0, 
                        duplicateSerialNumber, 
                        bookDate, 
                        cycleTime, 
                        recipeVersionMode, 
                        resultUploadKeys, 
                        resultUploadValues
                    );

                return_value = Result_trUploadResultDataAndRecipeResult.return_value;  

                if (return_value != 0) {
                    errorCode = return_value;
                    errorMessage = getImsApiErrorText(return_value);
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "[trUploadResultDataAndRecipe] ["+y+"]" + errorMessage
                        };
                    result.outArgs = [JSON.stringify(resultData)];
                    result.return_value = return_value;
                    return result;
                }
            }
        }


        if(wipState=="HARDNESS_AND_TENSILE_NOK"){
            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("WIP_STATE", wipState ,"0");
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                TEMP_BASKET_ID,
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
            
            var resultData = {
                errorCode : errorCode,
                errorMessage : "" + errorMessage
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;

        }else if (wipState!="HARDNESS_AND_TENSILE_NOK" && numberOfSamples>=2){
            logHandler.logMessage("multiple samples");
            //first tensile test
            var test1="OK";
            var test2="OK";

            //RM + LE + A check
            if( parseInt(Results[0].valueResult)< TEMP_RM_MIN || parseInt(Results[1].valueResult)< TEMP_LE_MIN || parseInt(Results[2].valueResult)< TEMP_A_MIN){
                var test1 = "NOK"
            }
            
            if(test1=="NOK"){
                //second tensile test
                if( parseInt(Results[4].valueResult)< TEMP_RM_MIN || parseInt(Results[5].valueResult)< TEMP_LE_MIN || parseInt(Results[6].valueResult)< TEMP_A_MIN){
                    var test2 = "NOK"
                }

                if(test2=="NOK"){
                    wipState == "HARDNESS_AND_TENSILE_NOK";
                }
                // <attribAppendAttributeValues> ------------------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("WIP_STATE",wipState ,"0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_BASKET_ID,
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
                var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result; 

            }else{
                //if test1 tensil is OK then basket is accepted
                // <attribAppendAttributeValues> ------------------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("WIP_STATE",wipState ,"0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_BASKET_ID,
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

                var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result; 
            }            
        }else if(wipState!="HARDNESS_AND_TENSILE_NOK" && numberOfSamples==1){
            logHandler.logMessage("one sample");

            if( parseInt(Results[0].valueResult)< TEMP_RM_MIN || parseInt(Results[1].valueResult)< TEMP_LE_MIN || parseInt(Results[2].valueResult)< TEMP_A_MIN){
                wipState ="HARDNESS_AND_TENSILE_NOK";
            }

            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("WIP_STATE",wipState ,"0");
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                TEMP_BASKET_ID,
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

            var resultData = {
                errorCode : errorCode,
                errorMessage : "" + errorMessage
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result; 
              

        }else{
            var resultData = {
                errorCode : 89899,
                errorMessage : "No samples found in the file" 
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result; 
        }
    }    
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfDiHardnessUploadResult failed: " + e);
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


function getCodeFromPartNumber(partNumber) {
       
    if (partNumber =="141116-10410" || partNumber== "141115-10410"){
        return "A";

    }else if(partNumber=="13.4426-9974.9"||partNumber== "13.4426-9973.9"){
        return "B";

    }else if(partNumber=="13.4446-9963.9"||partNumber== "13.4446-9964.9"){
        return "C";

    }else if(partNumber=="51-D3606-17110"||partNumber== "51-D3606-27110"){
        return "D";

    }else if(partNumber=="51-D3507-17110"||partNumber== "51-D3507-27110"){
        return "E";

    }else if(partNumber=="51-D3508-17110"||partNumber== "51-D3508-27110"){
        return "F";

    }else if(partNumber=="51-D3517-17110"||partNumber== "51-D3517-27110"){
        return "G";

    }else if(partNumber=="13.4446-9801.9"||partNumber== "13.4446-9802.9"){
        return "H";

    }else if(partNumber=="13.4446-9805.9"||partNumber== "13.4446-9806.9"){
        return "I";
    }else{
        return "Error";
    }
}
