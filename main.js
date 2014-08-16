var chart;
var chartData = [
    {
        "x": 10,
        "y": 5,

    },
    {
        "x": 5,
        "y": 3,

    },
    {
        "x": 4,
        "y": 6,

    },
    {
        "x": 6,
        "y": 5,

    },
    {
        "x": 10,
        "y": 5,

    },
    {
        "x": 13,
        "y": 1,

    },
    {
        "x": 1,
        "y": 6,

    }
];
AmCharts.ready(function(){

  // var studentPoints = [20, 20, 25, 30, 45, 50]
  // console.log(studentPoints)
  chart = new AmCharts.AmXYChart();
  chart.marginRight = 0;
  chart.marginTop = 0;
  chart.dataProvider = chartData;
  chart.autoMarginOffset = 0;

  // X Axis
  var xAxis = new AmCharts.ValueAxis();
  xAxis.position = "bottom";
  xAxis.axisAlpha = 0;
  // xAxis.maximum = studentPoints.length;
  xAxis.gridCount = 1
  chart.addValueAxis(xAxis);

  // Y Axis
  var yAxis = new AmCharts.ValueAxis();
  yAxis.position = "left";
  yAxis.axisAlpha = 0;
  yAxis.maximum = 20;
  yAxis.gridCount = 1;
  chart.addValueAxis(yAxis);


  // Graph
  var graph = new AmCharts.AmGraph();
  graph.yField = "y";
  graph.xField = "x";
  chart.addGraph(graph)

  // Call function to populate chart
  // generateData(studentPoints);

  //Write
  console.log(chart)
  chart.write("chartdiv");



  // function generateData(studentPoints){
  //   console.log("called")
  //   var dataProvider = [];
  //   for (var i=0; i < studentPoints.length; i++){
  //   dataProvider.push({x:i, value1: studentPoints[i]})
  //   }
  //   chart.dataProvider = dataProvider;
  //   console.log(chart.dataProvider)

  // };
});