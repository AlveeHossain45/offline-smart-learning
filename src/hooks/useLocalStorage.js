import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export const useLocalStorageWithExpiry = (key, initialValue, expiryMs) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const { value, expiry } = JSON.parse(item);
        if (expiry && Date.now() > expiry) {
          window.localStorage.removeItem(key);
          return initialValue;
        }
        return value;
      }
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      const item = {
        value: valueToStore,
        expiry: Date.now() + expiryMs
      };
      window.localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};