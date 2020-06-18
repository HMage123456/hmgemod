<template>
  <div
    id="sidebar"
    class="hidden fixed inset-0 pt-16 h-full bg-white z-10 w-full lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5"
  >
    <div
      id="nav"
      class="h-full overflow-y-auto scrolling-touch lg:sticky lg:top-16 lg:h-auto lg:block bg-white lg:bg-transparent"
    >
      <ul class="px-8 overflow-y-auto">
        <li class="pt-4" v-for="content in contents" :key="content.id">
          <a
            :href="addPrefix(content.id)"
            class="text-lg text-gray-600 hover:text-gray-400"
            >{{ content.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contents: [
        {
          id: "summary",
          name: "概要"
        },
        {
          id: "features",
          name: "特徴"
        },
        {
          id: "commands",
          name: "コマンド"
        },
        {
          id: "terms",
          name: "規約"
        },
        {
          id: "install",
          name: "インストール"
        },
        {
          id: "contact",
          name: "問い合わせ"
        }
      ]
    };
  },
  methods: {
    addPrefix(str) {
      return "#" + str;
    }
  }
};
</script>
