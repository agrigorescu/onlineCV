class Contact {
    constructor(obj) {
        if(!obj.firstName){
            throw new Error("You must include a first name");
        } else if (typeof obj.firstName != "string"){
            throw new Error("First name but be letters");
        } else {
            this.firstName = obj.firstName;
        }

        if(!obj.lastName){
            throw new Error("You must include a last name");
        } else if (typeof obj.lastName != "string"){
            throw new Error("Last name but be letters");
        } else {
            this.lastName = obj.lastName;
        }

        if(!obj.email){
            throw new Error("You must include an email");
        } else if (typeof obj.email != "string"){
            throw new Error("Email is incorrect");
        } else {
            this.email = obj.email;
        }

        if(!obj.message){
            throw new Error("You must include a message");
        } else if (typeof obj.message != "string"){
            throw new Error("Message but be letters");
        } else {
            this.message = obj.message;
        }

        this.sentDate = new Date();

    }

    returnContactRequest(){
        return this;
    }

}

module.exports = Contact;