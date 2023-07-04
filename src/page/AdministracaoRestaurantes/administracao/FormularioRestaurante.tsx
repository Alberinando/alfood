import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FormularioRestaurante = () => {
    const parametros = useParams();
    useEffect(() => {
        if (parametros.id) {
            axios.get("http://localhost:8000/api/v2/restaurantes/parametro.id/")
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    }, [parametros])
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
        <Box sx={{display:'flex', flexDirection:"column", alignItems:"center"}}>
            <Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
            <Box component="form" onSubmit={aosubmeterForm}>
                <TextField
                    label="Nome do restaurante"
                    variant="standard"
                    value={nomeRestaurante}
                    onChange={
                        evento => setNomeRestaurante(
                            evento.target.value
                        )}
                    fullWidth
                    required
                />
                <Button sx={{marginTop: 1}} variant="outlined" fullWidth type="submit">Salvar</Button>
            </Box>
        </Box>
    )
}

export default FormularioRestaurante;