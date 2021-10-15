/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

//JS for collapsible menu

export const MyNav = () => {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg" collapseOnSelect>
        <Navbar.Brand>
          <a href="#fromaggio" className="logo">
            <span
              className="CrimsonColor"
              style={{ color: "crimson", fontSize: "40px" }}
            >
              Fro
            </span>
            mag
            <span
              className="DarkGreen"
              style={{ color: "darkgreen", fontSize: "40px" }}
            >
              gio
            </span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="vegan-options">Vegan</Nav.Link>
            <Nav.Link href="payment-methods">Payment</Nav.Link>
            <Nav.Link href="special-offers">Special offers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

//Buttons increment logic

const MyButtons = () => {
  const [count, setCount] = useState(0);

  const Decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const Increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <button className="btn" onClick={Decrement}>
        -
      </button>
      <span>{count}</span>
      <button className="btn" onClick={Increment}>
        +
      </button>
    </>
  );
};

const FoodImg = [
  {
    id: 1,
    title: "Bread",
    image:
      "https://s3-ap-southeast-2.amazonaws.com/yg-shop-production-pictures/products/1454/large/Multi-Grain_Slice.png?1440369196",
  },
  {
    id: 2,
    title: "Baguette",
    image:
      "https://cdn.shopify.com/s/files/1/0372/8444/6339/products/belgianloaf_1000x.png?v=1587848837",
  },
  {
    title: "Nachos",
    image:
      "https://media.istockphoto.com/photos/corn-chips-in-bowl-isolated-on-white-background-picture-id1089392630?k=20&m=1089392630&s=612x612&w=0&h=qfB9kQ_mbTlZ8yAk2arhP_Vw2Hwm8YNGev6zbG7ryjA=",
  },
  {
    title: "Rice",
    image: "https://pngimg.com/uploads/rice/rice_PNG44.png",
  },
  {
    title: "Spaghetti",
    image:
      "https://media.istockphoto.com/photos/pain-spaghetti-on-plate-picture-id1124262013?k=20&m=1124262013&s=612x612&w=0&h=OEhNG490Lk5n-9xikUJXdajPdwAffJMx1VdMS2tQXNQ=",
  },
  {
    title: "Mashed potatoes",
    image: "https://www.marions-kochbuch.de/dru-pic/1266.jpg",
  },
  {
    title: "Hamburger",
    image: "https://s3.envato.com/files/234554371/43%20-%2002.10.2016.jpg",
  },
];

const SidesImage = [
  {
    title: "Caesar salad",
    image:
      "https://media.istockphoto.com/photos/caesar-salad-on-white-background-picture-id690292380?k=20&m=690292380&s=170667a&w=0&h=CUqRto4Ameaw0jfxlq4sOo31B8H_nAwSwyqykWwdS28=",
  },
  {
    title: "Greek salad",
    image: "https://www.freeiconspng.com/uploads/greek-salad-png-21.png",
  },
  {
    title: "Potato salad",
    image:
      "http://groupecardinal.ca/wp-content/uploads/2017/05/2-patatemoutarde-1.png",
  },
  {
    title: "Bacon",
    image: "https://www.freeiconspng.com/uploads/bacon-png-hd-2.png",
  },
  {
    title: "Corn soup",
    image:
      "https://unitedkingonline.com/wp-content/uploads/2021/02/chickn_1.png",
  },
  {
    title: "French fries",
    image: "http://assets.stickpng.com/thumbs/585abfc54f6ae202fedf2935.png",
  },
];

const DrinkImage = [
  {
    title: "Pepsi",
    image:
      "https://lh3.googleusercontent.com/proxy/vCItHJvG22JI6hCXpYDiub4mUwEdTPlrDpIYAO4gak3ARveYffrxpo3lgjS-vVukeQgJcu7x3J5vO8CHhb5H9lollArUNPlmaiKo",
  },
  {
    title: "Coke",
    image:
      "https://efathatasteofnature.com/wp-content/uploads/2021/03/kisspng-coca-cola-cherry-soft-drink-diet-coke-coca-cola-5a72b33a35a0b5.4189809515174664262197.png",
  },
  {
    title: "Sprite",
    image:
      "https://cdn11.bigcommerce.com/s-x3kq5bcr0e/images/stencil/608x608/products/5493/5141/Sprite375__72040.1614947690.jpg?c=1",
  },
  {
    title: "7 Up",
    image: "https://www.pngkey.com/png/full/56-561617_7-up-bottle-png.png",
  },
  {
    title: "Corona",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d0297310d78a1000126ce49/1587678472102-FEDHTPS1LHQ9IXS067UG/corona-extra-del-sur.png?format=1000w",
  },
  {
    title: "Bud Light",
    image:
      "https://img.pngio.com/bud-light-hand-family-companies-bud-light-png-for-550_550.png",
  },
  {
    title: "Heineken",
    image: "https://www.vippng.com/png/detail/21-216226_heineken-can.png",
  },
];

//For our food data
export const FoodDiv = () => {
  return FoodImg.map((foods) => {
    const { image, title } = foods;
    return (
      <div className="myFood">
        <img src={image} alt="Image"></img>
        <div className="amountWrap">
          <p>{title}</p>
          <MyButtons />
        </div>
      </div>
    );
  });
};

//For our food side dish data

export const SidesDiv = () => {
  return SidesImage.map((sides) => {
    const { image, title } = sides;
    return (
      <div className="mySides">
        <img src={image} alt="Image"></img>
        <div className="amountWrap">
          <p>{title}</p>
          <MyButtons />
        </div>
      </div>
    );
  });
};

//For our drinks data

export const DrinkDiv = () => {
  return DrinkImage.map((drink) => {
    const { image, title } = drink;
    return (
      <div className="myDrink">
        <img src={image} alt="Image"></img>
        <div className="amountWrap">
          <p>{title}</p>
          <MyButtons />
        </div>
      </div>
    );
  });
};

//For the footer

export const Footer = () => {
  return (
    <div className="Footer">
      <p className="CopyRight">Copyright 2021, Fromaggio GmbH</p>
      <p className="Ceo"><strong>CEO</strong> - Max Mustermann</p>
      <p className="Tax"><strong>Tax ID</strong>: 00000000</p>
      <p className="Court"><strong>Court jurisdiction</strong>: Augsburg.</p>
    </div>
  );
};
