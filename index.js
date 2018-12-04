
/*************************************************************************************************************************/

/** 
 * Main entry point. 
 * Incoming events from Google Home service through Smart Home Agent are all handled by this function. 
 * 
 *************************************************************************************************************************/

exports.handler = (request, context, callback) => 
{ 
        //Log request 
        console.log("Received Event:" + JSON.stringify(request)); 
        /* 
        try 
        { 
                const szToken = (request.headers.Authorization).replace("Bearer ",""); 
                const accountId = request.requestContext.accountId; 
                let requestBody =JSON.parse(request.body); 
        
                for (let i = 0; i < requestBody.inputs.length; i++) 
                { 
                        let input = requestBody.inputs[i]; 
                        let intent = input.intent; 
                        
                        switch (intent) { 
                                        case "action.devices.SYNC": 
                                                console.log('post /smarthome SYNC'); 
                                                getDevicesFromECP(callback,requestBody,szToken,accountId); 
                                                break; 
                                                
                                        case "action.devices.QUERY": 
                                                console.log('post /smarthome QUERY'); 
                                                handleQueryCommand(callback,input,requestBody,szToken); 
                                                break; 
                                                
                                        case "action.devices.EXECUTE": 
                                                console.log('post /smarthome EXECUTE'); 
                                                handleExecutionCommand(callback,input,requestBody,szToken); 
                                                break; 
                                                
                                        default: 
                                                handleDefaultCommand(callback,requestBody); 
                                                break; 
                        } 
                } 
        } 
        catch (error) 
        { 
                console.log('Error Parsing Directive'); 
        } 
        */ 
        console.log('Directive Not Handled!'); 
};
