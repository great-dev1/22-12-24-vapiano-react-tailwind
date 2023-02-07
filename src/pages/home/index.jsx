import Layout from "../../layout"
import Hero from "./components/hero"
import Categories from "./components/categories"
import Menu from "./components/menu"
import Pickup from "./components/pickup"
import Bag from "./components/bag"
import MenuData from "../../services/getMenuData"

const Home = ({ bagData, setBagData }) => {
  const CategoriesData = []
  MenuData.forEach((el) => CategoriesData.push(el.category))

  return (
    <Layout>
      <Hero />
      <Categories categoriesData={CategoriesData} />
      <main className="container flex flex-col-reverse gap-6 md:flex-row">
        <section className="md:w-1/2 md:pt-10 lg:w-2/3">
          <Menu menuData={MenuData} bagData={bagData} setBagData={setBagData} />
        </section>

        <aside className="pt-6 md:w-1/2 md:pt-[42px] lg:w-1/3">
          <Pickup />
          <Bag bagData={bagData} setBagData={setBagData} />
        </aside>
      </main>
    </Layout>
  )
}

export default Home
