import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import DisplayPost from './components/DisplayPost'
// import Home2 from './components/Home2'
// import Test from './components/Test'
// import PostDetails from './components/PostDetails'



function App() {
  return (
    <BrowserRouter>

      <div className='container'>
        <Navbar />

        <Routes>
          {/* <Route path="/test" element={<Test />} /> */}
          {/* <Route path="/test/:name" element={<Test />} /> */}
          {/* <Route path="/test/:name" component={Test} /> */}
          {/* <Route path='/posts/:id' element={<PostDetails />} /> */}
          {/* <Route path='/home2' element={<Home2 />} /> */}


          <Route path='/' element={<Home />} />
          <Route path='/add' element={<CreatePost />} />
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='/posts/:id' element={<DisplayPost />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App