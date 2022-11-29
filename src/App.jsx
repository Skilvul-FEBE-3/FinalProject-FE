import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import DetailBLog from "./pages/Blog/Detail";
import ListBlog from "./pages/Blog/List";
import Home from "./pages/Home";
import ListVideo from "./pages/Video/List";
import DetailVideo from "./pages/Video/Detail";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Body */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<ListBlog />}></Route>
        <Route path="/blog:id" element={<DetailBLog />}></Route>
        <Route path="/video" element={<ListVideo />}></Route>
        <Route path="/video:id" element={<DetailVideo />}></Route>
        <Route path="/team" element={<About />}></Route>
      </Routes>

      {/* Footer */}
      <div className="h-[100px] sm:h-[300px] flex flex-wrap items-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
