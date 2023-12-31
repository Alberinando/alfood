import { Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState} from "react";
import ITag from "../../../interfaces/ITag";
import http from "../../../http";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioPrato = () => {
    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tag, setTag] = useState('')
    const [restaurante, setRestaurante] = useState('')
    const [tags, setTags] = useState<ITag[]>([])
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    const [imagem, setImagem] = useState<File | null>(null)
    useEffect( 
        () => {
            http.get<{ tags: ITag[] }>('tags/')
                .then(resposta => setTags(resposta.data.tags))
            http.get<IRestaurante[]>('restaurantes/')
                .then(resposta => setRestaurantes(resposta.data))
        })
    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }
    const aosubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const formData = new FormData();
        formData.append('nome', nomePrato)
        formData.append('descricao', descricao)
        formData.append('tag', tag)
        formData.append('restaurante', restaurante)
        if (imagem) {
            formData.append('imagem', imagem)
        }
        http.request({
            url: 'pratos/',
            method: 'POST',
            headers: {
                'Content-type': 'multpart/data'
            },
            data: formData
        })
            .then(() => {
                setNomePrato('')
                setDescricao('')
                setTag('')
                setRestaurante('')
                alert('Prato cadastrado com sucesso')
            })
            .catch(erro =>console.log(erro))
    }
    return (
        <>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        {/*Conteúdo da página*/}
                        <Box sx={{display:'flex', flexDirection:"column", alignItems:"center", flexGrow: 1}}>
                            <Typography component="h1" variant="h6" sx={{marginTop: 2}}>Formulário de Pratos</Typography>
                            <Box component="form"sx={{width: '100%'}} onSubmit={aosubmeterForm}>
                                <TextField
                                    label="Nome do Prato"
                                    variant="standard"
                                    value={nomePrato}
                                    onChange={
                                        evento => setNomePrato(
                                            evento.target.value
                                        )}
                                    fullWidth
                                    required
                                    margin="dense"
                                />
                                <TextField
                                    label="Descrição do Prato"
                                    variant="standard"
                                    value={descricao}
                                    onChange={
                                        evento => setDescricao(
                                            evento.target.value
                                        )}
                                    fullWidth
                                    required
                                />
                                <FormControl margin="dense" fullWidth>
                                    <InputLabel id="select-tag">Tag</InputLabel>
                                    <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
                                        {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>
                                            {tag.value}
                                        </MenuItem>)}
                                    </Select>
                                </FormControl>
                                <FormControl margin="dense" fullWidth>
                                    <InputLabel id="select-restaurante">Restaurante</InputLabel>
                                    <Select labelId="select-restaurante" value={restaurante} onChange={evento => setRestaurante(evento.target.value)}>
                                        {restaurantes.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>
                                            {restaurante.nome}
                                        </MenuItem>)}
                                    </Select>
                                </FormControl>
                                <input type="file" onChange={selecionarArquivo} />
                                <Button sx={{marginTop: 1}} variant="outlined" fullWidth type="submit">Salvar</Button>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default FormularioPrato;