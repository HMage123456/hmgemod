<template>
  <x-subject id="features" :icon="faPalette">
    <span slot="title">特徴</span>
    <span slot="sub">Features</span>
    <div slot="sentence">
      <p>
        ゲーム中に「P」キーを押すことでメニューを開くことができます。
        メニューの詳細は以下の通りです。
      </p>
      <div class="flex flex-row flex-wrap items-center justify-center">
        <div
          v-for="feature in features_data"
          :key="feature.id"
          class="p-2 w-full sm:w-1/2 xl:w-1/3"
        >
          <div
            @click="onclick(feature)"
            class="p-4 rounded-md shadow-md h-48 overflow-y-hidden white-out cursor-pointer"
          >
            <img :src="feature.icon" />
            <h3 class="text-base text-center">{{ feature.title }}</h3>
            <h4 class="text-xs text-center text-gray-400">{{ feature.sub }}</h4>
            <div class="pl-4">
              <p>{{ feature.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </x-subject>
</template>
<script>
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import XFeaturePopup from "../feature-popup.vue";

export default {
  data() {
    return {
      features_data: this.get_features_data(),
      faPalette
    };
  },
  methods: {
    get_features_data() {
      const data = [
        {
          id: "match-history",
          icon: "",
          title: "試合履歴を閲覧",
          sub: "Match History",
          content:
            "自分が参加したAnnihilationのゲームの履歴を見ることができます。"
        },
        {
          id: "minecraft-utils",
          icon: "",
          title: "より良いマイクラ・ライフ",
          sub: "Utilities for Minecraft",
          content:
            "GUIからレシピ本を削除したり、GUIの背景色を好きな色に変えたりすることができます。"
        },
        {
          id: "colored-aromor",
          icon: "",
          title: "攻撃した敵をわかりやすく",
          sub: "Color the armor of an attacked enemy",
          content:
            "自分が攻撃した敵の防具に色が付きます。もちろん好きな色に設定できます！"
        },
        {
          id: "huds",
          icon: "",
          title: "様々なHUD",
          sub: "Various useful HUDs",
          content:
            "ステータス効果の残り時間や装備の耐久、CPSを画面に表示します。自由にレイアウトを決めることもできます。"
        },
        {
          id: "anni-utils",
          icon: "",
          title: "Annihilation向けの機能",
          sub: "Features for Annihilation",
          content:
            "現在のキル数やネクサスダメージ、ダブルジャンプのクールタイムを画面に表示します。"
        },
        {
          id: "old-gui",
          icon: "",
          title: "古いテクスチャ",
          sub: "Old GUI",
          content:
            "スロットの位置を1.7.10時代のテクスチャに戻します。(クリエイティブインベントリ未対応)"
        },
        {
          id: "discord-rpc",
          icon: "",
          title: "プレイ中のAnnihilationをDiscordに",
          sub: "Send data of playing annihilation to Discord",
          content:
            "プレイ中の試合のマップやフェーズ、色をDiscordに送ります。フレンドと一緒にプレイするとき、いちいち聞かれなくなります。(要出典)"
        }
      ];
      return data;
    },
    onclick(feature) {
      this.$root.new(XFeaturePopup, { feature });
    }
  }
};
</script>
<style scoped>
.white-out {
  position: relative;
}

.white-out::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent 0%, transparent 50%, white 100%);
  z-index: 10;
}
</style>
