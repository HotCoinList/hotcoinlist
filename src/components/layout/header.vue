<template>
  <div class="page-header-wrapper">
    <div class="page-header">
      <div class="page-header__left">
        <div
          :class="{
            'page-header__title': true,
            'page-header__title--clickable': titleClickable,
          }"
          @click="toHome"
        >
          <span>HotCoinList</span>
        </div>
      </div>
      <div class="page-header__right">
        <div class="page-header__submit">
          <el-button type="primary" round v-if="showSubmitBtn" @click="toSubmit">{{
            $t('submit_coin')
          }}</el-button>
          <el-button type="primary" round @click="handleConnect" v-if="!walletAddress">
            {{ $t('connect_wallet') }}
          </el-button>
          <div class="page-header__wallet" @click="openWalletDialog" v-else>
            <span>{{ walletAddress }}</span>
          </div>
        </div>
      </div>
      <WalletDialog ref="walletDialog"></WalletDialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { connectWallet } from '../../utils/walletConnect';
import WalletDialog from '../features/walletDialog.vue';

export default {
  components: {
    WalletDialog,
  },
  computed: {
    ...mapGetters('wallet', ['walletAddress']),
    showSubmitBtn() {
      return this.$route.path !== '/submit';
    },
    titleClickable() {
      return this.$route.path !== '/';
    },
  },
  methods: {
    async handleConnect() {
      await connectWallet();
    },
    openWalletDialog() {
      this.$refs.walletDialog.open();
    },
    toSubmit() {
      this.$router.push({
        path: '/submit',
      });
    },
    toHome() {
      if (!this.titleClickable) {
        return;
      }
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

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
      width: max-content;
    }
    &__title {
      width: max-content;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0.05rem;
      color: var(--primary);
    }
    &__title--clickable {
      cursor: pointer;
      transition: color 100ms ease;
    }
    &__title--clickable:hover {
      color: var(--primary-hover);
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
    &__wallet {
      display: inline-block;
      background-color: var(--component-bg);
      border-radius: 24px;
      padding: 12px 23px;
      margin-left: 14px;
      color: var(--regular-text);
      cursor: pointer;
    }
    &__wallet:hover {
      background-color: var(--component-hover-bg);
    }
    &__wallet:active {
      background-color: var(--component-active-bg);
    }
  }
}
</style>
