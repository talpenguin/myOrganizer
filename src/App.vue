<template>
  <div>
    <div class="row">
      <div class="col-xs-16 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 align="center">My Organizer</h1>
        <hr />
        <app-header />
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: { "app-header": Header }
};
</script>

<style>
h1 {
  font-family: "Arizonia", cursive;
  font-size: 46px;
}
</style>
