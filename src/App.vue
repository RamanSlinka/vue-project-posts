<template>
  <div class="app">
    <h2>Posts page</h2>
    <my-button
        style="margin: 15px 0"
        @click="showDialog"
    >Create post
    </my-button>

    <my-button
        @click="fetchPosts"
    >Get posts
    </my-button>

    <my-dialog v-model="dialogVisible">
      //v-model:show="dialogVisible"
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list :posts="posts"
               @remove="removePost"
               v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios"
import MyButton from "@/components/UI/MyButton";

export default {
  components: {
    MyButton,
    PostList, PostForm
  },


  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;

    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data;

      } catch (e) {
        alert('error')
      }
      finally {
        this.isPostLoading = false;
      }
    },

    mounted() {
      this.fetchPosts();
    }
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