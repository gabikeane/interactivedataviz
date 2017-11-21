      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
         ['ID', 'Rank', 'Unique Visitors (in millions)', 'Type', 'Stock Volume'],
        ['Amazon',    1,              7.5,   'General', 1837068],
        ['Walmart',    2,              4.15,   'General', 4234383],
        ['Best Buy',    3,               3.75,    'Tech', 2718618],
        ['Target',    4,              2.85,   'General', 2543818],
        ['Apple',    5,              2.575,    'Tech', 11475920]     
      ]);

      var options = {
        title: 'Correlation between Black Friday Site Visits for Top 5 Retailers and Stock Volume for November 25, 2016'
        hAxis: {title: 'Ranking'},
        vAxis: {title: 'Unique Visitors in millions'},
        bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }
    
    //all historical stock volume data from nasdaq.com, see sources page
    //all site visit information from statisticbrain.com, see sources page
