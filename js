<><script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-core.min.js"></script><script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-pie.min.js"></script></>
anychart.onDocumentReady(function () {
    // Creates Pie chart.
    var chart = anychart.pie([
        {x: 'A', value: 637166},
        {x: 'B', value: 721630},
        {x: 'C', value: 148662},
        {x: 'D', value: 78662},
        {x: 'E', value: 90000}
    ]);

    chart.title('Create a Pie chart');
    chart.container('container');
    chart.draw();
});

