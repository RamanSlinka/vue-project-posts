<template>
<div class="navbar">
<div @click="$router.push('/')">
  <h3>  Posts-Vue3</h3>
</div>
  <div class="navbar_btns">
    <my-button @click="$router.push('/posts')">Posts</my-button>
  </div>
</div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>
 .navbar{
   height: 70px;
   background-color: $background-nav;
   box-shadow: 2px 2px 4px gray;
   display: flex;
   align-items: center;
   padding: 0 15px;
   .navbar_btns{
     margin-left: auto;
   }
 }


</style>