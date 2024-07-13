var api = "5FBPJXV8F137NKZI"; // get your own API key (https://www.alphavantage.co/support/#api-key)
var columns = ["Date", "Open", "High", "Low", "Close", "Adjusted Close", "Volume"];

document.getElementById("get_data").addEventListener("click", getData);

function getData() {
  var company = document.getElementById("companies").value;
  var url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${company}&apikey=${api}`;

  $.getJSON(url)
    .done(function(data) {
      var timeSeries = data["Weekly Adjusted Time Series"];
      var dataArray = [];

      for (var date in timeSeries) {
        var value = timeSeries[date];
        dataArray.push([
          date,
          value["1. open"],
          value["2. high"],
          value["3. low"],
          value["4. close"],
          value["5. adjusted close"],
          value["6. volume"]
        ]);

        if (dataArray.length >= 7) break; // Limit to 7 rows
      }

      drawTable(dataArray);
    })
    .fail(function() {
      alert("Failed to load data. Please try again.");
    });
}

function drawTable(data) {
  var table_container = document.getElementById("table_container");
  table_container.innerHTML = ""; // Clear previous table

  var table = document.createElement("table");
  table.className = "table table-striped";

  // Create table header
  var header = table.createTHead();
  var headerRow = header.insertRow(0);
  columns.forEach(function(column) {
    var cell = headerRow.insertCell(-1);
    cell.outerHTML = `<th>${column}</th>`;
  });

  // Create table body
  var body = table.createTBody();
  data.forEach(function(rowData) {
    var row = body.insertRow(-1);
    rowData.forEach(function(cellData) {
      var cell = row.insertCell(-1);
      cell.textContent = cellData;
    });
  });

  table_container.appendChild(table);
}
