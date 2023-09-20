const f_nome = document.querySelector('#f_nome');
const f_nota = document.querySelector('#f_nota');
const f_msg = document.querySelector('#f_msg');

document.querySelector('#btn_validar').addEventListener('click',(evt)=>{;
    let estadoval = f_nota.validity;
    if(estadoval.valueMissing){;
        f_nota.setCustomValidity('value missing')
    };
    f_nota.reportValidity()
    f_msg.innerHTML = f_nota.validationMessage

    evt.preventDefault();
});
