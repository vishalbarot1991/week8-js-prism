"use strict";

const date = new Date(2021, 6, 21, 22, 10, 0);

const formatDate = (dateObj, str) => {
    const [day, month, date, year] = dateObj.toDateString().split(/\s/);
    const [hour, minutes, ...rest] = dateObj.toTimeString().split(':');
    const [seconds] = rest[0].split(/\s/g);
    const formattedDate = str
       .replaceAll('d', date)
       .replaceAll('DD', day)
       .replaceAll('MM', month)
       .replaceAll('YYYY', year)
       .replaceAll('hh', hour)
       .replaceAll('mm', minutes)
       .replaceAll('ss', seconds);
   
    return formattedDate;
  };
console.log(`21st june, 2021 can be formatted as ${formatDate(date, "DD, d-MM-YYYY at hh:mm:ss" )}`
);
