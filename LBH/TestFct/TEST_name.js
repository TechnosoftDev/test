importPackage(com.itac.mes.api.custom);
importPackage(java.lang);
importPackage(java.util);
importPackage(java.text);
importPackage(com.itac.mes.imsapi.domain.container);
importPackage(com.itac.mes.core.domain.mig.exception);
importPackage(com.itac.util.constants.imsapi);



function readDocument(jsonData) {
    var result = new Result_customFunctionCommon();
    try {

        // JSON parser ---------------------------------------------------------
        var data = JSON.parse(jsonData);
        var trolleyId = data.topic;



        // Intermediate variables ----------------------------------------------
        var return_value = 0;
        var errorCode = 0;
        var errorMessage = "";


        // API integration -----------------------------------------------------




        // JSON result ---------------------------------------------------------        
        var resultData = {
            errorCode: return_value,
            errorMessage: errorMessage
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
