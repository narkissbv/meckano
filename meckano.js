var table = document.querySelector('table.hours-report');
var rows = table.querySelectorAll('tr')
rows.forEach(function (row) {
  if (['alt0','alt1'].includes(row.className)) {
    var rowDate = row.querySelector('td.date').innerText.trim().substring(10,0);
    var day = rowDate.substring(0,2);
    var month = rowDate.substring(3,5);
    var year = rowDate.substring(6,10);
    var dateObj = new Date(year + '/' + month + '/' + day);
    var isValidDate = dateObj.getDay() >= 0 && dateObj.getDay() < 5;
    var salt = Math.floor(Math.random() * 10)
    if (isValidDate) {
      var checkin = row.querySelector('td.checkIn input.checkIn');
      var checkout = row.querySelector('td.checkOut input.checkOut');
      console.log(`Day: ${rowDate}, Checkin: ${checkin.value}, Checkout: ${checkout.value}`);
      if (!checkin.value) {
        console.log('Checkin value empty, updating input...');
        checkin.value = "09:0" + salt;
      }
      if (!checkout.value) {
        console.log('Checkout value empty, updating input...');
        checkout.value = "18:" + (60 - salt)
      }
      var missing = row.querySelector('td.missing div.missing select');
      missing.value = 34049;
    }
  }
});