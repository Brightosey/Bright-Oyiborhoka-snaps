import Header from "./components/Header/Header";
import Filter from "./components/filters/filters";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import Data from "./Data/photos.json";
import "./App.scss";

function createCard(item) {
  return <Card 
  photo = {item.photo}
  photographer = {item.photographer}
  tags = {item.tags}
  />
}

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Body />
      {Data.map(createCard)}
      <Footer />
    </>
  );
}

export default App;
