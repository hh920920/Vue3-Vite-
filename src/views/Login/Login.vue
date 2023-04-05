<template>
  <!-- 懒得写登录页，此页面是网上随便复制一个来的，所以是vue2语法,不过Vue3也会兼容Vue2 -->
  <div id="login">
    <div id="bgd">
      <canvas id='myCanvas' :width='width' :height='height'>
      </canvas>
    </div>
    <div id="loginBox">
      <div class="title">
        <h1>后台登录</h1>
      </div>
      <!-- 登录表单 -->
      <el-form :model="loginForm" class="login-container">
        <h3></h3>
        <el-form-item>
          <el-input type="input" placeholder="请输入账号" v-model="loginForm.username">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="请输入密码" v-model="loginForm.password">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login"> 登录 </el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>

import { reactive } from "vue-demi"
import { getCurrentInstance } from "vue-demi"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { onMounted } from 'vue'
import request from '../../api/api'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    // 提交登录
    const submitForm = () => { }
    onMounted(() => {
    })

    const loginForm = reactive({
      username: "admin",
      password: "admin",
    })
    const { proxy } = getCurrentInstance()
    const store = useStore()
    const router = useRouter()
    const login = async () => {
      const res = await request.getMenu(loginForm)
      if (res.code == -1) {
        ElMessage({
          showClose: true,
          message: res.data.message,
          type: "error",
        })
      }
      if (res.code == 200) {
        ElMessage({
          showClose: true,
          message: "登录成功",
          type: "success",
        })
        store.commit("setMenu", res.data.menu)
        store.commit("addMenu", router)
        store.commit("setToken", res.data.token)
        // 跳转页面
        setTimeout(() => {
          router.push({
            name: "home1",
          })
        }, 1000)
      }

    }
    return {
      loginForm,
      login,
      submitForm
    }
  }
}
</script>

<style lang='less' scoped>
#login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  background-size: 100%;
  background-image: url("../../assets/images/loginback.png");
  position: relative;
  #bgd {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #loginBox {
    width: 400px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
    .title {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
    }
    :deep(.inps input) {
      border: none;
      color: #fff;
      width: 300px;
      background-color: transparent;
      font-size: 12px;
    }
    .submitBtn {
      background-color: transparent;
      color: #39f;
      width: 200px;
    }
    .iconfont {
      color: #fff;
    }
  }
}
.login-container {
  width: 350px;
  //   background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 50px auto;
  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>