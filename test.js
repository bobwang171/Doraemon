const string = `
<style>
.mainHead *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select:none;
}
.mainHead{
    position: relative;
    left:50%; 
    margin-left:-100px;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color:#0097e3 ;
    
}
.face{
    border: 1px solid black;
    position: absolute;
    width: 170px;
    height: 150px;
    left: 14px;
    top: 40px;
    border-radius: 80%;
    background-color:white ;
}
.nose{
    border: 1px solid black;
border-radius: 100% ;
background-color: #cc0000;
position: absolute;
left: 50%;
margin-left:-10px;
top: 70px;
width: 20px;
height: 20px;
}

.eye-right{
    border: 1px solid black;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 40%;
    left: 50%;
    top: -43px;
    background-color: white;
}
.eye-left{
    border: 1px solid black;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 40%;
    top: -43px;
    left:-40px;
    background-color: white;
}
.eye-ball-left{
    border: 1px solid black;
    position: absolute;
    width: 7px;
    height: 7px;
    left:32px;
    top: 30px;
    border-radius: 100%;
    background-color: black;
}
.eye-ball-right{
    border: 1px solid black;
    position: absolute;
    width: 7px;
    height: 7px;
    right:32px;
    top: 30px;
    border-radius: 100%;
    background-color: black;
}
.middleLine{
    position: absolute;
    height: 70px;
    width: 1px;
    left: 8px;
    top: 19px;
    background-color: #969696;
    z-index: 2;
}

.mouth{
    border: 1px solid black;
    position:absolute;
    border-radius: 60%;
    width: 150px;
    height: 100px;
    left: -66px;
    top: -10px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
}
.beard-middle{
    position: absolute;
    width: 160px;
    height: 1px;
    top: 40px;
    left: -71px;
    background-color: black;
}
.beard-up{
    position: absolute;
    width: 160px;
    height: 1px;
    top: 40px;
    left: -71px;
    transform: rotate(15deg);
    background-color: black;
}
.beard-down{
    position: absolute;
    width: 160px;
    height: 1px;
    top: 40px;
    left: -71px;
    transform: rotate(-15deg);
    background-color: black;

}
.shadow{
    position: absolute;
    width: 80px;
    height: 30px;
    left: -31px;
    top: 25px;
    background-color: white;
}  
.mainBody{
    position: absolute;
    width: 300px;
    height: 90px;
    top: 185px;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
}
.pocket{
    position: absolute;
    border: 1px solid black;
    background-color: white;
    width: 100px;
    height: 90px;
    left: 50%;
    top: -10px;
    margin-left: -50px;
    border-radius: 60px;

}
.innerPocket{
    position: absolute;
    border: 1px solid black;
    width: 70px;
    height: 38px;
    left: 50%;
    top: 40px;
    margin-left: -35px;
    border-radius: 0 0px 60px 60px;
}
.neck{
    position: absolute;
    border: 1px solid black;
    background-color: #cc0000;
    border-radius: 10px;
    width: 136px;
    height: 10px;
    left: 50%;
    margin-left:-68px ;
}
.body2{
    position:absolute;
    border: 1px solid black;
    width: 130px;
    height: 120px;
    left: 50%;
    margin-left: -65px;
    background-color: #0097e3;

}
.line1{
    position: absolute;
    border: 1px solid #0097e3;
    width: 0px;
    height: 40px;
    left: 85px;
    top: 9px;
}
.line2{
    position: absolute;
    border: 1px solid #0097e3;
    width: 0;
    height: 40px;
    left: 213px;
    top: 9px;
}
.ring{
    border: 1px solid black;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    left: 50%;
    margin-left: -10px;
    top: 4px;
    background-color: yellow;
    overflow: hidden;
}
.ringPart1{
    position:absolute;
    border: 1px solid black;
    background-color: black;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    left: 50%;
    margin-left: -3px;
    top: 7px;
}
.ringPart2{
    position: absolute;
    height: 6px;
    width: 1px;
    background-color: black;
    left: 50%;
    margin-left: -0.5px;
    top: 13px;
}
.ringPart3{
    position: absolute;
    border: 1px solid black;
    width: 20px;
    height: 3px;
    left: 50%;
    margin-left: -10px;
    top: 3px;
}
.arm-left{
    border: 1px solid black;
    position: absolute;
    width: 50px;
    height: 31px;
    left: 52px;
    top: 21px;
    transform: rotate(-40deg);
    background-color: #0097e3;
    z-index: -1;
}
.hand-left{
    position: absolute;
    border: 1px solid black;
    height: 34px;
    width: 34px;
    border-radius: 100%;
    left: -20px;
    top: -2px;
    background-color: white;
}


.arm-right{
    border: 1px solid black;
    position: absolute;
    width: 50px;
    height: 31px;
    right: 52px;
    top: 21px;
    transform: rotate(-140deg);
    background-color: #0097e3;
    z-index: -1;
}
.hand-right{
    position: absolute;
    border: 1px solid black;
    height: 34px;
    width: 34px;
    border-radius: 100%;
    left: -20px;
    top: -3px;
    background-color: white;
}
.foot-left{
    position: absolute;
    border: 1px solid black;
    position: absolute;
    width: 74px;
    height:18px ;
    top: 270px;
    left: 50%;
    margin-left: 2px;
    border-radius: 10px 20px 10px 10px;
    background-color: white;
}
.foot-right {
    position: absolute;
    border: 1px solid black;
    position: absolute;
    width: 74px;
    height:18px ;
    top: 270px;
    left: 24px;
    border-radius: 20px 10px 10px 10px;
    background-color: white;
}
</style>`

let n = 1;
demo1.innerHTML = string.substring(0, n)
demo2.innerText = string.substring(0, n)

let time=100

const run=() => {
    n += 1
       if (n > string.length) {
           window.clearInterval(id)
           return;
       }
    demo1.innerHTML = string.substring(0, n)
    demo2.innerText = string.substring(0, n)
    demo2.scrollTop = demo2.scrollHeight;

}
const play = () => {
    clearInterval(id);
    return setInterval(run, time);
}
const pause = () => {
    window.clearInterval(id);
}
let id = play();
buttonPause.onclick = () => {
    pause();
}
buttonPlay.onclick = () => {
    id = play();
}
buttonFast.onclick = () => {
    window.clearInterval(id)
    time=0
    id = play();
}
buttonNormal.onclick = () => {
    pause();
    time=100
    id = play();
}
buttonSlow.onclick = () => {
    pause();
    time=300
    id = play();
}
buttonClear.onclick = () => {
    location.reload();
}