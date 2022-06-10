import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/About/Blogs';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Home/ProjectDetails';
import ProjectOne from './Pages/Home/ProjectOne';
import Projects from './Pages/Home/Projects';
import ProjectThree from './Pages/Home/ProjectThree';
import ProjectTwo from './Pages/Home/ProjectTwo';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projectDetails' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/projectOne' element={<ProjectOne></ProjectOne>}></Route>
        <Route path='/projectTwo' element={<ProjectTwo></ProjectTwo>}></Route>
        <Route path='/projectThree' element={<ProjectThree></ProjectThree>}></Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

      </Routes>
    </div>
  );
}

export default App;
