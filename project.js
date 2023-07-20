let a=document.querySelector('button#kensaku');
a.addEventListener('click',sendRequest);

function sendRequest(){
    let b=document.querySelector('select#kensaku');
    let c = b.selectedIndex; 
    let d=b.querySelectorAll('option');
    let e=d.item(c);
    let id=e.getAttribute('id');
    let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
    axios.get(url)
        .then(showResult)   
        .catch(showError)  
        .then(finish);      
}
function showResult(resp) {
    let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    let x=document.querySelector('span#syuto');
    x.textContent=data.name;
    let y=document.querySelector('span#tenki');
    y.textContent=data.weather[0].description;
    let z=document.querySelector('span#saikou');
    z.textContent=data.main.temp_max;
    let v=document.querySelector('span#saitei');
    v.textContent=data.main.temp_min;
}
function showError(err) {
    console.log(err);
}
function finish() {
    console.log('Ajax 通信が終わりました');
}