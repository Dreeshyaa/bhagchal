import logo from './logo.svg';
import './App.css';
import Board1 from './Baghchal/Board1';
import Board2 from './Baghchal/Board2';
import Board from './TicTacToe/Board';
import TicBoard from './TicTacToe/TicBoard';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewBoard from './components/Baghchal/NewBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
      <div className='items-center text-center'>
      <button className=' font-semibold text-lg text-white  bg-slate-500 rounded-lg p-2 m-2 w-auto'>
        <Link to="/TicTacToe">TicTacToe</Link>
      </button>
      <button className=' font-semibold text-lg text-white  bg-slate-500 rounded-lg p-2 m-2 w-auto'>
        <Link to="/Baghchal">Baghchal</Link>
      </button>
      <button className=' font-semibold text-lg text-white  bg-slate-500 rounded-lg p-2 m-2 w-auto'>
        <Link to="/Baghchal-New-Board">Baghchal New Board</Link>
      </button>
      <button className=' font-semibold text-lg text-white  bg-slate-500 rounded-lg p-2 m-2 w-auto'>
        <Link to="/New-Board"> New Board</Link>
      </button>
      </div>
      </nav>
          <Routes>
              <Route path="/TicTacToe" element={ <>
              <Board/>
              <TicBoard/>
              </>} />
              <Route path="/Baghchal" element={ 
              <>
               <Board1/>
              <Board2/>
              </>
            } />
             <Route path="/Baghchal-New-Board" element={ <Board2/>} />
              
            <Route path="/New-Board" element={ <NewBoard/>} />
              
        </Routes>
      </BrowserRouter>
      {/* <Board1/>
          <Board2/>
        <Board></Board> */}
    </div>
  );
}

export default App;
