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
 Sami Akkari            2019-03-19      Le Belier        cfTp                    First Release
 Sami Akkari            2019-04-02      Le Belier        cfTp                    Adding workorder cluster
 Sami Akkari            2019-04-19      Le Belier        cfTp                    Replacing workorder cluster with trUploadState
 Sami Akkari            2019-05-15      Le Belier        cfTp                    Add cfTpCancelTrolley
 Sami Akkari            2019-06-03      Le Belier        cfTp                    Fix quantity for batches + Balance the batch ID generation
 Sami Akkari            2019-06-03      Le Belier        cfTp                    Add part numbers selection linked to the trolley
 Sami Akkari            2019-07-05      Le Belier        cfTp                    Update part number list and LINKED_PN append
 Sami Akkari            2019-07-13      Le Belier        cfTp                    Add wip state conditions for LINKED_PN append
 Sami Akkari            2019-07-13      Le Belier        cfTp                    Add max quantities for batches
 Sami Akkari            2019-07-30      Le Belier        cfTp                    Re-arrange error codes and messages
 Sami Akkari            2019-08-29      Le Belier        cfTp                    Add scrap gap and shooting number updates for OPC
 Sami Akkari            2019-08-29      Le Belier        cfTp                    Add conditions to not use OPC features in croning and Scrap stations 
 Sami Akkari            2019-08-30      Le Belier        cfTp                    Add Interlocking for trolleys with To scrap wip state 
 Sami Akkari            2019-08-31      Le Belier        cfTp                    Update shooting gap feature
 Sami Akkari            2019-09-05      Le Belier        cfTp                    Take into consideration the opended WOs
 Sami Akkari            2019-10-09      Le Belier        cfTp                    Add configuration functions in cfTpGetPartNumber + cfTpChangeTrolley
 
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
    get product information for sandcore
    in  : configContent, productFamily
    out : 
        { 
            configuration           //? configContent.sandCoreProducts (json)
            linkedPartNumbers       //? linked part numbers to the trolley
            maxTrolleyQuantity      //? trolley capacity based on linked products
        }
    ============================================================================
*/
function fct_getLinkedProduct(configContent, productFamily) {
    var errorCode = 0;
    var errorMessage = "";
    var linkedPartNumbers = "-1";
    var maxTrolleyQuantity = -1;

    var configuration = configContent.sandCoreProducts;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".sandCoreProducts is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            configuration: configuration,
            linkedPartNumbers: linkedPartNumbers,
            maxTrolleyQuantity: maxTrolleyQuantity
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].productFamily == productFamily) {
            linkedPartNumbers = configuration[i].linkedPartNumbers;
            maxTrolleyQuantity = configuration[i].maxTrolleyQuantity;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        configuration: configuration,
        linkedPartNumbers: linkedPartNumbers,
        maxTrolleyQuantity: maxTrolleyQuantity
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get available product from the configuration
    in  : configContent
    out : 
        { 
            productFamily[]         //? available productFamilys
        }
    ============================================================================
*/
function fct_getProductFamily(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var productFamily = [];

    var configuration = configContent.sandCoreProducts;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".sandCoreProducts is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            productFamily: productFamily
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        productFamily.push(configuration[i].productFamily);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        productFamily: productFamily
    }
}
/*  ============================================================================
*/

