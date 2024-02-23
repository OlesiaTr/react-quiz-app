import { useNavigate } from 'react-router-dom';

import { useLocalization } from '../hooks';
import { SubTitle } from '../components/sub-title';
import { Loader } from '../components/loader';

const LoadingPage = () => {
  const navigate = useNavigate();
  const { genericTranslation } = useLocalization();

  const handleFinishedLoading = () => {
    navigate('/email');
  };

  if (genericTranslation === null) return <h1>Loading...</h1>;

  return (
    <>
      <section
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <SubTitle>{genericTranslation.loader['sub-title']}</SubTitle>
        <Loader onLoadingDone={handleFinishedLoading} />
      </section>
    </>
  );
};

export default LoadingPage;
