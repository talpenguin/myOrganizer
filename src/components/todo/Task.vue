<template>
  <div>
    <li
      class="list-group-item task col-xs-16 col-sm-8 col-sm-offset-2  col-md-offset-3"
    >
      <span :class="{ strike: task.finished }">{{ task.task }}</span>
      <button class="btn btn-danger delete" @click="removeTask()">
        <fa-icon icon="trash-alt" />
      </button>
      <button
        v-if="!task.finished"
        class="btn btn-success check"
        @click="finishTask()"
      >
        <fa-icon icon="check" />
      </button>
      <button v-else class="btn btn-success check" @click="finishTask()">
        <fa-icon icon="undo" />
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: { type: Object }
  },
  methods: {
    removeTask() {
      this.$emit("removeTask", this.$el);
    },
    finishTask() {
      this.task.finished = !this.task.finished;
    }
  }
};
</script>

<style scoped>
.task {
  font-family: "Arizonia", cursive;
  font-size: 18px;
}

li {
  overflow: hidden;
}

button {
  float: right;
  margin-left: 2px;
}

.strike {
  position: relative;
}
.strike:after {
  content: " ";
  position: absolute;
  top: 50%;
  left: -3%;
  width: 0;
  height: 10px;
  opacity: 80%;
  transform: translateY(-50%);
  background: repeat-x
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKAQMAAAByjsdvAAAABlBMVEUAAADdMzNrjRuKAAAAAXRSTlMAQObYZgAAADdJREFUCNdj+MMABP8ZGCQY/h9g+MHw/AHzDwbGD+w/GBhq6h8wMNj/b2BgkP8HVMMPUsn+gQEAsTkQNRVnI4cAAAAASUVORK5CYII=);
  animation: strike 0.5s linear 0.3s 1 forwards;
}
@keyframes strike {
  to {
    width: 106%;
  }
}

.delete {
  visibility: hidden;
}
.check {
  visibility: hidden;
}

.task:hover .delete {
  visibility: visible;
}
.task:hover .check {
  visibility: visible;
}
</style>
