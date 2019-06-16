<template>
  <div id="app">
    <el-tabs :tab-position="'top'" @tab-click="changePage" :stretch="true">
      <el-tab-pane label="Home" name="home"></el-tab-pane>
      <el-tab-pane label="Test" name="test"></el-tab-pane>
      <el-tab-pane label="WrongCard" name="wrongCard"></el-tab-pane>
    </el-tabs>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changePage(tab){
      if(tab.name === 'home'){
        this.$router.push('/')
      }else if(tab.name === 'test'){
        this.$router.push('/start')
      }else if(tab.name === 'wrongCard'){
        this.$router.push('/wrong-card')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
