import "./Loader.css";

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
