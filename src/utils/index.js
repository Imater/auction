export function shortFullName(userInput) {
  if (typeof userInput === 'undefined' || userInput === null) {
    return '';
  }
  var user = userInput.toObject ? userInput.toObject() : userInput;
  var result = '';
  if (user.firstname && user.firstname.length){
    result += user.firstname[0] + '. ';
  }
  if (user.middlename && user.middlename.length){
    result += user.middlename[0] + '. ';
  }
  if (user.lastname && user.lastname.length){
    result += user.lastname;
  }
  return result;
}

export function timeRest(dateTime, language) {
  if (typeof dateTime === 'undefined') {
     return;
  }

  if(language === 'eng'){
    return 'Will be started 3.09 at 9:00 (GMT+10)';
  }
  return 'Откроется 3.09 в 9:00 (GMT+10)';
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function rub(sum) {
  if (typeof sum === 'undefined') {
     return;
  }
  return numberWithSpaces(sum) + ' ₽';
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}

export function endTime(endDateTime) {
  if (typeof endDateTime === 'undefined' || endDateTime == null) {
     return;
  }
  var diff = parseInt((Date.parse(endDateTime) - Date.now())/(1000));
  var minutes = Math.floor(diff / 60);
  var seconds = diff - minutes * 60;
  console.info();
  return diff.toString().toHHMMSS();
}

export function lastTime(lastTime) {
  if (typeof lastTime === 'undefined') {
     return;
  }
  var diff = parseInt((Date.now() - Date.parse(lastTime))/(60*1000));
  if (diff > 999){
    return '';
  }
  return diff+' мин.назад';
}

export function sortByLastTime(listData) {
    var now = Date.now();
    var orderedList = listData.sortBy(function(a){
      var a1 = a.toJS ? a.toJS().lastTime : a.lastTime;
      var diff = now - Date.parse(a1);
      if(isNaN(diff)) {
        diff = 3300000000000000000;
      }
      return diff;
    });
    return orderedList;
}

export function sortByNumber(listData) {
    var orderedList = listData.sortBy(function(a){
      var a1 = a.toJS ? a.toJS().lotNumber : a.lotNumber;
      return -a1;
    });
    return orderedList;
}
