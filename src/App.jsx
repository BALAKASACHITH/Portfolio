import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import CodeLab from './Pages/CodeLab/CodeLab';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About'
import { useNavigate,useLocation,Routes,Route } from 'react-router-dom';
const App = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const handleHome=()=>navigate("/");
  const handleSkills=()=>navigate("/Skills");
  const handleCodeLab=()=>navigate("/CodeLab");
  const handleProjects=()=>navigate("/Projects");
  const handleAbout=()=>navigate("/About");
  const giveStyle=(path)=>{
    if(path===location.pathname) return {color:"#0066cc"};
    else return {};
  }
  return (
    <div className='App'>
      <div className="windowTop ">
        <div className="wtLeft" onClick={handleHome}>
          <h1>Sachith Balaka</h1>
        </div>
        <div className="wtRight">
          <div style={giveStyle("/")} className="wtrHome icons" onClick={handleHome}>
            <i className="fa-solid fa-house-chimney-user"></i>
            <h3>Home</h3>
          </div>
          <div style={giveStyle("/Skills")} className="wtrSkills icons" onClick={handleSkills}>
            <i className="fa-solid fa-laptop-code"></i>
            <h3>Skills</h3>
          </div>
          <div style={giveStyle("/CodeLab")} className="wtrCodeLab icons"onClick={handleCodeLab}>
            <i className="fa-solid fa-code"></i>
            <h3>CodeLab</h3>
          </div>
          <div style={giveStyle("/Projects")} className="wtrProjects icons"onClick={handleProjects}>
            <i className="fa-solid fa-bars-progress"></i>
            <h3>Projects</h3>
          </div>
          <div style={giveStyle("/About")} className="wtrAbout icons"onClick={handleAbout}>
            <i className="fa-solid fa-user"></i>
            <h3>About</h3>
          </div>
          <div className="wtrResume icons">
            <i className="fa-solid fa-download"></i>
            <h3>Resume</h3>
          </div>
        </div>
        <div className="mtRight">
          <i className="fa-solid fa-download"></i>
          <div className="mtrResume">Resume</div>
        </div>
      </div>
      <div className="windowBot">
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/Skills' element={<Skills/>} ></Route>
          <Route path='/CodeLab' element={<CodeLab/>} ></Route>
          <Route path='/Projects' element={<Projects/>} ></Route>
          <Route path='/About' element={<About/>} ></Route>
        </Routes>
        <div className="mobileBot">
          <div className="mbHome icons" onClick={handleHome} style={giveStyle("/")} >
            <i className="fa-solid fa-house-chimney-user"></i>
            <h4>Home</h4>
          </div>
          <div className="mbSkills icons" onClick={handleSkills} style={giveStyle("/Skills")} >
            <i className="fa-solid fa-laptop-code"></i>
            <h4>Skills</h4>
          </div>
          <div className="mbCodeLab icons" onClick={handleCodeLab} style={giveStyle("/CodeLab")} >
            <i className="fa-solid fa-code"></i>
            <h4>CodeLab</h4>
          </div>
          <div className="mbProjects icons" onClick={handleProjects} style={giveStyle("/Projects")} >
            <i className="fa-solid fa-bars-progress"></i>
            <h4>Projects</h4>
          </div>
          <div className="mbAbout icons" onClick={handleAbout} style={giveStyle("/About")} >
            <i className="fa-solid fa-user"></i>
            <h4>About</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App