import pizza2 from "../images/pizza2.png";
import pizza3 from "../images/pizza3.png";
import pizza4 from "../images/pizza4.png";
import pizza5 from "../images/pizza5.jpg";
import pizza6 from "../images/pizza6.png";
import pizza7 from "../images/pizza7.png";
import { Link } from "react-router-dom";
export default function IndexPage() {
  return (
    <div className="min-h-screen">
      <div
        className="flex justify-between mt-12 pl-60 pr-10 align-middle"
        id="home"
      >
        <div>
          <h1 className="mt-32 lg:text-7xl font-extrabold">The Fastest</h1>
          <div className="flex gap-3 mt-4 items-center text-7xl font-extrabold">
            <h1>Pizza</h1>
            <img className="h-20 mt-3" src={pizza3} alt="" />
            <h1>Delivery</h1>
          </div>
          <h1 className="text-xl text-gray-400 w-3/4 my-4">
            We will deliver juicy pizza for your family in 30 minutes, if the
            courier is late - pizza is free!
          </h1>
          <Link
            to="/menu"
            className="px-14 py-2 mt-5 text-xl font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500"
          >
            Order now!
          </Link>
        </div>
        <div>
          <img className="rounded-3xl object-cover h-5/6" src={pizza2} />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${pizza5})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="rounded-3xl shadow-lg text-center py-32 -mt-20 mb-10 mx-60 "
      >
        <h1 className="text-4xl font-semibold text-white pb-2">
          MOST POPULAR PIZZA
        </h1>
      </div>
      <div className="mx-60">
        <div className="mt-4 grid grid-cols-4 gap-4 pt-8">
          <div className="bg-stone-800 bg-opacity-20 pt-8 px-5 pb-3 rounded-3xl">
            <img className="w-1/2 block mx-auto" src={pizza4} alt="" />
            <h1 className="text-center font-semibold text-3xl py-5">Italian</h1>
            <h1 className="text-sm text-center text-gray-400">
              Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
            </h1>
            <form className="mx-4 mt-3">
              <div className="flex justify-between py-3">
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeS" name="pizza_size" value="S" />
                  <label htmlFor="sizeS" className="">
                    S
                  </label>
                </div>
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeM" name="pizza_size" value="M" />
                  <label htmlFor="sizeM" className="">
                    M
                  </label>
                </div>
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeL" name="pizza_size" value="L" />
                  <label htmlFor="sizeL" className="">
                    L
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">8,5 $</h1>
                <div className="flex text-2xl gap-3">
                  <h1>-</h1>
                  <h1>1</h1>
                  <h1>+</h1>
                </div>
              </div>
              <button className="mt-4 block mx-auto w-full py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500">
                Add to cart
              </button>
            </form>
          </div>
          <div className="bg-stone-800 bg-opacity-20 pt-8 px-5 pb-3 rounded-3xl">
            <img className="w-1/2 block mx-auto" src={pizza4} alt="" />
            <h1 className="text-center font-semibold text-3xl py-5">Italian</h1>
            <h1 className="text-sm text-center text-gray-400">
              Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
            </h1>
            <form className="mx-4 mt-3">
              <div className="flex justify-between py-3">
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeS" name="pizza_size" value="S" />
                  <label htmlFor="sizeS" className="">
                    S
                  </label>
                </div>
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeM" name="pizza_size" value="M" />
                  <label htmlFor="sizeM" className="">
                    M
                  </label>
                </div>
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeL" name="pizza_size" value="L" />
                  <label htmlFor="sizeL" className="">
                    L
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">8,5 $</h1>
                <div className="flex text-2xl gap-3">
                  <h1>-</h1>
                  <h1>1</h1>
                  <h1>+</h1>
                </div>
              </div>
              <button className="mt-4 block mx-auto w-full py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500">
                Add to cart
              </button>
            </form>
          </div>
          <div className="bg-stone-800 bg-opacity-20 pt-8 px-5 pb-3 rounded-3xl">
            <img className="w-1/2 block mx-auto" src={pizza4} alt="" />
            <h1 className="text-center font-semibold text-3xl py-5">Italian</h1>
            <h1 className="text-sm text-center text-gray-400">
              Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
            </h1>
            <form className="mx-4 mt-3">
              <div className="flex justify-between py-3">
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeS" name="pizza_size" value="S" />
                  <label htmlFor="sizeS" className="">
                    S
                  </label>
                </div>
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeM" name="pizza_size" value="M" />
                  <label htmlFor="sizeM" className="">
                    M
                  </label>
                </div>
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeL" name="pizza_size" value="L" />
                  <label htmlFor="sizeL" className="">
                    L
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">8,5 $</h1>
                <div className="flex text-2xl gap-3">
                  <h1>-</h1>
                  <h1>1</h1>
                  <h1>+</h1>
                </div>
              </div>
              <button className="mt-4 block mx-auto w-full py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500">
                Add to cart
              </button>
            </form>
          </div>
          <div className="bg-stone-800 bg-opacity-20 pt-8 px-5 pb-3 rounded-3xl">
            <img className="w-1/2 block mx-auto" src={pizza4} alt="" />
            <h1 className="text-center font-semibold text-3xl py-5">Italian</h1>
            <h1 className="text-sm text-center text-gray-400">
              Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
            </h1>
            <form className="mx-4 mt-3">
              <div className="flex justify-between py-3">
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeS" name="pizza_size" value="S" />
                  <label htmlFor="sizeS" className="">
                    S
                  </label>
                </div>
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeM" name="pizza_size" value="M" />
                  <label htmlFor="sizeM" className="">
                    M
                  </label>
                </div>
                <div className="border-2 rounded-full p-3">
                  <input type="radio" id="sizeL" name="pizza_size" value="L" />
                  <label htmlFor="sizeL" className="">
                    L
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">8,5 $</h1>
                <div className="flex text-2xl gap-3">
                  <h1>-</h1>
                  <h1>1</h1>
                  <h1>+</h1>
                </div>
              </div>
              <button className="mt-4 block mx-auto w-full py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500">
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-between ml-60 mt-20 -mb-16" id="about-us">
        <div className="w-1/2">
          <h1 className="mt-32 lg:text-7xl font-extrabold">About us</h1>
          <h1 className="text-md text-gray-400 w-3/4 my-4">
            In just a couple of years, we have opened 6 outlets in different
            cities: Hanoi, Ho Chi Minh City, Da Nang, and in the future we plan
            to develop the network in other major cities of VietNam.
          </h1>
          <img className="rounded-3xl object-cover h-1/6 py-3" src={pizza6} />
        </div>
        <div>
          <img className="rounded-3xl object-cover h-5/6" src={pizza7} />
        </div>
      </div>
    </div>
  );
}
