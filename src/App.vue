<template>
  <div>
    <navbar></navbar>
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">


.app {
  width: 70%;
  min-height: 100vh;
  padding: 10px;
  margin: 2px auto;
  background-color: $background-app;
}
</style>