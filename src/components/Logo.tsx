import Image from "next/image";
import logoMedaileVip from "@/images/logos/logo-medaile-vip.png";

export function Logo(props: React.ComponentPropsWithoutRef<typeof Image>) {
  const { src, alt, ...restProps } = props;

  return (
    <Image
      src={logoMedaileVip}
      alt="Medaile.vip" 
      height={40}
      {...restProps}
    />
  )
}
