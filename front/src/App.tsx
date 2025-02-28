import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Articles from './views/ListArticle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </Router>
  );
}

export default App;