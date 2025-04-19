import React from 'react'

 function Matchinfo() {
  return (
    <div className="matchs-info">
    <div className="col-md-6 col-sm-6 col-xs-12">
      <div className="row">
        <div className="full">
          <div className="matchs-vs">
            <div className="vs-team">
              <div className="team-btw-match">
                <ul>
                  <li>
                    <img src="./TempletFiles/images/img-03.png" alt="" />
                    <span>Footbal Team</span>
                  </li>
                  <li className="vs">
                    <span>vs</span>
                  </li>
                  <li>
                    <img src="./TempletFiles/images/img-04.png" alt="" />
                    <span>Super Team Club</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-sm-6 col-xs-12">
      <div className="row">
        <div className="full">
          <div className="right-match-time">
            <h2>Next Match</h2>
            <ul id="countdown-1" className="countdown">
              <li>
                <span className="days">10 </span>Day{" "}
              </li>
              <li>
                <span className="hours">5 </span>Hours{" "}
              </li>
              <li>
                <span className="minutes">25 </span>Minutes{" "}
              </li>
              <li>
                <span className="seconds">10 </span>Seconds{" "}
              </li>
            </ul>
            <span>12/02/2017 /19:00pm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Matchinfo