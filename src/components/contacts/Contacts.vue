<template>
  <div>
    <h3 align="center">Contacts</h3>
    <hr />
    <new-contact @addContact="addNewContact" />
    <contacts-list :contacts="contacts" />
  </div>
</template>

<script>
import ContactsList from "./ContactsList.vue";
import NewContact from "./NewContact.vue";

export default {
  components: { ContactsList, NewContact },
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    addNewContact(contact) {
      this.contacts.push({
        name: contact.name,
        phone: contact.phone,
        address: contact.address
      });
    }
  }
};
</script>
