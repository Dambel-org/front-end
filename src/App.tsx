import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from 'views/Home';
import { Login } from 'views/auth/Login';
import { Register } from 'views/auth/Register';
import { TraineeBMI } from 'views/auth/trainer';
import { PostCode, SubmitPrimaryGym, UploadFiles } from 'views/auth/gym';

const qc = new QueryClient();

function App() {

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
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App
