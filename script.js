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