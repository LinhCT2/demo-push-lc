window.onscroll = function() {scrollFuntion()};

function scrollFuntion(){
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
        console.log("80");
       document.getElementById("img1").src="https://static.dezeen.com/uploads/2021/01/cia-logo-redesign-square_dezeen_2364_col_0.jpg";
       document.getElementById("img1").style.width="75px";
        document.getElementById("Cthead").style.padding="0 15px";
        document.getElementById("p1").style.visibility="hidden";

    }else {
        document.getElementById("img1").src="https://yt3.ggpht.com/ytc/AMLnZu9Gqd8OtbWmFR7bdEedbf2HOx9wm72Er2Y9crh46A=s900-c-k-c0x00ffffff-no-rj";
       document.getElementById("img1").style.width="65px";
        document.getElementById("Cthead").style.padding="0 15px";
        document.getElementById("p1").style.visibility="visible";

      }
    
}

function openSidenav(){
    document.getElementById("sidenav").style.width="300px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("bodyb").style.backgroundColor= "rgba(17,17,17,0.5)";

}
function closeSidenav(){
    document.getElementById("sidenav").style.width="0px";
    document.getElementById("bodyb").style.backgroundColor= "rgba(0,0,0,0.0)";

}