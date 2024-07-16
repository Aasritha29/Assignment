//sticky navigation

$(document).ready(function(){
    $(window).on('scroll',function()
{
    var scroll=$(window).scrollTop();

    if(scroll>=50)
    {
         $(".sticky").addClass("stickyadd");
    }
    else{
        $(".sticky").removeClass("stickyadd");
    }
})
})

//contact button
let popup=document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}


function closePopup(){
    popup.classList.remove("open-popup");
}

//skills section

//grab the cards wrapper
const wrapper=document.querySelector('.cards-wrapper');

//grab the dots
const dots=document.querySelectorAll('.dot');

let activeDotNum=0;

dots.forEach((dot,idx)=>{
    dot.setAttribute('data-num',idx);

    dot.addEventListener('click',e=>{
          let clickDotNum=e.target.dataset.num 
        if(clickDotNum == activeDotNum) return;
        else{
            let displayAreaWidth=document.querySelector('.display-area').clientWidth;
            console.log(displayAreaWidth);
            let pixelsToMove=-displayAreaWidth*clickDotNum;
            wrapper.style.transform='translateX('+pixelsToMove+ 'px)';
            dots[activeDotNum].classList.remove('active');
            dots[clickDotNum].classList.add('active');
            activeDotNum=clickDotNum;
        }

    });
});

