import Coverflow from './Coverflow';
import Breadcrumbs from './Breadcrumbs';
import './HomePage.css'; // Import the CSS file

function HomePage({ 
  pageTitle, 
  topTitle, 
  bottomTitle, 
  topImages, 
  bottomImages, 
  topLinks, 
  bottomLinks 
}) {
  return (
    <div className="home-page">
      {/* Breadcrumbs for navigation context */}
      <Breadcrumbs />
      
      {/* Top Services Section */}
      <section className="home-section coverflow-container-arriba">
        <div className="section-header">
          <h2 className="tituloArriba">{topTitle}</h2>
          <div className="section-divider"></div>
        </div>
        
        <Coverflow 
          images={topImages} 
          links={topLinks}
          type="top"
          className="services-coverflow"
        />
      </section>

      {/* Bottom Products Section */}
      <section className="home-section coverflow-container-abajo">
        <div className="section-header">
          <h2 className="tituloAbajo">{bottomTitle}</h2>
          <div className="section-divider"></div>
        </div>
        
        <Coverflow 
          images={bottomImages} 
          links={bottomLinks}
          type="bottom"
          className="products-coverflow"
        />
      </section>
    </div>
  );
}

export default HomePage;