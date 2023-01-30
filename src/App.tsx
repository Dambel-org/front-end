import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from 'views/Home';

const qc = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={qc}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App
