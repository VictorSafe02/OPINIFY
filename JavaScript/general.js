document.querySelectorAll(".star").forEach((star) => {
  star.addEventListener("click", function () {
    let value = this.getAttribute("data-value");
    document.querySelectorAll(".star").forEach((s) => {
      s.style.color = s.getAttribute("data-value") <= value ? "gold" : "gray";
      s.classList.toggle("active", s.getAttribute("data-value") <= value);
    });
  });
});

document.getElementById("reset").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Reset button clicked");
  window.location.href = "../HTML/changepassword.html";
});

document.getElementById("add").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Reset button clicked");
  window.location.href = "../HTML/uploadphoto.html";
});

document.getElementById("change").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Reset button clicked");
  window.location.href = "../HTML/changeemail.html";
});
