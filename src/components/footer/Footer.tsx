import {LinkedinLogoIcon, InstagramLogoIcon, FacebookLogoIcon} from '@phosphor-icons/react'

function Footer() {
  const data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-[#213e60] text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">HealthUp | Copyright: {data}</p>
          <p className="text-lg">Acesse as redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogoIcon size={30} weight='bold'/>
            <InstagramLogoIcon size={30} weight='bold'/>
            <FacebookLogoIcon size={30} weight='bold'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer