const errorMessange = 'Что-то пошло не так...',
    loadMessange = 'Загрузка...',
    successMessange = 'Спасибо!Мы скоро с вами свяжемся!';

const form = document.getElementById('form2');

const statusMessange = document.createElement('div');
statusMessange.style.cssText = `font-size: 2rem; margin: 1rem 0;`;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.append(statusMessange);
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    statusMessange.textContent = loadMessange;
    // const successRequest = () => {
    //   statusMessange.textContent = successMessange;
    // };
    // const errorRequest = (error) => {
    //   statusMessange.textContent = errorMessange;
    //   console.error(error);
    // };
    postData(body)
    .then((response) => {
      if(response.status !==200){
        throw new Error('status network not 200');
      }
      console.log(response);
      statusMessange.textContent = successMessange;
    })
    .catch((error) => {
      statusMessange.textContent = errorMessange;
      console.error(error);
    });
});

const postData = (body) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Tape': 'application/json'
    },
    body: JSON.stringify(body)
  });
}
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//       if(request.readyState !== 4) {
//         return;
//       }
//       if(request.status === 200) {
//         resolve();
//       }else {
//         reject(request.statusText);
//       }
//     });
  
//     request.open('POST', './server.php');
//     request.setRequestHeader('Content-Tape', 'application/json');
//     request.send(JSON.stringify(body));
//   });
// }