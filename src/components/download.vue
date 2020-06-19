<template>
  <a :href="download_url">
    <button
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      @click="clicked"
      :disabled="download_url == null"
      id="download"
      class="bg-gray-300 hover:bg-gray-400 text-gray-600 my-2 py-4 px-6 rounded inline-flex items-center focus:outline-none"
    >
      <div class="mr-2">
        <fa class="text-2xl" :icon="faCloudDownloadAlt" />
      </div>
      <div>
        <span class="text-lg block leading-tight">{{ button_text }}</span>
        <span class="text-sm text-gray-500 block leading-tight">
          {{ display_text_sub }}
        </span>
      </div>
    </button>
  </a>
</template>
<script>
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
export default {
  props: ["isLatest"],
  data() {
    return {
      hovered: false,
      button_text: this.isLatest
        ? "最新版をダウンロード"
        : "安定版をダウンロード",
      button_text_sub: this.isLatest
        ? "Download latest version"
        : "Download stable version",
      download_url: localStorage.getItem(this.$root.get_url_key(this.isLatest)),
      download_count: localStorage.getItem(
        this.$root.get_url_key(this.isLatest) + ".download_count"
      ),
      faCloudDownloadAlt
    };
  },
  computed: {
    display_text_sub() {
      return this.hovered
        ? `${this.download_count} times`
        : this.button_text_sub;
    }
  },
  methods: {
    clicked() {
      this.download_count++;
      localStorage.setItem(
        this.$root.get_url_key(this.isLatest) + ".download_count",
        this.download_count
      );
    }
  }
};
</script>
