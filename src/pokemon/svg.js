import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const PokeballSVG = styled.svg`
  position: absolute;
  margin-left: calc((100% - 183px) / 2);
`

export const Pokeball = ({ color }) => (
  <PokeballSVG width="183" height="183" viewBox="0 0 183 183" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.2">
      <path
        d="M182.394 99H135.068C131.503 120.005 113.218 136 91.197 136C69.1764 136 50.8916 120.005 47.3264 99H0C3.81509 146.026 43.1882 183 91.197 183C139.206 183 178.579 146.026 182.394 99ZM182.307 83H134.886C130.919 62.4891 112.867 47 91.197 47C69.5272 47 51.4751 62.4891 47.5079 83H0.086618C4.37455 36.451 43.529 0 91.197 0C138.865 0 178.02 36.451 182.307 83ZM116.697 91.5C116.697 105.583 105.28 117 91.197 117C77.1138 117 65.697 105.583 65.697 91.5C65.697 77.4167 77.1138 66 91.197 66C105.28 66 116.697 77.4167 116.697 91.5Z"
        fill={lighten(0.2, color)}
      />
    </g>
  </PokeballSVG>
)

const OrnamentSVG = styled.svg`
  position: absolute;
  margin-left: -60px;
  margin-top: -60px;
`

export const Ornament = ({ color }) => (
  <OrnamentSVG width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3">
      <rect x="139.02" width="143.924" height="143.924" rx="24" transform="rotate(75 139.02 0)" fill="url(#paint0_linear)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear" x1="187.394" y1="51.2874" x2="360.852" y2="35.6488" gradientUnits="userSpaceOnUse">
        <stop stopColor={lighten(0.2, color)} />
        <stop offset="0.796391" stopColor={lighten(0.2, color)}  stopOpacity="0"/>
      </linearGradient>
    </defs>
  </OrnamentSVG>
)