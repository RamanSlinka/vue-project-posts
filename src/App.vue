<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list :posts="posts"
    />

  </div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostList, PostForm
  },


  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'Description post'},
        {id: 2, title: 'TypeScript', body: 'Description post 2'},
        {id: 3, title: 'React', body: 'Description post 3'}
      ],

    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 10px;
}

</style>