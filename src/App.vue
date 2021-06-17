<template>
  <div id="app">
    <Page>
      <transition mode="out-in" name="fade">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view />
        </keep-alive>
        <router-view v-else />
      </transition>
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
