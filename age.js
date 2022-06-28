let date1 = prompt("Please enter a birth date in the format yyyy-mm-dd");

let msElapsed = Date.now() - Date.parse(date1);

let age = Math.floor(msElapsed / 3.154e10);

alert(`Age from date given is ${age}`);
