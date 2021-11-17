<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Title"
    >
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Description"
    >
    <my-button
        style=" margin-top: 15px"
        @click="createPosts"
    >Create
    </my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton"

export default {
  components: {
    MyButton
  },
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPosts() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid #0636ee;
  padding: 10px 15px;
  margin-top: 15px;
}


</style>