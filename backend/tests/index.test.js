const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

describe('TESTS 1', () => {
    it('Endpoint Test', async () => {
        await new Promise(resolve => setTimeout(resolve, 10)); 
        assert.equal(2 + 2, 4, "Son iguales");
    });

    it('Prueba de otro endpoint', async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        assert.equal(3 - 4, -1, "Son iguales");
    });
});

describe('TESTS 2', () => {
    it('Prueba unitaria', async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        assert.equal(2 + 2, 4, "Son iguales");
    });

    it('Prueba de otra cosa', async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        assert.equal(3 - 4, -1, "Son iguales");
    });

    it('Prueba de otra cosa!!!!', async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        assert.equal(3 - 4, -1, "Son iguales");
    });

    it('Prueba unitaria', async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        assert.equal(2 + 2, 4, "Son iguales");
    });

    it('Prueba de otra cosa', async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        assert.equal(3 - 4, -1, "Son iguales");
    });

    it('Prueba de otra cosa!!!!', async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        assert.equal(3 - 4, -1, "Son iguales");
    });
});