var col= ["green","red","blue","orange","white",]
let a=0;
function fun(){
    document.querySelector(".colour").textContent=col[a]
document.body.style.backgroundColor =col[a];
document.querySelector(".main").style.backgroundColor =col[a+1]
    a++
    if(a==col.length){
        a=0;
    }
}