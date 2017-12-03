      google.charts.load('current', {
        'packages': ['corechart']
      });
      google.charts.setOnLoadCallback(drawSeriesChart);

      function drawSeriesChart() {

        var data = google.visualization.arrayToDataTable([
          ['Company', 'Savings', 'Sale Price', 'Item', ''],
          ['Best Buy', {v:320, f: '$320'}, {v:179.99, f: '$179.99'}, 'Sharp 50-inch TV', 150000000],
          ['Kohls', {v:90, f: '$90'}, {v: 189.99, f: '$189.99'}, 'Microsoft Xbox One and $45 Kohls Cash', 150000000],
          ['Amazon', {v: 100, f: '$100'}, {v: 199.99, f: '$199.99'}, 'PS4 1TB Slim', 150000000],
          ['Walmart', {v:221.99, f: '$221.99'}, {v:328, f: '$328'}, 'Samsung 40-inch HDR Smart LED TV', 150000000],
          ['B&H', {v:50, f: '$50'}, {v:199, f: '$199'}, 'Bose Companion 20 Multimedia Speaker System', 150000000],
          ['Samsung', {v:120, f: '$120'}, {v:479.99, f: '$479.99'}, 'Galaxy S3 9.7-inch Tablet, w/ Keyboard Cover', 150000000]
          
          ]);

        var options = {
          title: 'Sale Prices v. Savings for Black Friday products',
          hAxis: {
            title: 'Savings on Item'
          },
          vAxis: {
            title: 'Sale Price'
          },
          bubble: {
            textStyle: {
              fontSize: 11
            }
          }
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
        chart.draw(data, options);
      }
