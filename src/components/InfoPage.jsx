import styled from "styled-components";

export const InfoPage = ({ closeInfoPage }) => {
  return (
    <InfoPageContainer>
      <div className="info-page">
        <h1>Ramen</h1>
        <ul>
          <li>Bönor</li>
          <li>Potatis</li>
          <li>Paprika</li>
          <li>Lök</li>
        </ul>
        <ul>
          <li>Protein 0.9g</li>
          <li>Fibrer 0.8g </li>
          <li>Kolhydrater 3.3g</li>
          <li>Vatten 91.g</li>
          <li>Fett 2.2 g </li>
          <li> Aska 1.4 g</li>
        </ul>
        <h3>Energi per soppa 105 kcal</h3>
        <section>
          <button onClick={() => closeInfoPage()}>Tillbaka</button>
        </section>
      </div>
    </InfoPageContainer>
  );
};

const InfoPageContainer = styled.div`
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  border: 1px solid #000;
  border-radius: 5px;

  .info-page {
    position: sticky;
    height: 500px;
    width: 300px;
    background: #fff;
    padding: 2em;
  }
`;
