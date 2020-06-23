<template>
  <a :href="download_url">
    <button
      @mouseover="mouseovered()"
      @mouseleave="hovered = false"
      @click="clicked"
      id="download"
      class=" bg-gray-300 hover:bg-gray-400 text-gray-600 my-2 py-4 px-6 rounded-md shadow-md inline-flex items-center focus:outline-none"
    >
      <div class="mr-2">
        <fa class="text-2xl" :icon="faCloudDownloadAlt" />
      </div>
      <div>
        <span class="text-lg block leading-tight">{{ button_text }}</span>
        <div
          class="text-sm text-gray-500 block leading-tight text-center w-full h-6"
        >
          <span v-if="!hovered">
            {{ button_text_sub }}
          </span>
          <span v-if="hovered">
            {{ download_count + " downloads" }}
          </span>
        </div>
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
      download_url: localStorage.getItem(
        this.$root.get_storage_key(this.isLatest, { type: "url" })
      ),
      download_count: localStorage.getItem(
        this.$root.get_storage_key(this.isLatest, { type: "count" })
      ),
      faCloudDownloadAlt
    };
  },
  methods: {
    clicked() {
      this.download_count++;
      localStorage.setItem(
        this.$root.get_storage_key(this.isLatest, { type: "count" }),
        this.download_count
      );
    },
    mouseovered() {
      this.hovered = true;
      this.download_url = localStorage.getItem(
        this.$root.get_storage_key(this.isLatest, { type: "url" })
      );
      this.download_count = localStorage.getItem(
        this.$root.get_storage_key(this.isLatest, { type: "count" })
      );
    }
  }
};
</script>
