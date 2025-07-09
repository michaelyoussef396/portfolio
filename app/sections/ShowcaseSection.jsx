import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const SoleRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [SoleRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper' ref={SoleRef}>
            <div className='image-wrapper'>
              <img src="images/project1.png" alt="Sole Media Agency" />
            </div>
            <div className='text-content'>
              <h2 className="text-[var(--color-bone)]">Sole Media Agency</h2>
              <p className="text-[var(--color-bone)]">Co‑Founder &amp; Lead Designer/Developer. I build and design custom sites, handle SEO, email marketing, automations, and ad management while consistently helping businesses thrive online.</p>
            </div>
            <Button
              text="View Project"
              link="https://solemedia.com.au/"
              className="mt-5"
            />

          </div>

          {/* RIGHT */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={libraryRef}>
              <div className='image-wrapper'>
                <img src="images/project2.jpg" alt="Mould and Restoration Co" />
              </div>
              <h2 className="text-[var(--color-bone)]">Mould & Restoration Co.</h2>
              <p className="text-[var(--color-bone)]">
                Designed a fully SEO‑optimized site. I handled on‑page SEO, design, development, and ensured strong online visibility for their Launch.
              </p>
              <Button
                text="View Project"
                link="https://mouldandrestoration.com.au"
                className="mt-5"
              />
            </div>

            <div className='project' ref={ycDirectoryRef}>
              <div className='image-wrapper'>
                <img src="images/project3.png" alt="Eden International" />
              </div>
              <h2 className="text-[var(--color-bone)]">Eden International</h2>
              <p className="text-[var(--color-bone)]">
                Built a scalable Next.js site for a student/migration‑visa agency with 12 service pages, on‑page SEO to drive organic traffic.
              </p>
              <Button
                text="View Project"
                link="https://edeninternational.com.au"
                className="mt-5"
              />
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default ShowcaseSection
