<template>
  <div id="contact" class="subject bound">
    <h2 class="text-xl border-b">
      <fa class="mr-2" :icon="faEnvelope" />問い合わせ
    </h2>
    <h3 class="text-sm text-gray-400">Contact</h3>
    <p>
      GitHubアカウントをお持ちの方は<a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/HMage123456/hmgemod/issues/new"
        class="link"
        >こちら</a
      >からお願いします。
    </p>
    <p>そうでない方は開発者のツイッターにお願いします。</p>
    <ul class="list-disc pl-8">
      <li>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/onim_en"
            class="link"
            >Onimen</a
          >
        </p>
      </li>
      <li>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/namiken1993"
            class="link"
            >Namiken</a
          >
        </p>
      </li>
    </ul>
  </div>
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
