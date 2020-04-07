const showDiv = () => {
    document.getElementById("disp").style.display = "block";
    document.getElementById("joinTeam").style.display = "none";
};

const showTeam = () => {
    document.getElementById("show-team").style.display = "block";

    document.getElementById("heading").innerHTML="team  ";
    const radio = document.getElementsByName("guy1");
    for(i=0;i<radio.length;i++){
        if(radio[i].checked){
            let val = radio[i].value;            
            let text1 = document.getElementById("heading");
            let text2 = document.createTextNode(val);
            text1.appendChild(text2);
        }
    }


    

    // let ele = document.getElementById("popup");
    // ele.appendChild(text1);
};

const closeTeam = () => {
    document.getElementById("show-team").style.display="none";
    document.getElementById("disp1").style.display="none";
    document.getElementById("heading").innerHTML='';
};

const showDiv1 = () => {
    document.getElementById("disp1").style.display = "block";
}