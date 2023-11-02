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

    const ukMarketCountdown = document.querySelector('.uk-market .countdown');
    ukMarketCountdown.textContent = getCountdown(8, 0);    

    const chinaMarketCountdown = document.querySelector('.china-market .countdown');
    chinaMarketCountdown.textContent = getCountdown(9, 0);

    const japanMarketCountdown = document.querySelector('.japan-market .countdown');
    japanMarketCountdown.textContent = getCountdown(9, 30);

    const indiaMarketCountdown = document.querySelector('.india-market .countdown');
    indiaMarketCountdown.textContent = getCountdown(9, 30);

    const ausMarketCountdown = document.querySelector('.aus-market .countdown');
    ausMarketCountdown.textContent = getCountdown(9, 30);

    const canadaCountdown = document.querySelector('.canada-market .countdown');
    ausMarketCountdown.textContent = getCountdown(9, 30);

    const brazCountdown = document.querySelector('.braz-market .countdown');
    brazMarketCountdown.textContent = getCountdown(10, 0);

    // 다른 나라들에 대한 카운트다운도 이와 같은 방식으로 추가할 수 있습니다.
}

function updateLocalTimes() {
    const usLocalTimeElement = document.querySelector('.us-market .local-time');
    usLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(-4)}`; // 미국 동부 표준시 (EDT)

    const ukLocalTimeElement = document.querySelector('.uk-market .local-time');
    ukLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(0)}`; 

    const chinaLocalTimeElement = document.querySelector('.china-market .local-time');
    chinaLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(8)}`; 

    const japanLocalTimeElement = document.querySelector('.japan-market .local-time');
    japanLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(4)}`; 

    const indiaLocalTimeElement = document.querySelector('.india-market .local-time');
    indiaLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(3)}`; 
    
    const ausLocalTimeElement = document.querySelector('.aus-market .local-time');
    ausLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(2)}`; 
    
    const canadaLocalTimeElement = document.querySelector('.canada-market .local-time');
    canadaLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(1)}`; 

    const brazLocalTimeElement = document.querySelector('.braz-market .local-time');
    brazLocalTimeElement.innerHTML = `현지 시간: ${getLocalTime(0)}`; 
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
