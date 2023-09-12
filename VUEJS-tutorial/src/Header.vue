<template>
  <header>
    <h1 :style="{ color: color }">{{ title }}</h1>
    <button @click="handleClick()" :style="{ background: bgColor }">
      {{ action }}
    </button>
  </header>
</template>

<!-- Export everything that is part of this file as {App} -->
<script>
export default {
  name: "Header",
  props: {
    title: String,
    action: String,
    color: String,
    bgColor: String,
  },
  methods: {
    handleClick() {
      console.log("Button Clicked");
    },
  },
};
</script>

<style>
button {
  padding: 10px 20px;
  font-size: 15px;
  background: seagreen;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

h1 {
  color: yellowgreen;
}
</style>
