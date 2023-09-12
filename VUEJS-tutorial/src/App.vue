<template>
  <div>
    <div class="container">
      <Header
        title="Vue App"
        action="Get Started"
        color="lightblue"
        bgColor="darkblue"
      ></Header>
    </div>
    <div class="container">
      <Header title="Todo List" action="Add Task"></Header>
    </div>
  </div>
</template>

<!-- Export everything that is part of this file as {App} -->
<script>
import Header from "./Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

.container {
  border: 1px solid steelblue;
  padding: 30px;
  max-width: 500px;
  margin: auto;
}
</style>
