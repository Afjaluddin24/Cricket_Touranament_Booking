import { faGrinStars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
 function Footer() {
  return (
    <footer className="footer">
      <div className="card">
        <div className="card-body">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2025{" "}
              <Link
                to="tel:+919016281460" className="text-muted"
                target="_blank"
              >
                SHEKH24
              </Link>
              . All rights reserved.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center text-muted">
              <Link
                to="https://www.instagram.com/afjalshekh24/?igsh=MWl1Y2FrczVic2RueA%3D%3D#"
                className="text-muted"
                target="_blank"
              >
               AFJAL SHEKH
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer
