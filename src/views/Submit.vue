<template>
  <div class="page-main page-submit">
    <div class="page-main-section submit-form">
      <div class="submit-form-header">
        <div class="submit-form-header__title">
          <span>{{ $t('submit_coin') }}</span>
        </div>
        <div class="submit-form-header__desc">
          <span v-html="displayDesc"></span>
        </div>
      </div>
      <div class="submit-form-body">
        <el-form :model="submit" label-position="left" label-width="160px">
          <div class="submit-form-body__top">
            <div class="submit-form__logo">
              <LogoUploader />
            </div>
            <div class="submit-form__base">
              <el-form-item :label="$t('submit_name')">
                <el-input v-model="submit.name"></el-input>
              </el-form-item>
              <el-form-item label="Symbol">
                <el-input v-model="submit.symbol"></el-input>
              </el-form-item>
              <el-form-item :label="$t('submit_chain')">
                <el-select v-model="submit.chain">
                  <el-option
                    v-for="item in chains"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>
          <el-form-item :label="$t('submit_contract')">
            <el-input v-model="submit.contract"></el-input>
          </el-form-item>
          <el-form-item :label="$t('submit_minting_date')">
            <el-date-picker v-model="submit.mintingDate"></el-date-picker>
          </el-form-item>
          <el-form-item :label="$t('submit_shortdesc_en')">
            <el-input v-model="submit.shortDesc.en"></el-input>
          </el-form-item>
          <el-form-item :label="$t('submit_shortdesc_cn')">
            <el-input v-model="submit.shortDesc['zh-CN']"></el-input>
          </el-form-item>
          <el-form-item :label="$t('submit_desc_en')">
            <el-input type="textarea" :rows="6" v-model="submit.desc.en"></el-input>
          </el-form-item>
          <el-form-item :label="$t('submit_desc_cn')">
            <el-input type="textarea" :rows="6" v-model="submit.desc['zh-CN']"></el-input>
          </el-form-item>
          <el-form-item :label="$t('submit_whitepaper')">
            <el-input v-model="submit.whitepaper"></el-input>
          </el-form-item>
          <el-form-item :label="$t('submit_website')">
            <el-input v-model="submit.website"></el-input>
          </el-form-item>
          <el-form-item label="Telegram">
            <el-input v-model="submit.telegram"></el-input>
          </el-form-item>
          <el-form-item label="Twitter">
            <el-input v-model="submit.twitter"></el-input>
          </el-form-item>
          <el-form-item label="Discord">
            <el-input v-model="submit.discord"></el-input>
          </el-form-item>
          <el-button type="primary" round>{{ $t('submit') }}</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LogoUploader from '../components/features/logoUploader';

const DEFAULT_SUBMIT = {
  name: '',
  chain: 'eth',
  contract: '',
  whitepaper: '',
  mintingDate: null,
  website: '',
  telegram: '',
  twitter: '',
  discord: '',
  shortDesc: {
    'zh-CN': '',
    en: '',
  },
  desc: {
    'zh-CN': '',
    en: '',
  },
};

const CHAINS = {
  eth: 'Ethereum Mainnet (ETH)',
  bsc: 'Binance Smart Chain (BSC)',
  heco: 'Huobi ECO Chain (HECO)',
  tron: 'Tron (TRX)',
  polygon: 'Polygon Chain (MATIC)',
};

export default {
  components: {
    LogoUploader,
  },
  data() {
    return {
      submit: Object.assign({}, DEFAULT_SUBMIT),
      chains: Object.keys(CHAINS).map((chain) => {
        return {
          label: CHAINS[chain],
          value: chain,
        };
      }),
    };
  },
  computed: {
    ...mapGetters('locale', ['currentLocale']),
    displayDesc() {
      return this.$t('submit_desc').replace(/\n/g, '<br>');
    },
  },
};
</script>

<style lang="less">
.page-submit {
  .submit-form {
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
        margin-bottom: 16px;
      }
      &__desc {
        margin-bottom: 32px;
        color: var(--regular-text);
        font-size: 16px;
        text-shadow: var(--component-text-shadow) 0 2px 16px;
      }
    }
    &-body {
      &__top {
        display: flex;
        .submit-form__logo {
          margin-right: 36px;
        }
        .submit-form__base {
          flex: 1;
          .el-form-item__label {
            width: 96px !important;
          }
          .el-form-item__content {
            margin-left: 96px !important;
          }
        }
      }
      .el-form-item {
        .el-form-item__label {
          font-size: 16px;
          text-shadow: var(--component-text-shadow) 0 0 4px;
          user-select: none;
        }
        .el-form-item__content {
          .el-input {
            font-size: 16px;
          }
          .el-input--prefix {
            input {
              padding-left: 32px;
            }
          }
          .el-textarea {
            textarea {
              font-size: 16px;
            }
          }
        }
      }
      .el-button {
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        margin-top: 8px;
      }
    }
  }
}
</style>
