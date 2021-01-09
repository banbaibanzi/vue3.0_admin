<template>
  <div>
    <a-menu
      v-model:openKeys="data.openKeys"
      v-model:selectedKeys="data.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in routes">
        <!-- 隐藏部分菜单 -->
        <template v-if="!item.hidden">
          <!-- 一级菜单 -->
          <a-menu-item v-if="!item.children" :key="item.path">
            {{ item.meta && item.meta.title }}
          </a-menu-item>
          <!-- 子级菜单 -->
          <a-sub-menu v-else :key="item.path">
            <template #title>
              <span
                ><span>{{ item.meta && item.meta.title }}</span></span
              >
            </template>
            <template v-if="item.children.length">
              <a-menu-item :key="child.path" v-for="child in item.children">{{
                child.meta && child.meta.title
              }}</a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { reactive } from "vue";
// 路由
import { useRouter } from "vue-router";
export default {
  name: "Aside",
  setup() {
    const { options } = useRouter();
    // 路由
    const routes = options.routes;
    // 数据
    const data = reactive({
      selectedKeys: ["1"],
      openKeys: ["/adminIndex"]
    });
    console.log(routes);
    return { data, routes };
  }
};
</script>

<style lang="scss" scoped></style>
