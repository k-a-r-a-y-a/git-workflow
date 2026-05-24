async function fetchCostData() {
    const mockData = {
        totalCost: 12450,
        savings: 2340,
        optimizationScore: 78,
        services: [
            { name: 'EC2', cost: 5200, optimization: 15 },
            { name: 'S3', cost: 3100, optimization: 8 },
            { name: 'RDS', cost: 2800, optimization: 12 },
            { name: 'Lambda', cost: 1350, optimization: 25 }
        ]
    };
    
    return mockData;
}

async function updateDashboard() {
    const data = await fetchCostData();
    
    
    document.querySelector('.metric-card:first-child .metric-value').textContent = 
        `\$${data.totalCost.toLocaleString()}`;
    document.querySelector('.metric-card:nth-child(2) .metric-value').textContent = 
        `\$${data.savings.toLocaleString()}`;
    document.querySelector('.metric-card:nth-child(3) .metric-value').textContent = 
        `${data.optimizationScore}%`;
}


updateDashboard();
setInterval(updateDashboard, 30000); 
