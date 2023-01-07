export function ComprobeSign(element){
    if(element=="+" || element=="-" || element=="*" || element=="/"){
        return true;
    }
    return false;
}
export function ResultOperation(firstArgument, operation, secondArgument){
    if(operation == "+"){
        
        return firstArgument + secondArgument;
    }
    if(operation == "-"){
        return firstArgument - secondArgument;
    }
    if(operation == "*"){
        return firstArgument * secondArgument;
    }
    if(operation == "/"){
        return firstArgument / secondArgument;
    }

}