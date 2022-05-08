import * as React from 'react';
import './App.css';
import SpaceMission from './graphql';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';

function App() {
  const [data, setData] = React.useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  };

  React.useEffect(() => {
    loadSpaceMission();
  }, []);

  console.log(data);

  return (
    <MDBContainer
      style={{
        margin: 'auto',
        padding: '16px',
        maxWidth: '720px',
        alignContent: 'center',
      }}
    >
      <MDBRow>
        <h2>SpaceX GraphQL API in React</h2>
        {data.map((item, index) => (
          <MDBCard
            key={index}
            style={{ maxWidth: '22rem', maxHeight: '24rem' }}
          >
            <MDBCardImage
              src={
                item?.ships[0]?.image ||
                'https://www.universetoday.com/wp-content/uploads/2011/03/IMG_4650a_STS-133_Ken-Kremer.jpg'
              }
              position="top"
              alt={item.mission_name}
            />
            <MDBCardBody>
              <MDBCardTitle>{item.mission_name}</MDBCardTitle>
              <MDBCardText>{item.launch_site.site_name_long}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
