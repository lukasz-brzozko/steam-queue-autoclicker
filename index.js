// ==UserScript==
// @name         Steam kolejka odkryć
// @namespace    https://steamcommunity.com/id/pr0sto
// @version      0.1
// @description  Automatyczne przeglądanie kolejki odkryć
// @author       pr0sto
// @include      https://store.steampowered.com/explore/*
// @include      https://store.steampowered.com/app/*
// @include      https://store.steampowered.com/agecheck/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var cardsCounter = document.querySelector("#header_notification_link span");
  var queriesNumber = 1;
  if (parseInt(cardsCounter.textContent) < queriesNumber) {
    var currentLink;
    var startQuery = setInterval(() => {
      if (currentLink !== location.href) {
        currentLink = location.href;
        var nextBtn = document.querySelector(".next_in_queue_content");
        var nextQueryBtn = document.querySelector("#refresh_queue_btn");
        var nextQueryBtn2 = document.querySelector(
          ".btnv6_blue_hoverfade.btn_medium.right"
        );
        if (!nextBtn && nextQueryBtn) {
          nextQueryBtn.click();
        } else if (nextBtn && !nextQueryBtn) {
          nextBtn.click();
        } else {
          nextQueryBtn2.click();
        }
      }
    }, 1000);
  } else {
    clearInterval(startQuery);
    alert("Karty zostały wydropione :)");
  }
})();
