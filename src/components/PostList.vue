<template>
  <div>
    <div v-if="posts.length > 0 ">
      <h3>List posts</h3>
      <transition-group name="post-list">
        <post-item v-for="post in posts"
                   :key="post.id"
                   :post="post"
                   @remove="$emit('remove', post)"
        />
      </transition-group>

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

<style lang="scss">
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(70px);
}
.post-list-move {
  transition: transform 1s;
}
</style>