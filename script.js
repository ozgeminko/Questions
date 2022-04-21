const jokes = document.querySelectorAll(".joke");
console.log(jokes);

jokes.forEach(function (joke) {
  joke.addEventListener("click", function () {
    joke.classList.toggle("active");
  });
});
