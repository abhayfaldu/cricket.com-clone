import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <Box h='30px' bg={['lightblue', 'green', 'red', 'yellow']}></Box>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
