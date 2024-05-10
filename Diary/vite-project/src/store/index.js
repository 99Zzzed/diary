import { createStore } from "vuex";
import user from "./user.js";
import task from "./task.js";

export default createStore({
    modules: {
        user,
        task
    }
})