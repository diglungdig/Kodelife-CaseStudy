// Author: diglungdig
// Title: Peculiar Mess


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5)-st * 0.5;

    float r = length(pos) ;
    float a = atan(pos.y,pos.x) * u_time * 21.036;

    float f = cos(a*1.152);

    color = vec3( 1.-smoothstep(f,f+0.02,r) );

    gl_FragColor = vec4(color, 1.0);
}