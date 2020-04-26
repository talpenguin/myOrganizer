<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-xs-14 col-md-7 ">
      <ul class="list-group">
        <task
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          @removeTask="removeTask(index)"
        >
        </task>
      </ul>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "TaskList",
  components: { Task },
  props: {
    tasks: { type: Array, required: true }
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>
