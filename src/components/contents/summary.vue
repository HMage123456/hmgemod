<template>
  <x-subject :id="id" :icon="faPen">
    <span slot="title">概要</span>
    <span slot="sub">Summary</span>
    <div slot="sentence">
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
  </x-subject>
</template>
<script>
import { faPen } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      id: "summary",
      faPen
    };
  }
};
</script>
