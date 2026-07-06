import api from "./api.js";

const ui = {

    async preencherFormulario(pensamentoId) {
        const pensamento = await api.buscarPensamentoPorId(pensamentoId);
        document.getElementById("pensamento-id").value = pensamento.id;
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
        document.getElementById("pensamento-autoria").value = pensamento.autoria;
        
    },

    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const mensagemVazia = document.getElementById("mensagem-vazia");
        listaPensamentos.innerHTML = "";

        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(ui.criaElementoPensamento);
            if(pensamentos.length === 0) {
                mensagemVazia.style.display = "block";
            } else {
                mensagemVazia.style.display = "none";
                pensamentos.forEach(ui.criaElementoPensamento);
            }
        }
        catch {
            alert("Erro ao renderizar pensamentos");
        }
    },

    criaElementoPensamento(pensamento) {
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id);
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.textContent = pensamento.conteudo;
        pensamentoConteudo.classList.add("pensamento-conteudo");
        
        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.textContent = pensamento.autoria;
        pensamentoAutoria.classList.add("pensamento-autoria");

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id);

        const iconeEditar = document.createElement("img");
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        botaoEditar.append(iconeEditar);

        const botaoDeletar = document.createElement("button");
        botaoDeletar.classList.add("botao-deletar");
        botaoDeletar.onclick = () => {
            try {
                api.deletarPensamento(pensamento.id)
                ui.renderizarPensamentos()
            } catch (error) {
                alert("Erro ao deletar pensamento")
                throw error
            }
        }

        const iconeDeletar = document.createElement("img");
        iconeDeletar.src = "assets/imagens/icone-excluir.png";
        iconeDeletar.alt = "Deletar";
        botaoDeletar.append(iconeDeletar);

        const icones = document.createElement("div");
        icones.classList.add("icones");
        icones.append(botaoEditar, botaoDeletar);

        li.append(iconeAspas, pensamentoConteudo, pensamentoAutoria, icones);
        listaPensamentos.append(li);
    },

    limpaFormulario() {
        document.getElementById("pensamento-form").reset();
    }
}

export default ui;