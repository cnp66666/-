 $.ajax({
        type: "get",
        async: true,
        dataType: "json",
        url: "../data/cardetails.json",
        success: function (data) {
        	$(".qch1").html(data.h1);
        	$(".qcbqspan1").html(data.tab);
        	$(".qcbqspan2").html(data.start);
        	$(".qcbqspan3").html(data.end);
        	$(".qcimg").html("<img src='../image/"+data.img+"' alt=''/>");
        	$(".qcnr").html("<p>"+data.p[0]+"</p>")
        	$(".qcnr2").html("<p>"+data.p[1]+"</p>")
        	$(".qcnr3").html("<p>"+data.p[2]+"</p>")
        	$(".qcnr4").html("<p>"+data.p[3]+"</p>")
        	$(".qcnr5").html("<p>"+data.p[4]+"</p>")
        	$(".qcnr6").html("<p>"+data.p[5]+"</p>")
        }
})