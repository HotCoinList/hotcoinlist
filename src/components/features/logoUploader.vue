<template>
  <div class="logo-uploader">
    <span>{{ $t('upload_logo') }}</span>
  </div>
</template>

<style lang="less">
.logo-uploader {
  border: 2px dashed var(--regular-text);
  border-radius: 16px;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  transition: border-color 100ms ease;
  span {
    font-size: 18px;
    font-weight: 600;
    color: var(--regular-text);
  }
}
.logo-uploader:hover {
  border: 2px dashed var(--primary);
}
</style>
