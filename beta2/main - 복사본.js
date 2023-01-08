const schedule = "11:30a.m. - 10p.m."

window.onload = function onLoad(){
    const date = new Date();
    const day = date.getDay();

    if(day==1){
        document.getElementById("today-schedule").innerHTML = "CLOSED TODAY";
    }else{
        document.getElementById("today-schedule").innerHTML = schedule;
    }
}



