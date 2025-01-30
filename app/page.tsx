import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Sarmasan Dragos-Cosmin
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Computer Science @ UBB, interested in AI/ML and occasionally a {""}
          <a
            target="_blank"
            href="https://www.behance.net/drxgfx">
             graphic designer
          </a>.
        </p>
        
        <p>
        Currently studying mathematics and computer science at UBB Cluj, involved in real-world applications of AI and aiming to contribute to the future by combining technical knowledge and creativity. {" "}
        </p>
        <p>
        Freelancing as a graphic designer, primarily focused in brand identity
        </p>
        
      </div>

      
    </section>
  );
}
