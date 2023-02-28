const { sum, getLargest } = require('./script')


describe('#sum', () =>{
    test('it adds numbers correctly', () => {
        const a = 1
        const b = 2
        expect(sum(a, b)).toBe(3)
    })
})

describe('#getLargest', () =>{
    test('it returns the largest number in the array', () =>{
        const array = [1, 2, 3, 4]
        expect(getLargest(array)).toBe(4)
    })
    
    test('it returns null when given an empty array', () =>{
        expect(getLargest([])).toBeNull()
    })
})
