//https://jsonplaceholder.typicode.com/todos/1

let jobs = []

fetch('JsonDataSmall.json')
.then(response => response.json())
.then(data => {data.map(displayData);})
.catch(function (error){console.log(error);});

function displayData(data) {
    jobs[jobs.length] = data;
    /*console.log(data);
    document.getElementById('data').innerHTML += "<br><hr>"
    document.getElementById('data').innerHTML += JSON.stringify(data);*/
}

let a = document.getElementById("buttonSelect");
a.addEventListener("click", dispJob, false);

function dispJob() {
    let count = Math.floor(Math.random() * jobs.length);
    console.log(count);
    document.getElementById('data').innerHTML = JSON.stringify(jobs[count]);
}