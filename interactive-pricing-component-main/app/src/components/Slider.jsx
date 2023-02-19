import { useEffect, useRef } from "react";

export default function Slider({
  onChangeValue = () => {},
  getLastValue = () => {},
  defaultValue = 0,
  ...props
}) {
  const ref = useRef(null);

  const setStyle = (input) =>
    (input.style.backgroundSize =
      ((input.value - input.min) * 100) / (input.max - input.min) + "% 100%");

  const getInputValue = (e) => e.target.valueAsNumber;

  const handleOnInput = (e) => {
    setStyle(e.target);
    onChangeValue(getInputValue(e));
  };

  const handleOnMouseUp = (e) => getLastValue(getInputValue(e));

  useEffect(() => {
    const input = ref.current;
    setStyle(input);
  }, []);

  return (
    <input
      type="range"
      defaultValue={defaultValue}
      onInput={handleOnInput}
      onMouseUp={handleOnMouseUp}
      ref={ref}
      {...props}
    />
  );
}
