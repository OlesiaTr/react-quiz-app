const colorizedWords: {
  [key: string]: string[];
} = {
  en: ['hate', 'privacy', 'policy', 'terms', 'of', 'use.'],
  de: ['wenigsten', 'datenschutzrichtlinie', 'nutzungsbedingungen'],
  es: ['odias', 'política', 'de', 'privacidad', 'condiciones', 'uso.'],
  fr: [
    'détestez',
    'politique',
    'de',
    'confidentialité',
    'conditions',
    "d'utilisation.",
  ],
  ua: ['не', 'політикою', 'конфіденційності', 'умовами', 'використання.'],
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
