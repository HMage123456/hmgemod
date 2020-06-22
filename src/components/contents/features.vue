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
          id: "hide-recipe-book",
          icon: "",
          title: "レシピブックを表示しない",
          sub: "Hide recipe book in inventory",
          content: "サバイバルインベントリと作業台のレシピ本を削除します。"
        },
        {
          id: "fixed-fov",
          icon: "",
          title: "ステータス効果に影響されない視野",
          sub: "FOV unaffected by Status effect",
          content: "俊敏、鈍足の効果による視野への影響をなくします。"
        },
        {
          id: "custom-gui-bg",
          icon: "",
          title: "GUIの背景をカスタマイズ",
          sub: "Customize GUI background color",
          content: "GUIの背景色を好きな色に設定で決ます。"
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
          id: "status-effect",
          icon: "",
          title: "ステータス効果",
          sub: "Display information of your status effect",
          content:
            "アクティブなステータス効果のアイコンとその残り時間を表示します。"
        },
        {
          id: "equipment-info",
          icon: "",
          title: "装備の耐久、手に持っているアイテム",
          sub: "Display information of equipment and item in your hands",
          content: "装備の耐久や手に持っているアイテムの数を表示します。"
        },
        {
          id: "cps-counter",
          icon: "",
          title: "CPSをカウントする",
          sub: "Count and display your CPS",
          content: "自分のCPSを表示します。"
        },
        {
          id: "double-jump",
          icon: "",
          title: "ダブルジャンプのクールタイムを表示",
          sub:
            "Display cooltime of DoubleJump. (Only in annihilation and using acrobat)",
          content: "Annihilationでアクロバットをプレイ中のみ表示されます。"
        },
        {
          id: "kill-counter",
          icon: "",
          title: "キル数をカウントする",
          sub: "Display your kill count in the game. (Only in annihilation)",
          content:
            "そのゲームで自分が敵をキルした回数を表示します。(Anni中のみ)"
        },
        {
          id: "nexus-damage",
          icon: "",
          title: "ネクサスダメージをカウント",
          sub: "Display your nexus damage in the game. (Only in annihilation)",
          content:
            "そのゲームで自分がネクサスを削った回数を表示します。(Anni中のみ)"
        },
        {
          id: "layout-hud",
          icon: "",
          title: "HUDを自由にレイアウト",
          sub: "Lay out your HUD freely!",
          content: "上に紹介したHUDを自由にレイアウトできます。"
        },
        {
          id: "old-gui",
          icon: "",
          title: "古いテクスチャ",
          sub: "Old GUI",
          content:
            "スロットの位置を1.7.10時代のテクスチャに戻します。(クリエイティブインベントリ未対応)"
        }
      ];
      return data;
    },
    onclick(feature) {
      //console.log(feature.title);
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
