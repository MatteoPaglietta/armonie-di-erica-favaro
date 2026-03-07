import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';
import PhotoGallery from '../components/PhotoGallery';
import Introduction from '../components/Introduction';
import Packages from '../components/Packages';
import Team from '../components/Team';
import Prenotation from '../components/Prenotation';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
    return (
        <main id="main">
            <Header />
            <Introduction />
            <Packages />
            <ProductCarousel />
            <PhotoGallery />
            {/* <Team /> */}
            <Prenotation />
            <ScrollToTop />
        </main>
    );
};

export default Home;