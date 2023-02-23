import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        --brand-1:      #4529e6;
        --brand-2:      #5126ea;
        --brand-3:      #b0a6f0;
        --brand-4:      #edeafd;
        --black-1:      #000000;
        --grey-0:       #0b0d0d;
        --grey-1:       #212529;    
        --grey-2:       #495057;
        --grey-3:       #868e96; 
        --grey-4:       #adb5bd;
        --grey-5:       #ced4da;
        --grey-6:       #dee2e6;
        --grey-7:       #e9ecef;
        --grey-8:       #f1f3f5;
        --grey-9:       #f8f9fa;
        --grey-10:      #fdfdfd;
        --whiteFixed:   #ffffff;
        --alert-1:      #cd2b31;
        --alert-2:      #fdd8d8;
        --alert-3:      #ffe5e5;
        --sucess-1:     #18794e;
        --sucess-2:     #ccebd7;
        --sucess-3:     #ddf3f4;
        --random-1:     #e34d8c;
        --random-2:     #c04277;
        --random-3:     #7d2a4d;
        --random-4:     #7000ff;
        --random-5:     #6200e3;
        --random-6:     #36007d;
        --random-7:     #349974;
        --random-8:     #2a7d5f;
        --random-9:     #153d2e;
        --random-10:    #6100ff;
        --random-11:    #5700e3;
        --random-12:    #30007d;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    	margin: 0;
    	padding: 0;
    	border: 0;
    	font-size: 100%;
    	font: inherit;
    	vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
    	display: block;
    }
    body {
    	line-height: 1;
    }
    ol, ul {
    	list-style: none;
    }
    blockquote, q {
    	quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    	content: '';
    	content: none;
    }
    table {
    	border-collapse: collapse;
    	border-spacing: 0;
    }
    #root {
        width: 100vw;
        height: 100vh;
        font-family: 'Inter';
    }

    .heading-base, 
    .heading-1-700,
    .heading-2-600,
    .heading-3-600,
    .heading-3-500,
    .heading-4-600,
    .heading-4-500,
    .heading-5-600,
    .heading-5-500,
    .heading-6-600,
    .heading-6-500,
    .heading-7-600,
    .heading-7-500
    {
        font-family: 'Lexend', sans-serif;
        color: var(--grey-1)
    }

    .heading-1-700 {
        font-weight: 700;
        font-size: 44px;
        line-height: 56px;
    }

    .heading-2-600 {
        font-weight: 600;
        font-size: 36px;
        line-height: 45px;
    }

    .heading-3-600 {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
    }

    .heading-3-500 {
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;
    }

    .heading-4-600 {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
    }

    .heading-4-500 {
        font-weight: 500;
        font-size: 28px;
        line-height: 35px;
    }

    .heading-5-600 {
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
    }

    .heading-5-500 {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
    }

    .heading-6-600 {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
    }

    .heading-6-500 {
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
    }

    .heading-7-600 {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
    }

    .heading-7-500 {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }

    .body-base,
    .body-1-400,
    .body-1-600,
    .body-2-400,
    .body-2-500,
    .button-big-text,
    .button-medium-text,
    .input-placeholder,
    .input-label
    {
        font-family: 'Inter', sans-serif;
        color: var(--grey-2)
    }

    .body-1-400{
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
    }

    .body-1-600{
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
    }

    .body-2-400{
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }

    .body-2-500{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }

    .button-big-text{
        font-weight: 600;
        font-size: 16px;
    }

    .button-medium-text{
        font-weight: 600;
        font-size: 14px;
    }

    .input-placeholder{
        font-weight: 400;
        font-size: 16px;
    }

    .input-label{
        font-weight: 500;
        font-size: 14px;
        line-height: 16.94px;
    }

`;

export default GlobalStyle;
