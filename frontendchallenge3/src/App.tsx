import './App.css'
import Header from './components/Header'
import MainContainer from './components/MainContaine'

function App() {

  return (
    <div className='w-full flex flex-col justify-center items-center gap-8'>
      <Header />
      <MainContainer />
    </div>
  )
}

export default App
