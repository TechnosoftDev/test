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
 Sami Akkari            2019-06-20      Le Belier        cfMs                    First Release 
 Sami Akkari            2019-08-13      Le Belier        cfMs                    Add batch quantity consumption in Kaizen die casting 
 Sami Akkari            2019-08-19      Le Belier        cfMs                    Add Reintroduction + Kaizen Consumption handling
 Sami Akkari            2019-08-22      Le Belier        cfMs                    Add kaizen HTT reintroduction and upload state
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

function cfMsUploadSerialNumber(jsonData){
    var result = new Result_customFunctionCommon();
    try {
        
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var serialNumber = data.serialNumber;
        
        // Intermediate variables ----------------------------------------------
        var errorCode = 0;
        var errorMessage = "";
        
        // API integration -----------------------------------------------------

        
        // =====================================================================
        // Check serial number - The serial number will be created when the UID will have the cavity number "00"or "99".
        
        var uidInfo = getInfoFromUID2(serialNumber);
        var cav = uidInfo.cavity;      
        var WORKORDER = "";
        var log = "";
        var AUTO_PROCESS = true;
        
        var ref = getReference2(uidInfo.reference,uidInfo.side);
        
        
        var TEMP_PART_NUMBER = "";

        TEMP_OBJECT = getPartNumber(uidInfo.reference, uidInfo.side );
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
        logHandler.logMessage("qpqpqpqppqpqpqp"+TEMP_PART_NUMBER);



        AUTO_PROCESS = false;
        if (cav == "00" ) {
            var woResult = getWorkorder(stationNumber,ref,"WP3");   // Workorder using wokplan for Kaizen consumption -> INFO_TXT_1 = "WP3"
            WORKORDER = woResult.workorder; 
        }else if(cav == "99") {
            var woResult = getWorkorder(stationNumber,ref,"WP4");   // Workorder using wokplan for reintroduced parts -> INFO_TXT_1 = "WP4"
            WORKORDER = woResult.workorder; 
        }
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
        
        // <trActivateWorkOrder> -----------------------------------------------
        var result_trActivateWorkOrder = imsApiService.trActivateWorkOrder(imsApiSessionContext, 
           stationNumber,
           _wo,
           _snr,
           "-1",
           2,
           1);
           
        return_value = result_trActivateWorkOrder.return_value;
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = getImsApiErrorText(return_value);
            var resultData = {
                    errorCode : errorCode,
                    errorMessage : "[trActivateWorkOrder] " + errorMessage
                };
            result.outArgs = [JSON.stringify(resultData)];
            result.return_value = return_value;
            return result;
        }   
        


        
        //Kaizen consumption

        if(stationNumber == "06010030" && cav == "00"){

            // <attribGetAttributeValues> ---------------------------------------------
            var attributeCodeArray = new Array("DC_TROLLEY_MAP","DC_PART_MAP");
            var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
            var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                "060020K101", 
                7,
                "060020K101",
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
                "060020K101", 
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
                        "060020K101", 
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
                        "060020K101", 
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
                "060020K101",
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

        if(cav == "00"){
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
            errorMessage = "[trUploadState] "+ getImsApiErrorText(return_value);
            
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
            errorCode : 0,
            errorMessage : ""

        };

        result.outArgs = [JSON.stringify(resultData)];

        // ---------------------------------------------------------------------

    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfMsUploadSerialNumber failed: " + e);
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

function getCastingProduct(scpn) {
    var ref = "SC-" + scpn;
    return ref;

    //    switch(scpn) {
    //        case "MOB001R": return "SCMOB001R";
    //        case "MOB001L": return "SCMOB001L";
    //        case "MOB002R": return "SCMOB002R";
    //        case "MOB002L": return "SCMOB002L";
    //        default: return "";
    //    }
    //    return "";

}

function getReference(code) {
    switch (code) {
        case "A":
            return "Advics Daimler MRA";
        case "B":
            return "Continental MLBevo 16\" ECE”";
        case "C":
            return "Continental MLBevo 17\" NAO”";
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

// #############################################################################


// #############################################################################
function getLine(code) {
    switch (code) {
        case "A":
            return "K6";
        case "B":
            return "K10";
        case "C":
            return "Kaizen";
        default:
            return "";
    }
    return "";
}
// #############################################################################



// #############################################################################
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
// #############################################################################

function getInfoFromUID2(uid) {
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
        line = getLine(uid.substring(6, 7));
        reference = getReference(uid.substring(7, 8));
        cavity = uid.substring(8, 10);
        pouring = uid.substring(10, 13);
    } else if ((uid.length == 12)) {
       err = 0;
        side = "";
        year = uid.substring(0, 2);
        day = uid.substring(2, 5);
        line = getLine(uid.substring(5, 6));
        reference = getReference(uid.substring(6, 7));
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

function getPartNumber(reference, side){

    if(reference=="Akebono MLBevo 18\" ECE" && side=="L"){
        var partNumber = "51-D3507-17110";
    }else if(reference=="Akebono MLBevo 18\" ECE" && side=="R"){
        var partNumber = "51-D3507-27110";
    
    }else if(reference=="Akebono MLBevo 18\" NAO" && side=="L"){
        var partNumber = "51-D3606-17110";
    }else if(reference=="Akebono MLBevo 18\" NAO" && side=="R"){
        var partNumber = "51-D3606-27110";
    
    }else if(reference=="Akebono MLBevo 19\" ECE" && side=="L"){
        var partNumber = "51-D3508-17110";
    }else if(reference=="Akebono MLBevo 19\" ECE" && side=="R"){
        var partNumber = "51-D3508-27110";
    
    }else if(reference=="Akebono MLBevo 18\" RS Q3" && side=="L"){
        var partNumber = "51-D3517-17110";
    }else if(reference=="Akebono MLBevo 18\" RS Q3" && side=="R"){
        var partNumber = "51-D3517-27110";
    
    }else if(reference=="Continental MLBevo 17\" NAO" && side=="L"){
        var partNumber = "13.4446-9963.9";
    }else if(reference=="Continental MLBevo 17\" NAO" && side=="R"){
        var partNumber = "13.4446-9964.9";
    
    }else if(reference=="Continental MLBevo 16\" ECE" && side=="L"){
        var partNumber = "13.4426-9973.9";
    }else if(reference=="Continental MLBevo 16\" ECE" && side=="R"){
        var partNumber = "13.4426-9974.9";
    
    }else if(reference=="Continental Hyundai M3 18\"" && side=="L"){
        var partNumber = "13.4446-9801.9";
    }else if(reference=="Continental Hyundai M3 18\"" && side=="R"){
        var partNumber = "13.4446-9802.9";
    
    }else if(reference=="Continental Hyundai M3 19\"" && side=="L"){
        var partNumber = "13.4446-9805.9";
    }else if(reference=="Continental Hyundai M3 19\"" && side=="R"){
        var partNumber = "13.4446-9806.9";
    
    }else if(reference=="Advics Daimler MRA" && side=="R"){
        var partNumber = "141116-10410";
    }else if(reference=="Advics Daimler MRA" && side=="L"){
        var partNumber = "141115-10410";
    
    }else{
        return{
            err : 1,
            message: "Invalid reference",
            partNumber : ""
        }
    }

    return{
        err : 0,
        message: "PASS",
        partNumber : partNumber
    }
}


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



  
function getReference2(code,side) {
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
    
    if (return_value != 0){
        errorCode = return_value;
    }
    
    return {
        errorCode:errorCode
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