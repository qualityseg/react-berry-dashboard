import React from 'react';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import MainCard from '../../../ui-component/cards/MainCard';

const DispositivosUtilizadosCard = () => {
    const dispositivos = [
        { nome: 'Mobile', quantidade: 100 },  // Quantidade de exemplo
        { nome: 'Desktop', quantidade: 50 },  // Quantidade de exemplo
    ];

    return (
        <MainCard title="Dispositivos Utilizados">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dispositivo</TableCell>
                            <TableCell>Quantidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dispositivos.map((dispositivo, index) => (
                            <TableRow key={index}>
                                <TableCell>{dispositivo.nome}</TableCell>
                                <TableCell>{dispositivo.quantidade}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainCard>
    );
};

export default DispositivosUtilizadosCard;
