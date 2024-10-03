import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "../css/PlayPage.css";
import beerImage from "../../assets/Pinta.png";

const PlayPage = () => {
  const [regoleOpen, setRegoleOpen] = useState(false);
  const [showMaltsDropdown, setShowMaltsDropdown] = useState(false);
  const [showHopsDropdown, setShowHopsDropdown] = useState(false);
  const [showYeastDropdown, setShowYeastDropdown] = useState(false);
  const [selectedMalts, setSelectedMalts] = useState([]);
  const [selectedHops, setSelectedHops] = useState([]);
  const [selectedYeast, setSelectedYeast] = useState(null);

  // Opzioni per i malti
  const maltsOptions = [
    {
      type: "Malto Chiaro",
      malts: ["Malto Wheat", "Pilsner", "Pale Ale"],
    },
    {
      type: "Malto Ambrato",
      malts: ["Vienna", "Monaco", "Caramel"],
    },
    {
      type: "Malto Scuro",
      malts: ["Abbey", "Carafa III", "Chocolate"],
    },
  ];

  // Opzioni per i luppoli
  const hopsOptions = [
    {
      type: "Luppoli Base",
      hops: ["Saaz", "Styrian Golding", "Hallertau Magnum"],
    },
    {
      type: "Luppoli Agrumati",
      hops: ["Citra", "Hbc-630", "Wakatu"],
    },
    {
      type: "Luppoli Fruttati",
      hops: ["Wai-ti", "Mosaic", "Vic Secret"],
    },
  ];

  // Opzioni per i lieviti
  const yeastOptions = [
    {
      type: "Lievito Ale (Alta Fermentazione)",
      yeast: ["US-05"],
    },
    {
      type: "Lievito lager ( Bassa Fermentazione)",
      yeast: ["Saflager w34/70"],
    },
  ];

  const toggleRegole = () => setRegoleOpen(!regoleOpen);

  const toggleDropdown = (type) => {
    if (type === "malts") setShowMaltsDropdown(!showMaltsDropdown);
    if (type === "hops") setShowHopsDropdown(!showHopsDropdown);
    if (type === "yeast") setShowYeastDropdown(!showYeastDropdown);
  };

  const handleMaltsChange = (malto) => {
    setSelectedMalts((prev) => {
      if (prev.includes(malto)) return prev.filter((m) => m !== malto);
      else if (prev.length < 3) return [...prev, malto];
      return prev;
    });
  };

  const handleHopsChange = (luppolo) => {
    setSelectedHops((prev) => {
      if (prev.includes(luppolo)) return prev.filter((h) => h !== luppolo);
      else if (prev.length < 4) return [...prev, luppolo];
      return prev;
    });
  };

  const handleYeastChange = (lievito) => {
    setSelectedYeast(lievito);
  };

  const getBeerColor = () => {
    if (selectedMalts.includes("Malto Scuro")) return "brown";
    if (selectedMalts.includes("Malto Ambrato")) return "amber";
    return "gold";
  };

  return (
    <div
      id="play-page-container"
      className="container-fluid p-0"
      style={{ backgroundColor: "#f0f0f0" }}>
      <header className="bg-dark text-white py-2">
        <nav className="container d-flex justify-content-end navbar">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="rulesDropdown"
                role="button"
                aria-expanded={regoleOpen}
                onClick={toggleRegole}>
                Regole
              </a>
              {regoleOpen && (
                <ul className="dropdown-menu show">
                  <li>
                    <a className="dropdown-item">
                      1. Selezionare i <strong>malti</strong> che si vogliono
                      inserire nella <br /> ricetta cliccando sul pulsante
                      <strong> Malto</strong>. &#40; Max. 3 &#41;
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      2. Selezionare i <strong>luppoli</strong> che si vogliono
                      inserire nella <br /> ricetta cliccando sul pulsante{" "}
                      <strong> Luppoli</strong>. &#40; Max. 4 &#41;
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      3. Scegliere uno dei due <strong>lieviti</strong> proposti
                      cliccando sul
                      <br /> pulsante <strong> Lievito</strong>. &#40; Max. 1
                      &#41;
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      4. Premere <strong>Genera</strong>!
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <div
        className="d-flex justify-content-between align-items-center"
        style={{ minHeight: "100vh", padding: "20px" }}>
        <div className="buttons-container">
          <div className="dropdown">
            <button
              className="btn malts-btn"
              onClick={() => toggleDropdown("malts")}>
              Malto
            </button>
            {showMaltsDropdown && (
              <div className="dropdown-content show">
                {maltsOptions.map((malto) => (
                  <div key={malto.type}>
                    <strong>{malto.type}</strong>
                    <ul>
                      {malto.malts.map((m) => (
                        <li key={m}>
                          <a href="#" onClick={() => handleMaltsChange(m)}>
                            {m}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown">
            <button
              className="btn hops-btn"
              onClick={() => toggleDropdown("hops")}>
              Luppoli
            </button>
            {showHopsDropdown && (
              <div className="dropdown-content show">
                {hopsOptions.map((hop) => (
                  <div key={hop.type}>
                    <strong>{hop.type}</strong>
                    <ul>
                      {hop.hops.map((h) => (
                        <li key={h}>
                          <a href="#" onClick={() => handleHopsChange(h)}>
                            {h}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown">
            <button
              className="btn yeast-btn"
              onClick={() => toggleDropdown("yeast")}>
              Lievito
            </button>
            {showYeastDropdown && (
              <div className="dropdown-content show">
                {yeastOptions.map((yeast) => (
                  <div key={yeast.type}>
                    <strong>{yeast.type}</strong>
                    <ul>
                      {yeast.yeast.map((y) => (
                        <li key={y}>
                          <a href="#" onClick={() => handleYeastChange(y)}>
                            {y}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="pinta-container">
          <div>
            <img src={beerImage} alt="Pinta di Birra" className="beer-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayPage;