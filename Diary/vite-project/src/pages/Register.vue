<template>
  <div class="container mx-auto px-4 h-[100vh] flex flex-col items-center justify-center">
    <form @submit.prevent="register(registerFormData)">
      <div class="login wrap">
        <div class="h1">Регистрация</div>
        <input v-model="registerFormData.email" placeholder="Email" id="email" name="email" type="text">
        <input v-model="registerFormData.password" placeholder="Password" id="password" name="password" type="password">
        <button class="btn">Зарегистрировать</button>
        <router-link :to="{name: 'login_page'}" class="btn btn-log">Есть аккаунт</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      registerFormData: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions(['register'])
  },

}
</script>

<style scoped>
.login {
  width: 340px;
  height: 450px;
  background: #2c2c2c;
  padding: 47px;
  padding-bottom: 57px;
  color: #fff;
  border-radius: 17px;
  padding-bottom: 50px;
  font-size: 1.3em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.login input[type="text"],
.login input[type="password"] {
  opacity: 1;
  display: block;
  border: none;
  outline: none;
  width: 100%;
  padding: 13px 18px;
  margin: 20px 0 0 0;
  font-size: 0.8em;
  border-radius: 100px;
  background: #3c3c3c;
  color: #fff;
}

.login input:focus {
  animation: bounce 1s;
  -webkit-appearance: none;
}

.login input[type=submit],
.login input[type=button],
.h1 {
  border: 0;
  outline: 0;
  width: 100%;
  padding: 13px;
  margin: 40px 0 0 0;
  border-radius: 500px;
  font-weight: 600;
  animation: bounce2 1.6s;
}

.h1 {
  padding: 0;
  position: relative;
  top: -35px;
  display: block;
  margin-bottom: -0px;
  font-size: 1.3em;
}

.btn {
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  color: #fff;
  padding: 12px !important;
  border-radius: 50px;
  width: 100%;
  margin-top: 20px;
  text-align: center;
}
.btn-log {
  display: block;
}

.btn:hover {
  background: linear-gradient(144deg, #1e1e1e , 20%,#1e1e1e 50%,#1e1e1e );
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: all 0.4s ease;
}

.login input[type=text] {
  animation: bounce 1s;
  -webkit-appearance: none;
}

.login input[type=password] {
  animation: bounce1 1.3s;
}

.ui {
  font-weight: bolder;
  background: -webkit-linear-gradient(#B563FF, #535EFC, #0EC8EE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE);
  border-image-slice: 1;
  display: inline;
}

@media only screen and (max-width: 600px) {
  .login {
    width: 70%;
    padding: 3em;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(-250px);
    opacity: 0;
  }
}

@keyframes bounce1 {
  0% {
    opacity: 0;
  }

  40% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

@keyframes bounce2 {
  0% {
    opacity: 0;
  }

  70% {
    transform: translateY(-20px);
    opacity: 0;
  }
}
</style>