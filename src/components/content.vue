<template>
  <div
    id="content"
    class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
  >
    <x-status />
    <div class="text-center lg:pt-16 lg:pb-12">
      <div id="slogan">
        <p class="text-3xl ">{{ slogan }}</p>
        <p class="text-base text-gray-400">{{ slogan_sub }}</p>
      </div>
      <div class="py-8">
        <x-download :isLatest="false" class="mx-4" />
        <x-download :isLatest="true" class="mx-4" />
        <x-link
          :href="'https://github.com/HMage123456/hmgemod/releases'"
          :new_tab="true"
        >
          <p class="pt-4">全てのリリースはこちらから</p>
        </x-link>
      </div>
    </div>
    <x-summary />
    <x-features />
    <x-commands />
    <x-terms />
    <x-install />
    <x-contact />
  </div>
</template>

<script>
import XStatus from "./status.vue";
import XSummary from "./contents/summary.vue";
import XFeatures from "./contents/features.vue";
import XCommands from "./contents/commands.vue";
import XTerms from "./contents/terms.vue";
import XInstall from "./contents/install.vue";
import XContact from "./contents/contact.vue";

export default {
  components: {
    XStatus,
    XSummary,
    XFeatures,
    XCommands,
    XTerms,
    XInstall,
    XContact
  },
  data() {
    return {
      chassmode: Math.random() < 0.079,
      slogan: this.chassmode ? "ﾁｬｽﾓﾊｧｰﾜ｣｡" : "日本人は HMage で圧倒的成長",
      slogan_sub: this.chassmode
        ? "CHASSMOHAUA"
        : "NIHONJIN HA HMAGE DE ATTOTEKI SEICHO"
    };
  }
};
</script>
