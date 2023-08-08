import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
      <main>
        <section className="error404">
          <h1 className="error404__title">404</h1>
          <p className="error404__description">Страница не найдена</p>
          <Link to="/" className="error404__back-link hover-link">Назад</Link>
        </section>
      </main>
    )
  }
  
  export default PageNotFound