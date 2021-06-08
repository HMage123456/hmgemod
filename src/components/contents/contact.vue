<template>
  <x-subject id="contact" :icon="faEnvelope">
    <span slot="title">問い合わせ</span>
    <span slot="sub">Contact</span>
    <div slot="sentence">
      <p>
        GitHubアカウントをお持ちの方は
        <x-link
          :new_tab="true"
          :url="'https://github.com/HMage123456/hmgemod/issues/new'"
        >
          こちら
        </x-link>
        からお願いします。
      </p>
      <p>そうでない方は開発者のツイッターにお願いします。</p>
      <ul class="list-disc pl-8">
        <li>
          <x-link :new_tab="true" :url="'https://twitter.com/namiken1993'">
            Namiken
          </x-link>
        </li>
      </ul>
    </div>
  </x-subject>
</template>
<script>
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      faEnvelope
    };
  }
};
</script>
