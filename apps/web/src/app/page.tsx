import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 px-6 sm:px-12 py-16">
      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-6 text-center">
        PSOMA
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-10">
        Una app para sentir sin que te molesten.
        <br />
        En PSOMA no tienes que hablar. Solo sentir.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/modo"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          Entrar como anónimo
        </Link>
        <Link
          href="/sobre"
          className="border border-neutral-300 dark:border-neutral-700 px-6 py-3 rounded-full font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          Leer más sobre PSOMA
        </Link>
      </div>
    </div>
  );
}


