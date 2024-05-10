<template>
  <div class="bg-violet-600 p-2 flex items-center justify-between form-border">
    <div v-if="!isEditing">
      <p class="text-xl text-white"><strong>Название:</strong> {{task.title}}</p>
      <p class="text-xl text-white"><strong>Задача:</strong> {{task.description}}</p>
      <p class="text-white">{{task.created_at}}</p>
    </div>
    <div v-else class="flex flex-col gap-2">
      <input class="outline-none border-b-2 border-white bg-transparent text-white py-1 px-2" v-model="editTaskData.title" type="text" placeholder="Название">
      <input class="outline-none border-b-2 border-white bg-transparent text-white py-1 px-2" v-model="editTaskData.description" type="text" placeholder="Задача">
    </div>
    <div class="flex gap-3">
      <button @click="deleteTask(task.id)" class="btn-space space">Удалить</button>
      <button @click="taskIsDone(task.id)" class="btn-space space">{{ task.done ? 'Выполнено' : 'Не выполнено' }}</button>
      <button v-if="!isEditing" @click="openEditForm(task)" class="editBtn">
        <svg height="1em" viewBox="0 0 512 512">
          <path
              d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
          ></path>
        </svg>
      </button>
      <button v-else @click="submitEditForm" title="Save" class="text-sm text-white hover:text-violet-600 font-bold px-2 cursor-pointer flex items-center border hover:bg-white active:border active:border-lime-400 rounded-md transition ease-out p-2">
        <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linejoin="round" stroke-linecap="round" fill="grey" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
        </svg>
        Готово
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: ['task'],
  data() {
    return {
      isEditing: false,
      editTaskData: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions(['deleteTask', 'taskIsDone', 'editTask']),
    openEditForm(task) {
      this.isEditing = true;
      this.editTaskData.title = task.title;
      this.editTaskData.description = task.description;
    },
    submitEditForm() {
      this.editTask({id: this.task.id, data: this.editTaskData});
      this.isEditing = false;
    }
  }
}
</script>

<style scoped>
.form-border {
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
.editBtn {
  width: 45px;
  height: 45px;
  border-radius: 20px;
  border: none;
  background-color: rgb(93, 93, 116);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.123);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}
.editBtn::before {
  content: "";
  width: 200%;
  height: 200%;
  background-color: rgb(102, 102, 141);
  position: absolute;
  z-index: 1;
  transform: scale(0);
  transition: all 0.3s;
  border-radius: 50%;
  filter: blur(10px);
}
.editBtn:hover::before {
  transform: scale(1);
}
.editBtn:hover {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.336);
}

.editBtn svg {
  height: 17px;
  fill: white;
  z-index: 3;
  transition: all 0.2s;
  transform-origin: bottom;
}
.editBtn:hover svg {
  transform: rotate(-15deg) translateX(5px);
}
.editBtn::after {
  content: "";
  width: 25px;
  height: 1.5px;
  position: absolute;
  bottom: 10px;
  left: -5px;
  background-color: white;
  border-radius: 2px;
  z-index: 2;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease-out;
}
.editBtn:hover::after {
  transform: scaleX(1);
  left: 0px;
  transform-origin: right;
}
.btn-space {
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-size: 500% auto;
  font-weight: bold;
  font-size: 1rem;
  color: rgba(42, 41, 41, 1);
  border-radius: 10px;
}

.btn-space:hover {
  background-position: right center;
  border-image-source: linear-gradient(90deg, #d53a9d,#743ad5 );
  -webkit-box-shadow: 0 0 20px #743ad5;
  box-shadow: 0 0 20px #743ad5;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 10px #d53a9d;
}

.space {
  background-image: -webkit-gradient(linear, left top, right top, from(#743ad5), color-stop(51%, #d53a9d), to(#743ad5));
  background-image: linear-gradient(to right, #743ad5 0%, #d53a9d 51%, #743ad5 100%);
  border-image-source: linear-gradient(45deg, #743ad5, #d53a9d );
  border-image-outset: 1em;
}




</style>