import {svg, html} from 'lit';

export const rect = svg`<rect width="10" height="10"></rect>`;
export const addIcon = svg`<path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>`;
export const closeIcon = svg`<path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>`;
export const deleteIcon = svg`<path d="M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>`;
export const employeeIcon = svg`<path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>`;
export const engFlagIcon = svg`   <path fill="#012169" d="M0 0h640v480H0z"/>
<path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
<path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/>
<path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
<path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>`;
export const trFlagIcon = svg` <g fill-rule="evenodd">
<path fill="#e30a17" d="M0 0h640v480H0z"/>
<path fill="#fff" d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9"/>
<path fill="#e30a17" d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"/>
<path fill="#fff" d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"/>
</g>`;
export const userIcon = svg`<path d="M7.5 6.5C7.5 8.981 9.519 11 12 11C14.481 11 16.5 8.981 16.5 6.5C16.5 4.019 14.481 2 12 2C9.519 2 7.5 4.019 7.5 6.5ZM20 21H21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H20Z"/>`;
export const gridIcon = svg`<path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z"/>`;
export const tableIcon = svg`<path fill="currentColor" d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>`;
export const languageIcon = svg`<path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>`;

export const ingLogo = svg`
  <path d="M62 78H16C7 78 0 71 0 62V16C0 7 7 0 16 0h46c9 0 16 7 16 16v46c0 9-7 16-16 16z" style="fill:#ff6200"/>
  <path d="m76 68-2-1h-1l1 3 1 1 1-2v-1m-11 9v-7l-2 1-2 1 1 3v2l1 1 2-1m-20-6v-2l-2-2-1-1-1 3 2 3 1 3 1-4m26 2c-1-1 1-3-1-3l-2-1v3l1 4 3-2-1-1zm-2-28-3-2v-1l-3-2v-5c0 2 2 2 2 2 2 0 2-1 3-2l1-1 1-1h1l-9-1-2 2 1 3v5l2 1 1 2 4 2 1-2zm-2 6-4-1v1l4 2v-2zm-7-24 1 2h4c3-2-2-3-3-3h-3l1 1zm7-4 5 4 3-2-1-5-2-1c-1-1-3 0-4 1l-1 3zm-13 3h-2l-3 1-1 3h1l3-1 2-3zm-2 8-2-2h-8c0 2 2 3 2 3l3 2 2-1v3l-1 3-3 2v3l2-1 2-2 2-1v-7l1-2zm-3 17-2-1-2 1 1 2 2-1 1-1zm-6-26 2-2h1c-1-3-2-3-3-3l-2-1c-2 0-4 1-4 3v3l3 3 3-3zm26 24 9 2v2l-9-2v3l3 1 6 3v2l-10-5-2 2-4-2-4-1v-3l2-3h2v-2l-1-1h-9l-1 2c0 2 2 1 3 0v2c0 2 2 2 2 2l-1 2v1l-6 2-2 1-2-1h-2l-11 5v-2l11-6v-2l-7 1-5 2-1-2 6-2 7-1-1-1c0-2-2-4-4-6l-1-3h2v-3l-1-3 1-3-2-1-2-1-1-5 1-4 3-2 3-1 5 2 2 4h3l5 1 8-2c0-3 3-5 5-5h4l4 5 1 4-1 3-3 2v6l-1 3 2-1c0 4-1 3-2 5l-2 4-2 1v1M52 74l-1-1-3-1v3l2 3h3l-1-2v-2zm-5-15 1 4h1l2-2v4l3 1 1-2 2 2h3v-3l3 2 1-2 1-4c-3-2-6-2-9-2s-6 0-9 2zm12 12-4 2v5h3l1-3v-4zM27 20l-1 3 1 5-3 2v5l2-1 3-3 2-1v-3l-1-2v-6l-3 1m4 22-6 2-4 2 1 3v4l4-4 5-4v-3m-6 30 1-2 4-4-2-2-2 2-2 1 1 1v4m12-7-2-1-1 2 1 4 1 1 3 2-2-5v-3m3-55 6 4 4 2 2-4 3 1v4l2-1 5-1c2-1 3-4 5-4l5 2h3l2-1v-1l-8-5-4 3-1-3h-2l-2 6h-2V9s2-2 1-3l-3 1-3 2-1-1-3-1-1 4-6-5-8 3-4 5-2 3 3 1 2-3c2-1 6-3 7-5zM22 54v2l1 5v3l1 2 1-1 2-4-1-4v-5l-4 2zm10-17v-3h-4l-4 2v6l2-1 4-3 2-1zm-3 40-1 1h-1l-2-5 6-2 1 2-3 4" style="fill:#fff"/>
`;

export const svgIcon = (icon) => {
  const isFlagIcon = icon === engFlagIcon || icon === trFlagIcon;
  const viewBox = isFlagIcon
    ? '0 0 640 480'
    : icon === ingLogo
    ? '0 0 77.7 77.7'
    : '0 0 24 24';
  return html`<svg width="24" height="24" viewBox="${viewBox}">${icon}</svg>`;
};
