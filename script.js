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
    usMarketCountdown.textContent = getCountdown(9, 30);  // US market opens at 9:30

    // 다른 나라의 카운트다운도 유사한 방식으로 추가

    setTimeout(updateCountdown, 1000);  // 매 초마다 업데이트
}

function showKoreaTime() {
    const now = new Date();
    // 한국 시간으로 조정
    const koreaTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    const hours = koreaTime.getHours();
    const minutes = koreaTime.getMinutes();
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    document.getElementById('koreaTime').innerText = `한국 시간: ${formattedTime}`;
}

// 처음 로드 시 한 번 호출하고, 1분마다 갱신
showKoreaTime();
setInterval(showKoreaTime, 60000);
updateCountdown();
