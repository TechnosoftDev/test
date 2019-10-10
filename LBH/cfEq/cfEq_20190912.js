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
 Name:           Date:           Customer:        Function:               Comment:
 **/

importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.util.constants.imsapi);
importPackage(java.lang);
importPackage(com.itac.mes.api.custom);


function cfEqGetAvailableProducts(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        
        var reference = {
            
        };
        
        var FamilyName = ["AKEBONO","MLBEVO","ADVICS","HYUNDAI"];
 
        
        var ProductStructure = {"Products":[
                {
                    "product":"AKEBONO",
                    "reference":"18 ECE",
                    "SandCorePartNumber":[
                        "SC-51-D3507-17110","SC-51-D3507-27110"
                    ]
                },
                {
                    "product":"AKEBONO",
                    "reference":"18 NAO",
                    "SandCorePartNumber":[
                        "SC-51-D3606-17110","SC-51-D3606-27110"
                    ]
                },
                {
                    "product":"AKEBONO",
                    "reference":"19 ECE",
                    "SandCorePartNumber":[
                        "SC-51-D3508-17110","SC-51-D3508-27110"
                    ]
                },
                {
                    "product":"AKEBONO",
                    "reference":"18 RS Q3",
                    "SandCorePartNumber":[
                        "SC-51-D3517-17110","SC-51-D3517-27110"
                    ]
                },
                {
                    "product":"MLBEVO",
                    "reference":"17 NAO",
                    "SandCorePartNumber":[
                        "SC-13.4446-9963.9","SC-13.4446-9964.9"
                    ]
                },
                {
                    "product":"MLBEVO",
                    "reference":"16 ECE",
                    "SandCorePartNumber":[
                        "SC-13.4426-9973.9","SC-13.4426-9974.9"
                    ]
                },
                {
                    "product":"HYUNDAI",
                    "reference":"M3 18",
                    "SandCorePartNumber":[
                        "SC-13.4446-9801.9","SC-13.4446-9802.9"
                    ]
                },
                {
                    "product":"HYUNDAI",
                    "reference":"M3 19",
                    "SandCorePartNumber":[
                        "SC-13.4446-9805.9","SC-13.4446-9806.9"
                    ]
                },
                {
                    "product":"ADVICS",
                    "reference":"MRA",
                    "SandCorePartNumber":[
                        "SC-141116-10410","SC-141115-10410"
                    ]
                },
                
        ]};

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var Products = [];
        var References = [];
        
        var product = "";
        var reference = "";
        
//        References =[];
//        reference = {reference:"18 NAO",description:"advics ref 1"};
//        References.push(reference);
//        reference = {reference:"18 ECE",description:"advics ref 2"};
//        References.push(reference);
//        product = {productName:"AKEBONO",References:References};
//        Products.push(product);
//        
//        References =[];
//        reference = {reference:"ake 3",description:"akebono ref 3"};
//        References.push(reference);
//        reference = {reference:"ake 4",description:"akebono ref 4"};
//        References.push(reference);
//        product = {productName:"MLBEVO",References:References};
//        Products.push(product);
        
        for (var i=0;i<FamilyName.length;i++){
            References =[];
            product = {productName:FamilyName[i],References:References};
            Products.push(product);
        }
        for (var i=0;i<Products.length;i++){
            for (var j=0;j<ProductStructure.Products.length;j++){
                if (Products[i].productName == ProductStructure.Products[j].product){
                    Products[i].References.push(ProductStructure.Products[j].reference);
                }
            }
        }
        
        // API integration -----------------------------------------------------
        
       
        
      
        // JSON result ---------------------------------------------------------        
        var resultData = {
                Products : Products,
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfEqGetAvailableProducts failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function getSandCoreBoxPn(productname,reference){
    if (productname == "ADVICS") return "SC-BOX-ADV";
    if (productname == "MLBEVO") return "SC-BOX-MLB";
    if (productname == "HYUNDAI") return "SC-BOX-HYU";
    if (productname == "AKEBONO") return "SC-BOX-AKE";
    return "*";
}

function getSandCorePn(productname,reference){
    // AKEBONO
    if ((productname == "AKEBONO") && (reference == "18 ECE"))      return "SC-CAV-51-D3507-?7110";
    if ((productname == "AKEBONO") && (reference == "18 NAO"))      return "SC-CAV-51-D3606-?7110";
    if ((productname == "AKEBONO") && (reference == "19 ECE"))      return "SC-CAV-51-D3508-?7110";
    if ((productname == "AKEBONO") && (reference == "18 RS Q3"))    return "SC-CAV-51-D3517-?7110";
    
    // MLBEVO
    if ((productname == "MLBEVO") && (reference == "17 NAO"))       return "SC-CAV-13.4426-996?.9";
    if ((productname == "MLBEVO") && (reference == "16 ECE"))       return "SC-CAV-13.4426-997?.9";
    
    // ADVICS
    if ((productname == "ADVICS") && (reference == "MRA"))          return "SC-CAV-14111?-10410";
     
    //HYUNDAI
    if ((productname == "HYUNDAI") && (reference == "M3 18"))       return "CR-CAV-13.4446-980?.9";
    if ((productname == "HYUNDAI") && (reference == "M3 19"))       return "CR-CAV-13.4446-980?.9";
    
    return "*";
}

function getEqExtFilter(productname,reference){
    if ((productname == "HYUNDAI") && (reference == "M3 18"))       return "*HUN18*";
    if ((productname == "HYUNDAI") && (reference == "M3 19"))       return "*HUN19*";
    return "*";
}

function cfEqGetAvailableEquipments(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var productName = data.productName.productName;
        var reference = data.reference;
        
       

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var SandCoreBoxes = [];
        var SandCores = [];
        
        var sandCoreBox = "";
        var sandCore = "";
        
       
        
        var usedSandCoreBoxes = [];
        var usedSandCoreCavities = [];
     

        // API integration -----------------------------------------------------
        
        //<equGetSetupEquipmentData> Get setup equipment---------------------------------------------
        var equipmentSetupFilters = new Array() ;
        var equipmentSetupResultKeys = new Array("EQUIPMENT_NUMBER_EXT","EQUIPMENT_NUMBER");
        
        var result_equGetSetupEquipmentData = imsApiService.equGetSetupEquipmentData(imsApiSessionContext,
        stationNumber,
        equipmentSetupFilters,
        equipmentSetupResultKeys);
        return_value = result_equGetSetupEquipmentData.return_value;
        
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[equGetSetupEquipmentData] " + getImsApiErrorText(return_value);
        } 
       
        // <equUpdateEquipmentData> Strip down everything---------------------------------------------
        
        var equipmentUploadKeys = new Array("EQUIPMENT_INDEX","EQUIPMENT_NUMBER","ERROR_CODE");
        var equipmentUploadValues = new Array();
        for(var x=0;x<result_equGetSetupEquipmentData.equipmentSetupResultValues.length/2;x++){
            
            var EQ = result_equGetSetupEquipmentData.equipmentSetupResultValues[2*x];
            if (EQ.substring(0,7) == "SC-BOX-") {
                usedSandCoreBoxes.push(EQ);
            }
            if (EQ.substring(0,5) == "SCAV-") {
                usedSandCoreCavities.push(EQ);
            }

            if (EQ.substring(0,5) == "CCAV-") {
                usedSandCoreCavities.push(EQ);
            }
        }
        
        
        // <attribAppendAttributeValues> ---------------------------------------
        var info = productName + "|" + reference;
        var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var attributeUploadValues = new Array("SETUP_INFO", info, "0");
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


        // API integration -----------------------------------------------------
        
        var equipmentGetFilters = new Array( new KeyValue("PART_NUMBER", getSandCoreBoxPn(productName,reference)), new KeyValue("EQUIPMENT_STATE", "0"));
        var equipmentGetResultKeys = new Array("EQUIPMENT_NUMBER","EQUIPMENT_NUMBER_EXT","EQUIPMENT_INDEX","EQUIPMENT_STATE","EXPIRATION_DATE","EXPIRATION_DATE_FINAL","VALID_FROM","VALID_TO");
        var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
            stationNumber, 
            equipmentGetFilters,
            equipmentGetResultKeys
            );
       
        return_value = result_equGetEquipment.return_value;      
  
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[equGetEquipment1] " + getImsApiErrorText(return_value);
        } 
        
        for (var x=0;x<result_equGetEquipment.equipmentGetResultValues.length/8;x++){
            var equipmentNumber = ""+result_equGetEquipment.equipmentGetResultValues[x*8+1];
            //sandCoreBox = {sandCoreBoxId:equipmentNumber,state:false,numberOfPosition:6,usage:1000,colorState:"0;224;224;255",setupTime:0};
            sandCoreBox = {sandCoreBoxId:equipmentNumber,state:false,numberOfPosition:6,usage:1000,setupTime:0};
            SandCoreBoxes.push(sandCoreBox);
        }
        
        var txt = getSandCorePn(productName,reference);
        
        txt += " | " + productName;
        txt += " | " + reference;

        eq_ext_filer = "*";
        eq_ext_filer = getEqExtFilter(productName,reference);
        
        var equipmentGetFilters = new Array( new KeyValue("PART_NUMBER", getSandCorePn(productName,reference)), new KeyValue("EQUIPMENT_STATE", "0"), 
                                        new KeyValue("EQUIPMENT_NUMBER_EXT", eq_ext_filer));
        var equipmentGetResultKeys = new Array("EQUIPMENT_NUMBER","EQUIPMENT_NUMBER_EXT","EQUIPMENT_INDEX","EQUIPMENT_STATE","EXPIRATION_DATE","EXPIRATION_DATE_FINAL","VALID_FROM","VALID_TO");
        var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
            stationNumber, 
            equipmentGetFilters,
            equipmentGetResultKeys
            );
       
        return_value = result_equGetEquipment.return_value;      
  
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[equGetEquipment2] " + getImsApiErrorText(return_value);
            
        } 
        
        for (var x=0;x<result_equGetEquipment.equipmentGetResultValues.length/8;x++){
            var equipmentNumber = ""+result_equGetEquipment.equipmentGetResultValues[x*8+1];
            sandCore = {sandCoreId:equipmentNumber,state:false,usage:1000,setupTime:0};;
            SandCores.push(sandCore);
        }
        
        for (var x=0;x<usedSandCoreBoxes.length;x++){
            for (var y=0;y<SandCoreBoxes.length;y++){
                if (usedSandCoreBoxes[x] == SandCoreBoxes[y].sandCoreBoxId) {
                    SandCoreBoxes[y].state = true;
                }
            }
        }
        
        for (var x=0;x<usedSandCoreCavities.length;x++){
            for (var y=0;y<SandCores.length;y++){
                if (usedSandCoreCavities[x] == SandCores[y].sandCoreId) {
                    SandCores[y].state = true;
                }
            }
        }
        
        // JSON result ---------------------------------------------------------   
       
        var resultData = {
                functionName : "cfEqGetAvailableEquipments",
                SandCoreBoxes : SandCoreBoxes,
                SandCores : SandCores,
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfEqGetAvailableEquipments failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function getNoOfUsedCavities(stationNumber){

    var noOfUsedCavities = 0;
    var errorCode = 0;
    var errorMessage = "";
    var return_value = 0;

    //<equGetSetupEquipmentData> Get setup equipment---------------------------------------------
    var equipmentSetupFilters = new Array() ;
    var equipmentSetupResultKeys = new Array("EQUIPMENT_NUMBER_EXT","EQUIPMENT_NUMBER");

    var result_equGetSetupEquipmentData = imsApiService.equGetSetupEquipmentData(imsApiSessionContext,
        stationNumber,
        equipmentSetupFilters,
        equipmentSetupResultKeys);
    
    return_value = result_equGetSetupEquipmentData.return_value;


    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "[equGetSetupEquipmentData] " + getImsApiErrorText(return_value);
    } 
    
    for(var x=0;x<result_equGetSetupEquipmentData.equipmentSetupResultValues.length/2;x++){
        
        var EQ = result_equGetSetupEquipmentData.equipmentSetupResultValues[2*x];
        if (EQ.substring(0,7) == "SC-BOX-") {
        }
        if (EQ.substring(0,5) == "SCAV-") {
            noOfUsedCavities++;
        }
        if (EQ.substring(0,5) == "CCAV-") {
            noOfUsedCavities++;
        }
    }
    return {
        noOfUsedCavities : noOfUsedCavities,
        errorCode : errorCode,
        errorMessage : errorMessage
    }
}

