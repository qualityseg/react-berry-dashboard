import React from 'react';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import MainCard from '../../../ui-component/cards/MainCard';

const BrowsersUtilizadosCard = () => {
    const browsers = [
        { nome: 'Chrome', quantidade: 100 },  // Quantidade de exemplo
        { nome: 'Firefox', quantidade: 50 },  // Quantidade de exemplo
        { nome: 'Safari', quantidade: 30 },  // Quantidade de exemplo
        { nome: 'Edge', quantidade: 20 },  // Quantidade de exemplo
    ];

    return (
        <MainCard title="Browsers Utilizados">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Browser</TableCell>
                            <TableCell>Quantidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {browsers.map((browser, index) => (
                            <TableRow key={index}>
                                <TableCell>{browser.nome}</TableCell>
                                <TableCell>{browser.quantidade}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainCard>
    );
};

export default BrowsersUtilizadosCard;
