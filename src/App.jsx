import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"
import Luxury from "./components/Luxury"



export default function App() {
  return (
    <main className="min-h-svh bg-off-white-bg py-20 px-6 antialiased lg:flex justify-center items-center">
      <div className="lg:flex mas-w-[920px]">
        <Sedans/>
        <Suvs/>
        <Luxury/>
      </div>
    </main>
  )
}
