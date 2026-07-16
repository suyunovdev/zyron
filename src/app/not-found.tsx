import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">Z</span>
        </div>
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-secondary text-white font-medium px-8 py-3 rounded-xl hover:bg-secondary/90 transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
