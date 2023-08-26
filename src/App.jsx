import { Navbar, Hero, Exploration, Carousel, Guides, Testimonials, TrendingStories, Footer } from "./components";

const App = () => (
  <div >
    <div className="container mx-auto px-6 md:px-0">
      <div className="pt-8">
        <Navbar />
      </div>
      <div>
        <Hero />
        <Exploration />
        <Carousel />
        <Guides />
        <Testimonials />
        <TrendingStories />
      </div>
    </div>
    <Footer />
  </div>
)

export default App