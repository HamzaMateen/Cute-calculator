import './Wrapper.css';

const Wrapper = ({ children }) => {
  return ( 
  <section className="wrapper">
    {children}
  </section>
  )
}

export default Wrapper;