import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const tracks = [
    {
      id: 1,
      title: "Midnight Groove",
      artist: "The Vinyl Collective",
      duration: "3:45",
      genre: "Jazz Funk"
    },
    {
      id: 2,
      title: "Golden Memories",
      artist: "Retro Sound Machine", 
      duration: "4:12",
      genre: "Soul"
    },
    {
      id: 3,
      title: "Analog Dreams",
      artist: "Classic Vibes",
      duration: "3:28",
      genre: "Disco"
    }
  ];

  const albums = [
    {
      id: 1,
      title: "Vintage Vibes",
      artist: "The Retro Collection",
      year: "1975",
      tracks: 12,
      image: "/img/8b8445ae-e596-463d-80aa-d63df4759906.jpg"
    },
    {
      id: 2,
      title: "Cassette Dreams", 
      artist: "Analog Memories",
      year: "1978",
      tracks: 10,
      image: "/img/26a21f82-2134-4540-975b-e6601e0fa550.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-vintage-cream">
      {/* Header */}
      <header className="bg-vintage-brown text-vintage-cream shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Disc3" size={32} className="text-vintage-orange" />
              <h1 className="text-2xl font-bold font-oswald">RETRO MUSIC</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#music" className="hover:text-vintage-orange transition-colors">Музыка</a>
              <a href="#albums" className="hover:text-vintage-orange transition-colors">Альбомы</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-vintage-orange to-vintage-brown text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 font-oswald tracking-wider">
              ВИНТАЖНАЯ
              <br />
              <span className="text-vintage-cream">МУЗЫКА</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Окунитесь в атмосферу золотых хитов прошлого. 
              Классические треки, теплый винтажный звук и ностальгия по лучшим временам.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-vintage-cream text-vintage-brown hover:bg-white px-8 py-3 text-lg font-semibold">
                <Icon name="Play" size={20} className="mr-2" />
                Слушать сейчас
              </Button>
              <Button variant="outline" className="border-vintage-cream text-vintage-cream hover:bg-vintage-cream hover:text-vintage-brown px-8 py-3 text-lg">
                <Icon name="Music" size={20} className="mr-2" />
                Каталог
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative vinyl records */}
        <div className="absolute top-10 right-10 opacity-20">
          <Icon name="Disc3" size={120} className="animate-spin" style={{animationDuration: '20s'}} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Icon name="Radio" size={80} />
        </div>
      </section>

      {/* Popular Tracks */}
      <section id="music" className="py-16 bg-vintage-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-vintage-brown mb-4 font-oswald">ПОПУЛЯРНЫЕ ТРЕКИ</h2>
            <p className="text-vintage-dark opacity-70 text-lg">Лучшие композиции в винтажном стиле</p>
          </div>
          
          <div className="grid gap-4 max-w-4xl mx-auto">
            {tracks.map((track, index) => (
              <Card key={track.id} className="bg-white border-vintage-sandy shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-vintage-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Music" size={24} className="text-vintage-cream" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-vintage-brown">{track.title}</h3>
                      <p className="text-vintage-dark opacity-70">{track.artist}</p>
                      <span className="inline-block bg-vintage-orange text-white px-3 py-1 rounded-full text-sm mt-2">
                        {track.genre}
                      </span>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-vintage-dark font-semibold">{track.duration}</p>
                      <Button variant="outline" size="sm" className="mt-2 border-vintage-orange text-vintage-orange hover:bg-vintage-orange hover:text-white">
                        <Icon name="Play" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section id="albums" className="py-16 bg-vintage-sandy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-vintage-brown mb-4 font-oswald">ВИНТАЖНЫЕ АЛЬБОМЫ</h2>
            <p className="text-vintage-dark opacity-70 text-lg">Коллекция легендарных пластинок</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {albums.map((album) => (
              <Card key={album.id} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-vintage-brown bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300" />
                  <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-vintage-orange hover:bg-vintage-brown opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Icon name="Play" size={20} className="mr-2" />
                    Слушать
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-vintage-brown mb-2">{album.title}</h3>
                  <p className="text-vintage-dark opacity-70 mb-2">{album.artist}</p>
                  <div className="flex justify-between items-center text-sm text-vintage-dark opacity-60">
                    <span>{album.year}</span>
                    <span>{album.tracks} треков</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vintage-dark text-vintage-cream py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <Icon name="Disc3" size={48} className="text-vintage-orange mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-oswald">RETRO MUSIC</h3>
            <p className="text-vintage-cream opacity-70 mt-2">Музыка, которая никогда не выйдет из моды</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="hover:text-vintage-orange transition-colors">
              <Icon name="Music" size={24} />
            </a>
            <a href="#" className="hover:text-vintage-orange transition-colors">
              <Icon name="Radio" size={24} />
            </a>
            <a href="#" className="hover:text-vintage-orange transition-colors">
              <Icon name="Headphones" size={24} />
            </a>
          </div>
          
          <p className="opacity-60">&copy; 2024 Retro Music. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;