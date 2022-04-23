let emoteList = {};

function emAddEmote(emotes) {
	for (emote in emotes) {
		emoteList[emote] = emotes[emote];
	}
}

function emConvert(textElement) {
	for (key in emoteList) {
		textElement.innerHTML = textElement.innerHTML.replace(":" + key + ":", "<img class=\"duckmote\" src=\"" + emoteList[key] + "\" style=\"position: absolute; margin: 2px;\"> &emsp;&thinsp;");
	}

	let generatedEmotes = document.getElementsByClassName("duckmote");

	for (element of generatedEmotes) {
		element.height = parseInt(window.getComputedStyle(textElement).fontSize, 10) + 2;
	}
}

document.onload = function() {
	let elements = document.getElementsByClassName("em");

	for (element of elements) {
		emConvert(element);
	}
}