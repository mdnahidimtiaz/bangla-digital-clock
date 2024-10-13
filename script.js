// Function to convert English numbers to Bangla
function toBanglaNumber(num) {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').reduce((acc, digit) => acc + banglaDigits[digit], '');
}

// Function to update the clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = 'এ.এম';

    // Convert 24-hour format to 12-hour format
    if (hours >= 12) {
        period = 'পি.এম';
        if (hours > 12) {
            hours -= 12; // Convert to 12-hour format
        }
    } else if (hours === 0) {
        hours = 12; // Midnight edge case
    }

    // Pad with leading zeroes if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Convert to Bangla
    const banglaTime = toBanglaNumber(hours) + ':' + toBanglaNumber(minutes) + ':' + toBanglaNumber(seconds) + ' ' + period;

    document.getElementById('bangla-clock').innerText = banglaTime;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display clock immediately on load
updateClock();
