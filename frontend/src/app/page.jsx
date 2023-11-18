import Search from '@components/Search'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
        <h1 className="head_text  text-center">Coding Challenge
            <br className="max-md:hidden"/>
            <span className="pink_gradient text-center">Bounce Insigth</span>
        </h1>
        <p className="desc text-center">
            Know Your World: Essential Country Insights at Your Fingertips!
        </p>
        <Search/>
    </section>
  )
}

export default Home