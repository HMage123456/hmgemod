<template>
  <div id="commands" class="px-6 pb-16 bound">
    <h2 class="text-xl border-b">
      <fa class="mr-2" :icon="faTerminal" />コマンド
    </h2>
    <h3 class="text-sm text-gray-400">Commands</h3>
    <ul>
      <li class="pt-8">
        <h3 class="text-lg">プレイヤーの名前変更履歴を見る</h3>
        <h4 class="text-xs text-gray-400">
          Username history of the player
        </h4>
        <div class="pl-4">
          <code class="bg-gray-300 rounded px-2">/name [player name]</code>
          <p>
            <code class="bg-gray-300 rounded px-2">[player name]</code
            >には調べたいプレイヤーのユーザーネームを代入します
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      faTerminal
    };
  }
};
</script>
