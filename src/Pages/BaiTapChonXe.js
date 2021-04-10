import React, { useState } from "react";

export default function BaiTapChonXe() {
  const [car, setCar] = useState("./img/car/products/black-car.jpg");

  const changeColor = (newColor) => {
    setCar(`./img/car/products/${newColor}`);
  };
  return (
    <div className="container">
      <h1 className="display-4">Bài tập chọn xe</h1>
      <div className="row">
        <div className="col-6">
          <img className="w-100" src={car} alt="" />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <button
                style={{
                  backgroundColor: "black",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => {
                  changeColor("black-car.jpg");
                }}
              >
                Black Car
              </button>
            </div>
            <div className="col-3">
              <button
                style={{
                  backgroundColor: "red",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => {
                  changeColor("red-car.jpg");
                }}
              >
                Red Car
              </button>
            </div>
            <div className="col-3">
              <button
                style={{ backgroundColor: "grey", cursor: "pointer" }}
                onClick={() => {
                  changeColor("steel-car.jpg");
                }}
              >
                Steel Car
              </button>
            </div>
            <div className="col-3">
              <button
                style={{ backgroundColor: "silver", cursor: "pointer" }}
                onClick={() => {
                  changeColor("silver-car.jpg");
                }}
              >
                Silver Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
