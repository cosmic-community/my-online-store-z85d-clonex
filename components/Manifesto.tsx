export default function Manifesto() {
  return (
    <section className="border-y border-line bg-concrete grain-overlay">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="meta text-signal mb-8">the manifesto</p>
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tightest leading-tight text-bone uppercase">
          Curation over catalog.
          <br />
          Culture over commerce.
          <br />
          <span className="text-signal">Community over customer.</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-static leading-relaxed">
          Every item you find here is treated as an artifact — hand-picked, numbered,
          and rare. We don't sell clothes. We archive a scene.
        </p>
      </div>
    </section>
  )
}