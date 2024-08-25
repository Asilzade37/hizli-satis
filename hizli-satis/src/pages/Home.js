import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Hızlı Satış</h1>
        <p>Bulut tabanlı, esnek satış sistemi</p>
      </header>
      <main className="home-main">
        <section className="features">
          <h2>Özellikler</h2>
          <ul>
            <li>Hızlı ve kolay kullanım</li>
            <li>Bulut tabanlı çalışma</li>
            <li>Barkodlu ürün satışı</li>
            <li>Stok yönetimi</li>
            <li>Detaylı raporlama</li>
          </ul>
        </section>
        <section className="cta">
          <h2>Hemen Başlayın</h2>
          <Link to="/register" className="btn btn-primary">Ücretsiz Deneyin</Link>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Hızlı Satış. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default Home;