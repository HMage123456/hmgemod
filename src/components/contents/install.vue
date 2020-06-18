<template>
  <div id="install" class="subject bound">
    <h2 class="text-xl border-b">インストール</h2>
    <h3 class="text-sm text-gray-400">Install</h3>
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
    <div class="py-8">
      <x-download :isLatest="false">Download</x-download>
    </div>
  </div>
</template>
<script>
export default {};
</script>
