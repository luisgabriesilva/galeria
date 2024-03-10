const model = document.getElementById("model");
const modelContent = document.getElementById("model-content");

function showModel(carro) {
    model.style.display = "block";
    modelContent.src = carro.src;
}

function hideModel() {
    model.style.display = "none";
}