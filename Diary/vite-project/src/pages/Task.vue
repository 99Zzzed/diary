<template>
  <div class="flex flex-col items-center h-screen p-4">
        <router-link :to="{name: 'createdTask_page'}" class="button">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
          >
            <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
          </svg>
          Создать задачу
        </router-link>
        <form @submit.prevent="searchTasksByDate" class="mb-4 min-w-[500px] flex flex-col items-center justify-center p-5 gap-5">
          <h1 class="text-2xl font-bold text-violet-800">Поиск задач по дате</h1>
          <div class="input-group">
            <input type="date" class="input" v-model="searchDate">
            <input class="button--submit" value="Найти" type="submit">
          </div>
        </form>
    <div class="flex-grow w-full">
      <div v-if="getTasks && getTasks.data && getTasks.data.length > 0">
        <v-task-list>
          <v-task-item :task="task" v-for="task in getTasks?.data"/>
        </v-task-list>
      </div>
      <div v-else-if="!searchTasksByDate && searchTasksByDate && searchTasksByDate.data && searchTasksByDate.data.length === 0" class="flex items-center justify-center mt-20">
        <p>Нет задач по данной дате</p>
      </div>
      <div v-else class="flex items-center justify-center mt-20">
        <v-not-task/>
      </div>
    </div>
    <div class="mb-4">
      <vue-awesome-paginate
          :total-items="getTasks"
          :items-per-page="queryParams.limit"
          :max-pages-shown="5"
          v-model="queryParams.page"
          :on-click="navigate"
          class="my-10"
      />
    </div>
  </div>
</template>

<script>
import VTaskList from "../components/Task/vTaskList.vue";
import VTaskItem from "../components/Task/vTaskItem.vue";
import {mapActions, mapGetters} from "vuex";
import {VueAwesomePaginate} from "vue-awesome-paginate";
import VNotTask from "../components/Not/vNotTask.vue";

export default {
  components: {VNotTask, VueAwesomePaginate, VTaskItem, VTaskList},
  computed: {
    ...mapGetters(['getTasks'])
  },
  methods: {
    ...mapActions(['loadTask', 'createTask', 'sortTaskByDate']),
    navigate(page) {
      this.queryParams.page = page
      this.loadTask(this.queryParams)
    },
    searchTasksByDate() {
      const { limit } = this.queryParams;
      this.sortTaskByDate(this.searchDate, limit);
    }
  },
  created() {
    this.loadTask(this.queryParams)
  },
  data() {
    return {
      searchDate: '',
      queryParams: {
        page: 1,
        limit: 5
      }
    }
  }
}
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: blueviolet;
  color: white;
}
.active-page {
  background-color: blueviolet;
  border: 1px solid gray;
  color: white;
}
.input-group {
  display: flex;
  align-items: center;
}

.input {
  min-height: 50px;
  max-width: 150px;
  padding: 0 1rem;
  color: black;
  font-size: 15px;
  border: 1px solid #5e4dcd;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
}

.button--submit {
  min-height: 50px;
  padding: .5em 1em;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #5e4dcd;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
}

.button--submit:hover {
  background-color: #5e5dcd;
}

.input:focus, .input:focus-visible {
  border-color: #3898EC;
  outline: none;
}
.button {
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.625rem 1rem;
  color: rgb(242 242 242);
  background-color: rgb(79 70 229);
  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  font-weight: 600;
  border-radius: 0.5rem;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.35s linear;
}

.button:hover {
  box-shadow: inset 0 5px 25px 0 #af40ff, inset 0 10px 15px 0px #5b42f3,
  inset 0 5px 25px 0px #00ddeb;
}
</style>