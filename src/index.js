function submitAnswer() {
    document.getElementById('submit').innerHTML = "Answer submitted Thankyou :)"
    document.getElementById('submit').style.backgroundColor = 'green'
    
    let today = new Date();

    let date = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
    document.cookie = "next_time=" + date.getTime();
}


function cookie(){

}

window.addEventListener("load", () => {
    let next = document.cookie.split(";").find((item) => item.startsWith("next_time="));
    if(next) {
        console.log(Date.now() < parseInt(next.split("=")[1]));
    }
    
})