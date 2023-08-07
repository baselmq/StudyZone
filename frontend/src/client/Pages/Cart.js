import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/cart.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import image from "../assets/image/cart.jpg";
import axios from "axios";
import { useUserData } from "../context/userCxt";
import EmptyCart from "../components/courses/EmptyCart";
import CarouselCourses from "../components/courses/SliderCourses";

const Cart = () => {
  const { userData } = useUserData();
  const Id = localStorage.getItem("id");
  const [allCards, setAllCards] = useState([]);
  const login = localStorage.getItem("login");
  const [isLoading, setIsLoading] = useState(true);
  const [totalprice, setTotalPrice] = useState(0);
  const calculateTotalPrice = () => {
    let price = allCards.reduce(
      (total, card) => total + parseFloat(card.price),
      0
    );
    console.log(typeof price);
    setTotalPrice(price);
  };

  const getAllCards = async () => {
    try {
      let Cards = (await axios.get("http://localhost:8000/api/user/cart")).data
        .data.carts;
      setAllCards(Cards.filter((card) => card.id_user === Id));
      calculateTotalPrice();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllCards()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [allCards]);

  return (
    <>
      <Navbar />
      <div className="my-5">
        <div className="container">
          <div className="row gap-5">
            {isLoading ? (
              <div className="col-lg-8">
                <p>Loading...</p>
              </div>
            ) : allCards.length > 0 ? (
              <div className="col-lg-8">
                <div className="hr-line ">
                  {allCards.length} courses in Cart
                </div>
                {allCards.map((card) => (
                  <Items
                    key={card.id} // Assuming there is an 'id' property for each card
                    image={card.image}
                    courseName={card.courseName}
                    id={card._id}
                    price={card.price}
                  />
                ))}
              </div>
            ) : (
              <div className="col-lg-8">
                <EmptyCart />
              </div>
            )}

            <div className="col-lg-3 mt-5">
              <h4>Total</h4>
              <h1>{totalprice}$</h1>
              <Link
                to={login === "true" ? "/payment" : "/login"}
                className="btn-check-out"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5">
        <h4>Courses</h4>
        <CarouselCourses />
      </div> */}
      <Footer />
    </>
  );
};

export default Cart;

const Items = (props) => {
  const deleteCourse = async () => {
    await axios.delete(`http://localhost:8000/api/user/cart/${props.id}`);
  };

  return (
    <div className="card-item hr-line row my-4">
      <div className="image-item col-3">
        <img src={props.image} alt="items" />
      </div>
      <div className="col-5">
        <div className="">Course Name</div>
        <div className="fw-bold">{props.courseName}</div>
      </div>
      <div className="col-1">
        <div className="">price</div>
        <div className="fw-bold">{props.price}$</div>
      </div>

      <div className="col-3 d-flex justify-content-end">
        <div className="btn-remove" onClick={deleteCourse}>
          Remove
        </div>
      </div>
    </div>
  );
};
