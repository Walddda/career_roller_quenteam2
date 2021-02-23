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
    //document.getElementById('data').innerHTML = JSON.stringify(jobs[0]);
    document.getElementById('data').innerHTML = `
        <a href="${jobs[0].Url}"><h2> ${jobs[0].Titel} </h2></a>
        <h5> ${jobs[0].CourseId} </h5>
        <div>${jobs[0].Place}, ${jobs[0].Province}</div>
        <button id="showDesc">What to do</button>
        <div id="desc">${jobs[0].Description}</div>
        `
    document.getElementById('desc').style.display = 'none';
    let b = document.getElementById("showDesc");
    b.addEventListener("click", showDesc, false);
}
function showDesc() {
    document.getElementById('desc').style.display = 'block';
}