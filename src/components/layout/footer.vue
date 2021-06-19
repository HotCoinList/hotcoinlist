<template>
  <div class="page-footer-wrapper">
    <div class="page-footer">
      <div class="page-footer__copyright">
        <span>© 2021 hotcoinlist.net</span>
      </div>
      <LocaleSwitcher />
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from '../features/localeSwitcher';

export default {
  components: {
    LocaleSwitcher,
  },
};
</script>

<style lang="less">
.page-footer-wrapper {
  width: 100%;
  height: 48px;
  .page-footer {
    max-width: 1200px;
    height: 48px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: var(--secondary-text);
    user-select: none;
    &__copyright {
      margin-right: 12px;
    }
  }
}
</style>
