import React from 'react'
import ReactDOM from 'react-dom/client'
import Result from './components/Result'

function renderResults() {
  Result()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>hello</h1>
      {renderResults()}
    </div>
  </React.StrictMode>,
)
