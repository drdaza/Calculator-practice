<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="wrapper">
      <nav>
        <ul>
            <li><RouterLink to="/">Calculator</RouterLink></li>
            <li><RouterLink to="/converter">Converter</RouterLink></li>
        </ul>
      </nav>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/main' as *;
.wrapper{
    @include FlexDisplay(row, center, center, 100%, 10vh);
    background-color: cadetblue;
    nav{
        @include FlexDisplay(row, center, space-evenly, 100%, 100%);
        ul{
            @include FlexDisplay(row, center, space-evenly, 100%, 100%);
            list-style: none;
            li{
                @include FlexDisplay(row, center, space-evenly, 100%, 100%);
                a{
                text-decoration: none;
                font-size: larger;
                color: whitesmoke;
                font-weight: bold;
                @include FlexDisplay(row, center, space-evenly, 100%, 100%);
                }
            }
            li:hover{
                background-color: darkcyan;
                cursor: pointer;
            }

        }
        
    }
}
</style>