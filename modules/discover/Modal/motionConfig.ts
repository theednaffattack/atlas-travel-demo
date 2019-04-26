const zoomCardTransition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

export const frameMotionProps = {
  init: {
    // opacity: 0,
    position: "static",
    width: "100%",
    height: "100%",
    zoomCardTransition,
    flip: true
  },
  zoom: {
    position: "fixed",
    width: "auto",
    height: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zoomCardTransition,
    flip: true
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

const zoomImageTransition = {
  duration: 2000,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

export const smoothImageProps = {
  init: {
    position: "static",
    width: "100%",
    height: "100%",
    transition,
    flip: true
  },
  zoom: {
    position: "fixed",
    width: "auto",
    height: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true
    // zIndex: 9999
  }
};

export const zoomImageProps = {
  init: {
    position: "static",
    transition: {
      duration: 4000,
      ease: [0.08, 0.69, 0.2, 0.99]
    }
    // width: "100%",
    // height: "100%",
    // flip: true
  },
  zoom: {
    position: "fixed",
    width: "auto",
    height: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: {
      duration: 4000,
      ease: [0.08, 0.69, 0.2, 0.99]
    }
    // flip: true
  }
};

export const contentMotionProps = {
  init: {
    opacity: 0,
    y: 200
  },
  enter: {
    opacity: 1,
    y: 0,
    delayChildren: 200,
    staggerChildren: 100
  },
  exit: {
    opacity: 0,
    y: -10,
    staggerChildren: 100
  }
};

export const posedFlexMotionProps = {
  init: {
    opacity: 0,
    width: "100%",
    height: "100%",
    // position: "static",
    y: 200
  },
  enter: {
    opacity: 1,
    transition,
    height: "auto",
    width: "auto",
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    y: 0,
    delayChildren: 200,
    staggerChildren: 100,
    flip: true
  },
  exit: {
    opacity: 0,
    y: -10,
    // flip: true,
    staggerChildren: 100
  }
};

export const laneMotionProps = {
  init: {
    opacity: 0,
    y: 50
  },
  enter: {
    opacity: 1,
    y: 0,
    delayChildren: 100,
    staggerChildren: 100
  },
  exit: {
    opacity: 0,
    y: 10,
    staggerChildren: 100
  }
};

export const bitemMotionProps = {
  init: { opacity: 0 },
  enter: { opacity: 1, delayChildren: 2000, staggerChildren: 1500 },
  exit: { opacity: 0 }
};

export const fitemMotionProps = {
  init: { opacity: 0 },
  enter: { opacity: 1, delayChildren: 200, staggerChildren: 150 },
  exit: { opacity: 0 }
};

export const itemMotionProps = {
  init: { opacity: 0 },
  enter: { opacity: 1, delayChildren: 2000, staggerChildren: 1500 },
  exit: { opacity: 0 }
};
