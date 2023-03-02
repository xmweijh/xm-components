export const ICarouselProps = {
  autoplay: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  initial: {
    type: Number,
    default: 0,
  },
  hasDot: {
    type: Boolean,
    default: true,
  },
  hasDirectors: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Array as any,
    default: () => {
      return [];
    },
  },
};
