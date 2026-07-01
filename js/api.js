const api = {
    async buscarPensamentos () {
        try {
            const response = await fetch("http://localhost:3000/pensamentos");
            return await response.json();
        } catch (error) {
            alert("Erro ao buscar dados");
            throw error
        }
    },

    async salvaPensamento (pensamento) {
        try {
            const response = await fetch("http://localhost:3000/pensamentos", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert("Erro ao salvar o pensamento");
            throw error
        }
    }
}


export default api;