<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyMessage',
  props: {
    message: {
      type: String,
      required: true // Сообщение является обязательным
    }
  }
};
</script>

<style scoped>
/* Стили компонента */
p {
  font-size: 18px;
  color: #333;
}
</style>