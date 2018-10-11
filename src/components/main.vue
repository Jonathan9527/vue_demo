<template>
<<<<<<< HEAD
    <div class="hh">
      <!-- <img src="@/assets/logo.png" alt=""> -->
    </div>
=======
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="logo"></div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
>>>>>>> aa6d262be095625ffa389f727e69b5ec1040ed5e
</template>
<script>
export default {};
</script>
<<<<<<< HEAD
<style scoped>
    .hh{
        width: 200px;
        height: 200px;
        background:url("~assets/logo.png") pink center;
    }
=======
<style scoped lang="scss">

.home {
  height: 100%;
  background-color: #e5e5e5;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    border-right: 0;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background: url("../assets/images/tb.jpg");
    background-size: contain;
    background-color: white;
  }
  .toggle-btn {
    padding: 0 10px;
    margin-left: -20px;
    font-size: 36px;
    line-height: 60px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #00635a;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
  }
}
<<<<<<< HEAD
=======
// .home {
//   height: 100%;
//   background-color: #e5e5e5;
//   .el-menu-admin:not(.el-menu--collapse) {
//     width: 200px;
//     min-height: 400px;
//   }
//   .el-menu {
//     border-right: 0;
//   }
//   .el-container {
//     height: 100%;
//   }
//   .el-aside {
//     background-color: #545c64;
//   }
//   .el-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #545c64;
//   }
//   .logo {
//     height: 60px;
//     background: url(../assets/logo.png);
//     background-size: cover;
//     background-color: white;
//   }
//   .toggle-btn {
//     padding: 0 10px;
//     margin-left: -20px;
//     font-size: 36px;
//     line-height: 60px;
//     color: white;
//     cursor: pointer;
//     &:hover {
//       background-color: #00635a;
//     }
//   }
//   .system-title {
//     font-size: 28px;
//     color: white;
//   }
//   .welcome {
//     color: white;
//   }
// }
>>>>>>> aa6d262be095625ffa389f727e69b5ec1040ed5e
>>>>>>> 21df02528fd6eb11ab9b8c2051ce0e4e55092706
</style>