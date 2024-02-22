const colorizedWords: {
  [key: string]: string[];
} = {
  en: ['hate'],
  de: ['wenigsten'],
  es: ['odias'],
  fr: ['détestez'],
  ua: ['не'],
};

export const colorizeTitle = (title: string, language: string) => {
  const result = title.split(' ').map((word, index) => {
    const isColorizedWord = colorizedWords[language]?.includes(
      word.toLowerCase()
    );

    if (isColorizedWord) {
      return `<span key=${index} style="color: #E4229B;">${word}</span>`;
    }
    return `${word}`;
  });

  return result.join(' ');
};
