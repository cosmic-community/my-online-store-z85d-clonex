export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center grain-overlay scanlines relative">
      <div className="text-center">
        <p className="meta text-signal animate-pulse">calibrating archive...</p>
        <div className="mt-4 w-32 h-0.5 bg-line mx-auto overflow-hidden">
          <div className="h-full w-1/3 bg-signal animate-pulse" />
        </div>
      </div>
    </div>
  )
}