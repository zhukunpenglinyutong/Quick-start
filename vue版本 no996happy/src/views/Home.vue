<template>
  <div class="home">
    <el-container>
      
      <!-- 顶部 -->
      <el-header class="home-el-header">
        <template v-if="!search">
          <!-- 搜索 -->
          <el-button icon="el-icon-search" circle @click="searchChange"></el-button>
          <!-- <el-button type="primary" icon="el-icon-plus" circle></el-button> -->
          <el-button type="text">常用</el-button>
          <el-button type="primary" @click="add" icon="el-icon-plus" circle></el-button>
          
          <!-- 其他类型 -->
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-folder-opened"></i> 其他分类<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Vue</el-dropdown-item>
              <el-dropdown-item>ES6</el-dropdown-item>
              <el-dropdown-item>Nginx</el-dropdown-item>
              <el-dropdown-item>Linux</el-dropdown-item>
              <el-dropdown-item>银行卡等信息</el-dropdown-item>
              <el-dropdown-item>常用账号密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <!-- 开发者 -->
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-folder-opened"></i>开发者<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>软件使用说明</el-dropdown-item>
              <el-dropdown-item>各版本开发进度</el-dropdown-item>
              <el-dropdown-item>本软件架构文档公示</el-dropdown-item>
              <el-dropdown-item>参与功能开发公投</el-dropdown-item>
              <el-dropdown-item>当前版本信息</el-dropdown-item>
              <el-dropdown-item>其他</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>

        <template v-if="search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input1">
          </el-input>
          <i class="el-icon-close" @click="searchChange"></i>
        </template>
      </el-header>

      <!-- 内容 -->
      <el-main class="home-el-main">

        <i class="el-icon-s-unfold myView"></i>

        <router-view></router-view>
      </el-main>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="500px"
        :before-close="handleClose">
        <el-row>
          <el-col :span="8"><el-button type="text">推荐</el-button></el-col>
          <el-col :span="8"><el-button type="text">Vue</el-button></el-col>
          <el-col :span="8"><el-button type="text">ES6</el-button></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><el-button type="text">Nginx</el-button></el-col>
          <el-col :span="8"><el-button type="text">Linux</el-button></el-col>
          <el-col :span="8"><el-button type="text">银行卡等信息</el-button></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><el-button type="text">常用账号密码</el-button></el-col>
          <el-col :span="8"><el-button icon="el-icon-plus" type="primary" circle></el-button></el-col>
        </el-row>
      </el-dialog>

    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: false, // 是否开启搜索
      input1: '',
      dialogVisible: false
    }
  },
  methods: {
    // 搜索状态改变
    searchChange () {
      this.search = !this.search
    },

    // 添加
    add() {
      // this.$message.success('添加')
      this.dialogVisible = true
    }
  }
}
</script>


<style scoped>
.home {
  width: 650px;
  background: #f1f3f7;
  margin: 0 auto;
}
.home-el-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  height: 60px;
  line-height: 60px;
  background-color: #D3DCE6;
}
.home-el-header button {
  width: 40px;
  height: 40px;
}
.home-el-main  {
  padding: 20px 40px;
  min-height: 1080px;
}
.home-el-main .box-card {
  margin-bottom: 20px;
}
.myView {
  position: relative;
  left: -40px;
  top: 0px;
  display: inline-block;
  width: 25px;
  height: 25px;
  font-size: 25px;
  cursor:pointer;
}
.el-row .el-col-8 {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: #409EFF;
  color: #fff;
  font-size: 20px;
}
.el-row .el-col-8 button {
  color: #fff;

}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
