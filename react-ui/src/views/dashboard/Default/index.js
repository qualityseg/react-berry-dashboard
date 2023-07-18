import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
import AvaliacoesRealizadasHoje from './AvaliacoesRealizadasHoje';
import AvaliacoesRealizadasMomento from './AvaliacoesRealizadasMomento';
import UsuariosCadastrados from './UsuariosCadastrados';
import DispositivosUtilizadosCard from './DispositivosUtilizadosCard';
import BrowsersUtilizadosCard from './BrowsersUtilizadosCard';
import NovoUsuarioPage from '../../NovosUsuarios/NovoUsuarioPage';


import { gridSpacing } from './../../../store/constant';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Switch>
                    <Route path="/usuarios/novo" component={NovoUsuarioPage} />
                    <Route path="/">
                        <Grid container spacing={gridSpacing}>
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <UsuariosCadastrados isLoading={isLoading} />
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <AvaliacoesRealizadasMomento isLoading={isLoading} />
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <AvaliacoesRealizadasHoje isLoading={isLoading} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <DispositivosUtilizadosCard />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <BrowsersUtilizadosCard />
                            </Grid>
                        </Grid>
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
