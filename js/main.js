window.onload = function () {
    let clock = document.getElementById('clock');

    function updateClock() {
        let now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${hours}시:${minutes}분:${seconds}초`;
    }

    setInterval(updateClock, 1000);

    updateClock();
};