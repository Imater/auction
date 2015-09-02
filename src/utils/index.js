export function shortFullName(userInput) {
  if (typeof userInput === 'undefined') {
    return '';
  }
  var user = userInput.toObject ? userInput.toObject() : userInput;
  var result = '';
  if (user.firstname){
    result += user.firstname[0] + '. ';
  }
  if (user.middlename){
    result += user.middlename[0] + '. ';
  }
  if (user.lastname){
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

export function endTime(endDateTime) {
  if (typeof endDateTime === 'undefined') {
     return;
  }
  return '04:59';
}

export function lastTime(lastTime) {
  if (typeof lastTime === 'undefined') {
     return;
  }
  return '4 мин.назад';
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
