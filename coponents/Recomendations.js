export function Recomendations(item) {
    const recom_guys = document.createElement('div')
    const info = document.createElement('div')
    const img = document.createElement('img')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const a = document.createElement('a')

    recom_guys.classList.add("recom_guys")
    info.classList.add('info')

    img.src = item.url
    img.alt = ""
 

    a.href = ""
    a.innerText = "switch"

    h1.innerText = `@${item.email}`
    p.innerText = `${item.name} `


    recom_guys.append(img,info,a)
    info.append(h1,p)
    
    return recom_guys

}