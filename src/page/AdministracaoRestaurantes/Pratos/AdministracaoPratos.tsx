import { useState, useEffect } from "react"
import IPrato from "../../../interfaces/IPrato"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Container } from "@mui/material"
import http from "../../../http"
import { Link as RouterLink } from 'react-router-dom'

const AdministracaoPratos = () => {
    const [pratos, setpratos] = useState<IPrato[]>([])
    useEffect(() => {
        http.get<IPrato[]>('pratos/')
            .then(resposta => setpratos(resposta.data))
    }, [])
    const excluir = (pratoAhSerExcluido: IPrato) => {
        http.delete(`pratos/${pratoAhSerExcluido.id}/`)
            .then(() => {
                const listaPratos = pratos.filter(prato => prato.id !== pratoAhSerExcluido.id)
                setpratos([...listaPratos])
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
                                    Tag
                                </TableCell>
                                <TableCell>
                                    Imagem
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
                            {pratos.map(prato => <TableRow key={prato.id}>
                                <TableCell>
                                    {prato.nome}
                                </TableCell>
                                <TableCell>
                                    {prato.tag}
                                </TableCell>
                                <TableCell>
                                    <a href={prato.imagem} target="_black" rel="noreferrer">Ver imagem</a>
                                </TableCell>
                                <TableCell>
                                    [ <RouterLink to={`/admin/prato/${prato.id}`}>editar</RouterLink> ]
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => excluir(prato)}>
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

export default AdministracaoPratos