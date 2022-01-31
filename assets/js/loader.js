document.body.classList.add("overflow-h");

window.addEventListener("load", () => {
  document.body.classList.remove("overflow-h");
  document.querySelector(".preloader").classList.add("done");

  setTimeout(()=> {
    document.querySelector(".preloader").remove();
  }, 200)
});
