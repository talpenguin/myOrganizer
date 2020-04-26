import Home from "./components/Home.vue";
import Notes from "./components/notes/Notes.vue";
import Todo from "./components/todo/Todo.vue";
import Contacts from "./components/contacts/Contacts.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/notes", component: Notes },
  { path: "/todo", component: Todo },
  { path: "/contacts", component: Contacts }
];
