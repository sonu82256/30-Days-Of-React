import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Day18Home from './Exercise/Day18_Router/Day18Home'
// import Day18About from './Exercise/Day18_Router/Day18About'
// import Day18Contact from './Exercise/Day18_Router/Day18Contact'

// import Day4 from './Exercise/Day4/Day4'
// import Day6 from './Exercise/Day6/Day6'
// import Day8 from './Exercise/Day8/Day8'
// import Day8ii from './Exercise/Day8/Day8ii'
// import Weather from './Exercise/Weather App/Weather'
import TodoList from './Exercise/TodoList/TodoList'
// import Day11 from './Exercise/Day11/Day11'

// import Auth from './Exercise/login/Auth'
import ManageContacts from './Exercise/ManageContacts/ManageContacts'

function App() {
  return (
    <>
      {/* <Day4/> */}
      {/* <Day6/> */}
      {/* <Day8 /> */}
      {/* <Day8ii /> */}
      {/* <Weather /> */}
      {/* <TodoList /> */}
      {/* <Day11 /> */}

      {/* <Routes>
        <Route path='/' element={ <Day18Home/> }/>
        <Route path='/contact' element={ <Day18Contact/> }/>
        <Route path='/about' element={ <Day18About/> } />
      </Routes> */}

      {/* <Auth /> */}

      <ManageContacts />

    </>
  )
}

export default App
