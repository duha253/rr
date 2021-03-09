'use strict';
function randomMark(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  let dive1=document.getElementById('contanier');
  let table=document.createElement('table');
  dive1.appendChild(table);
 let dive2=document.getElementById('unlist');

  let totale=0;
  let stuarr=[];
  let get;
function Student(stuName,age,number) {
this.stuName=stuName;
this.age=age;
this.number=number;
this.mark=0;
stuarr.push(this);
    
}

Student.prototype.updateMark=function() {
    this.mark=randomMark(50,100);
    totale=totale+this.mark;
    
}
 
function header(){
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
    th4.textContent='student mark';

}

Student.prototype.render=function () {
    let tr2=document.createElement('tr');
    table.appendChild(tr2); 

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

    let ulEl=document.createElement('ul');
    dive2.appendChild(ulEl);
    let liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${this.stuName} a new student his age is ${this.age} his student number is ${this.number} and his mark is ${this.mark}`;

    
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

    function savestudent() {
    let save=JSON.stringify(stuarr);
    localStorage.setItem('allstudent', save);
        
    }
     function getstudent() {
         let getli=JSON.parse(localStorage.getItem('allstudent'));
         let olEl=document.createElement('ol');
         dive2.appendChild(olEl);
         let liget=document.createElement('li');
         olEl.appendChild(liget);
         if (getli) {
             getli=stuarr;
             for (let i = 0; i < stuarr.length; i++) {
  
            
             liget.textContent=`${get[i].stuName} a new student his age is ${get[i].age} his student number is ${get[i].number}`;
            }
        
         }
         
              }

            header ();
            let nour =new Student('nour',25 ,25250,90);
            nour.updateMark();
            nour.render();
            
            let muhammad=new Student('muhammad',20 ,25330,92);
            muhammad.updateMark();
            muhammad.render();

            let ahmad=new Student('ahmad',21, 25880, 82);
            ahmad.updateMark();
            ahmad.render();

            const form =document.getElementById('newstudent');
            form.addEventListener('submit',studentCreator);
           let newstu;
            function studentCreator(event) {
                event.preventDefault();
                let studNam=event.target.studentName.value;
                let stuAge=event.target.studentage.value;
                let studNum=event.target.studentNumber.value;
                
                newstu=new Student(studNam,stuAge,studNum );
                newstu.updateMark();
                newstu.render();

                savestudent();
                getstudent();
                footerrender();
               




            }





