import { useNavigate } from 'react-router-dom';
import { EMAIL_KEY } from '../constants';
import { colorizeTitle, validateEmail } from '../helpers';
import { useLocalization } from '../hooks';
import { Title } from '../components/title';
import { SubTitle } from '../components/sub-title';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { useEffect, useState } from 'react';
import debounce from 'debounce';
import { ConsentAgreement } from '../components/consent-agreement';

const GetAccessViaEmailPage = () => {
  const navigate = useNavigate();
  const { genericTranslation, selectedLanguage } = useLocalization();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(
    genericTranslation !== null ? genericTranslation!.email['empty-error'] : ''
  );
  const [colorizedTitle, setColorizedTitle] = useState<string>('');

  useEffect(() => {
    if (genericTranslation) {
      const title = genericTranslation.email.agreement;
      const colorizedText = colorizeTitle(title, selectedLanguage);
      setColorizedTitle(colorizedText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genericTranslation]);

  useEffect(() => {
    const savedEmail = localStorage.getItem(EMAIL_KEY);
    setEmail(savedEmail ?? '');
  }, []);

  const handleEmailChange = debounce(event => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const isEmailValid = validateEmail(newEmail);

    isEmailValid
      ? setEmailError('')
      : setEmailError(genericTranslation!.email['incorrect-error']);
  }, 1000);

  const handleBtnClick = () => {
    localStorage.setItem(EMAIL_KEY, email);
    navigate(`/results`);
  };

  if (genericTranslation === null) return <h1>Loading...</h1>;

  return (
    <>
      <section
        style={{
          height: '80vh',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            gap: '56px',
          }}
        >
          <div>
            <Title>{genericTranslation.email.title}</Title>
            <SubTitle>{genericTranslation.email['sub-title']}</SubTitle>
          </div>

          <Input
            onChange={handleEmailChange}
            isValid={emailError === ''}
            errorDescription={emailError}
          />

          <ConsentAgreement htmlContent={colorizedTitle} />
        </div>

        <Button
          onClick={handleBtnClick}
          isDisabled={emailError !== '' || email === ''}
        >
          {genericTranslation.button.next}
        </Button>
      </section>
    </>
  );
};

export default GetAccessViaEmailPage;
