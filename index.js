let vlu = document.querySelectorAll('button');
let s = "";
for(let i=0;i<vlu.length;i++){
    vlu[i].addEventListener('click', (event) =>{
        if(event.target.innerHTML == '='){
            s = eval(s);
            document.querySelector('input').value = s;
            
        }
        else if(event.target.innerHTML == 'c'){
            s='';
            document.querySelector('input').value = '';
        }
        else if(event.target.innerHTML != '=' && event.target.innerHTML != 'c'){
            let z = event.target.innerHTML;
            s = s + z;
            document.querySelector('input').value = s;
        }
    })
}
