export const Container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: .5,
    }
  },
  slideUp: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 1,
    }
  },
  slideLeft: {
    x: "100%",
    transition: {
      duration: 1,
      ease: [ 0.56, 0.49, 0.17, 0.81 ]
    }
  },
  slideRight: {
    x: "-100%",
    transition: {
      duration: 1,
      ease: [ 0.56, 0.49, 0.17, 0.81 ]
    }
  },
  zoomOut: {
    scale: [1.5, 1],
    transition: {
      duration: 1,
      ease: [ 0.18, 0.25, 0.17, 1.00 ],
    }
  }
}

export const Item = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {duration: 0.5}},
  slideUp: {y: 0, transition: {duration: 0.5}}
}