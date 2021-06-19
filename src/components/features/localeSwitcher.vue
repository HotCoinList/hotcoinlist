<template>
  <div class="page-footer__i18n">
    <el-dropdown @command="handleCommand" size="small" placement="top" trigger="click">
      <div class="i18n">
        <Earth />
        <span>{{ currentLocale }}</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh-CN">{{ $t('zh_CN') }}</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Earth from '../icons/earth';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    Earth,
  },
  computed: {
    ...mapGetters('locale', ['currentLocale']),
  },
  methods: {
    ...mapMutations('locale', ['setLocale']),
    handleCommand(command) {
      this.setLocale(command);
      this.$i18n.locale = command;
    },
  },
};
</script>

<style lang="less">
.page-footer__i18n {
  .i18n {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 100ms ease;
    margin-top: 8px;
    user-select: none;
    svg {
      display: block;
      fill: var(--secondary-text);
    }
    span {
      display: block;
      margin-top: 2px;
      margin-left: 4px;
    }
  }
  .i18n:hover {
    svg {
      fill: var(--primary-text);
    }
    span {
      color: var(--primary-text);
    }
  }
}
</style>
