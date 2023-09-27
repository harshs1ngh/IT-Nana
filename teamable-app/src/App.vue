<template>
  <div>
    <div v-show="!isEditMode">
      <h1>User Profile</h1>
      <img :src="image" alt="Profile Photo" />
      <span>Name: </span><b id="name">{{ name }}</b>
      <hr />
      <span>Email: </span><b id="email">{{ email }}</b>
      <hr />
      <span>Interests: </span><b id="interests">{{ interests }}</b>
      <hr />
      <button @click="handleEditProfile">Edit Profile</button>
    </div>
    <div v-show="isEditMode">
      <h1>User Profile</h1>
      <img :src="image" alt="Profile Photo" />
      <span>Name: </span>
      <input type="text" v-model="name" id="input-name" />
      <hr />
      <span>Email: </span>
      <input type="text" v-model="email" id="input-email" />
      <hr />
      <span>Interests: </span>
      <input type="text" v-model="interests" id="input-interests" />
      <hr />
      <button @click="handleUpdateProfile">Update Profile</button>
    </div>
  </div>
</template>

<script>
import image from "./profile.jpeg";
export default {
  name: "App",
  data() {
    return {
      image: image,
      name: "Harshit Singh",
      email: "harshit.singh@example.com",
      interests: "Programming, Reading",
      isEditMode: false,
    };
  },
  methods: {
    handleEditProfile() {
      this.isEditMode = true;
    },
    handleUpdateProfile() {
      this.isEditMode = false;
    },
  },
};
</script>

<style>
img {
  width: 320px;
  height: 280px;
  display: block;
  margin-bottom: 40px;
}

div {
  width: 80%;
  margin: 40px auto;
}

hr {
  width: 400px;
  margin: 25px 0;
}

button {
  width: 160px;
  height: 45px;
  font-size: 15px;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
}

input {
  width: 200px;
  font-size: 15px;
  padding: 10px;
}
</style>
