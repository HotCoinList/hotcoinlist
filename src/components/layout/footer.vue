<template>
  <div class="page-footer-wrapper">
    <div class="page-footer">
      <div class="page-footer-row" v-if="showDataTip">
        <div class="page-footer__datatip">
          <span>{{ $t('data_tip') }}</span>
        </div>
      </div>
      <div class="page-footer-row">
        <div class="page-footer__copyright">
          <span>© 2021 hotcoinlist.net</span>
        </div>
        <LocaleSwitcher />
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from '../features/localeSwitcher';

export default {
  components: {
    LocaleSwitcher,
  },
  computed: {
    showDataTip() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style lang="less">
.page-footer-wrapper {
  width: 100%;
  padding: 16px 0 20px 0;
  margin-bottom: 12px;
  .page-footer {
    max-width: 1200px;
    margin: 0 auto;
    user-select: none;
    color: var(--secondary-text);
    .page-footer-row {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
    }
    &__copyright {
      margin-right: 12px;
    }
    &__datatip {
      font-size: 15px;
    }
  }
}
</style>
