<template>
  <div
    id="header"
    class="flex bg-white fixed top-0 left-0 w-full h-16 items-center justify-center inset-x-0 border-b z-50 items-center justify-center lg:justify-start"
  >
    <div
      class="flex flex-row items-center justify-between w-full max-w-screen-xl relative mx-auto px-24"
    >
      <div id="logo" class="w-auto">
        <h1
          class="text-2xl font-black tracking-widest text-center lg:text-left"
        >
          <a href="/hmgemod">HMage Mod</a>
        </h1>
      </div>
      <div id="github" class="hidden lg:block">
        <a href="https://github.com/Oni-Men/HMage">
          <fa class="text-2xl text-gray-500" :icon="faGithub" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default {
  data() {
    return {
      faGithub
    };
  }
};
</script>
