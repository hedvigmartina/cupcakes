<template>

    <div class="Recipe">

        <div class="container">

            <h1> {{title}} </h1>
        
        </div>
    
    </div>
  
</template>

<script>

export default {
    props: ['title'],
}

</script>

<style>

    .Recipe {
        border: 1px solid red;
        padding: 20px;
        flex: 1;
        margin: 0 10px;
    }

    .Recipe-container {
        display: flex;
    }

</style>