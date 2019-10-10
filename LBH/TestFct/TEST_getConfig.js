importPackage(com.itac.mes.api.custom);
importPackage(java.lang);
importPackage(java.util);
importPackage(java.text);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.util.constants.imsapi);

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
    get casting equipments data
    in  : configContent
    out : 
        { 
            castingEquipments(json block)   //? casting equipments data block
        }
    ============================================================================
*/
function fct_getCastingEqData(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var castingEquipments = configuration;

    var configuration = configContent.castingEquipments;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".castingEquipments is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            castingEquipments: castingEquipments
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        castingEquipments: castingEquipments
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get operators for melting
    in  : configContent
    out : 
        { 
            operators[]                     //? list of melting operators
        }
    ============================================================================
*/
function fct_getMeltingOperators(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var operators = [];

    var configuration = configContent.melting.degassing.operators;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.operators is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            operators: operators
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        operators.push("" + configuration[i].firstName + " " + configuration[i].name + " " + configuration[i].id);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        operators: operators
    }
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

/*  ============================================================================
    get availble alloys
    in  : configContent
    out : 
        { 
            alloys[]                        //? available alloys code from the configuration
        }
    ============================================================================
*/
function fct_getAlloys(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var alloys = [];

    var configuration = configContent.melting.degassing.alloys;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.alloys is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            alloys: alloys
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        alloys.push(configuration[i].alloy);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        alloys: alloys
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get availble suppliers
    in  : configContent
    out : 
        { 
            suppliers[]                     //? available suppliers from the configuration
        }
    ============================================================================
*/
function fct_getSuppliers(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var suppliers = [];

    var configuration = configContent.melting.degassing.suppliers;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.suppliers is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            suppliers: suppliers
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        suppliers.push(configuration[i].supplier);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        suppliers: suppliers
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get availble weights
    in  : configContent
    out : 
        { 
            suppliers[]                     //? available weights from the configuration
        }
    ============================================================================
*/
function fct_getWeights(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var weights = [];

    var configuration = configContent.melting.degassing.weights;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.weights is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            weights: weights
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        weights.push(configuration[i].weight);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        weights: weights
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get availble pots
    in  : configContent
    out : 
        { 
            pots[]                      //? available pots from the configuration
        }
    ============================================================================
*/
function fct_getPots(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var pots = [];

    var configuration = configContent.melting.degassing.pots;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".melting.degassing.pots is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            pots: pots
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        pots.push(configuration[i].pot);
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        pots: pots
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get topicTempate from the stationNumber
    in  : configContent, stationNumber
    out : 
        { 
            topicTemplate[]             //? return topicTemplate of the satation from the configuration
        }
    ============================================================================
*/
function fct_getTopicTemplate(configContent, stationNumber) {
    var errorCode = 0;
    var errorMessage = "";
    var topicTemplate = "";

    var configuration = configContent.plcSettings.topicTemplates;
    if (configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".plcSettings.topicTemplates is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            topicTemplate: topicTemplate
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].stationNumber == stationNumber) {
            topicTemplate = configuration[i].topicTemplate;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        topicTemplate: topicTemplate
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get alarms from the configuration
    in  : configContent
    out : 
        { 
            messageTypes[]              //? return alarms from the configuration
        }
    ============================================================================
*/
function fct_getAlarms(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var messageType = configuration;

    var configuration = configContent.plcSettings.parameterAlarmCodes;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".plcSettings.parameterAlarmCodes is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            messageType: messageType
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        messageType: messageType
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get customer failure message from the failure code
    in  : configContent, code
    out : 
        { 
            failureMessage                  //? return failure message of the code from the configuration
        }
    ============================================================================
*/
function fct_getCustomerFailureCodes(configContent, code) {
    var errorCode = 0;
    var errorMessage = "";
    var failureMessage = "";

    var configuration = configContent.customerFailureCodes;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".customerFailureCodes is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            failureMessage: failureMessage
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].failureCode == code) {
            failureMessage = configuration[i].failureMessage;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        failureMessage: failureMessage
    }
}
/*  ============================================================================
*/

/*  ============================================================================
    get max basket quantities for final packing
    in  : configContent
    out : 
        { 
            basketQuantities[]              //? return final packing max basket quantities from the configuration
        }
    ============================================================================
*/
function fct_getFpMaxBasketQuantities(configContent) {
    var errorCode = 0;
    var errorMessage = "";
    var maxBasketQuantities = [];

    var configuration = configContent.finalPacking.maxBasketQuantities;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".finalPacking.maxBasketQuantities is not defined in configuration!";
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
    get SAP code for partNumber
    in  : configContent
    out : 
        { 
            sapCode                     //? return sapCode from the configuration
        }
    ============================================================================
*/
function fct_getFpSapCode(configContent, partNumber) {
    var errorCode = 0;
    var errorMessage = "";
    var sapCode = "-1";

    var configuration = configContent.finalPacking.sapCodes;

    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".finalPacking.sapCodes is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            sapCode: sapCode
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].partNumber == partNumber) {
            sapCode = configuration[i].sapCode;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        sapCode: sapCode
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
    get caoussel configuration
    in  : configContent, pos
    out : 
        { 
            cavityPartNumber[]                  //? return cavity part numbers
            cavitySide[]                        //? return cavity sides

        }
    ============================================================================
*/
function fct_getCarousselConfig(configContent, refCode, pos) {
    var errorCode = 0;
    var errorMessage = "";
    var cavityPartNumber = [];
    var cavitySide = [];

    var configuration = configContent.plcSettings.carousselConfig;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".plcSettings.carousselConfig is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            cavityPartNumber: cavityPartNumber,
            cavitySide: cavitySide
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if ((configuration[i].refCode == refCode) && (configuration[i].pos == pos)) {
            cavityPartNumber = configuration[i].cavityPartNumber;
            cavitySide = configuration[i].cavitySide;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        cavityPartNumber: cavityPartNumber,
        cavitySide: cavitySide
    }
}
/*  ============================================================================
*/


/*  ============================================================================
    get dummyTrolley information
    in  : configContent, refCode
    out : 
        { 
            trolleyPartNumber                   //? return trolley part numbers
            dummyTrolleyId                      //? return dummyTrolley Id
        }
    ============================================================================
*/
function fct_getDummyTrolleyInformation(configContent, refCode) {
    var errorCode = 0;
    var errorMessage = "";
    var trolleyPartNumber = "-1";
    var dummyTrolleyId = "-1";

    var configuration = configContent.plcSettings.dummyTrolleyInfo;
    if (typeof configuration == "undefined") {
        errorCode = -1;
        errorMessage = ".plcSettings.dummyTrolleyInfo is not defined in configuration!";
        return {
            errorCode: errorCode,
            errorMessage: errorMessage,
            trolleyPartNumber: trolleyPartNumber,
            dummyTrolleyId: dummyTrolleyId
        }
    }

    for (var i = 0; i < configuration.length; i++) {
        if (configuration[i].refCode == refCode) {
            trolleyPartNumber = configuration[i].trolleyPartNumber;
            dummyTrolleyId = configuration[i].dummyTrolleyId;
        }
    }

    return {
        errorCode: errorCode,
        errorMessage: errorMessage,
        trolleyPartNumber: trolleyPartNumber,
        dummyTrolleyId: dummyTrolleyId
    }
}
/*  ============================================================================
*/


function fct_testResult(jsonData) {
    var result = new Result_customFunctionCommon();
    try {

        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var stationNumber = data.stationNumber;
        var refCode = data.refCode;
        var pos = data.pos;


        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";

        // API integration -----------------------------------------------------
        var startTime = Date.now();
        var configContent = fct_readDocument(stationNumber);                        //? Read the config file

        //var res = fct_getLinkedProduct(configContent, productFamily);             //? get producy informations --> {linked part numbers, maxTrolleyQuantity}

        //var res = fct_getProductFamily(configContent);                            //? get available family products --> {familyProduct[]}

        //var res = fct_getReference(configContent, code, side);                    //? get reference informations --> {partNumber, productFamily}

        //var res = fct_getProductInformation(configContent, productFamily, side);  //? get product informations --> {partNumber, code}

        //var res = fct_getAvailablePartNumbers(configContent, partNumber);         //? get all available partNumbers par of the same product family --> {partNumbers[]}

        //var res = fct_getLine(configContent, code);                               //? get lineid --> {line}

        //var res = fct_getCastingEqData(configContent);                            //? get casting equipments data blocks --> {castingEquipments(json)}

        //var res = fct_getMeltingOperators(configContent);                         //? get melting operators --> {operators[]}

        //var res = fct_getMeltStationFromId(configContent, id);                    //? get melting station from melting id --> {meltingStation}

        //var res = fct_getAlloys(configContent);                                   //? get available alloys --> {alloys[]}

        //var res = fct_getSuppliers(configContent);                                //? get available suppliers --> {suppliers[]}      

        //var res = fct_getWeights(configContent);                                  //? get available weights --> {weights[]}      

        //var res = fct_getPots(configContent);                                     //? get available pots --> {pots[]}     

        //var res = fct_getTopicTemplate(configContent, stationNumber);             //? get topicTemplate for the station --> {topicTemplate}

        //var res = fct_getAlarms(configContent);                                   //? get alarms --> {messageType(json)}

        //var res = fct_getCustomerFailureCodes(configContent, code);               //? get customer failure messages --> {failureMessage}

        //var res = fct_getFpMaxBasketQuantities(configContent);                    //? get available max basket quantities for final packing --> {maxBasketQuantities[]}

        //var res = fct_getFpSapCode(configContent, partNumber);                    //? get sapCode for the partNumber --> {sapCode}

        //var res = fct_getHookTrolleyConfig(configContent, productFamily);         //? get hook trolley configuration --> {config}

        //var res = fct_getWpMaxBasketQuantities(configContent);                    //? get available max basket quantities for wip packing --> {maxBasketQuantities[]}

        //var res = fct_getBasketNumbers(configContent);                            //? get available basket numbers --> {basketNumbers[]} 

        //var res = fct_getCarousselConfig(configContent, refCode, pos);            //? get caroussel config --> {cavityPartNumber[], cavitySide[]}

        var res = fct_getDummyTrolleyInformation(configContent, refCode);           //? get dummyTrolley information -->{trolleyPartNumber, dummyTrolleyId}

        var endTime = Date.now();
        var executionTime = endTime - startTime;

        // JSON result ---------------------------------------------------------        
        var resultData = {
            executionTime: executionTime,
            errorCode: res.errorCode,
            errorMessage: res.errorMessage,
            trolleyPartNumber: res.trolleyPartNumber,
            dummyTrolleyId: res.dummyTrolleyId
        };
        result.outArgs = [JSON.stringify(resultData)];
        result.return_value = return_value;


    }
    catch (e) {
        result.outArgs = logHandler.getMessages();
        result.return_value = ItacMesErrorCodeApi.SERVER_ERROR.getReturnValue();
        result.errorString = ItacMesErrorCodeApi.SERVER_ERROR.getErrorString();
    }
    return result;
}
