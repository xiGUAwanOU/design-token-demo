import {
  isAttributeLookup, Attribute, TokenDefinition, isMultipleAttribute, Value,
} from './token.types';

function buildMixinName(...parts: string[]): string {
  return parts.filter((part) => part).join('-');
}

function generateSingleMixin(name: string, attributes: Attribute, values: Value): string {
  let result = `@mixin ${name} {\n`;

  const multipleAttribute = isMultipleAttribute(attributes)
    ? attributes
    : [attributes];

  const multipleValue = isMultipleAttribute(attributes)
    ? values
    : [values];

  multipleAttribute.forEach((attribute, index) => {
    if (!multipleValue[index]) {
      return;
    }

    result += `  ${attribute}: ${multipleValue[index]};\n`;
  });

  result += '}\n';

  return result;
}

// eslint-disable-next-line func-names
export default function (tokenName: string, tokenDefinition: TokenDefinition): string {
  let result = `// Token set: ${tokenName}\n`;

  const attributeLookup = isAttributeLookup(tokenDefinition.attributes)
    ? tokenDefinition.attributes
    : { '': tokenDefinition.attributes };

  Object.entries(attributeLookup).forEach(([attributeInfix, attribute]) => {
    Object.entries(tokenDefinition.values).forEach(([valueSuffix, value]) => {
      result += generateSingleMixin(
        buildMixinName(tokenDefinition.prefix, attributeInfix, valueSuffix),
        attribute,
        value,
      );
    });
  });

  return result;
}
