document.addEventListener('DOMContentLoaded', function() {
    const calendarElement = document.getElementById('calendar');
    const tasksElement = document.getElementById('tasks');
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    createCalendar(month, year);

    function createCalendar(month, year) {
        calendarElement.innerHTML = '';
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            calendarElement.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.textContent = day;
            dayDiv.addEventListener('click', function() {
                const task = prompt('Enter a task for ' + day + '/' + (month + 1) + '/' + year);
                if (task) {
                    addTask(day, task);
                }
            });
            calendarElement.appendChild(dayDiv);
        }
    }

    function addTask(day, task) {
        const taskItem = document.createElement('li');
        taskItem.textContent = day + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() + ': ' + task;
        tasksElement.appendChild(taskItem);
    }
});
