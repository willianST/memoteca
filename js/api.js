const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch("http://localhost:3000/pensamentos");
            return await response.json();
        } catch (error) {
            alert("Erro ao buscar dados");
            throw error
        }
    },

    async salvaPensamento(pensamento) {
        try {
            const response = await fetch("http://localhost:3000/pensamentos", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert("Erro ao salvar o pensamento");
            throw error
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
            return await response.json();
        } catch (error) {
            alert("Erro ao buscar pensamento");
            throw error
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert("Erro ao editar o pensamento");
            throw error
        }
    },

    async deletarPensamento(id) {
        try {
            await fetch(`http://localhost:3000/pensamentos/${id}`, {
                method: "DELETE"
            });
        } catch (error) {
            alert("Erro ao deletar pensamento");
            throw error
        }
    }
}

export default api;