<template>
  <div class="app">
    <h2>Posts page</h2>
    <div class="app_btns">
      <my-button
          @click="showDialog"
      >Create post
      </my-button>
      <my-select
      v-model="selectedSort"
      :options="sortOption"
      />
    </div>


    <my-dialog v-model="dialogVisible">
      //v-model:show="dialogVisible"
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list :posts="sortedPosts"
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
import MySelect from "@/components/UI/MySelect";

export default {
  components: {
    MySelect,
    MyButton,
    PostList, PostForm
  },


  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOption: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By description'}
      ]
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
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
  },
  watch: {}
  }
}
</script>

<style>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 60%;
  padding: 10px;
}

.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>