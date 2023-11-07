import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Favorites from './components/Favorites/Favorites';

import {
  MainContainer,
  SidebarContainer,
  ContentContainer,
} from '../src/App.styled';

function App() {
  return (
    <Router>
      <MainContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ContentContainer>
      </MainContainer>
    </Router>
  );
}

export default App;
