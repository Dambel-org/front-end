import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from 'views/Home';
import OwnerLogin from 'views/Owner/OwnerLogin';
import OwnerRe from 'views/Owner/OwnerReg';
import OwnerReg from 'views/Owner/OwnerReg';

const qc = new QueryClient();

function App() {

  return (
    // <QueryClientProvider client={qc}>
    //   <Router>
    //     <Routes>
    //       <Route path='/' element={<Home />} />
    //       <Route path='/owner/login' element={<OwnerLogin />} />
    //     </Routes>
    //   </Router>
    // </QueryClientProvider>
    // <OwnerLogin />
    <OwnerReg/>
  );
}

export default App
