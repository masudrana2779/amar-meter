$(function () {
    "use strict";
    $(document).ready(function () {
        function barInner() {
            $('.barInner').on('click', function () {
                $('.barInner').removeClass('active');
                $(this).addClass('active');
            });
        }

        barInner();

        function monthlyHistoryGraph() {
            google.charts.load('current', {packages: ['corechart', 'line']});
            google.charts.setOnLoadCallback(drawBasic);

            function drawBasic() {

                var data = new google.visualization.DataTable();
                data.addColumn('number', 'X');
                data.addColumn('number', 'Dogs');

                data.addRows([
                    [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9],
                    [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35]
                ]);

                var options = {
                    hAxis: {
                        title: 'Time'
                    },
                    vAxis: {
                        title: 'Popularity'
                    }
                };

                var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

                chart.draw(data, options);
            }
        }

        monthlyHistoryGraph();
    });
});