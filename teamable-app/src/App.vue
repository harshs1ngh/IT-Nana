<template>
  <div>
    <div id="display-view">
      <h1>User Profile</h1>
      <img src="profile.jpeg" alt="Profile Photo" />
      <span>Name: </span><b id="name">Harshit Singh</b>
      <hr />
      <span>Email: </span><b id="email">auharsh@gmail.com</b>
      <hr />
      <span>Interests: </span><b id="interests">Programming</b>
      <hr />
      <button onclick="handleEditProfile()">Edit Profile</button>
    </div>
    <div id="edit-view">
      <h1>User Profile</h1>
      <img src="profile.jpeg" alt="Profile Photo" />
      <span>Name: </span>
      <input type="text" placeholder="Harshit Singh" id="input-name" />
      <hr />
      <span>Email: </span>
      <input type="text" placeholder="auharsh@gmail.com" id="input-email" />
      <hr />
      <span>Interests: </span>
      <input type="text" placeholder="Programming" id="input-interests" />
      <hr />
      <button onclick="handleUpdateProfile()">Update Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
