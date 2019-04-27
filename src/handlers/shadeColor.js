function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export default function shadeColor (color, percent) {
    let fr = '00';
    let fg = '00';
    let fb = '00';

    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);
    percent = 100 + percent;
  
    R = R * percent / 100;
    G = G * percent / 100;
    B = B * percent / 100; 
  
    R = parseInt ( (R<255)?R:255 );  
    G = parseInt ( (G<255)?G:255 );  
    B = parseInt ( (B<255)?B:255 );  
 
    return "#" + componentToHex(R) + componentToHex(G) + componentToHex(B);
    
}