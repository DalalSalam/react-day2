import "./App.css";
import "./assets/css/starter.css";
import ProductItem from "./Components/ProductItem";
import productList from "./Components/ProductItem"; 


function App() {
  return (
    <div className="container">
      <h1>Welcome to D's book shop</h1>
      <h2>Dr. Seuss books</h2>
      <img
        src="https://masterpiecebynumbers.com/cdn/shop/products/Paint_By_Numbers_-_Book_Shop_-_25751.jpg?v=1553692301"
        alt="Bookshop"
        className="bookstore-image"
        <productList />
    </div>
  );
}

export default App;
