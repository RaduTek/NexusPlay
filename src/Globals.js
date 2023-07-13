const PlaybackStatus = ["play", "pause", "ended"];

function formatTime(seconds) {
    const date = new Date(null);
    date.setSeconds(seconds);

    let formattedTime = date.toISOString().substring(11, 19);

    if (formattedTime.startsWith("00:")) {
        formattedTime = formattedTime.substring(3);
    }

    if (formattedTime.startsWith("0")) {
        formattedTime = formattedTime.substring(1);
    }

    return formattedTime;
}

export { PlaybackStatus, formatTime };
