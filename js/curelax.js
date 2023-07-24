//navbar------
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container .collapse ul li');



window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 5)){
            current = section.getAttribute('id');

        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
   
})

//-----------profile--------

//-----edit----//
const imgDiv = document.querySelector('.profile-pic');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');
/// when user hover
  file.addEventListener('change',function(){
      //this refer to file
    const choosedFile = this.files[0];

    if(choosedFile){

    const reader = new FileReader();

     reader.addEventListener('load', function(){
       img.setAttribute('src', reader.result);
     });

     reader.readAsDataURL(choosedFile);

    }
  });





//-----------------------

/*------*/
//   all ------------------

//--------assesment-------

function check(){
    var c=0;
    var Q1=document.assesQ.Qu1.value;
    var Q2=document.assesQ.Qu2.value;
    var Q3=document.assesQ.Qu3.value;
    var Q4=document.assesQ.Qu4.value;
    var Q5=document.assesQ.Qu5.value;
    var Q6=document.assesQ.Qu6.value;
    var Q7=document.assesQ.Qu7.value;
    var Q8=document.assesQ.Qu8.value;
    var Q9=document.assesQ.Qu9.value;
    var Q10=document.assesQ.Qu10.value;
    var result=document.getElementById('result');
    var asses = document.getElementById("assesQ")
    if(Q1=="Yes"){c++}
    if(Q2=="Yes"){c++}
    if(Q3=="Yes"){c++}
    if(Q4=="Yes"){c++}
    if(Q5=="Yes"){c++}
    if(Q6=="Yes"){c++}
    if(Q7=="Yes"){c++}
    if(Q8=="Yes"){c++}
    if(Q9=="Yes"){c++}
    if(Q10=="Yes"){c++}
    
   
    if(c<5){
        result.innerHTML = `<h5>Your Score is ${c}, Your stress level is Low.</h5> You're doing fantastic!<br>
        People who score like you sometimes experience a few symptoms of stress such as mood swings,<br>
         problems with focus or body pain.
        You seem to feel in control of your life. <br>
        You also appear to manage your stress well most of the time.`;
    } else if(c>5) {
         result.innerHTML=`<h5>Your score is ${c}, Your stress level is High.</h5> We are here to help you!<br>
         People with a score like you are more likely to experience several stress symptoms.<br>
          It’s expected that you feel emotionally drained, overly anxious, and burned out.
         These concerns need to be addressed, as they seem to be making it difficult for you to go about your routine.`
    } else {
        result.innerHTML=`<h5>Your score is ${c}, Your stress level is Moderate. </h5> There’s still hope!<br>
        People with a score like you are more likely to experience stress symptoms such as mood swings, difficulty focusing, and body aches and pains.<br>
        At times, you might get overwhelmed.<br> You might also feel like you don’t have enough control over your stress.`
    }
}
//--------Sidebar----------


let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

    


if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
