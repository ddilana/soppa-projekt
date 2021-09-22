import { useState, useEffect } from "react";
import styled from "styled-components";

import { HomeData } from "./HomeData";
import { InfoPage } from "../components/InfoPage";

import { FaOpencart } from "react-icons/fa";

export const Home = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [addedInfo, setAddedInfo] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(false);

  const sendToCart = () => {
    const nameOfFood = "Ramen";

    const infoToCart = {
      nameOfFood,
    };

    setAddedInfo([...addedInfo, infoToCart]);
  };

  const handleInfo = () => setShowInfo(!showInfo);
  const closeInfoPage = () => setShowInfo(false);

  const handleCartOfLength = () => setCartEmpty(true);

  return (
    <HomeContainer>
      <div className="cartlength">{cartEmpty && addedInfo.length}</div>
      <div className="carticon">
        <FaOpencart />
      </div>
      {showInfo && (
        <InfoPage
          closeInfoPage={closeInfoPage}
          sendToCart={sendToCart}
          handleCartOfLength={handleCartOfLength}
          addedInfo={addedInfo}
        />
      )}
      {HomeData.map((h) => (
        <div key={h.id}>
          <h1>
            {h.icon} <span>{h.headerTitle}</span>
          </h1>
          <h2>{h.title}</h2>
          <h3>{h.ingredients}</h3>
          <img src={h.image} alt={h.title} />
          <section>
            <button onClick={() => handleInfo()}>{h.info}</button>
            <button
              onClick={() => {
                sendToCart();
                handleCartOfLength();
              }}
            >
              {h.add}
            </button>
          </section>
        </div>
      ))}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  .carticon {
    display: flex;
    justify-content: flex-end;
    font-size: 3rem;
    z-index: 10;
    position: fixed;
    right: 10px;
  }

  .cartlength {
    position: fixed;
    right: 5px;
    height: 1.2rem;
    border-radius: 50%;
    background: rgba(0, 0, 0);
    font-size: 1.3rem;
    padding: 0.3em;
    color: #fff;
    z-index: 11;
  }
`;
