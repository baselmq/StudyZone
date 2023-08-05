import React from "react";
import "../Styles/App.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  let navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform your validation here
    if (isFormValid()) {
      // If the form is valid, proceed with navigation
      navigate("/paymentSuccess");
    }
  };

  const isFormValid = () => {
    const form = document.querySelector(".payment-form");

    // Check if all the form elements are valid
    return form.checkValidity();
  };

  return (
    <div className="login_container">
      <form
        className="login-form payment-form needs-validation"
        novalidate
        onSubmit={handleFormSubmit}
      >
        <div className="column">
          <div className="input-groups_title">
            <h1>Payment details</h1>
          </div>
          {/* Name */}
          <div className="input-groups">
            <label for="validationTooltip01" class="form-label">
              Name on card
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip01"
              required
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>

          {/* Card number */}
          <div className="input-groups">
            <label for="validationTooltip01" class="form-label">
              Credit Card Number
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip01"
              required
              placeholder="XXXX XXXX XXXX XXXX"
              pattern="[0-9]{16}"
              title="Credit card number must be 16 digits"
              maxLength="16"
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>

          {/* date & cvv */}
          <div className="input-groups expiry-cvv">
            {/* expiry date */}
            <div>
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input
                type="text"
                id="expiry-date"
                name="expiry-date"
                placeholder="MM/YY"
                maxLength="5"
                pattern="(0[1-9]|1[0-2])\/\d{2}"
                title="Expiry date must be in the format MM/YY"
                required
              />
            </div>
            {/* CVV */}

            <div>
              <label for="validationTooltip01" class="form-label">
                CVV
              </label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                required
                placeholder="3-number digets"
                pattern="[0-9]{3}"
                title="CVV must be a 3-digit number"
                maxLength="3"
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>
          </div>

          <div className="input-groups checkbox ">
            <div style={{ display: "flex", gap: 10 }}>
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">I've a promo code</label>
            </div>
          </div>

          <div className="d-flex justify-content-between input-groups">
            <div>Subtotal</div>
            <div>$ 96</div>
          </div>
          <div className="d-flex justify-content-between input-groups">
            <div>Tax</div>
            <div>$ 4</div>
          </div>
          <div className="line input-groups"></div>
          <div className="d-flex justify-content-between input-groups ">
            <h5>Total</h5>
            <h5>$ 100</h5>
          </div>

          {/* payment btn */}
          <div className="input-groups">
            <button className="btn-login mb-1" type="submit">
              Make Payment
            </button>
          </div>
        </div>
        <div className="payment_column_img"></div>
      </form>
    </div>
  );
};

export default Payment;
