import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Detail } from './components/Detail';
import { Header } from './components/Header';
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:imdbID" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
