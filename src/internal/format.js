export const isNumeric = number => {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

/**
 * Format a value to a more human readable number
 *
 * e.g 10000 => 10 000 or 1200000 => 1 200 000
 *
 * @method formatPrettyNumber
 * @param  string|int   value
 * @return string|int   formatted value (unless the input isn't numeric which in case just return the same value)
 */

export const formatPrettyNumber = (value) => {

  if ( value === null || value === undefined ) {
    return value;
  } else if ( !isNumeric(value) ) {
    return value;
  };

  // Get current language of the browser
  const userLanguage = window.navigator.language ? window.navigator.language : 'sv-SE';

  const IntlOptions = {
    lang: userLanguage,
    numberFormatOptions: {}
  };

  const numberFormat = Intl.NumberFormat(IntlOptions.lang, IntlOptions.numberFormatOptions);
  return numberFormat.format(value);

};
