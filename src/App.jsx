import Header from './components/Header'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Header />
      <Home />
    </div>
  )
}