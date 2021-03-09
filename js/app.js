'use strict';

function randomMark(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let stu=[];
let dive1 = document.getElementById('contaner');
let table = document.createElement('table');
let dive2 = document.createElement('unlist');
dive1.appendChild(table);
let totale = 0;
function Student(stuName, number, age) {
    this.stuName = stuName;
    this.age = age;
    this.number = number;
    this.mark = 0;
    //let rowcount = 0;
    stu.push(this);


}
Student.prototype.updateMark = function () {
    this.mark = randomMark(50, 100);
    totale = totale + this.mark;

}

function header() {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'student name';
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = 'student number';
    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'student age';
    let th4 = document.createElement('th');
    tr.appendChild(th4);
    th4.textContent = 'student mark';



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
    //rowcount++;

    let ulEl = document.createElement('ul');
    dive2.appendChild(ulEl);
    let liE1 = document.createElement('li');
    ulEl.appendChild(liE1);
    liE1.textContent = `${this.stuName} a new student his age is ${this.age} his student number is ${this.number} and his mark is ${this.mark}`;

}
 function footerrender() {
     let trf=document.createElement('tr');
     table.appendChild(trf);
     let tdf1=document.createElement('td');
     trf.appendChild(tdf1);
     tdf1.textContent='Total';
     let tdf2=document.createElement('td');
     trf.appendChild(tdf2);
     tdf2.textContent='';
     let tdf3=document.createElement('td');
     trf.appendChild(tdf3);
     tdf3.textContent='';

     let tdf4=document.createElement('td');
     trf.appendChild(tdf4);
     tdf4.textContent=totale;

    
 }

 ///to save in local storge
 function saveStudent() {
     let save=JSON.stringify(stu);
     localStorage.setItem('allstudent',save);
     
 }
 ///get the element from local storg
 function get(student) {
     let get=JSON.parse(localStorage.getItem('allstudent'));
     //if he want to print it 
     let olEl=document.createElement('ol');
     dive2.appendChild(olEl);
    let liget=document.createElement('li');
    if (get) {
        stu=get;
        for (let i= 0; i < stu.length; i++) {
            liget.textContent=`${get[i].stuName} has a number ${get[i].number} `
    
            
        }
        
    }
 }

 header();

 let rama =new Student('rama', 2255, 25, 50);
 //rama.updateMark;
 //rama.render;

 let zaid = new Student('zaid', 2555, 24, 90);
 let rula = new Student('rula', 2335, 26, 87);
 for (let j = 0; j < stu.length; j++) {
    stu[j].updateMark;
    stu[j].render;
     
 }
 footerrender();
 ////form
 const form=document.getElementById('nwstusent');
 form.addEventListener('submit',studentCreator);
 let newstudent;
 function studentCreator(event) {
     event.preventDefault();
     const studNam =event.target.studentName.value;
    // console.log(studNam);
     let age=event.target.studentAge.value;
     let studentNum=event.target.studentNumber.value;

     newstudent=new Student (studNam , age ,studentNum);
     newstudent.updateMark();
     newstudent.render();
     //newstudent.deletRow(rowcount);
     saveStudent();
     get();
     footerrender();

     
 }