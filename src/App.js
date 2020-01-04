import React from "react";
import "./App.css";
import axios from "axios";
import Product from "./components/Product";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchItem: "",
      selectedProduct: "",
      options: [],
      timeForDelivery: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateMaker = this.dateMaker.bind(this);
  }
  // Reads current pages URL and gets product id
  getProductID() {
    let productUrl = window.location.href;
    let { pathname } = new URL(productUrl);
    return pathname.split("/")[2];
  }

  handleChange(event) {
    this.setState({
      // below is this.state.searchItem
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      // .get("http://18.191.28.180:5000/getproduct", {
      .get(
        "https://ec2-18-191-28-180.us-east-2.compute.amazonaws.com/getproduct",
        {
          params: {
            selectedItemId: this.state.searchItem
          }
        }
      )
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ selectedProduct: response.data[0] });
        } else {
          this.setState({ selectedProduct: 404 });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  dateMaker() {
    moment.relativeTimeThreshold("ss", 0);
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("h", 24);
    let date = moment()
      .add(2, "days")
      .format("dddd, MMM Do");
    this.setState({
      timeForDelivery: date
    });
  }

  render() {
    // all the code below will go away in the final production build
    let selectItemForm;
    let selectedItem;

    if (this.state.selectedProduct === "") {
      selectItemForm = (
        <form onSubmit={this.handleSubmit}>
          <h3>Item Search</h3>
          <input
            id="search-item"
            name="searchItem"
            onChange={this.handleChange}
          />
          <button>Find Item</button>
        </form>
      );
      selectedItem = undefined;
    } else if (this.state.selectedProduct === 404) {
      selectItemForm = (
        <form onSubmit={this.handleSubmit}>
          <h3>Item Search</h3>
          <input
            id="search-item"
            name="searchItem"
            onChange={this.handleChange}
          />
          <button>Find Item</button>
        </form>
      );
      selectedItem = (
        <div>
          <p>Error 400</p>
          <p>Item Not Found</p>
        </div>
      );
    } else {
      selectItemForm = (
        <form onSubmit={this.handleSubmit}>
          <h3>Item Search</h3>
          <input
            id="search-item"
            name="searchItem"
            onChange={this.handleChange}
          />
          <button>Find Item</button>
        </form>
      );
    }

    return (
      <div className="App">
        {selectItemForm}
        <hr></hr>
        <Product
          selectedProductProp={this.state.selectedProduct}
          selectedProductSkuProp={this.state.skuPrefix}
          selectedProductOptions={this.state.options}
          selectedProductTime={this.state.timeForDelivery}
        />
      </div>
    );
  }
}

export default App;
