export default function mapSliderValueToRange(sliderValue) {
  const minValue = 1;
  const maxValue = 100;
  const targetMinValue = 15.5;
  const targetMaxValue = 11.2;

  const mappedValue =
    targetMinValue +
    ((sliderValue - minValue) / (maxValue - minValue)) *
      (targetMaxValue - targetMinValue);

  return mappedValue;
}
