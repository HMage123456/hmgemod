<template>
  <div
    ref="app"
    id="app"
    class="text-base antialiased tracking-normal leading-relaxed text-gray-600 min-h-screen"
  >
    <x-header />
    <div
      id="container"
      class="w-full max-w-screen-xl relative mx-auto pt-16 lg:px-16 z-0"
    >
      <div class="lg:flex flex-row">
        <x-sidebar />
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
