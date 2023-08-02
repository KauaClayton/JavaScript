
const button = document.querySelector('#btn_imp')

button.addEventListener('click', (evt)=>{
    const tabela = document.querySelector('#tabela').innerHTML;
    let estilo = '<style>'
    estilo += 'table{ width:100%; font:25px calibri;}'
    estilo += 'table, td, th{border:2px solid #BBB; border-collapse:collapse;'
    estilo += 'padding:4px 8px; text-align:center;}'
    estilo += '</style>'
    const win = window.open('', '', 'height=700, width=700')
    win.document.write('<html><head>')
    win.document.write('<title>CFB cursos </title>')
    win.document.write(estilo)
    win.document.write('</head>')
    win.document.write('<body>')
    win.document.write(tabela)
    win.document.write('</body></html>')
    win.print()
    win.close()
})