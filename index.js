// API Key for Alpha Vantage
var api = "5FBPJXV8F137NKZI"; // get your 
var columns = ["Date", "Open", "High", "Low", "Close", "Adjusted Close", "Volume"];

document.getElementById("get_data").addEventListener("click", getData);

  async function getData() {
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=5FBPJXV8F137NKZI`; // Construct the URL
  
      // Fetch data from the API
      let response = await fetch(url);
      var data = await response.json();
      console.log(data);
      const processedData = [];
            for (var key in data['Time Series (Daily)']) {
                processedData.push({
                    data: key,
                    abertura: parseFloat(data['Time Series (Daily)'][key]['1. open']),
                    alta: parseFloat(data['Time Series (Daily)'][key]['2. high']),
                    baixa: parseFloat(data['Time Series (Daily)'][key]['3. low']),
                    fechamento: parseFloat(data['Time Series (Daily)'][key]['4. close'])
                });}
      console.log(processedData[0]);
      inicTabela(processedData);
      for(let i=0; i<=14; i++){
        getElementById
      }
    function inicTabela(processedData){
      let containe = document.getElementById('table_container');
      for(let i=0; i<=14; i++){
        const containe = document.createElement('<tr> <td>${processed_container[i].abertura}</td> </tr>');
      };
    }}