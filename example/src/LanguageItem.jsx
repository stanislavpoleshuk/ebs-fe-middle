import React, { useCallback } from 'react';

const LanguageItem = ({ onPress, item }) => {
  const handlePress = useCallback(() => {
    onPress(item);
  }, [onPress, item]);

  return (
    <button key={item} onClick={handlePress}>
      {item}
    </button>
  );
};

export default LanguageItem;
