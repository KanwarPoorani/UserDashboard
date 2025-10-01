// import React from 'react'
import './App.css'
import Cards from './Components/Cards'
import Dashbard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import QuickActions from './Components/QuickActions'
import Titlebox from './Components/Titlebox'

function App() {
  return (
    <>
      <div className="bg-[#E8F3FB] w-full rounded-lg p-0 shadow-sm">
        <Dashbard />
        <Titlebox />
        <QuickActions />
        <Cards />
      </div>

      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leave" element={<LeavePage />} />
        </Routes>
      </Router> */}

    </>
  )
}

export default App
