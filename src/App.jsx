import MainContainer from './Components/MainContainer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ChatArea from './Components/ChatArea'
import Welcome from './Components/Welcome'
import Login from './Components/Login'
import CreateGroups from './Components/CreateGroups'
import Users from './Components/Users'

function App() {

  return (
    <div className="App">
      {/* <MainContainer /> */}

      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}/>
          <Route path="chat" element={<ChatArea />}/>
          <Route path="Users" element={<Users />}/>
          <Route path="create-groups" element={<CreateGroups />}/>
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
