<template>
  <header>
    <h1>{{ bookName }}</h1>
    <p>{{ authorName }}</p>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    bookName: String,
    authorName: String
  }
};
</script>

<style scoped>
header {
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

h1 {
  font-size: 2.5em;
  font-weight: bold;
}

p {
  font-size: 1.2em;
}
</style>
