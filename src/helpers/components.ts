export const getColor = (colorCode: number): string => {
  switch (colorCode) {
    case 0:
      return '#122FAA';
    case 1:
      return '#FFC618';
    case 2:
      return '#FF2B2B';
    case 3:
      return '#778899';
    default:
      return '#ffffff';
  }
};
