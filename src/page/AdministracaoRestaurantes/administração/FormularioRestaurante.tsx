import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const FormularioRestaurante = () => {
    const [nomeRestaurante, setNomeRestaurante] = useState('')
    const aosubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        axios.post('http://localhost:8000/api/v2/restaurantes/', {
            nome: nomeRestaurante
        })
            .then(() => {
            alert("Restaurante cadastrado com sucesso!")
        })
    }
    return (
        <form onSubmit={ aosubmeterForm }>
            <TextField
                label="Nome do restaurante"
                variant="standard"
                value={nomeRestaurante}
                onChange={
                    evento => setNomeRestaurante(
                        evento.target.value
                    )}
            />
            <Button variant="outlined" type="submit">Salvar</Button>
        </form>)
}

export default FormularioRestaurante;