export default function mapInputValueToTargetRange(inputValue) {
  const inputMinValue = 15.5;
  const inputMaxValue = 11.2;
  const targetMinValue = 500;
  const targetMaxValue = 10000;

  const mappedValue =
    targetMinValue +
    ((inputValue - inputMinValue) / (inputMaxValue - inputMinValue)) *
      (targetMaxValue - targetMinValue);

  return mappedValue;
}
