import React from 'react'
import { format } from '../utils'

export default function Result (props) {
  const sales = (props.profit / props.margin)
  return (
    <div className="result" hidden={!props.done}>
      <h4>Result</h4>
      <span className="icon btn btn-sm btn-danger" onClick={props.closeResult}>X close</span>
      <div className="card mb-3">
        <h5 className="card-header">Submitted data</h5>
        <div className="card-body">
            <dl className="row">
              <dt className="col-sm-5">Profit goal </dt>
              <dd className="col-sm-7">{format(props.profit)}</dd>

              <dt className="col-sm-5">Harga Produk </dt>
              <dd className="col-sm-7">{format(props.price)}</dd>

              <dt className="col-sm-5">Margin Produk </dt>
              <dd className="col-sm-7">{format(props.margin)}</dd>

              <dt className="col-sm-5">Jumlah CS</dt>
              <dd className="col-sm-7">{props.totalCs}</dd>

              <dt className="col-sm-5">Gaji CS</dt>
              <dd className="col-sm-7">{props.salary}</dd>
            </dl>
        </div>
      </div>
      <div className="card mb-3">
        <h5 className="card-header">Penjualan</h5>
        <div className="card-body">
            <dl className="row">
              <dt className="col-sm-5">Sales</dt>
              <dd className="col-sm-7">{sales}/tahun</dd>
              <dt className="col-sm-5"></dt>
              <dd className="col-sm-7">{Math.ceil(sales / 12)}/bulan</dd>
              <dt className="col-sm-5"></dt>
              <dd className="col-sm-7">{Math.ceil(sales / 365)}/hari</dd>

              <dt className="col-sm-5">Omzet</dt>
              <dd className="col-sm-7">{format(props.price * sales)}/tahun</dd>
            </dl>
        </div>
      </div>
      <div className="card mb-3">
        <h5 className="card-header">Cs Benchmark</h5>
        <div className="card-body">
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
      <div className="card mb-3">
        <h5 className="card-header">Web dev Benchmark</h5>
        <div className="card-body">
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
  )
}
