import Accordion from "./components/Accordion";

const items = [
  {
    title: ' react mı ?',
    content: 'o da ne',
  },
  {
    title: 'Vuejs mi?',
    content: 'Balkaymak',
  }
]
function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;

