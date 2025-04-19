import React from "react";

function TeamLimit() {
  return (
    <>
      <div>
        <AdminNavigation />
        <div style={{ marginTop: "210px", padding: "90px" }}>
          <div className="col-md-12 mt-5">
            <div className="col-md-12 mb-5">
              <div className="row align-items-center">
                <div className="col-12 col-sm-6 text-left">
                  <b style={{ fontSize: "25px" }}>{props.name}</b>
                </div>
                <div className="col-md-4 d-none d-md-block"></div>
                <div className="col-12 col-sm-2 col-md-2 text-right add-tournament-btn"></div>
              </div>
            </div>

            <div className="row" style={{ paddingTop: "100px" }}></div>
          </div>
        </div>
      </div>
      <TournamentPopup show={show} setShow={setShow} />
    </>
  );
}
export default TeamLimit;
