import './App.css';
import { useState } from 'react'
import LoginPage from './components/Auth/LoginPage';
import ThemeIcon from './components/ThemeIcon';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, whiteTheme } from './theme';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/Home/HomePage';

function App() {
  const localTheme = JSON.parse(localStorage.getItem('theme'))
  const [theme, setTheme] = useState(localTheme)

  return (
    <div
      className="App"
      style={{
        background: theme ? '#251D3A' : '#F6F6F6'
      }}
    >
      <ThemeIcon theme={theme} setTheme={setTheme} />
      <ThemeProvider theme={theme ? darkTheme : whiteTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route exact path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        {/* <LoginPage /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
