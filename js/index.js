let first = document.querySelector('.first');
let second = document.querySelector('.second');
let timer = document.querySelector('.timer');
let image = document.querySelector('img');

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
      resolve('RESOLVE ONE');
    }, 1000);
  });
}
function taskTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('RESOLVE TWO');
    }, 1000);
  });
}
function taskThree() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      // resolve('RESOLVE THREE');
      reject('REJECT THREE');
    }, 1000);
  });
}

taskOne()
  .then(
    result => {
      alert(`TASK ONE => ${result}`);
      return taskTwo();
    },
    err => {
      alert(`TASK ONE ERR => ${err}`);
      return taskTwo();
    }
  )
  .then(
    result => {
      alert(`TASK TWO => ${result}`);
      return taskThree();
    },
    err => {
      alert(`TASK TWO => ${err}`);
      return taskThree();
    }
  )
  .then(
    result => {
      alert(`TASK THREE => ${result}`);
      return;
    },
    err => {
      alert(`TASK THREE ERR => ${err}`);
      return;
    }
  );
