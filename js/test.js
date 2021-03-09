'use strict';

function randomMark(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dive1 = document.getElementById('contanier');
let table = document.createElement('table');
dive1.appendChild(table);
let totale = 0;
let dive2 = document.getElementById('unlist');
let get;



let stu = [];
function Student(stuName, age, number) {
    this.stuName = stuName;
    this.age = age;
    this.number = number;
    this.mark = 0;

    stu.push(this)

}

Student.prototype.updateMark = function () {
    this.mark = randomMark(50, 100);
    totale = totale + this.mark;


}
///heder table 
function header() {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Student name';

    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = 'Student number';

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'age';

    let th4 = document.createElement('th');
    tr.appendChild(th4);
    th4.textContent = 'Student mark';

}

Student.prototype.render = function () {
    let tr2 = document.createElement('tr');
    table.appendChild(tr2);

    let td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.textContent = this.stuName;

    let td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent = this.number;

    let td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.textContent = this.age;

    let td4 = document.createElement('td');
    tr2.appendChild(td4);
    td4.textContent = this.mark;

    //un error

    let ulEl = document.createElement('ul');
    dive2.appendChild(ulEl);
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${this.stuName} a new student his age is ${this.age} his student number is ${this.number} and his mark is ${this.mark}`;

}

function footerrender() {
    let trf = document.createElement('tr');
    table.appendChild(trf);

    let tdf1 = document.createElement('td');
    trf.appendChild(tdf1);
    tdf1.textContent = 'Totale';

    let tdf2 = document.createElement('td');
    trf.appendChild(tdf2);
    tdf2.textContent = '';

    let tdf3 = document.createElement('td');
    trf.appendChild(tdf3);
    tdf3.textContent = '';

    let tdf4 = document.createElement('td');
    trf.appendChild(tdf4);
    tdf4.textContent = totale;

}

function saveStudent() {
    let save = JSON.stringify(stu);
    localStorage.setItem('allstudent', save);

}

function getStudent() {
    let get = JSON.parse(localStorage.getItem('allstudent'));
    let olEl = document.createElement('ol');
    dive2.appendChild(olEl);
    let liget = document.createElement('li');
    olEl.appendChild(liget);

    if (get) {
        stu = get;
        for (let i = 0; i < get.length; i++) {
            liget.textContent = `${get[i].stuName} a new student his age is ${get[i].age} his student number is ${get[i].number} `;

        }
    }

}
header();

let zaieed =new Student('zaeed' , 2025,18,59);
zaieed.updateMark();
zaieed.render();

let rem =new Student('rem' , 2055,17 ,90);
rem.updateMark();
rem.render();

let lana =new Student('lana' , 3055 , 25 , 95);
lana.updateMark();
lana.render();
footerrender();
//form
const form =document.getElementById('nwstusent');

form.addEventListener('submit',studentCreator);

let newstu;
function studentCreator(event){
    event.preventDefault();
    const stuName=event.target.StudentName.value;

    let Age=event.target.studentAge.value;
    
    let studentNumber=event.target.studentNumber.value;

    newstu= new Student(stuName , Age,studentNumber);
    newstu.updateMark();
    newstu.render();

    saveStudent();
    getStudent();
    footerrender();
}




