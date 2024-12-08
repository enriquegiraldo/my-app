import React from 'react';
import './Breadcrumbs.css';  // Añade esta línea

function Breadcrumbs() {
  const breadcrumbItems = [
    { name: 'INICIO', link: 'Tienda.html' },
    { name: 'Tienda', link: 'Tienda.html' },
    { name: 'Productos', link: 'Productos.html' },
    { name: 'Creaciones', link: 'Creaciones.html' },
    { name: 'anchetas', link: 'anchetas.html' },
    { name: 'camisetas', link: 'camisetas.html' },
    { name: 'desayunos', link: 'desayunos.html' },
    { name: 'gorras', link: 'gorras.html' },
    { name: 'tecnologias', link: 'tecnologias.html' },
  ];

  return (
    <div className="containerBreadcrumb">
      <h1 className="page-title">VARIEDADES JM</h1>
      

      <nav aria-label="breadcrumb" className="my-custom-breadcrumb">
        <ol className="breadcrumb">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumbs;