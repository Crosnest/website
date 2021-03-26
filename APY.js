var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1ut6PZe7GcGd2TBqpVPQcERh2nkhfMNx-TKFj0l8paFU/edit?usp=sharing';
  
function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

 
function showInfo(data, tabletop) {
data.forEach(function(data) {
    APY.innerHTML = data.APY;
 });
}
  window.addEventListener('DOMContentLoaded', init)
