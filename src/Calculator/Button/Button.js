export default class Button{
    #Item;

    constructor(item){
        this.#Item = item;
    }

    setItem(item){
        this.#Item = item;
    }
    get Item(){
        return this.#Item
    }
}