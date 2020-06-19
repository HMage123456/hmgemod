<template>
  <a :href="download_url">
    <button
      :disabled="download_url == null"
      id="download"
      class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-normal my-2 py-4 px-6 rounded inline-flex items-center focus:outline-none"
    >
      <fa class="text-2xl mr-2" :icon="faAngleDown" />
      <div>
        <span class="text-lg block leading-tight">{{ button_text }}</span>
        <span class="text-sm text-gray-500 block leading-tight">{{
          button_text_sub
        }}</span>
      </div>
    </button>
  </a>
</template>
<script>
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default {
  props: ["isLatest"],
  data() {
    return {
      button_text: this.isLatest
        ? "最新版をダウンロード"
        : "安定版をダウンロード",
      button_text_sub: this.isLatest
        ? "Download latest version"
        : "Download stable version",
      download_url: localStorage.getItem(this.$root.get_url_key(this.isLatest)),
      faAngleDown
    };
  }
};
</script>
