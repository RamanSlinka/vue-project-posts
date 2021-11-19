<template>
  <div class="app">
    <h2>Posts page</h2>

    <my-input
        v-model="searchQuery"
        placeholder="Search by title..."
    />
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

    <post-list :posts="sortedAndSearchedPosts"
               @remove="removePost"
               v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
    <div class="page_wrapper">
      <div
          v-for="pageNumber in totalPage"
          :key="pageNumber"
          class="page"
           :class="{
            'current_page': page === pageNumber
      }"
          @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
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
      searchQuery: '',
      pageNumber: 1,
      limit: 10,
      totalPage: 0,
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
    changePage(pageNumber) {
      this.page = pageNumber
      this.fetchPosts()
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
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
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 60%;
  padding: 10px;
  margin: 0 auto;
}

.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page_wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px #0636ee solid;
  padding: 10px;
}

.current_page {
  border: 2px #0636ee solid;
  background: rgba(6, 54, 238, 0.32);
}
</style>