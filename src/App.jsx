import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailBLog from "./pages/Blog/Detail";
import ListBlog from "./pages/Blog/List";
import Home from "./pages/Home";

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
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
