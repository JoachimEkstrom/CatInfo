import Link from 'next/link'

const Navbar = () => (

    <div>
        <ul>
        <li><Link href="/CatPerson"><a>Checkout the CatPerson!</a></Link></li>
        <li><Link href="/"><a>Checkout the Main page!</a></Link></li>
        </ul>
    </div>

)

export default Navbar