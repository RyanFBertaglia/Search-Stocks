// API Key for Alpha Vantage
var api = "5FBPJXV8F137NKZI"; // get your 
document.getElementById("get_data").addEventListener("click", getData);

  async function getData() {
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${api}`;
      // Construct the UR
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
    }
    function inicTabela(processedData){
      let containe = document.getElementById('table_container');
      processedData.forEach(item => {
          const row = document.createElement('tr');

          const dataCell = document.createElement('td');
          dataCell.textContent = item.data;
          row.appendChild(dataCell);

          const aberturaCell = document.createElement('td');
          aberturaCell.textContent = item.abertura;
          row.appendChild(aberturaCell);

          const altaCell = document.createElement('td');
          altaCell.textContent = item.alta;
          row.appendChild(altaCell);

          const baixaCell = document.createElement('td');
          baixaCell.textContent = item.baixa;
          row.appendChild(baixaCell);

          const fechamentoCell = document.createElement('td');
          fechamentoCell.textContent = item.fechamento;
          row.appendChild(fechamentoCell);
          containe.appendChild(row);
      });}
    