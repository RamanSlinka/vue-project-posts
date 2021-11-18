<template>
  <div>
  <div v-if="posts.length > 0 ">
    <h3>List posts</h3>
    <post-item v-for="post in posts"
               :key="post.id"
               :post="post"
               @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red">
    There is no list posts :(
  </h2>
  </div>
</template>


<script>
import PostItem from "@/components/PostItem";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>