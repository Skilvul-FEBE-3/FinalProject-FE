import CardBlog from "./components/CardBlog"
import CardVideo from "./components/CardVideo"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className="App bg-green-100 w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Body */}
      <CardVideo />
      {/* <CardBlog /> */}

      {/* Footer */}
      {/* <Footer /> */}

    </div>
  )
}

export default App
