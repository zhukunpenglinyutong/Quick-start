<template>
  <div>
    <el-card class="box-card">
      <h3>时间戳插入更新，修改不更新</h3>
      <div class="box-card-item">
        alter table at_order change inputtime inputtime timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;
      </div>
    </el-card>
    <el-card class="box-card">
      <h3>查看数据库的表结构</h3>
      <div class="box-card-item">
        show columns from at_order;
      </div>
    </el-card>
    <el-card class="box-card">
      <h3>年.月.日 时:分:秒</h3>
      <div class="box-card-item">
        let myDate = new Date();
        let times = `${myDate.getFullYear()}.${myDate.getMonth()+1}.${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
      </div>
    </el-card>
    <el-card class="box-card">
      <h3>定时器</h3>
      <div class="box-card-item">
        setTimeout( () => {

        }, 100)
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.el-card {
  border: none;
}
.box-card {
  margin-bottom: 20px;
}
.box-card h3 {
  margin: 0;
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
  background-color: #48b5fe;
  padding: 0 10px;
  color: #fff;
}
.box-card-item {
  padding: 20px;
}
</style>
