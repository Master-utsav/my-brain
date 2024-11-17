import { cn } from "@/lib/utils";

const Logo = ({theme , className} : {theme : string , className : string}) => {
  return (
    <div className={cn("capitalize w-16" , className)}>
      {theme === "dark" ? (
        <img
        src="/dark-mode-logo.png"
        alt="logo"
        loading="eager"
        className="object-cover "
        />
      ): 
      (
        <img
        src="/light-mode-logo.png"
        alt="logo"
        loading="eager"
        className="object-cover "
        />
      )}
    </div>
  )
}
export default Logo;
