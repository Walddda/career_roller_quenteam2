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
    /*
    CourseId
    Titel
    Province
    Description
    Url
    CourseDomain
    Place
    CourseDates
        CourseDateId
        StartDate
        CourseType
        EndDate
        StartTime
        EndTime
        Zip
        Street
        Organiser
        Duration
        Url
    */
    document.getElementById('urlA').href = jobs[count].Url;
    document.getElementById('title').innerHTML = jobs[count].Titel;
    document.getElementById('ort').innerHTML = '<span class="iconify" data-icon="simple-line-icons:location-pin" data-inline="false"></span> '+jobs[count].Place +', '+ jobs[count].Province;
    document.getElementById('id').innerHTML = jobs[count].CourseId;
    document.getElementById('desc').innerHTML = jobs[count].Description;

    
    document.getElementById('desc').style.display = 'none';
    document.getElementById('showDesc').style.display = 'block';

    let b = document.getElementById("showDesc");
    b.addEventListener("click", showDesc, false);
}

function showDesc() {
    if (document.getElementById('desc').style.display == 'block') {
        document.getElementById('desc').style.display = 'none'
    }else{
        document.getElementById('desc').style.display = 'block';
    }
}