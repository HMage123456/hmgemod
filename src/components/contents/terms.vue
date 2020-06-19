<template>
  <x-subject id="terms" :icon="faBookmark">
    <span slot="title">規約</span>
    <span slot="sub">Terms</span>
    <div slot="sentence">
      <ol class="w-1/2">
        <li class="flex justify-between pb-6">
          <x-link :new_tab="true" :url="'https://github.com/Oni-Men/HMage'">
            ソースコード
          </x-link>
          <x-link
            :new_tab="true"
            :url="
              'https://github.com/BuildCraft/BuildCraft/blob/6.1.x/buildcraft_resources/LICENSE.txt'
            "
          >
            MMPL-1.0
          </x-link>
        </li>
        <li class="flex justify-between">
          <p>リソース(assets)</p>
          <p class="text-base">
            <fa :icon="faCreativeCommons" />
            <fa :icon="faCreativeCommonsBy" />
            <fa :icon="faCreativeCommonsNc" />
          </p>
        </li>
      </ol>
    </div>
  </x-subject>
</template>
<script>
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc
} from "@fortawesome/free-brands-svg-icons";
export default {
  data() {
    return {
      faBookmark,
      faCreativeCommons,
      faCreativeCommonsBy,
      faCreativeCommonsNc
    };
  }
};
</script>
