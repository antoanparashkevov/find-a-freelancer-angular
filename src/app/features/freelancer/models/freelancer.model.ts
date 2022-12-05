export class Freelancer {
    //we will use accessors
    public firstName: string;
    public lastName: string;
    public description: string;
    public hourlyRate: number;
    public skills: string[];
    public education: string[];
    public languages: string[];
    
    constructor(fName: string, lName: string, desc: string, rate: number, skills: string[], education: string[], languages: string[]) {
        this.firstName = fName;
        this.lastName = lName;
        this.description = desc;
        this.hourlyRate = rate;
        this.skills = skills;
        this.education = education;
        this.languages = languages
    }
}