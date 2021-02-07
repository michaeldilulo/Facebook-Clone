import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widget from "./Widget"

function App() {
  const user = null;

  return (
    <div className="app">
      {!user ? <h1>Login</h1> : (
        <>
              <Header />

      <div className="app__body">
        <Sidebar />

        <Feed />
        
      <Widget />
          </div>
          </>
      )}

    </div>
  );
}

export default App;
