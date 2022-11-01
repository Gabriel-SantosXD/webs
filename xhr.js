const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responsetype = 'json';


    xhr.onload = () => {
        resolve(xhr.response);
    }
    xhr.send();
    });
    return promise;
};

const getData = () => {
   sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData =>{
       console.log(responseData);
   });
};




getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);