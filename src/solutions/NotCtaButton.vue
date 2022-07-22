<template>
  <button
    class="cta-button p-2 rounded t-title-s color-neutral-0
      color-bg-primary-80 cursor-pointer animated-slow"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins';

.cta-button {
    border: none;

    &:hover {
      @include color-bg-primary-100;
    }
}
</style>
