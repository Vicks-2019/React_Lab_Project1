import React from "react";

const PackageTemplate = ({ packages, ...props }) => {
  const { id } = props.match.params;
  const chosenPackage = packages[id];
  const { title, summary, details } = chosenPackage;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <div
        className="well"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "cyan",
          width: "90%",
        }}
      >
        <h2>{title}</h2>
        <br />
        <br />
        <p style={{ textAlign: "center", fontSize: 15 }}>{summary}</p>
        <div>
          {details.map((item) => (
            <div style={{ margin: 20 }}>
              <strong>{item.title}</strong>
              <div>
                <ul>
                  <li>
                    {item.description.map((items) => (
                      <li>
                        <p style={{ fontSize: 15 }}>{items}</p>
                      </li>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageTemplate;
