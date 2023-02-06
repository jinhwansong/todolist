const Button = ({ addBtn, children }) => {
  return (
    <button onClick={addBtn} type="submit" id="addBtn">
      {children}
    </button>
  );
};

export default Button;
