<template>
  <div class="register-page">

    <van-nav-bar title="Register" />


    <van-form @submit="onSubmit">

      <van-field
        v-model="user.username"
        name="username"
        label="username"
        placeholder="username"
        :rules="[
          { required: true, message: 'please enter username' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符' },
        ]"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="password"
        label="password"
        placeholder="password"
        :rules="[
          { required: true, message: 'please enter password' },
          { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <NuxtLink class="link" to="/login">login</NuxtLink>
  </div>
</template>

<script setup lang="ts">

const user = reactive({
  username: '',
  password: '',
})
 const { Users, addUser } = useUsers();

const onSubmit = () => {
      addUser(user);
      showSuccessToast('Welcome \n' + user.username);
      console.log(Users.value);
}




</script>

<style scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
