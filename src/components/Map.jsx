import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [73.0, -11.0, 0],
        center: [-5, -3],
        scale: 1100
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[826.30, 896]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#050505",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"Bogotá"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
