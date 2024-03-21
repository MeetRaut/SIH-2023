var selectedDate = null;

function updateMood(mood) {
    selectedDate.style.backgroundColor = mood;
}

function saveJournal() {
    var journalText = document.getElementById("journal-text").value;
    selectedDate.dataset.journal = journalText;
    alert("Journal saved for " + selectedDate.id);
}

function showJournal() {
    var journalText = selectedDate.dataset.journal;
    document.getElementById("journal-text").value = journalText;
}

function createCalendar(year, month) {
    var today = new Date();
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var daysInMonth = lastDay.getDate();
    var startDay = firstDay.getDay();

    var calendarTable = document.createElement("table");
    calendarTable.className = "calendar-table";

    var calendarHeader = calendarTable.createTHead();
    var headerRow = calendarHeader.insertRow(0);

    // Create header cells
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (var i = 0; i < 7; i++) {
        var th = document.createElement("th");
        th.textContent = daysOfWeek[i];
        headerRow.appendChild(th);
    }

    var calendarBody = calendarTable.createTBody();
    var date = 1;

    for (var i = 0; i < 6; i++) {
        var row = calendarBody.insertRow(i);
        for (var j = 0; j < 7; j++) {
            if ((i === 0 && j < startDay) || date > daysInMonth) {
                var cell = row.insertCell(j);
                cell.textContent = "";
            } else {
                var cell = row.insertCell(j);
                cell.textContent = date;
                cell.id = year + "-" + (month + 1) + "-" + date;
                cell.addEventListener("click", function () {
                    selectedDate = this;
                    showJournal();
                });
                date++;
            }
        }
    }

    return calendarTable;
}

window.onload = function () {
    var moodButtons = document.querySelectorAll(".mood-button");

    moodButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            updateMood(button.style.backgroundColor);
        });
    });

    var today = new Date();
    var calendar = createCalendar(today.getFullYear(), today.getMonth());
    document.querySelector(".calendar").appendChild(calendar);
};
