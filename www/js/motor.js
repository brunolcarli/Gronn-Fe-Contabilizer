   
///////////////////////////////////////////////
// ADICIONAR UMA VENDA                      //
/////////////////////////////////////////////

function vender(){
    
    
    var ml = parseInt(localStorage.getItem("ml"));
    var reais_doses = parseFloat(localStorage.getItem("reais_doses"));
    var doses = parseInt(localStorage.getItem("doses"));
    var frascos = parseInt(localStorage.getItem("frascos"));
    var reais_frascos = parseFloat(localStorage.getItem("reais_frascos"));
    var total = parseFloat(localStorage.getItem("total"));
    
    var get_item = document.getElementById('selectProduto').value;
    var get_qt = parseInt(document.getElementById('qtVenda').value);
    
    if (!get_qt){
        get_qt = 0;
    }
    
    if (get_item == "Dosinha 3ml"){
        ml = ((3 * get_qt) + ml);
        reais_doses = ((2 * get_qt) + parseFloat(reais_doses)).toFixed(2);
        doses = (get_qt + doses);
        total = ((2 * get_qt) + parseFloat(total)).toFixed(2);
        
        localStorage.setItem("doses", doses);
        localStorage.setItem("reais_doses", reais_doses);
        localStorage.setItem("ml", ml);
        localStorage.setItem("total", total);

    } else if (get_item == "Frasco 50ml"){
        reais_frascos = ((15 * get_qt) + parseFloat(reais_frascos)).toFixed(2);
        frascos = (get_qt + frascos);
        total = ((15 * get_qt) + parseFloat(total)).toFixed(2);
        
        localStorage.setItem("frascos", frascos);
        localStorage.setItem("reais_frascos", reais_frascos);
        localStorage.setItem("total", total);
    }
    
    location.reload();
    
}
////////////////////////////////////////////////////
// carrega as informações no painel              //
//////////////////////////////////////////////////
function load(){
    
    
    if (localStorage.getItem("doses") == null){
        localStorage.setItem("doses", 0);
    }
    if (localStorage.getItem("ml") == null) {
        localStorage.setItem("ml", 0);
    }
    if (localStorage.getItem("reais_doses") == null){
        localStorage.setItem("reais_doses", 0);
    }
    if (localStorage.getItem("reais_frascos") == null){
        localStorage.setItem("reais_frascos", 0);
    }
    if (localStorage.getItem("frascos") == null){
        localStorage.setItem("frascos", 0);
    }
    if (localStorage.getItem("total") == null){
        localStorage.setItem("total", 0);
    }
    if (localStorage.getItem("perda_dose") == null){
        localStorage.setItem("perda_dose", 0);
    }
    if (localStorage.getItem("perda_garrafa") == null){
        localStorage.setItem("perda_garrafa", 0);
    }
    if (localStorage.getItem("prejuizo") == null){
        localStorage.setItem("prejuizo", 0);
    }
    
    var ml = localStorage.getItem("ml");
    var reais_doses = localStorage.getItem("reais_doses");
    var doses = localStorage.getItem("doses");
    var reais_frascos = localStorage.getItem("reais_frascos");
    var frascos = localStorage.getItem("frascos");
    var total = localStorage.getItem("total");
    var perda_dose = localStorage.getItem("perda_dose");
    var perda_garrafa = localStorage.getItem("perda_garrafa");
    var preju = prejuizo();
    
    document.getElementById("saida").innerHTML = '<div id="saida">';
    document.getElementById("saida").innerHTML += 'Doses: ' + doses;
    document.getElementById("saida").innerHTML += '&nbsp &nbsp &nbsp ml: ' + ml + 'ml';
    document.getElementById("saida").innerHTML += '&nbsp &nbsp &nbsp R$: ' + reais_doses + '<br/>';
    document.getElementById("saida").innerHTML += 'Frascos: ' + frascos;
    document.getElementById("saida").innerHTML += '&nbsp &nbsp &nbsp R$: ' + reais_frascos + '<br/>';     
    document.getElementById("saida").innerHTML += 'TOTAL R$: ' + total + '<br/><br/>';
    document.getElementById("saida").innerHTML += 'Perdas: <br/>' + '<span class="glyphicon glyphicon-tint">:</span>';
    document.getElementById("saida").innerHTML += perda_dose;
    document.getElementById("saida").innerHTML +=  '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
    document.getElementById("saida").innerHTML += '<span class="glyphicon glyphicon-glass">:</span>';
    document.getElementById("saida").innerHTML += perda_garrafa;
    document.getElementById("saida").innerHTML +=  '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
    document.getElementById("saida").innerHTML += '<span class="glyphicon glyphicon-trash">:</span>';
    document.getElementById("saida").innerHTML += " R$ " + preju + '</div>';
    
    
}

////////////////////////////////////////////////
// Registra uma perda                        //
//////////////////////////////////////////////

function perda(){
    
    var perda_dose = parseInt(localStorage.getItem("perda_dose"));
    var perda_garrafa = parseInt(localStorage.getItem("perda_garrafa"));
    
    var get_item = document.getElementById('selectProduto').value;
    var get_qt = parseInt(document.getElementById('qtVenda').value);
    
    if (!get_qt){
        get_qt = 0;
    }
    
    if (get_item == "Dosinha 3ml"){
        perda_dose += get_qt;
        localStorage.setItem("perda_dose", perda_dose);
    } else if(get_item == "Frasco 50ml"){
        perda_garrafa += get_qt;
        localStorage.setItem("perda_garrafa", perda_garrafa);
    }
    
    location.reload();
}


///////////////////////////////////////////////
// calcula o prejuizo                       //
/////////////////////////////////////////////
function prejuizo(){
    
    var perda_garrafa = localStorage.getItem("perda_garrafa");
    var perda_dose = localStorage.getItem("perda_dose");
    var preju = localStorage.getItem("prejuizo");
    
    preju += ((15 * perda_garrafa) + (2 * perda_dose));
    
    return parseFloat(preju).toFixed(2);
}

///////////////////////////////////////////////
// Limpar os registros no local storage     //
/////////////////////////////////////////////
function limpar(){
    localStorage.clear();
    location.reload();
}
