import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Ayush Gawande', 'Ayu5h Gawand3', 'Δyush GΔwΔnde', 'Δyu5h GΔwΔnd3'];

const Ayush = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <text>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </text>
  );
}
export default Ayush;