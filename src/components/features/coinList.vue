<template>
  <table class="coin-list">
    <thead class="coin-list-header">
      <tr>
        <th class="coin-list-header__item" v-for="header in displayHeaders" :key="header">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="coin-list-body">
      <tr v-for="(row, index) in data" :key="row.contract">
        <td class="coin-list-item coin-list-item--index">{{ index + indexOffset }}</td>
        <td class="coin-list-item coin-list-item--logo">
          <img :src="row.logo" v-if="row.logo" />
          <div class="coin-list-item--logo__placeholder" v-else>
            <Coin />
          </div>
        </td>
        <td class="coin-list-item coin-list-item--name">{{ row.name }}</td>
        <td class="coin-list-item coin-list-item--chain">
          <span>
            {{ row.chain.toUpperCase() }}
          </span>
        </td>
        <td class="coin-list-item coin-list-item--symbol">{{ row.symbol }}</td>
        <td class="coin-list-item coin-list-item--marketcap">
          {{ row.marketcap ? `\$ ${row.marketcap}` : '-' }}
        </td>
        <td class="coin-list-item coin-list-item--price">
          {{ row.price ? `\$ ${row.price}` : '-' }}
        </td>
        <td class="coin-list-item coin-list-item--likes">{{ row.likes }}</td>
        <td class="coin-list-item coin-list-item--like">
          <el-button type="primary" round>❤ {{ $t('coin_list_like') }}</el-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Coin from '../icons/coin';

export default {
  props: {
    data: Array,
    indexOffset: {
      type: Number,
      default: 1,
    },
  },
  components: {
    Coin,
  },
  data() {
    return {
      headers: ['#', 'logo', 'name', 'chain', 'symbol', 'marketcap', 'price', 'likes', 'like'],
    };
  },
  computed: {
    displayHeaders() {
      return this.headers.map((header) => {
        if (header === '#') {
          return '#';
        } else if (header === 'logo' || header === 'like') {
          return '';
        }
        return this.$t(`coin_list_${header}`);
      });
    },
  },
};
</script>

<style lang="less">
.coin-list {
  width: 100%;
  border-spacing: 0;
  &-header {
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    color: var(--regular-text);
    text-shadow: var(--component-text-shadow) 0 2px 8px;
    user-select: none;
    th {
      padding: 8px;
      box-sizing: border-box;
    }
  }
  &-body {
    tr {
      height: 72px;
      vertical-align: middle;
      color: var(--regular-text);
      text-shadow: var(--component-text-shadow) 0 2px 6px;
      font-size: 20px;
      transition: background-color 50ms ease;
      .coin-list-item--index {
        width: 42px;
        user-select: none;
      }
      .coin-list-item--chain {
        user-select: none;
        span {
          display: block;
          background-color: --chain-tag-bg;
        }
      }
      .coin-list-item--logo {
        width: 84px;
        height: 72px;
        img {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          vertical-align: middle;
        }
        &__placeholder {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          vertical-align: middle;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--placeholder-bg);
          svg {
            width: 36px;
            height: 36px;
            fill: var(--placeholder--darker);
          }
        }
      }
      .coin-list-item--symbol {
        width: 88px;
      }
      .coin-list-item--chain {
        width: 88px;
        span {
          display: block;
          background: var(--chain-tag-bg);
          width: max-content;
          font-size: 16px;
          padding: 4px 12px;
          border-radius: 8px;
        }
      }
      .coin-list-item--marketcap {
        width: 164px;
      }
      .coin-list-item--price {
        width: 252px;
      }
      .coin-list-item--likes {
        width: 72px;
      }
      .coin-list-item--like {
        width: 128px;
        user-select: none;
        .el-button {
          font-size: 16px;
        }
      }
    }
    tr:hover {
      border-radius: 24px;
      background-color: var(--component-hover-bg);
      cursor: pointer;
    }
    tr:active {
      background-color: var(--component-active-bg);
    }
    td {
      padding-left: 8px;
      box-sizing: border-box;
    }
    td:first-child {
      border-radius: 18px 0 0 18px;
    }
    td:last-child {
      border-radius: 0 18px 18px 0;
    }
  }
}
</style>
