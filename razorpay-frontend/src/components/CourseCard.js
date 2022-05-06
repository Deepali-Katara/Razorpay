import React from "react";
import displayRazorpay from "../utils/PaymentGateway";

function CourseCard() {
  return (
    <div>
      <br></br>
      <h1 style={{ textAlign: "center" }}>
        Razorpay Payment gateway Integration
      </h1>
      <br></br>
      <div style={{ textAlign: "center" }}>
        {" "}
        <button
          type="button"
          onClick={displayRazorpay}
          className="course-payment-button"
        >
          Pay with Razorpay
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
