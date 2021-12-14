
    
function mydisplay(num){
    const temp = document.getElementById("answers");
    if(temp.value.length>9){
        temp.style.fontSize = 20 + 'px';
    }else{
        temp.style.fontSize = 60 + 'px';
    }
    if(temp.value.length<29){document.getElementById("answers").value += num;}

}

function del(){
    document.getElementById("answers").value = "";
}

function equals(){
    try{
        let ans = document.getElementById("answers").value;
        let ans3 = eval(ans);
        del();
        mydisplay(ans3);
    }catch(e){
        alert("Please enter valid numbers only.");
        document.getElementById("answers").value = "";
    }
}
