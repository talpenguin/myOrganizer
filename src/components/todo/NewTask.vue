<template>
  <div class="row">
    <div
      class="form-group text-center col-sm-8 col-sm-offset-2 col-xs-12 col-md-4 col-md-offset-4"
    >
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          rows="1"
          maxlength="20"
          v-model="task"
        />
        <span class="input-group-btn">
          <button class="btn btn-default" @click.prevent="createNew">
            Add
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewTask",
  data() {
    return {
      task: ""
    };
  },
  methods: {
    createNew() {
      this.$emit("addTask", this.task);
    }
  }
};
</script>
