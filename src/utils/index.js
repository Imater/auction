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
    return 'Will be started today at 17:00';
  }
  return 'Откроется сегодня в 17:00';
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
