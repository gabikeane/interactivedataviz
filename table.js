<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Company');
        data.addColumn('string', 'Item');
        data.addColumn('number', 'Black Friday Value');
        data.addColumn('number', 'Savings');
        data.addRows([
          ['Best Buy', 'Sharp 50-inch TV'  {v: 179.99, f: '$179.99'}, {v: 320, f: '$320'}],
          ['Kohl's', 'Microsoft Xbox One + $45 Kohl's Cash'  {v:189.99,   f: '$189.99'}, {v:90, f:$90}],
          ['Target', 
          'Microsoft Xbox One w/ $24 gift card' {v: 189.99, f: '$189.99'}, {v: 90, f:$90}],
          ['Target', '55-inch Westinghouse TV'  {v: 249.99,  f: '$249.99'}, 'N/A']
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }
    </script>
  </head>
  <body>
    <div id="table_div"></div>
  </body>
</html>
