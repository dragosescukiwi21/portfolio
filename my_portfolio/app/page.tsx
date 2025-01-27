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
        Computer Science @ UBB, interested about AI/ML and occasionally a graphic designer.
        </p>
        
        <p>
        Currently studying mathematics and computer science at UBB, focusing on real-world applications of AI, aiming to contribute to the future by combining technical knowledge and creativity. {" "}
        </p>
        <p>
          Also freelancing as a {""}
          <a
            target="_blank"
            href="https://www.behance.net/drxgfx">
             graphic designer
          </a>
          , blending client work and personal projects with a passion for fashion and creativity.
        </p>
        
      </div>

      
    </section>
  );
}
