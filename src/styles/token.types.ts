export type SingleAttribute = string;
export type MultipleAttribute = string[];
export type Attribute = SingleAttribute | MultipleAttribute;
export type AttributeLookup = Record<string, Attribute>;

export function isAttributeLookup(
  attributes: Attribute | AttributeLookup,
): attributes is AttributeLookup {
  return typeof attributes === 'object' && !Array.isArray(attributes);
}

export function isMultipleAttribute(
  attribute: SingleAttribute | MultipleAttribute,
): attribute is MultipleAttribute {
  return Array.isArray(attribute);
}

export type SingleValue = string;
export type MultipleValue = string[];
export type Value = SingleValue | MultipleValue;
export type ValueLookup = Record<string, Value>;

export function isMultipleValue(
  value: SingleValue | MultipleValue,
): value is MultipleValue {
  return Array.isArray(value);
}

export type TokenDefinition = {
    prefix: string;
    attributes: Attribute | AttributeLookup;
    values: ValueLookup;
};

export type TokenDefinitions = Record<string, TokenDefinition>;

export type TokenOutputGenerator = (tokenName: string, tokenDefinition: TokenDefinition) => string;
