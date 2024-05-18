<template>
  <div class="container" id="app">
    <div class="banner">
      <div class="login">
        <div>
          <router-link to="/myLog">
            <button>登录</button>
          </router-link>
          <router-link to="/myRegister">
            <button>注册</button>
          </router-link>
        </div>
      </div>
      <h1>云端编程，浏览器里边学边练</h1>
      <p>软件定义一切，网络连接时空，学习软件技术，创造未来世界。</p>
      <a href="#" class="btn" @click="showStudyMessage('开始学习')">马上学习</a>
      <div class="logo">
        <img src="../../../assets/logo-white.svg" alt="云端编程">
      </div>
    </div>
    <div class="lab">
      <img src="../../../assets/img-lab@2x.png" alt="图一">
      <h1>高级Web编程实验室</h1>
      <p>每人拥有自己完全独立的编程实验室，内置所有基础软件及学习素材。打开浏览器，即刻开始编程！</p>
      <button @click="showStudyMessage('了解高级Web编程实验室的详情')">了解详情</button>
    </div>
    <div class="screens">
      <img src="../../../assets/img-screens@2x.png" alt="图二">
      <h1>双屏学习</h1>
      <p>双屏学习，小屏视频互动，大屏实际操作，学习无障碍。打开浏览器，即刻开始编程！</p>
      <button @click="showStudyMessage('了解双屏学习的详情')">了解详情</button>
    </div>
    <div class="title">
      <h1>课程特色</h1>
      <hr>
    </div>
    <div class="footer-container">
      <div class="footer1">
        <img src="../../../assets/1.jpg" alt="图三">
        <h1>丰富的教学服务</h1>
        <p>特色教学服务功能，各种配套教学服务，在线学习从未如此轻松。</p>
        <a href="https://www.w3cschool.cn/" class="b1" target="_blank" @click="showStudyMessage('了解丰富的教学服务')">马上学习 ></a>
      </div>
      <div class="footer2">
        <img src="../../../assets/2.jpg" alt="图四">
        <h1>多元的学习方式</h1>
        <p>知识提炼、答疑解惑、实时互动、开发有特色的教学服务方式。</p>
        <a href="https://www.w3cschool.cn/" class="b2" target="_blank" @click="showStudyMessage('了解多元的学习方式')">马上学习 ></a>
      </div>
      <div class="footer3">
        <img src="../../../assets/3.jpg" alt="图五">
        <h1>高品质的学习体验</h1>
        <p>多屏合一，随时学习，随时在线，学习记录一目了然，知识充电不再受限。</p>
        <a href="https://www.w3cschool.cn/" target="_blank" class="b3" @click="showStudyMessage('了解高品质的学习体验')">马上学习 ></a>
      </div>
    </div>
    <div class="footer4">
      <p>&copy; 2024 云端科技 Ar tech 版权所有</p>
    </div>
    <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="closeModal">&times;</span>
        <p>{{ modalMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const showModal = ref(false);
    const modalMessage = ref('');

    const showStudyMessage = (message) => {
      modalMessage.value = message;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      showModal,
      modalMessage,
      showStudyMessage,
      closeModal
    };
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
}

.container {
  position: relative;
}

.banner,
.lab,
.screens,
.footer-container {
  width: 100%;
}

.banner {
  height: 370px;
  overflow: visible;
  background: url('../../../assets/home-banner@2x.jpg') no-repeat fixed center center;
  color: #fff;
  text-align: center;
  padding-top: 20px;
}

.banner h1 {
  font-size: 3em;
  margin-top: 100px;
}

.banner h3 {
  font-size: 20px;
  margin-top: 20px;
}

.banner .login {
  position: absolute;
  top: 20px;
  right: 50px;
}

.banner .login button {
  background-color: transparent;
  padding: 5px 10px;
  color: #fff;
}

.banner .btn {
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #fff;
  color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.logo {
  position: absolute;
  top: 20px;
  left: 50px;
}

.lab{
  background-color: rgba(0, 0, 0, 0.245);
  color: #fff;
  padding: 50px 50px;
  text-align: left;
  top:370px;
}

.screens{
  background-color: #fff;
  color: #000;
  padding: 50px 50px;
  text-align: left;
  top: 740px;
}

.lab h1,
.lab p {
  color: rgb(0, 0, 0);
  text-align: left;
}

.lab button,
.screens button {
  padding: 10px 10px;
  color: rgb(0, 0, 0);
}

.footer-container {
  display: flex;
  flex-wrap:wrap;
  margin-top: 50px;
  justify-content: space-between;
}

.footer-container > div {
  width: calc(33.333% - 20px);
  padding: 20px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
}

.footer-container img {
  max-width: 100%;
}


.footer4 {
  text-align: center;
  margin-top: 50px;
}

.title {
  padding: 50px 50px;
}

.footer1 .b1,
.footer2 .b2,
.footer3 .b3 {
  color: #007bff;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
