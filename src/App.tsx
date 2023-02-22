import ProductCard from "./components/ProductCard";
import { IProduct } from "./components/ProductCard/interface";
import ProductionCardAuction from "./components/ProductionCardAuction";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  const products: IProduct[] = [
    {
      id: "22",
      title: "Honda fit",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequuntur consectetur quae doloremque nesciunt! Deleniti reprehenderit alias, sed laudantium animi fugiat sit vero atque facere minima, praesentium, nihil quo perspiciatis!",
      img: "https://i.imgur.com/k7EX7sm.png",
      mileage: 45000,
      price: 80000,
      year: 2017,
      user: { name: "Raphael Gloria" },
      isActive: true,
    },
    {
      id: "23",
      title: "Honda Civic",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequuntur consectetur quae doloremque nesciunt! Deleniti reprehenderit alias, sed laudantium animi fugiat sit vero atque facere minima, praesentium, nihil quo perspiciatis!",
      img: "https://i.imgur.com/hhojkgD.png",
      mileage: 45000,
      price: 50000,
      year: 2017,
      user: { name: "Samuel Leão", img: "https://i.imgur.com/hhojkgD.png" },
      isActive: false,
    },
    {
      id: "24",
      title: "Honda City",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequuntur consectetur quae doloremque nesciunt! Deleniti reprehenderit alias, sed laudantium animi fugiat sit vero atque facere minima, praesentium, nihil quo perspiciatis!",
      img: "https://i.imgur.com/hhojkgD.png",
      mileage: 45000,
      price: 50000,
      year: 2017,
      user: {
        name: "Wesley Carvalho",
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      isActive: true,
    },
  ];

  return (
    <div className="App">
      <GlobalStyle />

      <ProductionCardAuction product={products[0]} />
    </div>
  );
}

export default App;
