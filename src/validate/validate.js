import { useCallback } from "react";

export const validatePassword = (input) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(input);
}

export const validateEqualString = (str1, str2) => {
    if (str1 === str2) {
        return true;
    }
    return false;
}