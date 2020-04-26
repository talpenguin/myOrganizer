<template>
  <div class="row">
    <form style="margin-top: 20px">
      <div
        class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group text-center"
      >
        <label> Insert Note </label>
        <textarea class="form-control" rows="5" v-model="note"> </textarea>
      </div>
      <div
        class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
      >
        <button class="btn btn-primary center-block" @click.prevent="createNew">
          Add Note
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewNote",
  data() {
    return {
      note: ""
    };
  },
  methods: {
    createNew() {
      this.$emit("addNote", this.note);
    }
  }
};
</script>
