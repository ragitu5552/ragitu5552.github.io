// Get elements
/*const calendar = document.getElementById('calendar');
const currentMonthYear = document.getElementById('current-month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const notePanel = document.getElementById('note-panel');
const noteDate = document.getElementById('note-date');
const noteInput = document.getElementById('note-input');
const saveNoteButton = document.getElementById('save-note');
const closeNotePanelButton = document.getElementById('close-note-panel');

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Load data from localStorage
let habitData = JSON.parse(localStorage.getItem('habitData')) || {};

// Render the calendar
function renderCalendar(year, month) {
  calendar.innerHTML = '';
  currentMonthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement('div');
    calendar.appendChild(emptyDay);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;

    const noteIcon = document.createElement('span');
    noteIcon.classList.add('note-icon');
    noteIcon.textContent = '✏️';
    dayElement.appendChild(noteIcon);

    const dateKey = `${year}-${month}-${day}`;
    if (habitData[dateKey]) {
      if (habitData[dateKey].color) {
        dayElement.classList.add(habitData[dateKey].color);
      }
    }

    dayElement.addEventListener('click', () => {
      if (dayElement.classList.contains('red')) {
        dayElement.classList.remove('red');
        dayElement.classList.add('blue');
        habitData[dateKey] = { ...habitData[dateKey], color: 'blue' };
      } else if (dayElement.classList.contains('blue')) {
        dayElement.classList.remove('blue');
        delete habitData[dateKey].color;
      } else {
        dayElement.classList.add('red');
        habitData[dateKey] = { ...habitData[dateKey], color: 'red' };
      }
      localStorage.setItem('habitData', JSON.stringify(habitData));
    });

    noteIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      noteDate.textContent = `${day} ${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
      noteInput.value = habitData[dateKey]?.note || '';
      notePanel.classList.add('open');
    });

    calendar.appendChild(dayElement);
  }
}

// Save note
saveNoteButton.addEventListener('click', () => {
  const dateKey = `${currentYear}-${currentMonth}-${noteDate.textContent.split(' ')[0]}`;
  habitData[dateKey] = { ...habitData[dateKey], note: noteInput.value };
  localStorage.setItem('habitData', JSON.stringify(habitData));
  notePanel.classList.remove('open');
});

// Close note panel
closeNotePanelButton.addEventListener('click', () => {
  notePanel.classList.remove('open');
});

// Navigate to the previous month
prevMonthButton.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentYear, currentMonth);
});

// Navigate to the next month
nextMonthButton.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentYear, currentMonth);
});

// Initial render
renderCalendar(currentYear, currentMonth);



*/
// Get elements
// Get elements
// const calendar = document.getElementById('calendar');
// const currentMonthYear = document.getElementById('current-month-year');
// const prevMonthButton = document.getElementById('prev-month');
// const nextMonthButton = document.getElementById('next-month');
// const notePanel = document.getElementById('note-panel');
// const noteDate = document.getElementById('note-date');
// const noteInput = document.getElementById('note-input');
// const saveNoteButton = document.getElementById('save-note');
// const closeNotePanelButton = document.getElementById('close-note-panel');

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let currentMonth = currentDate.getMonth();

// // // Clear existing data and initialize fresh
// // localStorage.removeItem('habitData');
// //let habitData = {};
// let habitData = JSON.parse(localStorage.getItem('habitData')) || {};
// // Render the calendar
// function renderCalendar(year, month) {
//     calendar.innerHTML = '';
//     currentMonthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const firstDay = new Date(year, month, 1).getDay();

//     // Add empty cells for days before the first day of the month
//     for (let i = 0; i < firstDay; i++) {
//         const emptyDay = document.createElement('div');
//         calendar.appendChild(emptyDay);
//     }

//     // Create calendar days
//     for (let day = 1; day <= daysInMonth; day++) {
//         const dayElement = document.createElement('div');
//         dayElement.classList.add('day');
//         dayElement.textContent = day;

