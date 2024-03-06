import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import exportFromJSON from 'export-from-json';

import { Button } from '../components/button';
import { QuizCompletionMessage } from '../components/quiz-completion-message';
import { DownloadButton } from '../components/download-button';

import { getQuizData } from '../helpers';
import { useLocalization } from '../hooks';

const DownloadResultPage = () => {
  const navigate = useNavigate();
  const { genericTranslation, selectedTranslation } = useLocalization();
  const [isLoading, setIsLoading] = useState(false);

  const exportResultsToCSV = () => {
    const data = getQuizData(genericTranslation, selectedTranslation);

    const formattedData = data.map(item => ({
      ...item,
      answer: Array.isArray(item.answer) ? item.answer.join(', ') : item.answer,
    }));

    const exportType = exportFromJSON.types.csv;

    exportFromJSON({
      data: formattedData,
      fileName: 'user_results',
      exportType,
    });
  };

  const handleBtnClick = async () => {
    setIsLoading(true);

    try {
      // Mock API endpoint for storing user data
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

      const userData = {
        userId: 1, // Should be replaced with actual user id
        answers: getQuizData(genericTranslation, selectedTranslation),
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        localStorage.clear();
        navigate(`/quiz/1`);
      } else {
        console.error('API call failed');
      }
    } catch (error) {
      console.error('An error occurred during the API call', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (genericTranslation === null) return <h1>Loading...</h1>;

  return (
    <>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '90vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: '60px',
          }}
        >
          <QuizCompletionMessage
            title={genericTranslation.success.title}
            subTitle={genericTranslation.success['sub-title']}
          />
          <img
            src="/src/assets/success-checkmark.svg"
            alt="success checkmark with light-green background color"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '280px',
              maxHeight: '280px',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '37px',
          }}
        >
          <DownloadButton
            text={genericTranslation.success.download}
            onClick={exportResultsToCSV}
          />
          <Button onClick={handleBtnClick}>
            {isLoading ? 'Loading...' : genericTranslation.button.retake}
          </Button>
        </div>
      </section>
    </>
  );
};

export default DownloadResultPage;
