$(document).ready(function () {
    var trainObject ={
        trainName: "",
        trainDestination: "",
        firstTrain: "",
        trainFrequency: "",
        minutesUntilTrainArrives: 0,
        TimeForNextTrain: 0
    }
    var currentTime = moment();



    buildhtml();

    $(document).on("click", "#add-train-btn", function () {
        event.preventDefault();
        popUpModal();
        console.log("inside the click");
        $("#trainModal").modal("show");
        
    });

    $(document).on("click", "#add-train-btn-modal", function () {
        event.preventDefault();
        // console.log("inside the click");
        getTrainInfo();
        // $("#trainModal").modal("show");
        
    });

    function getTrainInfo(){
        let newTrainInput = $("#train-name-input").val().trim();
        let theDestinationInput = $("#train-dest-input").val().trim();
        let firstTrainInput = $("#trainTime").val().trim();
        let frequencyInput = $("#frequency-input").val().trim();
        if(newTrainInput ===  ""){ popupErrorModal("Train input is not valid"); }
        if(theDestinationInput === ""){ popUpModal("Destination input is not valid"); }
        if(firstTrainInput === ""){ popUpModal("Time is not valid"); }
        if(frequencyInput === ""){ popUpModal("Time is not valid"); }

        var firstTrainConverted = moment(firstTrainInput, "hh:mm").subtract("1, years");
        var difference = currentTime.diff(moment(firstTrainConverted), "minutes");
        var remainder = difference % frequencyInput;
        var minUntilTrain = frequencyInput - remainder;
        var nextTrain = moment().add(minUntilTrain, "minutes").format("HH:mm");
        console.log(nextTrain);
        var newTrain = {
            trainName: newTrainInput,
            trainDestination: theDestinationInput,
            firstTrain: firstTrainInput,
            trainFrequency: frequencyInput,
            minutesUntilTrainArrives: minUntilTrain,
            TimeForNextTrain: nextTrain
        }

        $("#trainModal").modal("hide");
    }
    

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
        $("#trainForm").append($("<button>").addClass("btn btn-primary").attr({id: "add-train-btn", type: "submit"}).html("Add Train Times"));

    }

    


    function popUpModal(){
        $("#trainModal").empty();
        $(".container").append($("<div>").addClass("modal fade").attr({id: "trainModal", role: "dialog", style: "width: 1250px"}));
        $("#trainModal").append($("<div>").addClass("modal-dialog").attr("id","modalDialog"));
        $("#modalDialog").append($("<div>").addClass("modal-content").attr("id","modalContent"));
        $("#modalContent").append($("<div>").addClass("modal-header").attr({id: "modalHeader", style: "padding:35px 50px"}));
        $("#modalHeader").append($("<h4>").addClass("glyphicon glyphicon-lock").html("Train Information"));
        $("#modalHeader").append($("<button>").addClass("close").attr("type", "button").attr("data-dismiss", "modal"));

        $("#modalContent").append($("<div>").addClass("modal-body").attr({id: "modalBody", style: "padding:40px 50px"}));
        $("#modalBody").append($("<form>").attr("id","trainFormModal").attr("role", "form"));
        
        $("#trainFormModal").append($("<div>").addClass("form-group").attr("id","formGroup1"));
        $("#formGroup1").append($("<label>").attr("for","train-name-input").html("Train Name"));
        $("#formGroup1").append($("<input>").addClass("form-control").attr({id: "train-name-input", type: "text"}).attr("required", true));

        $("#trainFormModal").append($("<div>").addClass("form-group").attr("id","formGroup2"));
        $("#formGroup2").append($("<label>").attr("for","destination-input").html("Destination"));
        $("#formGroup2").append($("<input>").addClass("form-control").attr({id: "train-dest-input", type: "text"}).attr("required", true));

        $("#trainFormModal").append($("<div>").addClass("form-group").attr("id","formGroup3"));
        $("#formGroup3").append($("<label>").attr("for","firsttime-input").html("First Train Time (Military Format HH:MM)"));
        $("#trainFormModal").append($("<div>").addClass("form-group").attr("id","formGroup4"));

        // $("#formGroup4").append($("<input>").addClass("form-group").attr({id: "firstHour1-input", type: "number", min: "0", max: "1", maxlength: "1", required: true}));
        // $("#formGroup4").append($("<input>").addClass("form-group").attr({id: "firstHour2-input", type: "number", min: "0", max: "9", maxlength: "1", required: true}));
        // $("#formGroup4").append($("<label>").html(":"));

        // $("#formGroup4").append($("<input>").addClass("form-group").attr({id: "firstMin1-input", type: "number", min: "0", max: "5", maxlength: "1", required: true}));
        // $("#formGroup4").append($("<input>").addClass("form-group").attr({id: "firstMin2-input", type: "number", min: "0", max: "9", maxlength: "1", required: true}));
        
        $("#formGroup4").append($("<input>").attr({id: "trainTime", type: "text", required: true, pattern: "([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}"}));
        
        $("#trainFormModal").append($("<div>").addClass("form-group").attr("id","formGroup5"));
        $("#formGroup5").append($("<label>").attr("for", "frequency-input").html("Frequency (min)"));
        $("#formGroup5").append($("<input>").addClass("form-control").attr({id: "frequency-input", type: "number", min: "1", maxlength: "10", required: true}));

        $("#trainFormModal").append($("<button>").addClass("btn btn-primary").attr({id: "add-train-btn-modal", type: "submit"}).html("submit"));

        $("#modalContent").append($("<div>").addClass("modal-footer").attr("id","modalFooter"));
        $("#modalFooter").append($("<button>").addClass("btn btn-danger btn-default pull-right").attr("type", "button").attr("data-dismiss", "modal").attr("id", "modalCancel"));
        $("#modalCancel").append($("<span>").addClass("glyphicon glyphicon-remove").html("Cancel"));

        // $("#trainModal").modal("show");
    }

    function popupErrorModal(message){
        $("#errorModal").empty();
        $(".container").append($("<div>").addClass("modal fade").attr({id: "errorModal", role: "dialog",}));
        $("#errorModal").append($("<div>").addClass("modal-dialog").attr({id:"errDialog", role: "document"}));
        $("#errDialog").append($("<div>").addClass("modal-content").attr("id", "errModalContent"));
        $("#errModalContent").append($("<div>").addClass("modal-header").attr("id","errModalheader"));
        $("#errModalheader").append($("<h5>").addClass("modal-title").attr("id", "errModalTitle").html("Error!"));
        $("#errModalContent").append($("<div>").addClass("modal-body").attr("id", "errModalBody").html(message))
        $("#errModalContent").append($("<div>").addClass("modal-footer").attr("id", "errModalFooter"));
        $("#errModalFooter").append($("<button>").addClass("btn btn-secondary").attr({id: "closeButton", type: "button"}).attr("data-dismiss", "modal").html("close"))
        $("#errorModal").modal("show");
    }

});