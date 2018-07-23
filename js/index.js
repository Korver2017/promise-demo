let first = document.querySelector('.first');
let second = document.querySelector('.second');

function callApi() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(fetch('https://randomuser.me/api/', {})
        .then((response) => {
          console.log(response);
          return response.json();
        }).then((jsonData) => {
          console.log(jsonData);
          console.log(jsonData.results[0].email);
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
callApi();