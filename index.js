
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ limit: '550mb' }));
app.use(bodyParser.urlencoded({ limit: '550mb', extended: true }));
app.use(cors({
    origin: '*'
}));

const port = process.env.PORT || 8080;

//var bearerTokenDocumentsDatabase;
var bearerTokenInvoiceDatabase;


//app.get('/documentBearer', (req, res) => res.json({ documentBearer: bearerTokenDocumentsDatabase }));
app.get('/invoiceBearer', (req, res) => res.json({ invoiceBearer: bearerTokenInvoiceDatabase }));


//////////////////////////////////Invoice
app.post('/getInvoicesByCustomerNo', function (req, res) {

    var Query = req.body;

    request({
        url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/R and R Property/layouts/Website_Invoice/_find',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenInvoiceDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})

app.post('/getInvoiceByInvoiceID', function (req, res) {

    var Query = req.body;
    console.log(Query)
    request({
        url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/R and R Property/layouts/Website_Invoice/_find',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenInvoiceDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})

app.post('/getInvoiceLineItemsByInvoiceID', function (req, res) {

    var Query = req.body;

    request({
        url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/R and R Property/layouts/Website_Invoice_LI/_find',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenInvoiceDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})

//////////////////////////Documents

app.post('/getDocumentsByUser', function (req, res) {

    var Query = req.body;

    request({
        url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/ACPV/layouts/CET_Docs_Website/_find',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenDocumentsDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})

app.post('/getDocumentsByUserCategory', function (req, res) {

    var Query = req.body;

    request({
        url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/ACPV/layouts/CET_Docs_Website/_find',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenDocumentsDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})


app.post('/postDocumentJson', function (req, res) {

    var Query = req.body;

    request({
        url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/ACPV/layouts/CET_Docs_Website/records',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenDocumentsDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})

// app.post('/postDocument', function (req, res) {

//     var Query = req.body;
//     var recordId = Query.recordId;
//     var document = Query.doc;



//     console.log(Query);
//     request({
//         url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/ACPV/layouts/CET_Docs_Website/records/' + recordId + '/containers/File_Container',
//         rejectUnauthorized: false,
//         body: document,
//         method: 'POST',

//         maxAttempts: 15,
//         retryDelay: 5000,
//         retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + bearerTokenDocumentsDatabase
//         }
//     }, function (error, response, body) {

//         if (response) {
//             console.error('error:', error);
//             console.log('statusCode:', response && response.statusCode);
//             res.end(body);
//         }
//     });
// })

//////Properties
//app.get('/invoiceBearer', (req, res) => res.json({ invoiceBearer: bearerTokenInvoiceDatabase }));

app.get('/getProperties', function (req, res) {

    //var Query = req.body;
    // console.log(JSON.stringify(Query));
    request({
        url: 'https://www.w5spooltracker.net/fmi/data/v1/databases/R and R Property/layouts/T02_PROPERTY_Data_Entry/records/',
        rejectUnauthorized: false,
        //body: JSON.stringify(Query),
        method: 'GET',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenInvoiceDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})




/////////////////////////Property
app.post('/getPropertyByID', function (req, res) {

    var Query = req.body;
    console.log(JSON.stringify(Query));
    request({
        url: 'https://www.w5spooltracker.net/fmi/data/v1/databases/R and R Property/layouts/T02_PROPERTY_Data_Entry/_find',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenInvoiceDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})

/////////////////////////PropertyDocuments
app.post('/getPropertyDocumentsByPropertyID', function (req, res) {

    var Query = req.body;
    console.log(JSON.stringify(Query));
    request({
        url: 'https://www.w5spooltracker.net/fmi/data/v1/databases/R and R Property/layouts/Website_Gallery/_find',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenInvoiceDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})


/////////////////////////User
app.post('/getUser', function (req, res) {

    var Query = req.body;
    console.log(JSON.stringify(Query));
    request({
        url: 'https://www.w5spooltracker.net/fmi/data/v1/databases/R and R Property/layouts/Website_Login/_find',
        rejectUnauthorized: false,
        body: JSON.stringify(Query),
        method: 'POST',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenInvoiceDatabase
        }
    }, function (error, response, body) {

        if (response) {

            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log(body);
            res.end(body);

        }
    });
})


app.patch('/updateTempPassword', function (req, res) {

    var Query = req.body;
    var recordId = Query.fieldData.recordId;

    var QueryRework = {
        "fieldData":
        {
            //  "Customer_No": Query.fieldData.Customer_No,
            //  "Email": Query.fieldData.Email,
            "Flag_Temp_Password": "1",
            "Password": Query.fieldData.Password,
            // "Username": Query.fieldData.Username
        }

    };

    request({
        url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/R and R Property/layouts/Website_Login/records/' + recordId,
        rejectUnauthorized: false,
        body: JSON.stringify(QueryRework),
        method: 'PATCH',

        maxAttempts: 4,
        retryDelay: 200,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerTokenInvoiceDatabase
        }
    }, function (error, response, body) {

        if (response) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
            res.end(body);
        }
    });
})



/////////////////////////////////////////////////////Tokens

var request = require('requestretry');

request({
    url: 'https://www.w5spooltracker.net/fmi/data/v1/databases/R and R Property/sessions',
    rejectUnauthorized: false,
    method: 'POST',

    maxAttempts: 4,
    retryDelay: 200,
    retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + 'RHJpZXM6RHJpZXMxMjM='
    }
}, function (error, response, body) {

    if (response) {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        var parsedArray = JSON.parse(body);
        bearerTokenInvoiceDatabase = parsedArray.response.token;
        var formattedTime = new Date(Date.now()).toLocaleTimeString("en-US")

        console.log('bearerTokenInvoiceDatabase:', bearerTokenInvoiceDatabase + ' Stamp: ' + formattedTime);
    }

    const interval = setInterval(function () {
        request({
            url: 'https://www.w5spooltracker.net/fmi/data/v1/databases/R and R Property/sessions',
            rejectUnauthorized: false,
            method: 'POST',
            maxAttempts: 4,
            retryDelay: 200,
            retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + 'RHJpZXM6RHJpZXMxMjM='
            }
        }, function (error, response, body) {
            if (response) {
                console.error('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
                var parsedArray = JSON.parse(body);
                bearerTokenInvoiceDatabase = parsedArray.response.token;
                var formattedTime = new Date(Date.now()).toLocaleTimeString("en-US")

                console.log('bearerTokenInvoiceDatabase:', bearerTokenInvoiceDatabase + ' Stamp: ' + formattedTime);
            }
        });
    }, 800000);

});


//var request = require('requestretry');

// request({
//     url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/ACPV/sessions',
//     rejectUnauthorized: false,
//     method: 'POST',

//     maxAttempts: 15,
//     retryDelay: 5000,
//     retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + 'RHJpZXM6RHJpZXMxMjM='
//     }
// }, function (error, response, body) {

//     // if (response) {
//     //     console.error('error:', error);
//     //     console.log('statusCode:', response && response.statusCode);
//     //     console.log('body:', body);
//     //     var parsedArray = JSON.parse(body);
//     //     bearerTokenDocumentsDatabase = parsedArray.response.token;
//     //     console.log('bearerTokenDocumentsDatabase:', bearerTokenDocumentsDatabase);
//     // }

//     const interval = setInterval(function () {
//         request({
//             url: 'https://www.w5spooltracker.net//fmi/data/v1/databases/ACPV/sessions',
//             rejectUnauthorized: false,
//             method: 'POST',

//             maxAttempts: 15,
//             retryDelay: 5000,
//             retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Basic ' + 'RHJpZXM6RHJpZXMxMjM='
//             }
//         }, function (error, response, body) {

//             // if (response) {
//             //     console.error('error:', error);
//             //     console.log('statusCode:', response && response.statusCode);
//             //     console.log('body:', body);
//             //     var parsedArray = JSON.parse(body);
//             //     bearerTokenDocumentsDatabase = parsedArray.response.token;
//             //     console.log('bearerTokenDocumentsDatabase:', bearerTokenDocumentsDatabase);
//             // }

//         });
//     }, 300000);

// });


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
    res.send("Back-end is Running !!");
});


// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});