import './index.css'

const ActiveEventRegistrationDetails = ({eventStatus}) => {
  const renderNoActiveEvent = () => (
    <div className="registration-details-container">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned, We will reopen the registrations soon!</p>
    </div>
  )

  const renderSwitch = () => {
    switch (eventStatus) {
      case 'noActiveEvent':
        return renderNoActiveEvent()
      case 'YET_TO_REGISTER':
        return renderYetToRegister()
      case 'REGISTERED':
        return renderRegistered()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationClosed()
      default:
        return null
    }
  }

  return <>{renderSwitch()}</>
}

export default ActiveEventRegistrationDetails
