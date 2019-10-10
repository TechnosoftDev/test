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
 Faouzi Ben Mabrouk     2019-05-19      Le belier        cfDiSpectro               APIs integration 
 Sami Akkari     		2019-06-30      Le Belier        cfDiSpectro               Add sourceStation condition
 Sami Akkari     		2019-07-30      Le Belier        cfDiSpectro			   Add line-->itac station mapping	                      
 Ala Khiari             2019-10-09      Le Belier        cfDiSpectro               Add config functions
 **/

importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.util.constants.imsapi);
importPackage(java.lang);
importPackage(com.itac.mes.api.custom);

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
    get meltStation from melt ID
    in  : configContent, id
    out : 
        { 
            meltingStation                  //? melting station
        }
    ============================================================================
*/
function fct_getMeltStationFromId(configContent, id) {
    var errorCode = 0;
    var errorMessage = "";
    var meltingStation = "-1";

    var configuration = configContent.melting.meltingLines;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.meltingLines is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            meltingStation: meltingStation
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].lineId == id) {
            meltingStation = configuration[i].stationNumber;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        meltingStation: meltingStation
    }
}
/*  ============================================================================
*/

function cfDiSpectroUploadResult(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var datetime= data.datetime;
        var sampleId = data.sampleId;
        var lineId = data.lineId;
        var alloyType = data.alloyType;
        var qualityProgram = data.qualityProgram;
        var testType = data.testType;
        var elements = data.elements;
        var results = data.results;
       

        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        var return_value = 0;
        
        var TEMP_MELT_BATCH = "";
        var TEMP_ELE_AR = elements.split("\|");
		var TEMP_RES_AR = results.split("\|");
        // API integration -----------------------------------------------------
		var configContent = fct_readDocument(stationNumber);
		var sourceStation = fct_getMeltStationFromId(configContent,lineId).meltingStation;
        
        if (sourceStation != ""){
			// <attribGetAttributeValues> ------------------------------------------
			var attributeCodeArray = new Array("BATCH_LIST");
			var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
			var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
				stationNumber, 
				7,
				sourceStation,
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
			
			// ---------------------------------------------------------------------
			TEMP_MELT_BATCH = ""+result_attribGetAttributeValues.attributeResultValues[1]
			// ---------------------------------------------------------------------
			
			var recipeVersionId=-1;	    	    
			var duplicateSerialNumber=0;   
			var bookDate=-1;
			var cycleTime=0;
			var recipeVersionMode=-1;
			var resultUploadKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE");
			var resultUploadValues = new Array(0, 0, "SPECTRO_DATETIME", datetime,
											   0, 0, "SPECTRO_SAMPLE_ID", sampleId,
											   0, 0, "SPECTRO_LINE_ID", lineId,
											   0, 0, "SPECTRO_ALLOY_TYPE", alloyType,
											   0, 0, "SPECTRO_PROGRAM_NAME", qualityProgram,
											   0, 0, "SPECTRO_TEST_TYPE", testType
											); 
			
			for (var x=0;x<TEMP_ELE_AR.length;x++){
				resultUploadValues.push(0, 0, TEMP_ELE_AR[x], TEMP_RES_AR[x]);
			}
			
			// <trUploadResultDataAndRecipe> -----------------------------------
			var Result_trUploadResultDataAndRecipeResult = imsApiService.trUploadResultDataAndRecipe(imsApiSessionContext, 
					stationNumber, 
					2, 
					recipeVersionId, 
					TEMP_MELT_BATCH, 
					-1, 
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
						errorMessage : "[trUploadResultDataAndRecipe] " + errorMessage
					};
				result.outArgs = [JSON.stringify(resultData)];
				result.return_value = return_value;
				return result;
			}
        }
		
     
        // JSON result ---------------------------------------------------------    
        var resultData = {
                meltBatch : TEMP_MELT_BATCH,
                errorCode : errorCode,
                errorMessage : "" + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
    }    
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfDiSpectroUploadResult failed: " + e);
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