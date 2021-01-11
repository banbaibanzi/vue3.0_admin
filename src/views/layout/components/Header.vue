<template>
  <div id="header">
    <div class="collapsed_btn" @click="collapsedBtn">
      <svg-icon iconName="collapsed" class="collapsed-svg"></svg-icon>
    </div>
    <div class="header_menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <img :src="data.avatar" />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu_item">
                <svg-icon
                  iconName="user1"
                  className="header-menu-svg"
                ></svg-icon
                >1375133665
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <div class="menu_item menu_lang">
                <svg-icon
                  iconName="lang"
                  className="header-menu-svg"
                ></svg-icon>
                <span
                  v-for="lang in data.lang"
                  :key="lang.value"
                  @click="toggleLang(lang.value)"
                  :class="{ current: data.lang_current == lang.value }"
                  >{{ lang.label }}</span
                >
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <div class="menu_item">
                <svg-icon iconName="exit" className="header-menu-svg"></svg-icon
                >{{ $t("header_menu.logout") }}
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from "vue";
// 语言
import { useI18n } from "vue-i18n";
export default {
  name: "Header",
  setup() {
    const { emit } = getCurrentInstance();
    // 扩展语言
    const { locale } = useI18n();
    const data = reactive({
      lang: [
        { label: "中文", value: "ch" },
        { label: "English", value: "en" }
      ],
      lang_current: "ch",
      avatar: require("@/assets/images/avatar.jpg")
    });
    // 设置语言
    const toggleLang = lang => {
      locale.value = lang;
      data.lang_current = lang;
    };
    // 展开/折叠按钮
    const collapsedBtn = () => {
      emit("collapsed");
    };
    return { data, toggleLang, collapsedBtn };
  }
};
</script>

<style lang="scss" scoped>
#header {
  padding: 0 20px;
  height: 64px;
}
.collapsed_btn {
  float: left;
  cursor: pointer;
  font-size: 20px;
}
.header_menu {
  float: right;
  margin-top: 15px;
  img {
    width: 36px;
    border-radius: 36px;
  }
}
.menu_item {
  padding: 0 20px;
  font-size: 14px;
  font-family: "黑体";
  color: #333;
}
.menu_lang {
  color: #aeaeae;
  span {
    margin-right: 10px;
  }
  .current {
    color: #333;
  }
}
</style>
