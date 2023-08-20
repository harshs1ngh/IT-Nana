function handleEditProfile() {
  document.getElementById("input-name").value =
    document.getElementById("name").textContent;
  document.getElementById("input-email").value =
    document.getElementById("email").textContent;
  document.getElementById("input-interests").value =
    document.getElementById("interests").textContent;
  document.getElementById("edit-view").style.display = "block";
  document.getElementById("display-view").style.display = "none";
}

function handleUpdateProfile() {
  document.getElementById("name").textContent =
    document.getElementById("input-name").value;
  document.getElementById("email").textContent =
    document.getElementById("input-email").value;
  document.getElementById("interests").textContent =
    document.getElementById("input-interests").value;
  document.getElementById("edit-view").style.display = "none";
  document.getElementById("display-view").style.display = "block";
}
