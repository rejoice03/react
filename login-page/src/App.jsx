import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <div className="app">
        <div className="logo-box">
          <img src="./src/assets/image/x.png" alt="x" className='x' />
          <h2>sign in to X</h2>
          <button>
            <img src="./src/assets/image/google.png" alt="google" />
            sign in with Google
          </button>
          <button>
            <img src="./src/assets/image/apple.png" alt="apple" />
            sign in with Apple
          </button>
          <hr />
          <span>or</span>
          <form>
            <input type="text" placeholder='Email or Phone Number' />
            <button>Next</button>
          </form>
          <button>Forget Password</button>
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </>
  )
}

export default App
