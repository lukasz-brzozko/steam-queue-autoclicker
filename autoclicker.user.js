// ==UserScript==
// @name         Steam kolejka odkryć
// @namespace    https://github.com/lukasz-brzozko/steam-queue-autoclicker
// @version      0.1.3
// @description  Automatyczne przeglądanie kolejki odkryć
// @author       Łukasz Brzózko
// @include      https://store.steampowered.com/explore/*
// @include      https://store.steampowered.com/app/*
// @include      https://store.steampowered.com/agecheck/*
// @updateURL    https://raw.githubusercontent.com/lukasz-brzozko/steam-queue-autoclicker/master/autoclicker.meta.js
// @downloadURL  https://raw.githubusercontent.com/lukasz-brzozko/steam-queue-autoclicker/master/autoclicker.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let queryInterval;
  const queueExploreSubtext = document.querySelector(".subtext");

  if (
    !queueExploreSubtext ||
    !queueExploreSubtext.textContent.includes("jutro")
  ) {
    let currentLink;
    queryInterval = setInterval(() => {
      if (currentLink !== location.href) {
        currentLink = location.href;
        const nextBtn = document.querySelector(".next_in_queue_content");
        const nextQueryBtn = document.querySelector("#refresh_queue_btn");
        const nextQueryBtnAlternate = document.querySelector(
          ".btnv6_blue_hoverfade.btn_medium.right"
        );
        if (!nextBtn && nextQueryBtn) {
          nextQueryBtn.click();
        } else if (nextBtn && !nextQueryBtn) {
          nextBtn.click();
        } else {
          nextQueryBtnAlternate.click();
        }
      }
    }, 1000);
  } else {
    clearInterval(queryInterval);
    alert("Karty zostały wydropione :)");
  }
})();
