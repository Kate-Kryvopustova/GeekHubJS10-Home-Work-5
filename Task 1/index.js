function perform(val, callBack) {
  return Promise.resolve(callBack(val));
}
perform(20, function(value) {
  console.log(value)
  var param = 1;
  console.log(param);
  return param;
})
.then(function(param) {
  console.log(++param);
  return param;
})
.then(function(param) {
  console.log(++param); 
  return param;
})
