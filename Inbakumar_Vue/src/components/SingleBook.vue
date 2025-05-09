<template>
  <div :class="book.rating >= 4.5 ? 'green' : 'red'">
    <h2>{{ book.title }}</h2>
    <h3>{{ book.author }}</h3>
    <p class="rating">Rating: {{ book.rating }}</p>
    <p class="review">{{ book.review}}</p>
  </div>
</template>

<script>
export default {
  name: 'SingleBook',
  props: {
    book: Object
  }
};
</script>

<style scoped>
.green {
  background-color: #28a745;
}

.red {
  background-color: #dc3545;
}

h2 {
  color: #333;
  font-size: 2em;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.5em;
  color: #555;
}

.rating {
  font-weight: bold;
  color: #f39c12;
}

.review {
  font-style: italic;
  margin-top: 15px;
}
</style>
