function Footer() {
  return (
      <>
          <ul className="nav">
              <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Active</a>
              </li>
          </ul>
            
            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
            <div id="demo" className="collapse"></div>
      </>
  )
}
export default  Footer
