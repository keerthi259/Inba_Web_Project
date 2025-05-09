<template>
  <div id="app">
    <MyHeader bookName="Book Review" authorName="Collections" />
    <BookBox :books="books" />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import BookBox from './components/BookBox.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
    BookBox
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    async fetchBooks() {
      const res = await fetch("http://localhost:7291/books");
      const data = await res.json();
      console.log(data);
      return data;
    }
  },
  async created() {
    this.books = await this.fetchBooks();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 30px auto;
  overflow: auto;
  border-radius: 5px;
}

h1, h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

div {
  margin-bottom: 1.5em;
  text-align: center;
}

.green {
  background-color: #28a745;
}

.red {
  background-color: #dc3545;
}

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
}

.book-item:hover {
  transform: translateY(-10px);
}

.book-item h3, .book-item h4 {
  margin: 10px 0;
}

.book-item .rating {
  font-weight: bold;
  color: #f39c12;
}

.book-item .review {
  font-style: italic;
  margin: 15px 0;
}
</style>
