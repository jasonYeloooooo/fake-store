<template>
  <div class="layout-page">
 <van-nav-bar
  title="Title"
  left-text="Back"
  left-arrow
  @click-left="onClickLeft"
/>


    <slot />
    <!-- tabbar -->
    <van-tabbar route>
      <van-tabbar-item to="/store" icon="notes-o">Store</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">User</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang='ts'>
    const onClickLeft = () => history.back();
</script>
