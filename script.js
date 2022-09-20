const Readed_Button = document.querySelector(".notifications-header__readed");
const Alert_points = document.querySelectorAll(".alert-point");
const counter = document.querySelector(".notifications-header__counterValue");
const Active_notifications = document.querySelectorAll(
  ".notifications-container__content"
);

Readed_Button.addEventListener("click", () => {
  // console.log("ok");
  counter.innerHTML = "0";

  Active_notifications.forEach(notification => {
    if(!notification.classList.contains('inactive')) {
        notification.classList.add('inactive')
    }
  })

  Alert_points.forEach((point) => {
    point.style.display = "none";
  });
});
