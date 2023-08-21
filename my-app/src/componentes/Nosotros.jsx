import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Voluptate eligendi consequatur repellendus molestiae libero, ex sequi aperiam est cupiditate repudiandae omnis nam, reprehenderit 
          aspernatur saepe nobis. Dolor nobis similique aperiam!</p>
    </div>
  )
}

export default Nosotros