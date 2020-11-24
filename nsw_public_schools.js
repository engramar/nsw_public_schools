//List of Public Schools from different NSW suburbs. Data can be obtained from https://data.cese.nsw.gov.au/ or https://data.gov.au/
const fs = require('fs');
var lineReader = require('line-reader');

lineReader.eachLine('nsw_public_schools.txt', function(line, last) {
  let field = line.split("|");
  schoolName = field[2];
  postcode = field[5];
  if (schoolName.includes('Girls')){
    console.log(schoolName);        
    outSchoolNamePostcode = schoolName + " | "+ postcode + '\r\n';
    fs.appendFile('girls_high_school.txt', outSchoolNamePostcode, function (err) {
        if (err) return console.log(err);        
     });    
  };
});
console.log('Processing done!')