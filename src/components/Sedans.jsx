import iconSedans from "../assets/icon-sedans.svg"

export default function Sedans() {
  return (
    <section className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
        <img src={iconSedans} alt="ícone dos sedans" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-off-white">Sedans</h2>
        <p className="font-lexend mb-7 text-off-white text lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a className="font-lexend bg-off-white-bg block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-off-white hover:bg-orange hover:text-off-white" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
    </section>
  )
}
