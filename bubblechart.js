 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
        ['ID', 'Unique Visitors (in millions)', 'Rank', 'Type', 'Stock Volume'],
        ['Amazon',             7.5,     1,   'General', 1837068],
        ['Walmart',             4.15,   2,   'General', 4234383],
        ['Best Buy',             3.75,   3,   'Tech', 2718618],
        ['Target',                 2.85,   4,  'General', 2543818],
        ['Apple',                2.575,   5,  'Tech', 11475920]     
      
      ]);

      var options = {
        title: 'Correlation between Online Retailer Visitors ' +
               'and stock volume for Black Friday closing (2016)',
        hAxis: {title: 'Number of Unique Visitors (millions)'},
        vAxis: {title: 'Rank by Stock Volume'},
        bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }
