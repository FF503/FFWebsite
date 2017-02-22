﻿$(document).ready(function () {

    document.getElementById('btnNew').addEventListener('click', processNew, false);
    document.getElementById('btnSav').addEventListener('click', processUpdate, false);
    document.getElementById('fNewsSelect').addEventListener('change', refreshItem, false);

    refreshNewsItems();
    refreshCategorylist();
    refreshPrioritylist();
    refreshStatuslist();
    refreshAuthorlist();
  
});  // End of Document Ready function
 
function refreshNewsItems() {
    //
    //*******************************************
    /* Get List of News Items  
    /********************************************/
    var uri = "api/frogforce/GetNewsItemList";
    $.getJSON(uri, function (data) {
        $('#fNewsSelect').empty();
        $.each(data, function (key, item) {
            var newOption = $('<option value="' + item.ID + '">' + item.ID + '-' + item.Description_text + '</option>');
            $('#fNewsSelect').append(newOption);
        });
        //hiderefreshbtn("#gtbtn", "Done");
        document.getElementById("fNewsSelect").selectedIndex = 0;
        $('#fNewsSelect').trigger("change");
    }) // End Json Call 
    // Optional - fires when operation completes with error
    .error(function (jqXHR, textStatus, errorThrown) {
        msgbox(-1, "GetCategoryList Failed!", 'Error Occurred: ' + jqXHR.responseText);
        //hiderefreshbtn("#gtbtn", "Done");
    });
}

function refreshItem() {
    //
    //*******************************************
    /* Refresh screen with selected news item   
    /********************************************/
    var nid = $('#fNewsSelect').val();
    var uri = "api/frogforce/GetNewsItem/" + nid;
    $.getJSON(uri, function (data) {
        var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S");
        var formatDate = d3.timeFormat("%m-%d-%Y %H:%M:%S");
        document.getElementById("fID").value = data.ID;
        document.getElementById("fStatus").value = data.Status_ID;
        //document.getElementById("fAppBy").value = "";
        //document.getElementById("fAppDate").value = "";
        document.getElementById("fAuthBy").value = data.Author_ID;
        var pd = parseDate(data.Post_Date);
        //var fpd = formatDate(pd);
        document.getElementById("fPostDate").value = formatDate(pd);

        //document.getElementById("fPostDate").value = "02/16/2016 09:00:00";
        document.getElementById("fTitle").value = data.Title_text;
        document.getElementById("fBody").value = data.Body_text;
        document.getElementById("fImageID1").value = data.Image1_Name;
        document.getElementById("fImageID2").value = data.Image2_Name;
    }) // End Json Call 
    // Optional - fires when operation completes with error
    .error(function (jqXHR, textStatus, errorThrown) {
        msgbox(-1, "refreshitem Failed!", 'Error Occurred: ' + jqXHR.responseText);
        //hiderefreshbtn("#gtbtn", "Done");
    });
}


function refreshCategorylist() {
    //
    //*******************************************
    /* Get Category List 
    /********************************************/
    var uri = "api/frogforce/GetCategoryList";
    $.getJSON(uri, function (data) {
        $('#fCategory').empty();
        $.each(data, function (key, item) {
            var newOption = $('<option value="' + item.ID + '">' + item.ID + '-' + item.Description_text + '</option>');
            $('#fCategory').append(newOption);
        });
        //hiderefreshbtn("#gtbtn", "Done");
        $('#fCategory').trigger("change");
    }) // End Json Call 
    // Optional - fires when operation completes with error
    .error(function (jqXHR, textStatus, errorThrown) {
        msgbox(-1, "GetCategoryList Failed!", 'Error Occurred: ' + jqXHR.responseText);
        //hiderefreshbtn("#gtbtn", "Done");
    });
}

function refreshPrioritylist() {
    //
    //*******************************************
    /* Get Priority List 
    /********************************************/
    var uri = "api/frogforce/GetPriorityList";
    //showrefreshbtn("#gtbtn", "Refreshing...");

    $.getJSON(uri, function (data) {
        $('#fPriority').empty();
        $.each(data, function (key, item) {
            var newOption = $('<option value="' + item.ID + '">' + item.ID + '-' + item.Description_text + '</option>');
            $('#fPriority').append(newOption);
        });

        //hiderefreshbtn("#gtbtn", "Done");
        $('#fPriority').trigger("change");
    }) // End Json Call 
    // Optional - fires when operation completes with error
    .error(function (jqXHR, textStatus, errorThrown) {
        msgbox(-1, "GetPriorityList Failed!", 'Error Occurred: ' + jqXHR.responseText);
        //hiderefreshbtn("#gtbtn", "Done");
    });
}

