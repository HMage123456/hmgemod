<template>
  <x-subject id="commands" :icon="faTerminal">
    <span slot="title">コマンド</span>
    <span slot="sub">Commands</span>
    <div slot="sentence">
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
  </x-subject>
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
