type OrnamentProps = {
  className?: string;
};

export function GoldDivider({ className = "" }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 32"
      aria-hidden="true"
    >
      <path
        d="M8 16 H82"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M158 16 H232"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M108 16
           C113 9 118 9 120 16
           C122 9 127 9 132 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M120 5
           C115 10 115 14 120 16
           C125 14 125 10 120 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <circle
        cx="120"
        cy="16"
        r="2.5"
        fill="currentColor"
      />
    </svg>
  );
}

export function FloralDivider({ className = "" }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 54"
      aria-hidden="true"
    >
      <path
        d="M8 27 H100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M200 27 H292"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M150 27
           C142 18 132 17 126 27
           C132 37 142 36 150 27Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M150 27
           C158 18 168 17 174 27
           C168 37 158 36 150 27Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M150 27
           C150 17 145 10 138 8
           C137 17 142 24 150 27Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M150 27
           C150 17 155 10 162 8
           C163 17 158 24 150 27Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="150"
        cy="27"
        r="3"
        fill="currentColor"
      />
    </svg>
  );
}

export function DiyaOrnament({ className = "" }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 70 100"
      aria-hidden="true"
    >
      <path
        d="M35 8
           C30 18 30 25 35 31
           C40 25 40 18 35 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M18 48
           C20 60 26 68 35 70
           C44 68 50 60 52 48
           C42 52 28 52 18 48Z"
        fill="currentColor"
      />

      <path
        d="M25 70
           C27 80 43 80 45 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M35 31 V43"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CornerFloral({
  className = "",
  flip = false,
}: OrnamentProps & { flip?: boolean }) {
  return (
    <svg
      className={`${className}${flip ? " traditional-ornament--flipped" : ""}`}
      viewBox="0 0 180 180"
      aria-hidden="true"
    >
      <path
        d="M10 170
           C35 145 45 115 45 85
           C45 55 62 30 92 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M35 142
           C55 142 70 132 77 116
           C55 115 42 123 35 142Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M47 111
           C67 109 80 98 84 82
           C64 84 52 94 47 111Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M55 78
           C73 76 86 65 89 50
           C71 52 59 61 55 78Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M84 42
           C92 48 103 49 114 44
           C106 35 96 32 84 42Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="45"
        cy="85"
        r="3"
        fill="currentColor"
      />
    </svg>
  );
}

export function GaneshaOrnament({
  className = "",
}: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      <path
        d="M60 20
           C48 8 31 14 30 30
           C29 42 37 49 46 49
           C37 56 32 67 35 80
           C38 94 50 101 60 101
           C70 101 82 94 85 80
           C88 67 83 56 74 49
           C83 49 91 42 90 30
           C89 14 72 8 60 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M60 39
           C52 47 52 60 60 68
           C68 60 68 47 60 39Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M60 68
           C51 68 45 74 46 82
           C47 89 53 92 60 91"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M60 68
           C69 68 75 74 74 82
           C73 89 67 92 60 91"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="48"
        cy="34"
        r="2.5"
        fill="currentColor"
      />

      <circle
        cx="72"
        cy="34"
        r="2.5"
        fill="currentColor"
      />
    </svg>
  );
}

export function BananaTreeOrnament({ className = "" }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 180 420" aria-hidden="true">
      <path d="M91 408 C82 318 89 219 95 119" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M95 120 C64 88 34 82 10 96 C40 119 67 129 95 126Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M96 128 C128 89 158 82 174 97 C147 121 123 130 96 134Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M92 169 C58 137 29 138 14 159 C43 176 68 181 93 177Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M96 178 C126 144 154 142 169 163 C143 181 120 187 96 184Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M90 217 C62 192 39 194 25 211 C45 226 66 231 91 227Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M98 227 C121 201 145 201 159 218 C140 233 120 239 97 235Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M78 250 C88 267 104 274 119 266 C111 284 93 291 77 280Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M84 288 C89 305 100 315 111 312" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <g fill="currentColor">
        <ellipse cx="115" cy="276" rx="5" ry="12" transform="rotate(24 115 276)" />
        <ellipse cx="123" cy="282" rx="5" ry="12" transform="rotate(28 123 282)" />
        <ellipse cx="130" cy="290" rx="5" ry="12" transform="rotate(30 130 290)" />
      </g>
      <path d="M67 408 H116 M72 387 H112 M77 364 H108" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function TeluguWeddingRitualOrnament({ className = "" }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 260 130" aria-hidden="true">
      <path d="M22 112 H238" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M44 112 C48 91 66 82 85 87 C99 91 105 102 106 112" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="72" cy="49" r="17" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M56 43 C60 27 82 25 89 41 M55 66 C61 75 80 78 89 66" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 87 C70 74 84 74 94 88 M51 91 C64 101 82 103 101 91" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M154 112 C154 93 162 83 178 86 C199 90 211 99 214 112" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="184" cy="48" r="17" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M168 44 C174 25 196 28 201 44 M168 66 C177 76 194 76 201 65" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M165 87 C177 76 192 77 202 90 M158 92 C174 103 196 103 212 91" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M101 72 C117 62 141 62 157 72" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M107 72 C116 89 141 90 153 72" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M112 52 C122 44 137 44 147 52" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M116 52 C120 60 139 60 144 52" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="130" cy="33" r="4" fill="currentColor" />
      <path d="M130 23 V9 M120 18 L112 10 M140 18 L148 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
