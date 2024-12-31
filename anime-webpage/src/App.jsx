import './App.css';
import Header from './components/Header';
import AnimeCard from './components/AnimeCard';
import Footer from './components/Footer';

const App = () => {
    const animeData = [
        {
            title: 'Attack on Titan',
            image: 'https://example.com/aot.jpg',
            description: 'A story about humanity fighting against titans.'
        },
        {
            title: 'My Hero Academia',
            image: 'https://example.com/mha.jpg',
            description: 'A world where heroes and villains exist.'
        },
        // Add more anime data as needed
    ];

    return (
        <div className="App">
            <Header />
            <main>
                {animeData.map((anime, index) => (
                    <AnimeCard 
                        key={index} 
                        title={anime.title} 
                        image={anime.image} 
                        description={anime.description} 
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default App;
