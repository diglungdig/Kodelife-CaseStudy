// Author:diglungdig
// Title:Mondrian Grande

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float BlockIt(float lb, float tr, vec2 st){
    vec2 a = step(vec2(lb), st);
    
    vec2 b = step(vec2(tr), 1.-st);
    
    return a.x*a.y*b.x*b.y;

}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
  vec3 color = vec3(0.0);
    
    
    vec2 lb = step(vec2(0.02), st);
    
    float pct = lb.x*lb.y;
    
    vec2 tr = step(vec2(0.02), 1.-st);
    
    pct *= tr.x*tr.y;
    

    //red block
    vec3 red = vec3(0., 1., 1.);
    float pct2 = BlockIt(0.25, 0.005,st*vec2(1., 0.85));
    
    vec3 mask1 = vec3(pct2)*red;
 
    //blue block
    vec3 blue = vec3(0.9, 0.6, 0.3);
    float pct3 = BlockIt(0.005, 0.6,st*vec2(1.6, 1.36));
    vec3 mask2 = vec3(pct3)*blue;
 
 
    //yellow block
    vec3 yellow = vec3(0., 0., 1.);
    float pct4 = BlockIt(0.005, 0.6,st - vec2(0.9, -.25));
    vec3 mask3 = vec3(pct4)*yellow;
    
    vec3 black = vec3(1.);
    //line1
    float pct5 = BlockIt(0., 0.45,(st-vec2(0.240,-0.320)) * vec2(25, 0.4));
 
    pct5 += BlockIt(0., 0.45,(st-vec2(.885, .0)) * vec2(25, 1.87));
    
    pct5 += BlockIt(0.1, 0.1,(st - vec2(-0.05, 0.64)) * vec2(3., 19.));
 
    pct5 += BlockIt(0.1, 0.1,(st - vec2(0.8, 0.14)) * vec2(1, 23.));
    
    pct5 += BlockIt(0., 0.1,(st - vec2(0., 0.28)) * vec2(0. , 40.));
    
    vec3 masklines = vec3(pct5) * black;
    
    color = vec3(pct) - mask1 - mask2 - mask3 - masklines;
    gl_FragColor = vec4(color, 1.0);
}