<template>
  <x-subject id="features" :icon="faPalette">
    <span slot="title">特徴</span>
    <span slot="sub">Features</span>
    <div slot="sentence">
      <p>
        ゲーム中に「P」キーを押すことでメニューを開くことができます。
        メニューの詳細は以下の通りです。
      </p>
      <ul class="list-inside pl-4">
        <li class="pt-8">
          <h3 class="text-lg">試合履歴を閲覧</h3>
          <h4 class="text-xs text-gray-400">Match History</h4>
          <div class="pl-4">
            <p>
              自分が参加したAnnihilationのゲームの履歴を見ることができます。
            </p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">レシピブックを表示しない</h3>
          <h4 class="text-xs text-gray-400">
            Hide Recipe book in inventory
          </h4>
          <div class="pl-4">
            <p>サバイバルインベントリと作業台からレシピブックを削除します。</p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">ステータス効果に影響されない視野</h3>
          <h4 class="text-xs text-gray-400">FOV unaffected by Status effect</h4>
          <div class="pl-4">
            <p>俊敏と鈍足の効果による視野への影響をなくします。</p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">GUIの背景をカスタマイズ</h3>
          <h4 class="text-xs text-gray-400">Customize GUI background</h4>
          <div class="pl-4">
            <p>GUIの背景色を好きな色にカスタマイズできます。</p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">攻撃した敵を分かりやすく</h3>
          <h4 class="text-xs text-gray-400">
            Color the armor of an attacked enemy
          </h4>
          <div class="pl-4">
            <p>
              攻撃した敵の防具に色がつきます。もちろん好きな色に設定できます!
            </p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">ステータス効果</h3>
          <h4 class="text-xs text-gray-400">
            Overlay the active status effect
          </h4>
          <div class="pl-4">
            <p>アクティブなステータス効果とその残り時間を表示します。</p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">装備の耐久、手に持っているアイテム</h3>
          <h4 class="text-xs text-gray-400">
            Durability of equipment and item in your hands
          </h4>
          <div class="pl-4">
            <p>
              装備している防具や持っているアイテムの耐久、手に持っているアイテムの合計数を表示します。
            </p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">CPSをカウントする</h3>
          <h4 class="text-xs text-gray-400">Count and show your CPS</h4>
          <div class="pl-4">
            <p>
              あなたのCPSを表示します。
            </p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">ダブルジャンプのクールタイムを表示</h3>
          <h4 class="text-xs text-gray-400">
            Show cooltime of DoubleJump. Avaiable when you using Acrobat in
            Annihilation
          </h4>
          <div class="pl-4">
            <p>
              Annihilationでアクロバットを使用中のみ表示されます。
            </p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">キル数をカウントする</h3>
          <h4 class="text-xs text-gray-400">
            Show your kill count in the game. Avaiable when you playing
            Annihilation
          </h4>
          <div class="pl-4">
            <p>
              そのゲームでキルした回数を表示します。Annihilationをプレイ中のみ表示されます。
            </p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">ネクサスダメージをカウント</h3>
          <h4 class="text-xs text-gray-400">
            Show your nexus damage in the game. Avaiable when you playing
            Annihilation
          </h4>
          <div class="pl-4">
            <p>
              そのゲームで敵ネクサスに与えたダメージを表示します。Annihilationをプレイ中のみ表示されます。
            </p>
          </div>
        </li>
        <li class="pt-8">
          <h3 class="text-lg">HUDを自由にレイアウト</h3>
          <h4 class="text-xs text-gray-400">
            Layout your HUD freely
          </h4>
          <div class="pl-4">
            <p>
              以上のHUDを自由に配置できます。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </x-subject>
</template>
<script>
import { faPalette } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      faPalette
    };
  }
};
</script>
