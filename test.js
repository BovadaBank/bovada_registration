import {expect} from 'chai'
import { 
  getJoinEndpoint,
  getLocations,
  getCountries,
  getSecurityQuestions,
  getStates,
  checkIfEmailIsAvailable,
  validateAddress,
  buildBovadaAccountPayload,
  createBovadaAccount
} from './helpers'

describe('create a bovada account', () => {
  it('should get join endpoint', done => {
    getJoinEndpoint().then(res => {
      expect(res.body.data.title).to.eq('Registration')
      done()
    })
  })
  it('should get locations', done => {
    getLocations().then(res => {
      expect(res.body.country.id).to.be.eq('US')
      done()
    })
  })
  it('should get countries', done => {
    getCountries().then(res => {
      expect(res.body.length).to.be.gt(0)
      done()
    })
  })
  it('should get security questions', done => {
    getSecurityQuestions().then(res => {
      expect(res.body.length).to.be.gt(0)
      done()
    })
  })
  it('should get all us states', done => {
    getStates().then(res => {
      expect(res.body.length).to.be.gt(0)
      done()
    })
  })
  it('should check if flockwme@gmail.com is being used on bovada should return true aka a status code of 204', done => {
    checkIfEmailIsAvailable('flockwme@gmail.com').then(res => {
      expect(res.status).to.eq(204)
      done()
    })
  })
  it('should validate address', done => {
    validateAddress('US', '19104').then(res => {
      expect(res.body[0].city).to.eq('Philadelphia')
      done()
    })
  })
  it('should create a bovada account', done => {
    let user = buildBovadaAccountPayload(
      'jack', 
      'landon', 
      '521 north 38th street', 
      'Philadelphia', 
      'PA', 
      '19027',
      'US',
      '1995-04-05',
      'Testing123',
      'jacklandon@gmail.com',
      '2156638173',
      'landon'
      )
    createBovadaAccount(user, 'US', '19027').then(res => {
      expect(res.status).to.eq(201)
      done()
    })
  })

})
