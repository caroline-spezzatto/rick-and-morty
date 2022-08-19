import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Characters, Seasons, Home, Locations } from '~pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seasons" element={<Seasons />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  )
}
