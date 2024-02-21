const fs = require('fs'); 
const csv = require('fast-csv');

fs.readFile('sample_data.csv', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    csv.parseString(data, {headers: true, delimiter: ';'})
        .on('data', data => console.log(data))
        .on('end', () => console.log('Read finished'));
});