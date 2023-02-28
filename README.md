# DPDzero_assignment2

First to run this program you need to Install Node js using 

#npm init (in the respective folder)

add suitable package name and continue;
you can add entry point to be server.js

https://user-images.githubusercontent.com/106367218/221770581-899c8d5c-0c56-45ce-b226-a56473fbb429.png

Then run the following Server.js code give using command:

#node server.js

it will generate the desired json file for cost per day of different channels.
then,

#server.js

In this file, 
first I am extracting key of both date and other keys(which are sms,email,whatsapp and ivr)

code:
    const date = entry.date.substring(0, 10); // extract the date part from the timestamp
  const channels = Object.keys(entry).filter(key => key !== 'date');
  
then, 
other than date(key) which other key is there (extracted) and added in total cost variable.
Where, date is the primary key for totalCost.

then, the values of totalCost is maaped to result to get the desired form of array of objects.
const result = Object.entries(totalCost).map(([date, costs]) => ({ ...costs, date })).sort((a, b) => new Date(a.date) - new Date(b.date));

then result is written to a json file.
fs.writeFileSync('total-cost-per-day.json', JSON.stringify(result, null, 2));
