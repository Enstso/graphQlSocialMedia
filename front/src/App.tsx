import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Articles from './views/ListArticle';
import CreateArticle from './views/CreateArticle';
import UpdateArticle from './views/UpdateArticle';
import DetailArticle from './views/DetailArticle';
import NotFound from './views/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/create" element={<CreateArticle />} />
        <Route path="/articles/update/:id" element={<UpdateArticle />} />
        <Route path='/article/:id' element={<DetailArticle />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
