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
 Sami Akkari            2019-04-23      Le Belier        cfWp                    First release 
 Sami Akkari            2019-05-22      Le Belier        cfWp                    Add new functions for new mode of storing unserialized parts
 Sami Akkari            2019-05-31      Le Belier        cfWp                    Add cfCancelBox + packToStorage updates
 Sami Akkari            2019-06-19      Le Belier        cfWp                    Add cfWpPackPanel + cfWpUnpackPanel
 Sami Akkari            2019-06-28      Le Belier        cfWp                    Add cfWpPackUid + cfWpUnpackUid
 Sami Akkari            2019-07-22      Le Belier        cfWp                    New parsing logic of UIDs coming from OPC
 Sami Akkari            2019-07-24      Le Belier        cfWp                    Activating WO for each SNR before packing
 Sami Akkari            2019-08-19      Le Belier        cfWp                    Add reintroduction fo serial numbers with cavity 00,99
 Sami Akkari            2019-08-31      Le Belier        cfWp                    Hook trolleys functions adjustments
 Sami Akkari            2019-09-10      Le Belier        cfWp                    Add references interlocking
 Sami Akkari            2019-09-18      Le Belier        cfWp                    Add HTT baskets to an attribute
 Sami Akkari            2019-09-25      Le Belier        cfWp                    Add SIIF upload
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
    get Reference informations based on product code and side
    in  : configContent, code, side
    out : 
        { 
            partNumber              //? part number (returned only when side is used)
            productFamily           //? productFamily
        }
    ============================================================================
*/
function fct_getReference(configContent, code, side) {
    var errorCode = 0;
    var errorMessage = "";
    var productFamily = "-1";
    var partNumber = "-1";

    var configuration = configContent.monoblocProducts;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".monoblocProducts is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            partNumber: partNumber,
            productFamily: productFamily
        }
    }

    var SIDE_AR = [];
    var PN_AR = [];

    if (code != "") {
        for (var i = 0; i < configuration.length; i++) {
            if (configuration[i].code == code) {
                if (side != "") {
                    SIDE_AR = configuration[i].side.split("|");
                    var pos = Arrays.asList(SIDE_AR).indexOf(side);
                    if (pos > -1) {
                        PN_AR = configuration[i].linkedPartNumbers.split("|");
                        partNumber = PN_AR[pos];
                    }
                }
                else {
                    productFamily = configuration[i].productFamily;
                }
            }
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        partNumber: partNumber,
        productFamily: productFamily
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


/*  ============================================================================
    get Product informations based on product family and side
    in  : configContent, code, side
    out : 
        { 
            partNumber              //? part number (returned only when side is used)
            code                    //? product code
        }
    ============================================================================
*/
function fct_getProductInformation(configContent, productFamily, side) {
    var errorCode = 0;
    var errorMessage = "";
    var code = "-1";
    var partNumber = "-1";

    var configuration = configContent.monoblocProducts;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".monoblocProducts is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            partNumber: partNumber,
            code: code
        }
    }

    var SIDE_AR = [];
    var PN_AR = [];

    if (code != "") {
        for (var i = 0; i < configuration.length; i++) {
            if (configuration[i].productFamily == productFamily) {
                if (side != "") {
                    SIDE_AR = configuration[i].side.split("|");
                    var pos = Arrays.asList(SIDE_AR).indexOf(side);
                    if (pos > -1) {
                        PN_AR = configuration[i].linkedPartNumbers.split("|");
                        partNumber = PN_AR[pos];
                    }
                    code = configuration[i].code;
                }
                else {
                    code = configuration[i].code;
                }
            }
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        partNumber: partNumber,
        code: code
    }
}
/*  ============================================================================
*/


/*  ============================================================================
    get basket numbers
    in  : configContent
    out : 
        { 
            basketQuantities[]              //? return the list of available basket numbers from the configuration
        }
    ============================================================================
*/
function fct_getBasketNumbers(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var basketNumbers = [];

    var configuration = configContent.wipPacking.basketNumbers;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".wipPacking.basketNumbers is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            basketNumbers: basketNumbers
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        basketNumbers.push(configuration[i].basketNumber);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        basketNumbers: basketNumbers
    }
}
/*  ============================================================================
*/


/*  ============================================================================
    get max basket quantities for wip packing
    in  : configContent
    out : 
        { 
            basketQuantities[]              //? return final packing max basket quantities from the configuration
        }
    ============================================================================
*/
function fct_getWpMaxBasketQuantities(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var maxBasketQuantities = [];

    var configuration = configContent.wipPacking.maxBasketQuantities;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".wipPacking.maxBasketQuantities is not defined in configuration!";
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

/*  ============================================================================
    get max basket quantities
    in  : configContent
    out : 
        { 
            basketQuantities[]              //? return max basket quantities from the configuration
        }
    ============================================================================
*/
function fct_getHookTrolleyConfig(configContent, productFamily) {
    var errorCode = 0;
    var errorMessage = "";
    var config = "";

    var configuration = configContent.wipPacking.hookTrolley.setup;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".wipPacking.hookTrolley.setup is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            config: config
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].productFamily == productFamily) {
            config = configuration[i].config;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        config: config
    }
}
/*  ============================================================================
*/


/*  ============================================================================
    get line id based on the line code
    in  : configContent, code
    out : 
        { 
            line                            //? line id
        }
    ============================================================================
*/
function fct_getLine(configContent, code) {
    var errorCode = 0;
    var errorMessage = "";
    var line = "-1";

    var configuration = configContent.castingLines;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".castingLines is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            line: line
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].code == code) {
            line = configuration[i].line;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        line: line
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get available partNumbers assigned to the same product family
    in  : configContent, partNumber
    out : 
        { 
            partNumbers[]           //? part number (returned only when side is used)
        }
    ============================================================================
*/
function fct_getAvailablePartNumbers(configContent, partNumber) {
    var errorCode = 0;
    var errorMessage = "";
    var partNumbers = [];

    var configuration = configContent.monoblocProducts;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".monoblocProducts is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            partNumbers: partNumbers
        }
    }

    var PN_AR = [];

    for (var i = 0; i < configuration.length; i++) {
        PN_AR = configuration[i].linkedPartNumbers.split("|");
        var pos = Arrays.asList(PN_AR).indexOf(partNumber);
        if (pos > -1) {
            partNumbers = PN_AR;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        partNumbers: partNumbers
    }
}
/*  ============================================================================
*/

