function Technologies () {

  // const colors = ["yellow", "red", "blue", "purple", "orange", "magenta", "gray"]

  // estilos en linea desde un Objeto
  const ulStyles = {
    // color: colors[Math.floor(Math.random() * colors.length)],
    color: "darkblue",
    textDecoration: "underline",
    fontWeight: "bold"
  }

  return (
    <section className="container">
        <h2 style={{color: "blue"}}>Tecnologias aprendidas</h2>
        {/* estilos en linea directamente en la etiqueta. Solo cuando son pocos estilos */}

        <ul style={ulStyles}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>DOM</li>
          <li>Testing</li>
        </ul>

      </section>
  )

}

export default Technologies