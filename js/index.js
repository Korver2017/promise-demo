let first = document.querySelector('.first');
let second = document.querySelector('.second');
let timer = document.querySelector('.timer');
let image = document.querySelector('img');
let taskOneList = document.querySelector('.taskOne');
let taskTwoList = document.querySelector('.taskTwo');
let taskThreeList = document.querySelector('.taskThree');
let taskFourList = document.querySelector('.taskFour');

function callApi() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(
        fetch('https://randomuser.me/api/', {})
          .then(response => {
            // console.log(response);
            return response.json();
          })
          .then(jsonData => {
            // console.log(jsonData);
            // console.log(jsonData.results[0].email);
            first.innerText = jsonData.results[0].email;
          })
          .catch(err => {
            console.log('錯誤:', err);
          })
      );
    } else {
      reject('Reject!');
    }
  });
}
callApi().then(
  setTimeout(() => {
    timer.innerText = '2s Time Up!';
    fetch('https://dog.ceo/api/breeds/image/random', {})
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(jsonData => {
        // console.log(jsonData);
        // console.log(jsonData.message);
        image.src = jsonData.message;
      })
      .catch(err => {
        console.log('錯誤:', err);
      });
    fetch('https://randomuser.me/api/', {})
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(jsonData => {
        // console.log(jsonData);
        // console.log(jsonData.results[0].email);
        second.innerText = jsonData.results[0].email;
      })
      .catch(err => {
        console.log('錯誤:', err);
      });
  }, 2000)
);

function taskOne() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('Resolve One');
    }, 1000);
  });
}
function taskTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('Resolve Two');
    }, 1000);
  });
}
function taskThree() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      // resolve('RESOLVE THREE');
      reject('Reject Three');
    }, 1000);
  });
}
function taskFour() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('Resolve Four');
    }, 1000);
  });
}

taskOne()
  .then(
    result => {
      taskOneList.innerText = `Task One => ${result}`;
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
      taskTwoList.innerText = `Task Two => ${result}`;
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
      taskThreeList.innerText = `Task Three => ${result}`;
      // alert(`TASK THREE => ${result}`);
      return taskFour();
    },
    err => {
      taskThreeList.innerText = `Task Three Err => ${err}`;
      // alert(`TASK THREE ERR => ${err}`);
      return taskFour();
    }
  )
  .then(
    result => {
      taskFourList.innerText = `Task Four => ${result}`;
      return;
    },
    err => {
      taskFourList.innerText = `Task Four Err => ${err}`;
      return;
    }
  );
