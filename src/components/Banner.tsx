import { Container } from "postcss";

export default function Banner() {
    

    return (
        <section>
            <div id="container">
                <div className="grid place-items-center" >
                    <h1 className="text-3xl font-semibold text-center justify-center pt-20">Smart Customer Experience Solutions</h1>
                    <p className="text-lg text-center p-8">We redefine the role of strategic communications while working with the world’s leading companies.</p>
                    <button className='bg-orange-900 rounded-full px-5 py-3 duration-300 hover:bg-white hover:text-orange-900'>Explore</button>
                </div>
            </div>
        </section>



    )
}