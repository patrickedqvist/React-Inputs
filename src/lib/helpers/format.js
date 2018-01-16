export const isNumeric = number => {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

export const toNumericValue = (value, isDecimal = false, lang = 'sv-SE') => {

  if (!value) {
    return '';
  }

  if (isDecimal) {
    return value;
  }

  if (!isNumeric(value)) {
    return '';
  }

  const options = {
    maximumFractionDigits: 0
  };

  const formatValue = Intl.NumberFormat(lang, options);
  return formatValue(value);
};

export const toRawValue = (value, isDecimal = false) => {
  if (value === null) {
    return '';
  }

  if (isDecimal) {
    if (!isNumeric(value)) {
      return value.replace(',', '.');
    }
    return value;
  }

  const unformatted = `${value}`;
  return unformatted;
};
