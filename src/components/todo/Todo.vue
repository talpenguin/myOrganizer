<template>
  <div>
    <h3 align="center">To-Do list</h3>
    <hr />
    <new-task @addTask="addNewTask" />
    <task-list :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";
import NewTask from "./NewTask.vue";

export default {
  components: { TaskList, NewTask },
  data() {
    return {
      tasks: [
        { task: "Dishes", finished: false },
        { task: "Laundry", finished: false }
      ]
    };
  },
  methods: {
    addNewTask(task) {
      this.tasks.push({ task: task, finished: false });
    }
  }
};
</script>
