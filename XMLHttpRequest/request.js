const getButton = document.getElementById('get-data');
const sendButton = document.getElementById('send-data');

const sendRequest = function (method, url, data) {
    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        //for Meta Tags:
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(data);


        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }
            else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = function () {
            reject("Something was wrong!")
        }
    });
    return promise;

}

const getData = function () {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        .then(responseData => {
            console.log(responseData);
        });

}

const sendData = function () {
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
    )
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((err) => {
            console.log(err);
        });
};

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);