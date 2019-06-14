<template>
  <div id="app">
    <router-view/>
      <el-tabs :tab-position="'bottom'" @tab-click="changePage" :stretch="true">
        <el-tab-pane label="Home" name="home"></el-tab-pane>
        <el-tab-pane label="Test" name="test"></el-tab-pane>
        <el-tab-pane label="WrongCard" name="wrongCard"></el-tab-pane>
    </el-tabs>
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
        this.$router.push('/test')
      }else if(tab.name === 'wrongCard'){
        this.$router.push('/wrongCard')
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
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
