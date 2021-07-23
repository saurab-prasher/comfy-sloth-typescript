import { useState, useEffect } from "react";
export const usePasswordValidation = ({
  firstPassword = "",
  secondPassword = "",
}) => {
  const [validLength, setValidLength] = useState(null);
  const [match, setMatch] = useState(null);

  useEffect(() => {
    if (firstPassword && firstPassword === secondPassword) {
      setValidLength(firstPassword.length >= 0 ? true : false);
    }
  }, [firstPassword, secondPassword]);
  return {
    validLength,
    match,
  };
};
