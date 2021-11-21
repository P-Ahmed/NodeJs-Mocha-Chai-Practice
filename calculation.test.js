const { expect } = require("chai");

describe("Calculation Test",()=>{
    it("Sum of 2 numbers",()=>{
        let sum = 5+3;
        expect(sum).equals(8);
    })
    it("Subtraction of 2 numbers",()=>{
        let subtraction = 5-3;
        expect(subtraction).equals(2);
    })
})