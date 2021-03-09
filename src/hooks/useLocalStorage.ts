type ILocalStorageReturnTypes = {
  setItem: (data: string) => void;
  getItem: () => string | null;
  removeItem: () => void;
};

const useLocalStorage = (key: string): ILocalStorageReturnTypes => {
  const setItem = (data: string) => localStorage.setItem(key, data);
  const getItem = (): string | null => localStorage.getItem(key);
  const removeItem = () => localStorage.removeItem(key);

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
