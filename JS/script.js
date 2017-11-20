window.addEventListener('load', iniciar);
function iniciar(){
    document.querySelector('#BtnBG').addEventListener('click',changeBG);

    document.querySelector('#txtcolor').addEventListener('change', tablecolor);

    document.querySelector('#txtsize').addEventListener('change', UpTxtOnMouseOver);
    
    document.querySelector('#txtformat').addEventListener('change', columnsItalic);
    
    document.querySelector('#date').addEventListener('change', reverseDate);    

    }

function changeBG() {
  
    var tabela = document.querySelector('#dadosBanda');

    if(tabela.classList.contains('newBG')){
        tabela.classList.remove('newBG');
        this.value = 'Background Amarelo';

    }
    else{
        tabela.classList.add('newBG');
        this.value = 'Sem preenchimento';
    }
}

function tablecolor() {
   
    

    if(this.checked) {
        document.querySelector('#dadosBanda').classList.add('tableTextColor');
    }
    else {
        document.querySelector('#dadosBanda').classList.remove('tableTextColor');
    }

}

 function UpTxtOnMouseOver(){
    var celluppersize = document.querySelector('#dadosBanda').querySelectorAll('td');

        if(this.checked) {
            for(var i = 0; i < celluppersize.length; i++){
                celluppersize[i].addEventListener('mouseover', uppertext);
                celluppersize[i].addEventListener('mouseout', lowertext);
            }
        }
        else{
            for(var i = 0; i <celluppersize.length; i++){
                celluppersize[i].removeEventListener('mouseover', uppertext);
                celluppersize[i].removeEventListener('mouseout', lowertext);
            }
        }

}

function uppertext(){
    this.classList.add('upcell');
}
function lowertext(){
    this.classList.remove('upcell')
}

function columnsItalic(){
    if(this.checked){
        document.querySelector('#cabecalhoBanda').classList.add('italictxt');
    }
    else{
        document.querySelector('#cabecalhoBanda').classList.remove('italictxt');
    }
}

function reverseDate(){
    var dateToReverse = document.querySelector('table').lastElementChild;
    var cloneToReverse = dateToReverse.cloneNode(true);
    
    
if(this.checked){
    var nToReverse = document.querySelector('table').lastElementChild.childElementCount
    
    for(i = 0; i < nToReverse; i++){
        var day = dateToReverse.children[i].lastElementChild.textContent.substring(0, 2);
        var month = dateToReverse.children[i].lastElementChild.textContent.substring(3, 5);
        var year = dateToReverse.children[i].lastElementChild.textContent.substring(6, 10);
        dateToReverse.children[i].lastElementChild.innerHTML = '<td class="nascimento">'+month+'/'+day+'/'+year+'</td>';

    }
}
else{
    var nToClone = document.querySelector('table').lastElementChild.childElementCount;
    for(k = 0; k < nToClone; k++){
        var dayclone = dateToReverse.children[k].lastElementChild.textContent.substring(0, 2);
        var monthclone = dateToReverse.children[k].lastElementChild.textContent.substring(3, 5);
        var yearclone = dateToReverse.children[k].lastElementChild.textContent.substring(6, 10);
        dateToReverse.children[k].lastElementChild.innerHTML = '<td class="nascimento">'+monthclone+'/'+dayclone+'/'+yearclone+'</td>';
        
    }
  
    
}

  
}




