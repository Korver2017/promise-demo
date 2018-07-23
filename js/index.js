let first = document.querySelector('.first');
let second = document.querySelector('.second');
let timer = document.querySelector('.timer');
let image = document.querySelector('img');

function callApi() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(fetch('https://randomuser.me/api/', {})
        .then((response) => {
          // console.log(response);
          return response.json();
        }).then((jsonData) => {
          // console.log(jsonData);
          // console.log(jsonData.results[0].email);
          first.innerText = jsonData.results[0].email;
        }).catch((err) => {
          console.log('錯誤:', err);
        })
      )
    } else {
      reject('Reject!');
    }
  })
}
callApi().then(setTimeout(() => {
  timer.innerText = '2s Time Up!';
  fetch('https://dog.ceo/api/breeds/image/random', {})
    .then((response) => {
      // console.log(response);
      return response.json();
    }).then((jsonData) => {
      // console.log(jsonData);
      // console.log(jsonData.message);
      image.src = jsonData.message;
    }).catch((err) => {
      console.log('錯誤:', err);
    });
  fetch('https://randomuser.me/api/', {})
    .then((response) => {
      // console.log(response);
      return response.json();
    }).then((jsonData) => {
      // console.log(jsonData);
      // console.log(jsonData.results[0].email);
      second.innerText = jsonData.results[0].email;
    }).catch((err) => {
      console.log('錯誤:', err);
    })
}, 2000));