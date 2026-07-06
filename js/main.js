import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();

    const formularioPensamento = document.getElementById("pensamento-form");
    const botaoCancelar = document.getElementById("botao-cancelar");
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
    botaoCancelar.addEventListener("click", manipulaLimpeza);
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value;
    const conteudo = document.getElementById("pensamento-conteudo").value;
    const autoria = document.getElementById("pensamento-autoria").value;

    try {
        if(id) {
            await api.editarPensamento({ id, conteudo, autoria });
        } else {
            await api.salvaPensamento({ conteudo, autoria });
        }
        ui.renderizarPensamentos();
    } catch (error) {
        alert("Erro ao salvar pensamentos");
        throw error;
    }
}

function manipulaLimpeza() {
    ui.limpaFormulario()
}