import { useEffect, useReducer } from "react";
const useLocalStorageReducer = (key, defaultVal, reducer) => {
  const [state, dispatch] = useReducer((reducer, defaultVal) => {
    console.log("defaultVal = ", defaultVal);
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (err) {
      value = defaultVal;
    }
    console.log("calue  = ", value);
    return value;
  });
  console.log("state = ", state);
  useEffect(() => {
    console.log("setting todos with: ", JSON.stringify(state));
    //   window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};

export { useLocalStorageReducer };
