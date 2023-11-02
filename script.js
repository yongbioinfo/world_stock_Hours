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

function updateCountdowns() {
    const usMarketCountdown = document.querySelector('.us-market .countdown');
    usMarketCountdown.textContent = getCountdown(9, 30);

    const chinaMarketCountdown = document.querySelector('.china-market .countdown');
    chinaMarketCountdown.textContent = getCountdown(9, 30);

    // 다른 나라들에 대한 카운트다운도 이와 같은 방식으로 추가할 수 있습니다.
}

function updateLocalTimes() {
    const usLocalTimeElement = document.querySelector('.us-market .local-time');
    usLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(-4)}`; // 미국 동부 표준시 (EDT)

    const chinaLocalTimeElement = document.querySelector('.china-market .local-time');
    chinaLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(8)}`; // 중국 표준시 (CST)
    // 다른 나라들에 대한 현지 시간도 이와 같은 방식으로 추가할 수 있습니다.
}

function updateKoreanTime() {
    const now = new Date();
    const koreanTimeString = new Intl.DateTimeFormat('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Seoul'
    }).format(now);

    document.getElementById('koreaTime').innerText = `한국 시간: ${koreanTimeString}`;
}

document.addEventListener('DOMContentLoaded', function() {
    updateKoreanTime();
    setInterval(updateKoreanTime, 1000);
    
    updateLocalTimes();
    setInterval(updateLocalTimes, 1000);
    
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
});
