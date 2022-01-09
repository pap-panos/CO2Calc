import React from "react";
import AirQualityChart from "../charts/AirQualityChart";

const AirQuality = ({ airData }) => {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-AirQuality"
      role="tabpanel"
      aria-labelledby="v-pills-AirQuality-tab"
    >
      <div className="card border border-light rounded">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3 border-end">
              <p className="fw-bolder">
                The impact of your pathway on air quality
              </p>
              The damage to human health arising from air pollution from this
              pathway, principally particulate matter, could be around 41% to
              86% lower in 2050 compared to 2010.
              <p className="fw-bolder">How to interpret these results:</p>
              <li>
                Air pollution health impact index — this index measures the
                effect on human health from fine particulate matter and other
                air pollutants such as nitrogen oxides. For example, these
                pollutants have been linked to premature death caused by heart
                and lung disease. 2010 is the baseline year (100). A number
                lower than 100 indicates a reduction in average air pollution
                and associated health impacts, whilst a higher number indicates
                an increase. It does not provide information on the number or
                severity of pollution hotspots.
              </li>
              <li>
                Low end of hatched range — worst case scenario for air pollution
                whereby there is no further deployment or innovation in
                pollution abatement technology between now and 2050 beyond
                planned measures.
              </li>
              <li>
                High end of hatched range — best case scenario whereby
                innovation radically improves pollution abatement technology
                between now and 2050 and it is fully deployed.
              </li>
            </div>
            <div className="col-lg-9">
              <AirQualityChart airData={airData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
