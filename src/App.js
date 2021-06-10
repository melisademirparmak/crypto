import "./css/style.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <i class="fas fa-angle-double-left"></i>coinci
          <i class="fas fa-angle-double-right"></i>
        </div>
        <form >
          <input type="text" class="serachBar" placeholder="Search"/>
        </form>
      </div>
    </>
  );
}

export default App;
