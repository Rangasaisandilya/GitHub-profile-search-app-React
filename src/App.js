import logo from './logo.svg';
import './App.css';
import GitHubSearchApp from "./components/GitHubSearchApp";

function App() {
  return (
    <div className="App">
<nav className="navbar navbar-dark bg-warning navbar-expand-sm text-center">
    <a href='/' className='navbar-brand text-center'> Git Hub Search App Using React</a>
</nav>
        <GitHubSearchApp/>
    </div>
  );
}

export default App;
