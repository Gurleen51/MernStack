const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer className="footer">
        copyright reserved by Gurleen @ <span>{date}</span>
    </footer>
  )
}

export default Footer