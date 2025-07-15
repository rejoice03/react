const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count = count + 1; // This will not trigger a re-render
    console.log(count);
  };
  return <div>
    <h2>{count}</h2>
    <button type="button" onClick={handleClick} className="btn">increase</button>
  </div>;
};

export default ErrorExample;
