import './App.css'
import Counder from './components/Counder'

function App() { 

  return (
    <>
    <h1 className="text-center mt-5">Counter App</h1>
    <div style={{minHeight : '70vh'}} className="d-flex justify-content-center align-items-center w-100">
      < Counder/>
    </div>
    </>
  )
}

export default App
