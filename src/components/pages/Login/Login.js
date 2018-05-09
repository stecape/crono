import React from 'react'
import { GoogleLogin } from 'react-google-login-component'
import axios from 'axios'
import './Login.css'

export default class Login extends React.Component {

  getContact = (access_token) => {
    console.log(access_token)
    return axios.get('https://www.google.com/m8/feeds/contacts/default/full?access_token=' + encodeURIComponent(access_token) + "&alt=json&max-results=2000")
    .then(function (resp) {return resp})
  }

  connected (response) {
    var access_token = response.getAuthResponse().access_token
    console.log(access_token)
    axios.get('https://www.google.com/m8/feeds/contacts/default/full?access_token=' + encodeURIComponent(access_token) + "&alt=json&max-results=2000")
    .then(function (resp) {console.log(resp.data.feed.entry)})

  }
 
  render () {
    var image = window.location.origin + "/g-normal.png"
    return (
      <div>
        <GoogleLogin socialId="828427357877-bd7ckf1hb25vfq31jfg4veiobgh7gobd.apps.googleusercontent.com"
          className="customBtn"
          scope="profile https://www.google.com/m8/feeds/"
          fetchBasicProfile={false}
          responseHandler={this.connected}
        >
          <span style={{"background": "url('" + image + "') transparent 5px 50% no-repeat"}} className="customBtn-icon"></span>
          <span className="customBtn-buttonText">Login with Google</span>
        </GoogleLogin>
      </div>
    )
  }
}