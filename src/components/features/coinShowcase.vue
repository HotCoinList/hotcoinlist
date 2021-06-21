<template>
  <div class="coin-showcase">
    <div class="coin-showcase-logo">
      <img :src="coin.logo" v-if="coin.logo" />
      <div class="coin-showcase-logo__placeholder" v-else>
        <Coin />
      </div>
    </div>
    <div class="coin-showcase-info">
      <div class="coin-showcase-info__top">
        <div class="coin-showcase__tag coin-showcase__index">
          <span>#1</span>
        </div>
        <div class="coin-showcase__name">
          <span>{{ coin.name }}</span>
        </div>
        <div class="coin-showcase__tag coin-showcase__tag--small coin-showcase__chain">
          <span>{{ coin.chain.toUpperCase() }}</span>
        </div>
        <div class="coin-showcase__tag coin-showcase__tag--small coin-showcase__likes">
          <span>{{ displayLikes }}</span>
        </div>
      </div>
      <div class="coin-showcase-info__middle">
        <div class="coin-showcase__desc">
          <span>{{ displayDesc }}</span>
        </div>
      </div>
      <div class="coin-showcase-info__bottom">
        <div class="coin-showcase__info">
          <span v-html="displayContract"></span>
          <span v-html="displayMarketCap"></span>
          <span v-html="displayPrice"></span>
          <span class="coin-showcase__social"></span>
        </div>
        <div class="coin-showcase__action">
          <el-button type="primary" round>❤ {{ $t('coin_showcase_like') }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Coin from '../icons/coin';
import pangu from 'pangu.simple';

export default {
  props: {
    coin: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Coin,
  },
  computed: {
    ...mapGetters('locale', ['currentLocale']),
    displayDesc() {
      if (this.coin.slogan[this.currentLocale]) {
        return pangu.spacing(this.coin.slogan[this.currentLocale]);
      }
      return this.coin.slogan.en;
    },
    displayLikes() {
      return this.$t('coin_showcase_likes').replace('{likes}', this.coin.likes);
    },
    displayContract() {
      return `<span class="coin-showcase__label">${this.$t('coin_showcase_contract')}</span>: ${
        this.coin.contract
      }`;
    },
    displayMarketCap() {
      return `<span class="coin-showcase__label">${this.$t('coin_list_marketcap')}</span>: $ ${
        this.coin.marketcap || '-'
      }`;
    },
    displayPrice() {
      return `<span class="coin-showcase__label">${this.$t('coin_list_price')}</span>: $ ${
        this.coin.price || '-'
      }`;
    },
  },
};
</script>

<style lang="less">
.coin-showcase {
  background-color: var(--showcase-bg);
  display: flex;
  align-items: center;
  padding: 18px 20px;
  border-radius: 28px;
  box-shadow: var(--showcase-shadow) 0 0 24px;
  cursor: pointer;
  transition: background-color 100ms ease;
  &-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    img {
      width: 142px;
      height: 142px;
      border-radius: 20px;
    }
    &__placeholder {
      width: 142px;
      height: 142px;
      border-radius: 20px;
      background-color: var(--component-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 88px;
        height: 88px;
        fill: var(--placeholder);
      }
    }
  }
  &-info {
    display: flex;
    flex: 1;
    margin-left: 16px;
    flex-direction: column;
    justify-content: center;
    &__top {
      display: flex;
      align-items: center;
      font-weight: 600;
      .coin-showcase__tag {
        background-color: var(--showcase-tag-bg);
        color: var(--primary-text);
        font-size: 20px;
        padding: 4px 8px;
        border-radius: 10px;
        margin-right: 12px;
        box-shadow: var(--showcase-shadow-lighter) 0 0 6px;
        user-select: none;
      }
      .coin-showcase__tag--small {
        font-size: 16px;
      }
      .coin-showcase__tag:last-child {
        margin-right: 0;
      }
      .coin-showcase__name {
        margin-right: 12px;
        font-size: 22px;
        color: var(--regular-text--lighter);
        text-shadow: var(--showcase-shadow--lighter) 0 4px 6px;
      }
    }
    &__middle {
      .coin-showcase__desc {
        color: var(--regular-text--lighter);
        font-size: 17px;
        margin-top: 4px;
      }
    }
    &__bottom {
      .coin-showcase__info {
        color: var(--regular-text--lighter);
        font-size: 17px;
        margin-top: 4px;
        span {
          margin-right: 12px;
        }
        span:last-child {
          margin-right: 0;
        }
      }
      .coin-showcase__label {
        user-select: none;
        font-size: 16px;
      }
      .coin-showcase__action {
        margin-top: 8px;
        .el-button {
          width: 100%;
          font-size: 16px;
        }
      }
    }
  }
}
.coin-showcase:hover {
  background-color: var(--showcase-hover-bg);
}
.coin-showcase:active {
  background-color: var(--showcase-active-bg);
}
</style>
