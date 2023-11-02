function getLocalTime(offset) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const local = new Date(utc + (3600000 * offset));
    return local.toLocaleTimeString();
}

function getCountdown(targetHour, targetMinute) {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(targetHour);
    targetTime.setMinutes(targetMinute);
    targetTime.setSeconds(0);

    if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    const timeDiff = targetTime - now;
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${hours}시 ${minutes}분 ${seconds}초`;
}

function updateCountdown() {
    const usMarketCountdown = document.querySelector('.us-market .countdown');
    usMarketCountdown.textContent = getCountdown(9, 30);

    setTimeout(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    function updateKoreanTime() {
        const now = new Date();
        const koreaTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
        const hours = koreaTime.getHours();
        const minutes = koreaTime.getMinutes();
        const seconds = koreaTime.getSeconds();
        
        const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        document.getElementById('koreaTime').innerText = `한국 시간: ${formattedTime}`;
    }

    updateKoreanTime();
    setInterval(updateKoreanTime, 1000);
    updateCountdown();
});
