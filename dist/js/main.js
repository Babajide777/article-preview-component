const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

if (window.screen.width <= 450) {
  button1.addEventListener("click", (e) => {
    let secondFooter = e.currentTarget.parentElement.nextElementSibling;
    if (secondFooter.classList.contains("hide")) {
      secondFooter.classList.remove("hide");
      console.log(secondFooter);
    }

    // secondFooter.classList.toggle("hide");
    console.log(e.currentTarget.parentElement);
    console.log(secondFooter.classList);
    e.currentTarget.parentElement.classList.toggle("hide");
  });

  button2.addEventListener("click", (e) => {
    let firstFooter =
      e.currentTarget.parentElement.parentElement.previousElementSibling;
    firstFooter.classList.toggle("hide");
    e.currentTarget.parentElement.parentElement.classList.toggle("hide");
  });
}

button1.addEventListener("click", (e) => {
  let secondFooter = e.currentTarget.parentElement.nextElementSibling;
  secondFooter.classList.toggle("hide");
});
