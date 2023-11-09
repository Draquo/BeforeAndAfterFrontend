import React from 'react';
import AboutMeHook from '../../../hooks/AboutMeHook';
import {Box, Typography, CircularProgress} from '@mui/material';

const AboutMeComponent = ({userId}) => {
    const {aboutMeInfo, isLoading, error} = AboutMeHook(userId);

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress/>
            </Box>
        );
    }

    if (error) {
        return (
            <Typography color="error" textAlign="center">
                Error loading the about me information.
            </Typography>
        );
    }

    return (
        <Box>
            <Typography variant="body1">
                {aboutMeInfo}
            </Typography>
        </Box>
    );
};

export default AboutMeComponent;
