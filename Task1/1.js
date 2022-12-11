//URL
let url = 'https://testpasswords.com'

//Body

let bodyJson = '{
    "userName":{{userName}},
    "newPassword": {{$randomPassword}}
}'

//Pre-request

let preRequest = `
    pm.environment.set("randomPhone", pm.variables.replaceIn('{{$randomPhoneNumber}}'));

    jsonData = pm.sendRequest('https://tstuser.com&phone=' + pm.collectionVariables.get("{{randomPhone}}"), function (err, response) {
        pm.environment.set("userName", response.json().userName);
    });

`

//Test
 let test = `
 let jsonData = pm.response.json();

pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
  pm.response.to.have.header("Content-Length");
  pm.response.to.have.header("Host");
  pm.response.to.have.header("User-Agent");
  pm.response.to.have.header("Accept");
  pm.response.to.have.header("Accept-Encoding");
  pm.response.to.have.header("Connection");
  pm.response.to.have.header("Accept");
  pm.response.to.have.header("Authorization");
});

pm.test('Has propeties', function() {
  pm.expect(jsonData).to.have.property('userName');
  pm.expect(jsonData).to.have.property('userLastName');
  pm.expect(jsonData).to.have.property('userPhone');
});

pm.test("response should be okay to process", function () {
    pm.response.to.not.be.error;
    pm.response.to.have.jsonBody("");
    pm.response.to.not.have.jsonBody("error");
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});

const schema = {
    "type": "object",
    "properties": {
    "userName": { 
        "type": "string"
        },
    "userLastName": { 
        "type": "string"
        },
    "userPhone": { 
        "type": "string",
        "minLength": 12,
        "maxLength": 12
        },
},
"required": [
    "userName",
    "userLastName",
    "userPhone"
    ]
};
 
pm.test("Validate schema", () => {
    pm.response.to.have.jsonSchema(schema);
});
 `