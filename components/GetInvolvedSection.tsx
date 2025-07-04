export default function GetInvolvedSection({ items }: { items: string[] }) {
  return (
    <section id="impact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make an Impact? Get Involved
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((title, i) => (
            <div
              key={i}
              className={`text-left flex flex-col items-start justify-start gap-2 ${i !== items.length - 1 ? 'border-r' : ''}`}
            >
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              <div className="w-2/3">
                <h3 className="text-lg text-secondary">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 