<template>
  <div class="page-main page-landing">
    <div class="page-main-section hottest">
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
          name: 'pwp Software Coin',
          symbol: 'pwp',
          chain: 'bsc',
          slogan: {
            'zh-CN': '赠予pwp.app早期支持者的纪念币',
            en: 'Commemorative coins given to early supporters of pwp.app',
          },
          contract: '0x63b009859E022Da8904767dCDcBF20F61C9c406E',
          marketcap: '10201405.00',
          price: '0.0000000014',
          likes: 1124,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          marketcap: '10201405.00',
          price: '0.0000000014',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
          chain: 'bsc',
          likes: 1023,
        },
        {
          name: 'FreeSoftwareCoin',
          symbol: 'FSC',
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
  .hottest {
    animation: hottestListGlow 3s linear alternate infinite;
    &-header {
      width: 100%;
      margin-bottom: 12px;
      padding: 0 2px;
      user-select: none;
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
