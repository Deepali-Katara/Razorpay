import "./App.css";
import { useEffect } from "react";
import CourseCard from "./components/CourseCard";

function App() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement(script);
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://chewckout.razorpay.com/v1/checkout.js");
  });

  return (
    <section>
      <CourseCard />
    </section>
  );
}

export default App;
