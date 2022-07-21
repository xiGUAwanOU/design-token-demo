<template>
  <a class="cta-link t-title-s color-primary-80 cursor-pointer">
    <span><slot /></span>
    <img class="cta-link__icon m-l-1 animated" src="/cta-link-icon.svg" alt="CTA link icon" />
  </a>
</template>

<style lang="scss" scoped>
.cta-link {
    display: inline-flex;

    &:hover &__icon {
        transform: translate(8px, 0);
    }
}
</style>
