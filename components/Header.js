import Image from "next/image";

function Header() {
  return (
    <header className=''>
      <h1>Este é o Header</h1>
      <Image
        src="https://links.papareact.com/ua6" width={200} height={100}
      />
    </header>
  )
}

export default Header
