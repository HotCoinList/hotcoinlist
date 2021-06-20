<template>
  <div class="page-main page-landing">
    <div class="hottest">
      <div class="hottest-header">
        <div class="hottest-header__title">
          <span>{{ $t('current_hottest') }}</span>
        </div>
      </div>
      <div class="hottest-body">
        <CoinShowCase class="hottest-body__showcase" :coin="firstCoin" />
        <CoinList :data="hottestListData" :indexOffset="2" />
      </div>
    </div>
  </div>
</template>

<script>
import CoinList from '../components/features/coinList';
import CoinShowCase from '../components/features/coinShowcase';

export default {
  components: {
    CoinList,
    CoinShowCase,
  },
  data() {
    return {
      hottest: [
        {
          name: 'FuckingCoin',
          symbol: 'FIC',
          chain: 'bsc',
          desc: 'Fuck the blockchain, fuck the world, 我们是真正的价值币，不是土狗',
          likes: 1124,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'GrassRootPeople',
          symbol: 'GRP',
          chain: 'bsc',
          likes: 1023,
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
  computed: {
    firstCoin() {
      if (this.hottest && Array.isArray(this.hottest) && this.hottest.length) {
        return this.hottest[0];
      }
      return null;
    },
    hottestListData() {
      if (this.hottest && Array.isArray(this.hottest) && this.hottest.length) {
        return this.hottest.slice(1);
      }
      return [];
    },
  },
};
</script>

<style lang="less">
.page-landing {
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
      margin-bottom: 12px;
      padding: 0 2px;
      &__title {
        color: var(--primary-text);
        font-size: 24px;
        font-weight: 600;
        text-shadow: var(--component-text-shadow) 0 2px 16px;
      }
    }
    &-body {
      &__showcase {
        margin-bottom: 18px;
      }
    }
  }
}
</style>
