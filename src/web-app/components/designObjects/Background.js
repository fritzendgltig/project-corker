import React from 'react';

export default class BackgroundImage extends React.Component {
    render() {

        let appBackground =
            {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                zIndex: "-1",
            };

        let leftSideLines =
            {
                width: "19%",
                position: "absolute",
                left: "0",
            }

        let rightSideLines =
            {
                width: "13%",
                position: "absolute",
                right: "0",
            }

        let backgroundLines =
            {
                fill: "none",
                stroke: "#e5004b",
                strokeMiterlimit: "14",
            }

        return (
            <div style={appBackground}>
                <svg style={leftSideLines} viewBox="0 0 350.39232 230.71234">
                    <line style={backgroundLines} x1="312" y1="0.35879" x2="176" y2="132.35879"/>
                    <line style={backgroundLines} y1="84.35879" x2="163" y2="84.35879"/>
                    <line style={backgroundLines} x1="143" y1="5.35879" x2="75" y2="84.35879"/>
                    <line style={backgroundLines} x1="110" y1="84.35879" x2="55" y2="132.35879"/>
                    <line style={backgroundLines} x1="72" y1="117.35879" x2="100" y2="176.35879"/>
                    <line style={backgroundLines} x1="6" y1="104.35879" x2="55" y2="132.35879"/>
                    <path style={backgroundLines} d="M.5,154.5l32.60715,28.42675,6.16258,5.3725"
                          transform="translate(6.5 5.85879)"/>
                    <line style={backgroundLines} x1="126" y1="169.35879" x2="66" y2="184.35879"/>
                    <line style={backgroundLines} x1="4" y1="199.35879" x2="67" y2="191.35879"/>
                    <line style={backgroundLines} x1="60" y1="159.35879" x2="67" y2="191.35879"/>
                    <line style={backgroundLines} x1="36" y1="122.35879" x2="7" y2="160.35879"/>
                    <line style={backgroundLines} x1="60" y1="159.35879" x2="80" y2="134.35879"/>
                    <line style={backgroundLines} x1="176" y1="132.35879" x2="85" y2="106.35879"/>
                    <line style={backgroundLines} x1="163" y1="84.35879" x2="176" y2="132.35879"/>
                    <line style={backgroundLines} x1="127" y1="24.35879" x2="156" y2="24.35879"/>
                    <line style={backgroundLines} x1="156" y1="24.35879" x2="158" y2="53.35879"/>
                    <line style={backgroundLines} x1="116" y1="37.35879" x2="198" y2="68.35879"/>
                    <line style={backgroundLines} x1="199" y1="110.35879" x2="198" y2="68.35879"/>
                    <line style={backgroundLines} x1="126" y1="169.35879" x2="145" y2="123.35879"/>
                    <path style={backgroundLines} d="M34.23665,188.76335-1.5,224.5" transform="translate(6.5 5.85879)"/>
                    <line style={backgroundLines} x1="14" y1="5.35879" x2="98" y2="57.35879"/>
                    <path style={backgroundLines} d="M57,30C37.55687,36.05451,18.3991,42.96712-.5,50.5"
                          transform="translate(6.5 5.85879)"/>
                    <line style={backgroundLines} x1="223" y1="5.35879" x2="254" y2="56.35879"/>
                    <line style={backgroundLines} x1="188" y1="64.35879" x2="230" y2="16.35879"/>
                    <line style={backgroundLines} x1="223" y1="86.35879" x2="300" y2="86.35879"/>
                    <line style={backgroundLines} x1="350" y1="5.35879" x2="286" y2="86.35879"/>
                    <line style={backgroundLines} x1="349" y1="61.35879" x2="326" y2="36.35879"/>
                    <line style={backgroundLines} x1="349" y1="61.35879" x2="300" y2="86.35879"/>
                </svg>

                <svg style={rightSideLines} viewBox="0 0 225.58951 351.71698">
                    <line style={backgroundLines} x1="224.98389" y1="313.42285" x2="95.36989" y2="175.14699"/>
                    <line style={backgroundLines} x1="146.42454" y1="0.0087" x2="143.58879" y2="162.98403"/>
                    <line style={backgroundLines} x1="222.92478" y1="144.36144" x2="145.11975" y2="74.99735"/>
                    <line style={backgroundLines} x1="144.51084" y1="109.99205" x2="97.47496" y2="54.16531"/>
                    <line style={backgroundLines} x1="112.17693" y1="71.42369" x2="52.69874" y2="98.39302"/>
                    <line style={backgroundLines} x1="126.32318" y1="5.65985" x2="97.47496" y2="54.16531"/>
                    <path style={backgroundLines} d="M1770.92955-5.25745l-28.98972,32.10767-5.47891,6.06818"
                          transform="translate(-1700.61528 10.9429)"/>
                    <line style={backgroundLines} x1="59.24535" y1="124.51086" x2="45.29146" y2="64.25899"/>
                    <line style={backgroundLines} x1="31.37236" y1="2.00741" x2="38.27512" y2="65.13705"/>
                    <line style={backgroundLines} x1="70.39206" y1="58.69483" x2="38.27512" y2="65.13705"/>
                    <line style={backgroundLines} x1="107.80399" y1="35.34216" x2="70.31426" y2="5.68545"/>
                    <line style={backgroundLines} x1="70.39206" y1="58.69483" x2="95.04033" y2="79.12673"/>
                    <line style={backgroundLines} x1="95.36989" y1="175.14699" x2="122.94911" y2="84.6131"/>
                    <line style={backgroundLines} x1="143.58879" y1="162.98403" x2="95.36989" y2="175.14699"/>
                    <line style={backgroundLines} x1="204.20601" y1="128.03331" x2="203.70149" y2="157.02892"/>
                    <line style={backgroundLines} x1="203.70149" y1="157.02892" x2="174.67109" y2="158.5241"/>
                    <line style={backgroundLines} x1="191.39935" y1="116.80881" x2="158.97747" y2="198.25709"/>
                    <line style={backgroundLines} x1="116.96643" y1="198.52625" x2="158.97747" y2="198.25709"/>
                    <line style={backgroundLines} x1="59.24535" y1="124.51086" x2="104.90784" y2="144.30826"/>
                    <path style={backgroundLines} d="M1736.08446,27.878l-35.10953-36.353"
                          transform="translate(-1700.61528 10.9429)"/>
                    <line style={backgroundLines} x1="225.16902" y1="15.38096" x2="171.71553" y2="98.46359"/>
                    <path style={backgroundLines}
                          d="M1894.42776,53.4c-5.71533-19.54551-12.29361-38.82065-19.49656-57.84794"
                          transform="translate(-1700.61528 10.9429)"/>
                    <line style={backgroundLines} x1="221.533" y1="224.34933" x2="170.00141" y2="254.45738"/>
                    <line style={backgroundLines} x1="163.15083" y1="188.32819" x2="210.41289" y2="231.1569"/>
                    <line style={backgroundLines} x1="140.54526" y1="222.94015" x2="139.20567" y2="299.9285"/>
                    <line style={backgroundLines} x1="219.32355" y1="351.33011" x2="139.44923" y2="285.93062"/>
                    <line style={backgroundLines} x1="163.34942" y1="349.35602" x2="188.74578" y2="326.79443"/>
                    <line style={backgroundLines} x1="163.34942" y1="349.35602" x2="139.20567" y2="299.9285"/>
                </svg>
            </div>
        );
    }
}