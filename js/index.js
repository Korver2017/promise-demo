let first = document.querySelector('.first');
let second = document.querySelector('.second');
let reminder = document.querySelector('.reminder');
let image = document.querySelector('img');
let taskOneList = document.querySelector('.taskOne');
let taskTwoList = document.querySelector('.taskTwo');
let taskThreeList = document.querySelector('.taskThree');
let taskFourList = document.querySelector('.taskFour');

function callRandomUser() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 2 + 1);
    console.log(num);
    if (num == 2) {
      let data = 'https://randomuser.me/api/';
      let xhr = new XMLHttpRequest();
      xhr.open('get', data, true);
      xhr.send(null);
      xhr.onload = () => {
        let json = JSON.parse(xhr.responseText);
        // console.log(json);
        let email = json.results[0].email;
        resolve(email);
      };
    } else {
      reject('Reject!');
    }
  });
}

function delayFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reminder.innerText = '2s Time is Up!';
      resolve('Resolve - DelayFunc')
    }, 2000);
  });
}

callRandomUser()
  .then(result => {
    console.log(result);
    first.innerText = result;
    return delayFunc();
  }, err => {
    console.log(err);
    first.innerText = err;
    return delayFunc();
  })
  .then(result => {
    console.log(result);
    return callRandomUser();
  }, err => {
    console.log(err);
    return callRandomUser();
  })
  .then(result => {
    console.log(result);
    second.innerText = result;
    return;
  }, err => {
    console.log(err);
    second.innerText = err;
    return;
  });


// function callApi() {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve(
//         fetch('https://randomuser.me/api/', {})
//         .then(response => {
//           // console.log(response);
//           return response.json();
//         })
//         .then(jsonData => {
//           // console.log(jsonData);
//           // console.log(jsonData.results[0].email);
//           first.innerText = jsonData.results[0].email;
//         })
//         .catch(err => {
//           console.log('錯誤:', err);
//         })
//       );
//     } else {
//       reject('Reject!');
//     }
//   });
// }
// callApi().then(
//   setTimeout(() => {
//     timer.innerText = '2s Time Up!';
//     fetch('https://dog.ceo/api/breeds/image/random', {})
//       .then(response => {
//         // console.log(response);
//         return response.json();
//       })
//       .then(jsonData => {
//         // console.log(jsonData);
//         // console.log(jsonData.message);
//         image.src = jsonData.message;
//       })
//       .catch(err => {
//         console.log('錯誤:', err);
//       });
//     fetch('https://randomuser.me/api/', {})
//       .then(response => {
//         // console.log(response);
//         return response.json();
//       })
//       .then(jsonData => {
//         // console.log(jsonData);
//         // console.log(jsonData.results[0].email);
//         second.innerText = jsonData.results[0].email;
//       })
//       .catch(err => {
//         console.log('錯誤:', err);
//       });
//   }, 2000)
// );

function taskOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve');
    }, 1000);
  });
}

function taskTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve');
    }, 1000);
  });
}

function taskThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('RESOLVE THREE');
      reject('Reject');
    }, 1000);
  });
}

function taskFour() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Resolve');
    }, 1000);
  });
}

taskOne()
  .then(
    result => {
      taskOneList.innerText = result;
      // alert(`TASK ONE => ${result}`);
      return taskTwo();
    },
    err => {
      taskOneList.innerText = `Task One Err => ${err}`;
      // alert(`TASK ONE ERR => ${err}`);
      return taskTwo();
    }
  )
  .then(
    result => {
      taskTwoList.innerText = result;
      // alert(`TASK TWO => ${result}`);
      return taskThree();
    },
    err => {
      taskTwoList.innerText = `Task Two Err => ${err}`;
      // alert(`TASK TWO => ${err}`);
      return taskThree();
    }
  )
  .then(
    result => {
      taskThreeList.innerText = result;
      // alert(`TASK THREE => ${result}`);
      return taskFour();
    },
    err => {
      taskThreeList.innerText = err;
      // alert(`TASK THREE ERR => ${err}`);
      return taskFour();
    }
  )
  .then(
    result => {
      taskFourList.innerText = result;
      return;
    },
    err => {
      taskFourList.innerText = `Task Four Err => ${err}`;
      return;
    }
  );