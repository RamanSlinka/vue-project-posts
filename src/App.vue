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

<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

.app {
  width: 70%;
  min-height: 100vh;
  padding: 10px;
  margin: 2px auto;
  background: #cdd6ef;
}
</style>