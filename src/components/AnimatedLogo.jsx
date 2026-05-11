export default function AnimatedLogo() {
  return (
    <div className="logo-interactive relative h-24 w-24 sm:h-28 sm:w-28">
      <div className="logo-glow" />
      <div className="logo-core" />
      <div className="logo-orbit logo-orbit--one">
        <span className="logo-satellite" />
      </div>
      <div className="logo-orbit logo-orbit--two">
        <span className="logo-satellite" />
      </div>
    </div>
  )
}
