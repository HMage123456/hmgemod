<template>
  <a
    class="link"
    :href="url"
    :target="new_tab ? '_blank' : '_self'"
    rel="noopener noreferrer"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: ["url", "new_tab"]
};
</script>
