<template>
  <div class="post">
    <div>
      {{post.id}}
      <div><strong>Title: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong> {{ post.body }}</div>
    </div>

    <div class="post_btns">
      <my-button
      @click="$router.push(`/posts/${post.id}`)"
      >Open
      </my-button>

      <my-button
      @click="$emit('remove', post)"
      >Delete</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton"
export default {
  components: {
    MyButton
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.post {
  padding: 15px;
  border: 2px solid $border-color;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $background;
  .post_btns{
    display: flex;
    margin: 5px;
  }
}

</style>