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
  background: #cdd6ef;
}

.app {
  width: 70%;
  padding: 10px;
  margin: 5px auto;
}
</style>