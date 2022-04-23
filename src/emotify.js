let emoteList = {};

function emAddEmote(emotes) {
	for (emote in emotes) {
		emoteList[emote] = emotes[emote];
	}
	emConvert();
}

function emConvert(textElement) {
	let elements = document.getElementsByClassName("em");

	for (textElement of elements) {
		for (key in emoteList) {
			textElement.innerHTML = textElement.innerHTML.replace(":" + key + ":", "<img class=\"duckmote\" src=\"" + emoteList[key] + "\" style=\"position: absolute; margin: 2px; transform: translateY(1.1em);\"> &emsp;&thinsp;");
		}

		let generatedEmotes = document.getElementsByClassName("duckmote");

		for (element of generatedEmotes) {
			element.height = parseInt(window.getComputedStyle(textElement).fontSize, 10) + 2;
		}
	}
}

window.onload = function() {
	emConvert();
}