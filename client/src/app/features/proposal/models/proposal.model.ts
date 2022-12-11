export class Proposal {
    //we will use accessors
    public message: string
    public email: string

    constructor(message: string, email: string) {
        this.message = message;
        this.email = email
    }

}