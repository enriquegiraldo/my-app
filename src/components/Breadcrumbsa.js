import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbsa() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs-list">
        <li className="breadcrumbs-item">
          <Link to="/" className="breadcrumbs-link">Inicio</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li 
              key={name} 
              className={`breadcrumbs-item ${isLast ? 'active' : ''}`}
            >
              {!isLast ? (
                <Link to={routeTo} className="breadcrumbs-link">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              ) : (
                <span className="breadcrumbs-current">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbsa;