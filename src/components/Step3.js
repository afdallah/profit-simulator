import React from 'react'
import cs from '../images/cs.png'

export default function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <>
      <img src={cs} className="mx-auto d-block" alt="Illustration" />
      <div className="form-group">
        <label htmlFor="total-cs">Jumlah Cs</label>
        <input
          className="form-control"
          id="total-cs"
          name="totalCs"
          type="number"
          placeholder="Enter amount"
          value={props.totalCs}
          onChange={props.handleChange}
          />
      </div>

      <div className="form-group">
        <label htmlFor="salary">Gaji Cs</label>
        <input
          className="form-control"
          id="salary"
          name="salary"
          type="number"
          placeholder="Enter amount"
          value={props.salary}
          onChange={props.handleChange}
          />
      </div>

      <button className="btn btn-submit btn-success btn-block">Shut up and take my money!</button>
    </>
  );
}
