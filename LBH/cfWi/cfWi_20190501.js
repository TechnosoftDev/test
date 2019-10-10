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
 Faouzi Ben Mabrouk     2018-11-12      Le Belier        cfWi                    Release for test v1.1 (using static json responses)
 Sami Akkari            2019-05-09      Le Belier        cfWi                    Integrating the APIs 
 Sami Akkari            2019-05-17      Le Belier        cfWi                    Updates to handle workorder cluster use

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

function cfWiGetWorkInstructions(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var userId = data.userId;
        // Intermediate variables ----------------------------------------------
        
        var errorCode = 0;
        var errorMessage = "[OK]";      
        
        // API integration -----------------------------------------------------
        // <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("CONFIGURATION_MAP");
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
        var return_value1 = result_attribGetAttributeValues.return_value;

        if (return_value != 0 && return_value != -936 ) {

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
        var TEMP_DOC_CONF = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(TEMP_DOC_CONF!= ""){
            var TEMP_CONF_USER = TEMP_DOC_CONF.split("|")[0];
        }else{
            var TEMP_CONF_USER = "";
        }
        
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BV_AR = [];
        var TEMP_PN_AR = [];
        var TEMP_PV_AR = [];
        var TEMP_WO_AR = [];
        var TEMP_POS_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 

        // <trGetMultiStationSettings> ---------------------------------------------
        var stationMultiSettingResultKeys = new Array ("BOM_VERSION", "PART_NUMBER","POSITION", "PROCESS_VERSION", "WORKORDER_NUMBER");
        
        var result_trGetMultiStationSettings = imsApiService.trGetMultiStationSettings(imsApiSessionContext, 
            stationNumber, 
            stationMultiSettingResultKeys);
            
        var return_value = result_trGetMultiStationSettings.return_value;
        
        if (return_value!=0){
            
            errorCode = return_value;
            errorMessage = "[trGetMultiStationSettings] " + getImsApiErrorText(return_value);   
            
            var resultData = {
                errorCode : "" + errorCode,
                errorMessage : "" + errorMessage
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        for (x=0; x< result_trGetMultiStationSettings.stationMultiSettingsResultValues.length/5; x++) {
            TEMP_BV_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+0]);
            TEMP_PN_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+1]);
            TEMP_PV_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+3]);
            TEMP_WO_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+4]);
            TEMP_POS_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+2]);
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 
        var  TEMP_IDS = []; //list of all ids generated
        var  TEMP_MDA_NAMES = []; // list of all documents mda Names generated
        var  TEMP_EXTENSIONS = []; // list of all documents extensions generated
        var  TEMP_CONTENT_AR = [];
        var  TEMP_DOC_PN_AR = [];
        var  TEMP_NAME = "";
        var  TEMP_EXT = "";
        var  documents = []; //list of documents with extension, ID and content
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        for (x=0; x< TEMP_WO_AR.length; x++) {
            // < mdaGetDocuments> -------------------------------------------------
            var attributeFilters = new Array(new KeyValue("BOM_VERSION", TEMP_BV_AR[x]), 
                new KeyValue("PART_NUMBER", TEMP_PN_AR[x]), 
                new KeyValue("PROCESS_VERSION", TEMP_PV_AR[x]), 
                new KeyValue("STATION_NUMBER", stationNumber));                 
                                            
            var dataTypeFilters = new Array(new KeyValue("MDA_ACTIVE", 1), new KeyValue("MDA_DATA_TYPE", 3));
            var mdaResultKeys = new Array("MDA_DOCUMENT_ID", "MDA_FILE_NAME", "MDA_NAME");
            
            var result_mdaGetDocuments = imsApiService.mdaGetDocuments(imsApiSessionContext, 
                stationNumber, 
                attributeFilters,
                dataTypeFilters,
                mdaResultKeys);
                
            return_value = result_mdaGetDocuments.return_value;
            
            if (return_value!=0){
                
                errorCode = return_value;
                errorMessage = "[mdaGetDocuments] " + getImsApiErrorText(return_value);
                
                var resultData = {
                    errorCode : "" + errorCode,
                    errorMessage : "" + errorMessage
                    };
                    
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            /* collecting all ids, extensions and documents names*/
            for (y=0; y< result_mdaGetDocuments.mdaResultValues.length/3; y++) {

                TEMP_IDS.push( "" + result_mdaGetDocuments.mdaResultValues[y*3+0]);
                
                TEMP_MDA_NAMES.push("" + result_mdaGetDocuments.mdaResultValues[y*3+2]);
                
                TEMP_NAME  = "" + result_mdaGetDocuments.mdaResultValues[y*3+1];
                TEMP_EXT  = TEMP_NAME.substr(TEMP_NAME.lastIndexOf('.') + 1); 
                TEMP_EXTENSIONS.push(TEMP_EXT);
                
                TEMP_DOC_PN_AR.push(TEMP_PN_AR[y]);
                
            }  
        }

        for (x=0; x < TEMP_IDS.length; x++) { 
            
             // < mdaGetDocumentContent> to get content of each doc-------------
            var result_mdaGetDocumentContent = imsApiService.mdaGetDocumentContent(imsApiSessionContext, 
                stationNumber, 
                TEMP_IDS[x]);
                                                                                   
            var return_value = result_mdaGetDocumentContent.return_value;

            if (return_value!=0){
                errorCode = return_value;
                errorMessage = "[mdaGetDocumentContent] " + getImsApiErrorText(return_value);
            
            
                var resultData = {
                    errorCode : "" + errorCode,
                    errorMessage : "" + errorMessage
                };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
                
            }    
            var TEMP_CONTENT = "";
            var content = result_mdaGetDocumentContent.content;
            //------------------------------------------------------------------
            var StrContent="";
        
            for (var y=0;y<content.length;y++){
                var i=parseInt(content[y]);
                if (i<0) {i+=256;}
                StrContent += String.fromCharCode(i);
            }
      
            var content_b64 = base64Encode(StrContent);
            // -----------------------------------------------------------------
            TEMP_CONTENT = content_b64;
            
            TEMP_CONTENT_AR.push(TEMP_CONTENT);
        }

        for (x=0; x < TEMP_IDS.length; x++) {
            if (TEMP_DOC_CONF =="" || userId != TEMP_CONF_USER || return_value1 == -936 ){
                documents.push({  
                    id : TEMP_IDS[x],
                    name : TEMP_MDA_NAMES[x],
                    documentExt : TEMP_EXTENSIONS[x],
                    validationState : 0,
                    documentContent: "" + TEMP_CONTENT_AR[x],
                    partNumber : TEMP_DOC_PN_AR[x]});   
            }else{
                documents.push({  
                        id : TEMP_IDS[x],
                        name : TEMP_MDA_NAMES[x],
                        documentExt : TEMP_EXTENSIONS[x],
                        validationState : parseInt("" + getDocumentState(TEMP_DOC_CONF,TEMP_IDS[x]).tempState),
                        documentContent: "" + TEMP_CONTENT_AR[x],
                        partNumber : TEMP_DOC_PN_AR[x]});  
            }  
        }	

        if (TEMP_DOC_CONF =="" || userId != TEMP_CONF_USER || return_value1 == -936 ){
            TEMP_DOC_CONF = "" + userId + "|";
            for (x=0; x< TEMP_IDS.length; x++) {
                TEMP_DOC_CONF += TEMP_IDS[x]+":0,"
            }
            TEMP_DOC_CONF = TEMP_DOC_CONF.slice(0,TEMP_DOC_CONF.length-1); 

            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("CONFIGURATION_MAP",TEMP_DOC_CONF,"0");
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
            
            errorCode = -50005;
            errorMessage = "Documents configuration is reset." ;
        
            var resultData = {
                documents : documents,
                errorCode : "" + errorCode,
                errorMessage : "" + errorMessage
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;  
        }
        // JSON result ---------------------------------------------------------
        var resultData = {
            documents : documents,
            errorCode: errorCode,
            errorMessage : errorMessage
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfWiGetWorkInstructions failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfWiConfirmWorkInstructions(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var userId = data.userId;
        var id = data.id;

       
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
       
        // API integration -----------------------------------------------------

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BV_AR = [];
        var TEMP_PN_AR = [];
        var TEMP_PV_AR = [];
        var TEMP_WO_AR = [];
        var TEMP_POS_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 

        // <trGetMultiStationSettings> ---------------------------------------------
        var stationMultiSettingResultKeys = new Array ("BOM_VERSION", "PART_NUMBER","POSITION", "PROCESS_VERSION", "WORKORDER_NUMBER");
        
        var result_trGetMultiStationSettings = imsApiService.trGetMultiStationSettings(imsApiSessionContext, 
            stationNumber, 
            stationMultiSettingResultKeys);
            
        var return_value = result_trGetMultiStationSettings.return_value;
        
        if (return_value!=0){
            
            errorCode = return_value;
            errorMessage = "[trGetMultiStationSettings] " + getImsApiErrorText(return_value);   
            
            var resultData = {
                errorCode : "" + errorCode,
                errorMessage : "" + errorMessage
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        for (x=0; x< result_trGetMultiStationSettings.stationMultiSettingsResultValues.length/5; x++) {
            TEMP_BV_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+0]);
            TEMP_PN_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+1]);
            TEMP_PV_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+3]);
            TEMP_WO_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+4]);
            TEMP_POS_AR.push("" + result_trGetMultiStationSettings.stationMultiSettingsResultValues[x*5+2]);
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_ID_AR = [];//list of all ids generated
        var TEMP_NAME_AR = [];// list of all documents mda Names generated
        var TEMP_EXTENSION_AR = [];// list of all documents extensions generated
        var TEMP_STATE = [];//list of all states
        var TEMP_DOC_PN_AR = [];
        var TEMP_CONTENT_AR = [];
        var documents = []; // list of all documents objects and their infos
        var TEMP_ID = "";
        var TEMP_MDA_NAME = "";
        var TEMP_NAME = "";
        var TEMP_EXT = "";
        var TEMP_ERROR = 0;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        for (x=0; x< TEMP_WO_AR.length; x++) {
            // < mdaGetDocuments> -------------------------------------------------
            var attributeFilters = new Array(new KeyValue("BOM_VERSION", TEMP_BV_AR[x]), 
                new KeyValue("PART_NUMBER", TEMP_PN_AR[x]), 
                new KeyValue("PROCESS_VERSION", TEMP_PV_AR[x]), 
                new KeyValue("STATION_NUMBER", stationNumber));                 
                                            
            var dataTypeFilters = new Array(new KeyValue("MDA_ACTIVE", 1), new KeyValue("MDA_DATA_TYPE", 3));
            var mdaResultKeys = new Array("MDA_DOCUMENT_ID", "MDA_FILE_NAME", "MDA_NAME");
            
            var result_mdaGetDocuments = imsApiService.mdaGetDocuments(imsApiSessionContext, 
                stationNumber, 
                attributeFilters,
                dataTypeFilters,
                mdaResultKeys);
                
            return_value = result_mdaGetDocuments.return_value;
            
            if (return_value!=0){
                
                errorCode = return_value;
                errorMessage = "[mdaGetDocuments] " + getImsApiErrorText(return_value);
                
                var resultData = {
                    errorCode : "" + errorCode,
                    errorMessage : "" + errorMessage
                    };
                    
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            /* collecting all ids, extensions and documents names*/
            for (y=0; y< result_mdaGetDocuments.mdaResultValues.length/3; y++) {

                TEMP_ID_AR.push( "" + result_mdaGetDocuments.mdaResultValues[y*3+0]);
                
                TEMP_NAME_AR.push("" + result_mdaGetDocuments.mdaResultValues[y*3+2]);
                
                TEMP_NAME  = "" + result_mdaGetDocuments.mdaResultValues[y*3+1];
                TEMP_EXT  = TEMP_NAME.substr(TEMP_NAME.lastIndexOf('.') + 1); 
                TEMP_EXTENSION_AR.push(TEMP_EXT);
                
                TEMP_DOC_PN_AR.push(TEMP_PN_AR[y]);
                
            }  
        }

        // < attribGetAttributeValues> -----------------------------------------
        var attributeCodeArray = new Array("CONFIGURATION_MAP");
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
        
        if (return_value != 0 && return_value != -936) {
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
        if(return_value == -936){
            var TEMP_CONF_MAP = "userId|";
        }else{   
            var TEMP_CONF_MAP = result_attribGetAttributeValues.attributeResultValues[1];
        }
        
        var TEMP_OBJECT = getUserConfirmationState(userId, TEMP_ID_AR, id, TEMP_STATE, TEMP_CONF_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0 ){
   
            errorCode = -2000;
            errorMessage = "[getUserConfirmationState] "+ TEMP_OBJECT.message;

            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("CONFIGURATION_MAP", TEMP_OBJECT.confMap,"0");
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

            for (x=0; x <TEMP_ID_AR.length; x++) { 

                // < mdaGetDocumentContent> to get content of each doc--------------
                var result_mdaGetDocumentContent = imsApiService.mdaGetDocumentContent(imsApiSessionContext, 
                    stationNumber, 
                    TEMP_ID_AR[x]);
                                                                                        
                var return_value = result_mdaGetDocumentContent.return_value;    
                
                if (return_value!=0){
                    errorCode = return_value;
                    errorMessage = "[mdaGetDocumentContent] " + getImsApiErrorText(return_value);
                
                
                    var resultData = {
                        errorCode : "" + errorCode,
                        errorMessage : "" + errorMessage
                    };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    
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
          
                var content_b64 = base64Encode(StrContent);
                // ------------------------------------------------------------------
                TEMP_CONTENT = content_b64;
    
                TEMP_CONTENT_AR.push("" + TEMP_CONTENT);
                
            }
    
            for (x=0; x < TEMP_ID_AR.length; x++) { 
                documents.push({  
                    id : TEMP_ID_AR[x],
                    name : TEMP_NAME_AR[x],
                    documentExt : TEMP_EXTENSION_AR[x],
                    documentContent: "" + TEMP_CONTENT_AR[x],
                    validationState : parseInt("" + TEMP_STATE[x]),
                    partNumber : TEMP_DOC_PN_AR[x]
                });
    
            }
            var k = 0 ;
            for (var j=0; j<documents.length; j++){
                if (documents[j].validationState=="1"){
                    k +=1 ;
                }
            }
            var resultData = {
                errorCode : errorCode,
                errorMessage : "" + errorMessage,
                numberOfDocuments: documents.length,
                numberOfValidDocuments :k,
                documents : documents
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_STATE = TEMP_OBJECT.tempState;
        TEMP_CONF_MAP = TEMP_OBJECT.confMap;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("CONFIGURATION_MAP",TEMP_CONF_MAP,"0");
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

       
        for (x=0; x <TEMP_ID_AR.length; x++) { 

            // < mdaGetDocumentContent> to get content of each doc--------------
            var result_mdaGetDocumentContent = imsApiService.mdaGetDocumentContent(imsApiSessionContext, 
                stationNumber, 
                TEMP_ID_AR[x]);
                                                                                    
            var return_value = result_mdaGetDocumentContent.return_value;    
            
            if (return_value!=0){
                errorCode = return_value;
                errorMessage = "[mdaGetDocumentContent] " + getImsApiErrorText(return_value);
            
            
                var resultData = {
                    errorCode : "" + errorCode,
                    errorMessage : "" + errorMessage
                };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                
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
      
            var content_b64 = base64Encode(StrContent);
            // ------------------------------------------------------------------
            TEMP_CONTENT = content_b64;

            TEMP_CONTENT_AR.push("" + TEMP_CONTENT);
            
        }

        for (x=0; x < TEMP_ID_AR.length; x++) { 
            documents.push({  
                id : TEMP_ID_AR[x],
                name : TEMP_NAME_AR[x],
                documentExt : TEMP_EXTENSION_AR[x],
                documentContent: "" + TEMP_CONTENT_AR[x],
                validationState : parseInt("" + TEMP_STATE[x]),
                partNumber : TEMP_DOC_PN_AR[x]
            });

        }
        var k = 0 ;
        for (var j=0; j<documents.length; j++){
            if (documents[j].validationState=="1"){
                k +=1 ;
            }
        }
        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            numberOfDocuments: documents.length,
            numberOfValidDocuments : k,
            documents : documents
        };

       result.return_value = errorCode ;
       result.outArgs = [JSON.stringify(resultData)];
       // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfWiGetWorkInstructions failed: " + e);
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
function getDocumentState(confMap, id){
    confMap = confMap + "";
    var userId = confMap.split("|")[0];
    var docIds = confMap.split("|")[1];
    var id_state = docIds.toString().split(",");
    
    var ids = []; //list of document ids in the config
    var states = [];//list of document states in the config  
    var flag = false;
    var state = "";

    for(var i=0; i<id_state.length; i++){
        ids.push(id_state[i].split(":")[0]);
        states.push(id_state[i].split(":")[1]);
    } 
    for(var i=0; i<ids.length; i++){
        if(id == ids[i]){
            flag = true;
            state = states[i];
        }
    }
    if(flag == false){
        return{
            errorCode : 0,
            errorMessage : "Id not found in documents configuration.",
            confmap : confMap,
            id: id
        }
    }
    return {
        errorCode : 0,
        errorMessage : "[OK]",
        confmap : confMap,
        tempState : state,
        id : id
    }
}
function getUserConfirmationState(user, mda_ids, id, tempState, confMap, err){
    
    confMap = confMap + "";
    var userId = confMap.split("|")[0];
    var docIds = confMap.split("|")[1];
    var id_state = docIds.toString().split(",");

    var ids = []; //list of document ids in the config
    var states = [];//list of document states in the config   
    var state = "1"; 
    var id_flag = false;
    err = 0; 

    for(var i=0; i<id_state.length; i++){
        ids.push(id_state[i].split(":")[0]);
        states.push(id_state[i].split(":")[1]);
    }

    //new user id : reinitialize the confMap with the ids registered on the station for that part number
    if(user != userId){
        confMap = user + "|" ;
        for(i=0; i<mda_ids.length; i++){
                confMap += mda_ids[i] + ":" + "0" + ",";
                tempState.push("0");
        }
        confMap = confMap.slice(0,confMap.length-1);
        
        return {
            confMap : confMap,
            tempState: tempState,
            err: 1,
            message :"New user logged in! Configuration reinitialized."
        }; 
    }   
 
    //id = -1 return all current ids and their states
    if(id=="-1" || id == ""){
        for(i=0; i<ids.length; i++){
            tempState.push(states[i]);
        }
        return {
            confMap :confMap,
            tempState: tempState,
            err: 1,
            message: "No id selected."
        }; 
    }
 
    //Ids registered on the station are different from the ones in the config
    var k = 0;  
    for(i=0; i<ids.length; i++){
        
        for(var j=0; j<mda_ids.length; j++){
            if(mda_ids[j]==ids[i]){
                k+=1;
            }
        }   
    }

    if(k != mda_ids.length || ids.length != mda_ids.length ){
            confMap = userId + "|" ;
 
            for(j=0; j<mda_ids.length; j++){
                    confMap += mda_ids[j] + ":" + "0" + ",";
                    tempState.push("0");
                }
            confMap = confMap.slice(0,confMap.length-1);

            return{
                confMap : confMap,
                tempState: tempState,
                err: 1,
                message: "Station documents and configuration documents do not match. Configuration reinitialized." 
            };
        }
    for(i=0; i<ids.length; i++){
        if(id==ids[i]){
            //document already confirmed  
            if(states[i]== state){
                return{
                    confMap : confMap,
                    tempState: states,
                    err: 2,
                    message: "Document " + id + " already confirmed."  
                };
            }

            id_flag = true;
            states[i]= state;  
        }
        tempState.push(states[i]);
    }
    //if all good, update the config with the newly confirmed document
    confMap = user + "|" ;

    for(i=0; i<mda_ids.length; i++){
        confMap += ids[i] + ":" + states[i] + ",";
    }
    confMap = confMap.slice(0,confMap.length-1);
 
    if (id_flag==false){
        return{
        confMap : confMap,
        tempState: tempState,
        err: 1,
        message: "Document "+id+" not found."  
        };
    }

    return{
        confMap : confMap,
        tempState: tempState,
        err: 0,
        message: "Document "+id+" confirmed"  
    };
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



