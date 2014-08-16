AmCharts.ready(function(){

  var studentPoints = [20, 20, 25, 30, 45, 50]
  console.log(studentPoints)
  var chart = new AmCharts.AmXYChart();
  chart.marginRight = 0;
  chart.marginTop = 0;
  chart.dataProvider = []
  chart.autoMarginOffset = 0;

  // X Axis
  var xAxis = new AmCharts.ValueAxis();
  xAxis.position = "bottom";
  xAxis.axisAlpha = 0;
  xAxis.maximum = studentPoints.length;
  xAxis.dashLength = 1,
  chart.addValueAxis(xAxis);

  // Y Axis
  var yAxis = new AmCharts.ValueAxis();
  yAxis.position = "left";
  yAxis.axisAlpha = 0;
  yAxis.maximum = 50;
  yAxis.dashLength = 1,
  chart.addValueAxis(yAxis);

  // Graph
  var graph = new AmCharts.AmGraph();
  graph.yfield = "value1";
  graph.xfield = "x";
  chart.addGraph(graph)

  // Call function to populate chart
  generateData(studentPoints, chart);

  //Write
  chart.write("chardiv")



  function generateData(studentPoints, chart){
    console.log("called")
    var dataProvider = [];
    for (var i=0; i < studentPoints.length; i++){
    dataProvider.push({x:i, value1: studentPoints[i]})
    }
    chart.dataProvider = dataProvider;
    chart.validateNow();
  };
});