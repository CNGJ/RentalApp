const React = require('react');
const isEmpty = require('lodash/isEmpty');
const StyledLabel = require('../StyledLabel');

const TRANSLATION_TYPE_ACTION = 'action';
const TRANSLATION_TYPE_BREAKPOINT = 'break';

const INTERPOLATION_REGEXP = /{([\s\S]+?)}/g;

/**
 * @param {string} text
 * @param {object} values
 */
const jsx = (text, values, className = null) => {
  debugger
  if (isEmpty(values)) {
    return text;
  }
  const result = text.split(INTERPOLATION_REGEXP);
  for (let index = 0; index < result.length; index += 1) {
    const key = result[index];
    if (Object.prototype.hasOwnProperty.call(values, key)) {
      const replacement = values[key];
      switch (replacement.type) {
        case TRANSLATION_TYPE_ACTION:
          result[index] = (
            <a key="anchor" target={replacement.html_target || '_self'} href={replacement.target}>
              {replacement.label.text}
            </a>
          );
          break;
        case TRANSLATION_TYPE_BREAKPOINT:
          result[index] = <br />;
          break;
        default:
          result[index] = <StyledLabel key={replacement.text} className={className} as="span" {...replacement} />;
      }
    }
  }
  return result;
};

const i18n = {
  jsx
};

export default i18n;
