import { firebaseAuth, facebookProvider, reff } from '~/config/constants'
import { AccessToken } from 'react-native-fbsdk'

export function getAccessToken () {
  return AccessToken.getCurrentAccessToken()
}

export function authWithToken (accessToken) {
  return firebaseAuth
    .signInWithCredential(facebookProvider.credential(accessToken))
}

export function updateUser (user) {
  return ref.child(`users/${user.uid}`).set(user)
}
