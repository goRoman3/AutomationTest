let jsonBody = {
    "data":{
        "total":10,
        "items":[
            {
                "id":"GUID_1",
                "userId":"userIdGUID",
                "type":"TRASACTION",
                "title":"Title_1",
                "description":"Description_1",
                "data":{
                    "transactionId":"32466116-b2ce-4f0a-a490-353cbeab6485",
                    "cardId":"cardIdGUID",
                    "status":"FINISHED",
                    "category":"P2P"
                },
                "date":"2022-06-22T10:10:03.000Z"
            },
                {
                "id":"GUID_10",
                "userId":"userIdGUID",
                "type":"TRASACTION",
                "title":"Title_1_10",
                "description":"Description_10",
                "data":{
                    "transactionId":"5cd4b1ef-f601-4587-8c9b-c8f4a1055113",
                    "cardId":"cardIdGUID",
                    "status":"FINISHED",
                    "category":"P2P"
                },
                "date":"2022-06-20T10:10:03.000Z"
            }
        ]
    }
};


var jsonData = JSON.parse(responseBody);
//let array = jsonBody.data.items
const filteredByTransaction = jsonBody.data.items.filter(item => item.data.transactionId == "32466116-b2ce-4f0a-a490-353cbeab6485");
const transStatus = filteredByTransaction[0].data.status;
const title = filteredByTransaction[0].description;
const description = filteredByTransaction[0].title;

console.log(transStatus);
console.log(title);
console.log(description);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string", function () {
    pm.expect(transStatus).to.eql("FINISHED");
});

pm.test("Check types of keys", function() {
    pm.expect(typeof title).to.be.a('string');
    pm.expect(typeof transStatus).to.be.a('string');
    pm.expect(typeof description).to.be.a('string'); 
});

pm.test("If there are some mimimal length of title and description", function() {
    pm.expect(transStatus.length).to.be.greaterThan(1);
    pm.expect(description.length).to.be.greaterThan(1);
});

