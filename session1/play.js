const d = document.querySelector('div')
console.log(d.innerHTML);

const p = document.createElement("p")
p.textContent="hi from js"
p.classList= "a b c"

d.appendChild(p)

// p.remove()
btn = document.querySelector("#btn")

btn.addEventListener("click", function(e){
    console.log(e.target)
    p.classList.toggle("x")

})