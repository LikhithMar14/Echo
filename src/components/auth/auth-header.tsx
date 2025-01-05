interface HeaderProps {
    label: string;
    title: string;
}

const AuthHeader = ({
    title,
    label
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-1 items-center justify-center">
       <h1 className="text-3xl bg-gradient-to-b from-orange-400 to-orange-700 bg-clip-text text-transparent font-black tracking-tighter">{title}</h1>
       <p className="text-muted-foreground text-sm">
        {label}
       </p>
    </div>
  )
}

export default AuthHeader;