function refreshStatuslist() {
    //
    //*******************************************
    /* Get Status List 
    /********************************************/
    var uri = "api/frogforce/GetStatusList";
    $.getJSON(uri, function (data) {
        $('#fStatus').empty();
        $.each(data, function (key, item) {
            var newOption = $('<option value="' + item.ID + '">' + item.ID + '-' + item.Description_text + '</option>');
            $('#fStatus').append(newOption);
        });
        //hiderefreshbtn("#gtbtn", "Done");
        $('#fStatus').trigger("change");
    }) // End Json Call 
    // Optional - fires when operation completes with error
    .error(function (jqXHR, textStatus, errorThrown) {
        msgbox(-1, "GetStatusList Failed!", 'Error Occurred: ' + jqXHR.responseText);
        //hiderefreshbtn("#gtbtn", "Done");
    });
}


function refreshAuthorlist() {
    //
    //*******************************************
    /* Get Author List 
    /********************************************/
    var uri = "api/frogforce/GetAuthorList";
    $.getJSON(uri, function (data) {
        $('#fAuthBy').empty();
        $.each(data, function (key, item) {
            var newOption = $('<option value="' + item.ID + '">' + item.ID + '-' + item.Description_text + '</option>');
            $('#fAuthBy').append(newOption);
        });
        //hiderefreshbtn("#gtbtn", "Done");
        $('#fAuthBy').trigger("change");
    }) // End Json Call 
    // Optional - fires when operation completes with error
    .error(function (jqXHR, textStatus, errorThrown) {
        msgbox(-1, "GetAuthorList Failed!", 'Error Occurred: ' + jqXHR.responseText);
        //hiderefreshbtn("#gtbtn", "Done");
    });
}

function processNew() {
    document.getElementById("fID").value = "0";
    document.getElementById("fStatus").selectedIndex = 0;
    document.getElementById("fAppBy").value = "";
    document.getElementById("fAppDate").value = "";
    document.getElementById("fAuthBy").selectedIndex = 0;
    var formatDate = d3.timeFormat("%m-%d-%Y %H:%M:%S");
    document.getElementById("fPostDate").value = formatDate(new Date());
    //document.getElementById("fPostDate").value = "02/16/2016 09:00:00";
    document.getElementById("fTitle").value = "";
    document.getElementById("fBody").value = "";
    document.getElementById("fImageID1").value = "";
    document.getElementById("fImageID2").value = "";
}

function processUpdate() {
    var uri = "api/frogforce/UpdateNewsItem";
    var id = document.getElementById("fID").value;
    var status = $('#fStatus').val();
    var authby = $('#fAuthBy').val();
    var postdt = document.getElementById("fPostDate").value;
    var title = document.getElementById("fTitle").value;
    var body = document.getElementById("fBody").value;
    var image1 = document.getElementById("fImageID1").value;
    var image2 = document.getElementById("fImageID2").value;
    var ni = {
        ID: id,
        Status_ID: status,
        Author_ID: authby,
        Post_Date: postdt,
        Image1_Name: image1,
        Image2_Name: image2,
        Title_text: title,
        Body_text: body
    };

    var testpost = $.post(uri, { "": JSON.stringify(ni) })
        .success(function (data) {
            msgbox(0,"News Updated Successfully!", "News Item was successfully updated!");  
        })
        .error(function (data) {
            msgbox(-1, "News Updated Failed!", "News Item Update failed! " + data);
        });
        

}

function processDelete() {
    var uri = "api/frogforce/DeleteNewsItem";
    BootstrapDialog.confirm('Are you sure you want to delete this news item?', function (result) {
        if (result) {
            var id = document.getElementById("fID").value;
            var ni = {
                ID: id
            };
            var testpost = $.post(uri, { "": JSON.stringify(ni) })
                .success(function (data) {
                    msgbox(0, "News Deleted Successfully!", "News Item was successfully deleted!");
                })
                .error(function (data) {
                    msgbox(-1, "News Delete Failed!", "News Item delete failed! " + data);
            });
        } //end if 
      } // End bootstrap function 
    )// End Boot strap Dialog
}