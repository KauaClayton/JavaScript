

const configdgv={
   endpoint:"./produtos.json", 
}
const dgv=(configdgv)=>{
    const tbody = document.createElement('tbody');
    tbody.innerHTML = ''
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        

       
        document.querySelector('#table').appendChild(tbody)
        
        res.map((el)=>{
            const tr = document.createElement('tr')
            const c1 = document.createElement('th')
            c1.setAttribute('class', 'c1')
            c1.setAttribute('class', 'coluna')
            c1.innerHTML = el.id

            const c2 = document.createElement('th')
            c2.setAttribute('class', 'c2')
            c2.setAttribute('class', 'coluna')
            c2.innerHTML = el.produto

            const c3 = document.createElement('th')
            c3.setAttribute('class', 'c3')
            c3.setAttribute('class', 'coluna')
            c3.innerHTML = el.marca

            const c4 = document.createElement('th')
            c4.setAttribute('class', 'c4')
            c4.setAttribute('class', 'coluna')
            c4.innerHTML = el.modelo

            const c5 = document.createElement('th')
            c5.setAttribute('class', 'c5')
            c5.setAttribute('class', 'coluna')
       

            const imgDelete = document.createElement('img')
            imgDelete.setAttribute('class', 'dvg')
            imgDelete.setAttribute('src', './lixeira.svg')

            const imgEditar = document.createElement('img')
            imgEditar.setAttribute('class', 'dvg')
            imgEditar.setAttribute('src', './editar.svg')

            const imgView = document.createElement('img')
            imgView.setAttribute('class', 'dvg')
            imgView.setAttribute('src', './view.svg')

            c5.appendChild(imgDelete)
            c5.appendChild(imgEditar)
            c5.appendChild(imgView)
            tr.appendChild(c1)
            tr.appendChild(c2)
            tr.appendChild(c3)
            tr.appendChild(c4)
            tr.appendChild(c5)
            tbody.appendChild(tr)
        })

    })
}


dgv(configdgv)
