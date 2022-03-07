function  heliumcheck() {
    
    // Call the Numbers API for random math fact
    
    var  response = UrlFetchApp.fetch("https://api.helium.io/v1/hotspots/14fVcJdi6uD1FhR253pAqYQqGLNFN7amLyUruXspGFQkzZ9yQuq/rewards/sum?&min_time=2021-06-05&bucket=day");

        
    Logger.log(response.getContentText());
    
    var  fact = JSON.parse(response.getContentText());
    
    
    // Create a date object for the current date and time.
    
    var  now = new  Date();
    
  
    var  pc = UrlFetchApp.fetch("https://api.helium.io/v1/oracle/prices/current");
    
    Logger.log(pc.getContentText());
    
    var  pc2 = JSON.parse(pc.getContentText());
    
      
    
    var  hd=new  Date('2021-06-05T01:39:53Z').valueOf();
    // first set up date

    var  td=new  Date().valueOf();
    
    var  sec=1000;
    
    var  min=60*sec;
    
    var  hour=60*min;
    
    var  day=24*hour;
    
    var  diff=td-hd;
    
    var  days=Math.floor(diff/day);
    
    var  ROI = (600/(pc2.data.price/100000000))/(fact.data.total/days)
    //Price Paid
    
    var  row = [now,fact.data.total,pc2.data.price/100000000,ROI,ROI/30]; // Retrieve values from JSON object of dataAll.
    
    var  ss = SpreadsheetApp.openById('1vA7-BNWf2B7zFv1WAGzktAJ4M1uRM0RYneUgnXNm4Og');
    //Google Sheet Id 
    
    var  sheet = ss.getSheetByName('Sheet1');///////Sheet Name.
    
    sheet.appendRow(row); // Append the values to Spreadsheet.
    }