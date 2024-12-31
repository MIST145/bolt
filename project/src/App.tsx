import React, { useState } from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { NeonTitle } from './components/NeonTitle';
import { Converter } from './components/Converter';
import { convertListFormat } from './utils/converter';
import { FormatType } from './utils/formatters';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [inputList, setInputList] = useState('');
  const [convertedList, setConvertedList] = useState('');
  const [format, setFormat] = useState<FormatType>('qbcore');

  const handleConvert = () => {
    setConvertedList(convertListFormat(inputList, format));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedList);
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-200 ${
      theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
    }`}>
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
      <div className="max-w-7xl mx-auto">
        <NeonTitle />
        <Converter
          theme={theme}
          inputList={inputList}
          convertedList={convertedList}
          format={format}
          onFormatChange={setFormat}
          onInputChange={setInputList}
          onConvert={handleConvert}
          onCopy={handleCopy}
        />
      </div>
    </div>
  );
}

export default App;