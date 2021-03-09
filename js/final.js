'use strict';
function randomMark(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  let contanier=document.getElementById('contanier');
  let table=document.createElement('table');
  contanier.appendChild(table);
  let unlist=document.getElementById('unlist');
  let ulEl=document.createElement('ul');
  unlist.appendChild(ulEl);
  let list=document.getElementById('list');

  let totale=0;
  let arrOfStu=[];

function Student(stuName,age,number) {
    this.stuName=stuName;
    this.age=age;
    this.number=number;
    this.mark=0;
    arrOfStu.push(this);


   
}
Student.prototype.updateMark=function () {
    this.mark=randomMark(50 ,100);
    totale=totale+this.mark;
    
}

function header() {
let tr=document.createElement('tr');
table.appendChild(tr);
let th1=document.createElement('th');
tr.appendChild(th1);
th1.textContent='student Name';

let th2=document.createElement('th');
tr.appendChild(th2);
th2.textContent='age';

let th3=document.createElement('th');
tr.appendChild(th3);
th3.textContent='student Number';

let th4=document.createElement('th');
tr.appendChild(th4);
th4.textContent='student Mark';

    
}
header();

Student.prototype.render=function () {





    let tr2=document.createElement('tr');
    table.appendChild(tr2);
    let img = document.createElement('img');
    let td5 = document.createElement('td');
    tr2.appendChild(td5);
    td5.appendChild(img);
    if (this.stuName === 'ahmad')
{
    img.setAttribute("src","img/bridge.jpg")
} else if(this.stuName === 'mohamad'){
    img.setAttribute("src","img/thumb.jpg")
}


let td1=document.createElement('td');
    tr2.appendChild(td1);
    td1.textContent=this.stuName;
    
    let td2=document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent=this.age;
    
    let td3=document.createElement('td');
    tr2.appendChild(td3);
    td3.textContent=this.number;
    
    let td4=document.createElement('td');
    tr2.appendChild(td4);
    td4.textContent=this.mark;   


    let liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`${this.stuName} has age ${this.age} has ${this.number} has ${this.mark}`;

       
}

const form=document.getElementById('newstudent');
form.addEventListener('submit',allstudent);
function allstudent (event) {
    event.preventDefault();
    let stuName=event.target.studentName.value;
    let age=event.target.studentAge.value;
    let number=event.target.studentNumber.value;

    let newstu=new Student(stuName,age,number);
   newstu.updateMark();
    newstu.render();
    savestudent();

    
      
}
function savestudent() {
    let save=JSON.stringify(arrOfStu);
    localStorage.setItem('allstudent',save);
   
}
function getstudent() {
    let getlist=JSON.parse(localStorage.getItem('allstudent'));
    let olEl=document.createElement('ol');
    list.appendChild(olEl);
     let liEl2=document.createElement('li');
     olEl.appendChild(liEl2);
    if (getlist) {
        arrOfStu=getlist;
        for (let i = 0; i < arrOfStu.length; i++) {
     liEl2.textContent=`${getlist[i].stuName} has age ${getlist[i].age} has ${getlist[i].number} has ${getlist[i].mark}`;
        }

        
    }
    
}
getstudent();