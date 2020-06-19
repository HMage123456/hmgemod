<template>
  <div class="subject bound">
    <h2 class="text-xl border-b">
      <fa class="mr-2" :icon="icon" />
      <slot name="title"></slot>
    </h2>
    <h3 class="text-sm text-gray-400 pb-4">
      <slot name="sub"></slot>
    </h3>
    <div class="lg:pl-4">
      <slot name="sentence"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["icon"]
};
</script>
