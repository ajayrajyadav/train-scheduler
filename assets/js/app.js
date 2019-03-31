$(document).ready(function () {
    buildhtml();
    function buildhtml(){
        $("body").append($("<div>").addClass("container"));
        addJumboTron();
        addTrainTable();
    }
    function addJumboTron(){
        $(".container").append($("<div>").addClass("jumbotron").attr("id", "myJumbotron"));
        $("#myJumbotron").append($("<h1>").addClass("text-center").html("Ajay's Trains"))
        $("#myJumbotron").append($("<h3>").addClass("text-center").html("Train Schecule"))
    }

    function addTrainTable(){
        $(".container").append($("<div>").addClass("row").attr("id", "firstRow"));
        $("#firstRow").append($("<div>").addClass("col-lg-12").attr("id", "firstColumn"));
        $("#firstColumn").append($("<div>").addClass("card").attr("id","firstCard"));
        $("#firstCard").append($("<div>").addClass("panel-heading").attr("id","table-heading"));
        $("#table-heading").append($("<h3>").addClass("panel-title").attr("id","panelTitle").html("<strong>Current Train Schedule</strong>"));

        $("firstCard").append($("<div>").addClass("panel-body").attr("id","panelBody"));
        $("panelBody").append($("<table>").addClass("table table-hober").attr("id","train-table"));
        $("train-table").append($("<thead>").attr("id", "firstThead"));
        $("#firstThead").append($("<tr>").attr("id","firstTR"));
        $("firstTR").append($("<th>").html("Train Name"));
        $("firstTR").append($("<th>").html("Destination"));
        $("firstTR").append($("<th>").html("Frequency (Min)"));
        $("firstTR").append($("<th>").html("Next Arrival"));
        $("firstTR").append($("<th>").html("Minutes Away"));

        $("#train-table").append($("<tbody>"));

    }

});