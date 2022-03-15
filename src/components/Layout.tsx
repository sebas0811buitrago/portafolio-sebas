import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Layout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
