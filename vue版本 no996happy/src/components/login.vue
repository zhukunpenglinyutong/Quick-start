<template>
  <el-card class="box-card">
    <h1>登录......</h1>
    <!-- 账号密码 -->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <!-- 登录注册 -->
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button @click="register">注册</el-button>
    </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$message.success('登录成功');
        this.$router.push({ path:'/main'})
      },
      register () {
        this.$router.push({ path:'/register'})
      }
    }
  }
</script>

