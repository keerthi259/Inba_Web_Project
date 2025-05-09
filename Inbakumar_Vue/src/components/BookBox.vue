<template>
  <div class="book-box">
    <div
      v-for="book in books"
      :key="book.id"
      :class="['book-item', book.rating >= 4.5 ? 'green' : 'red']">
      <h3>{{ book.title }}</h3>
      <h4>{{ book.author }}</h4>
      <p class="rating">Rating: {{ book.rating }}</p>
      <p class="review">{{ book.review }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookBox',
  props: {
    books: Array
  }
};
</script>

<style scoped>
.book-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book-item {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 250px;
  transition: transform 0.3s;
  cursor: pointer;
}

.book-item:hover {
  transform: translateY(-10px);
}

.book-item h3,
.book-item h4 {
  margin: 10px 0;
}

.book-item .rating {
  font-weight: bold;
  color: #f39c12;
}

.book-item .review {
  font-style: italic;
  margin: 15px 0;
  transition: background-color 0.3s, padding 0.3s, border-radius 0.3s;
}

/* Highlight the review text when hovering on the book-item */
.book-item:hover .review {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  color: #333;
}

.green {
  background-color: lightgreen;
  border-left: 5px solid green;
}

.red {
  background-color: #ffcccb;
  border-left: 5px solid red;
}
</style>
