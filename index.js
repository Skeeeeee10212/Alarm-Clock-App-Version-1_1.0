function displayMilitaryTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('currenttime').textContent = timeString;
}

setInterval(displayMilitaryTime, 1000);

const audio = new Audio('alarm-clock-90867.mp3')

const alarmTimeInput = document.getElementById('timeInput');
const setAlarmButton = document.getElementById('addalarmBtn')

setAlarmButton.addEventListener('click', () => {
    const alarmTime = alarmTimeInput.value;

    if (alarmTime) {
      const [hours, minutes] = alarmTime.split(':').map(Number);

      const now = new Date();
      const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes
      );

      const timeUntilAlarm = alarmDate.getTime() - now.getTime();

      if (timeUntilAlarm > 0) {
        setTimeout(() => {
          audio.play();
        }, timeUntilAlarm);

        alert(`Alarm set for ${alarmTime}`);
      } else {
        alert('Invalid alarm time. Please enter a future time.');
      }
    } else {
      alert('Please enter an alarm time.');
    }
  });

  const clearallBtn = document.getElementById("clearallBtn");
  clearallBtn.addEventListener("click", function() {
    location.reload();
 });