<template>
  <div>
    <div class="col-xs-8 col-sm-4 col-md-4 ">
      <div class="panel panel-default">
        <div class="panel-heading select">
          <h4>
            Contact #{{ index + 1 }} <fa-icon class="delete" icon="trash-alt" />
          </h4>
        </div>
        <div class="panel-body">
          <p><b>Name:</b> {{ contact.name }}</p>
          <p><b>Phone:</b> {{ contact.phone }}</p>
          <p><b>Address:</b> {{ contact.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    index: { type: Number },
    contact: { type: Object }
  },
  methods: {}
};
</script>

<style scoped>
.select {
  cursor: pointer;
}

.select:hover {
  background-color: rgb(201, 201, 201);
}

.delete {
  visibility: hidden;
  float: right;
}

.select:hover .delete {
  visibility: visible;
}
</style>
