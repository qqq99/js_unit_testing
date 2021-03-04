const lib = require('../lib');

describe('absolute',()=>{
    //replace test with it
    it('absolute - should return a positive number if input is positive',()=>{
    const result = lib.absolute(1);
    expect(result).toBe(1);
    });

    it('absolte - should return positive number if input is negtive',()=>{
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it('absolute - should return 0 if input is 0',()=>{
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet',()=>{
    it('should return a message mentions name which is given as an arg',()=>
    {
        const result = lib.greet('cici');
       // expect(result).toMatch(/cici/);
        expect(result).toContain('cici');
    });
});

describe('getCurrencies',()=>{
    it('should return supported currencies',()=>{
        const result = lib.getCurrencies();
        //Too general
        expect(result).not.toBeNull();
        //Too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);
        //Too wordy
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        //Proper way
        expect(result).toEqual(expect.arrayContaining(['EUR','AUD','USD']));
    });
});

describe("getProduct",()=>{
    it("should return the product with the given id",()=>{
        const result = lib.getProduct(1);
        //Too specific
        expect(result).toEqual({id: 1, price: 10});
        //In case the obj has 15 properties
        expect(result).toMatchObject({id: 1, price: 10});
        expect(result).toHaveProperty('id',1);
        expect(result).toHaveProperty('price',10);
    });
});

describe('registerUser',()=>{
    it('should throw exception if username is falsy',()=>{
        const args=[null,'',0,undefined,false,NaN];
        args.forEach(a=>{
            expect(()=>{lib.registerUser(a)}).toThrow();
        });
    });
});