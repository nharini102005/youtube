import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { BrowserRouter,Router,Route,Links,Routes } from 'react-router-dom';
import Register from './components/Register';
import Error from './components/Error';
import List from './components/List';

function App() {

  const message ="hello from app using props";
  const message2 ="hello from app using props2";  


  return (
     <>
    

    <div className='container-fluid main'>
     <div className='row'>
     <BrowserRouter>
     <Sidebar/>
     

     


     <Routes>
      <Route path='*' element={<Error/>}></Route>
      <Route path='/' element={ <Content/> }></Route>
      <Route path='/register' element={<Register mydata={message} mydata1={message2}/>}></Route>
      <Route path='/List' element={<List/>}></Route>
     </Routes>

      </BrowserRouter>
     </div>
     
     </div>
     </>



  )
 
}

export default App;
