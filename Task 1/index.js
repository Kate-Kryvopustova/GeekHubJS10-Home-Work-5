// function perform() {
//   TODO implement
// }
// perform(20, function (value) {
//   console.log(value) // 20
//   var param = 1;
//   console.log(param); // 1
//   return param;
// })
//   .then('a', 'b', function (a, b, param) {
//     console.log(++param); // 2
//     return param;
//   })
//   .then(function (param) { // param === 2
//     console.log(++param); // 3
//     return param;
//   });


function perform(props, callback) {
  let param = callback(props);

  function then(...args) {
    const callback = args.find( elem => typeof (elem) === "function" );
    const params = args.filter( elem => typeof (elem) !== 'function' );

    param = callback(...params, param);
    return { then };
  }

  return { then };
}

perform(20, function (value) {
  console.log(value);
  var param = 1;
  console.log(param);
  return param;
})
  .then('a', 'b', function (a, b, param) {
    console.log(++param);
    return param;
  })
  .then(function (param) {
    console.log(++param); 
    return param;
  })
  .then(function (param) {
    console.log(++param); 
    return param;
  })
  .then(function (param) {
    console.log(++param); 
    return param;
  })
  .then(function (param) {
    console.log(++param); 
    return param;
  });
