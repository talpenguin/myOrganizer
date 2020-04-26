<template>
  <ul class="nav nav-pills nav-justified">
    <router-link to="/" tag="li" active-class="active" exact
      ><a>Home</a></router-link
    >
    <router-link to="/notes" tag="li" active-class="active"
      ><a>Notes</a></router-link
    >
    <router-link to="/todo" tag="li" active-class="active"
      ><a>To-Do</a></router-link
    >
    <router-link to="/contacts" tag="li" active-class="active"
      ><a>Contacts</a></router-link
    >
  </ul>
</template>
