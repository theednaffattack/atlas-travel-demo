export const view = [2000, 200]; // ViewBox: Width, Height
export const trbl = [0, 0, 0, 0]; // Margins: Top, Right, Bottom, Left

export const dims = [
  view[0] - trbl[1] - trbl[3], // Adjusted dimensions width
  view[1] - trbl[0] - trbl[2] // Adjusted dimensions height
];
