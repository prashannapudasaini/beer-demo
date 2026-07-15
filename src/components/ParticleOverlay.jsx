export default function ParticleOverlay() {
  return (
    <>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(5,8,22,0)_20%,rgba(5,8,22,0.95)_100%)] z-[2] pointer-events-none"></div>
      <div className="particles-bg fixed inset-0 z-[2] pointer-events-none"></div>
    </>
  );
}
