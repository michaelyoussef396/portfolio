import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { abilities } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const FeatureCards = () => {
  // ref for the whole container (fades in on load)
  const containerRef = useRef(null)
  // refs for each card
  const cardsRef = useRef([])

  // reset on every render
  cardsRef.current = []

  useGSAP(() => {
    // 1) fade in the container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )

    // 2) animate each card in sequence as it scrolls into view
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (i + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      )
    })
  }, [])

  // helper to collect refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <div
      ref={containerRef}
      className="w-full padding-x-lg"
    >
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            ref={addToRefs}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-[var(--color-powder-blue)] text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-[var(--color-text-primary)] text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards
