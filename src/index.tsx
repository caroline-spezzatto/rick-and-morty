import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/api'
import { App } from './App'
// import { worker } from './mocks/browser'

// if (process.env.ENV === 'development') {
  //ligar/desligar mock
  // worker.start({
  //   onUnhandledRequest: 'bypass'
  // })
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
