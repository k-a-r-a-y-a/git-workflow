document.getElementById('generateReport').addEventListener('click', function() {
    const timeRange = document.getElementById('timeRange').value;
    const output = document.getElementById('reportOutput');
    
    // Mock report data
    const reports = {
        daily: { costs: [1200, 1350, 1420, 1280, 1450], total: 6700 },
        weekly: { costs: [8200, 9100, 8800, 9500], total: 35600 },
        monthly: { costs: [35000, 42000, 38000, 45000], total: 160000 }
    };
    
    const data = reports[timeRange];
    
    let html = '<h3>Cost Report (' + timeRange + ')</h3>';
    html += '<table border=\"1\" cellpadding=\"10\" style=\"width:100%\">';
    html += '<tr><th>Period</th><th>Cost</th></tr>';
    
    data.costs.forEach((cost, index) => {
        html += '<tr><td>' + (index + 1) + '</td><td>$' + cost + '</td></tr>';
    });
    
    html += '<tr><td><strong>Total</strong></td><td><strong>$' + data.total + '</strong></td></tr>';
    html += '</table>';
    
    output.innerHTML = html;
})