//         const noteIcon = document.createElement('span');
//         noteIcon.classList.add('note-icon');
//         noteIcon.textContent = '✏️';
//         dayElement.appendChild(noteIcon);

//         const dateKey = `${year}-${month}-${day}`;
        
//         // Apply saved color if it exists in localStorage
//         if (habitData[dateKey] && habitData[dateKey].color) {
//             dayElement.classList.add(habitData[dateKey].color);
//         }

//         // Cycle through colors: none -> red -> blue -> none
//         dayElement.addEventListener('click', () => {
//             if (!habitData[dateKey] || !habitData[dateKey].color) {
//                 dayElement.classList.add('red');
//                 habitData[dateKey] = { ...habitData[dateKey], color: 'red' };
//             } else if (habitData[dateKey].color === 'red') {
//                 dayElement.classList.remove('red');
//                 dayElement.classList.add('blue');
//                 habitData[dateKey].color = 'blue';
//             } else {
//                 dayElement.classList.remove('blue');
//                 delete habitData[dateKey].color;
//                 if (Object.keys(habitData[dateKey]).length === 0) {
//                     delete habitData[dateKey];
//                 }
//             }
//             localStorage.setItem('habitData', JSON.stringify(habitData));
//         });

//         // Note functionality
//         noteIcon.addEventListener('click', (e) => {
//             e.stopPropagation();
//             noteDate.textContent = `${day} ${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
//             noteInput.value = habitData[dateKey]?.note || '';
//             notePanel.classList.add('open');
//         });

//         calendar.appendChild(dayElement);
//     }
// }

// // Save note
// saveNoteButton.addEventListener('click', () => {
//     const dateKey = `${currentYear}-${currentMonth}-${noteDate.textContent.split(' ')[0]}`;
//     habitData[dateKey] = {
//         ...habitData[dateKey],
//         note: noteInput.value
//     };
//     localStorage.setItem('habitData', JSON.stringify(habitData));
//     notePanel.classList.remove('open');
// });

// // Close note panel
// closeNotePanelButton.addEventListener('click', () => {
//     notePanel.classList.remove('open');
// });

// // Navigate to the previous month
// prevMonthButton.addEventListener('click', () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     renderCalendar(currentYear, currentMonth);
// });

// // Navigate to the next month
// nextMonthButton.addEventListener('click', () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     renderCalendar(currentYear, currentMonth);
// });

// // Initial render
// renderCalendar(currentYear, currentMonth);

