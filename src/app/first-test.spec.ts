
describe("my firs test", ()=> {
    let sut;
    beforeEach(()=> {
        sut = {}
    })

    it("should be true", ()=> {
        sut.a = false;

        sut.a = true;

        expect(sut.a).toBe(true);
    })
})