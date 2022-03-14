import styled from 'styled-components';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
   <>
    <Wrap>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </Wrap>
   </>
  );
}

const Wrap = styled.div``;
export default App;
