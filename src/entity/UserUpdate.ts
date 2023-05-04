class UserUpdate implements UserInterface {
    age: number;
    city: string;
    country: string;
    email: string;
    id: number;
    login: string;
    workPlace: string;
    password?: string;

    constructor(age: number, city: string, country: string, email: string, id: number, login: string, workPlace: string, password: string) {
        this.age = age;
        this.city = city;
        this.country = country;
        this.email = email;
        this.id = id;
        this.login = login;
        this.workPlace = workPlace;
        this.password = password
    }

}

export default UserUpdate;