
export function countdown() {
    const countdown = document.querySelector("#countdown");
    if (!countdown) return;

    const timeElements = countdown.querySelectorAll(".time");
    if (timeElements.length !== 4) return;

    const daysElement = timeElements[0];
    const hoursElement = timeElements[1];
    const minutesElement = timeElements[2];
    const secondsElement = timeElements[3];

    // start the timer
    const duration = (15 * 24 * 60 * 60) + (21 * 60 * 60) + (46 * 60) + 8;  //15 days 21 hours 46 minutes 8 seconds
    let endTime = Date.now() + duration * 1000;

    function updateCountdown() {
        let remaining = Math.max(0, endTime - Date.now());

        let totalSeconds = Math.floor(remaining / 1000);
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        totalSeconds %= 24 * 60 * 60;
        const hours = Math.floor(totalSeconds / (60 * 60));
        totalSeconds %= 60 * 60;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        // update html elements
        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");

        if (remaining <= 0) {
            endTime = Date.now() + duration * 1000;
        }

    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}