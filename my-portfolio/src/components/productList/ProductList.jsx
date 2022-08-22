import "./productList.css"
import Product from "../product/Product"
const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire</h1>
            <p className="pl-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, consequuntur provident. Ea at deserunt dolorum qui quisquam aperiam repellat eum sint?</p>
        </div>
        <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default ProductList
