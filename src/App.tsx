import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { siteContent } from './data/siteContent';
export default function App() { return <><a className="skip-link" href="#conteudo">{siteContent.ui.skip}</a><Header /><HomePage /><Footer /></>; }
