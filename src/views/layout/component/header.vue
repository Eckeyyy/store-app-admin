<template>
  <div class="header-container">
    <div class="trigger">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click.stop="handleCollapsedClick"
      >
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
    </div>
    <div class="bread-crumb">
      <a-breadcrumb style="font-size: 18px;">
        <a-breadcrumb-item>商品</a-breadcrumb-item>
        <a-breadcrumb-item>商品列表</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="avatar">
      <a-menu mode="inline">
        <a-sub-menu style="height: 50px;">
          <span
            slot="title"
            style="align-items: center;"
          >
            <a-avatar
              style="margin-right: 15px;"
              :size="35"
              src="https://img1.baidu.com/it/u=2172179147,855392769&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
            />
            <span>欢迎，Ecke</span>
          </span>
          <a-menu-item>
            <a-icon type="user" />
            <span>个人中心</span>
          </a-menu-item>
          <a-menu-item>
            <a-icon type="logout" />
            <span>退出</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleCollapsedClick() {
      this.$emit('collapsed',)
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  .trigger {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  .bread-crumb {
    margin-left: 60px;
  }

  .avatar {
    position: absolute;
    display: inline-block;
    right: 0;

    .block {
      padding: 0;
    }
  }
}
</style>