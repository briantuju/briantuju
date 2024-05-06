import Container from '../misc/Container'

const Footer = () => {
  return (
    <footer className="w-full py-10">
      <Container>
        <p className="text-center flex flex-col md:flex-row gap-3 items-center justify-center">
          <span>Copyright &copy; Brian Tuju, {new Date().getFullYear()}</span>

          {/* <span>All rights reserved.</span> */}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
