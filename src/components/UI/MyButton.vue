<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export  default {
  name: 'my-button'
}
</script>

<style lang="scss">
.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: $border-color;
  border: $border-color 1px solid;
}
</style>