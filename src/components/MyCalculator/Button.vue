<script setup>
const props = defineProps({
    Item:{
        type: String,
        required: true
    }
});
const emits = defineEmits(['itemButton']);

const EmitItem = ()=>{
    emits('itemButton',props.Item)
}
</script>
<template>
    
        <div class="button" @click="EmitItem">
            {{Item}}
        </div>
    
</template>
<style lang="scss" scoped>
@use '../../assets/scss/main' as *;

    .button{
        @include FlexDisplay(row, center, center,100%, 100%);
        border: solid 1px;
    }

    
</style>