<template>
  <a class="cta-link t-title-s color-primary-80 cursor-pointer">
    <span><slot /></span>
    <img class="cta-link__icon m-l-1 animated" src="cta-link-icon.svg" alt="CTA link icon" />
  </a>
</template>

<style lang="scss" scoped>
@import '@/styles/token';

.cta-link {
    display: inline-flex;

    &:hover &__icon {
        @include m-l-2;
    }
}
</style>
