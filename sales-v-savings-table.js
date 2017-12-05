      google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Company');
        data.addColumn('string', 'Product')
        data.addColumn('number', 'Sale Price');
        data.addColumn('number', 'Savings');
        data.addRows([
        	['Samsung', 'Galaxy S3 9.7-inch Tablet, w/ Keyboard Cover', {v:479.99, f: '$479.99'}, {v:120, f: '$120'}],
	        ['Walmart', 'Samsung 40-inch HDR Smart LED TV', {v:328, f: '$328'}, {v:221.99, f: '$221.99'}],
          ['Amazon', 'PS4 1TB Slim', {v: 199.99, f: '$199.99'}, {v: 100, f: '$100'}],
          ['B&H', 'Bose Companion 20 Multimedia Speaker System', {v:199, f: '$199'}, {v:50, f: '$50'}],
          ['Kohls', 'Microsoft Xbox One and $45 Kohls Cash', {v: 189.99, f: '$189.99'}, {v:90, f: '$90'}],
          ['Best Buy', 'Sharp 50-inch TV', {v:179.99, f: '$179.99'}, {v:320, f: '$320'}],
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }
