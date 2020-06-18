<template>
  <div id="summary" class="subject bound">
    <h2 class="text-xl border-b"><fa class="mr-2" :icon="faPen" />概要</h2>
    <h3 class="text-sm text-gray-400 pb-4">Summary</h3>
    <p>
      HMage ModはShotbowのAnnihilationを有意義に遊ぶためのModです。
      ノックバックの調整やエイムアシストなどの、PVPが有利になる機能は一切実装されていません。
      詳細な機能については、
      <a href="#features" class="link">特徴</a>
      を御覧ください。
    </p>
    <p>
      また、HMage ModはMinecraft1.12.2のForge
      Modです。Forge以外のClientでは利用することができません。
    </p>
    <img id="screenshots" class="pt-6" src="screenshots.png" />
  </div>
</template>
<script>
import { faPen } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      faPen
    };
  }
};
</script>
