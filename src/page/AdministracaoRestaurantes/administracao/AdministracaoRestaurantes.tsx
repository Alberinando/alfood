import { useState, useEffect } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Container } from "@mui/material"
import http from "../../../http"
import { Link as RouterLink } from 'react-router-dom'

const AdministracaoRestaurantes = () => {
    const [restaurantes, setrestaurantes] = useState<IRestaurante[]>([])
    useEffect(() => {
        http.get<IRestaurante[]>('restaurantes/')
            .then(resposta => setrestaurantes(resposta.data))
    }, [])
    const excluir = (restauranteAhSerExcluido: IRestaurante) => {
        http.delete(`restaurantes/${restauranteAhSerExcluido.id}/`)
            .then(() => {
                const listaRestaurante = restaurantes.filter(restaurante => restaurante.id !== restauranteAhSerExcluido.id)
                setrestaurantes([...listaRestaurante])
            })
    }
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 1 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Nome
                                </TableCell>
                                <TableCell>
                                    Editar
                                </TableCell>
                                <TableCell>
                                    Excluir
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantes.map(restaurante => <TableRow key={restaurante.id}>
                                <TableCell>
                                    {restaurante.nome}
                                </TableCell>
                                <TableCell>
                                    [ <RouterLink to={`/admin/restaurantes/${restaurante.id}`}>editar</RouterLink> ]
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>
                                        Excluir
                                    </Button>
                                </TableCell>
                            </TableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default AdministracaoRestaurantes