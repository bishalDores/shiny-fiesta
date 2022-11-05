import { useState } from "react";
import Spreadsheet from "react-spreadsheet";

function App() {
  const [data, setData] = useState([
    [
      { value: "Height" },
      { value: "Width" },
      { value: "Mass" },
      { value: "Payload to leo" },
      { value: "Payload to gto" },
      { value: "Payload to mars" },
    ],
    [
      { value: "70 m / 229.6 ft" },
      { value: "12.2 m / 39.9 ft" },
      { value: "1,420,788 kg / 3,125,735 lb" },
      { value: "63,800 kg / 140,660 lb" },
      { value: "26,700 kg / 58,860 lb" },
      { value: "16,800 kg / 37,040 lb" },
    ],
    [
      { value: "8.1 m / 26.7 ft" },
      { value: "4 m / 13 ft" },
      { value: "9.3 m³ / 328 ft³" },
      { value: "37 m³ / 1300 ft³" },
      { value: "6,000 kg / 13,228 lbs" },
      { value: "3,000 kg / 6,614 lbs" },
    ],
    [
      { value: "70 m / 229.6 ft" },
      { value: "12.2 m / 39.9 ft" },
      { value: "1,420,788 kg / 3,125,735 lb" },
      { value: "63,800 kg / 140,660 lb" },
      { value: "26,700 kg / 58,860 lb" },
      { value: "16,800 kg / 37,040 lb" },
    ],
    [
      { value: "8.1 m / 26.7 ft" },
      { value: "4 m / 13 ft" },
      { value: "9.3 m³ / 328 ft³" },
      { value: "37 m³ / 1300 ft³" },
      { value: "6,000 kg / 13,228 lbs" },
      { value: "3,000 kg / 6,614 lbs" },
    ],
  ]);

  const addRow = () => {
    let tempData = JSON.parse(JSON.stringify(data));
    tempData.push([]);
    setData(tempData);
  };
  const addColumn = () => {
    let tempData = JSON.parse(JSON.stringify(data));
    tempData.forEach((d) => {
      d.push({ value: "" });
    });
    setData(tempData);
  };

  const showData = () => {
    console.log(data);
  };

  const dataHandler = (cell) => {
    setData(cell);
  };
  return (
    <div className="container">
      <div className="my-5">
        <h2>Demo Table</h2>
        <Spreadsheet data={data} rowLabels={["", "Falcon", "Dragon", "Starship", "Human SpaceLift"]} onChange={dataHandler} />
        <button className="btn btn-info mr-4 mt-4" onClick={addRow}>
          Add New Row
        </button>
        <button className="btn btn-primary mt-4" onClick={addColumn}>
          Add New Column
        </button>
        <div className="mt-4">
          <small className="text-danger">*Select a cell and change the data.</small>
        </div>
      </div>

      {/* <button className="btn" onClick={showData}>
        Show Data
      </button> */}
    </div>
  );
}

export default App;
