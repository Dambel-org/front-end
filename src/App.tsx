import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from 'views/Home';
import OwnerLogin from 'views/Owner/OwnerLogin';

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
    <OwnerLogin />
  );
}

export default App
