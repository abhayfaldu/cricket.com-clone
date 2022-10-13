import { Flex } from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
    <Flex flexDir={'column'} className='App'>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Flex>
  );
}

export default App;
