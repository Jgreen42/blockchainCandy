Papa.parse("cpd1.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function(results) {
        var cryptoData = results.data;

        var timestamps = cryptoData.map(entry => entry.timestamp);
        var avg_fee_rates = cryptoData.map(entry => entry.avg_fee_rate);

        var trace = {
            x: timestamps,
            y: avg_fee_rates,
            type: 'scatter',
            mode: 'lines',
            name: 'Average Fee Rate'
        };

        var layout = {
            title: 'Average Fee Rate Over Time',
            xaxis: {
                title: 'Timestamp'
            },
            yaxis: {
                title: 'Average Fee Rate'
            }
        };

        Plotly.newPlot('plotly-div', [trace], layout);
    }
});
