export default class Screen{
    #Value;
    constructor(value){
        this.#Value = value;
    }
    setValue(value){
        this.#Value += value; 
    }
    get Value(){
        return this.#Value;
    }
}