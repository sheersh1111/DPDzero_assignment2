const fs = require('fs');

const costData = require('./cost.json');
const channelCostData = require('./channel-cost.json');

const totalCost = {};

channelCostData.forEach(entry => {
  const date = entry.date.substring(0, 10); // extract the date part from the timestamp
  const channels = Object.keys(entry).filter(key => key !== 'date');

  channels.forEach(channel => {
    const costPerUnit = costData[channel];

    if (costPerUnit) {
      const cost = entry[channel] * costPerUnit;
      totalCost[date] = totalCost[date] || {};
      totalCost[date][channel] = (totalCost[date][channel] || 0) + cost;
    }
  });
});

const result = Object.entries(totalCost).map(([date, costs]) => ({ ...costs, date })).sort((a, b) => new Date(a.date) - new Date(b.date));

fs.writeFileSync('total-cost-per-day.json', JSON.stringify(result, null, 2));
