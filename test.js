var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

request('GET','https://api.blockcypher.com/v1/btc/main/addrs/3F9VZy8bnN7c8SyCsJVjMAdcn3stt1AaEc/balance')
.then((response) => {
    console.log(response)
}).catch(err=>{
    console.log(err)
})