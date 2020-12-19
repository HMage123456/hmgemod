<template>
  <x-subject id="install" :icon="faDownload">
    <span slot="title">インストール</span>
    <span slot="sub">Install</span>
    <div slot="sentence">
      <ol class="list-decimal list-inside">
        <li>
          Forge 1.12.2がインストールされていることを確認してください。
        </li>
        <li>
          ダウンロードボタンからMODファイルをダウンロードしてください。
        </li>
        <li>
          ダウンロードしたMODファイルを<code class="bg-gray-300 rounded px-2"
            >mods</code
          >フォルダに配置してください。
        </li>
      </ol>
      <p>また、専用のディレクトリを作成することを推奨します。</p>
      <div class="flex justify-end py-8 w-1/2">
        <x-download />
      </div>
    </div>
  </x-subject>
</template>
<script>
import { faDownload } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      faDownload
    };
  }
};
</script>
