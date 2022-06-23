import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { Router } from "react-router-dom"
import { Event } from "./pages/Event"

function App() {
  return (
      <ApolloProvider client={client}>
      <Router />
      </ApolloProvider>
  )
}

export default App
