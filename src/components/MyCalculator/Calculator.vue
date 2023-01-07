<script setup>
import { ref } from 'vue';
import MountCalculator from '../../MountCalculator/MountCalculator.js';
import Button from './Button.vue';

let myCalculator= MountCalculator();
let temporalValue = ref(myCalculator.Screen.Value);
let printButtonItem = (ButtonItem)=>{
    let temporaloperation = 0
    temporalValue.value+=ButtonItem;
    if(ButtonItem=='CE'){
        temporalValue.value = '';
    }
    
    if(ButtonItem=="="){
        
        if(temporalValue.value.includes("+")){
            
            let operation = temporalValue.value.split("+");
            let result = parseFloat(operation[0]) ;

            console.log(operation);
            for (let index = 1; index < operation.length; index++) {
                result += parseFloat(operation[index]);
            }
            myCalculator.Screen.setValue(result);
            temporaloperation = myCalculator.Screen.Value;
        }
        if(temporalValue.value.includes("-")){
            
            let operation = temporalValue.value.split("-");
            let result = parseFloat(operation[0]);

            console.log(operation);
            for (let index = 1; index < operation.length; index++) {
                result -= parseFloat(operation[index]);
            }
            myCalculator.Screen.setValue(result);
            temporalValue.value = myCalculator.Screen.Value;
        }
       temporalValue.value = temporaloperation;
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