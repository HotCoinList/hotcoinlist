<template>
  <div id="app">
    <Page>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </Page>
  </div>
</template>

<script>
import Page from './components/layout/page';

export default {
  components: {
    Page,
  },
};
</script>
