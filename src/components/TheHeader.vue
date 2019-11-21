<template>

    <div class="header">

      <div class="logo">
      <router-link to="/"><img src="../assets/cupcakes & cookies.png" />Cupcakes and cookies</router-link>
      </div>
      <div class="header-links-container">
        <div class="pink-border-box">
          <router-link to="/"><img src="../assets/house.png" class="my-icon" />Hem</router-link>
        </div>
        <div class="pink-border-box">
          <router-link to="/"><img src="../assets/compass-arrow.png" class="my-icon" />Arrow</router-link>
        </div>
        <div class="pink-border-box">
          <router-link to="/"><img src="../assets/file.png" class="my-icon" />Filer</router-link>
        </div>
        <div class="pink-border-box">
          <router-link to="/"><img src="../assets/question-mark.png" class="my-icon" />Frågor</router-link>
        </div>
        <div class="pink-border-box">
          <router-link to="/"><img src="../assets/person.png" class="my-icon" />Logga in</router-link>
        </div>
      </div>
    </div>

</template>

<script>
export default {
name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
.header{
  padding: 10px;
  margin-bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo{
  a {
    display: block;
    height: 82px;
    width: 282px;
  }
}

.header-links-container{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  text-align: center;
}

@media (min-width: 768px) and (max-width: 1023){
  //tablet
.header{
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    padding: 15px;
  }
}

@media (min-width: 1024px){
  //desktop
.header{
  grid-template-areas: 
  'logo . menu';
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  padding: 20px;
}

.logo{
  grid-area: logo;
}

.header-links-container {
  grid-area: menu
  }
}

#logo-container {
  flex: 1;
}

#header-links-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

</style>