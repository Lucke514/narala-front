interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole?: string;
}

export function TestimonialCard({
  quote,
  authorName,
  authorRole,
}: TestimonialCardProps) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-3xl bg-pink-50 p-6 sm:p-8">
      <p className="text-xl text-gray-800">⭐⭐⭐⭐⭐</p>
      <p className="text-base italic leading-relaxed text-gray-700">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500" />
        <div>
          <p className="font-semibold text-gray-800">{authorName}</p>
          {authorRole && (
            <p className="text-sm text-gray-500">{authorRole}</p>
          )}
        </div>
      </div>
    </div>
  );
}