function cfEqGetSetupInformation(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
      
       

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var SandCoreBoxes = [];
        var SandCores = [];
        
        var sandCoreBox = "";
        var sandCore = "";
        
        var usedSandCoreBoxes = [];
        var usedSandCoreCavities = [];
        var noOfUsedCavities = 0;
     

        // API integration -----------------------------------------------------
        
        //<equGetSetupEquipmentData> Get setup equipment---------------------------------------------
        var equipmentSetupFilters = new Array() ;
        var equipmentSetupResultKeys = new Array("EQUIPMENT_NUMBER_EXT","EQUIPMENT_NUMBER");
        
        var result_equGetSetupEquipmentData = imsApiService.equGetSetupEquipmentData(imsApiSessionContext,
        stationNumber,
        equipmentSetupFilters,
        equipmentSetupResultKeys);
        return_value = result_equGetSetupEquipmentData.return_value;
        
        
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[equGetSetupEquipmentData] " + getImsApiErrorText(return_value);
        } 
       
        // <equUpdateEquipmentData> Strip down everything---------------------------------------------
        
        var equipmentUploadKeys = new Array("EQUIPMENT_INDEX","EQUIPMENT_NUMBER","ERROR_CODE");
        var equipmentUploadValues = new Array();
        for(var x=0;x<result_equGetSetupEquipmentData.equipmentSetupResultValues.length/2;x++){
            
            var EQ = result_equGetSetupEquipmentData.equipmentSetupResultValues[2*x];
            if (EQ.substring(0,7) == "SC-BOX-") {
                usedSandCoreBoxes.push(EQ);
            }
            if (EQ.substring(0,5) == "SCAV-") {
                usedSandCoreCavities.push(EQ);
                noOfUsedCavities++;
            }
            if (EQ.substring(0,5) == "CCAV-") {
                usedSandCoreCavities.push(EQ);
                noOfUsedCavities++;
            }
        }
        
        
        
        
        
        // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("SETUP_INFO");
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
        
        var info = ""+result_attribGetAttributeValues.attributeResultValues[1];
        var productName = info.split("|")[0];
        var reference = info.split("|")[1];
        
        // ---------------------------------------------------------------------
        
        var equipmentGetFilters = new Array( new KeyValue("PART_NUMBER", getSandCoreBoxPn(productName,reference)), new KeyValue("EQUIPMENT_STATE", "0"));
        var equipmentGetResultKeys = new Array("EQUIPMENT_NUMBER","EQUIPMENT_NUMBER_EXT","EQUIPMENT_INDEX","EQUIPMENT_STATE","EXPIRATION_DATE","EXPIRATION_DATE_FINAL","VALID_FROM","VALID_TO");
        var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
            stationNumber, 
            equipmentGetFilters,
            equipmentGetResultKeys
            );
       
        return_value = result_equGetEquipment.return_value;      
  
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[equGetEquipment1] " + getImsApiErrorText(return_value);
        } 
        
        for (var x=0;x<result_equGetEquipment.equipmentGetResultValues.length/8;x++){
            var equipmentNumber = ""+result_equGetEquipment.equipmentGetResultValues[x*8+1];
            //sandCoreBox = {sandCoreBoxId:equipmentNumber,state:false,numberOfPosition:6,usage:1000,colorState:"0;224;224;255",setupTime:0};
            sandCoreBox = {sandCoreBoxId:equipmentNumber,state:false,numberOfPosition:6,usage:1000,setupTime:0};
            SandCoreBoxes.push(sandCoreBox);
        }
        
        var txt = getSandCorePn(productName,reference);
        
        txt += " | " + productName;
        txt += " | " + reference;
        
        var equipmentGetFilters = new Array( new KeyValue("PART_NUMBER", getSandCorePn(productName,reference)), new KeyValue("EQUIPMENT_STATE", "0"));
        var equipmentGetResultKeys = new Array("EQUIPMENT_NUMBER","EQUIPMENT_NUMBER_EXT","EQUIPMENT_INDEX","EQUIPMENT_STATE","EXPIRATION_DATE","EXPIRATION_DATE_FINAL","VALID_FROM","VALID_TO");
        var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
            stationNumber, 
            equipmentGetFilters,
            equipmentGetResultKeys
            );
       
        return_value = result_equGetEquipment.return_value;      
  
        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[equGetEquipment2] " + getImsApiErrorText(return_value);
            
        } 
        
        for (var x=0;x<result_equGetEquipment.equipmentGetResultValues.length/8;x++){
            var equipmentNumber = ""+result_equGetEquipment.equipmentGetResultValues[x*8+1];
            sandCore = {sandCoreId:equipmentNumber,state:false,usage:1000,setupTime:0};;
            SandCores.push(sandCore);
        }
        
        for (var x=0;x<usedSandCoreBoxes.length;x++){
            for (var y=0;y<SandCoreBoxes.length;y++){
                if (usedSandCoreBoxes[x] == SandCoreBoxes[y].sandCoreBoxId) {
                    SandCoreBoxes[y].state = true;

                }
            }
        }
        
        for (var x=0;x<usedSandCoreCavities.length;x++){
            for (var y=0;y<SandCores.length;y++){
                if (usedSandCoreCavities[x] == SandCores[y].sandCoreId) {
                    SandCores[y].state = true;
                }
            }
        }
        
        // JSON result ---------------------------------------------------------        
        var resultData = {
                functionName : "cfEqGetSetupInformation",
                productName : productName,
                reference : reference,
                SandCoreBoxes : SandCoreBoxes,
                SandCores : SandCores,
                noOfUsedCavities : noOfUsedCavities,
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfEqGetSetupInformation failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function setupSandCoreBox(stationNumber,equipmentId){
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";
    
    var equipmentGetFilters = new Array( new KeyValue("EQUIPMENT_NUMBER", equipmentId), new KeyValue("EQUIPMENT_STATE", "0"));
    var equipmentGetResultKeys = new Array("PART_NUMBER");
    var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
        stationNumber, 
        equipmentGetFilters,
        equipmentGetResultKeys
        );

    return_value = result_equGetEquipment.return_value;      

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "[equGetEquipment1] " + getImsApiErrorText(return_value);
        
        return {
            errorCode : errorCode,
            errorMessage : errorMessage
        }
    } 
   
    var equipmentNumber = ""+result_equGetEquipment.equipmentGetResultValues[0];
    // -------------------------------------------------------------------------
    
    // <attribGetAttributeValues> ------------------------------------------
    var attributeCodeArray = new Array("SC_BOX_NB_CAV");
    var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
    var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
            stationNumber, 
            10,
            equipmentNumber,
            "-1",
            attributeCodeArray,
            1,
            attributeResultKeys
        );

    return_value = result_attribGetAttributeValues.return_value;

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
        
        return {
            errorCode : errorCode,
            errorMessage : errorMessage
        }
    } 

    var nb_cav = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);

    // <attribAppendAttributeValues> ---------------------------------------------
    var attributeUploadKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
    var attributeUploadValues = new Array("SC_BOX_NB_CAV", nb_cav, 0);
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
        
        return {
            errorCode : errorCode,
            errorMessage : errorMessage
        }
    } 
    
    // -------------------------------------------------------------------------
    var equipmentGetFilters = new Array( new KeyValue("PART_NUMBER", equipmentNumber), new KeyValue("EQUIPMENT_STATE", "0"));
    var equipmentGetResultKeys = new Array("EQUIPMENT_NUMBER","EQUIPMENT_NUMBER_EXT","EQUIPMENT_INDEX","EQUIPMENT_STATE","EXPIRATION_DATE","EXPIRATION_DATE_FINAL","VALID_FROM","VALID_TO");
    var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
        stationNumber, 
        equipmentGetFilters,
        equipmentGetResultKeys
        );

    return_value = result_equGetEquipment.return_value;      

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "[equGetEquipment2] " + getImsApiErrorText(return_value);
        return {
            errorCode : errorCode,
            errorMessage : errorMessage
        }
    } 

    var sandCoreBox = [];
    for (var x=0;x<result_equGetEquipment.equipmentGetResultValues.length/8;x++){
        sandCoreBox.push(result_equGetEquipment.equipmentGetResultValues[x*8+0]);

    }

    for (var x=0;x<sandCoreBox.length;x++){

        var setupFlag = 1;
        if (sandCoreBox[x] == equipmentId){
            setupFlag = 0;
        }
        var equipmentUploadKeys = new Array("EQUIPMENT_NUMBER","ERROR_CODE");
        var equipmentUploadValues = new Array(sandCoreBox[x] ,0);

        var result_equUpdateEquipmentData = imsApiService.equUpdateEquipmentData(imsApiSessionContext,
                stationNumber,
                setupFlag,
                "-1",
                "-1",
                2,
                equipmentUploadKeys,
                equipmentUploadValues
                );

        var return_value = result_equUpdateEquipmentData.return_value;
        errorCode = return_value;

    }
    
    // -------------------------------------------------------------------------
    
    return {
        errorCode : errorCode,
        errorMessage : ""
    }
}

