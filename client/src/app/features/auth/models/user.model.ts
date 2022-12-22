export class User {
    public email: string;
    public _id: string;
    public token: string;
    
    constructor(email: string,id: string, accessToken: string) {
        this.email = email;
        this._id = id;
        this.token = accessToken
    }
}