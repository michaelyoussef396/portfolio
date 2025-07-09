// AnimatedCounter.jsx
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { counterItems } from '../constants'

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => {
          // Set up an intersection observer for this counter
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.5,
          })

          return (
            <div
              key={index}
              ref={ref}
              className="rounded-lg p-10 flex flex-col justify-center bg-[var(--color-black-100)]"
            >
              <div className="text-[var(--color-bone)] text-5xl font-bold mb-2">
                { /* If it's in view, animate up; otherwise show 0 */ }
                {inView ? (
                  <CountUp
                    end={item.value}
                    suffix={item.suffix}
                    duration={2.5}
                  />
                ) : (
                  `0${item.suffix}`
                )}
              </div>
              <div className="text-[var(--color-bone)] text-lg">{item.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnimatedCounter
