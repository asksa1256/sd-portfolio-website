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
  }
}

export const Item = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {duration: 0.5}},
  slideUp: {y: 0, transition: {duration: 0.5}}
}