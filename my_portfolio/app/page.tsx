import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
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
