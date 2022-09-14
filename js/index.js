let adicionadosAoCarrinho = []

// Criando os cards dos produtos
let listaProdutos = document.getElementsByClassName('produtos')[0]
for (let produto of data1) {
    let li = document.createElement('li')
    li.setAttribute('class', 'card')
    li.setAttribute('id', produto.id)
    let div = document.createElement('div')
    div.style.backgroundColor = '#F5F5F5'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    let imagem = document.createElement('img')
    imagem.src = produto.img
    div.append(imagem)
    let classificacao = document.createElement('p')
    classificacao.innerText = produto.tag[0]
    classificacao.setAttribute('class', 'classificacao')
    let titulo = document.createElement('h4')
    titulo.innerText = produto.nameItem
    let descricao = document.createElement('p')
    descricao.innerText = produto.description
    descricao.setAttribute('class', 'descricao')
    let preco = document.createElement('p')
    preco.innerText = `R$ ${produto.value.toFixed(2)}`
    preco.setAttribute('class', 'preco')
    let add = document.createElement('button')
    add.innerText = produto.addCart
    li.append(div, classificacao, titulo, descricao, preco, add)
    listaProdutos.append(li)
}


//funcao para adicionar produto ao carrinho
let addToCart = (event) => {
    let botao = event.target
    if (botao.tagName === 'BUTTON') {
        let carrinho = document.getElementsByClassName('itens')[0]
        if (quantidade === 0) {
            carrinho.innerHTML = ''
            let itens = document.createElement('ul')
            itens.setAttribute('id', 'itens-carrinho')
            carrinho.append(itens)
            carrinho.setAttribute('class', 'carrinho-com-produtos')
        }
        quantidade++
        let ul = document.getElementById('itens-carrinho')
        let item = document.createElement('li')
        item.style.display = 'flex'
        item.style.alignItems = 'center'
        item.style.marginBottom = '20px'

        let li = botao.closest('li')
        for (let i = 0; i < data1.length; i++) {
            if (li.id == data1[i].id) {
                adicionadosAoCarrinho.push(data1[i])
                let divImg = document.createElement('div')
                divImg.style.backgroundColor = 'white'
                divImg.style.width = '80px'
                divImg.style.height = '80px'
                divImg.style.display = 'flex'
                divImg.style.alignItems = 'center'
                divImg.style.justifyContent = 'center'
                let imagem_ = document.createElement('img')
                imagem_.src = data1[i].img
                imagem_.style.width = '80px'
                divImg.append(imagem_)
                let div_ = document.createElement('div')
                div_.style.display = 'flex'
                div_.style.flexDirection = 'column'
                div_.style.justifyContent = 'space-between'
                div_.style.height = '98%'
                div_.style.width = '200px'
                let titulo_ = document.createElement('p')
                titulo_.innerText = data1[i].nameItem
                titulo_.style.fontSize = '14px'
                titulo_.style.fontWeight = 'bold'
                titulo_.style.marginLeft = '20px'
                let preco_ = document.createElement('p')
                preco_.setAttribute('class', 'preco')
                preco_.innerText = `R$ ${data1[i].value.toFixed(2)}`
                preco_.style.marginLeft = '20px'
                let remover = document.createElement('button')
                remover.style.border = 'none'
                remover.innerText = 'Remover produto'
                remover.style.transform = 'translate(0px, -5px)'
                remover.style.width = 'fit-content'
                remover.style.marginLeft = '13px'
                remover.style.backgroundColor = '#F5F5F5'
                remover.setAttribute('class', 'remover')
                div_.append(titulo_, preco_, remover)
                item.setAttribute('id', `-${li.id}`)
                item.append(divImg, div_)
                ul.append(item)
                precoTotal += data1[i].value
                

                if (ul.children.length === 1) {
                    let divQuantidade = document.createElement('div')
                    divQuantidade.setAttribute('id', 'divQuantidade')
                    divQuantidade.style.display = 'flex'
                    divQuantidade.style.justifyContent = 'space-between'
                    divQuantidade.style.padding = '20px'
                    divQuantidade.style.backgroundColor = '#292929'
                    divQuantidade.style.color = 'white'
                    let pQuantidade = document.createElement('p')
                    pQuantidade.setAttribute('id', 'pQuantidade')
                    pQuantidade.innerText = 'Quantidade:'
                    pQuantidade.style.fontSize = '14px'
                    pQuantidade.style.fontWeight = 'bold'
                    let nQuantidade = document.createElement('p')
                    nQuantidade.setAttribute('id', 'nQuantidade')
                    nQuantidade.style.fontSize = '14px'
                    nQuantidade.innerText = ul.children.length
                    divQuantidade.append(pQuantidade, nQuantidade)

                    let divTotal = document.createElement('div')
                    divTotal.setAttribute('id', 'divTotal')
                    divTotal.style.display = 'flex'
                    divTotal.style.backgroundColor = '#292929'
                    divTotal.style.color = 'white'
                    divTotal.style.padding = '20px'
                    divTotal.style.justifyContent = 'space-between'
                    let pTotal = document.createElement('p')
                    pTotal.setAttribute('id', 'pTotal')
                    pTotal.innerText = 'Total:'
                    pTotal.style.fontSize = '14px'
                    pTotal.style.fontWeight = 'bold'
                    let nTotal = document.createElement('p')
                    nTotal.setAttribute('id', 'nTotal')
                    nTotal.style.fontSize = '14px'
                    nTotal.innerText = `R$ ${precoTotal.toFixed(2)}`
                    divTotal.append(pTotal, nTotal)

                    let carrinhoProdutos = document.getElementsByClassName('pesquisa-e-carrinho')[0]
                    carrinhoProdutos.append(divQuantidade, divTotal)
                } else if (ul.children.length > 1) {
                    let nQuantidade = document.getElementById('nQuantidade')
                    nQuantidade.innerText = ul.children.length
                    let nTotal = document.getElementById('nTotal')
                    nTotal.innerText = `R$ ${precoTotal.toFixed(2)}`
                }
            }
        }
    }
}


