export function DecorativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right decorative element */}
      <div className="absolute top-10 right-[10%] w-64 h-64 bg-[#FC81A0]/5 rounded-full blur-3xl"></div>

      {/* Bottom left decorative element */}
      <div className="absolute bottom-10 left-[5%] w-72 h-72 bg-[#FC81A0]/5 rounded-full blur-3xl"></div>

      {/* Middle decorative element */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FC81A0]/3 rounded-full blur-3xl"></div>

      {/* Floating dots */}
      <div className="absolute top-20 left-[20%] w-2 h-2 bg-[#FC81A0]/40 rounded-full"></div>
      <div className="absolute top-40 left-[80%] w-3 h-3 bg-[#FC81A0]/30 rounded-full"></div>
      <div className="absolute top-[60%] left-[15%] w-4 h-4 bg-[#FC81A0]/20 rounded-full"></div>
      <div className="absolute top-[75%] left-[75%] w-2 h-2 bg-[#FC81A0]/40 rounded-full"></div>

      {/* Diagonal lines */}
      <div className="absolute top-[10%] right-[15%] w-32 h-[1px] bg-[#FC81A0]/20 rotate-45"></div>
      <div className="absolute bottom-[20%] left-[10%] w-40 h-[1px] bg-[#FC81A0]/20 -rotate-45"></div>
    </div>
  )
}
