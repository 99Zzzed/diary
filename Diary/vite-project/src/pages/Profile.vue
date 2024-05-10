<template>
  <div class="flex items-center justify-center gap-5">
    <form @submit.prevent="updateUserAvatar(profileDataAvatar)" class="flex items-center flex-wrap h-screen justify-center">
      <label for="file" class="custum-file-upload">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
        </div>
        <div class="text">
          <span class="text-xl">Загрузить картинку</span>
        </div>
        <input id="file" @change="fileAvatar" type="file">
      </label>
    </form>
    <div class="form-container">
      <div class="logo-container">
        Новый пароль
      </div>
      <form class="form" @submit.prevent="changeUserPassword(profilePassword)">
        <div class="form-group">
          <input v-model="profilePassword.new_password" type="text" placeholder="Введите новый пароль">
        </div>

        <button class="form-submit-btn">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions(["sendUserAvatar", "changeUserPassword"]),
    fileAvatar(event) {
      this.profileDataAvatar.avatar = event.target.files[0];
      this.updateUserAvatar()
    },
    updateUserAvatar() {
      this.sendUserAvatar(this.profileDataAvatar)
    },

  },
  data() {
    return {
      profileDataAvatar: {
        avatar: ""
      },
      profilePassword: {
        new_password: ""
      }
    }
  }
}
</script>

<style scoped>
 /* Download button */
 .custum-file-upload {
   height: 200px;
   width: 300px;
   display: flex;
   flex-direction: column;
   align-items: space-between;
   gap: 20px;
   cursor: pointer;
   align-items: center;
   justify-content: center;
   border: 2px dashed #e8e8e8;
   background-color: blueviolet;
   padding: 1.5rem;
   border-radius: 10px;
   box-shadow: 0px 48px 35px -48px #e8e8e8;
 }

 .custum-file-upload .icon {
   display: flex;
   align-items: center;
   justify-content: center;
 }

 .custum-file-upload .icon svg {
   height: 80px;
   fill: #e8e8e8;
 }

 .custum-file-upload .text {
   display: flex;
   align-items: center;
   justify-content: center;
 }

 .custum-file-upload .text span {
   font-weight: 400;
   color: #e8e8e8;
 }

 .custum-file-upload input {
   display: none;
 }
/* form change password */
 .form-container {
   max-width: 400px;
   background-color: blueviolet;
   padding: 15px 24px;
   font-size: 16px;
   font-family: inherit;
   color: #fff;
   display: flex;
   flex-direction: column;
   gap: 20px;
   box-sizing: border-box;
   border-radius: 10px;
   box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
 }

 .form-container button:active {
   scale: 0.95;
 }

 .form-container .logo-container {
   text-align: center;
   font-weight: 600;
   font-size: 18px;
 }

 .form-container .form {
   display: flex;
   flex-direction: column;
 }

 .form-container .form-group {
   display: flex;
   flex-direction: column;
   gap: 2px;
 }

 .form-container .form-group input {
   width: 100%;
   padding: 12px 16px;
   border-radius: 6px;
   font-family: inherit;
   border: 1px solid #ccc;
   color: black;
 }

 .form-container .form-group input:focus {
   outline: none;
   border-color: #3b0964;
 }

 .form-container .form-submit-btn {
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: inherit;
   color: #fff;
   background-color: #212121;
   border: none;
   border-bottom: 2px solid white;
   width: 100%;
   padding: 12px 16px;
   font-size: inherit;
   gap: 8px;
   margin: 12px 0;
   cursor: pointer;
   border-radius: 6px;
   transition: all .5s ease-in;
   box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
 }

 .form-container .form-submit-btn:hover {
   background-color: #575757;
 }

 .form-container .link {
   color: #1778f2;
   text-decoration: none;
 }

 .form-container .signup-link {
   align-self: center;
   font-weight: 500;
 }

 .form-container .signup-link .link {
   font-weight: 400;
 }

 .form-container .link:hover {
   text-decoration: underline;
 }


</style>