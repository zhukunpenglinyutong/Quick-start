<template>
  <el-card class="box-card">
    <h1>注册......</h1>
    <!-- 账号密码 -->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="确定密码">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <!-- 登录注册 -->
    <el-form-item>
      <el-button @click="register">注册</el-button>
      <el-button @click="returnLogin">返回</el-button>
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
      returnLogin() {
        this.$router.push({ path:'/'})
      },
      register () {
        this.$message.success('注册成功');
        this.$router.push({ path:'/'})
      }
    }
  }
</script>