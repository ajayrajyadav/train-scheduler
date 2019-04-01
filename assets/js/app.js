$(document).ready(function () {
    buildhtml();
    function buildhtml(){
        $("body").append($("<div>").addClass("container"));
        addJumboTron();
        addTrainTable();
    }
    function addJumboTron(){
        $(".container").append($("<div>").addClass("jumbotron").attr("id", "myJumbotron"));
        $("#myJumbotron").append($("<h1>").addClass("text-center").html("Mobile Ave Train Station"))
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
        //this is where we will add all the train info
        $("#firstColumn").append($("<div>").addClass("panel panel-primary").attr("id","trainInfoPanel"));
        $("#trainInfoPanel").append($("<div>").addClass("panel-heading").attr("id","panelHeading"));
        $("#panelHeading").append($("<h3>").addClass("panel-title").attr("id","trainPanelTitle").html("<strong>Add Train</strong>"));
        $("#trainInfoPanel").append($("<div>").addClass("panel-body").attr("id","trainPanelBody"));
        
        $("#trainPanelBody").append($("<form>").attr("id","trainForm"));

        
        // $("#trainForm").append($("<div>").addClass("input-field col s6").attr("id","formGroup1"));
        // $("#formGroup1").append($("<input>").addClass("validate").attr({id : "train-name-input", type: "text"}));
        // $("#formGroup1").append($("<label>").attr({for: "train-name-input"}).text("Train Name:"));

        // $("#trainForm").append($("<div>").addClass("input-field col s6").attr("id","formGroup2"));
        // $("#formGroup2").append($("<input>").addClass("validate").attr({id : "destination-input", type: "text"}))
        // $("#formGroup2").append($("<label>").attr({for: "destination-input"}).text("Destination:"))

        // $("#trainForm").append($("<div>").addClass("input-field col s6").attr("id","formGroup3"));
        // $("#formGroup3").append($("<input>").addClass("form-group").attr({id: first}))



        $("#trainForm").append($("<div>").addClass("form-group").attr("id","formGroup1"));
        $("#formGroup1").append($("<label>").attr("for","destination-input").html("Train Name"));
        $("#formGroup1").append($("<input>").addClass("form-control").attr({id: "train-name-input", type: "text"}).attr("required", true));

        // <div class="input-field col s6">
        // <input placeholder="Placeholder" id="first_name" type="text" class="validate">
        //   <label for="first_name">First Name</label>

        $("#trainForm").append($("<div>").addClass("form-group").attr("id","formGroup2"));
        $("#formGroup2").append($("<label>").attr("for","destination-input").html("Destination"));
        $("#formGroup2").append($("<input>").addClass("form-control").attr({id: "destination-input", type: "text"}).attr("required", true));

    }

});