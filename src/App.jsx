import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import About from "./pages/About/About";
// import DetailBLog from "./pages/Blog/Detail";
// import ListBlog from "./pages/Blog/List";
import Home from "./pages/Home";
import ListVideo from "./pages/Video/List";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Body */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/blog" element={<ListBlog />}></Route> */}
        {/* <Route path="/blog:id" element={<DetailBLog />}></Route> */}
        <Route path="/video" element={<ListVideo />}></Route>
        {/* <Route path="/team" element={<About />}></Route> */}
      </Routes>

      {/* Footer */}
      <div className="h-[100px] sm:h-[300px] flex flex-wrap items-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;

// import CardBlog from "./components/CardBlog"
// import CardVideo from "./components/CardVideo"
// import FAQ from "./components/FAQ"
// import Footer from "./components/Footer"
// import Header from "./components/Header"

// function App() {
//   return (
//     <div className="App bg-green-100 w-full min-h-screen">
//       {/* Header */}
//       <Header />

//       {/* Body */}
//       {/* <FAQ /> */}
//       <CardVideo />
//       {/* <CardBlog /> */}

//       {/* Footer */}
//       {/* <Footer /> */}

//     </div>
//   )
// }

// export default App
