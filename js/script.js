// =======================
// SELECT TEMPLATE
// =======================

function chooseTemplate(type){


    if(type === "formal"){


        window.location.href =
        "editor.html";


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