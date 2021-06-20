<template>
  <div class="coin-showcase">
    <div class="coin-showcase-logo">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" />
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
          <span>{{ coin.desc }}</span>
        </div>
      </div>
      <div class="coin-showcase-info__bottom">
        <div class="coin-showcase__info">
          <span>{{ displayContract }}</span>
          <span>{{ displayMarketCap }}</span>
          <span>{{ displayPrice }}</span>
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
export default {
  props: {
    coin: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    displayLikes() {
      return this.$t('coin_showcase_likes').replace('{likes}', this.coin.likes);
    },
    displayContract() {
      return `${this.$t('coin_showcase_contract')}: ${this.coin.contract}`;
    },
    displayMarketCap() {
      return `${this.$t('coin_list_marketcap')}: ${this.coin.marketcap || '-'}`;
    },
    displayPrice() {
      return `${this.$t('coin_list_price')}: ${this.coin.price || '-'}`;
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
  &-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 142px;
      height: 142px;
      border-radius: 20px;
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
        font-size: 18px;
        margin-top: 4px;
      }
    }
    &__bottom {
      .coin-showcase__info {
        color: var(--regular-text--lighter);
        font-size: 18px;
        margin-top: 4px;
        span {
          margin-right: 16px;
        }
        span:last-child {
          margin-right: 0;
        }
      }
      .coin-showcase__action {
        margin-top: 4px;
        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
