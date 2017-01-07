import agent from 'superagent-bluebird-promise'
import { headers } from './config'

export const getJoinEndpoint = (sport) => {
  return agent
          .get('https://sports.bovada.lv/websites/services/components/join')
          .set(headers)
          .then(res => res)
          .catch(err => err)
}

export const getLocations = () => {
  return agent
          .get('https://sports.bovada.lv/services/web/v2/reference/location')
          .set(headers)
          .then(res => res)
          .catch(err => err)
}
export const getCountries = () => {
  return agent
          .get('https://sports.bovada.lv/services/web/v2/reference/countries')
          .set(headers)
          .then(res => res)
          .catch(err => err)
}
export const getSecurityQuestions = () => {
  return agent
          .get('https://sports.bovada.lv/services/web/v2/reference/securityquestions')
          .set(headers)
          .then(res => res)
          .catch(err => err)
}

export const getStates = () => {
  return agent
          .get('https://sports.bovada.lv/services/web/v2/reference/countries/US/states')
          .set(headers)
          .then(res => res)
          .catch(err => err)
}
export const checkIfEmailIsAvailable = (email) => {
  //if a 204 status code is returned the email is in use. if a 404 status code is returned the email is not in use
  return agent
          .get(`https://sports.bovada.lv/services/web/v2/profiles/signup/checkemail/${email}`)
          .set(headers)
          .then(res => res)
          .catch(err => err)
}

export const validateAddress = (countryCode, postalCode) => {
  return agent
          .get(`https://sports.bovada.lv/services/web/v2/profiles/addresslookup?countryCode=${countryCode}&postalCode=${postalCode}`)
          .set(headers)
          .then(res => res)
          .catch(err => err)
} 

export const buildBovadaAccountPayload = (firstName, lastName, address, city, state, postalCode, countryCode, dateOfBirth, password, email, phoneNumber, securityAnswer) => {
  var payload = `{"name":{"firstName":"${firstName}","lastName":"${lastName}"},"address":{"addressLine1":"${address}","city":"${city}","state":"${state}","postalCode":"${postalCode}","countryCode":"${countryCode}"},"contactDetails":{"emailAddresses":[{"primary":true,"email":"${email}"}],"phoneNumbers":[{"primary":true,"phoneNumber":"${phoneNumber}"}]},"personalDetails":{"dateOfBirth":"${dateOfBirth}"},"securityDetails":{"password":"${password}","securityQuestions":[{"id":"MMN","answer":"${securityAnswer}"}]},"profileDetails":{"currencyCode":""},"referralInformation":{"referralCode":""}}`;
  return payload
} 
export const createBovadaAccount = (payload) => {
  return agent
          .post('https://sports.bovada.lv/services/web/v2/profiles/signup')
          .set(headers)
          .send(payload)
          .then(res => res)
          .catch(err => err)
} 




