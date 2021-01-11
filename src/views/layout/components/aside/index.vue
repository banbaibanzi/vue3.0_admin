<template>
  <div>
    <h1 id="logo">
      <img v-if="collapsed" :src="data.logo_min" alt="logo" />
      <img v-else :src="data.logo" alt="logo" />
    </h1>
    <a-menu
      class="aside_menu"
      v-model:openKeys="data.openKeys"
      v-model:selectedKeys="data.selectedKeys"
      mode="inline"
      theme="dark"
      @click="selectMenu"
      @openChange="openMenu"
    >
      <template v-for="item in routes">
        <template v-if="!item.hidden">
          <!-- 一级菜单 -->
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">
              <span class="anticon">
                <svg-icon
                  :iconName="item.meta && item.meta.icon"
                  className="aside-svg"
                />
              </span>
              <span> {{ item.meta && item.meta.title }}</span>
            </router-link>
          </a-menu-item>
          <!-- 子级菜单 -->
          <Menu v-else :menu="item" :key="item.path" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { reactive } from "vue";
// 路由
import { useRouter } from "vue-router";
// 组件
import Menu from "./Menu";
export default {
  name: "Aside",
  components: { Menu },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { options } = useRouter();
    // 路由
    const routes = options.routes;
    // 数据
    const data = reactive({
      selectedKeys: localStorage.getItem("selectedKeys")
        ? [localStorage.getItem("selectedKeys")]
        : [],
      openKeys: localStorage.getItem("openKeys")
        ? JSON.parse(localStorage.getItem("openKeys"))
        : [],
      logo: require("@/assets/images/logo.png"),
      logo_min: require("@/assets/images/logo_min.png")
    });
    // 选择菜单
    const selectMenu = ({ key }) => {
      data.selectedKeys = [key];
      localStorage.setItem("selectedKeys", key);
    };
    // 展开/关闭菜单
    const openMenu = openKeys => {
      data.openKeys = openKeys;
      localStorage.setItem("openKeys", JSON.stringify(openKeys));
    };
    return { data, routes, selectMenu, openMenu };
  }
};
</script>

<style lang="scss" scoped>
#logo {
  padding: 24px 0 20px;
  border-bottom: 1px solid #000;
  text-align: center;
  img {
    display: inline-block;
  }
}
.aside_menu {
  i.icon {
    margin-right: 5px;
    opacity: 0.6;
  }
  .ant-menu-item-selected {
    i.icon {
      opacity: 1;
    }
  }
}
</style>
