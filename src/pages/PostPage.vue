<template>
  <div>
    <h2>Posts page</h2>

    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search by title..."
    />
    <div class="app_btns">
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
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
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';

export default {

  components: {
    MyInput,
    MySelect,
    PostList,
    PostForm
  },


  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts'
    }),

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

  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      pageNumber: state => state.post.pageNumber,
      limit: state => state.post.limit,
      totalPage: state => state.post.totalPage,
      sortOption: state => state.post.sortOption
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts' ,
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',

    })
  },
  watch: {}
}
</script>

<style lang="scss">


.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page_wrapper {
  display: flex;
  margin-top: 15px;
  .page {
    border: 1px $border-color solid;
    padding: 10px;
  }
}


.current_page {
  border: 2px $border-color solid;
  background: rgba(6, 54, 238, 0.32);
}
</style>

