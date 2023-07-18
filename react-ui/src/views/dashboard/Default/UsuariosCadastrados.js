import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

// project imports
import MainCard from './../../../ui-component/cards/MainCard';
import TotalIncomeCard from './../../../ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import UserImage from './../../../assets/images/usuario.png';

// style constant
const useStyles = makeStyles((theme) => ({
    // ... the rest of your styles
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: '#1B7046',
        color: '#fff'
    },
    avatarImg: {
        height: '100%',
        width: 'auto',
        objectFit: 'contain',
    }
    // ... the rest of your styles
}));

//-----------------------|| DASHBOARD - TOTAL INCOME DARK CARD ||-----------------------//

const TotalIncomeDarkCard = ({ isLoading }) => {
    const classes = useStyles();

    // Este é apenas um placeholder, você deve substituí-lo com o valor real obtido do backend.
    const totalUsers = 123; 

    return (
        <React.Fragment>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <MainCard border={false} className={classes.card} contentClass={classes.content}>
                    <List className={classes.padding}>
                        <ListItem alignItems="center" disableGutters className={classes.padding}>
                            <ListItemAvatar>
                                <Avatar variant="rounded" className={classes.avatar}>
                                    <img src={UserImage} alt="Usuário" className={classes.avatarImg} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                className={classes.padding}
                                sx={{
                                    mt: 0.45,
                                    mb: 0.45
                                }}
                                primary={
                                    <Typography variant="h4" className={classes.primary}>
                                        Usuários Cadastrados
                                    </Typography>
                                }
                                secondary={
                                    <>
                                        <Typography variant="subtitle2" className={classes.secondary}>
                                            Total de Usuários Cadastrados
                                        </Typography>
                                        <Typography variant="subtitle1" className={classes.secondary}>
                                            {totalUsers} usuários
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </MainCard>
            )}
        </React.Fragment>
    );
};

TotalIncomeDarkCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalIncomeDarkCard;
