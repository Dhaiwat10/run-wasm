import React from 'react'

function Logo({ ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="440"
      height="124"
      fill="none"
      viewBox="0 0 440 124"
      {...rest}
    >
      <path
        fill="#000"
        d="M124 62c0-34.242-27.758-62-62-62C27.758 0 0 27.758 0 62c0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62z"
      ></path>
      <path
        fill="#fff"
        d="M23 82.446V47.567c0-4.577 1.735-8.72 4.772-11.553C30.809 32.96 34.929 31 39.484 31s8.677 1.962 11.496 4.796c3.037 3.052 4.772 6.976 4.772 11.554v11.335h-10.41V47.567c0-1.744-.65-3.052-1.736-4.142-1.084-1.307-2.603-1.961-4.12-1.961-1.519 0-3.037.654-4.122 1.743-1.301 1.09-1.952 2.616-1.952 4.36v34.879H23zm55.093-39.893V77.65c0 .453-.017.903-.05 1.347a6.047 6.047 0 001.568 2.795c1.085 1.09 2.603 1.744 4.122 1.744 1.517 0 3.036-.654 4.12-1.744 1.085-1.09 1.736-2.616 1.736-4.142V42.553H100V77.65c0 4.578-1.735 8.502-4.772 11.554C92.408 92.256 88.288 94 83.733 94c-4.29 0-8-1.546-10.954-4.274C69.825 92.454 66.114 94 61.825 94c-4.554 0-8.676-1.745-11.495-4.796-3.037-3.052-4.772-6.976-4.772-11.554V66.315H55.97V77.65c0 1.526.65 3.052 1.736 4.142 1.083 1.09 2.602 1.744 4.12 1.744 1.519 0 3.037-.654 4.121-1.744a6.039 6.039 0 001.573-2.813 16.24 16.24 0 01-.054-1.329V42.553h10.628z"
      ></path>
      <path
        fill="#000"
        d="M159.527 48.212c1.262 0 3.064.248 5.409.744l-1.299 7.646c-1.622-.46-3.443-.69-5.463-.69-1.009 0-1.929.124-2.759.372-.793.247-1.478.583-2.055 1.008a8.23 8.23 0 00-1.461 1.487 7.269 7.269 0 00-.974 1.806 10.471 10.471 0 00-.54 2.017 12.08 12.08 0 00-.163 2.018V78H142V48.212h8.222v4.354h.541c.902-1.522 1.966-2.619 3.192-3.291 1.262-.708 3.119-1.063 5.572-1.063zm30.837 0h8.222V78h-8.222v-4.354h-.433a10.23 10.23 0 01-3.949 3.24c-1.55.743-3.606 1.114-6.166 1.114-1.767 0-3.372-.195-4.815-.584-1.406-.424-2.56-.938-3.462-1.54a9.288 9.288 0 01-2.326-2.389c-.649-.956-1.136-1.84-1.46-2.655-.325-.85-.577-1.823-.757-2.92-.181-1.098-.289-1.965-.325-2.602a41.451 41.451 0 01-.054-2.23V48.212h8.168v15.292c0 .744.018 1.346.054 1.806.036.46.162 1.098.379 1.912.253.814.613 1.469 1.082 1.964.505.46 1.244.885 2.218 1.274 1.01.39 2.235.585 3.678.585 1.334 0 2.506-.16 3.516-.478 1.046-.354 1.857-.797 2.434-1.328a5.498 5.498 0 001.353-1.965c.36-.778.594-1.522.703-2.23.108-.743.162-1.575.162-2.495V48.212zm29.888 0c1.768 0 3.355.213 4.761.638 1.406.389 2.56.903 3.462 1.54a8.532 8.532 0 012.326 2.336c.685.955 1.19 1.858 1.515 2.708.324.814.576 1.77.757 2.867.18 1.062.288 1.93.325 2.602.035.637.053 1.362.053 2.177V78h-8.167V62.708c0-.53-.019-.938-.055-1.22 0-.32-.054-.762-.162-1.328-.072-.602-.198-1.098-.379-1.487-.144-.39-.397-.833-.757-1.328a4.05 4.05 0 00-1.298-1.168c-.505-.283-1.172-.513-2.002-.69-.793-.212-1.713-.319-2.759-.319-1.37 0-2.56.177-3.57.53-1.009.32-1.803.745-2.38 1.276a6.122 6.122 0 00-1.406 1.964 9.463 9.463 0 00-.649 2.284 15.927 15.927 0 00-.163 2.389V78h-8.222V48.212h8.222v4.354h.379c.722-.92 1.497-1.68 2.326-2.283.829-.637 1.911-1.132 3.246-1.487 1.334-.389 2.867-.584 4.597-.584zm42.277 18.425h-26.182V58.62h26.182v8.017zm47.119-18.425h8.33L308.404 78H297.26l-5.517-17.681L286.171 78h-11.089l-9.575-29.788h8.331l7.032 21.93 6.87-21.93h8.005l6.87 21.93 7.033-21.93zm31.886 4.354h.325v-4.353h8.222V78h-8.222v-4.142h-.271C339.389 76.62 335.656 78 330.392 78c-1.551 0-2.976-.16-4.274-.478-1.298-.318-2.416-.743-3.354-1.274a18.787 18.787 0 01-2.488-1.858 10.105 10.105 0 01-1.785-2.336c-.41-.8-.789-1.615-1.136-2.443a15.354 15.354 0 01-.758-2.496 45.672 45.672 0 01-.324-2.177 32.913 32.913 0 01-.055-1.858c0-.708.037-1.434.109-2.177.072-.744.217-1.628.433-2.655.252-1.027.577-1.982.973-2.868.397-.884.956-1.77 1.677-2.654a12.087 12.087 0 012.542-2.337c.975-.636 2.182-1.15 3.625-1.54 1.442-.424 3.047-.637 4.815-.637 5.156 0 8.871 1.452 11.142 4.354zm-8.763 18.478c1.731 0 3.174-.194 4.328-.584 1.154-.389 2.038-.955 2.651-1.699.613-.778 1.027-1.61 1.244-2.495.252-.885.378-1.947.378-3.186 0-1.097-.126-2.071-.378-2.92a7.75 7.75 0 00-1.244-2.496c-.578-.814-1.461-1.434-2.651-1.859-1.154-.46-2.597-.69-4.328-.69-1.478 0-2.776.212-3.894.637-1.118.425-1.984.938-2.597 1.54a6.783 6.783 0 00-1.406 2.018c-.361.779-.596 1.468-.703 2.07a13.327 13.327 0 000 3.399c.107.567.342 1.257.703 2.071a7.548 7.548 0 001.406 2.07c.613.567 1.479 1.063 2.597 1.487 1.118.425 2.416.638 3.894.638zm35.173-11.097c1.011.142 1.786.265 2.326.372.761.106 1.518.23 2.273.372.973.176 1.731.353 2.271.53.693.189 1.378.401 2.056.638.83.283 1.461.584 1.894.902.468.284.973.655 1.514 1.115.577.425 1.01.885 1.298 1.38a7.13 7.13 0 01.703 1.753 7.05 7.05 0 01.325 2.177c0 1.451-.216 2.708-.649 3.77-.433 1.026-1.046 1.876-1.84 2.549-.757.637-1.766 1.15-3.029 1.54a23.478 23.478 0 01-4.057.743c-1.442.142-3.155.212-5.138.212-6.888 0-11.558-1.203-14.011-3.61a6.196 6.196 0 01-1.461-2.23c-.324-.886-.504-1.558-.54-2.018a26.18 26.18 0 01-.054-1.858v-.585h8.438v.266c0 1.274.559 2.212 1.677 2.814 1.154.566 3.065.85 5.734.85 4.327 0 6.491-.779 6.491-2.337 0-.424-.126-.796-.378-1.115a2.607 2.607 0 00-.866-.796c-.324-.212-.793-.39-1.406-.53-.55-.164-1.11-.288-1.677-.373a32.98 32.98 0 00-1.894-.212c-.432-.058-.864-.11-1.298-.16a69.74 69.74 0 01-4.868-.796 26.677 26.677 0 01-3.841-1.115c-1.226-.496-2.217-1.044-2.975-1.646a6.936 6.936 0 01-1.785-2.284c-.433-.92-.649-1.964-.649-3.133 0-.636.054-1.238.162-1.804a7.074 7.074 0 01.595-1.806 6.881 6.881 0 011.082-1.699c.469-.53 1.064-1.027 1.785-1.487a11.21 11.21 0 012.543-1.22c.973-.355 2.127-.62 3.462-.797 1.334-.213 2.812-.319 4.435-.319 2.416 0 4.544.212 6.383.637 1.875.39 3.354.92 4.436 1.593 1.082.637 1.966 1.416 2.651 2.337.684.92 1.135 1.822 1.352 2.708.252.849.378 1.77.378 2.76v.266h-8.33v-.265c0-2.372-2.29-3.558-6.87-3.558-1.082 0-2.02.088-2.813.265-.757.177-1.334.408-1.731.69-.36.249-.631.514-.811.797a1.56 1.56 0 00-.216.797c0 .708.414 1.274 1.244 1.699.829.39 2.488.76 4.977 1.115l.702.106zm58.857-11.735c1.767 0 3.354.213 4.761.638 1.442.389 2.614.903 3.515 1.54a8.518 8.518 0 012.326 2.336c.649.955 1.136 1.858 1.461 2.708.325.814.577 1.77.757 2.867.181 1.062.289 1.93.324 2.602.037.637.055 1.362.055 2.177V78h-8.168V63.08c0-.496-.018-.885-.054-1.168 0-.284-.054-.744-.163-1.38-.072-.638-.198-1.151-.378-1.54-.144-.39-.397-.85-.757-1.381-.361-.567-.794-.992-1.299-1.274-.505-.319-1.172-.585-2.002-.797-.793-.248-1.713-.372-2.758-.372-1.335 0-2.488.177-3.462.53-.974.32-1.731.745-2.272 1.276-.505.496-.902 1.15-1.19 1.964-.289.814-.469 1.558-.541 2.23a23.438 23.438 0 00-.108 2.443v-.106V78h-8.168V63.08a9.75 9.75 0 00-.055-1.168c0-.284-.054-.744-.162-1.38-.072-.638-.198-1.151-.378-1.54-.145-.39-.397-.85-.758-1.381-.36-.567-.793-.992-1.298-1.274-.505-.319-1.172-.585-2.001-.797-.794-.248-1.713-.372-2.759-.372-1.335 0-2.489.177-3.462.53-.974.32-1.731.745-2.272 1.276-.505.496-.902 1.15-1.19 1.964-.289.814-.469 1.558-.541 2.23a23.407 23.407 0 00-.109 2.443V78h-8.167V48.425h8.167v4.142h.379c1.082-1.417 2.398-2.496 3.949-3.24 1.551-.743 3.606-1.115 6.167-1.115 4.76 0 8.186 1.47 10.278 4.407v-.053h.378c.433-.566.848-1.044 1.244-1.433.433-.425.974-.832 1.623-1.221a8.42 8.42 0 012.164-.903c.83-.248 1.821-.442 2.975-.584 1.154-.142 2.471-.213 3.949-.213z"
      ></path>
    </svg>
  )
}

export default Logo