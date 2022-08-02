import React from "react"
import "./style.css"
import { Helmet } from "react-helmet"

export default function Loading() {
  return (
    <div className="wholepage">
      <Helmet>
        <style>{"body { background-color: #8acedb; }"}</style>
      </Helmet>
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="loadingwords">Loading Now</h1>
    </div>
  )
}
