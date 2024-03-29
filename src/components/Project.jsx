import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Technical Projects.', 'Researchs.', 'Contributions.', 'Hackathons.'];

const Research = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500, 
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <text>

      <TextTransition springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </text>
  );
}
export default Research;