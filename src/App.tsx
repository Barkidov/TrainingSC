import "./App.css";
import styled from "styled-components";
import { Card } from "./styles/components/Card.styled";
import { CardImage } from "./styles/components/CardImage.styled";
import { Title } from "./styles/components/Title.styled";
import { TextContent } from "./styles/components/TextContent.styled";
import { ButtonPrimary } from "./styles/components/ButtonPrimary.style";

function App() {
  return (
    <AppDiv>
      <Card>
        <CardImage src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaguu5Fsr7AB2rEjm9WGv-VdFicmPNJFZQMG8ehSSTQRuVgjUWT3Ztly3LfAp-a~wNj8Xtx-TW54ccnVeXLeqrRc4UpNGYRaK64918RMwsgvs1jfvf9SdifBzYwT5B~QS1ePeQW8PiGSetYkQlcB23DfYWK2zCORA8ktp1uyrBrigAitCdiXOWExWx6y4FYNlpaIQk45XtxZi1cKEnmgHx8r05p4MGRUQzIvFR3EO~aXQXhZ6k0h00IIWUE8Lr-Sdj4Y-hSFiTBVMfwo7Ud~bOp77G~0nGj14VR6VrCRmLR-qFbbh9k-hGwy78TB5HWOU~~HkECBkmNr6Egzgv1G2Q__"/>
        <div><Title>Headline</Title></div>
        <TextContent>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</TextContent>
        <ButtonPrimary>See more</ButtonPrimary>
        <ButtonPrimary secondary>Save</ButtonPrimary>
      </Card>
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
