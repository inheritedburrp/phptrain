window.onload = function(){
    document.getElementById("submitbtn").addEventListener("click", myFunction);
    function myFunction() {
        var x = document.getElementById("frm1");
        var jobName = x.elements[0].value;
        var fromDate = x.elements[1].value.split("-");
        var toDate = x.elements[2].value.split("-");
        var topMargin = 5 + document.getElementById("ganttBar").children.length * 25 + "px";
        var s = ((fromDate[0] - 2015) * 576) + (48 * fromDate[1]) + (1.6 * fromDate[2] - 48);
        var t = ((toDate[0] - 2015) * 576) + (48 * toDate[1]) + (1.6 * toDate[2] - 48);
        var width = t-s;


        var div = document.createElement("div");
        div.style.height = "20px";
        div.style.width = width+"px";
        div.style.marginLeft = s+"px";
        div.style.top = topMargin;
        div.style.textAlign= "center";
        div.style.borderRadius= "8px";
        div.style.border= "2px solid #3B2E56"
        div.style.overflow= "hidden";
        div.style.background = "#8063BC";
        div.style.color = "white";
        div.style.position = "absolute";
        div.innerHTML = jobName;
        document.getElementById("ganttBar").appendChild(div);
    }
};