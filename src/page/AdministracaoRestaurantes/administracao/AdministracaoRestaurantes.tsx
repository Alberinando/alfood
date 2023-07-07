import { useState, useEffect } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, AppBar, Box, Container, Link, Toolbar, Typography } from "@mui/material"
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
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6">
                            Administração
                        </Typography>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <Link component={RouterLink} to="/admin/restaurantes">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Restaurantes
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/restaurantes/novo">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Restaurante
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
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