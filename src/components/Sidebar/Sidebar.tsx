import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
