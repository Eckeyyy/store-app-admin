<template>
  <div class="side-bar-container">
    <a-menu
      mode="inline"
      theme="dark"
      :default-selected-keys="selected"
      @select="handleSelect"
    >
      <a-sub-menu
        v-for="route in $store.state.routes"
        v-show="!route.hidden"
        :key="route.meta.title"
      >
        <span slot="title">
          <a-icon :type="route.meta.icon" />
          <span>{{ route.meta.title }}</span>
        </span>
        <a-menu-item
          v-for="child in route.children"
          :key="child.meta.title"
          @click="handleSelect"
        >
          <router-link :to="{ name: child.name }">
            <a-icon :type="child.meta.icon" />
            {{ child.meta.title }}
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ["首页"],
    }
  },
  methods: {
    handleSelect(e) {
      this.selected = [e.key]
    }
  }
}
</script>

<style lang="less" scoped></style>