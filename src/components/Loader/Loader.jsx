import { Audio } from 'react-loader-spinner';
import { StyedDiv } from './Loader.styled';

const Loader = () => {
  return (
    <StyedDiv>
      <Audio
        height="200"
        width="200"
        color="#ff005d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </StyedDiv>
  );
};

export default Loader;