// adicionando Event Listener aos botoes
let quantidade = 0
let precoTotal = 0
listaProdutos.addEventListener('click', addToCart)

let carrinho2 = document.getElementsByClassName('carrinho')[0]
carrinho2.addEventListener('click', (event) => {
    let ul = document.getElementById('itens-carrinho')
    let carrinhoComProdutos = document.getElementsByClassName('carrinho-com-produtos')[0]
    let divQtdd = document.getElementById('divQuantidade')
    let nQuantidade = document.getElementById('nQuantidade')
    let divTtl = document.getElementById('divTotal')
    let nTotal = document.getElementById('nTotal')
    let botao = event.target
    if (botao.tagName === 'BUTTON') {
        let li = botao.closest('li')
        li.remove()
        for (let j of data1) {
            if (li.id == `-${j.id}`) {
                precoTotal -= j.value
                adicionadosAoCarrinho.splice((j.id - 1), 1)
            }
        }
        if (ul.children.length === 0) {
            carrinhoComProdutos.innerHTML = ''
            divQtdd.remove()
            divTtl.remove()
            quantidade = 0
            let h3 = document.createElement('h3')
            h3.innerText = 'Carrinho vazio'
            let p = document.createElement('p')
            p.innerText = 'Adicione itens'
            carrinhoComProdutos.setAttribute('class', 'itens')
            carrinhoComProdutos.append(h3, p)
        } else {
            nQuantidade.innerText = ul.children.length
            nTotal.innerText = `R$ ${precoTotal.toFixed(2)}`
        }
    }
})

let input = document.getElementById('input')
let pesquisar = document.getElementById('botao-pesquisar')
let section = document.getElementsByClassName('pesquisa-e-carrinho')[0]
pesquisar.addEventListener('click', () => {
    let vitrine = document.getElementsByClassName('vitrine')[0]
    listaProdutos.innerHTML = ''
    vitrine.innerHTML = ''
    let resultado = document.createElement('h2')
    resultado.style.fontSize = '24px'
    resultado.style.fontWeight = 'bold'
    resultado.innerText = 'Resultado da pesquisa:'
    vitrine.insertAdjacentElement('afterbegin', resultado)
    let lista = document.createElement('ul')
    lista.setAttribute('class', 'produtos')
    vitrine.append(lista)
    for (let obj of data1) {
        let nome = obj.nameItem
        let nomePesquisa = input.value
        if (nome.toLowerCase() === nomePesquisa.toLowerCase()) {
            let li = document.createElement('li')
            li.setAttribute('class', 'card')
            li.setAttribute('id', obj.id)
            let div = document.createElement('div')
            div.style.backgroundColor = '#F5F5F5'
            div.style.display = 'flex'
            div.style.justifyContent = 'center'
            let imagem = document.createElement('img')
            imagem.src = obj.img
            div.append(imagem)
            let classificacao = document.createElement('p')
            classificacao.innerText = obj.tag[0]
            classificacao.setAttribute('class', 'classificacao')
            let titulo = document.createElement('h4')
            titulo.innerText = obj.nameItem
            let descricao = document.createElement('p')
            descricao.innerText = obj.description
            descricao.setAttribute('class', 'descricao')
            let preco = document.createElement('p')
            preco.innerText = `R$ ${obj.value.toFixed(2)}`
            preco.setAttribute('class', 'preco')
            let add = document.createElement('button')
            add.innerText = obj.addCart
            li.append(div, classificacao, titulo, descricao, preco, add)
            lista.append(li)
            lista.addEventListener('click', addToCart)
        }
    }
    if (lista.children.length == 0) {
        let p = document.createElement('p')
        p.innerText = 'Nenhum produto com este nome foi encontrado.'
        p.style.marginTop = '20px'
        vitrine.insertAdjacentElement('beforeend', p)
    }
})
