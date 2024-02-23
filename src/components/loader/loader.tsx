import { FC, useEffect, useState } from 'react';

import { Background, Circle, Container, Text } from './loader.styled';

export interface Props {
  onLoadingDone: () => void;
}

const Loader: FC<Props> = ({ onLoadingDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onLoadingDone();
      }, 100);
    }
  }, [onLoadingDone, progress]);

  return (
    <Container viewBox="0 0 100 100">
      <Background cx="50" cy="50" r="40" />
      <Circle
        cx="50"
        cy="50"
        r="40"
        strokeDasharray={251.2}
        strokeDashoffset={(251.2 * (100 - progress)) / 100}
      />
      <Text x="50" y="50" transform="translate(100) rotate(90)">
        {progress}%
      </Text>
    </Container>
  );
};

export default Loader;
