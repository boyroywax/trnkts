const alphaCharsUpper: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const alphaCharsLower: string = 'abcdefghijklmnopqrstuvwxyz';

const numericChars: string = '0123456789';

const alphaNumChars: string = `${alphaCharsUpper}${alphaCharsLower}${numericChars}`;

const base32CrockfordsEncodeChars: string = `${numericChars}ABCDEFGHJKMNPQRSTVWXYZ`;

const nanoidChars: string = `${alphaCharsUpper}${alphaCharsLower}${numericChars}_-`;


export {
    alphaCharsUpper,
    alphaCharsLower,
    numericChars,
    alphaNumChars,
    base32CrockfordsEncodeChars,
    nanoidChars
};