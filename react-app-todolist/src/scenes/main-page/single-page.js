import React, { useState } from 'react';


function SinglePage() {
  // Declare a new state variable, which we'll call "count"
  const [note, setNote] = useState([
    { id: 1, value: "Test" },
    { id: 2, value: "Test" },
    { id: 3, value: "Test" },
  ]);
  const [count, setCount] = useState(0)

  return (
    <div className="row flex-container">
      {/* <div className="row"> */}
      <div className="col-lg-5 col-auto">
        <div className="card">
          <div className="card-header text-center text-uppercase">
            <h3> ToDo App</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <input type="text" className="form-control w-75" />
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default SinglePage;