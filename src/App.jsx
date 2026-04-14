import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import CategoryBar from "./components/header/CategoryBar";

const Home = () => <div>
  <Hero />
</div>;
const About = () => <div style={{ padding: '20px' }}>Страница О нас</div>;
const Contact = () => <div style={{ padding: '20px' }}>Наши контакты</div>;
const Blog = () => <div style={{ padding: '20px' }}>Наш блог</div>;

const App = () => {
  return (
    <div>
      <Header />
      <CategoryBar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;