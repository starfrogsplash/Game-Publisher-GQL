
import {getApple} from './mocky'
import {addBanana} from './banana'

jest.mock('../banana', () => ({
    addBanana: jest.fn().mockImplementation(() => 'you are mocked sucker!')
}))


it('something', () =>{


const result = getApple()

    expect(result).toEqual(`apple,you are mocked sucker!`)
    expect(addBanana()).toBe('you are mocked sucker!')
    expect(addBanana).toHaveBeenCalledTimes(2)
})



