function CreateSection(id, bgcolor, txtcolor, html) { 
    
    var Div = document.createElement('div');
    Div.id = id;
    Div.className = "section";
    Div.style.display = "block";
    Div.style.backgroundColor = bgcolor;
    Div.style.color = txtcolor;
    document.getElementById('container').appendChild(Div);
    if (html != undefined) { document.getElementById(id).innerHTML = html }

  };

function CreateSections() {

		CreateSection(1,"purple","red","<center><b>hey</b></center>");
        CreateSection(2,"black","green","<center><b>yo</b></center>");


	};


