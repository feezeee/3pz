const _resCoastBlock = document.getElementById("resultCost");

function changeCheckCheckBox (elemenet, cost)
{
    var text = _resCoastBlock.textContent;
    var number = Number(text);
    if (elemenet.checked)
    {     
        number += cost;
    }
    else{
        number -= cost;
    }    
    _resCoastBlock.textContent =  number;
}

let buf = 0;

function changeCheckRadio (elemenet, cost)
{
    var text = _resCoastBlock.textContent;
    var number = Number(text);
    number -= buf;
    if (elemenet.checked)
    {     
        number += cost;
        buf = cost;
    }
    _resCoastBlock.textContent =  number;
}

function clearCheckedInput ()
{
    document.getElementById("order__firstName").value = "";
    document.getElementById("order__lastName").value = "";
    document.getElementById("order__phoneNumber1").value = "";
    document.getElementById("addressTransfer").value = "";
    document.getElementById("coment").value = "";

    _resCoastBlock.textContent =  0;

    var inputs = document.getElementsByName("flower__scales");    
    
    for (var e in inputs) 
    { 
        inputs[e].checked = false; 

    }

    inputs = document.getElementsByName("flower__decoration");

    for (var e in inputs) 
    { 
        inputs[e].checked = false;  
    }

    inputs = document.getElementsByName("flower__adding");
    
    for (var e in inputs) 
    { 
        inputs[e].checked = false; 
    }

    inputs = document.getElementsByName("flower__transfer");
    
    for (var e in inputs) 
    { 
        inputs[e].checked = false;    
    }
}

