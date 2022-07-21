<template>
  <button
    class="cta-button p-2 rounded t-title-s color-neutral-0
      color-bg-primary-80 cursor-pointer animated-slow"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.cta-button {
    border: none;

    &:hover {
      background-color: #891B55;
    }
}
</style>
