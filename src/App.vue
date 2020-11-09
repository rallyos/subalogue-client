<template>
  <div id="app">
    <section class="columns is-gapless h-100">
      <div class="column is-2 is-narrow">
        <Sidebar/>
      </div>
      <div class="column is-10 is-narrow">
        <Content/>
      </div>
    </section>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Content,
    Sidebar
  }
}
</script>

<style>
html, body {
  height: 100%;
  background-color: #F5F5F5;
}
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #343534;
  height: 100%;
}
.h-100 {
  height: 100%;
}
h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 0 0.83em 0;
}
</style>
