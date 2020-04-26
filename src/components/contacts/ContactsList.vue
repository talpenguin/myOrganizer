<template>
  <div class="row">
    <contact
      v-for="(contact, index) in contacts"
      :key="index"
      :index="index"
      :contact="contact"
      @click.native="removeContact(index)"
    >
      {{ contact.name }}
    </contact>
  </div>
</template>

<script>
import Contact from "./Contact.vue";

export default {
  name: "ContactsList",
  components: { Contact },
  props: {
    contacts: { type: Array, required: true }
  },
  methods: {
    removeContact(index) {
      this.contacts.splice(index, 1);
    }
  }
};
</script>
