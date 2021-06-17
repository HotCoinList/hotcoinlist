<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </div>
</template>

<style lang="less">
html,
body,
#app {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(23, 22, 24);
  font-family: Kanit, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
