import Link from 'next/link'
import Image from 'next/image'
function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
          <Image src="/logo@2x.png" width={117} height={32}/>
        </a>
      </Link>
    </div>
  )
}

export default Logo
