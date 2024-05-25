<script setup lang="ts">


const form = reactive({
  username: '',
  password: '',
})

const onSubmit = async () => {
   const {Users, validateUser } = useUsers();
 if (validateUser(form.username, form.password)) {
        showSuccessToast('Login Successful');
        navigateTo('/store', {replace: true})
      } else {
        showFailToast('Fail to login')
        return
  }
  

  
}

</script>

<template>
  <div class="login-page">
    
    <van-nav-bar title="Login" />

  
    <van-form @submit="onSubmit">
     
      <van-field
        v-model="form.username"
        name="username"
        label="Username"
        placeholder="username"
        :rules="[
          { required: true, message: 'please enter username' },
          { pattern: /^\w{5,}$/, message: 'please enter username' },
        ]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="Password"
        label="Password"
        placeholder="password"
        :rules="[
          { required: true, message: 'please enter password' },
          { pattern: /^\w{6,}$/, message: 'please enter password' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">Login</van-button>
      </div>
    </van-form>
    <NuxtLink class="link" to="/register">register</NuxtLink>
  </div>
</template>

<style scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
