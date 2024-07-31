import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection'
import ReviewSection from '../components/ReviewSection'
const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ProductSection />
            <ReviewSection />
            {/* <AboutSection /> */}
            <ContactSection />
            <Footer />
     
        </>
    );
}

export default Home;