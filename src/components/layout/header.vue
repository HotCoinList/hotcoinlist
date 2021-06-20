<template>
  <div class="page-header-wrapper">
    <div class="page-header">
      <div class="page-header__left">
        <div class="page-header__title">
          <span>HotCoinList</span>
        </div>
      </div>
      <div class="page-header__right">
        <div class="page-header__submit">
          <el-button type="primary" round>{{ $t('submit_coin') }}</el-button>
          <el-button type="primary" round>{{ $t('connect_wallet') }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.page-header-wrapper {
  width: 100%;
  height: 72px;
  .page-header {
    max-width: 1200px;
    height: 72px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    user-select: none;
    &__left {
      flex: 1;
    }
    &__title {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0.05rem;
      color: var(--primary);
    }
    &__right {
      display: flex;
      justify-self: end;
      align-items: center;
      .el-button:first-child {
        margin-left: 0;
      }
      .el-button {
        margin-left: 14px;
        font-size: 15px;
      }
    }
  }
}
</style>
