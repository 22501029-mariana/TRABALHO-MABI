document.addEventListener("DOMContentLoaded", () => {


const toggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("mabi-theme");
if (savedTheme === "dark") {
document.body.classList.add("dark");
if (toggle) toggle.checked = true;
}

toggle?.addEventListener("change", () => {
document.body.classList.toggle("dark", toggle.checked);
localStorage.setItem("mabi-theme", toggle.checked ? "dark" : "light");
});


const menuList = document.getElementById("menuList");
if (menuList) {
fetch("dados.json")
.then(response => response.json())
.then(data => {
data.categorias.forEach(categoria => {
const categoriaDiv = document.createElement("section");
categoriaDiv.classList.add("categoria");
categoriaDiv.innerHTML = `
<h2 class="categoria-titulo">
${categoria.nome}
</h2>
<div class="produtos"></div>
                `;
const produtosDiv =
categoriaDiv.querySelector(".produtos");
categoria.produtos.forEach(produto => {
const item = document.createElement("article");
item.classList.add("produto");
item.innerHTML = `                     
<img 
src="${produto.imagem}" 
alt="${produto.nome}"
 >
<div class="produto-nome">
 ${produto.nome}
</div>
<div class="produto-info">
<span class="produto-preco">
R$ ${produto.preco
.toFixed(2)
.replace(".", ",")}
</span>
<button 
class="add-carrinho"
type="button"
>
+
</button>

</div>
`;

produtosDiv.appendChild(item);

});

menuList.appendChild(categoriaDiv);

});

})

.catch(error => {

console.log("Erro ao carregar o menu:", error);

menuList.innerHTML =
"<p>Erro ao carregar os produtos.</p>";

});
}

const cpf = document.querySelector("#cpf");
const telefone = document.querySelector("#telefone");
const cep = document.querySelector("#cep");

function onlyNumbers(value) {
return value.replace(/\D/g, "");
}

cpf?.addEventListener("input", e => {
let v = onlyNumbers(e.target.value).slice(0, 11);
v = v.replace(/(\d{3})(\d)/, "$1.$2");
v = v.replace(/(\d{3})(\d)/, "$1.$2");
v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
e.target.value = v;
});

telefone?.addEventListener("input", e => {
let v = onlyNumbers(e.target.value).slice(0, 11);
if (v.length <= 10) {
v = v.replace(/(\d{2})(\d)/, "($1) $2");
v = v.replace(/(\d{4})(\d)/, "$1-$2");
} else {
v = v.replace(/(\d{2})(\d)/, "($1) $2");
v = v.replace(/(\d{5})(\d)/, "$1-$2");
}
e.target.value = v;
});

cep?.addEventListener("input", e => {
let v = onlyNumbers(e.target.value).slice(0, 8);
v = v.replace(/(\d{5})(\d)/, "$1-$2");
e.target.value = v;
});

 
document.querySelectorAll('input[type="number"]').forEach(input => {
input.addEventListener("keydown", e => {
if (["e", "E", "+", "-", "."].includes(e.key)) e.preventDefault();
});
});



const registerForm = document.querySelector("#registerForm");

registerForm?.addEventListener("submit", function (event) {

event.preventDefault();

window.location.href = "menu.html";

});

  
const orderForm = document.querySelector("#orderForm");
orderForm?.addEventListener("submit", e => {
e.preventDefault();
document.querySelector("#orderMessage").textContent =
"Pedido enviado! Em breve vamos preparar sua fofura ☕🌸";
});
});



const loginForm = document.querySelector("#loginForm");

loginForm?.addEventListener("submit", function (event) {

event.preventDefault();
window.location.href = "menu.html";

});
