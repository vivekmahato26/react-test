import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Subscribe from './pages/subscribe';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='subscribe' element={<Subscribe/>}/>
    </Routes>
    </>
  );
}

export default App;
