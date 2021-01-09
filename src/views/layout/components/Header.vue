<template>
  <div id="header">
    <div class="header_menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <img
            src="@/assets/avatar.jpg"
            alt=""
            style="width:44px;border-radius:44px"
          />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <div class="menu_item">13752190375</div>
            </a-menu-item>
            <a-menu-item>
              <div class="menu_item menu_lang">
                <span
                  v-for="lang in data.lang"
                  :key="lang.value"
                  @click="toggleLang(lang.value)"
                  :class="{ current: data.lang_current == lang.value }"
                  >{{ lang.label }}</span
                >
              </div>
            </a-menu-item>
            <a-menu-item>
              <div class="menu_item">{{ $t("header_menu.logout") }}</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
// 语言
import { useI18n } from "vue-i18n";
export default {
  name: "Header",
  setup() {
    // 扩展语言
    const { locale } = useI18n();
    const data = reactive({
      lang: [
        { label: "中文", value: "ch" },
        { label: "English", value: "en" }
      ],
      lang_current: "ch"
    });
    const toggleLang = lang => {
      locale.value = lang;
      data.lang_current = lang;
    };
    return { data, toggleLang };
  }
};
</script>

<style lang="scss" scoped>
#header {
  padding: 0 20px;
  height: 64px;
}
.header_menu {
  float: right;
  margin-top: 15px;
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
