<template>
  <div class="hello-world">
    <div class="card rounded shadowed color-bg-neutral-0">
      <img
        class="w-full rounded-tr rounded-tl"
        src="image.png"
        alt="crazy norwegians"
      />

      <div class="p-3">
        <div class="t-caption color-ink-100">
          Crazy Norwegians
        </div>

        <div class="t-title-l m-t-1 color-ink-100">
          BATHING IN SPEEDOS IS GOOD FOR YOU
        </div>

        <div class="t-paragraph-m m-t-2 color-ink-100">
          You don’t believe us? Obviously, you’ve never experienced
          the tickling feeling of your naked butt touching the refreshing
          waterpools in Tromsø on a cold winter night.
        </div>

        <cta-button class="w-full m-t-3">
          Take me to Tromsø
        </cta-button>
      </div>
    </div>

    <div class="card rounded bordered p-1 color-bg-neutral-0">
      <img
        class="w-full rounded-embedded"
        src="image.png"
        alt="crazy norwegians"
      />

      <div class="p-2">
        <div class="t-caption color-ink-100">
          Crazy Norwegians
        </div>

        <div class="m-t-1 t-title-l color-ink-100">
          BATHING IN SPEEDOS IS GOOD FOR YOU
        </div>

        <div class="t-paragraph-m m-t-2 color-ink-100">
          You don’t believe us? Obviously, you’ve never experienced
          the tickling feeling of your naked butt touching the refreshing
          waterpools in Tromsø on a cold winter night.
        </div>

        <cta-link class="m-t-3">
          Take me to Tromsø
        </cta-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CtaButton from './CtaButton.vue';
import CtaLink from './CtaLink.vue';

export default defineComponent({
  name: 'HelloWorld',
  components: {
    CtaButton,
    CtaLink,
  },
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
.hello-world {
  display: flex;
  align-items: flex-start;
}

.card {
  margin-right: 40px;
  width: 350px;
}
</style>
