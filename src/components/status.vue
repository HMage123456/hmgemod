<template>
  <transition name="fade squash" appear>
    <div v-if="message" class="px-4 py-2">
      <x-link
        :url="'https://github.com/HMage123456/hmgemod/labels/fatal'"
        :new_tab="true"
      >
        <div
          class="flex items-center justify-between w-full bg-red-700 rounded-md cursor-pointer px-2"
        >
          <div class="text-center text-white flex-grow">
            {{ message }}
          </div>
          <div @click.prevent="close" class="p-2 text-white">
            <fa @click.prevent="close" :icon="faTimes" />
          </div>
        </div>
      </x-link>
    </div>
  </transition>
</template>
<script>
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      id: localStorage.getItem("hmage.fatal.id"),
      message: localStorage.getItem("hmage.fatal.title"),
      faTimes
    };
  },
  methods: {
    close() {
      this.message = null;
      localStorage.removeItem("hmage.fatal.title");
    }
  }
};
</script>
