function Header() {

  const onclick= (e) => {
  }
  return (
      <>
        <div classname="tab">
          <button classname="tablinks" onclick="openCity(event, 'London')">London</button>
          <button classname="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
          <button classname="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
        </div>

        <div id="London" classname="tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="Paris" classname="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>

        <div id="Tokyo" classname="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </>
  )
}
export default  Header
