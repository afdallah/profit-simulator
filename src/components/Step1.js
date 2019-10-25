import React from 'react'
import coins from '../images/coins.png'

export default function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <>
      <img src={coins} className="mx-auto d-block" alt="Illustration" />
      <div className="form-group">
        <label htmlFor="profit">Profit Goal / Tahun</label>
        <input
          className="form-control"
          id="profit"
          name="profit"
          type="number"
          placeholder="Enter amount"
          value={props.profit}
          onChange={props.handleChange}
          />
      </div>
    </>
  );
}
