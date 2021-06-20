import { useState } from "react";

const QuizType = ({ height, width, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <svg
      width={width}
      height={height}
      style={{ cursor: "pointer" }}
      onPointerOver={() => setIsHovering(true)}
      onPointerOut={() => setIsHovering(false)}
      onClick={onClick}
      viewBox="0 0 618 766"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="72"
        y="72"
        width="500"
        height="650"
        rx="15"
        fill="#696969"
        fill-opacity={isHovering ? "0" : "0.60"}
      />
      <rect
        x="48.5"
        y="50.5"
        width="495"
        height="645"
        rx="12.5"
        fill={isHovering ? "#e6cf21" : "#FFF082"}
        stroke="#363636"
        stroke-width="10"
      />
      <path
        d="M461.212 409.192H435.913V248.705L460.79 205.615C464.86 198.567 465.94 190.357 463.833 182.493C461.726 174.632 456.684 168.062 449.638 163.993C442.59 159.926 434.375 158.84 426.517 160.95C418.656 163.056 412.086 168.099 408.016 175.147L395.054 197.599V155.088C395.054 148.884 390.008 143.838 383.804 143.838H215.774C209.569 143.838 204.524 148.884 204.524 155.088V224.9H183.351C172.495 224.9 163.664 233.731 163.664 244.588V409.192H138.365C136.813 409.192 135.553 410.452 135.553 412.005V423.069C135.553 433.841 144.316 442.602 155.085 442.602H444.486C455.258 442.602 464.021 433.841 464.021 423.069V412.005C464.024 410.449 462.764 409.192 461.212 409.192Z"
        fill="#696969"
        fill-opacity="0.66"
      />
      <path
        d="M421.851 400.755V233.338C421.851 224.017 414.296 216.463 404.976 216.463H172.099C162.778 216.463 155.224 224.017 155.224 233.338V400.755H421.851Z"
        fill="#0089EF"
      />
      <path
        d="M402.088 400.754V246.942C402.088 243.834 399.57 241.317 396.462 241.317H180.616C177.508 241.317 174.991 243.834 174.991 246.942V400.754H402.088Z"
        fill="#6DC9F7"
      />
      <path
        d="M396.459 241.317H388.021C391.129 241.317 393.646 243.834 393.646 246.942V400.752H402.085V246.942C402.085 243.834 399.567 241.317 396.459 241.317Z"
        fill="white"
      />
      <path
        d="M127.115 400.755V411.816C127.115 421.05 134.602 428.537 143.836 428.537H433.236C442.472 428.537 449.959 421.05 449.959 411.816V400.755H127.115Z"
        fill="#0089EF"
      />
      <path
        d="M127.115 400.755V411.816C127.115 421.05 134.602 428.537 143.836 428.537H433.236C442.472 428.537 449.959 421.05 449.959 411.816V400.755H127.115Z"
        fill="#0089EF"
      />
      <path
        d="M234.957 400.755V406.355C234.957 411.029 238.745 414.817 243.42 414.817H333.653C338.328 414.817 342.119 411.026 342.119 406.355V400.755H234.957Z"
        fill="#6DC9F7"
      />
      <path
        d="M380.993 168.192H196.085V400.754H380.993V168.192Z"
        fill="#D4FBFF"
      />
      <path
        d="M380.993 143.838V168.192H196.088V143.838C196.088 139.178 199.865 135.401 204.525 135.401H372.558C377.216 135.401 380.993 139.178 380.993 143.838Z"
        fill="#0089EF"
      />
      <path
        d="M352.423 246.329L362.312 284.514L400.327 273.984L447.107 192.959C454.743 179.732 450.212 162.817 436.985 155.178C423.758 147.542 406.843 152.073 399.205 165.301L352.423 246.329Z"
        fill="#FFD7E5"
      />
      <path
        d="M313.918 358.488L312.557 370.692L322.445 363.41L423.603 188.203C424.962 185.849 424.155 182.839 421.801 181.478C419.447 180.12 416.437 180.927 415.076 183.281L313.918 358.488Z"
        fill="#FA3571"
      />
      <path
        d="M174.991 359.931C176.544 359.931 177.804 358.671 177.804 357.119V329.93C177.804 328.378 176.544 327.118 174.991 327.118C173.439 327.118 172.179 328.378 172.179 329.93V357.119C172.179 358.671 173.439 359.931 174.991 359.931Z"
        fill="#3A2C60"
      />
      <path
        d="M449.962 397.939H424.663V237.455L449.543 194.365C457.941 179.816 452.94 161.144 438.388 152.746C431.34 148.673 423.13 147.59 415.267 149.703C407.406 151.809 400.836 156.852 396.766 163.897L383.804 186.349V143.838C383.804 137.634 378.758 132.588 372.554 132.588H204.524C198.319 132.588 193.274 137.634 193.274 143.838V213.65H172.101C161.245 213.65 152.414 222.482 152.414 233.338V397.939H127.115C125.563 397.939 124.303 399.199 124.303 400.752V411.816C124.303 422.588 133.066 431.349 143.836 431.349H433.236C444.008 431.349 452.771 422.588 452.771 411.816V400.752C452.774 399.199 451.514 397.939 449.962 397.939ZM419.038 397.939H404.897V271.692L419.038 247.201V397.939ZM383.804 397.939V281.479L399.272 277.196V397.939H383.804ZM393.611 180.618L399.728 204.24L389.679 221.646L383.562 198.024L393.611 180.618ZM379.548 204.974L385.665 228.596L375.616 246.003L369.499 222.38L379.548 204.974ZM365.486 229.33L371.603 252.952L361.554 270.359L355.437 246.737L365.486 229.33ZM417.511 184.687C418.096 183.68 419.387 183.334 420.394 183.914C421.401 184.496 421.747 185.79 421.164 186.797L320.303 361.495L316.064 364.617L316.649 359.386L417.511 184.687ZM412.527 247.226L389.012 253.74L399.061 236.333L422.576 229.819L412.527 247.226ZM426.59 222.87L403.075 229.384L413.124 211.977L436.639 205.463L426.59 222.87ZM384.999 260.687L408.514 254.173L398.462 271.579L374.947 278.093L384.999 260.687ZM416.724 155.133C423.133 153.415 429.83 154.295 435.576 157.617C441.322 160.936 445.434 166.291 447.152 172.7C448.87 179.11 447.987 185.804 444.671 191.553L440.652 198.511L417.137 205.024L426.039 189.609C428.17 185.916 426.899 181.174 423.206 179.045C421.415 178.008 419.331 177.735 417.337 178.272C415.343 178.806 413.675 180.086 412.64 181.875L403.741 197.29L397.624 173.668L401.64 166.71C404.956 160.964 410.314 156.852 416.724 155.133ZM349.986 244.925C349.618 245.564 349.516 246.323 349.699 247.035L357.538 277.309L311.483 357.082C311.289 357.42 311.168 357.791 311.126 358.176L309.764 370.38C309.641 371.491 310.184 372.568 311.154 373.128C311.59 373.378 312.076 373.504 312.56 373.504C313.148 373.504 313.733 373.322 314.228 372.956L324.117 365.674C324.429 365.444 324.69 365.151 324.884 364.817L370.942 285.043L378.184 283.038V397.939H198.899V171.004H378.181V196.092L349.986 244.925ZM198.899 143.838C198.899 140.736 201.421 138.213 204.524 138.213H372.556C375.659 138.213 378.181 140.736 378.181 143.838V165.379H198.899V143.838ZM158.036 233.338C158.036 225.584 164.344 219.275 172.098 219.275H193.271V238.504H180.614C175.963 238.504 172.177 242.29 172.177 246.942V316.807C172.177 318.36 173.437 319.62 174.989 319.62C176.542 319.62 177.802 318.36 177.802 316.807V246.942C177.802 245.392 179.065 244.129 180.614 244.129H193.271V397.939H177.802V369.305C177.802 367.753 176.542 366.493 174.989 366.493C173.437 366.493 172.177 367.753 172.177 369.305V397.939H158.036V233.338ZM447.149 411.816C447.149 419.486 440.908 425.724 433.239 425.724H143.836C136.166 425.724 129.928 419.486 129.928 411.816V403.564H447.149V411.816Z"
        fill="#3A2C60"
      />
      <path
        d="M290.993 367.879H215.775C214.223 367.879 212.963 369.139 212.963 370.692C212.963 372.244 214.223 373.504 215.775 373.504H290.993C292.545 373.504 293.805 372.244 293.805 370.692C293.805 369.139 292.545 367.879 290.993 367.879Z"
        fill="#3A2C60"
      />
      <path
        d="M299.43 339.754H215.775C214.223 339.754 212.963 341.014 212.963 342.567C212.963 344.119 214.223 345.379 215.775 345.379H299.43C300.983 345.379 302.243 344.119 302.243 342.567C302.243 341.014 300.983 339.754 299.43 339.754Z"
        fill="#3A2C60"
      />
      <path
        d="M316.305 311.629H215.775C214.223 311.629 212.963 312.889 212.963 314.442C212.963 315.994 214.223 317.254 215.775 317.254H316.305C317.858 317.254 319.118 315.994 319.118 314.442C319.118 312.889 317.858 311.629 316.305 311.629Z"
        fill="#3A2C60"
      />
      <path
        d="M335.993 283.504H215.775C214.223 283.504 212.963 284.764 212.963 286.317C212.963 287.869 214.223 289.129 215.775 289.129H335.996C337.548 289.129 338.808 287.869 338.808 286.317C338.808 284.764 337.545 283.504 335.993 283.504Z"
        fill="#3A2C60"
      />
      <path
        d="M215.775 261.004H333.18C334.733 261.004 335.993 259.744 335.993 258.192C335.993 256.639 334.733 255.379 333.18 255.379H215.775C214.223 255.379 212.963 256.639 212.963 258.192C212.963 259.744 214.22 261.004 215.775 261.004Z"
        fill="#3A2C60"
      />
      <path
        d="M341.618 227.254H215.775C214.223 227.254 212.963 228.514 212.963 230.067C212.963 231.619 214.223 232.879 215.775 232.879H341.621C343.173 232.879 344.433 231.619 344.433 230.067C344.433 228.514 343.17 227.254 341.618 227.254Z"
        fill="#3A2C60"
      />
      <path
        d="M355.68 199.129H215.775C214.223 199.129 212.963 200.389 212.963 201.942C212.963 203.494 214.223 204.754 215.775 204.754H355.683C357.236 204.754 358.496 203.494 358.496 201.942C358.496 200.389 357.233 199.129 355.68 199.129Z"
        fill="#3A2C60"
      />
      <path
        d="M256.09 157.422C259.196 157.422 261.715 154.904 261.715 151.797C261.715 148.691 259.196 146.172 256.09 146.172C252.983 146.172 250.465 148.691 250.465 151.797C250.465 154.904 252.983 157.422 256.09 157.422Z"
        fill="white"
      />
      <path
        d="M235.652 157.422C238.759 157.422 241.277 154.904 241.277 151.797C241.277 148.691 238.759 146.172 235.652 146.172C232.546 146.172 230.027 148.691 230.027 151.797C230.027 154.904 232.546 157.422 235.652 157.422Z"
        fill="#D4FBFF"
      />
      <path
        d="M215.221 157.422C218.327 157.422 220.846 154.904 220.846 151.797C220.846 148.691 218.327 146.172 215.221 146.172C212.114 146.172 209.596 148.691 209.596 151.797C209.596 154.904 212.114 157.422 215.221 157.422Z"
        fill="#FA759E"
      />
      <path
        d="M238.738 563.406C238.738 569.344 237.625 575.008 235.398 580.398C233.211 585.789 229.91 590.516 225.496 594.578L233.582 604.188L212.137 618.016L207.098 604.188C205.613 604.5 204.109 604.734 202.586 604.891C201.102 605.047 199.598 605.125 198.074 605.125C194.324 605.125 190.73 604.656 187.293 603.719C183.855 602.781 180.633 601.473 177.625 599.793C174.617 598.074 171.883 596.004 169.422 593.582C166.961 591.16 164.832 588.465 163.035 585.496C161.277 582.527 159.91 579.324 158.934 575.887C157.996 572.41 157.527 568.797 157.527 565.047C157.527 561.336 157.977 557.742 158.875 554.266C159.812 550.75 161.121 547.449 162.801 544.363C164.52 541.277 166.57 538.465 168.953 535.926C171.375 533.348 174.07 531.141 177.039 529.305C180.008 527.43 183.211 525.984 186.648 524.969C190.086 523.953 193.699 523.445 197.488 523.445C203.543 523.445 209.09 524.363 214.129 526.199C219.207 528.035 223.562 530.672 227.195 534.109C230.828 537.547 233.66 541.746 235.691 546.707C237.723 551.629 238.738 557.195 238.738 563.406ZM210.262 565.047C210.262 563.25 209.988 561.512 209.441 559.832C208.934 558.113 208.172 556.609 207.156 555.32C206.141 553.992 204.871 552.938 203.348 552.156C201.824 551.375 200.066 550.984 198.074 550.984C196.121 550.984 194.363 551.336 192.801 552.039C191.238 552.703 189.891 553.641 188.758 554.852C187.664 556.062 186.805 557.488 186.18 559.129C185.594 560.77 185.301 562.547 185.301 564.461C185.301 566.258 185.555 568.035 186.062 569.793C186.609 571.512 187.391 573.074 188.406 574.48C189.422 575.848 190.691 576.961 192.215 577.82C193.738 578.68 195.496 579.109 197.488 579.109C199.402 579.109 201.141 578.738 202.703 577.996C204.305 577.215 205.652 576.18 206.746 574.891C207.879 573.602 208.738 572.117 209.324 570.438C209.949 568.719 210.262 566.922 210.262 565.047ZM321.201 524.5C319.443 538.25 317.939 551.941 316.689 565.574C315.439 579.168 314.248 592.859 313.115 606.648L289.091 608.406L290.146 599.383C289.365 600.281 288.447 601.062 287.392 601.727C286.377 602.391 285.283 602.938 284.111 603.367C282.939 603.758 281.728 604.051 280.478 604.246C279.228 604.402 278.037 604.461 276.904 604.422C274.248 604.383 271.748 603.875 269.404 602.898C267.06 601.883 264.912 600.555 262.959 598.914C261.005 597.234 259.248 595.301 257.685 593.113C256.123 590.887 254.795 588.562 253.701 586.141C252.646 583.68 251.826 581.18 251.24 578.641C250.693 576.102 250.42 573.641 250.42 571.258C250.42 567.742 250.478 564.109 250.595 560.359C250.752 556.57 251.005 552.781 251.357 548.992C251.709 545.203 252.158 541.453 252.705 537.742C253.291 534.031 254.013 530.477 254.873 527.078C259.638 527.312 264.423 527.527 269.228 527.723C274.033 527.918 278.818 527.977 283.584 527.898C282.685 531.297 281.787 534.715 280.888 538.152C280.029 541.551 279.248 544.988 278.545 548.465C277.841 551.902 277.275 555.359 276.845 558.836C276.416 562.312 276.201 565.828 276.201 569.383C276.201 570.203 276.24 571.375 276.318 572.898C276.396 574.422 276.591 575.926 276.904 577.41C277.255 578.895 277.763 580.203 278.427 581.336C279.13 582.43 280.107 582.977 281.357 582.977C282.841 582.977 284.17 582.352 285.341 581.102C286.513 579.812 287.548 578.094 288.447 575.945C289.345 573.797 290.107 571.316 290.732 568.504C291.396 565.691 291.943 562.762 292.373 559.715C292.841 556.629 293.213 553.523 293.486 550.398C293.759 547.273 293.955 544.344 294.072 541.609C294.228 538.836 294.326 536.355 294.365 534.168C294.443 531.98 294.482 530.281 294.482 529.07C294.482 528.289 294.463 527.527 294.423 526.785C294.384 526.043 294.326 525.281 294.248 524.5C296.787 524.578 299.306 524.637 301.806 524.676C304.306 524.715 306.826 524.734 309.365 524.734C311.318 524.734 313.271 524.734 315.224 524.734C317.216 524.695 319.209 524.617 321.201 524.5ZM363.702 524.5L359.601 604.305L334.874 605.594L332.53 526.141L363.702 524.5ZM431.868 545.008L405.032 578.875H429.759L430.579 603.719L378.313 605.828L375.97 582.859L406.555 545.359L376.204 547.469L375.97 523.914H430.813L431.868 545.008Z"
        fill="#161616"
      />
    </svg>
  );
};

export default QuizType;
