<template>
  <div>
    <!--  -->
    <a-layout id="layout_main">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <LayoutAside />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <LayoutHeader />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
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
import LayoutAside from "./components/Aside";
export default {
  name: "Layout",
  components: { LayoutMain, LayoutHeader, LayoutAside }
};
</script>

<style lang="scss">
#layout_main {
  height: 100vh;
}
</style>
