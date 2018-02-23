// Author: diglungdig
// Title: TaiChi

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float pct = 0.0;
    pct = pow(distance(st,vec2(0.4)),distance(st,vec2(0.6))) + sin(u_time * 2.);

    vec3 color = vec3(pct);


    gl_FragColor = vec4(color,1.0);
}