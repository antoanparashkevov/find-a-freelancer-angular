export class Freelancer {
    //we will use accessors
    public firstName: string;
    public lastName: string;
    public description: string;
    public hourlyRate: number;
    public skills: string[];
    
    constructor(fName: string, lName: string, desc: string, rate: number, skills: string[]) {
        this.firstName = fName;
        this.lastName = lName;
        this.description = desc;
        this.hourlyRate = rate;
        this.skills = skills;
    }
}