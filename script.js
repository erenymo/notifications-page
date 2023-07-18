"use strict";

// Elements
const notification = document.querySelectorAll(".notification");
const notificationsUnread = document.querySelectorAll(".notification__unread");
const notificationCounter = document.querySelector(".notification__counter");
const notificationsContainer = document.querySelector(
  ".notifications__container"
);
const btnMarkAll = document.querySelector(".btn__mark-all");
const unreadDot = document.querySelectorAll(".unread__dot");

// clear red dots
const clearRedDot = function (unreadDot) {
  unreadDot.forEach((d) => d.classList.add("hidden"));
};

// notification__unread counter
let counter = 0;
notification.forEach(function (n) {
  if (n.classList.contains("notification__unread")) counter++;
});

const updateNotificationCounter = function () {
  if (!(counter < 0)) notificationCounter.textContent = `${counter}`;
};

// Click to read
notification.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.classList.contains("notification__unread")) {
      e.classList.remove("bg-veryLightGrayishBlue", "notification__unread");
      e.querySelector(".unread__dot").classList.add("hidden");
      counter--;
      updateNotificationCounter();
    }
  });
});

// Mark all as read
btnMarkAll.addEventListener("click", function () {
  notification.forEach(function (n) {
    if (n.classList.contains("notification__unread")) {
      n.classList.remove("bg-veryLightGrayishBlue", "notification__unread");
      counter = 0;
      clearRedDot(unreadDot);
      updateNotificationCounter();
    }
  });
});
