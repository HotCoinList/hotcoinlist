<template>
  <div class="page-main page-landing">
    <div class="hottest">
      <div class="hottest-header">
        <div class="hottest-header__title">
          <span>{{ $t('current_hottest') }}</span>
        </div>
      </div>
      <div class="hottest-body">
        <CoinList :data="hottest" />
      </div>
    </div>
  </div>
</template>

<script>
import CoinList from '../components/features/coinList';

export default {
  components: {
    CoinList,
  },
  data() {
    return {
      hottest: [
        {
          name: 'FuckingCoin',
          symbol: 'FIC',
          chain: 'bsc',
          likes: 1124,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
      ],
    };
  },
};
</script>

<style lang="less">
.page-landing {
  width: 100vw;
  position: relative;
  margin: 16px 0 32px 0;
  .hottest {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 28px 32px;
    background-color: var(--component-bg);
    box-sizing: border-box;
    border-radius: 32px;
    box-shadow: var(--component-shadow) 0 0 28px;
    border: var(--component-border) solid 1px;
    animation: hottestListGlow 3s linear alternate infinite;
    &-header {
      width: 100%;
      margin-bottom: 16px;
      padding: 0 2px;
      &__title {
        color: var(--primary-text);
        font-size: 24px;
        font-weight: 600;
        text-shadow: var(--component-text-shadow) 0 2px 16px;
      }
    }
  }
}
</style>
