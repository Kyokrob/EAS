import React, { useState } from "react";
import "./cbmCalculator.css"; // Import CSS for styling

function CbmCalculator() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weightPerUnit, setWeightPerUnit] = useState("");
  const [loadType, setLoadType] = useState("Sea"); // Default load type
  const [totalCBM, setTotalCBM] = useState(null);
  const [totalWeight, setTotalWeight] = useState(null);
  const [volumeWeight, setVolumeWeight] = useState(null);

  const calculateAll = () => {
    // Convert dimensions to meters (assuming input is in centimeters)
    const widthM = parseFloat(width);
    const lengthM = parseFloat(length);
    const heightM = parseFloat(height);

    // Calculate CBM per unit
    const cbmPerUnit = (widthM * lengthM * heightM) / 1000000; // Divide by 1,000,000 to convert to cubic meters

    // Calculate total CBM, total weight, and volume weight
    const totalCBMValue = parseFloat(quantity) * cbmPerUnit;
    const totalWeightValue = parseFloat(quantity) * parseFloat(weightPerUnit);

    let volumeWeightValue = null;

    if (loadType === "Air") {
      // Calculate volume weight for air freight
      volumeWeightValue =
        (widthM * lengthM * heightM * parseFloat(quantity)) / 6000; // Volume weight factor for Air
    } else if (loadType === "Sea") {
      // Calculate volume weight for sea freight
      volumeWeightValue =
        (widthM * lengthM * heightM * parseFloat(quantity)) / 1000; // Volume weight factor for Sea
    }

    setTotalCBM(totalCBMValue.toFixed(4));
    setTotalWeight(totalWeightValue.toFixed(2));
    setVolumeWeight(
      volumeWeightValue !== null ? volumeWeightValue.toFixed(2) : null
    );
  };

  // Handle load type change
  const handleLoadTypeChange = (e) => {
    setLoadType(e.target.value);
  };

  return (
    <div className="cbm-calculator">
      <div className="cbmTitle">
        <h1>เครื่องคำนวณปริมาตร-น้ำหนัก</h1>
        <p>
          ช่วยคำนวณปริมาตรและน้ำหนักสินค้าเพื่อความสะดวกในการวางแผนการขนส่งสินค้า
          สามารถใช้งานง่ายและเร็วขึ้นในการคำนวณปริมาตรและน้ำหนักของสินค้าที่ต้องการส่งและจัดส่งได้อย่างมีประสิทธิภาพ
        </p>
      </div>
      <div className="input-container">
        <div className="input-spacing">
          <label>ประเภทขนส่ง:</label>
          <select value={loadType} onChange={handleLoadTypeChange}>
            <option value="Sea">Sea </option>
            <option value="Air">Air </option>
          </select>
        </div>
      </div>
      <div className="input-container">
        <div className="input-spacing">
          <label>จำนวนกล่อง:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="input-spacing">
          <label>น้ำหนัก/กล่อง (kg):</label>
          <input
            type="number"
            value={weightPerUnit}
            onChange={(e) => setWeightPerUnit(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="input-spacing">
          <label>กว้าง (cm):</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="input-spacing">
          <label>ยาว (cm):</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="input-spacing">
          <label>สูง (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>

      <button onClick={calculateAll} className="calBtn">
        คำนวน
      </button>
      {totalCBM !== null && totalWeight !== null && (
        <div className="results">
          <h2>Your shipment results:</h2>
          <p>
            CUBIC METER (CMB): <span className="result-value">{totalCBM}</span>
          </p>
          <p>
            ACTUAL WEIGHT (KG):{" "}
            <span className="result-value">{totalWeight}</span>
          </p>
          {volumeWeight !== null && (
            <p>
              VOLUME WEIGHT (KG):{" "}
              <span className="result-value">{volumeWeight}</span>
            </p>
          )}
          <p>
            Drop us email :{" "}
            <a href="mailto:sarit@easthai.com" className="contactEmail">
              sale@easthai.com
            </a>{" "}
            for quotation
          </p>
        </div>
      )}
    </div>
  );
}

export default CbmCalculator;