function cfTpGetTrolleyPackingInfo(jsonData) {
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
        var TEMP_SC_TROLLEY_MAP = result_attribGetAttributeValues.attributeResultValues[4];
        var TEMP_SC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_ERROR = 0;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        var TEMP_OBJECT = updateMap(positions, TEMP_SC_TROLLEY_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0 && TEMP_ERROR != 2){
   
            errorCode = -10000;
            errorMessage = "[Error in updatenMap] " + TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        if(TEMP_ERROR == 2){
            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("SC_TROLLEY_MAP",TEMP_OBJECT.map,"0", "SC_PART_MAP",TEMP_OBJECT.map,"0");
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
                trolleys : trolleys
            };
        
            result.return_value = errorCode ;
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
            TEMP_OBJECT = getIdFromPosition(positions[y], TEMP_SC_TROLLEY_MAP, TEMP_TROLLEY_ID, TEMP_ERROR);
            TEMP_ERROR = TEMP_OBJECT.err;

            if(TEMP_ERROR != 0 ){
   
                errorCode = -10001;
                errorMessage = "[Error in getIdFromPosition] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
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
                    result.return_value = errorCode ;
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
                    TEMP_BATCH_ID_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
                    TEMP_PART_NUMBER_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+1]);
                    TEMP_PART_DESC_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+0]);
                    TEMP_WORKORDER_NUMBER_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+4]);

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
                        result.return_value = errorCode ;
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

        
        // JSON result ---------------------------------------------------------
        var k = 0;
        if(trolleyId== undefined || trolleyId==""){
            var resultData = {
                errorCode : errorCode,
                errorMessage : "" + errorMessage,
                trolleys : trolleys
            };  
        }else{
            for(j=0; j< trolleys.length;j++){ 
                if(trolleyId==trolleys[j].trolley.trolleyId){
                    k+=1;
                    var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage,
                        trolleys : trolleys[j]
                    };  
                }
            }
            if(k==0){ 
                errorCode = -10002;
                errorMessage = "Trolley not found in the configuration";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;   
            }

        }
       
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTpGetTrolleyPackingInfo failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfTpCancelTrolley(jsonData) {
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
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
        var TEMP_SC_TROLLEY_MAP = result_attribGetAttributeValues.attributeResultValues[4];
        var TEMP_SC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_UPDATE = position + ":";
        var TEMP_OLDTROLLEYID = "";
        var TEMP_TROLLEY_ID = "";
        var TEMP_ERROR = 0;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //checking if trolley matches  position
        TEMP_OBJECT = getIdFromPosition(position, TEMP_SC_TROLLEY_MAP, TEMP_TROLLEY_ID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0 ){

            errorCode = -1001;
            errorMessage = "[Error in getIdFromPosition] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
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
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //Removing the trolley from the selected position in the configuration
        var TEMP_OBJECT = updatePositionMap(TEMP_UPDATE, TEMP_SC_TROLLEY_MAP, TEMP_OLDTROLLEYID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0){
   
            errorCode = -1003;
            errorMessage = "[Error in updatePositionMap] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvv saving old trolley and the new part map vvvvvvvvvvvvvvvv
        TEMP_SC_TROLLEY_MAP = TEMP_OBJECT.map; 
        TEMP_OLDTROLLEYID = TEMP_OBJECT.oldTrolleyId;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(TEMP_OLDTROLLEYID == ""){
   
            errorCode = -1005;
            errorMessage = "No trolley found in the selected position";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // updating the the mapping to empty in the position of the trolley that was finished 
        TEMP_OBJECT = updatePartMap(TEMP_UPDATE, TEMP_SC_PART_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;
        
        if(TEMP_ERROR != 0){
   
            errorCode = -1004;
            errorMessage = "[Error in updatePartMap] "+ TEMP_OBJECT.message;
            
            var resultData = {

                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_SC_PART_MAP = TEMP_OBJECT.map;       
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
        var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_ID_AR = [];
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
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }   

            for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
                TEMP_BATCH_ID_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
            }
            for (x=0; x< TEMP_BATCH_ID_AR.length; x++){
                // <attribGetAttributeValues> ---------------------------------------------------------
                var attributeCodeArray = new Array("START_TIME");
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
                var TEMP_CYCLE_TIME = TEMP_CURRENT_TIME-TEMP_START_TIME;
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                //<trUploadState>----------------------------------------------------------------
                var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
                var serialNumberUploadValues = new Array();
                var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                    stationNumber,
                    2, 
                    TEMP_BATCH_ID_AR[x],
                    "-1",
                    0,
                    0,
                    "-1",
                    TEMP_CYCLE_TIME,
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 

        // Appending the updated part and position configurations
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("SC_TROLLEY_MAP", TEMP_SC_TROLLEY_MAP, "0", "SC_PART_MAP", TEMP_SC_PART_MAP, "0");
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

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("END_TIME",TEMP_CURRENT_TIME ,"0","WIP_STATE","CANCELLED_SC","0");
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // JSON result ---------------------------------------------------------
        var resultData = {
           errorCode : errorCode,
           errorMessage : errorMessage
            
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTpCancelTrolley failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}




function cfTpFinishTrolley(jsonData) {
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        //************************************************************************** */
        //************************************************************************** */
        if(stationNumber == "04002011" || stationNumber == "04002021"){
            
            //Check the shooting quantity gap and scrap the additional units
            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("SC_NUMBER_OF_CAVITIES");
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
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var NUMBER_OF_CAVITIES = parseInt("" + result_attribGetAttributeValues.attributeResultValues[1]);
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("SC_SHOOTING_MAP");
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
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_SHOOTING_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
            var tmOb = getTrolleyShootingNumber(TEMP_SHOOTING_MAP,trolleyId);
            var TEMP_NUMBER_OF_SHOTS = parseInt(tmOb.numberOfShots);
            var TEMP_SHOOT_QTY = NUMBER_OF_CAVITIES*TEMP_NUMBER_OF_SHOTS ;
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        }
        //************************************************************************** */
        //************************************************************************** */


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
        var TEMP_SC_TROLLEY_MAP = result_attribGetAttributeValues.attributeResultValues[4];
        var TEMP_SC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1];
        var TEMP_UPDATE = position + ":";
        var TEMP_OLDTROLLEYID = "";
        var TEMP_TROLLEY_ID = "";
        var TEMP_ERROR = 0;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //checking if trolley matches  position
        TEMP_OBJECT = getIdFromPosition(position, TEMP_SC_TROLLEY_MAP, TEMP_TROLLEY_ID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0 ){

            errorCode = -1001;
            errorMessage = "[Error in getIdFromPosition] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
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
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //Removing the trolley from the selected position in the configuration
        var TEMP_OBJECT = updatePositionMap(TEMP_UPDATE, TEMP_SC_TROLLEY_MAP, TEMP_OLDTROLLEYID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0){
   
            errorCode = -1003;
            errorMessage = "[Error in updatePositionMap] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvv saving old trolley and the new part map vvvvvvvvvvvvvvvv
        TEMP_SC_TROLLEY_MAP = TEMP_OBJECT.map; 
        TEMP_OLDTROLLEYID = TEMP_OBJECT.oldTrolleyId;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(TEMP_OLDTROLLEYID == ""){
   
            errorCode = -1005;
            errorMessage = "No trolley found in the selected position";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // updating the the mapping to empty in the position of the trolley that was finished 
        TEMP_OBJECT = updatePartMap(TEMP_UPDATE, TEMP_SC_PART_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;
        
        if(TEMP_ERROR != 0){
   
            errorCode = -1004;
            errorMessage = "[Error in updatePartMap] "+ TEMP_OBJECT.message;
            
            var resultData = {

                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_SC_PART_MAP = TEMP_OBJECT.map;       
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
        var TEMP_CURRENT_TIME = result_mdataGetCalendarData.calendarDataResultValues[0];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_BATCH_ID_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        if(TEMP_OLDTROLLEYID!=""){
            var TEMP_PACKED_QTY = 0;
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
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }   

            for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
                TEMP_BATCH_ID_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
            }
            for (x=0; x< TEMP_BATCH_ID_AR.length; x++){
                // <attribGetAttributeValues> ---------------------------------------------------------
                var attributeCodeArray = new Array("START_TIME");
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
                var TEMP_CYCLE_TIME = TEMP_CURRENT_TIME-TEMP_START_TIME;
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                //<trUploadState>----------------------------------------------------------------
                var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
                var serialNumberUploadValues = new Array();
                var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                    stationNumber,
                    2, 
                    TEMP_BATCH_ID_AR[x],
                    "-1",
                    0,
                    0,
                    "-1",
                    TEMP_CYCLE_TIME,
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
            for (var d=0; d< TEMP_BATCH_ID_AR.length; d++){
                // <attribGetAttributeValues> ---------------------------------------------------------
                var attributeCodeArray = new Array("PASS_QTY");
                var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_BATCH_ID_AR[d],
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
                var TEMP_PASS_QTY = ""+result_attribGetAttributeValues.attributeResultValues[1];
                TEMP_PACKED_QTY += parseInt(TEMP_PASS_QTY);
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            }
        }

        logHandler.logMessage("TEMP_PACKED_QTY ---"+TEMP_PACKED_QTY+"  TEMP_SHOOT_QTY-----"+TEMP_SHOOT_QTY);
        if(stationNumber == "04002021" || stationNumber == "04002011"){
            if(TEMP_PACKED_QTY<TEMP_SHOOT_QTY){
                var scrapQ = TEMP_SHOOT_QTY-TEMP_PACKED_QTY;
                if((scrapQ % 2) != 0){
                    scrapQ++;
                }
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
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }   

                for (var x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
                    TEMP_BATCH_ID_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
                }
                logHandler.logMessage("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
                for (var x=0; x< TEMP_BATCH_ID_AR.length; x++){
                    for(var m=0; m<scrapQ/2;m++){
                        // <attribGetAttributeValues> ---------------------------------------------------------
                        var attributeCodeArray = new Array("PASS_QTY","SCRAP_QTY");
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
                            result.return_value = errorCode ;
                            result.outArgs = [JSON.stringify(resultData)];
                            return result;
                        } 

                        TEMP_PASS_QTY = result_attribGetAttributeValues.attributeResultValues[1];
                        TEMP_SCRAP_QTY = result_attribGetAttributeValues.attributeResultValues[4];

                        var TEMP_SCRAP_ID;
                        var TEMP_SCQTY;
                        
                    
                        
                        TEMP_SCRAP_ID = TEMP_BATCH_ID_AR[x] + "-G" + TEMP_SCRAP_QTY;
                        TEMP_SCQTY = parseInt(TEMP_SCRAP_QTY);
                        TEMP_SCQTY++;  // increment scrap quantity
                        TEMP_SCRAP_QTY = ""+TEMP_SCQTY;     
                        
                        logHandler.logMessage("TEMP_SCRAP_ID ---"+TEMP_SCRAP_ID);  
                        logHandler.logMessage("TEMP_SCRAP_QTY ---"+TEMP_SCRAP_QTY);
                        
                        // <attribAppendAttributeValues> ------------------------------------------------------
                        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                        var attributeUploadValues = new Array("PASS_QTY", TEMP_PASS_QTY, "0",
                                                            "SCRAP_QTY", TEMP_SCRAP_QTY, "0");
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
                            TEMP_BATCH_ID_AR[x],
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
                        // < trUploadFailureAndResultData> -------------------------------------
                        var measureKeys = new Array("ERROR_CODE", "MEASURE_FAIL_CODE", "MEASURE_NAME", "MEASURE_VALUE");
                        var measureValues = new Array();
                        var failureKeys = new Array("ERROR_CODE", "FAILURE_TYPE_CODE");
                        var failureValues = new Array();
                        var failureSlipKeys = new Array();
                        var failureSlipValues = new Array();
                        //Preparing the failure data items to be uploaded
                        
                        failureValues.push("0");
                        failureValues.push("5000");  

                        var result_trUploadFailureAndResultData = imsApiService.trUploadFailureAndResultData(imsApiSessionContext, 
                            stationNumber, 
                            2,
                            TEMP_SCRAP_ID,
                            "-1",
                            2,
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
                    }
                }
            }
			// <attribGetAttributeValues> ---------------------------------------------
			var attributeCodeArray = new Array("SC_SHOOTING_MAP");
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
				errorMessage = "[attribGetAttributeValues] "+ getImsApiErrorText(return_value);
				
				var resultData = {
						errorCode : errorCode,
						errorMessage : "" + errorMessage
					};
				result.return_value = errorCode ;
				result.outArgs = [JSON.stringify(resultData)];
				return result;
			}

			// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
			var TEMP_SHOOTING_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
			var tmOb2 = updateShootingMap(TEMP_SHOOTING_MAP,trolleyId,"",1);
			var TEMP_NEW_SHOOTING_MAP = tmOb2.map;
			// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
			// <attribAppendAttributeValues> ---------------------------------------------
			var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
			var attributeUploadValues = new Array("SC_SHOOTING_MAP", TEMP_NEW_SHOOTING_MAP, "0");
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 

        // Appending the updated part and position configurations
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("SC_TROLLEY_MAP", TEMP_SC_TROLLEY_MAP, "0", "SC_PART_MAP", TEMP_SC_PART_MAP, "0");
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

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("END_TIME",TEMP_CURRENT_TIME ,"0","WIP_STATE",wipState,"0","WIP_STATE_BKP","","0");
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        // JSON result ---------------------------------------------------------
        var resultData = {
           errorCode : errorCode,
           errorMessage : errorMessage
            
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTpFinishTrolley failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfTpGetPartNumber(jsonData){
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
        var res = fct_getProductFamily(configContent).productFamily; 
        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            partNumbers : res
            
        };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTpGetPartNumbers failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfTpChangeTrolley(jsonData) {
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ------------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var position = data.position;
        var trolleyId = data.trolleyId;
        var defaultWoQuantity = data.defaultWoQuantity;
        var defaultBatchQuantity = data.defaultBatchQuantity;
        var wipState = data.wipState; 
        var partNumbers = data.partNumbers ;

        // Intermediate variables -------------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration --------------------------------------------------------
        
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var LINKED_PN  = "";
        var MAX_QUANTITY ="";
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        


        var configContent = fct_readDocument(stationNumber); 
        var res = fct_getLinkedProduct(configContent, partNumbers) ; 
        var LINKED_PN  = res.linkedPartNumbers;
        var MAX_QUANTITY = res.maxTrolleyQuantity;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SERIAL_NUMBERS_AR =[];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <shipGetSerialNumberDataForShippingLot> --------------------------------------------
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
            TEMP_SERIAL_NUMBERS_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x]);
        }

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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_WIP_STATE = "" + result_attribGetAttributeValues.attributeResultValues[1];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          
        //wip state check
        if (TEMP_WIP_STATE != "BEFORE_SAND_CORE" && TEMP_WIP_STATE != "TO_SCRAP" && TEMP_WIP_STATE != "CANCELLED_SC"){
            var resultData = {
                errorCode : -1010,
                errorMessage : "Invalid Trolley" 
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result; 
        } 
        //check that the trolley is empty if it is coming from casting
        if ((stationNumber=="04002011"|| stationNumber=="04002021" || stationNumber=="04002031" || stationNumber=="04002041") && TEMP_WIP_STATE == "BEFORE_SAND_CORE" && TEMP_SERIAL_NUMBERS_AR.length != 0 ){
            var resultData = {
                errorCode : -1010,
                errorMessage : "Trolley is not empty" 
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result; 
        }
        
        /*
        //check that the trolley is not empty if this is a scrap station
        if ((stationNumber=="04002051" || stationNumber=="04002061") && (TEMP_WIP_STATE == "TO_SCRAP") && (TEMP_SERIAL_NUMBERS_AR.length == 0)){
            var resultData = {
                errorCode : -1011,
                errorMessage : "Trolley is empty!" 
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        */

        
        //check that the trolley coming to scrap is only registered on scrap stations
        if ((stationNumber!="04002051" && stationNumber!="04002061") && (TEMP_WIP_STATE == "TO_SCRAP")){
            var resultData = {
                errorCode : -8888,
                errorMessage : "Casting trolleys can only be registered on scrap stations 04002051 or 04002061" 
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        

        //Check that that the previously linked PNs and the selected PNs are the same if the trolley was cancelled or in scrap station
        if( TEMP_WIP_STATE == "TO_SCRAP" || TEMP_WIP_STATE == "CANCELLED_SC" ){
            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("LINKED_PN");
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
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_LINKED_PN = "" + result_attribGetAttributeValues.attributeResultValues[1];
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            if(LINKED_PN != TEMP_LINKED_PN){
                errorCode = -1300;
                errorMessage = "The selected product reference is invalid for this trolley";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

        }
        
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("LINKED_PN",LINKED_PN,"0");
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
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
        TEMP_SC_TROLLEY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[4];     
        TEMP_SC_PART_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1] ;
        TEMP_UPDATE = position + ":" + trolleyId;       
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_OLDTROLLEYID = "";
        var TEMP_ERROR = 0;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //Updating a position (new trolley ID) in the configuration
        var TEMP_OBJECT = updatePositionMap(TEMP_UPDATE, TEMP_SC_TROLLEY_MAP, TEMP_OLDTROLLEYID, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;

        
        if(TEMP_ERROR != 0){
   
            errorCode = -1003;
            errorMessage = "[Error in updatePositionMap] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvv saving old trolley and the new part map vvvvvvvvvvvvvvvv
        TEMP_SC_TROLLEY_MAP = TEMP_OBJECT.map; 
        TEMP_OLDTROLLEYID = TEMP_OBJECT.oldTrolleyId;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 

        //<mdataGetCalendarData>----------------------------------------------------------------
        var calendarDataResultKeys = new Array("CURRENT_TIME_MILLIS");
        var result_mdataGetCalendarData= imsApiService.mdataGetCalendarData(imsApiSessionContext, 
            stationNumber, 
            calendarDataResultKeys);

        var return_value = result_mdataGetCalendarData.return_value;

        if (return_value != 0) {

            errorCode = return_value;
            errorMessage = "[mdataGetCalendarData] "+ getImsApiErrorText(return_value);
            
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
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_POS_DATA = TEMP_OBJECT.posData;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if(TEMP_WIP_STATE == "BEFORE_SAND_CORE" && TEMP_SERIAL_NUMBERS_AR.length == 0 ){
            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("LINKED_PN");
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
                errorMessage = "[attribGetAttributeValues] "+ getImsApiErrorText(return_value);
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_LINKED_PN = "" + result_attribGetAttributeValues.attributeResultValues[1];
            TEMP_LINKED_PN = TEMP_LINKED_PN.split("|");
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            if(stationNumber == "04002011" || stationNumber == "04002021" ){
                //get the cavities number for the new the trolley: setup MUST be done before
                // <attribGetAttributeValues> ---------------------------------------------
                var attributeCodeArray = new Array("CAVITY_MAP","SC_SHOOTING_MAP");
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
                    errorMessage = "[attribGetAttributeValues] "+ getImsApiErrorText(return_value);
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }

                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_CAVITY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];
                var TEMP_SHOOTING_MAP = "" + result_attribGetAttributeValues.attributeResultValues[4];
                var CAV_PN_BT = TEMP_CAVITY_MAP.split("|");
                var cavities = [];
                var pts = [];
                var bts = [];
                var numberOfCavities = 0;
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                for(var d=0; d<CAV_PN_BT.length; d++){
                    cavities.push(CAV_PN_BT[d].split(":")[0]);
                    pts.push(CAV_PN_BT[d].split(":")[1]);
                    bts.push(CAV_PN_BT[d].split(":")[2]);
                }
                for(var d=0; d<pts.length; d++){
                    if(pts[d]==TEMP_LINKED_PN[0] || pts[d]==TEMP_LINKED_PN[1]){
                        numberOfCavities++;
                    }
                }
                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("SC_NUMBER_OF_CAVITIES", numberOfCavities, "0");
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
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                } 
                var tmpOb = updateShootingMap(TEMP_SHOOTING_MAP, trolleyId,"0",0);
                var TEMP_NEW_SHOOTING_MAP = tmpOb.map; 
                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("SC_SHOOTING_MAP", TEMP_NEW_SHOOTING_MAP, "0");
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
                //end of cavities block
            }
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_WORKORDERS_AR = []; 
            var TEMP_BATCHES_AR =[];      
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var generation_flag = false;

            for(PN=0; PN<TEMP_LINKED_PN.length; PN++){

                if(generation_flag==false){
                    // <trGetNextSerialNumber> ---------------------------------------------
                    var result_trGetNextSerialNumber = imsApiService.trGetNextSerialNumber(imsApiSessionContext, 
                        stationNumber, 
                        "-1",
                        TEMP_LINKED_PN[PN],
                        1);

                    var return_value = result_trGetNextSerialNumber.return_value;

                    if (return_value != 0) {

                        errorCode = return_value;
                        errorMessage = "[trGetNextSerialNumber] "+ getImsApiErrorText(return_value);
                        
                        var resultData = {
                                errorCode : errorCode,
                                errorMessage : "" + errorMessage
                            };
                        result.return_value = errorCode ;
                        result.outArgs = [JSON.stringify(resultData)];
                        return result;
                    }
                    generation_flag = true;
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    var TEMP_BATCH = result_trGetNextSerialNumber.serialNumberArray[0].serialNumber;
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                }
                var TEMP_BATCH = TEMP_BATCH + "";
                var TEMP_BATCH = "SCB" + TEMP_LINKED_PN[PN] + TEMP_BATCH.split("" + TEMP_LINKED_PN[0])[1] ;
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_WO_AR = [];
                var TEMP_START_DATE_AR= [];
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                
                // <mdataGetWorkorders> ---------------------------------------------
                var mdataGetWorkordersFilers = new Array(new KeyValue("PART_NUMBER",TEMP_LINKED_PN[PN]));
                var mdataGetWorkordersResultKeys = new Array("WORKORDER_NUMBER", "PLANNED_START_DATE");
                var result_mdataGetWorkorders = imsApiService.mdataGetWorkorders(imsApiSessionContext, 
                    stationNumber, 
                    mdataGetWorkordersFilers,
                    mdataGetWorkordersResultKeys
                    );

                var return_value = result_mdataGetWorkorders.return_value;
        
                if (return_value != 0 && return_value != 1 ) {

                    errorCode = return_value;
                    errorMessage = "[mdataGetWorkorders] "+ getImsApiErrorText(return_value);
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                    };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }

                for (x=0; x< result_mdataGetWorkorders.mdataGetWorkordersResultValues.length/2; x++){
                    TEMP_WO_AR.push(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x*2+0]);
                    TEMP_START_DATE_AR.push(parseInt(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x*2+1]));
                }

                
                if (TEMP_WO_AR.length==0){
                    // <mdataCreateWorkorder> ---------------------------------------------
                    var workorderUploadValues = new Array(new KeyValue("PART_NUMBER",TEMP_LINKED_PN[PN]), 
                                                        new KeyValue("WORKORDER_QUANTITY",10000), 
                                                        new KeyValue("WORKPLAN_ALT","01"), new KeyValue("CUSTOMER_WORKORDER_NUMBER","WO_"+TEMP_LINKED_PN[PN]+"_"+TEMP_CURRENT_TIME),
                                                        new KeyValue("WORKORDER_NUMBER","WO_"+TEMP_LINKED_PN[PN]+"_"+TEMP_CURRENT_TIME) );

                    var workorderResultKeys = new Array("WORKORDER_NUMBER");
                    var result_mdataCreateWorkorder = imsApiService.mdataCreateWorkorder(imsApiSessionContext, 
                        stationNumber, 
                        workorderUploadValues,
                        workorderResultKeys
                        );

                    var return_value = result_mdataCreateWorkorder.return_value;
            
                    if (return_value != 0) {

                        errorCode = return_value;
                        errorMessage = "[mdataCreateWorkorder] "+ getImsApiErrorText(return_value);
                        
                        var resultData = {
                                errorCode : errorCode,
                                errorMessage : "" + errorMessage
                        };
                        result.return_value = errorCode ;
                        result.outArgs = [JSON.stringify(resultData)];
                        return result;
                    }
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    var TEMP_AVAILABLE_WO = result_mdataCreateWorkorder.workorderResultValues[0];
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    

                }else{
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    var TEMP_AVAILABLE_WO = getLatestWo(TEMP_WO_AR,TEMP_START_DATE_AR);
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    
                }
                TEMP_WORKORDERS_AR.push(TEMP_AVAILABLE_WO);
                
                // <batchAssignBatchNumberToWorkOrder> --------------------------------------------- 
                var result_batchAssignBatchNumberToWorkOrder = imsApiService.batchAssignBatchNumberToWorkOrder(imsApiSessionContext, 
                    stationNumber, 
                    TEMP_AVAILABLE_WO,
                    "-1",
                    "-1",
                    "-1",
                    "-1",
                    2,
                    TEMP_BATCH,
                    0,
                    0);

                var return_value = result_batchAssignBatchNumberToWorkOrder.return_value;
        
                if (return_value != 0) {

                    errorCode = return_value;
                    errorMessage = "[batchAssignBatchNumberToWorkOrder] "+ getImsApiErrorText(return_value);
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                    };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }
                // <mlChangeMaterialBinData> --------------------------------------------- 
                var materialBinUploadValues = new Array(new KeyValue("MATERIAL_BIN_QTY_TOTAL",10000));
                var result_mlChangeMaterialBinData = imsApiService.mlChangeMaterialBinData(imsApiSessionContext, 
                    stationNumber, 
                    TEMP_BATCH,
                    materialBinUploadValues);

                var return_value = result_mlChangeMaterialBinData.return_value;
        
                if (return_value != 0) {

                    errorCode = return_value;
                    errorMessage = "[mlChangeMaterialBinData] "+ getImsApiErrorText(return_value);
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                    };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result;
                }
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv           
                TEMP_BATCHES_AR.push(TEMP_BATCH);
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    
                // <attribAppendAttributeValues> ------------------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("PASS_QTY","0" ,"0","SCRAP_QTY", "0", "0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_BATCH,
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
        //Updating the old batches and their scrap and pass quantities in the old trolley ID then unregistering them
        
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_OLD_BATCH_ID_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if(TEMP_OLDTROLLEYID!=""){
            // <shipActivateShippingLotAtKap> --------------------------------------
            var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
                stationNumber,
                TEMP_OLDTROLLEYID
                );

            var return_value = result_shipActivateShippingLotAtKap.return_value;

            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = "[shipActivateShippingLotAtKap] "+ getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
            var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER", "SERIAL_NUMBER_TYPE", "WORKORDER_NUMBER");
            var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                stationNumber, 
                TEMP_OLDTROLLEYID,
                serialNumberResultKeys);

            var return_value = result_shipGetSerialNumberDataForShippingLot.return_value;

            if (return_value != 0) {

                errorCode = return_value;
                errorMessage = "[shipGetSerialNumberDataForShippingLot] "+ getImsApiErrorText(return_value);
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }   

            for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
                TEMP_OLD_BATCH_ID_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
            }

            for(x=0; x< TEMP_OLD_BATCH_ID_AR.length; x++){

                // <attribGetAttributeValues> ---------------------------------------------------------
                var attributeCodeArray = new Array("START_TIME");
                var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_OLD_BATCH_ID_AR[x],
                    "-1",
                    attributeCodeArray,
                    1,
                    attributeResultKeys);

                var return_value = result_attribGetAttributeValues.return_value;

                if (return_value != 0) {

                    errorCode = return_value;
                    errorMessage = "[attribGetAttributeValues] "+ getImsApiErrorText(return_value);

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
                    errorMessage = "[mdataGetCalendarData] "+ getImsApiErrorText(return_value);
                    
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
                var TEMP_CYCLE_TIME = TEMP_CURRENT_TIME-TEMP_START_TIME;
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                
                //<trActivateWorkorder>----------------------------------------------------------------
                var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
                var serialNumberUploadValues = new Array();
                var result_trActivateWorkorder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
                    stationNumber,
                    "-1", 
                    TEMP_OLD_BATCH_ID_AR[x],
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
            
                //<trUploadState>----------------------------------------------------------------
                var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
                var serialNumberUploadValues = new Array();
                var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                    stationNumber,
                    2, 
                    TEMP_OLD_BATCH_ID_AR[x],
                    "-1",
                    0,
                    0,
                    "-1",
                    TEMP_CYCLE_TIME,
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
            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("WIP_STATE","CANCELLED_SC" ,"0");
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                TEMP_OLDTROLLEYID,
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

            // <shipDeactivateShippingLotAtKap> ------------------------------------    
            var result_shipDeactivateShippingLotAtKap = imsApiService.shipDeactivateShippingLotAtKap(imsApiSessionContext, 
                stationNumber,
                TEMP_OLDTROLLEYID);

            var return_value = result_shipDeactivateShippingLotAtKap.return_value;
            
            if (return_value != 0) {
                errorCode = return_value;
                errorMessage = "[shipDeactivateShippingLotAtKap] "+ getImsApiErrorText(return_value);
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
        }
        
        //Packing and Registering the batches in the new trolley-------------------------------------------

        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            trolleyId
            );

        var return_value = result_shipActivateShippingLotAtKap.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[shipActivateShippingLotAtKap] "+ getImsApiErrorText(return_value);

            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 
        if(TEMP_WIP_STATE == "BEFORE_SAND_CORE" && TEMP_SERIAL_NUMBERS_AR.length == 0){

            for (x=0; x< TEMP_BATCHES_AR.length; x++){

                // <shipAddSerialNumberToShippingLot> ------------------------------
                var result_shipAddSerialNumberToShippingLot = imsApiService.shipAddSerialNumberToShippingLot(imsApiSessionContext, 
                    stationNumber, 
                    trolleyId,
                    TEMP_BATCHES_AR[x],
                    "-1",
                    "-1");

                var return_value = result_shipAddSerialNumberToShippingLot.return_value;
                
                if (return_value != 0 && return_value != 406) {
                    errorCode = return_value;
                    errorMessage = "[shipAddSerialNumberToShippingLot] "+ getImsApiErrorText(return_value);

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
                    errorMessage = "[mdataGetCalendarData] "+ getImsApiErrorText(return_value);
                    
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

                // <attribAppendAttributeValues> ---------------------------------------------
                var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var attributeUploadValues = new Array("START_TIME",TEMP_CURRENT_TIME,"0");
                var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_BATCHES_AR[x],
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
        

        // updating the new part numbers of the new trolley in the mapping in the position that was changed 
        TEMP_OBJECT = updatePartMap(TEMP_POS_DATA, TEMP_SC_PART_MAP, TEMP_ERROR);
        TEMP_ERROR = TEMP_OBJECT.err;
        
        
        if(TEMP_ERROR != 0){
   
            errorCode = -1004;
            errorMessage = "[Error in updatePartMap] "+ TEMP_OBJECT.message;
            
            var resultData = {

                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        TEMP_SC_PART_MAP = TEMP_OBJECT.map;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("SC_TROLLEY_MAP",TEMP_SC_TROLLEY_MAP,"0","SC_PART_MAP",TEMP_SC_PART_MAP,"0");
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }   
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var batches =[];
        var TEMP_BATCH_ID_AR = [];
        var TEMP_PART_NUMBER_AR = [];
        var TEMP_PART_DESC_AR = [];
        var TEMP_WORKORDER_NUMBER_AR = [];
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/5; x++){
            TEMP_BATCH_ID_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+2]);
            TEMP_PART_NUMBER_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+1]);
            TEMP_PART_DESC_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+0]);
            TEMP_WORKORDER_NUMBER_AR.push(result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*5+4]);

        }    
        MAX_QUANTITY = "" + parseInt(MAX_QUANTITY)/2;
        //filling the batches infos
        for (x=0; x< TEMP_BATCH_ID_AR.length; x++){  

            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("SC_MAX_QUANTITY", MAX_QUANTITY, "0");
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
                errorMessage = "[attribAppendAttributeValues] "+ getImsApiErrorText(return_value);

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            } 
        

            // <attribGetAttributeValues> ---------------------------------------------------------
            var attributeCodeArray = new Array("PASS_QTY","SCRAP_QTY");
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
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }

            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_PASS_QTY = "" + result_attribGetAttributeValues.attributeResultValues[1];
            var TEMP_SCRAP_QTY = "" + result_attribGetAttributeValues.attributeResultValues[4];
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            batches.push(
                {
                batchId : "" + TEMP_BATCH_ID_AR[x],
                partNumber: "" + TEMP_PART_NUMBER_AR[x],
                partDescription: "" + TEMP_PART_DESC_AR[x],
                workOrder: "" + TEMP_WORKORDER_NUMBER_AR[x],
                qty: TEMP_PASS_QTY,
                scrapQty: TEMP_SCRAP_QTY 
                }
            );
        }
        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("START_TIME",TEMP_CURRENT_TIME ,"0", "END_TIME","-1","0","WIP_STATE","","0" );
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
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        } 

        if(TEMP_OLDTROLLEYID!=""){
            // <attribAppendAttributeValues> ------------------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("END_TIME",TEMP_CURRENT_TIME ,"0", "WIP_STATE",wipState,"0" );
            var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                stationNumber, 
                2,
                TEMP_OLDTROLLEYID,
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
        
        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode ,
            errorMessage : errorMessage,
            trolleyInfo: {
                trolleyId: "" + trolleyId,
                setupTime: "0 sec",
                batches : batches
            }
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTpChangeTrolley failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfTpPackPart(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
                     
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var position = data.position;
        var trolleyId = data.trolleyId;
        var batchId = data.batchId;
        var autoStorage = data.autoStorage;
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration -----------------------------------------------------

        // <attribGetAttributeValues> --------------------------------------------------------
        var attributeCodeArray = new Array("PASS_QTY");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE", "ERROR_CODE");
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
            errorMessage = "[attribGetAttributeValues]" + getImsApiErrorText(return_value);
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }     
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  
        var TEMP_PASS_QTY = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);
        TEMP_PASS_QTY +=1;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("PASS_QTY", TEMP_PASS_QTY, "0");
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

        if (return_value != 0) { 

            errorCode = return_value;
            errorMessage = "[attribAppendAttributeValues]" + getImsApiErrorText(return_value);
            
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
            trolleyId : trolleyId,
            postion : position,
            batchId : batchId,
            qty : "" + TEMP_PASS_QTY,
            errorCode : errorCode,
            errorMessage : errorMessage
            
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfTpPackPart failed: " + e);
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
    var attributeCodeArray = new Array("SC_PART_MAP");
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
        var errorMessage = getImsApiErrorText(return_value);

        var resultData = {
                 errorCode : errorCode,
                 errorMessage : "" + errorMessage
            };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        return result;
    } 

    TEMP_SC_PART_MAP = result_attribGetAttributeValues.attributeResultValues[1] ;
    var posData = "";
    temp_obj = createPosData(station, trolleyId, position, posData);
    check = checkPartNumberForPosition(TEMP_SC_PART_MAP, temp_obj.posData, temp_obj.err);

    err = check.err;

    if (err==0){
        return temp_obj ;
    }else{
        return check;
    }  
}

function createPosData(station, trolleyId, position, posData){

    var result = new Result_customFunctionCommon();

    // <attribGetAttributeValues> ---------------------------------------------
    var attributeCodeArray = new Array("LINKED_PN");
    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
    var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
        station, 
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
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        return result;
    }
    //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    var TEMP_SC_TROLLEY_MAP = "" + result_attribGetAttributeValues.attributeResultValues[1];  
    //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 
    var TEMP_PART_NUMBER_AR = TEMP_SC_TROLLEY_MAP.split("|");

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

    var position= posData.toString().split(":")[0]; 
    var part_numbers = posData.toString().split(":")[1]; 
    var position_parts = part_numbers.split(",");
    
    var check_flag = false;
    var all_parts = []; 
    
    
    for(var i=0; i<position_parts.length; i++){
      
      var k=0
        for(var j=0; j < position_parts.length; j++){
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

function updateShootingMap(map,trolleyId,nb,mode){
    //mode 0 = normal update; 
    //mode 1 = delete trolley and its number
    map +="";
    var trs_nbs = map.split("|");
    var trs = [];
    var nbs = [];
    var update_flag = false;
    
    if(map==""){
      return{
        map: trolleyId+":"+nb 
      }
    }
    
    for(var i=0;i<trs_nbs.length;i++){
      trs.push(trs_nbs[i].split(":")[0]);
      nbs.push(trs_nbs[i].split(":")[1]);  
    }
    
    
    if(mode==0){
      for(var i=0;i<trs.length;i++){
        if(trolleyId==trs[i]){
          nbs[i]=nb;
          update_flag = true;
        }
      }
    }else if(mode ==1){
      for(var i=0;i<trs.length;i++){
        if(trolleyId==trs[i]){
          trs[i]="";
          nbs[i]="";
          
        }
      }
    }
    
    if(mode==0 && update_flag==false && trolleyId!="" && nb!=""){
      trs.push(trolleyId);
      nbs.push(nb); 
    }
    
    var new_map = "";
    
    for(var i=0;i<trs.length;i++){
      if(trs[i]!=""){
        new_map += trs[i] +":"+ nbs[i] + "|"; 
      }
    }
    
    new_map = new_map.slice(0,new_map.length-1)
    
    return {
      map:new_map
    } 
  }


  function getTrolleyShootingNumber(map, trolleyId){
  
    map +="";
    var trs_nbs = map.split("|");
    var trs = [];
    var nbs = [];
    var update_flag = false;
    
    for(var i=0;i<trs_nbs.length;i++){
      trs.push(trs_nbs[i].split(":")[0]);
      nbs.push(trs_nbs[i].split(":")[1]);  
    }
    
    for(var i=0;i<trs.length;i++){
      if(trolleyId==trs[i]){
        var numberOfShots =nbs[i];
        update_flag = true;
      }
    }
   
    
    if(update_flag==false){
      return{
        err : 1,
        message: "trolley not found",
        trolleyId:"",
        numberOfShots: ""
      }
    }
    
    return{
      trolleyId:trolleyId,
      numberOfShots: numberOfShots
    }  
  }