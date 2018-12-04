
/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

'use strict';

const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const secret = 'notsecret';

const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config();

let setupError = '';


// Connect a client to Watson Assistant
// The SDK gets credentials from the environment.
var assistant = new AssistantV1({
  version: '2018-10-15',
  username: 'b16e4837-3ac4-4caa-8bbb-4f2d3c77a3e5',
  password: 'DetkZPVoN1Gl',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});
console.log('Connected to Watson Assistant');
var workspaceID='25d41c74-3b39-45f3-b3ae-510ff9e0938d';


const START_OVER = 'start over';
const CANCEL = 'goodbye';
let expectUserResponse;


// GET: Just show something on the default app URL page
app.get('/', (req, res) => res.send('Watson for Google Assistant app is running.'));

// POST: Requests from Google Assistant
// POST: Requests from Google Assistant

//app.post('/', (args, res) =>res.send('from Watson Hello Janmejaya'));
app.post('/', function(args, res) {

  return new Promise(function(resolve, reject) {
    const request = args.body;
    console.log('Google Assistant is calling');
    console.log(JSON.stringify(request, null, 2));
	
	if (request.conversation.type === 'NEW') {
      // Input might be "Talk to <name>". Ignore that and trigger a fresh start.
      input = START_OVER;
    } 
	 // Forward input text to Watson Assistant
    assistant.message(
      {
        input: { text: input },
        workspace_id: workspaceId,
       // context: context
      },
      function(err, watsonResponse) {
        if (err) {
          console.error(err);
          reject('Error talking to Watson Assistant.');
        } else {
          console.log(watsonResponse);
          //context = watsonResponse.context; // Update global context
		  // Combine the output messages into one message.
                 var output = response.output.text.join(' ');
          resolve(output);
        }
      });
      
  });
  
});




// Start the HTTP server
app.listen(port);
console.log('HTTP server started on port ' + port);
