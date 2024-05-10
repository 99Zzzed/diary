<template>
  <header class="flex justify-between items-center px-4 py-2 header-border">
    <div>
      <h1 class="text-2xl text-white font-serif uppercase">Ежедневник</h1>
    </div>
    <div>
      <router-link :to="{name: 'task_page'}" class="button">
        <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
              d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              fill="currentColor"
          ></path>
        </svg>
        <span class="span">Задачи</span>
      </router-link>
    </div>
    <div class="flex gap-x-2 items-center justify-between min-w-[200px]">
      <div class="flex items-center gap-x-2">
        <img class="rounded-full w-[50px] h-[50px] object-cover border-4 border-gray-300"
             :src="'https://test.ai-softdev.com/'+getCurrentUser?.avatar" alt="">
        <router-link :to="{name: 'profile_page'}">
          <p class="text-white font-medium">{{ getCurrentUser?.email }}</p>
        </router-link>
      </div>
      <form @submit.prevent="logout">
        <button class="Btn">
          <div class="sign">
            <svg viewBox="0 0 512 512">
              <path
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div class="text">Выход</div>
        </button>
      </form>
    </div>
  </header>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  methods: {
    ...mapActions(['loadCurrentUser', 'logout'])
  },
  created() {
    this.loadCurrentUser()
  }
}
</script>

<style scoped>
.header-border {
  background: linear-gradient(#212121, #212121) padding-box,
  linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
  border: 3px solid transparent;
  animation: gradient 5s ease infinite;
  background-size: 200% 100%;
  border-radius: 5px;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-image: linear-gradient(to right, #8B5CF6 10%, #48BB78 30%, #38BDF8 70%, #9F7AEA 90%);
  background-size: 400%;
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: white;
}
/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: .3s;
}
/* hover effect on button width */
.Btn:hover {
  width: 125px;
  border-radius: 40px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 20px;
}
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
}
/* button task */
.button {
  display: flex;
  align-items: center;
  font-family: inherit;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  padding: 0.5em 1.3em 0.5em 0.9em;
  color: white;
  background: #ad5389;
  background: linear-gradient(to right, #580a9a, #6c0cbd, #580a9a);
  border: none;
  letter-spacing: 0.05em;
  border-radius: 16px;
}

.button svg {
  margin-right: 3px;
  transform: rotate(30deg);
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.button .span {
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.button:hover svg {
  transform: translateX(5px) rotate(90deg);
}

.button:hover .span {
  transform: translateX(7px);
}


</style>