function setupSandCoreCavity(stationNumber,equipmentId, state){
    var return_value = 0;
    var errorCode = 0;
    var errorMessage = "";
    
    
    
    var equipmentGetFilters = new Array( new KeyValue("EQUIPMENT_NUMBER_EXT", equipmentId), new KeyValue("EQUIPMENT_STATE", "0"));
    var equipmentGetResultKeys = new Array("EQUIPMENT_NUMBER","EQUIPMENT_NUMBER_EXT","EQUIPMENT_INDEX","EQUIPMENT_STATE","EXPIRATION_DATE","EXPIRATION_DATE_FINAL","VALID_FROM","VALID_TO");
    var result_equGetEquipment = imsApiService.equGetEquipment(imsApiSessionContext, 
        stationNumber, 
        equipmentGetFilters,
        equipmentGetResultKeys
        );

    return_value = result_equGetEquipment.return_value;      

    if (return_value != 0) {
        errorCode = return_value;
        errorMessage = "[equGetEquipment1] " + getImsApiErrorText(return_value);
        return {
            errorCode : errorCode,
            errorMessage : errorMessage
        }
    } 
 
    var equipmentNumber = ""+result_equGetEquipment.equipmentGetResultValues[0];
    
    var setupFlag = 1;
    
    if ((state == true) || (state == "true")) {
        setupFlag = 0;
    }
    var equipmentUploadKeys = new Array("EQUIPMENT_NUMBER","ERROR_CODE");
    var equipmentUploadValues = new Array(equipmentNumber ,0);

    var result_equUpdateEquipmentData = imsApiService.equUpdateEquipmentData(imsApiSessionContext,
            stationNumber,
            setupFlag,
            "-1",
            "-1",
            2,
            equipmentUploadKeys,
            equipmentUploadValues
            );

    var return_value = result_equUpdateEquipmentData.return_value;
    errorCode = return_value;

    // -------------------------------------------------------------------------
    var log = setupFlag;
    return {
        log : log,
        errorCode : errorCode,
        errorMessage : ""
    }
}

