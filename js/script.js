// =======================
// SELECT TEMPLATE
// =======================

function chooseTemplate(type){


    if(type === "formal"){


        window.location.href =
        "editor.html";


    }
	
	else if(type === "client"){
        window.location.href = "client.html";
    }


    else if(type === "informal"){


        window.location.href =
        "informal.html";


    }


}






// =======================
// AUTO DATE
// =======================


document.addEventListener(
"DOMContentLoaded",
function(){


    let dateBox =
    document.getElementById("date");


    if(dateBox){


        let today =
        new Date();


        dateBox.innerHTML =
        today.toLocaleDateString(
            "en-MY",
            {
                day:"numeric",
                month:"long",
                year:"numeric"
            }
        );


    }


}

);









// =======================
// UPDATE LETTER
// =======================


function generateLetter(){


    document.getElementById("previewRecipient").innerHTML =
    document.getElementById("recipient").value;



    let address =


    document.getElementById("address1").value

    + "<br>" +

    document.getElementById("address2").value

    + "<br>" +

    document.getElementById("postcode").value

    + " " +

    document.getElementById("city").value

    + "<br>" +

    document.getElementById("country").value;




    document.getElementById("previewAddress").innerHTML =
    address;




    document.getElementById("previewPrepared").innerHTML =
    document.getElementById("prepared").value;


}









// =======================
// DOWNLOAD PDF
// =======================

function downloadPDF(){


    window.print();


}

function backHome(){


    window.location.href =
    "index.html";


}

// =======================
// UPDATE INFORMAL LETTER
// =======================


function generateInformalLetter(){


    document.getElementById("previewPrepared").innerHTML =
    document.getElementById("prepared").value;


}

function generateClientLetter(){

    const date = document.getElementById("letterDate").value;
    const client = document.getElementById("clientName").value;
    const subject = document.getElementById("subject").value;
    const prepared = document.getElementById("prepared").value;

    if(date){

    const selectedDate = new Date(date);

    document.getElementById("previewDate").innerHTML =
        selectedDate.toLocaleDateString(
            "en-MY",
            {
                day:"numeric",
                month:"long",
                year:"numeric"
            }
        );

}

    document.getElementById("previewClient").innerText =
        client ? `Dear ${client},` : "Dear Client,";

    document.getElementById("previewTitle").innerText =
        subject || "Subject";

    document.getElementById("previewPrepared").innerText =
        prepared || "Advisor Name";
}


// =======================
// AUTO CLIENT DATE
// =======================

document.addEventListener("DOMContentLoaded", function(){

    const dateInput = document.getElementById("letterDate");
    const previewDate = document.getElementById("previewDate");

    if(dateInput && previewDate){

        const today = new Date();

        // 给 input[type="date"] 用 (YYYY-MM-DD)
        dateInput.value = today.toISOString().split("T")[0];

        // Preview 显示 (17 July 2026)
        previewDate.innerHTML = today.toLocaleDateString(
            "en-MY",
            {
                day:"numeric",
                month:"long",
                year:"numeric"
            }
        );

    }

});