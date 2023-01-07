<script setup>
import { ref } from 'vue';
import MountCalculator from '../../MountCalculator/MountCalculator.js';
import Button from './Button.vue';
import { ComprobeSign, ResultOperation} from '../../MountCalculator/Operations';

let myCalculator= MountCalculator();
let temporalValue = ref(myCalculator.Screen.Value);
let operate = ref(false);
let point = ref(false);
let firstNumber = ref(0);
let secondNumber =ref(0);
let typeOperation = ref('');
let temporalResult = ref(0);
let printButtonItem = (ButtonItem)=>{
    if(ButtonItem=="="){
        console.log(eval(temporalValue.value));
        
    }
    temporalValue.value+=ButtonItem;
    /*
    if(!ComprobeSign(ButtonItem)){
        temporalValue.value+=ButtonItem;
    }
     if(ComprobeSign(ButtonItem)){
        if(operate.value){
            secondNumber.value = parseFloat(temporalValue.value);
            temporalResult.value += ResultOperation(temporalResult.value, typeOperation.value, secondeNumber.value);
            
            temporalValue.value= '';
            operate.value = false;
            console.log(temporalResult.value);
            secondNumber.value = parseFloat(temporalValue.value)

            temporalResult.value = ResultOperation(firstNumber.value, typeOperation.value, secondNumber.value);
            console.log(eval("2+5-11"));
            
            
        }
        if(!operate.value){
            operate.value = true;
            firstNumber.value = parseFloat(temporalValue.value);
            typeOperation.value = ButtonItem;
            temporalValue.value = '';
        }
        

    } */
    if(ButtonItem=='CE'){
        myCalculator.Screen.setValue('');
        temporalValue.value = myCalculator.Screen.Value;
    }
    
    
    
}

</script>
<template>
    <div>{{ temporalValue }}</div>
    <div class="keyboard-space">
        <div class="button-space" v-for="button of myCalculator.Buttons">
            <Button
                :Item="button.Item"
                @itemButton="printButtonItem(button.Item)"
             />
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/main' as *;

.keyboard-space{
    @include FlexDisplay(row, center, space-evenly,100%, 70%);
    flex-wrap: wrap;
    .button-space{
        @include FlexDisplay(row, center, center,25%, 20%);
        border: solid 1px;
    }
}
    
</style>