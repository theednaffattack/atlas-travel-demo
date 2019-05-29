import React, { PureComponent } from "react";
import posed from "react-pose";
import { value, spring } from "popmotion";
import debounce from "lodash/debounce";

const VELOCITY_THRESHOLD = 600;
const DISTANCE_PERCENTILE_THRESHOLD = 0.3;

interface MotionProps {
  from: number;
  to: number;
  velocity: number;
  offset: number;
}

interface PopSlideCarouselProps {
  children: any;
  className: string;
  slideIndex: number;
  style: any;
  duration: number;
  onDragStart: any;
  onDragEnd: any;
  onTrainsitionEnd: any;
  onSlideChange: any;
  heading: React.FC;
}

interface PopSlideCarouselState {
  root: any | null;
  offset: number;
  width: number;
}

const Draggable = posed.div({
  draggable: "x",
  rest: {
    x: ({ offset }: MotionProps) => {
      return -offset;
    },
    transition: { ease: "easeOut", duration: 500 }
  },
  dragEnd: {
    transition: ({ from, to, velocity, offset }: MotionProps) => {
      return spring({ from, to: -offset, velocity });
    }
  }
});

const draggableStyle = {
  display: "flex",
  height: "100%",
  flexWrap: "nowrap"
};

function childrenBox(root: any, index: number) {
  const rootWidth = root.clientWidth;

  const el = root.children[index];
  return {
    offset: el.offsetLeft - (rootWidth - el.offsetWidth) / 2,
    width: el.offsetWidth
  };
}

export default class PopSlideCarousel extends PureComponent<
  PopSlideCarouselProps,
  PopSlideCarouselState
> {
  static defaultProps = {
    duration: 3000,
    onDragStart() {},
    onDragEnd() {},
    onTransitionEnd() {}
  };

  static getDerivedStateFromProps(
    { heading, slideIndex }: PopSlideCarouselProps,
    { root }: any
  ) {
    return root ? childrenBox(root, slideIndex) : null;
  }

  constructor(props: PopSlideCarouselProps) {
    super(props);
    this.adjustCurrentBox = debounce(this.adjustCurrentBox, 250);
  }

  state = {
    root: null,
    offset: 0,
    width: 0
  };

  x: any = value(0);
  preventClick = false;

  componentDidMount() {
    window.addEventListener("resize", this.adjustCurrentBox);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.adjustCurrentBox);
  }

  adjustCurrentBox = () => {
    const { slideIndex } = this.props;
    const { root } = this.state;
    this.setState(childrenBox(root, slideIndex));
  };

  goToNextSlide = () => {
    this.goToSlide(this.props.slideIndex + 1);
  };
  goToPreviousSlide = () => {
    this.goToSlide(this.props.slideIndex - 1);
  };

  goToSlide = (newSlideIndex: number) => {
    const { children } = this.props;
    if (newSlideIndex >= 0 && newSlideIndex < children.length) {
      this.props.onSlideChange({}, newSlideIndex);
    }
  };

  onDragStart = e => {
    this.preventClick = false;
    this.props.onDragStart();
  };

  onDragEnd = e => {
    const { offset, width } = this.state;
    const start = -offset;
    const distance = this.x.get() - start;
    const velocity = this.x.getVelocity();

    if (distance !== 0) {
      // prevents click from firing in onClickCapture
      this.preventClick = true;

      const threshold = DISTANCE_PERCENTILE_THRESHOLD * width;

      if (distance < -threshold || velocity < -VELOCITY_THRESHOLD)
        this.goToNextSlide();
      else if (distance > threshold || velocity > VELOCITY_THRESHOLD)
        this.goToPreviousSlide();
    }

    this.props.onDragEnd();
  };

  onClickCapture = e => {
    if (this.preventClick) {
      e.stopPropagation();
    }
  };

  registerRootElement = root => {
    if (root && !this.state.root) {
      const { slideIndex } = this.props;
      this.setState({
        root,
        ...childrenBox(root, slideIndex)
      });
    }
  };

  render() {
    const { children, className, style } = this.props;
    const { offset } = this.state;
    const valuesMap = { x: this.x };

    return (
      <div className={className} style={style}>
        <Draggable
          ref={this.registerRootElement}
          values={valuesMap}
          offset={offset}
          style={draggableStyle}
          onClickCapture={this.onClickCapture}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          onPoseComplete={this.props.onTransitionEnd}
          poseKey={offset}
          pose={"rest"}
        >
          {children}
        </Draggable>
      </div>
    );
  }
}