// Get elements
const calendar = document.getElementById('calendar');
const currentMonthYear = document.getElementById('current-month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const notePanel = document.getElementById('note-panel');
const noteDate = document.getElementById('note-date');
const noteInput = document.getElementById('note-input');
const saveNoteButton = document.getElementById('save-note');
const closeNotePanelButton = document.getElementById('close-note-panel');
const currentStreakElement = document.getElementById('current-streak');
const successRateBar = document.getElementById('success-rate-bar');
const successRateText = document.getElementById('success-rate-text');
const habitTrends = document.getElementById('habit-trends');

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
const startDate = new Date(2024, 2, 12); // February 12, 2024

// Load data from localStorage
let habitData = JSON.parse(localStorage.getItem('habitData')) || {};

// Calculate streak and success rate
function updateAnalytics() {
    let streak = 0;
    let successCount = 0;
    let totalDays = 0;
    let currentStreak = 0;
    let date = new Date(startDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    while (date <= today) {
        const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        totalDays++;

        if (habitData[dateKey] && habitData[dateKey].color === 'blue') {
            successCount++;
            currentStreak++;
            if (currentStreak > streak) {
                streak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }

        date.setDate(date.getDate() + 1);
    }

    // Update streak display
    currentStreakElement.textContent = `${currentStreak} days`;

    // Update success rate
    const successRate = totalDays > 0 ? (successCount / totalDays) * 100 : 0;
    successRateBar.style.width = `${successRate}%`;
    successRateText.textContent = `${successRate.toFixed(1)}%`;

    // Update trends
    updateTrends(successCount, totalDays, currentStreak);
}

// Update trends and insights
function updateTrends(successCount, totalDays, currentStreak) {
    const trends = [];

    // Add streak milestone messages
    if (currentStreak >= 7) {
        trends.push(`🎉 Amazing! You've maintained your habit for ${currentStreak} days in a row!`);
    } else if (currentStreak >= 3) {
        trends.push(`👍 Great job! You're on a ${currentStreak}-day streak!`);
    }

    // Add success rate insights
    const successRate = (successCount / totalDays) * 100;
    if (successRate >= 80) {
        trends.push(`⭐ Outstanding! You're successful ${successRate.toFixed(1)}% of the time!`);
    } else if (successRate >= 50) {
        trends.push(`📈 Good progress! Your success rate is ${successRate.toFixed(1)}%`);
    } else if (totalDays > 0) {
        trends.push(`💪 Keep going! You're building this habit day by day.`);
    }

    // Display trends
    habitTrends.innerHTML = trends.join('<br>');
}

// Render the calendar
function renderCalendar(year, month) {
    calendar.innerHTML = '';
    currentMonthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        calendar.appendChild(emptyDay);
    }

    // Create calendar days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        const noteIcon = document.createElement('span');
        noteIcon.classList.add('note-icon');
        noteIcon.textContent = '✏️';
        dayElement.appendChild(noteIcon);

        const dateKey = `${year}-${month}-${day}`;
        const currentDateObj = new Date(year, month, day);
        
        // Disable dates before start date
        // if (currentDateObj < startDate) {
        //     dayElement.classList.add('disabled');
        if (currentDateObj.setHours(0, 0, 0, 0) < startDate.setHours(0, 0, 0, 0)) {
          dayElement.classList.add('disabled');
        } else {
            // Apply saved color if it exists in localStorage
            if (habitData[dateKey] && habitData[dateKey].color) {
                dayElement.classList.add(habitData[dateKey].color);
            }

            // Cycle through colors: none -> red -> blue -> none
            dayElement.addEventListener('click', () => {
                if (!habitData[dateKey] || !habitData[dateKey].color) {
                    dayElement.classList.add('red');
                    habitData[dateKey] = { ...habitData[dateKey], color: 'red' };
                } else if (habitData[dateKey].color === 'red') {
                    dayElement.classList.remove('red');
                    dayElement.classList.add('blue');
                    habitData[dateKey].color = 'blue';
                } else {
                    dayElement.classList.remove('blue');
                    delete habitData[dateKey].color;
                    if (Object.keys(habitData[dateKey]).length === 0) {
                        delete habitData[dateKey];
                    }
                }
                localStorage.setItem('habitData', JSON.stringify(habitData));
                updateAnalytics();
            });
        }

        // Note functionality
        noteIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            noteDate.textContent = `${day} ${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
            noteInput.value = habitData[dateKey]?.note || '';
            notePanel.classList.add('open');
        });

        calendar.appendChild(dayElement);
    }
    
    updateAnalytics();
}

// Save note
saveNoteButton.addEventListener('click', () => {
    const dateKey = `${currentYear}-${currentMonth}-${noteDate.textContent.split(' ')[0]}`;
    habitData[dateKey] = {
        ...habitData[dateKey],
        note: noteInput.value
    };
    localStorage.setItem('habitData', JSON.stringify(habitData));
    notePanel.classList.remove('open');
});

// Close note panel
closeNotePanelButton.addEventListener('click', () => {
    notePanel.classList.remove('open');
});

// Navigate to the previous month
prevMonthButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
});

// Navigate to the next month
nextMonthButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
});

// Initial render
renderCalendar(currentYear, currentMonth);