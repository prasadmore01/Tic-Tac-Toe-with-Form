let div = document.querySelectorAll("div")
let fname = document.getElementById('fname');
let sname = document.getElementById('sname');
let fPlayer = document.getElementById('fPlayer')
let sPlayer = document.getElementById('sPlayer')
let start = document.getElementById('start')
let clear = document.getElementById('clear')
let reset = document.getElementById('reset')
let count=1;


let ticTacToe = document.getElementById('ticTacToe')
ticTacToe.style.display="none"


let form = document.getElementById('form')

start.addEventListener('click',funStart,false)
clear.addEventListener('click',funClear,false)
reset.addEventListener('click',funReset,false)

function funStart(){
    fPlayer.innerHTML+= fname.value +" is X..!<BR>"
    sPlayer.innerHTML+= sname.value+" is O..!<BR>"
    form.style.display='none'
    ticTacToe.style.display="block"
}

function funClear(){

   fname.value=""
    sname.value=""
}

function funReset(){

    for(let i=0;i<div.length;i++){
        div[i].textContent=""
        div[i].style.color="black"
        count=1;
    }
    
}



for(let i=0;i<div.length;i++){
    div[i].addEventListener("click",funClick,false)
}




function funClick(event){
    console.log(count)
    if(count<=9){
        if(count%2==0){
            event.target.innerHTML="O"
            } else {
                event.target.innerHTML="X"
        }

        for(let i=0;i<div.length;i++){

        //--------------------------------------------------- FOR HORIZONTAL O & x CONDITIONS

            if(div[0].textContent == "O" && div[1].textContent=="O" && div[2].textContent == "O" ){
            alert(sname.value+" is Winner")
            div[0].style.color="green"
            div[1].style.color="green"
            div[2].style.color="green"
            break;
            } else if(div[0].textContent == "X" && div[1].textContent=="X" && div[2].textContent == "X" ){
                alert(fname.value+" is Winner");
                div[0].style.color="green"
                div[1].style.color="green"
                div[2].style.color="green"
                break;
            }

            if(div[3].textContent == "O" && div[4].textContent=="O" && div[5].textContent == "O" ){
                alert(sname.value+" is Winner")
                div[3].style.color="green"
                div[4].style.color="green"
                div[5].style.color="green"
                break;
            }else if(div[3].textContent == "X" && div[4].textContent=="X" && div[5].textContent == "X" ){
                alert(fname.value+" is Winner");
                div[3].style.color="green"
                div[4].style.color="green"
                div[5].style.color="green"
                break;
            }

            if(div[6].textContent == "O" && div[7].textContent=="O" && div[8].textContent == "O" ){
                alert(sname.value+" is Winner")
                div[6].style.color="green"
                div[7].style.color="green"
                div[8].style.color="green"
                break;
            } else if(div[6].textContent == "X" && div[7].textContent=="X" && div[8].textContent == "X" ){
                alert(fname.value+" is Winner");
                div[6].style.color="green"
                div[7].style.color="green"
                div[8].style.color="green"
                break;
            }

        //------------------------------------------------------------------- FOR VERTICAL O & X CONDITIONS
            
            if(div[0].textContent == "O" && div[3].textContent=="O" && div[6].textContent == "O" ){
            alert(sname.value+" is Winner")
            div[0].style.color="green"
            div[3].style.color="green"
            div[6].style.color="green"
            break;
            } else if(div[0].textContent == "X" && div[3].textContent=="X" && div[6].textContent == "X" ){
                alert(fname.value+" is Winner");
                div[0].style.color="green"
                div[3].style.color="green"
                div[6].style.color="green"
                break;
            }

            if(div[1].textContent == "O" && div[4].textContent=="O" && div[7].textContent == "O" ){
                alert(sname.value+" is Winner")
                div[1].style.color="green"
                div[4].style.color="green"
                div[7].style.color="green"
                break;
            }else if(div[1].textContent == "X" && div[4].textContent=="X" && div[7].textContent == "X" ){
                alert(fname.value+" is Winner");
                div[1].style.color="green"
                div[4].style.color="green"
                div[7].style.color="green"
                break;
            }

            if(div[2].textContent == "O" && div[5].textContent=="O" && div[9].textContent == "O" ){
                alert(sname.value+" is Winner")
                div[2].style.color="green"
                div[5].style.color="green"
                div[9].style.color="green"
                break;
            } else if(div[2].textContent == "X" && div[5].textContent=="X" && div[9].textContent == "X" ){
                alert(fname.value+" is Winner");
                div[2].style.color="green"
                div[5].style.color="green"
                div[9].style.color="green"
                break;
            }
    //------------------------------------------------------------------- FOR DIAGONAL O & X CONDITIONS    
            
        if(div[0].textContent == "O" && div[4].textContent=="O" && div[8].textContent == "O" ){
            alert(sname.value+" is Winner")
                div[0].style.color="green"
                div[4].style.color="green"
                div[8].style.color="green"
            break;
        } else if(div[0].textContent == "X" && div[4].textContent=="X" && div[8].textContent == "X" ){
            alert(fname.value+" is Winner");
                div[0].style.color="green"
                div[4].style.color="green"
                div[8].style.color="green"
            break;
        }

        if(div[2].textContent == "O" && div[4].textContent=="O" && div[6].textContent == "O" ){
            alert(sname.value+" is Winner")
                div[2].style.color="green"
                div[4].style.color="green"
                div[6].style.color="green"
            break;
        }else if(div[2].textContent == "X" && div[4].textContent=="X" && div[6].textContent == "X" ){
            alert(fname.value+" is Winner");
                div[2].style.color="green"
                div[4].style.color="green"
                div[6].style.color="green"
            break;
        }

        }
    } else{
        alert("Match is Draw....!")
    }
    count++;
}
