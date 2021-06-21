<template>
  <el-dialog
    class="wallet-dialog"
    :title="$t('wallet_connected')"
    :visible.sync="show"
    append-to-body
  >
    <div class="wallet-dialog__address">
      {{ displayAddress }}
    </div>
    <div class="wallet-dialog__action">
      <el-button type="primary" round @click="handleDisconnect">
        {{ $t('wallet_disconnect') }}
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
import { disconnectWallet } from '../../utils/walletConnect';

export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters('wallet', ['walletAddress']),
    displayAddress() {
      return `${this.$t('wallet_address')}: ${this.walletAddress}`;
    },
  },
  methods: {
    async handleDisconnect() {
      await disconnectWallet();
      this.show = false;
    },
    open() {
      this.show = true;
    },
  },
};
</script>

<style lang="less">
.wallet-dialog {
  &__address {
    font-size: 16px;
  }
  &__action {
    .el-button {
      width: 100%;
      margin-top: 16px;
    }
  }
}
</style>
