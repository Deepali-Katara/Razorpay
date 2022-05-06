const app = require("express")();
const path = require("path");
const shortid = require("shortid");
const cors = require("cors");
const Razorpay = require("razorpay");

//initialize razorpay credentials

razorpay = new Razorpay({
  key_id: "rzp_test_kn0nJcIJS8JmpV",
  key_secret: "zwkGMnGBv4epizjOtCJYr3Ao",
});

app.use(cors());

app.get("/logo.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "logo.jpg"));
});

app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency: currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: res.currency,
      amount: res.amount,
    });
  } catch (eror) {
    console.log(error);
  }
});
const port = 5000;
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
