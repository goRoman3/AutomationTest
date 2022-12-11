const schema = {
    "type": "object",
    "required": [ "data"],
      "data": {
        "type": "object",
        "properties": {
          "sessionId": {
              "description": "The unique identifier for object. (A UUID specified by RFC4122).",
              "pattern":"^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$",
              "type": "string",
              "format": "uuid",
              "minLength": 36,
              "maxLength": 36
  
          },
          "key": {
              "description": "The unique identifier for object. (A UUID specified by RFC4122).",
              "pattern":"^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$",
              "type": "string",
              "format": "uuid",
              "minLength": 36,
              "maxLength": 36
          }
        },
        "required": [
          "sessionId",
          "key"
        ]
      }
  };
  
   pm.test("Validate schema", () => {
      pm.response.to.have.jsonSchema(schema);
  });
  