export function vec(...args) {
    return Float64Array.from(args);
}

export function scale(a, v) {
    return v.map(x => a * x);
}
export function plus(v, w) {
    return v.map((x, i) => x + w[i]);
}
export function minus(v, w) {
    return v.map((x, i) => x - w[i]);
}

export function inner(v, w) {
    return v.reduce((a, b, i) => a + b * w[i], 0);
}

export function len2(v) {
    return v.reduce((a, b) => a + b * b, 0);
}

export function len(v) {
    return Math.sqrt(len2(v));
}


export function dis2(v, w) {
    return len2(minus(v, w));
}


export function norm(v) {
    return scale(1 / len(v), v);
}