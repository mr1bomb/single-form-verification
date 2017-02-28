/**
 * Created by fengjiale on 2017/2/28.
 */
function getdata() {
    var data = document.getElementById("text");
    var p = document.getElementsByTagName("p")[0];
    if(data.value.trim().length === 0){
        p.innerHTML = "姓名不能为空";
        p.style.color = "#d01014";
        data.style.borderColor = "#d01014";
    }
    else if(data.value.trim().length <=16 && data.value.trim().length>=4){
        p.innerHTML = "输入正确";
        p.style.color = "#4cae4c";
        data.style.borderColor = "#4cae4c";
    }
    else{
        p.innerHTML = "姓名必须为4-16个字符";
        p.style.color = "#d01014";
        data.style.borderColor = "#d01014";
    }
}
(function init(){
    var button = document.getElementById("button");
    button.onclick = getdata;
})();
