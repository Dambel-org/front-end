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
          <OwnerLogin/>
       /* { </Routes>
      </Router>
    </QueryClientProvider> }*/
  );
}

export default App
