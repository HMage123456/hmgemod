<template>
  <div
    id="app"
    class="text-base antialiased tracking-normal leading-relaxed text-gray-600 font-sawarabi min-h-screen"
  >
    <x-header></x-header>
    <div
      id="container"
      class="w-full max-w-screen-xl relative mx-auto pt-16 lg:px-16 z-0"
    >
      <div class="lg:flex flex-row">
        <x-sidebar></x-sidebar>
        <x-content />
      </div>
    </div>
    <x-footer></x-footer>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
<style src="./assets/tailwind.css"></style>
