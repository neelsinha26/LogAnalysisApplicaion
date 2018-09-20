{ noOfYears: 7,
  paths: 30,
  listingLimit: 100,
  months:
   [ { value: '1', month: 'January' },
     { value: '2', month: 'February' },
     { value: '3', month: 'March' },
     { value: '4', month: 'April' },
     { value: '5', month: 'May' },
     { value: '6', month: 'June' },
     { value: '7', month: 'July' },
     { value: '8', month: 'August' },
     { value: '9', month: 'September' },
     { value: '10', month: 'October' },
     { value: '11', month: 'November' },
     { value: '12', month: 'December' } ],
  refreshInterval: 5000,
  dashboard:
   [ { target: '#requestrate',
       selection: 'aptLogStatistics',
       name: 'Apt Log Statistics' },
     { target: '#logListing',
       selection: 'nginxLogStatistics',
       name: 'Nginx Log Statistics' },
     { target: '#gitLogStatistics',
       selection: 'gitLogStatistics',
       name: 'Git Log Statistics' } ],
  userAgentFilters:
   { browser: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
     os: [ [Object], [Object], [Object], [Object], [Object] ] } }