<template>
  <div :id="id" class="subject bound">
    <h2 class="text-xl border-b" slot="headline">
      <fa class="mr-2" :icon="faPen" />概要
    </h2>
    <h3 class="text-sm text-gray-400 pb-4" slot="sub">Summary</h3>
  </div>
</template>
<script>
export default {
  props: ["id"]
};
</script>
