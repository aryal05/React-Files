import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import ApiFetch from './ApiFetch.jsx'
// import States from './component/States.jsx'
// import Login from './component/Login.jsx'
// import ProductSearch from './component/ProductSearch.jsx'
// import ChangeTheme from './component/ChangeTheme.jsx'
import GoogleTabs from './component/GoogleTabs.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    {/* <ChangeTheme></ChangeTheme> */}
    {/* <ApiFetch></ApiFetch> */}
    <GoogleTabs></GoogleTabs>
    {/* <ProductSearch></ProductSearch> */}
   {/* <States></States> */}
    {/* <Login></Login> */}
  </React.StrictMode>,
)
