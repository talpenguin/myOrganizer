<template>
  <div
    class="row col-sm-8 col-sm-offset-2 col-xs-14 col-md-6 col-md-offset-3 form-group"
  >
    <form name="contact-form" autocomplete="off">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model="contact.name" />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" class="form-control" v-model="contact.phone" />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" v-model="contact.address" />
      </div>
      <button @click.prevent="createNew" class="btn btn-primary center-block">
        Add
      </button>
    </form>
    <hr />
  </div>
</template>

<script>
export default {
  name: "NewContact",
  data() {
    return {
      contact: { name: "", phone: "", address: "" },
      newContact: { name: "", phone: "", address: "" }
    };
  },
  methods: {
    createNew() {
      this.$emit("addContact", this.contact);
      document.forms["contact-form"].reset();
      this.contact = this.newContact;
    }
  }
};
</script>
