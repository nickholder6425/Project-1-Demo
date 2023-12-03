document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        const task = this.parentNode.querySelector('span');
        task.style.textDecoration = this.checked ? 'line-through' : 'none';
      });
    });

    // Call the function to update the clock every second
    setInterval(updateClock, 1000);
  });

  // Function to open child information popup
  function openChildInfoPopup() {
    // Open a simple prompt to get child information
    const name = prompt("Enter child's name:");
    const age = prompt("Enter child's age:");
    const gender = prompt("Enter child's gender:");

    // Call the function to add child information to the table
    addChildInformation(name, age, gender);
  }

  // Function to add child information to the table
  function addChildInformation(name, age, gender) {
    const tableBody = document.getElementById('childInfoBody');

    // Create a new row
    const newRow = tableBody.insertRow();

    // Add cells to the row
    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const genderCell = newRow.insertCell(2);

    // Set the content of the cells
    nameCell.textContent = name;
    ageCell.textContent = age;
    genderCell.textContent = gender;
  }

  // Function to update the clock
  function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    // Format the time as HH:MM:SS
    const timeString = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;

    // Display the formatted time
    clockElement.textContent = timeString;
  }

  // Function to pad single-digit numbers with a leading zero
  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }