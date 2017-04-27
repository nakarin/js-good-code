export function createProfile(){
    return {
        name : "Nak",
        age : 44
    };
};

//---------- Class -------------
export class Profile {
    name
    age
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting() {
        return "Hi -->  " + this.name + " and " + this.age;
    }
}