// API Key for Alpha Vantage
var api = "5FBPJXV8F137NKZI"; // get your 
var columns = ["Date", "Open", "High", "Low", "Close", "Adjusted Close", "Volume"];

document.getElementById("get_data").addEventListener("click", getData);

  async function getData() {
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=5FBPJXV8F137NKZI`; // Construct the URL
  
      // Fetch data from the API
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);}
      // Display the JSON data on the page
    /*  var json_container = document.getElementById("json_container");
      json_container.textContent = JSON.stringify(data, null, 2);
    i
  }*/
  