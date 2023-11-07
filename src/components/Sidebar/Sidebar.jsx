import React from 'react';
import { Link } from 'react-router-dom';

import {
  SidebarBox,
  Box,

} from '../Sidebar/Sidebar.styled';

const Sidebar = () => {
  return (
    <Box>
      <SidebarBox>
        
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/catalog">CATALOG</Link></li>
        <li><Link to="/favorites">FAVORITES</Link></li>
      </SidebarBox>
    </Box>
  );
}

export default Sidebar;