function cfWpRegisterTrolley(jsonData){
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var trolleyId = data.trolleyId;
        var partNumbers = data.partNumbers;
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
        // API integration -----------------------------------------------------
        
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
        if(stationNumber.slice(0,stationNumber.length-2)=="060040"){
            if(TEMP_WIP_STATE!="BEFORE_EXTRACTION"){
                errorCode = -20000;
                errorMessage = "[Hook trolley was not not processed on Reintroduction station] ";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }else if (stationNumber.slice(0,stationNumber.length-2)=="060060"){
            if(TEMP_WIP_STATE!="BEFORE_REINTRODUCTION"){
                errorCode = -20000;
                errorMessage = "[Hook trolley was not released from Extraction station ] ";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }

        

        if(partNumbers!=""){
            var configContent = fct_readDocument(stationNumber);
            var res = fct_getHookTrolleyConfig(configContent, partNumbers).config;
            var SETUP = res;

            
            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("WP_SETUP", SETUP, "0","WP_LINKED_PN",partNumbers,"0");
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
        }
            
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_REGISTERED_TROLLEYS");
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
        var TEMP_TROLLEYS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        //trolley registration check
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_TROLLEYS_LIST = TEMP_TROLLEYS.split("|");
        for(var x=0; x<TEMP_TROLLEYS_LIST.length; x++){
            if(trolleyId==TEMP_TROLLEYS_LIST[x]){
                errorCode = "-1050";
                errorMessage = "[Trolley Already registered] ";
                
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
        
        if(TEMP_TROLLEYS=="" || TEMP_TROLLEYS==undefined){
            TEMP_TROLLEYS += trolleyId ;
        }else{
            TEMP_TROLLEYS += "|" + trolleyId;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_SETUP");
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
        var TEMP_WP_SETUP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        var TEMP_POSITIONS = getSetup(TEMP_WP_SETUP,0).positions; 
        var TEMP_UIDS = getSetup(TEMP_WP_SETUP,0).uids;
        var TEMP_STATES = getSetup(TEMP_WP_SETUP,0).states;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SERIAL_NUMBER_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <shipActivateShippingLotAtKap> --------------------------------------
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

        // <shipGetSerialNumberDataForShippingLot> -----------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
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
       
        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_TOP_POS = [];// list of objects ={pos, state, uid} top layer
        var TEMP_BOT_POS = [];// list of objects ={pos, state, uid} bot layer
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        if(TEMP_POSITIONS.length==36){
            for(var x=0; x<18; x++){
                TEMP_BOT_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
            for(var x=18; x<36; x++){
                TEMP_TOP_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
        }else if(TEMP_POSITIONS.length==24){ // Position can be changed to contain 2 UIDS
            for(var x=0; x<12; x++){
                TEMP_BOT_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
            for(var x=12; x<24; x++){
                TEMP_TOP_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
        }else{
            errorCode = return_value;
            errorMessage = "Invalid Trolley Configuration" ;
            
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
        var attributeUploadValues = new Array("WP_ACTIVE_TROLLEY", trolleyId, "0","WP_REGISTERED_TROLLEYS", TEMP_TROLLEYS, "0");
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
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("WIP_STATE", "", "0","START_TIME",TEMP_CURRENT_TIME,"0");
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
            errorMessage : errorMessage,
            trolleyId : "" + trolleyId,
            numberOfParts : "" + TEMP_SERIAL_NUMBER_AR.length,
            packedUids : TEMP_SERIAL_NUMBER_AR,
            topPositions : TEMP_TOP_POS,
            botPositions : TEMP_BOT_POS
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    
        }
        catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpRegisterTrolley failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        }
        return result;
}

function cfWpUnregisterTrolley(jsonData){
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var trolleyId = data.trolleyId;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
        // API integration -----------------------------------------------------
         // <attribGetAttributeValues> ------------------------------------------
         var attributeCodeArray = new Array("WP_REGISTERED_TROLLEYS");
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
         var TEMP_TROLLEYS = "" + result_attribGetAttributeValues.attributeResultValues[1];
         // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
         //trolley registration check
         // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
         var TEMP_TROLLEYS_LIST = TEMP_TROLLEYS.split("|");
         var k=0;
         for(var x=0; x<TEMP_TROLLEYS_LIST.length; x++){
            if(trolleyId==TEMP_TROLLEYS_LIST[x]){
                k+=1;
            }        
        }
         if(k==0){
            errorCode = return_value;
            errorMessage = "[Trolley Not registered] ";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var NEW_TEMP_TROLLEYS = "";
        for(var x=0; x<TEMP_TROLLEYS_LIST.length; x++){
            if(TEMP_TROLLEYS_LIST[x]==trolleyId){
                NEW_TEMP_TROLLEYS += "";
            }else{
                NEW_TEMP_TROLLEYS += TEMP_TROLLEYS_LIST[x]+"|";    
            }
        }
        NEW_TEMP_TROLLEYS = NEW_TEMP_TROLLEYS.slice(0,NEW_TEMP_TROLLEYS.length-1); 
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 
        /*// <shipDeactivateShippingLotAtKap> ------------------------------------    
        var result_shipDeactivateShippingLotAtKap = imsApiService.shipDeactivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            trolleyId);

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
        }*/ 
        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("WP_ACTIVE_TROLLEY", "" ,"0","WP_REGISTERED_TROLLEYS",NEW_TEMP_TROLLEYS,"0");
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
        if(stationNumber.slice(0,stationNumber.length-2)=="060040"){
            var wipState ="BEFORE_REINTRODUCTION";
        }else if ((stationNumber.slice(0,stationNumber.length-2)=="060060")){
            var wipState ="BEFORE_EXTRACTION";
        }   
        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("WIP_STATE", wipState, "0");
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
            errorMessage : errorMessage,
            
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    
        }
        catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpUnregisterTrolley failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        }
        return result;
}

function cfWpGetTrolleysInfo(jsonData){
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var trolleyId = data.trolleyId;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
        // API integration -----------------------------------------------------
        if((trolleyId!="") && (trolleyId!="undefined") && (trolleyId!=undefined) ){
            // <shipActivateShippingLotAtKap> --------------------------------------
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
            // <attribAppendAttributeValues> ---------------------------------------------
            var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var attributeUploadValues = new Array("WP_ACTIVE_TROLLEY", trolleyId, "0");
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
        var attributeCodeArray = new Array("WP_REGISTERED_TROLLEYS");
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
        var TEMP_TROLLEYS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_TROLLEYS_LIST = TEMP_TROLLEYS.split("|");
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        logHandler.logMessage("+++++++++++++++++++++++++++++"+TEMP_TROLLEYS_LIST);
        var trolleys = []; 
        
        if(TEMP_TROLLEYS!=""){
            for(var y=0; y<TEMP_TROLLEYS_LIST.length;y++){
                
                // <attribGetAttributeValues> ------------------------------------------
                var attributeCodeArray = new Array("WP_SETUP");
                var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                    stationNumber, 
                    2,
                    TEMP_TROLLEYS_LIST[y],
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
                var TEMP_WP_SETUP = "" + result_attribGetAttributeValues.attributeResultValues[1];
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_POSITIONS = getSetup(TEMP_WP_SETUP,0).positions; 
                var TEMP_UIDS = getSetup(TEMP_WP_SETUP,0).uids;
                var TEMP_STATES = getSetup(TEMP_WP_SETUP,0).states;
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_SERIAL_NUMBER_AR = [];
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                // <shipGetSerialNumberDataForShippingLot> -----------------------------
                var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
                var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                    stationNumber, 
                    TEMP_TROLLEYS_LIST[y],
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

                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                var TEMP_TOP_POS = [];// list of objects ={pos, state, uid} top layer
                var TEMP_BOT_POS = [];// list of objects ={pos, state, uid} bot layer
                // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                if(TEMP_POSITIONS.length==36){
                    for(var x=0; x<18; x++){
                        TEMP_BOT_POS.push({
                            position: ""+TEMP_POSITIONS[x],
                            state: ""+TEMP_STATES[x],
                            uid: ""+TEMP_UIDS[x]
                        });
                    }
                    for(var x=18; x<36; x++){
                        TEMP_TOP_POS.push({
                            position: ""+TEMP_POSITIONS[x],
                            state: ""+TEMP_STATES[x],
                            uid: ""+TEMP_UIDS[x]
                        });
                    }
                }else if(TEMP_POSITIONS.length==24){ // Position can be changed to contain 2 UIDS
                    for(var x=0; x<12; x++){
                        TEMP_BOT_POS.push({
                            position: ""+TEMP_POSITIONS[x],
                            state: ""+TEMP_STATES[x],
                            uid: ""+TEMP_UIDS[x]
                        });
                    }
                    for(var x=12; x<24; x++){
                        TEMP_TOP_POS.push({
                            position: ""+TEMP_POSITIONS[x],
                            state: ""+TEMP_STATES[x],
                            uid: ""+TEMP_UIDS[x]
                        });
                    }
                }else{
                    errorCode = return_value;
                    errorMessage = "Invalid Trolley Configuration" ;
                    
                    var resultData = {
                            errorCode : errorCode,
                            errorMessage : "" + errorMessage
                        };
                    result.return_value = errorCode ;
                    result.outArgs = [JSON.stringify(resultData)];
                    return result; 
                }
                trolleys.push(
                    {
                            trolleyId:TEMP_TROLLEYS_LIST[y],
                            packedUids:TEMP_SERIAL_NUMBER_AR,
                            numberOfParts:TEMP_SERIAL_NUMBER_AR.length,
                            topPositions:TEMP_TOP_POS,
                            botPositions:TEMP_BOT_POS
                    }
                );
            }
        }else{
            errorCode = return_value;
            errorMessage = "No trolley Registered" ;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result; 
        }
        logHandler.logMessage("*************"+trolleys)
        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            trolleysInfo : trolleys
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    
        }
        catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpGetPositionSetup failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        }
        return result;
}

function cfWpRemoveUidFromPosition(jsonData){
    
    var result = new Result_customFunctionCommon();

    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var position = data.position;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
        // API integration -----------------------------------------------------

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_ACTIVE_TROLLEY");
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
        var TEMP_TROLLEY_ID = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_SETUP");
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
        var TEMP_WP_SETUP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        
        if(position[position.length-1]=="L"){
            var position1 = position.slice(0,position.length-1) + "R";    
        }else if(position[position.length-1]=="R"){
            var position1 = position.slice(0,position.length-1) + "L";
        }else{
            var position1 = "";
        }

        if(position1!=""){
            var positions = new Array(position, position1);
        }else{
            var positions = new Array(position);
        }

        //getting UIDs to be removed
        var UIDS = [];
        for(var i=0;i<positions.length;i++){
            var TEMP_OBJECT = getUidFromPosition(TEMP_WP_SETUP,positions[i],"0");
            var TEMP_ERROR = TEMP_OBJECT.err;

            if(TEMP_ERROR != 0){
            
                errorCode = "-10410";
                errorMessage = "[Error in getUidFromPosition] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var UID = TEMP_OBJECT.uid;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            UIDS.push(UID);
        }
        if(UIDS.length==1){
            UIDS = UIDS[0].split(","); 
        } 

        var TEMP_OBJECT = removeWipPosition(TEMP_WP_SETUP, position, UIDS[0], "0", "0");
        var TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0){
        
            errorCode = "-10412";
            errorMessage = "[Error in removeWipPosition] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_MAP = TEMP_OBJECT.map;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if(position1!=""){
            TEMP_OBJECT = removeWipPosition(TEMP_MAP, position1, UIDS[1], "0", "0");
            TEMP_ERROR = TEMP_OBJECT.err;

            if(TEMP_ERROR != 0){
            
                errorCode = "-10412";
                errorMessage = "[Error in removeWipPosition] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            TEMP_MAP = TEMP_OBJECT.map;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        }

        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            TEMP_TROLLEY_ID
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
        
        for(var j =0;j<UIDS.length; j++){
            
        
            // <shipRemoveSerialNumberFromShippingLot> ------------------------------
            var result_shipRemoveSerialNumberFromShippingLot = imsApiService.shipRemoveSerialNumberFromShippingLot(imsApiSessionContext, 
                stationNumber, 
                TEMP_TROLLEY_ID,
                UIDS[j] ,
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
        
            
            //<trUploadState>-----  -----------------------------------------------------------
            var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
            var serialNumberUploadValues = new Array();
            var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                stationNumber,
                2, 
                UIDS[j],
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
        var attributeUploadValues = new Array("WP_SETUP",TEMP_MAP ,"0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            TEMP_TROLLEY_ID,
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

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_SETUP");
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
        var TEMP_WP_SETUP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_POSITIONS = getSetup(TEMP_WP_SETUP,0).positions; 
        var TEMP_UIDS = getSetup(TEMP_WP_SETUP,0).uids;
        var TEMP_STATES = getSetup(TEMP_WP_SETUP,0).states;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SERIAL_NUMBER_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <shipGetSerialNumberDataForShippingLot> -----------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
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
       
        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_TOP_POS = [];// list of objects ={pos, state, uid} top layer
        var TEMP_BOT_POS = [];// list of objects ={pos, state, uid} bot layer
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        if(TEMP_POSITIONS.length==36){
            for(var x=0; x<18; x++){
                TEMP_BOT_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
            for(var x=18; x<36; x++){
                TEMP_TOP_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
        }else if(TEMP_POSITIONS.length==24){ // Position can be changed to contain 2 UIDS
            for(var x=0; x<12; x++){
                TEMP_BOT_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
            for(var x=12; x<24; x++){
                TEMP_TOP_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
        }else{
            errorCode = return_value;
            errorMessage = "Invalid Trolley Configuration" ;
            
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
            trolleyId : TEMP_TROLLEY_ID,
            numberOfParts: TEMP_SERIAL_NUMBER_AR.length,
            packedUids : TEMP_SERIAL_NUMBER_AR,
            topPositions: TEMP_TOP_POS,
            botPositions: TEMP_BOT_POS
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    
        }
        catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpRemoveUidFromPosition failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        }
        return result;
}

function cfWpScrapUid(jsonData){
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var position = data.position;
        
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
        // API integration -----------------------------------------------------
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_ACTIVE_TROLLEY");
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
        var TEMP_TROLLEY_ID = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_SETUP");
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
        var TEMP_WP_SETUP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        var TEMP_OBJECT = getUidFromPosition(TEMP_WP_SETUP,position,"0");
        var TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0){
        
            errorCode = "-10201";
            errorMessage = "[Error in getUidFromPosition] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var SCRAP_UIDS = TEMP_OBJECT.uid.split(",");
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        TEMP_OBJECT = scrapWipPosition(TEMP_WP_SETUP, position, "", "2", "0");
        TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0){
        
            errorCode = "-10411";
            errorMessage = "[Error in scrapWipPosition] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_MAP = TEMP_OBJECT.map;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        

        for(var i=0;i<SCRAP_UIDS.length;i++){
            //<trUploadState>----------------------------------------------------------------
            var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
            var serialNumberUploadValues = new Array();
            var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                stationNumber,
                2, 
                SCRAP_UIDS[i],
                "-1",
                2,
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
        var attributeUploadValues = new Array("WP_SETUP",TEMP_MAP ,"0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            TEMP_TROLLEY_ID,
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
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_SETUP");
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
        var TEMP_WP_SETUP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_POSITIONS = getSetup(TEMP_WP_SETUP,0).positions; 
        var TEMP_UIDS = getSetup(TEMP_WP_SETUP,0).uids;
        var TEMP_STATES = getSetup(TEMP_WP_SETUP,0).states;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SERIAL_NUMBER_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <shipGetSerialNumberDataForShippingLot> -----------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
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
       
        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_TOP_POS = [];// list of objects ={pos, state, uid} top layer
        var TEMP_BOT_POS = [];// list of objects ={pos, state, uid} bot layer
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        if(TEMP_POSITIONS.length==36){
            for(var x=0; x<18; x++){
                TEMP_BOT_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
            for(var x=18; x<36; x++){
                TEMP_TOP_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
        }else if(TEMP_POSITIONS.length==24){ // Position can be changed to contain 2 UIDS
            for(var x=0; x<12; x++){
                TEMP_BOT_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
            for(var x=12; x<24; x++){
                TEMP_TOP_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
        }else{
            errorCode = return_value;
            errorMessage = "Invalid Trolley Configuration" ;
            
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
            trolleyId: TEMP_TROLLEY_ID,
            packedUids :TEMP_SERIAL_NUMBER_AR ,
            numberOfParts : "" + TEMP_SERIAL_NUMBER_AR.length,
            topPositions : TEMP_TOP_POS,
            botPositions : TEMP_BOT_POS
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];

        }
        catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpUnpackUidInPosition failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        }
        return result;
}

function cfWpPackUidInPosition(jsonData){
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var position = data.position;
        
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
        // API integration -----------------------------------------------------
		if(stationNumber.slice(0,stationNumber.length-2) == "060060"){
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" 
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_ACTIVE_TROLLEY");
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
        var TEMP_TROLLEY_ID = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv    

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("VIRTUAL_UIDS");
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
        var TEMP_VIRTUAL_UIDS = "" + result_attribGetAttributeValues.attributeResultValues[1];
        
        if(TEMP_VIRTUAL_UIDS==""){
            errorCode = "-1200";
            errorMessage = "[No OPC UIDs found for packing]";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_LINKED_PN");
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
        var TEMP_REFERENCE = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        var TEMP_OBJECT = getUidsToPack(TEMP_VIRTUAL_UIDS, TEMP_REFERENCE);
        var TEMP_ERROR = TEMP_OBJECT.err;
        if(TEMP_ERROR != 0){
        
            errorCode = "-10101";
            errorMessage = "[Error in getUidsToPack] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        var TEMP_UIDS = TEMP_OBJECT.pairs;
        var TEMP_UIDS_0 = TEMP_OBJECT.pairs.slice(1,TEMP_OBJECT.pairs.length);
        TEMP_UIDS = TEMP_UIDS[0];
        var TEMP_UIDS_1 = TEMP_UIDS;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv


        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_SETUP");
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
        var TEMP_WP_SETUP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if(TEMP_REFERENCE == "Continental MLBevo 17\" NAO" || TEMP_REFERENCE == "Continental MLBevo 16\" ECE"){

            
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_OBJECT = updateWipPosition(TEMP_WP_SETUP, position, TEMP_UIDS, 0);
            var TEMP_ERROR = TEMP_OBJECT.err;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            if(TEMP_ERROR != 0 && TEMP_ERROR != 2){
    
                errorCode = "-10201";
                errorMessage = "[Error in updateWipPosition] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            if(TEMP_ERROR == 2){
    
                errorCode = 0;
                errorMessage = "";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_MAP = TEMP_OBJECT.map;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                

            
        }else{

            var TEMP_UIDS_LR =  TEMP_UIDS.split(",");

            if(TEMP_UIDS_LR[0][0]=="L"){
                var TEMP_UID_LEFT = TEMP_UIDS_LR[0] ;
                var TEMP_UID_RIGHT = TEMP_UIDS_LR[1];
            }else if(TEMP_UIDS_LR[0][0]=="R"){
                var TEMP_UID_LEFT = TEMP_UIDS_LR[1];
                var TEMP_UID_RIGHT = TEMP_UIDS_LR[0];
            }
            
            var position_left = position.slice(0,position.length-1)+"L";
            var position_right = position.slice(0,position.length-1)+"R";

            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_OBJECT = updateWipPosition(TEMP_WP_SETUP, position_left , TEMP_UID_LEFT, 0);
            var TEMP_ERROR = TEMP_OBJECT.err;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            if(TEMP_ERROR != 0 && TEMP_ERROR != 2){
    
                errorCode = "-10201";
                errorMessage = "[Error in updateWipPosition] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            if(TEMP_ERROR == 2){
    
                errorCode = 0;
                errorMessage = "";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_MAP = TEMP_OBJECT.map;
            TEMP_OBJECT = updateWipPosition(TEMP_MAP, position_right, TEMP_UID_RIGHT, 0);
            TEMP_ERROR = TEMP_OBJECT.err;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            if(TEMP_ERROR != 0 && TEMP_ERROR != 2 ){
    
                errorCode = "-10201";
                errorMessage = "[Error in updateWipPosition] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            if(TEMP_ERROR == 2){
    
                errorCode = 0;
                errorMessage = "";
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            TEMP_MAP = TEMP_OBJECT.map;
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        }
        
        // <shipActivateShippingLotAtKap> --------------------------------------
        var result_shipActivateShippingLotAtKap = imsApiService.shipActivateShippingLotAtKap(imsApiSessionContext, 
            stationNumber,
            TEMP_TROLLEY_ID
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
        if(TEMP_UIDS.length==0){
            errorCode = "-1200";
            errorMessage = "[No OPC UIDs found for packing]";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        for(var x=0;x<TEMP_UIDS.split(",").length;x++){
        
            
            // <shipAddSerialNumberToShippingLot> ------------------------------
            var result_shipAddSerialNumberToShippingLot = imsApiService.shipAddSerialNumberToShippingLot(imsApiSessionContext, 
                stationNumber, 
                TEMP_TROLLEY_ID,
                TEMP_UIDS.split(",")[x],
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
                TEMP_UIDS.split(",")[x],
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
        /*
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
        }*/
        // <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("WP_SETUP",TEMP_MAP ,"0");
        var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
            stationNumber, 
            2,
            TEMP_TROLLEY_ID,
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

        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_SETUP");
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
        var TEMP_WP_SETUP = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_POSITIONS = getSetup(TEMP_WP_SETUP,0).positions; 
        var TEMP_UIDS = getSetup(TEMP_WP_SETUP,0).uids;
        var TEMP_STATES = getSetup(TEMP_WP_SETUP,0).states;
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_SERIAL_NUMBER_AR = [];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        // <shipGetSerialNumberDataForShippingLot> -----------------------------
        var serialNumberResultKeys = new Array("PART_DESC", "PART_NUMBER", "SERIAL_NUMBER","WORKORDER_NUMBER");
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
       
        for (x=0; x< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/4; x++){
            TEMP_SERIAL_NUMBER_AR.push("" + result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[x*4+2]);
        }

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var TEMP_TOP_POS = [];// list of objects ={pos, state, uid} top layer
        var TEMP_BOT_POS = [];// list of objects ={pos, state, uid} bot layer
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

        if(TEMP_POSITIONS.length==36){
            for(var x=0; x<18; x++){
                TEMP_BOT_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
            for(var x=18; x<36; x++){
                TEMP_TOP_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
        }else if(TEMP_POSITIONS.length==24){ // Position can be changed to contain 2 UIDS
            for(var x=0; x<12; x++){
                TEMP_BOT_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
            for(var x=12; x<24; x++){
                TEMP_TOP_POS.push({
                    position: ""+TEMP_POSITIONS[x],
                    state: ""+TEMP_STATES[x],
                    uid: ""+TEMP_UIDS[x]
                });
            }
        }else{
            errorCode = return_value;
            errorMessage = "Invalid Trolley Configuration" ;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result; 
        }

        //updating the attribute : Removing packed UIDS from plc attribute
        TEMP_OBJECT = updateVirtualUidsMapHMI(TEMP_VIRTUAL_UIDS,TEMP_UIDS_0,TEMP_REFERENCE);
        TEMP_ERROR = TEMP_OBJECT.err;

        if(TEMP_ERROR != 0){
    
            errorCode = "-10205";
            errorMessage = "[Error in updateVirtualUidsMapHMI] "+ TEMP_OBJECT.message;
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
            };
            
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        var NEW_TEMP_VIRTUAL_UIDS = TEMP_OBJECT.map;
        //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    
    
        // <attribAppendAttributeValues> ---------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("VIRTUAL_UIDS", NEW_TEMP_VIRTUAL_UIDS, "0");
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

        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            trolleyId: TEMP_TROLLEY_ID,
            packedUids : TEMP_UIDS_1 ,
            numberOfParts : "" + TEMP_SERIAL_NUMBER_AR.length,
            topPositions : TEMP_TOP_POS,
            botPositions : TEMP_BOT_POS
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
    
        }
        catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpPackUidInPosition failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
        }
        return result;
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                               /*******  *********  ********    
                                                *            *      *        *
                                                *******      *      *        *  
                                                      *      *      *        *   
                                                *******      *      ********/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function cfWpPrintBoxInfo(jsonData){
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
        var TEMP_SHIPPING_DATE_AR = [];
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
        var attributeUploadValues = new Array("WP_ACTIVE_BOX", boxId, "0");
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
                        partDescription : TEMP_PART_DESC_AR[x].slice(0, TEMP_PART_DESC_AR[x].length-2),
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

    
    


        // JSON result ------------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            boxId : boxId,
            setupTime : "" + TEMP_SETUP_TIME,
            quantity: TEMP_QTY,
            serialNumbers : TEMP_SNR_AR
            
        };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpPrintBoxInfo failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfWpGetBaskets(jsonData){
    var result = new Result_customFunctionCommon();
    try {        
        
        // JSON parser ------------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        

        // Intermediate variables -------------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration --------------------------------------------------------
		// <attribGetAttributeValues> ---------------------------------------------
        var attributeCodeArray = new Array("WP_CANCELLED_BOXES");
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
        var TEMP_CANCELLED_BOXES = "" + result_attribGetAttributeValues.attributeResultValues[1];
		TEMP_CANCELLED_BOXES = TEMP_CANCELLED_BOXES.split("|");
		// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        // JSON result ------------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            baskets : TEMP_CANCELLED_BOXES
            
        };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpGetBaskets failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfWpGetMaxQuantity(jsonData){
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
        var res = fct_getWpMaxBasketQuantities(configContent).maxBasketQuantities; 
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


function cfWpGetPartNumber(jsonData){
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
        logHandler.logMessage("Custom function cfWpGetPartNumbers failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfWpGetBasketNb(jsonData){
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
        var res = fct_getBasketNumbers(configContent).basketNumbers; 
        
        // JSON result ------------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            basketNbs : res
            
        };
        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpGetBasketNb failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMeserrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMeserrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfWpPackSnToBox(jsonData) {
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
        

        // =====================================================================
        
        // Check serial number - The serial number will be created when the UID will have the cavity number "00".
        
        var uidInf = getInfoFromUID(serialNumber);
        var cav = uidInf.cavity;
        var line = uidInf.line;      
        var WORKORDER = "";
        var log = "";
        var AUTO_PROCESS = true;
        var configContent = fct_readDocument(stationNumber); 

        if (cav == "00") {
            var uidInfo = getInfoFromUID(serialNumber);
            var cav = uidInfo.cavity;  
            var ref = fct_getReference(configContent, uidInfo.reference, uidInfo.side).partNumber;
            
            AUTO_PROCESS = false;
            var WP = "WP2";
            var woResult = getWorkorder(stationNumber, ref, WP);   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP2"
            WORKORDER = woResult.workorder; 
            var fct_assignSnr = assignSnr(stationNumber,serialNumber,WORKORDER);
        
            return_value = fct_assignSnr.errorCode;
            if ( return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "[trAssignSerialNumberForProductOrWorkOrder] " + errorMessage
                    };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

        }else if(cav == "99" && stationNumber == "06010030" && isKaizenLine(line)=="true" ){
            var uidInfo = getInfoFromUID_ms(serialNumber);
            var uidInfo2 = getInfoFromUID2(serialNumber, configContent);
            var cav = uidInfo.cavity;  
            var ref = fct_getReference(configContent, uidInfo.reference, uidInfo.side).partNumber;
            
            AUTO_PROCESS = false;
            var WP = "WP3";
            var woResult = getWorkorder(stationNumber,ref, WP);   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP3"
            WORKORDER = woResult.workorder;

             //Getting the part number for the consumption 
            var TEMP_PART_NUMBER = "";
            
            TEMP_OBJECT = getPartNumber(configContent, uidInfo2.reference, uidInfo2.side );
            TEMP_ERROR = TEMP_OBJECT.err; 

            if(TEMP_ERROR != 0){

                errorCode = -1035;
                errorMessage = "[Error in getPartNumber] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            TEMP_PART_NUMBER = TEMP_OBJECT.partNumber;
            
            
            var fct_assignSnr = assignSnr(stationNumber,serialNumber,WORKORDER);
        
            return_value = fct_assignSnr.errorCode;
            if ( return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "[trAssignSerialNumberForProductOrWorkOrder] " + errorMessage
                    };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }

        }else if(cav == "99" && line !="C" ){
            var uidInfo = getInfoFromUID(serialNumber);
            var cav = uidInfo.cavity;  
            var ref = fct_getReference(uidInfo.reference, uidInfo.side).partNumber;

            AUTO_PROCESS = false;
            var WP = "WP4";
            var woResult = getWorkorder(stationNumber,ref, WP);   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP4"
            WORKORDER = woResult.workorder;
            var fct_assignSnr = assignSnr(stationNumber,serialNumber,WORKORDER);
        
            return_value = fct_assignSnr.errorCode;
            if ( return_value != 0) {
                errorCode = return_value;
                errorMessage = getImsApiErrorText(return_value);
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "[trAssignSerialNumberForProductOrWorkOrder] " + errorMessage
                    };
                result.outArgs = [JSON.stringify(resultData)];
                result.return_value = return_value;
                return result;
            }
        }

        
           
        

        var _snr = serialNumber;
        var _wo = WORKORDER;
        
        if (WORKORDER != "") {
            _snr = "-1";
            _wo = WORKORDER;
        }
        else {
            _snr = serialNumber;
            _wo = "-1";
        }
                
        //log += "WO: " + _wo + " - SNR: " + _snr;

        //<trActivateWorkorder>----------------------------------------------------------------
        var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
        var serialNumberUploadValues = new Array();
        var result_trActivateWorkorder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
            stationNumber,
            _wo,
            _snr,
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
        
        // Check serial number state only for unit coming from automatic process
        if (AUTO_PROCESS) {
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
			var SIIFStation = getSIIFStation(line);
			
			
			//<trUploadState>----------------------------------------------------------------
            var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
            var serialNumberUploadValues = new Array();
            var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                SIIFStation,
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

        
        //Kaizen consumption

        if( WP=="WP3"){
			var kaizenStation = getKaizenStation(line);
            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("DC_TROLLEY_MAP","DC_PART_MAP");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                kaizenStation, 
                7,
                kaizenStation,
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
            var TEMP_DC_TROLLEY_MAP = ""+result_attribGetAttributeValues.attributeResultValues[4];
            var TEMP_DC_PART_MAP = ""+result_attribGetAttributeValues.attributeResultValues[1];
            //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

            TEMP_OBJECT = getTrolleyId("SC-"+TEMP_PART_NUMBER, TEMP_DC_PART_MAP, TEMP_DC_TROLLEY_MAP);
            TEMP_ERROR = TEMP_OBJECT.errorCode;

            if(TEMP_ERROR != 0){
    
                errorCode = -10335;
                errorMessage = "[Error in getTrolleyId] "+ TEMP_OBJECT.message;
                
                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                };
                
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
            var TEMP_TROLLEY_ID = TEMP_OBJECT.trolleyId;

            // <shipGetSerialNumberDataForShippingLot> ---------------------------------------------
            var serialNumberResultKeys = new Array("PART_NUMBER", "SERIAL_NUMBER");
            var result_shipGetSerialNumberDataForShippingLot = imsApiService.shipGetSerialNumberDataForShippingLot(imsApiSessionContext, 
                kaizenStation, 
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
            var TEMP_BATCH_AR = [];
            var TEMP_PART_NB_AR =[];

            for (var y=0; y< result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues.length/2; y++){

                TEMP_PART_NB_AR.push( ""+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[y*2+0]);
                TEMP_BATCH_AR.push( ""+result_shipGetSerialNumberDataForShippingLot.serialNumberResultValues[y*2+1]);

            }    
            for (var y=0; y< TEMP_PART_NB_AR.length; y++){
                logHandler.logMessage("bbbbbbb"+"  SC-" + TEMP_PART_NUMBER+" +++++++++++ "+TEMP_PART_NB_AR[y]);
                if(("SC-" + TEMP_PART_NUMBER)==TEMP_PART_NB_AR[y]){

                     // <attribGetAttributeValues> ---------------------------------------------------------
                    var attributeCodeArray = new Array("PASS_QTY");
                    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                    var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                        kaizenStation, 
                        2,
                        TEMP_BATCH_AR[y],
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

                    var TEMP_PASS_QTY = "" + result_attribGetAttributeValues.attributeResultValues[1];
                    TEMP_PASS_QTY = "" + (parseInt(TEMP_PASS_QTY) - 1 );

                    // <attribAppendAttributeValues> ------------------------------------------------------
                    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
                    var attributeUploadValues = new Array("PASS_QTY", TEMP_PASS_QTY, "0");
                    var result_attribAppendAttributeValues = imsApiService.attribAppendAttributeValues(imsApiSessionContext, 
                        kaizenStation, 
                        2,
                        TEMP_BATCH_AR[y],
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

            //<trUploadState>----------------------------------------------------------------
            var serialNumberUploadKeys = new Array("ERROR_CODE", "SERIAL_NUMBER", "SERIAL_NUMBER_STATE");
            var serialNumberUploadValues = new Array();
            var result_trUploadState = imsApiService.trUploadState(imsApiSessionContext, 
                kaizenStation,
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
		//check if serial number reference can be packed in the current basket
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
        var TEMP_PART_DESC = "" + result_trGetSerialNumberInfo.serialNumberResultValues[0];
        var TEMP_PART_NUMBER = "" + result_trGetSerialNumberInfo.serialNumberResultValues[1];
        var TEMP_WORKORDER = "" + result_trGetSerialNumberInfo.serialNumberResultValues[3];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        
        if(TEMP_LOT_PART_NUMBER != "0"){
            var TEMP_AVAILABLE_PNS = fct_getAvailablePartNumbers(configContent, TEMP_PART_NUMBER).partNumbers;
            logHandler.logMessage(TEMP_AVAILABLE_PNS);
            if(TEMP_AVAILABLE_PNS.indexOf(TEMP_PART_NUMBER)==-1){
                errorCode = -7788;
                errorMessage = "Serial number is not valid for this basket "

                var resultData = {
                        errorCode : errorCode,
                        errorMessage : "" + errorMessage
                    };
                result.return_value = errorCode ;
                result.outArgs = [JSON.stringify(resultData)];
                return result;
            }
        }
		//max quantity check
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_MAX_QUANTITY");
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
        if(TEMP_SERIAL_NUMBER_AR.length==parseInt(TEMP_MAX_QUANTITY)){
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
        
        
        if(boxId == TEMP_SHIPPING_LOT_NUMBER &&(TEMP_LOT_PART_NUMBER="0") ){
        
            // <shipAddSerialNumberToShippingLot> ------------------------------
            var result_shipAddSerialNumberToShippingLot = imsApiService.shipAddSerialNumberToShippingLot(imsApiSessionContext, 
                stationNumber, 
                boxId,
                serialNumber,
                "-1",
                "-1");

            var return_value = result_shipAddSerialNumberToShippingLot.return_value;
            
            if (return_value != 0 && return_value != 406 && return_value != 405) {
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
                errorMessage : "The selected basket is not found or not active at the station."
            };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }
        
       
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfWpPackSnToBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfWpRemoveSnFromBox(jsonData) {
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
        logHandler.logMessage("Custom function cfWpRemoveSnFromBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}


function cfWpFinishBox(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;
        var wipState = data.wipState;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        var resultData = {};
        
        // API integration -----------------------------------------------------
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_REGISTERED_BOXES");
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
           errorCode = return_value;
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
        var attributeUploadValues = new Array("WP_ACTIVE_BOX","" ,"0","WP_REGISTERED_BOXES",NEW_TEMP_BOXES,"0");
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
        var attributeUploadValues = new Array("WIP_STATE", "BEFORE_HTT",0);
        
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
        resultData["boxId"] = boxId;

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfWpFinishBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
function cfWpCancelBox(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;
        var wipState = data.wipState;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        var resultData = {};
        
        // API integration -----------------------------------------------------

        //trolley registration check
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_REGISTERED_BOXES");
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
        var attributeUploadValues = new Array("WP_ACTIVE_BOX","" ,"0","WP_REGISTERED_BOXES",NEW_TEMP_BOXES,"0");
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
        var attributeUploadValues = new Array("WIP_STATE","BEFORE_HTT_PACKING",0);
        
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
		
		// <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_CANCELLED_BOXES");
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
        var TEMP_CANCELLED_BOXES = "" + result_attribGetAttributeValues.attributeResultValues[1];
		if(TEMP_CANCELLED_BOXES==""){
			TEMP_CANCELLED_BOXES+=boxId;
		}else{
			TEMP_CANCELLED_BOXES+="|"+boxId;
		}
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
		// <attribAppendAttributeValues> ------------------------------------------------------
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("WP_CANCELLED_BOXES",TEMP_CANCELLED_BOXES ,"0");
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
        logHandler.logMessage("Custom function cfWpCancelBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfWpRegisterBox(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;    
        var basketNb =  data.basketNb;
        var maxQuantity = data.maxQuantity;
        var containerMode = data.containerMode;
        var wipState = data.wipState;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";

        
        // API integration -----------------------------------------------------
        /*
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WIP_STATE");
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
        var TEMP_WIP_STATE = "" + result_attribGetAttributeValues.attributeResultValues[1];
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        if(TEMP_WIP_STATE!="BEFORE_HTT_PACKING"){
            errorCode = -1300;
            errorMessage = "[Trolley was not correctly released from previous process] ";
            
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "" + errorMessage
                };
            result.return_value = errorCode ;
            result.outArgs = [JSON.stringify(resultData)];
            return result;
        }*/
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("WP_REGISTERED_BOXES");
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
        

        if (boxId == "" && basketNb !="" && maxQuantity !=""){
            
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

            //<mdataGetCalendarData>----------------------------------------------------------------
            var calendarDataResultKeys = new Array("DAY_OF_YEAR", "HOUR_OF_DAY", "YEAR");

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
            var TEMP_DAY_OF_YEAR = "" + result_mdataGetCalendarData.calendarDataResultValues[0];
            var TEMP_HOUR_OF_DAY = "" +  result_mdataGetCalendarData.calendarDataResultValues[1];
            var TEMP_YEAR = "" + result_mdataGetCalendarData.calendarDataResultValues[2];
            TEMP_YEAR = TEMP_YEAR.slice(TEMP_YEAR.length-2, TEMP_YEAR.length);
            // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            var TEMP_BOX_ID = "HT_MO_" + TEMP_YEAR + TEMP_DAY_OF_YEAR + "_" + TEMP_HOUR_OF_DAY +"_"+ basketNb;

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
            
        }else if(boxId != "" && basketNb =="" && maxQuantity ==""){
            var TEMP_BOX_ID = boxId ;
        }else{
            errorCode = -1060;
            errorMessage = "[Please enter correct data] ";

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
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
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
        var attributeUploadValues = new Array("WP_ACTIVE_BOX",TEMP_BOX_ID ,"0","WP_REGISTERED_BOXES", TEMP_BOXES, "0");
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
            var attributeUploadValues = new Array("WP_MAX_QUANTITY", maxQuantity, "0");
            
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
        var attributeUploadValues = new Array("WIP_STATE","", "0", "START_TIME",TEMP_CURRENT_TIME,"0");
        
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
		if(boxId!=""){
			// <attribGetAttributeValues> ------------------------------------------
			var attributeCodeArray = new Array("WP_CANCELLED_BOXES");
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
			var TEMP_CANCELLED_BOXES = "" + result_attribGetAttributeValues.attributeResultValues[1];
			var TEMP_NEW_CANCELLED_BOXES = "";
			TEMP_CANCELLED_BOXES = TEMP_CANCELLED_BOXES.split("|");
			for(var k=0; k<TEMP_CANCELLED_BOXES.length;k++){
				if(TEMP_CANCELLED_BOXES[k]==boxId){
					TEMP_NEW_CANCELLED_BOXES +="";
				}else{
					TEMP_NEW_CANCELLED_BOXES += TEMP_CANCELLED_BOXES[k]+"|";
				}
			}  
			TEMP_NEW_CANCELLED_BOXES = TEMP_NEW_CANCELLED_BOXES.slice(0,TEMP_NEW_CANCELLED_BOXES.length-1);
			// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
			// <attribAppendAttributeValues> ------------------------------------------------------
			var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
			var attributeUploadValues = new Array("WP_CANCELLED_BOXES",TEMP_NEW_CANCELLED_BOXES ,"0");
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
        // JSON result ---------------------------------------------------------
        var resultData = {
            errorCode : errorCode,
            errorMessage : errorMessage,
            setupTime : "0 Sec",
            boxId : "" + TEMP_BOX_ID,
            
        };

        result.return_value = errorCode ;
        result.outArgs = [JSON.stringify(resultData)];
        // ---------------------------------------------------------------------
    }
    catch (e) {
        // Error handling
        logHandler.logMessage("Custom function cfWpRegisterBox failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function cfWpGetBoxesInfo(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var boxId = data.boxId;       
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "[OK]";
        
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
            var attributeUploadValues = new Array("WP_ACTIVE_BOX", boxId, "0");
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
        var attributeCodeArray = new Array("WP_REGISTERED_BOXES");
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
							partDescription : TEMP_PART_DESC_AR[x].slice(0,TEMP_PART_DESC_AR[x].length-2),
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
        logHandler.logMessage("Custom function cfWpGetBoxesInfo failed: " + e);
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


function getSetup(map, err){
    map += "";

    var pos_state_uid = map.split("|");
    var pos = [];//list of positions
    var states = []; //list of states
    var uids = []; //list of uids
    

    for(var i = 0; i < pos_state_uid.length; i++){   
        pos.push((pos_state_uid[i].split(":")[0]).split(",")[0]);//[1L,1R,2L,2R]
        states.push((pos_state_uid[i].split(":")[0]).split(",")[1]);//[0,0,1]
        uids.push(pos_state_uid[i].split(":")[1]);//[uid uid, uid3, uid4, uid5]
    }

    return {
        map:map,
        positions:pos,
        uids:uids,
        states:states,
        err:err,
        message:"PASS" 
    }
}
function updateWipPosition(map, position, uid, err){
    map += "";

    var pos_state_uid = map.split("|");
    var pos = [];//list of positions
    var states = []; //list of states
    var uids = []; //list of uids
    var update_flag = false;

    for(var i = 0; i < pos_state_uid.length; i++){   
        pos.push((pos_state_uid[i].split(":")[0]).split(",")[0]);//[1L,1R,2L,2R]
        states.push((pos_state_uid[i].split(":")[0]).split(",")[1]);//[0,0,1]
        uids.push(pos_state_uid[i].split(":")[1]);//[uid uid, uid3, uid4, uid5]
    }

    for(var i=0; i < pos.length; i++){

        if(position== pos[i]){
        
            if(states[i]=="1"||states[i]=="2"){
                return{
                    map:map,
                    position:position,
                    uid:uids[i],
                    err:2,
                    message:""
                }
            }
            states[i] = "1";
            uids[i] = uid;
            update_flag = true;
            err = 0
        }
    }

    if (update_flag == false){ 
        
        return{
            map:map,
            err:1,
            message :"position not found"
        }
    }
        
    var new_map = "";

    for (i=0; i < pos.length; i++){
        new_map += pos[i] + "," +states[i] + ":"+ uids[i] +"|";
    }

    new_map = new_map.slice(0,new_map.length-1); 
    
    return {
        map:new_map,
        position:position,
        uid:uid,
        err:err,
        message:"PASS" 
    }
} 


function removeWipPosition(map, position, uid, state, err){
    map += "";

    var pos_state_uid = map.split("|");
    var pos = [];//list of positions
    var states = []; //list of states
    var uids = []; //list of uids
    var update_flag = false;

    for(var i = 0; i < pos_state_uid.length; i++){   
        pos.push((pos_state_uid[i].split(":")[0]).split(",")[0]);//[1L,1R,2L,2R]
        states.push((pos_state_uid[i].split(":")[0]).split(",")[1]);//[0,0,1]
        uids.push(pos_state_uid[i].split(":")[1]);//[uid uid, uid3, uid4, uid5]
    }

    for(var i=0; i < pos.length; i++){

        if(position== pos[i]){
        
            if(states[i]=="1"||states[i]=="2"){
                states[i] = state;
                var removed_uid = uids[i]; 
               
                    uids[i] = uid;
               
                
                update_flag = true;
                err = 0;
               
            }else{
                return{
                    map:map,
                    position:position,
                    uid:uids[i],
                    err:1,
                    message:"Position is already empty"
                }
            } 
        }
    }
    if (update_flag == false){ 
        return{
            map:map,
            err:1,
            message :"position not found"
        }
    }
    
        
    var new_map = "";

    for (i=0; i < pos.length; i++){
        new_map += pos[i] + "," +states[i] + ":"+ uids[i] +"|";
    }

    new_map = new_map.slice(0,new_map.length-1); 
    
    return {
        map:new_map,
        position:position,
        uid:removed_uid,
        err:err,
        message:"PASS" 
    }  
} 

function getUidFromPosition(map, position, err){
    map += "";

    var pos_state_uid = map.split("|");
    var pos = [];//list of positions
    var states = []; //list of states
    var uids = []; //list of uids
    var update_flag = false;

    for(var i = 0; i < pos_state_uid.length; i++){   
        pos.push((pos_state_uid[i].split(":")[0]).split(",")[0]);//[1L,1R,2L,2R]
        states.push((pos_state_uid[i].split(":")[0]).split(",")[1]);//[0,0,1]
        uids.push(pos_state_uid[i].split(":")[1]);//[uid uid, uid3, uid4, uid5]
    }

    for(var i=0; i < pos.length; i++){

        if(position== pos[i]){
        
            
                return{
                    map:map,
                    position:position,
                    uid:uids[i],
                    err:0,
                    message:"Pass"
                }
            
            
            update_flag = true;
            err = 0
        }
    }
        if (update_flag == false){ 
            
            return{
                map:map,
                err:1,
                message :"position not found"
            }
        }
} 

function scrapWipPosition(map, position, uid, state, err){
    map += "";

    var pos_state_uid = map.split("|");
    var pos = [];//list of positions
    var states = []; //list of states
    var uids = []; //list of uids
    var update_flag = false;

    for(var i = 0; i < pos_state_uid.length; i++){   
        pos.push((pos_state_uid[i].split(":")[0]).split(",")[0]);//[1L,1R,2L,2R]
        states.push((pos_state_uid[i].split(":")[0]).split(",")[1]);//[0,0,1]
        uids.push(pos_state_uid[i].split(":")[1]);//[uid uid, uid3, uid4, uid5]
    }

    for(var i=0; i < pos.length; i++){

        if(position== pos[i]){
        
            if(states[i]=="1"||states[i]=="2"){
                states[i] = state;
                var removed_uid = uids[i]; 
                
                uids[i] = removed_uid;
                update_flag = true;
                err = 0;
               
            }else{
                return{
                    map:map,
                    position:position,
                    uid:uids[i],
                    err:1,
                    message:"Position is empty"
                }
            }
            
        }
    }
    if (update_flag == false){ 
        return{
            map:map,
            err:1,
            message :"position not found"
        }
    }
    
        
    var new_map = "";

    for (i=0; i < pos.length; i++){
        new_map += pos[i] + "," +states[i] + ":"+ uids[i] +"|";
    }

    new_map = new_map.slice(0,new_map.length-1); 
    
    return {
        map:new_map,
        position:position,
        uid:removed_uid,
        err:err,
        message:"PASS" 
    }  
}    

function getUidsToPack(map,reference){
    
    map += ""; 
  
    var references_uidslr = map.split("|");
    var references = [];
    var uidslr = [];
    var reference_flag = false;         
     
    
    for(var i=0;i<references_uidslr.length; i++){
        references.push(references_uidslr[i].split(":")[0]); 
        
        uidslr.push(references_uidslr[i].split(":")[1]);
        
    }
  

    for(var i=0;i<references.length; i++){
        if(reference==references[i]){
            reference_flag = true;
            var pairs = uidslr[i].split(";");
        }
    } 

    if(reference_flag==false){
        return{
          err:1,
          message:"reference not found"
          
        } 
    }
  
    
    return{
        err:0,
        message:"",
        map: map,
        reference: reference,
        pairs : pairs
    }
  
}


function updateVirtualUidsMapHMI(map, pairs, reference){
    
    map += ""; 
    
    var references_uidslr = map.split("|");
    var references = [];
    var uidslr = [];
    var reference_flag = false;      
      
    //map initialitzation
    if(map==""){
        
        return{
            map : new_map,    
            err:1,
            message:"Empty map",    
            reference: reference
        }
    }
  
    for(var i=0;i<references_uidslr.length; i++){
        references.push(references_uidslr[i].split(":")[0]); 
        
        uidslr.push(references_uidslr[i].split(":")[1]);
        
    }
  

    for(var i=0;i<references.length; i++){
        if(reference==references[i]){
            reference_flag = true;
            uidslr[i] = "";
            for(var j=0;j<pairs.length; j++){
                if(pairs[j]!=""){
                    uidslr[i]+=pairs[j] +";";
                }
                
            }   
            uidslr[i] =uidslr[i].slice(0,uidslr[i].length-1)
        }
    } 

    if(reference_flag==false){
        return{
            err:1,
            message:"reference not found"
            
          } 
    }
  
    var new_map = "" ;
    
    for(var i=0;i<references.length; i++){
        new_map += references[i]+":"+uidslr[i]+"|";
    }

    new_map = new_map.slice(0,new_map.length-1);
    
    return{
        err:0,
        message:"",
        map: new_map,
        reference: reference 
    }
}




function getWorkorder(stationNumber,partNumber,infoText){
    var workorder = "";
    var errorCode = 0;
    var TEMP_WO_AR = [];
    var TEMP_START_DATE_AR = [];
    var TEMP_INFO_TXT = [];
    //--------------------------------------------------------------------------
    
    // <mdataGetWorkorders> ----------------------------------------------------
    var mdataGetWorkordersFilers = new Array(new KeyValue("PART_NUMBER",partNumber), new KeyValue("WORKORDER_STATE","F,S"));
    var mdataGetWorkordersResultKeys = new Array("WORKORDER_NUMBER", "PLANNED_START_DATE", "INFO_TXT_1");
    var result_mdataGetWorkorders = imsApiService.mdataGetWorkorders(imsApiSessionContext, 
        stationNumber, 
        mdataGetWorkordersFilers,
        mdataGetWorkordersResultKeys
        );

    var return_value = result_mdataGetWorkorders.return_value;
    
    if (return_value != 0) {
        errorCode = return_value;
        workorder = "";
        return {
            workorder:workorder,
            errorCode:errorCode
        }
    }
    
    for (var x=0; x< result_mdataGetWorkorders.mdataGetWorkordersResultValues.length/3; x++){
        var txt = result_mdataGetWorkorders.mdataGetWorkordersResultValues[x*3+2];
        if (txt == infoText) {
            TEMP_WO_AR.push(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x*3+0]);
            TEMP_START_DATE_AR.push(parseInt(result_mdataGetWorkorders.mdataGetWorkordersResultValues[x*3+1]));
            TEMP_INFO_TXT.push(txt);
        }
    }
    
    // Sort Workorders by start date (from newest to oldest)
    if (TEMP_WO_AR.length>1){
        for (var x=0;x<TEMP_WO_AR.length;x++){
            for (var y=x+1;y<TEMP_WO_AR.length;y++){
                if (TEMP_START_DATE_AR[y]>TEMP_START_DATE_AR[x]){
                    var wo = TEMP_WO_AR[y];
                    TEMP_WO_AR[y] = TEMP_WO_AR[x];
                    TEMP_WO_AR[x] = wo;
                    var sd = TEMP_START_DATE_AR[y];
                    TEMP_START_DATE_AR[y] = TEMP_START_DATE_AR[x];
                    TEMP_START_DATE_AR[x] = sd;      
                }
            }
        }
    }
    
    // Most recent workorder
    //--------------------------------------------------------------------------
    workorder = TEMP_WO_AR[0];
    //--------------------------------------------------------------------------
    
    return {
        workorder:workorder,
        errorCode:errorCode
    }
}

function assignSnr(stationNumber,serialNumber,workorder){
    var errorCode = 0;
    
    var snrArray = new Array();
    
    // <trAssignSerialNumberForProductOrWorkOrder> -----------------------------
    var result_trAssignSerialNumberForProductOrWorkOrder = imsApiService.trAssignSerialNumberForProductOrWorkOrder(imsApiSessionContext,
                    stationNumber,
                    workorder,
                    "-1",
                    "-1",
                    serialNumber,
                    "1",
                    2,
                    snrArray,
                    0);
                    
    var return_value = result_trAssignSerialNumberForProductOrWorkOrder.return_value;
    
    if (return_value != 0 && return_value != -206){
        errorCode = return_value;
    }
    
    return {
        errorCode:errorCode
    }
}

  



// #############################################################################


// #############################################################################
function getLine(configContent,code) {
    
    var res = fct_getLine(configContent, code).line;  

    return res;
}
// #############################################################################


//#############################################################################


function getTrolleyId(pn, part_map, trolley_map){
  
    var batchId = "";
    var errorCode = 0;
    var errorMessage = "";
    var partmap = []; 
    var trolleymap = [];  
    var trolleyId = "";
    
    partmap = part_map.split("|");
    trolleymap = trolley_map.split("|");
      
    if (partmap.length != trolleymap.length){
      return {
          batchId:"-1",
          errorCode:-10,
          errorMessage:"The trolley mapping is not matching the part mapping.",
      };
    }
    
    for (var i=0;i<partmap.length;i++){  
      partmap[i]=partmap[i].split(":")[1];
      trolleymap[i]=trolleymap[i].split(":")[1];
      if (partmap[i]===undefined) partmap[i]="";
      if (trolleymap[i]===undefined) trolleymap[i]="";
    }
    
    for (i=0;i<partmap.length;i++){ 
       var s = partmap[i].split(",");
       for (var j=0;j<s.length;j++){
         if ((s[j]==pn)){
           trolleyId=trolleymap[i]; 
         } 
       }
    }
    
    return {
          trolleyId : trolleyId,
          errorCode : errorCode,
          errorMessage : ""
    };
    
  }

//MS MSMSMSMSMSMSMSMSM
function getReference_ms(code) {
    switch (code) {
        case "A":
            return "Advics Daimler MRA";
        case "B":
            return "Continental MLBevo 16\" ECE";
        case "C":
            return "Continental MLBevo 17\" NAO";
        case "D":
            return "Akebono MLBevo 18\" NAO";
        case "F":
            return "Akebono MLBevo 19\" ECE";
        case "H":
            return "Continental Hyundai M3 18\"";
        case "I":
            return "Continental Hyundai M3 19\"";
        case "E":
            return "Akebono MLBevo 18\" ECE";
        case "G":
            return "Akebono MLBevo 18\" RS Q3";
        default:
            return "";
    }
    return "";
}

function getInfoFromUID_ms(uid) {
    var err = 0;
    var side = "";
    var year = "";
    var day = "";
    var line = "";
    var reference = "";
    var cavity = "";
    var pouring = "";
    if ((uid.length == 13) && ((uid.charAt(0) == "L") || (uid.charAt(0) == "R"))) {
        err = 0;
        side = uid.substring(0, 1);
        year = uid.substring(1, 3);
        day = uid.substring(3, 6);
        line = (uid.substring(6, 7));
        reference = (uid.substring(7, 8));
        cavity = uid.substring(8, 10);
        pouring = uid.substring(10, 13);
    } else if ((uid.length == 12)) {
        err = 0;
        side = "";
        year = uid.substring(0, 2);
        day = uid.substring(2, 5);
        line = (uid.substring(5, 6));
        reference = (uid.substring(6, 7));
        cavity = uid.substring(7, 9);
        pouring = uid.substring(9, 12);
    } else {
        err = -1;
        side = "";
        year = "";
        day = "";
        line = "";
        reference = "";
        cavity = "";
        pouring = "";
    }

    return {
        err: err,
        uid: uid,
        side: side,
        year: year,
        day: day,
        line: line,
        reference: reference,
        cavity: cavity,
        pouring: pouring
    }
}


function getInfoFromUID2(configContent, uid) {
    var err = 0;
    var side = "";
    var year = "";
    var day = "";
    var line = "";
    var reference = "";
    var cavity = "";
    var pouring = "";
    if ((uid.length == 13) && ((uid.charAt(0) == "L") || (uid.charAt(0) == "R"))) {
        err = 0;
        side = uid.substring(0, 1);
        year = uid.substring(1, 3);
        day = uid.substring(3, 6);
        line = fct_getLine(configContent, uid.substring(6, 7)).line;
        reference = fct_getReference(configContent, uid.substring(7, 8), "").productFamily;
        cavity = uid.substring(8, 10);
        pouring = uid.substring(10, 13);
    } else if ((uid.length == 12)) {
       err = 0;
        side = "";
        year = uid.substring(0, 2);
        day = uid.substring(2, 5);
        line = fct_getLine(configContent, uid.substring(5, 6)).line;
        reference = fct_getReference(configContent, uid.substring(6, 7), "").productFamily;
        cavity = uid.substring(7, 9);
        pouring = uid.substring(9, 12);
    } else {
        err = -1;
        side = "";
        year = "";
        day = "";
        line = "";
        reference = "";
        cavity = "";
        pouring = "";
    }

    return {
        err: err,
        uid: uid,
        side: side,
        year: year,
        day: day,
        line: line,
        reference: reference,
        cavity: cavity,
        pouring: pouring
    }
}



function getPartNumber(configContent, productFamily, side){

    var res = fct_getProductInformation(configContent, productFamily, side).partNumber;


    return{
        err : 0,
        message: "PASS",
        partNumber : res
    }
}

 
function getReference2_ms(code,side) {
    switch (code) {
        case "A":
            if (side == "L") return "141116-10410";
            if (side == "R") return "141115-10410";
            return "Advics Daimler MRA";
        case "B":
            if (side == "L") return "13.4426-9973.9";
            if (side == "R") return "13.4426-9974.9";
            return "Continental MLBevo 16";
        case "C":
            if (side == "L") return "13.4446-9963.9";
            if (side == "R") return "13.4446-9964.9";
            return "Continental MLBevo 17";
        case "D":
            if (side == "L") return "51-D3606-17110";
            if (side == "R") return "51-D3606-27110";
            return "Akebono MLBevo 18 NAO";
        case "E":
            if (side == "L") return "51-D3507-17110";
            if (side == "R") return "51-D3507-27110";
            return "Akebono MLBevo 18 ECE";
        case "F":
            if (side == "L") return "51-D3508-17110";
            if (side == "R") return "51-D3508-27110";
            return "Akebono MLBevo 19 ECE";
        case "G":
            if (side == "L") return "51-D3517-17110";
            if (side == "R") return "51-D3517-27110";
            return "Akebono MLBevo 18 RS Q3";
        case "H":
            if (side == "L") return "13.4446-9801.9";
            if (side == "R") return "13.4446-9802.9";
            return "Continental Hyundai M3 18";
        case "I":
            if (side == "L") return "13.4446-9805.9";
            if (side == "R") return "13.4446-9806.9";
            return "Continental Hyundai M3 19";
        default:
            return "";
    }
    return "";
}



//VUVIVIVIVIVIVIVII

function getInfoFromUID(uid) {
    var err = 0;
    var side = "";
    var year = "";
    var day = "";
    var line = "";
    var reference = "";
    var cavity = "";
    var pouring = "";
    if ((uid.length == 13) && ((uid.charAt(0) == "L") || (uid.charAt(0) == "R"))) {
        err = 0;
        side = uid.substring(0, 1);
        year = uid.substring(1, 3);
        day = uid.substring(3, 6);
        line = (uid.substring(6, 7));
        reference = (uid.substring(7, 8));
        cavity = uid.substring(8, 10);
        pouring = uid.substring(10, 13);
    } else if ((uid.length == 12)) {
        err = 0;
        side = "";
        year = uid.substring(0, 2);
        day = uid.substring(2, 5);
        line = (uid.substring(5, 6));
        reference = (uid.substring(6, 7));
        cavity = uid.substring(7, 9);
        pouring = uid.substring(9, 12);
    } else {
        err = -1;
        side = "";
        year = "";
        day = "";
        line = "";
        reference = "";
        cavity = "";
        pouring = "";
    }

    return {
        err: err,
        uid: uid,
        side: side,
        year: year,
        day: day,
        line: line,
        reference: reference,
        cavity: cavity,
        pouring: pouring
    }
}

function getReference(code,side) {
    switch (code) {
        case "A":
            if (side == "L") return "141116-10410";
            if (side == "R") return "141115-10410";
            return "Advics Daimler MRA";
        case "B":
            if (side == "L") return "13.4426-9973.9";
            if (side == "R") return "13.4426-9974.9";
            return "Continental MLBevo 16";
        case "C":
            if (side == "L") return "13.4446-9963.9";
            if (side == "R") return "13.4446-9964.9";
            return "Continental MLBevo 17";
        case "D":
            if (side == "L") return "51-D3606-17110";
            if (side == "R") return "51-D3606-27110";
            return "Akebono MLBevo 18 NAO";
        case "E":
            if (side == "L") return "51-D3507-17110";
            if (side == "R") return "51-D3507-27110";
            return "Akebono MLBevo 18 ECE";
        case "F":
            if (side == "L") return "51-D3508-17110";
            if (side == "R") return "51-D3508-27110";
            return "Akebono MLBevo 19 ECE";
        case "G":
            if (side == "L") return "51-D3517-17110";
            if (side == "R") return "51-D3517-27110";
            return "Akebono MLBevo 18 RS Q3";
        case "H":
            if (side == "L") return "13.4446-9801.9";
            if (side == "R") return "13.4446-9802.9";
            return "Continental Hyundai M3 18";
        case "I":
            if (side == "L") return "13.4446-9805.9";
            if (side == "R") return "13.4446-9806.9";
            return "Continental Hyundai M3 19";
        default:
            return "";
    }
    return "";
}
function getAvailablePartNumbers(configContent, partNumber){

    var res = fct_getAvailablePartNumbers(configContent, partNumber).partNumbers; 

    return res;
}

function getKaizenStation(line){
    switch (line) {
         case "C":
             return "060020K101";
         default:
             return "";
     }
}
function isKaizenLine(line){
    switch (line) {
        case "C":
            return "true";
        default:
            return "false";
    }
}
function getTrimmingStation(line){
    switch (line) {
        case "A":
            return "06004010";
		case "B":
			return "06004020";
		default:
			return "";
     }
}
function getHammeringStation(line){
    switch (line) {
        case "A":
            return "06006010";
		case "B":
			return "06006020";
		default:
			return "";
    }
}
function getSIIFStation(line){
    switch (line) {
        case "A":
            return "06008010";
		case "B":
			return "06008020";
		default:
			return "";
    }
}