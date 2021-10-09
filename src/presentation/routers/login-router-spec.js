describe('Login Router', () => {
    test('should return 400 if no email is provided', () => {
        const sut = new LoginRouter ()
        const httpRequest = {
        body: {
        
        }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
    
})
