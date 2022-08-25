import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Introduction from "./components/intro/Introduction";
import ProductList from "./components/productList/ProductList";
const App = () => {
    return <div>
      <Introduction/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>;
  };
  
  export default App;