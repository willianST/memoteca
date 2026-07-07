const URL_Base = "http://localhost:3000";

const api = {
    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_Base}/pensamentos`);
            return await response.data;
        } catch (error) {
            alert("Erro ao buscar dados");
            throw error
        }
    },

    async salvaPensamento(pensamento) {
        try {
            const response = await axios.post(`${URL_Base}/pensamentos`, pensamento);
            return await response.data;
        } catch (error) {
            alert("Erro ao salvar o pensamento");
            throw error
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_Base}/pensamentos/${id}`);
            return await response.data;
        } catch (error) {
            alert("Erro ao buscar pensamento");
            throw error
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${URL_Base}/pensamentos/${pensamento.id}`, pensamento);
            return await response.data;
        } catch (error) {
            alert("Erro ao editar o pensamento");
            throw error
        }
    },

    async deletarPensamento(id) {
        try {
            await axios.delete(`${URL_Base}/pensamentos/${id}`);
        } catch (error) {
            alert("Erro ao deletar pensamento");
            throw error
        }
    }
}

export default api;