export default class Calculator{
    #Screen;
    #Buttons;

    constructor(screen, buttons){
        this.#Screen = screen;
        this.#Buttons = buttons;
    }
    setScreen(screen){
        this.#Screen = screen;
    }
    setButtons(buttons){
        this.#Buttons = buttons;
    }
    get Screen(){
        return this.#Screen;
    }
    get Buttons(){
        return this.#Buttons;
    }

}