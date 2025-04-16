import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Bienvenue chez Novalys</h1>
            <p>Votre partenaire de confiance dans les solutions médicales.</p>
            <section>
                <h2>Nos Services</h2>
                <ul>
                    <li>Conseil médical</li>
                    <li>Solutions technologiques pour la santé</li>
                    <li>Systèmes de gestion des patients</li>
                    <li>Télémédecine</li>
                </ul>
            </section>
            <section>
                <h2>À propos de nous</h2>
                <p>Novalys s'engage à fournir des solutions médicales innovantes pour améliorer la prise en charge des patients et optimiser les processus de santé. Notre équipe d'experts œuvre pour la qualité des soins grâce à la technologie et au conseil.</p>
            </section>
        </div>
    );
};

export default Home;