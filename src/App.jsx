import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
}
