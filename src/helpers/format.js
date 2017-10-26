export const isNumeric = number => {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

export const toNumericValue = value => {
  if (!value) {
    return '';
  }

  if (!isNumeric( parseInt(value, 10) )) {
    return '';
  }

  const localeOptions = {
    maximumFractionDigits: 0
  };

  const formattedValue = value.toLocaleString('sv-SE', localeOptions);

  return formattedValue;
};
