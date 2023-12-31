import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';


const Layout = () => {
  return (
  <div className="App">
    <Sidebar />
    <Outlet />
  </div>
  )
};

export default Layout;
