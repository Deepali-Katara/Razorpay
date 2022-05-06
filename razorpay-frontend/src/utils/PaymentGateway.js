export default async function displayRazorpay() {
  const data = await fetch("http://localhost:5000/razorpay", {
    method: "POST",
  }).then((response) => response.json());

  console.log(data);

  const options = {
    key: "rzp_test_kn0nJcIJS8JmpV",
    currency: data.currency,
    amount: data.amount,
    description: "wallet Transaction",
    image: "http://localhost:5000/logo.jpg",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT_ID : " + response.razor_payment_id);
      alert("ORDER_ID : " + response.razor_order_id);
    },
    prefill: {
      name: "deepali katara",
      email: "deepalikatara2015@gmail.com",
      contact: 9987867868,
    },
  };

  const paymentObject = window.Razorpay(options);
  paymentObject.open();
}
