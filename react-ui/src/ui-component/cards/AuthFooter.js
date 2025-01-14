import React from 'react';

// material-ui
import { Link, Typography, Stack } from '@material-ui/core';

//-----------------------|| FOOTER - AUTHENTICATION 2 & 3 ||-----------------------//

const AuthFooter = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" component={Link} href="https://qualitysegconsultoria.com.br/" target="_blank" underline="hover">
                QualitySeg Consultoria
            </Typography>
            
        </Stack>
    );
};

export default AuthFooter;
