import Calculator from '../Calculator/Calculator'
import Button from '../Calculator/Button/Button'
import Screen from '../Calculator/Screen/Screen'
export default function MountCalculator(){
    let MyScreen = new Screen("");
    let MyKeyBoard = MountKeyBoard();

    let MyCalculator = new Calculator(MyScreen, MyKeyBoard);

    return MyCalculator;
    
}
export function MountKeyBoard(){
    let TemporalKeyBoard = new Array();
    let itemButtons = ["1","2","3","+","4","5","6","-","7","8","9","*", "0","/",".", "CE","="];

    for (let index = 0; TemporalKeyBoard.length <=16; index++) {
            TemporalKeyBoard.push(new Button(itemButtons[index]));
        
    }
    return TemporalKeyBoard;
}