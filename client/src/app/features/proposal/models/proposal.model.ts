export class Proposal {
    //we will use accessors
    public message: string
    public email: string
    public userId: string

    constructor(message: string, email: string, userId: string) {
        this.message = message;
        this.email = email;
        this.userId = userId
    }

}