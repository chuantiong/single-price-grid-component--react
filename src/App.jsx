import IntroSection from './components/IntroSection';
import SignupSection from './components/SignupSection';
import ListsSection from './components/ListsSection';
import Footer from '../src/components/Footer';

const App = () => {

  return (
    <div className="container">
      <main className="main">
        <IntroSection />
        <SignupSection />
        <ListsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
