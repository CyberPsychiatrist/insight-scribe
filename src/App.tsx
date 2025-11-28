import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Upload from './pages/Upload';
import DocumentDetail from './pages/DocumentDetail';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='upload' element={<Upload />} />
          <Route path='documents/:id' element={<DocumentDetail />} />
          <Route path='chat' element={<Chat />} />
          <Route path='settings' element={<Settings />} />
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}
