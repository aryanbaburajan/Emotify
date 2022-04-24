/*
MIT License

Copyright (c) 2022 Duckie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

let emoteList = {};

function emAddDefault() {
  emAddEmote({
    sigh: "https://cdn-icons-png.flaticon.com/512/742/742752.png",
    sweat: "https://cdn-icons-png.flaticon.com/512/742/742860.png",
    neutral: "https://cdn-icons-png.flaticon.com/512/742/742774.png",
    love: "https://cdn-icons-png.flaticon.com/512/742/742750.png",
    sleepy: "https://cdn-icons-png.flaticon.com/512/742/742927.png",
    laugh: "https://cdn-icons-png.flaticon.com/512/742/742920.png",
    smile: "https://cdn-icons-png.flaticon.com/512/742/742940.png",
    sob: "https://cdn-icons-png.flaticon.com/512/742/742784.png",
    confused: "https://cdn-icons-png.flaticon.com/512/742/742753.png",
    sad: "https://cdn-icons-png.flaticon.com/512/742/742758.png",
    sneeze: "https://cdn-icons-png.flaticon.com/512/742/742787.png",
    angry: "https://cdn-icons-png.flaticon.com/512/742/742744.png",
    yawn: "https://cdn-icons-png.flaticon.com/512/742/742911.png",
    kiss: "https://cdn-icons-png.flaticon.com/512/742/742745.png",
    sweat_smile: "https://cdn-icons-png.flaticon.com/512/742/742919.png",
    amazed: "https://cdn-icons-png.flaticon.com/512/742/742939.png",
    wink: "https://cdn-icons-png.flaticon.com/512/742/742922.png",
    smirk: "https://cdn-icons-png.flaticon.com/512/742/742778.png",
    unamused: "https://cdn-icons-png.flaticon.com/512/742/742934.png",
    joy: "https://cdn-icons-png.flaticon.com/512/742/742921.png",
    grin: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  });
}

function emAddEmote(emotes) {
  for (emote in emotes) {
    emoteList[emote] = emotes[emote];
  }
  emConvert();
}

function emConvert(convertingElement) {
  let elements;

  if (convertingElement == undefined) {
    elements = document.body.getElementsByClassName("em");
  } else {
    elements = [convertingElement];
  }

  for (element of elements) {
    for (key in emoteList) {
      if (element.innerHTML != undefined) {
        element.innerHTML = element.innerHTML.replace(
          ":" + key + ":",
          '<img class="em" src="' +
            emoteList[key] +
            '" style="transform: translateY(0.25em);"> &emsp;&thinsp;'
        );
      }

      if (element.value != undefined) {
        element.value = element.value.replace(
          ":" + key + ":",
          '<img class="em" src="' +
            emoteList[key] +
            '" style="transform: translateY(0.25em);"> &emsp;&thinsp;'
        );
      }
    }
    element.height =
      parseInt(window.getComputedStyle(element).fontSize, 10) + 6;
  }
}

window.onload = function () {
  emAddDefault();
  emConvert();

  console.log("Default emoji icons created by flaticon.com");
  console.log("https://www.flaticon.com/free-icons/emoji");
};
