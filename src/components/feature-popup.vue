<template>
  <transition name="fade" @after-leave="destroyDom()" appear>
    <div
      ref="bg"
      v-if="show"
      class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center"
      @click.self="close"
    >
      <transition name="popup" appear>
        <div
          class="bg-white p-12 rounded-md w-2/3 lg:w-1/3 xl:w-1/5 origin-top origin-center"
        >
          <img :src="feature.icon" />
          <h3 class="text-base text-center">{{ feature.title }}</h3>
          <h4 class="text-xs text-center text-gray-400">{{ feature.sub }}</h4>
          <div class="pl-4">
            <p>{{ feature.content }}</p>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  props: ["feature"],
  data() {
    return {
      show: true
    };
  },
  methods: {
    close() {
      this.show = false;
      if (this.$refs.bg) this.$refs.bg.style.pointerEvents = "none";
    }
  }
});
</script>
<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s, transform 0.3s !important;
}

.popup-enter,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
