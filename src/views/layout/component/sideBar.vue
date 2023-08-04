<template>
  <div class="side-bar-container">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
    >
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="home" />
          <span>商品管理</span>
        </span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="appstore" />
          <span>设置</span>
        </span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-sub-menu
          key="sub3"
          title="Submenu"
        >
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped></style>