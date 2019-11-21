<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <the-header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import TheHeader from './components/TheHeader'
import Footer from './components/Footer'
export default {
  components: {
    TheHeader,
    Footer
  }
};
</script>

<style lang="scss">

body{
  background: lightblue;
  margin: 0;
  padding: 0;
}

#app {
  background-color: white;
  box-shadow: #666666 0px 0px 7px;
  overflow: hidden;
  border-radius: 10px;
}

@media (min-width: 768px) and (max-width: 1023){
  //tablet
  .container {
    width: 80%;
    margin: 15px auto;
    padding: 0 15px;
}

}
@media (min-width: 1024px){
    //desktop
    .container {
      max-width: 1000px;
      margin: 20px auto;
      padding: 0 20px;
  }
}

</style>