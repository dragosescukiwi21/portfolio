import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/50 -mx-6 sm:-mx-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">
          Sarmasan Dragos-Cosmin
        </h1>

        <p className="mb-6 text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
          COMPUTER SCIENCE @ UBB | AI/ML
        </p>

        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Currently studying mathematics and computer science at Babeș-Bolyai University, involved in real-world applications of AI and aiming to contribute to the future by combining technical knowledge and creativity.
          </p>
          <p>
            Broad expertise across the full technical stack. Leveraging a comprehensive understanding of end-to-end ecosystems to deliver real-world positive impact solutions.
          </p>
          <p>
            Knowledge in Python, C/C++, and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
