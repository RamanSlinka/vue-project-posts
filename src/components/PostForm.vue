<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Title"
    />
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Description"
    />
    <my-button
        style=" margin-top: 15px"
        @click="createPosts"
    >Create
    </my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton"
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    MyInput,
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




</style>