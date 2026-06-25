let featureFlags = 0b1111; // all enabled
let mask = 0b1010; // disable some
featureFlags &= mask;
console.log(`Masked Flags: ${featureFlags.toString(2)}`);
