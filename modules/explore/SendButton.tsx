<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="108px"
  height="108px"
>
  <defs>
    <filter
      filterUnits="userSpaceOnUse"
      id="Filter_0"
      x="0px"
      y="0px"
      width="108px"
      height="108px"
    >
      <feOffset in="SourceAlpha" dx="0" dy="20" />
      <feGaussianBlur result="blurOut" stdDeviation="5.196" />
      <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
      <feComposite operator="atop" in="floodOut" in2="blurOut" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.1" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <g filter="url(#Filter_0)">
    <path
      fill-rule="evenodd"
      fill="rgb(255, 255, 255)"
      d="M53.328,6.328 C68.240,6.328 80.328,18.416 80.328,33.328 C80.328,48.240 68.240,60.328 53.328,60.328 C38.417,60.328 26.328,48.240 26.328,33.328 C26.328,18.416 38.417,6.328 53.328,6.328 Z"
    />
  </g>
  <path
    fill-rule="evenodd"
    fill="rgb(234, 73, 115)"
    d="M60.812,34.115 L60.395,34.390 L60.311,34.342 L49.217,40.663 L48.456,39.363 L48.329,39.330 L48.363,39.205 L48.331,39.150 L48.387,39.119 L49.982,33.301 L48.427,27.572 L48.331,27.517 L49.217,26.004 L60.311,32.325 L60.395,32.277 L60.812,32.552 L60.812,34.115 ZM50.610,28.815 L51.599,32.459 L57.005,32.459 L50.610,28.815 ZM51.618,34.208 L50.621,37.846 L57.005,34.208 L51.618,34.208 Z"
  />
</svg>;
