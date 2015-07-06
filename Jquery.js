/**
 * Created by CS47 on 30-06-2015.
 */
$(document).ready(function() {
    $('#submitbtn').click(function() {

        var x = document.getElementById("frm1");
        var jobName = x.elements[0].value;
        var fromDate = x.elements[1].value.split("-");
        var toDate = x.elements[2].value.split("-");
        var topMargin = 5 + document.getElementById("ganttBar").children.length * 25 + "px";
        var s = ((fromDate[0] - 2015) * 576) + (48 * fromDate[1]) + (1.6 * fromDate[2] - 48);
        var t = ((toDate[0] - 2015) * 576) + (48 * toDate[1]) + (1.6 * toDate[2] - 48);
        var width = t - s;

        var $div = $('<div></div>');
        var style;
        style = {
            height: "20px",
            width: width + "px",
            "margin-left": s + "px",
            top: topMargin,
            "text-align": "center",
            "border-radius": "8px",
            border: "2px solid #3B2E56",
            overflow: "hidden",
            background: "#8063BC",
            color: "white",
            position: "absolute"
        };
        $("#ganttBar").append($div.css(style));
    });
});