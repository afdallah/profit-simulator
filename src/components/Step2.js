import React from 'react'
import product from '../images/product.png'

export default function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <>
      <img src={product} className="mx-auto d-block" alt="Illustration" />
      <div className="form-group">
        <label htmlFor="price">Harga Produk</label>
        <input
          className="form-control"
          id="price"
          name="price"
          type="number"
          placeholder="Masukan harga"
          value={props.price}
          onChange={props.handleChange}
          />
      </div>
      <div className="form-group">
        <label htmlFor="margin">Margin Produk</label>
        <input
          className="form-control"
          id="margin"
          name="margin"
          type="number"
          placeholder="Masukan margin (%)"
          value={props.margin}
          onChange={props.handleChange}
        />
      </div>
      {/* <div className="form-group">
        <label htmlFor="category">Kategori Bisnis</label>
        <select name="category" className="form-control" id="category" onChange={props.handleChange}>
          <option disabled selected>Pilih</option>
          <option>Satu</option>
          <option>Dua</option>
        </select>
      </div> */}
    </>
  );
}