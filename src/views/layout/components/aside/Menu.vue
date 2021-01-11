<template>
  <a-sub-menu :key="menu.path">
    <template #title>
      <span class="anticon">
        <svg-icon
          :iconName="menu.meta && menu.meta.icon"
          className="aside-svg"
        />
      </span>
      <span> {{ menu.meta && menu.meta.title }}</span>
    </template>
    <template v-if="menu.children.length">
      <template v-for="child in menu.children">
        <!-- 不存在子级的栏目 -->
        <a-menu-item v-if="!child.children" :key="child.path">
          <router-link :to="child.path">{{
            child.meta && child.meta.title
          }}</router-link>
        </a-menu-item>
        <!-- 存在子级栏目 -->
        <Menu v-else :menu="child" :key="child.path" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "Menu",
  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.aside_menu {
  i.icon {
    margin-right: 5px;
    opacity: 0.6;
  }
  .ant-menu-submenu-open {
    > div {
      i.icon {
        opacity: 1;
      }
    }
  }
}
</style>
