import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [value, setValue] = useState('/purchase-record');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ textTransform: 'none', mr: 2 }} // Margin right for spacing
        >
        Customer Management
        </Button>
        <Tabs value={value} onChange={handleChange} aria-label="navigation tabs" textColor="inherit" indicatorColor="secondary">
          <Tab label="Purchase Record" component={Link} to="/purchase-record" />
          <Tab label="Customer Profile" component={Link} to="/customer-profile" />
          <Tab label="Redeem Record" component={Link} to="/redeem-record" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
