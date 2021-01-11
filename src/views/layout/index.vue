<template>
  <div>
    <a-layout id="layout_main">
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
        width="255"
      >
        <LayoutAside :collapsed="collapsed" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <LayoutHeader @collapsed="toggleCollapsed" />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', minHeight: '280px' }"
        >
          <LayoutMain />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import LayoutMain from "./components/Main";
import LayoutHeader from "./components/Header";
import LayoutAside from "./components/aside/index";
import { reactive, toRefs } from "vue";
export default {
  name: "Layout",
  components: { LayoutMain, LayoutHeader, LayoutAside },
  setup() {
    // 数据
    const data = reactive({
      collapsed: JSON.parse(localStorage.getItem("collapsed"))
    });
    // 展开/折叠菜单
    const toggleCollapsed = () => {
      const bool = !data.collapsed;
      data.collapsed = bool;
      localStorage.setItem("collapsed", bool);
    };
    return { ...toRefs(data), toggleCollapsed };
  }
};
</script>

<style lang="scss">
#layout_main {
  height: 100vh;
}
</style>
