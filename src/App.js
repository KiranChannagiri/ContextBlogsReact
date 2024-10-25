import logo from './logo.svg';
import './App.css';
import { Pagination } from './Components/Pagination';
import { Header } from './Components/Header';
import { MainContent } from './Components/MainContent';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
