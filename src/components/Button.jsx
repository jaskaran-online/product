function Button({
  color = "orange",
  paddingX = "10px",
  paddingY = "5px",
  handleButtonClick,
  children,
}) {
  const ButtonStyle = {
    backgroundColor: color,
    padding: `${paddingY} ${paddingX}`,
  };

  return (
    <button
      style={ButtonStyle}
      onClick={() => handleButtonClick("Clicked on " + color + " button")}
    >
      {children}
    </button>
  );
}

export default Button;

// Passing props to a component
// Passing children to a component

// We can pass multiple props to a component but we can't pass multiple children to a component
