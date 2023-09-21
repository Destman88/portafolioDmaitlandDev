export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const SpinLogo = (props) => (
  <svg
    id="Capa_3"
    data-name="Capa 3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    {...props}
  >
    <defs>
      <style>
        {
          "\n      .cls-1{font-size:68.1px;font-family:MontserratAlternates-Medium, Montserrat Alternates;font-weight:500;}.cls-2{fill:#fff;}.cls-3{fill:#040404;}.cls-4{fill:#c6c6c6;}.cls-5{fill:#202020;}.cls-6{fill:#a6a6a6;}.cls-7{fill:#030303;}.cls-8{fill:#fdfdfd;}.cls-9{fill:#4b555a;}.cls-10{fill:#e61325;}.cls-11{fill:#03b9ee;}.cls-12{fill:#00baf0;}.cls-13{fill:#f3620c;}.cls-14{fill:#a7a7a7;}.cls-15{fill:#0bbef1;}.cls-16{fill:#fdc53c;}.cls-17{fill:#cbcbcb;}\n    "
        }
      </style>
    </defs>
    <title>{"logo dmaitland"}</title>
    <text className="cls-1" transform="matrix(1, -0.04, 0.04, 1, 201.02, 63.8)">
      {"W"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.97, 0.25, -0.25, 0.97, 277.26, 62.61)"
    >
      {"e"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.89, 0.45, -0.45, 0.89, 315.1, 71.68)"
    >
      {"b"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.81, 0.59, -0.58, 0.81, 354.63, 92.63)"
    />
    <text
      className="cls-1"
      transform="matrix(0.69, 0.72, -0.72, 0.69, 368.99, 100.65)"
    >
      {"D"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.5, 0.86, -0.86, 0.5, 405.23, 139.14)"
    >
      {"e"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.33, 0.94, -0.94, 0.33, 424.81, 172.5)"
    >
      {"v"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.14, 0.99, -0.99, 0.14, 436.7, 205.19)"
    >
      {"e"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.02, 1, -1, -0.01, 441.83, 244.92)"
    >
      {"l"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.17, 0.99, -0.99, -0.17, 442.57, 264.61)"
    >
      {"o"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.38, 0.93, -0.93, -0.38, 436.28, 304.5)"
    >
      {"p"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.57, 0.82, -0.82, -0.57, 419.81, 344.88)"
    >
      {"e"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.7, 0.72, -0.72, -0.7, 396.92, 377.39)"
    >
      {"r"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.78, 0.63, -0.63, -0.78, 377.73, 396.71)"
    />
    <text
      className="cls-1"
      transform="matrix(-0.83, 0.55, -0.55, -0.83, 363.6, 408.18)"
    />
    <text
      className="cls-1"
      transform="matrix(-0.88, 0.47, -0.47, -0.88, 348.47, 418.24)"
    />
    <text
      className="cls-1"
      transform="matrix(-0.92, 0.39, -0.39, -0.92, 332.45, 426.84)"
    />
    <text
      className="cls-1"
      transform="matrix(-0.95, 0.3, -0.3, -0.95, 315.67, 433.87)"
    />
    <text
      className="cls-1"
      transform="matrix(-0.99, 0.12, -0.12, -0.99, 300.49, 440.43)"
    >
      {"U"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-1, -0.08, 0.08, -1, 249.48, 445.8)"
    >
      {"I"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.98, -0.22, 0.22, -0.98, 219.68, 443.18)"
    >
      {"/"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.92, -0.4, 0.4, -0.92, 198.02, 440.03)"
    >
      {"U"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.79, -0.61, 0.61, -0.79, 151.67, 419.65)"
    >
      {"X"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.69, -0.73, 0.73, -0.69, 117.22, 392.03)"
    />
    <text
      className="cls-1"
      transform="matrix(-0.55, -0.84, 0.84, -0.54, 104.58, 381.5)"
    >
      {"D"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.33, -0.94, 0.94, -0.33, 76.12, 336.93)"
    >
      {"e"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.15, -0.99, 0.99, -0.15, 63.14, 299.67)"
    >
      {"s"}
    </text>
    <text
      className="cls-1"
      transform="matrix(-0.02, -1, 1, -0.02, 58.56, 266.91)"
    >
      {"i"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.14, -0.99, 0.99, 0.14, 56.94, 249.56)"
    >
      {"g"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.36, -0.93, 0.93, 0.36, 62.81, 206.01)"
    >
      {"n"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.55, -0.83, 0.83, 0.55, 78.56, 165.22)"
    >
      {"e"}
    </text>
    <text
      className="cls-1"
      transform="matrix(0.69, -0.73, 0.73, 0.69, 100.85, 132.32)"
    >
      {"r"}
    </text>
    <path
      className="cls-2"
      d="M44.67,169.07c.14,0,.21.06.19.19a.22.22,0,0,1-.15,0q-.21-.1,0-.24Z"
    />
    <path
      className="cls-3"
      d="M363.71,400.61a5.87,5.87,0,0,1,4.3,6.61c-.21,1.68-.47,3.36-.8,5a3.88,3.88,0,0,0,.81,3.3q8,10.93,16,21.92c.4.55.81,1.09,1.16,1.67,2.11,3.39,1.5,6.86-1.72,9.26C380,451,376.49,453.45,373,456l-23.58,17.13a14.33,14.33,0,0,1-1.54,1,6.42,6.42,0,0,1-8.43-1.34,19.54,19.54,0,0,1-1.26-1.59c-5.34-7.36-10.7-14.71-16-22.09a4.18,4.18,0,0,0-3.44-2.06,31.28,31.28,0,0,1-4.68-.77,5.63,5.63,0,0,1-4.7-4.53,5.53,5.53,0,0,1,2.32-6.09q5.3-3.93,10.65-7.82l34.95-25.41a11.5,11.5,0,0,1,2.91-1.7A5.52,5.52,0,0,1,363.71,400.61Z"
    />
    <path
      className="cls-4"
      d="M382,443.25a3.7,3.7,0,0,1-1.67,2q-4.44,3.25-8.9,6.48l-24,17.43a16.07,16.07,0,0,1-1.54,1.05c-1.51.9-2.19.78-3.35-.59-.37-.43-.69-.89-1-1.35-5.57-7.68-11.17-15.33-16.68-23.06a5.09,5.09,0,0,0-3.9-2.27c-1.74-.18-3.46-.49-5.19-.77a4.37,4.37,0,0,1-1.29-.38,1.49,1.49,0,0,1-.45-2.3,6.07,6.07,0,0,1,1.15-1l45.23-32.87c.76-.56,1.51-1.27,2.58-.62s.77,1.53.64,2.43c-.24,1.61-.4,3.25-.79,4.84a5.34,5.34,0,0,0,1,4.77c2,2.62,3.89,5.27,5.82,7.92q5.58,7.67,11.14,15.35a17.13,17.13,0,0,1,1.07,1.73A1.6,1.6,0,0,1,382,443.25Z"
    />
    <path
      className="cls-5"
      d="M379.47,443a3.37,3.37,0,0,1-1.22,1.15l-9.88,7.16-21.79,15.87c-2.09,1.52-2.08,1.52-3.66-.64l-15.24-21c-.2-.27-.39-.55-.58-.83a1.07,1.07,0,0,1,.19-1.52c.34-.3.72-.55,1.08-.82l31.4-22.83c2.07-1.51,2.05-1.51,3.53.53l15.34,21.12C379,441.73,379.57,442.21,379.47,443Z"
    />
    <path
      className="cls-6"
      d="M345.51,419c1.52,1.89,1.48,1.83,3.32.53q4.74-3.36,9.4-6.83a3.67,3.67,0,0,1,2-.92,6.47,6.47,0,0,1-1.94,6.1,45.54,45.54,0,0,1-4.85,3.65c-2.39,1.77-4.81,3.5-7.23,5.24-2.73,2-5.48,3.93-8.2,5.91-3.14,2.28-6.36,4.46-9.35,6.92a6.62,6.62,0,0,1-6.78,1.12c-.31-.1-.69-.14-.75-.56s.23-.6.51-.8l5.73-4.15c1.82-1.32,3.64-2.64,5.44-4,1-.73,1-.77.09-1.67-.49-.49-.42-.82.12-1.21q3.63-2.62,7.21-5.27c1.59-1.17,3.16-2.34,4.73-3.52A5.34,5.34,0,0,0,345.51,419Z"
    />
    <path
      className="cls-7"
      d="M123.32,66.58a2.22,2.22,0,0,1,1.17-1.13c2.44-1.18,4.69-2.74,7.22-3.71A6.54,6.54,0,0,0,136,56.49,61.24,61.24,0,0,1,140,44.13a44.67,44.67,0,0,1,18.23-20.56c1.35-.82,2.72-1.6,4.1-2.36,1.13-.61,1.7-.49,2.24.56,3.86,7.52,6.57,15.34,6.44,24a55.79,55.79,0,0,1-2.86,16.1c-.63,2-1.22,4-1.9,6a3.74,3.74,0,0,0,.31,3.24c1.47,2.66,2.85,5.38,4.34,8a3.9,3.9,0,0,1,.36,3.38c-1.2,3.64-2.27,7.32-3.4,11-.51,1.67-.57,1.69-2.25,1.16-2.32-.73-4.64-1.43-6.94-2.18a2.23,2.23,0,0,0-2.67.78,32.79,32.79,0,0,0-5,6.36,19.89,19.89,0,0,1-2.71,4.27,25.68,25.68,0,0,1-6,4.88c-1.84,1.1-3.75,2.08-5.61,3.14-.58.33-1,.39-1.39-.29-2.4-4.49-4.85-9-5.29-14.17a13.27,13.27,0,0,1,.09-3.88,13.43,13.43,0,0,0-.07-5.54c-.22-1.11-.45-2.22-.58-3.34a1.48,1.48,0,0,0-1.27-1.49c-2.5-.68-5-1.49-7.44-2.25-1.54-.48-1.6-.6-1.12-2.15q1.71-5.58,3.43-11.15C123.13,67.13,123.28,66.7,123.32,66.58Z"
    />
    <path
      className="cls-8"
      d="M166.51,43.34c.66,3.52.05,7-.61,10.41a112.47,112.47,0,0,1-3.22,11.38,52.86,52.86,0,0,0-1.43,5.21c0,2.48-1.21,4.66-1.81,7-.71,2.72-1.69,5.36-2.46,8.07a2.86,2.86,0,0,1-1,1.73l-.07.06a3.16,3.16,0,0,1-1.67-.11c-2.54-.7-5.06-1.52-7.59-2.29a2.59,2.59,0,0,1-1.78-1.17c1.19-3.21,2.24-6.47,3.21-9.76.46-1.57,1-3.13,1.45-4.69.13-.46.43-1.13-.2-1.34s-.82.5-1,1c-1.11,3.26-2,6.59-3.11,9.85-.52,1.55-.71,3.18-1.22,4.73a1.46,1.46,0,0,1-1.44.13c-2.9-.72-5.71-1.69-8.54-2.61a2,2,0,0,1-1.06-.79,2.46,2.46,0,0,1,.11-1.81c1.35-4.6,2.76-9.18,4.15-13.76a8.32,8.32,0,0,1,.8-1.47q1.92-6.11,3.83-12.2a42.08,42.08,0,0,1,5.61-11.63,3.63,3.63,0,0,1,1.23-1.35,2.4,2.4,0,0,1,1.65.1c4.89,1.53,9.8,3,14.67,4.53A2.89,2.89,0,0,1,166.51,43.34Z"
    />
    <path
      className="cls-9"
      d="M144.67,83.56c3.42,1.34,7,2.21,10.5,3.32.26.08.51.21.77.31-1.77,1.85-3.56,3.67-5.27,5.56a12.39,12.39,0,0,1-2.28,1.94c-1.18-.27-2.29-.77-3.48-1-2.16-.77-4.36-1.42-6.57-2a19.88,19.88,0,0,0-3.31-1c-1-2.24-1.11-4.67-1.5-7a18.42,18.42,0,0,0-.7-3.44.22.22,0,0,1,.26-.21,75.36,75.36,0,0,0,11,3.3A.64.64,0,0,1,144.67,83.56Z"
    />
    <path
      className="cls-10"
      d="M166.51,43.34c-5.93-1.78-11.88-3.51-17.76-5.47a29.57,29.57,0,0,1,8.65-8.68c1.19-.84,2.47-1.57,3.72-2.34.6-.37,1-.22,1.35.44A37.4,37.4,0,0,1,166.61,43,1.24,1.24,0,0,1,166.51,43.34Z"
    />
    <path
      className="cls-11"
      d="M133.09,80l-.26.21c-2.36-.75-4.72-1.49-7.07-2.25-1.28-.42-1.36-.54-1-1.79.61-2,1.29-4.08,1.86-6.14a2.72,2.72,0,0,1,1.58-1.82c3.3-1.7,6.58-3.44,9.87-5.16-.89,3.82-2.24,7.52-3.31,11.29C134.24,76.23,133.65,78.11,133.09,80Z"
    />
    <path
      className="cls-12"
      d="M156,87.13l5-16.36a2.46,2.46,0,0,1,.26-.43l5.51,10.1a1.81,1.81,0,0,1,.19,1.47c-.71,2.32-1.43,4.64-2.1,7-.24.85-.73.83-1.42.61C161,88.69,158.48,87.91,156,87.13Z"
    />
    <path
      className="cls-13"
      d="M145.25,93.41c1.13.25,2.38.17,3.14,1.28-1.51,5.37-5.23,8.79-10,11.34-.56.3-1,.46-1.39-.26-1.67-3.29-3-6.67-2.93-10.46a14.94,14.94,0,0,1,.92-4.62c1.26-.61,2.27.12,3.33.62,0,2-.57,4.11.12,6.14.28.83.14,2,1.14,2.28s1.41-.76,2.07-1.26C143.4,97.15,144.17,95.17,145.25,93.41Z"
    />
    <path
      className="cls-14"
      d="M156.67,49.65a6.59,6.59,0,0,1,1.8,9,6.33,6.33,0,0,1-8.67,1.66,6.33,6.33,0,1,1,6.87-10.64Z"
    />
    <path
      className="cls-15"
      d="M144.67,83.56l-.57-.26a4.59,4.59,0,0,1,.08-2.67l3.75-11.95a6.15,6.15,0,0,1,.41-1.11c.25-.48.62-.82,1.23-.6a1,1,0,0,1,.7,1.19,12,12,0,0,1-.33,1.31c-1.17,3.83-2.37,7.66-3.52,11.5A4.28,4.28,0,0,1,144.67,83.56Z"
    />
    <path
      className="cls-16"
      d="M145.25,93.41c-.54,3.21-2.82,5.13-5.21,6.94a.72.72,0,0,1-1.23-.35c-1-2.85-1.82-5.71-.45-8.69A33.23,33.23,0,0,1,145.25,93.41Z"
    />
    <path
      className="cls-17"
      d="M151,58.55c-2.07-1.53-2.78-3.89-1.34-6a4.47,4.47,0,0,1,5.91-1.09c1.89,1.28,2.57,4.22,1.21,6C155.06,59.59,152.43,59.82,151,58.55Z"
    />
  </svg>
);

export const UpIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="0A0A30"
    {...props}
  >
    <style>
      {"\n    @keyframes slide-20{to{transform:translateY(-2px)}}\n  "}
    </style>
    <path
      fill="#0A0A30"
      d="M18.215 13.484a.857.857 0 11-1.098 1.317l-4.594-3.828L7.93 14.8a.857.857 0 11-1.097-1.317l5.131-4.276a.854.854 0 011.12 0l5.132 4.276z"
      style={{
        animation:
          "slide-20 1s infinite alternate both cubic-bezier(1,-.01,0,.98)",
      }}
    />
  </svg>
);