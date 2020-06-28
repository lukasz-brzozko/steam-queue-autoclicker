// ==UserScript==
// @name         Steam Discovery Queue Autoclicker
// @namespace    https://github.com/lukasz-brzozko/steam-queue-autoclicker
// @version      0.1.4
// @description  Holiday cards farming script used for Steam Discovery Queue
// @author       Łukasz Brzózko
// @include      https://store.steampowered.com/explore/*
// @include      https://store.steampowered.com/app/*
// @include      https://store.steampowered.com/agecheck/*
// @updateURL    https://raw.githubusercontent.com/lukasz-brzozko/steam-queue-autoclicker/master/autoclicker.meta.js
// @downloadURL  https://raw.githubusercontent.com/lukasz-brzozko/steam-queue-autoclicker/master/autoclicker.user.js
// @grant        none
// ==/UserScript==

function getTomorrowWord(lang) {
  let tomorrowWord = "";

  switch (lang) {
    case "pl":
      tomorrowWord = "jutro";
      break;

    default:
      tomorrowWord = "tomorrow";
      break;
  }

  return tomorrowWord;
}

(function () {
  "use strict";

  const html = document.documentElement;
  const lang = html.getAttribute("lang");
  let queryInterval;

  const tomorrowWord = getTomorrowWord(lang);
  const queueExploreSubtext = document.querySelector(".subtext");

  if (
    !queueExploreSubtext ||
    !queueExploreSubtext.textContent.includes(tomorrowWord)
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
    alert("All cards have been dropped :)");
  }
})();
