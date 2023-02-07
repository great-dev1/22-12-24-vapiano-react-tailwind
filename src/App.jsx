import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home"
import Checkout from "./pages/checkout"
import "./assets/scss/App.scss"
import Thumb02 from "./assets/images/thumb02.jpeg"
import Thumb03 from "./assets/images/thumb03.jpeg"

const initialBagData = [
  {
    itemId: 2,
    name: "ITEM2",
    thumb: Thumb02,
    quantity: 3,
    unitPrice: 13.95,
    required: {
      name: "Normal"
    },
    optional: [
      {
        name: "Add on 1",
        energy: 40,
        price: 1
      },
      {
        name: "Add on 2",
        energy: 50,
        price: 2
      }
    ]
  },
  {
    itemId: 3,
    name: "ITEM3",
    thumb: Thumb03,
    quantity: 2,
    unitPrice: 14.95,
    required: {
      name: "Big",
      energy: 50,
      price: 3
    },
    optional: [
      {
        name: "Add on 2",
        energy: 50,
        price: 2
      },
      {
        name: "Add on 3",
        energy: 60,
        price: 3
      }
    ]
  }
]

const App = () => {
  const [bagData, setBagData] = useState(initialBagData)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home bagData={bagData} setBagData={setBagData} />} />
        <Route path="/checkout" element={<Checkout bagData={bagData} setBagData={setBagData} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
