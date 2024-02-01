import React from 'react'; 
import './styling/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Info from './components/info'; 
import Content from './components/content'; 
import Quiz from './components/quiz'; 
import Lab from './components/lab'; 
import Discussion from './components/discussion'; 
import SideBar from './components/sidebar'; 
import Topic0Quiz from './components/topic0quiz.js';
import Topic1Quiz from './components/topic1quiz.js';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/info" element={<Info />} />
        <Route path="/content" element={<Content />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/topic0" element={<Topic0Quiz />} />
        <Route path="/topic1" element={<Topic1Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;

