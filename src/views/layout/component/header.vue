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
        <a-breadcrumb-item>{{ $router.currentRoute.matched[0].meta.title }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ $route.meta.title }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="avatar">
      <a-avatar
        src="https://img1.baidu.com/it/u=2172179147,855392769&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
        style="margin-right: 5px;"
      />
      <a-dropdown placement="bottomCenter">
        <span>欢迎，{{ user.username }} <a-icon type="down" /></span>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">
              <a-icon type="user" />
              <span>个人中心</span>
            </a>
          </a-menu-item>
          <a-menu-item @click="handleExit">
            <a href="javascript:;">
              <a-icon type="logout" />
              <span> 退出</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import router from '../../../router';
export default {
  props: {
    collapsed: {
      type: Boolean,
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  data() {
    return {
    }
  },
  created() {
    console.log(this, router);
  },
  methods: {
    handleCollapsedClick() {
      this.$emit('collapsed',)
    },
    async handleExit() {
      await this.$store.dispatch('userLogout')
      this.$router.push('/login')
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
    right: 40px;
  }
}
</style>