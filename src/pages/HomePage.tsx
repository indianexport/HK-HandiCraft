import AboutSection from '../components/AboutSection'
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
            <div className='flex flex-col gap-y-56 md:gap-y-10'>
                <AboutSection />
                <ContactSection />
            </div>
            <Footer />

        </>
    );
}

export default Home;