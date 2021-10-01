import './App.css';
import './questionBox';

function App() {
  return (
    <div>
      <header>
        <div class="arrow arrow-left"></div>
          <p>Question 1</p>
        <div class="arrow arrow-right"></div>
      </header>
      <questionBox />
    </div>
  );
}
export default App;
