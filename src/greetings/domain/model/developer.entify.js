import App from "../../../app.vue";

export class Developer {
    #firstName;
    #lastName;
    constructor(firstName,lastName){
        this.#firstName = firstName?.trim() || '';
        this.#lastName = lastName?.trim() || '';
    }
    get firstName(){
        return this.#firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    get fullName(){
        return this.#firstName && this.#lastName
        ? `${this.this.#lastName} ${this.#firstName}`
        : "Unknown";
    }
}
