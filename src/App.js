import './styles/styles.scss';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
