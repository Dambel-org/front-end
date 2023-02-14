import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Login } from 'views/auth/Login';
import { Register } from 'views/auth/Register';
import { TraineeBMI } from 'views/auth/trainee';
import { PostCode, SubmitPrimaryGym, UploadFiles } from 'views/gym';
import TraineeDashboard from 'views/trainee/Dashboard';
import { useAuthStore } from 'store';
import { useEffect } from 'react';
import { setApiHeader } from 'api/methods';

const qc = new QueryClient();

function App() {
  const token = useAuthStore(state => state.token);
  useEffect(() => {
    setApiHeader(token.access);
  }, [token])
  return (
    <QueryClientProvider client={qc}>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate  to='/auth/login' />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/register/trainee' element={<TraineeBMI />} />
          <Route path='/register/gym/submit-gym' element={<SubmitPrimaryGym />} />
          <Route path='/register/gym/upload' element={<UploadFiles />} />
          <Route path='/register/gym/pcode' element={<PostCode />} />
          <Route path='/trainee/dashboard' element={<TraineeDashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App
