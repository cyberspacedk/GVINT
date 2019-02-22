"use strict";
import { play } from "./server";
import startgame from "../audio/Background/startgame.mp3";
import "../sass/start-game.scss";

import bg4 from "../img/wallpapers/connecting-window4.jpg";
import bg5 from "../img/wallpapers/connecting-window5.jpg";
import bg6 from "../img/wallpapers/connecting-window6.jpg";
import bg7 from "../img/wallpapers/connecting-window7.jpg";

function start() {
  //  sound effect
  const START = new Audio();
  START.src = startgame;
  START.play();

  const images = [{ url: bg4 }, { url: bg5 }, { url: bg6 }, { url: bg7 }];
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.classList.add("start-connecting");
  container.innerHTML = `<div id="cube-loader">
        <div class="caption">
          <div class="cube-loader">
            <div class="cube loader-1"></div>
            <div class="cube loader-2"></div>
            <div class="cube loader-4"></div>
            <div class="cube loader-3"></div>
          </div>
        </div>
      </div>`;

  body.append(container);

  let x = null;
  const timeout = setInterval(() => changeUrl(images), 4000);

  function changeUrl(img) {
    let idx = Math.floor(Math.random() * img.length);
    while (x === idx) {
      idx = Math.floor(Math.random() * img.length);
    }
    x = idx;
    container.style.backgroundImage = `url(${images[idx].url})`;
  }

  play();
}

export { start };
