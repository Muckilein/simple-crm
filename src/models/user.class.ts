export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    email: string;
    zipCoode: number;
    city: string;
   

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.email = obj ? obj.email : '';
        this.zipCoode = obj ? obj.zipCoode : '';
        this.city = obj ? obj.city : '';
        
    }

    toJSON() {
        return {
            "firstName": this.firstName,
            "lastName": this.lastName,
            "birthDate": this.birthDate,
            "street": this.street,
            "email": this.email,
            "zipCoode": this.zipCoode,
            "city": this.city
        }
    }
}

