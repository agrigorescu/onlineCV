const sg = require('sendgrid').SendGrid("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");

const request = sg.emptyRequest();

class Email {
    static sendEmail(obj){
        return new Promise(
            (resolve, reject) => {
                request.body = {
                    "from": {
                        "email": obj.email,
                        "name": `${obj.firstName} ${obj.lastName}`
                    },
                    "subject": "A new website contact request",
                    "content": [
                        {
                            "type": "text/html",
                            "value": 
                            `<html>
                            <p>
                                ${obj.firstName} ${obj.lastName} has sent you an email
                            </p>
                            <p>
                                ${obj.message}
                            </p>
                            </html>`
                        }
                    ],
                    "personalizations": [
                        {
                            "to": [
                                {
                                    "email": "deea26@gmail.com"
                                }
                            ]
                        }
                    ]
                };

                request.method = 'POST';
                request.path = '/v3/mail/send';

                sg.API(request, function (response) {
                    console.log(response.statusCode);
                    console.log(response.body);
                    console.log(response.headers);
                    if (response.statusCode === 202){
                        resolve();
                    } else {
                        reject("An error has occurred");
                    }
                });
            }
        )
    }
}

module.exports = Email;