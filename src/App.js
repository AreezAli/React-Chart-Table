// import logo from './logo.svg';
// import './App.css';
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from 'react';
// import { storeData } from './actions/index.js';
// import { fakeData } from './fakeData';


// function App() {
//   const data = useSelector((state) => state.data);
//   // useEffect(() => {
//     //   console.log(data);
//     // },
//     // []);
//     const handleClick = () => {
//     console.log(data);  
//   }
//   const dispatch = useDispatch();
//   useEffect(() => {
//     // Dispatch action to store fakeData in Redux store
//     dispatch(storeData(fakeData));
//   }, [dispatch]);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={handleClick}>click Me</button>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// App.js

import React from 'react';
import ChartPage from './pages/ChartPage';
import TablePage from './pages/TablePage';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <div>Not Found</div>,
    },
    {
    path: "/chart",
    element: <ChartPage/>,
  },
  {
    path: "/table",
    element: <TablePage/>
  },
]);
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
