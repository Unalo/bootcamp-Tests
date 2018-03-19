var isFromBellville = function(registration) {
  if (registration.startsWith('CY'))
    return true;
  else
    return false;
 console.log('isFromBellville');
}

console.log(isFromBellville('Number'));