function initCavies(stationNumber,equipmentId){
    var result_equRemoveEquipment = imsApiService.equRemoveEquipment(imsApiSessionContext,
            stationNumber,
            "-1",
            "-1",
            2);
  
    var return_value = result_equRemoveEquipment.return_value;
}

function cfEqSetupEquipment(jsonData) {
    var result = new Result_customFunctionCommon();
    try {
        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var equipmentId = data.equipmentId;
        var state = data.state;

        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";
        var log = "";
        var available = false;
        // API integration -----------------------------------------------------

        var getUC = getNoOfUsedCavities(stationNumber);
        var noOfUsedCavities = getUC.noOfUsedCavities;

         // <attribGetAttributeValues> ------------------------------------------
        var attributeCodeArray = new Array("SC_BOX_NB_CAV");
        var attributeResultKeys = new Array("ATTRIBUTE_CODE", "ATTRIBUTE_VALUE","ERROR_CODE");
        var result_attribGetAttributeValues = imsApiService.attribGetAttributeValues(imsApiSessionContext, 
                stationNumber, 
                7,
                stationNumber,
                "-1",
                attributeCodeArray,
                1,
                attributeResultKeys
            );

        return_value = result_attribGetAttributeValues.return_value;

        if (return_value != 0) {
            errorCode = return_value;
            errorMessage = "[attribGetAttributeValues] " + getImsApiErrorText(return_value);
            
            return {
                errorCode : errorCode,
                errorMessage : errorMessage
            }
        } 

        var nb_cav = parseInt(result_attribGetAttributeValues.attributeResultValues[1]);

        if (((noOfUsedCavities<nb_cav) && (state==true)) || (state==false)) {
            available = true;
        }

        if (equipmentId.substring(0,7) == "SC-BOX-") {
            log = "isSCBOX";
            var initCavity = initCavies(stationNumber,equipmentId);
            var setup = setupSandCoreBox(stationNumber,equipmentId);
            
        }
        
        if ( ((equipmentId.substring(0,5) == "SCAV-") || (equipmentId.substring(0,5) == "CCAV-")) ){
            log = "isCavity ";
            var setup = setupSandCoreCavity(stationNumber,equipmentId,state && available);
            
        }
        if (state) {
            if (available) noOfUsedCavities++;
        }
        else{
            if (available) noOfUsedCavities--;
        }
        log += " CAV> " + noOfUsedCavities + " / " + nb_cav + " ";
        
        // JSON result ---------------------------------------------------------        
        var resultData = {
                log : log,
                available : available,
                errorCode : errorCode,
                errorMessage : "[OK] " + errorMessage
            };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;
    }
    catch (e) {
        // error handling
        logHandler.logMessage("Custom function cfEqSetupEquipment failed: " + e);
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}

function PartNumberInformation(part,desc,att1,att2) {
    this.PART=part;
    this.DESC=desc;
    this.ATT1=att1;
    this.ATT2=att2;
}

// Extra functions -------------------------------------------------------------
// -----------------------------------------------------------------------------

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