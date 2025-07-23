import {
    alphaCharsUpper,
    alphaCharsLower,
    numericChars,
    alphaNumChars,
    base32CrockfordsEncodeChars,
    nanoidChars,
} from '../src/characters';

describe('Character Sets', () => {
    describe('alphaCharsUpper', () => {
        it('should contain all uppercase alphabetic characters', () => {
            expect(alphaCharsUpper).toBe(
                'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            );
        });

        it('should have exactly 26 characters', () => {
            expect(alphaCharsUpper).toHaveLength(26);
        });

        it('should contain only uppercase letters', () => {
            expect(alphaCharsUpper).toMatch(/^[A-Z]+$/);
        });

        it('should not contain duplicates', () => {
            const chars = alphaCharsUpper.split('');
            const uniqueChars = [...new Set(chars)];
            expect(uniqueChars).toHaveLength(chars.length);
        });
    });

    describe('alphaCharsLower', () => {
        it('should contain all lowercase alphabetic characters', () => {
            expect(alphaCharsLower).toBe(
                'abcdefghijklmnopqrstuvwxyz'
            );
        });

        it('should have exactly 26 characters', () => {
            expect(alphaCharsLower).toHaveLength(26);
        });

        it('should contain only lowercase letters', () => {
            expect(alphaCharsLower).toMatch(/^[a-z]+$/);
        });

        it('should not contain duplicates', () => {
            const chars = alphaCharsLower.split('');
            const uniqueChars = [...new Set(chars)];
            expect(uniqueChars).toHaveLength(chars.length);
        });
    });

    describe('numericChars', () => {
        it('should contain all digits 0-9', () => {
            expect(numericChars).toBe('0123456789');
        });

        it('should have exactly 10 characters', () => {
            expect(numericChars).toHaveLength(10);
        });

        it('should contain only numeric digits', () => {
            expect(numericChars).toMatch(/^[0-9]+$/);
        });

        it('should not contain duplicates', () => {
            const chars = numericChars.split('');
            const uniqueChars = [...new Set(chars)];
            expect(uniqueChars).toHaveLength(chars.length);
        });
    });

    describe('alphaNumChars', () => {
        it('should be combination of upper, lower, and numeric chars', () => {
            const expected = `${alphaCharsUpper}${alphaCharsLower}${numericChars}`;
            expect(alphaNumChars).toBe(expected);
        });

        it('should have exactly 62 characters (26+26+10)', () => {
            expect(alphaNumChars).toHaveLength(62);
        });

        it('should contain all uppercase letters', () => {
            for (const char of alphaCharsUpper) {
                expect(alphaNumChars).toContain(char);
            }
        });

        it('should contain all lowercase letters', () => {
            for (const char of alphaCharsLower) {
                expect(alphaNumChars).toContain(char);
            }
        });

        it('should contain all numeric digits', () => {
            for (const char of numericChars) {
                expect(alphaNumChars).toContain(char);
            }
        });

        it('should contain only alphanumeric characters', () => {
            expect(alphaNumChars).toMatch(/^[A-Za-z0-9]+$/);
        });

        it('should not contain duplicates', () => {
            const chars = alphaNumChars.split('');
            const uniqueChars = [...new Set(chars)];
            expect(uniqueChars).toHaveLength(chars.length);
        });
    });

    describe('base32CrockfordsEncodeChars', () => {
        it('should follow Crockford Base32 specification', () => {
            // Crockford Base32 uses 0-9 and selected letters excluding I, L, O, U
            expect(base32CrockfordsEncodeChars).toBe(
                '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
            );
        });

        it('should have exactly 32 characters', () => {
            expect(base32CrockfordsEncodeChars).toHaveLength(32);
        });

        it('should start with numeric chars 0-9', () => {
            expect(base32CrockfordsEncodeChars.slice(0, 10)).toBe(
                numericChars
            );
        });

        it('should exclude ambiguous characters I, L, O, U', () => {
            const ambiguousChars = ['I', 'L', 'O', 'U'];
            for (const char of ambiguousChars) {
                expect(base32CrockfordsEncodeChars).not.toContain(char);
            }
        });

        it('should contain all digits 0-9', () => {
            for (const char of numericChars) {
                expect(base32CrockfordsEncodeChars).toContain(char);
            }
        });

        it('should contain valid Crockford alphabet letters', () => {
            const expectedLetters = 'ABCDEFGHJKMNPQRSTVWXYZ';
            const lettersOnly = base32CrockfordsEncodeChars.slice(10);
            expect(lettersOnly).toBe(expectedLetters);
        });

        it('should not contain duplicates', () => {
            const chars = base32CrockfordsEncodeChars.split('');
            const uniqueChars = [...new Set(chars)];
            expect(uniqueChars).toHaveLength(chars.length);
        });
    });

    describe('nanoidChars', () => {
        it('should contain alphanumeric chars plus underscore and hyphen', () => {
            const expected = `${alphaCharsUpper}${alphaCharsLower}${numericChars}_-`;
            expect(nanoidChars).toBe(expected);
        });

        it('should have exactly 64 characters (62 alphanumeric + 2 special)', () => {
            expect(nanoidChars).toHaveLength(64);
        });

        it('should contain all alphanumeric characters', () => {
            for (const char of alphaNumChars) {
                expect(nanoidChars).toContain(char);
            }
        });

        it('should contain underscore and hyphen', () => {
            expect(nanoidChars).toContain('_');
            expect(nanoidChars).toContain('-');
        });

        it('should be URL-safe (no special chars except _ and -)', () => {
            expect(nanoidChars).toMatch(/^[A-Za-z0-9_-]+$/);
        });

        it('should not contain duplicates', () => {
            const chars = nanoidChars.split('');
            const uniqueChars = [...new Set(chars)];
            expect(uniqueChars).toHaveLength(chars.length);
        });

        it('should end with underscore and hyphen', () => {
            expect(nanoidChars.slice(-2)).toBe('_-');
        });
    });

    describe('Character Set Relationships', () => {
        it('should have no overlap between upper and lower alpha chars', () => {
            const upperSet = new Set(alphaCharsUpper.split(''));
            const lowerSet = new Set(alphaCharsLower.split(''));
            const intersection = [...upperSet].filter(char =>
                lowerSet.has(char)
            );
            expect(intersection).toHaveLength(0);
        });

        it('should have no overlap between alpha and numeric chars', () => {
            const alphaSet = new Set(
                (alphaCharsUpper + alphaCharsLower).split('')
            );
            const numericSet = new Set(numericChars.split(''));
            const intersection = [...alphaSet].filter(char =>
                numericSet.has(char)
            );
            expect(intersection).toHaveLength(0);
        });

        it('should have base32CrockfordsEncodeChars be subset of nanoidChars except for order', () => {
            const base32Set = new Set(
                base32CrockfordsEncodeChars.split('')
            );
            const nanoidSet = new Set(nanoidChars.split(''));
            
            for (const char of base32Set) {
                expect(nanoidSet.has(char)).toBe(true);
            }
        });
    });

    describe('Character Set Properties', () => {
        it('should maintain consistent ordering', () => {
            // Test that character sets maintain expected alphabetical/numerical ordering
            expect(alphaCharsUpper).toBe(
                alphaCharsUpper.split('').sort().join('')
            );
            expect(alphaCharsLower).toBe(
                alphaCharsLower.split('').sort().join('')
            );
            expect(numericChars).toBe(
                numericChars.split('').sort().join('')
            );
        });

        it('should be suitable for random selection', () => {
            // Test that all character sets can be used for random character selection
            const charSets = [
                alphaCharsUpper,
                alphaCharsLower,
                numericChars,
                alphaNumChars,
                base32CrockfordsEncodeChars,
                nanoidChars,
            ];

            for (const charSet of charSets) {
                expect(charSet.length).toBeGreaterThan(0);
                // Test random indexing doesn't throw
                const randomIndex = Math.floor(
                    Math.random() * charSet.length
                );
                expect(charSet[randomIndex]).toBeDefined();
                expect(typeof charSet[randomIndex]).toBe('string');
            }
        });
    });
});