<template>
  <div class="layout-container">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-model="collapsed"
        :trigger="null"
        collapsible
        style="height: 100vh;"
      >
        <div class="logo" />
        <SideBar />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="height: 50px;background: #fff;padding: 0;margin: 5px 8px;">
          <Header @collapsed="handleCollapsed" />
        </a-layout-header>
        <a-layout-content style="margin: 8px;border: 1px solid gray;">
          <Content />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Header from './component/header.vue';
import SideBar from './component/sideBar.vue';
import Content from './component/content.vue';

export default {
  components: {
    SideBar,
    Header,
    Content
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleCollapsed(info) {
      console.log(info);
      this.collapsed = info
    }
  }
};
</script>
<style lang="less" scoped>
.layout-container {
  height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
