"use client";

import Image from "next/image";
import "./globals.css";
import PieChart from "@/components/DoughnutChart";
import DoughnutChart from "@/components/DoughnutChart";
import ImageList from "@/components/ImageList";
import Typewriter from "@/components/TypeWriter";

export default function Home() {
  return (
    <>
      <section className='w-full gradientBackground min-h-screen mt-3'>
        {/* <div className='flex-center mb-10'> */}
        {/* <div className='flex-row flex justify-around w-full'>
          <div>
            <h1 className='head_text text-left'>Isetricity Energy</h1>
            <br className='max-md:hidden' />
            <span className='max-md:hidden text-center text-gray-600 text-4xl '>
              Delivering Reliable Service to the Midwest
            </span>
          </div>
          <div styles={{ minWidth: "358px" }}> a</div>
        </div> */}

        <div className='flex-row flex justify-around w-full '>
          <div className='flex-col flex-start'>
            <h1 className='head_text text-left centered-text'>
              {/* <span className='lightning-effect text-white'>&#x26A1;</span> */}

              <span className=' text-white'>ISE</span>
              <span className='text-blue-500'>tricity</span>
              <span> Energy</span>
            </h1>
            <span className='max-md:hidden text-center text-gray-600 text-4xl centered-text mt-1'>
              <Typewriter text='Deelivering Reliable Service to the Midwest' />
            </span>

            <p className='desc centered-text '>
              At ISEtricity, we proudly serve over 2 million customers
              throughout the heartland, providing electricity and natural gas
              services. Our commitment to delivering reliable energy remains
              unwavering as we navigate the dynamic landscape of power
              generation.
            </p>
            <p className='desc centered-text '>
              Embracing a future where renewable energy plays a pivotal role, we
              understand the importance of a balanced energy portfolio. While
              renewables constitute a significant share, we recognize the
              necessity of traditional fuel sources to ensure uninterrupted
              service. Whether the wind is calm or clouds obscure the sun, our
              diverse array of energy sources guarantees a steady supply for our
              diverse customer base, spanning households, farms, businesses, and
              large industrial users.
            </p>

            <p className='desc centered-text '>
              Environmental stewardship is at the forefront of our operations.
              Our coal-fueled plants are equipped with cutting-edge
              environmental controls, minimizing the ecological impact of every
              asset in our energy portfolio. Furthermore, we&apos;ve retired
              older coal units in recent years, demonstrating our commitment to
              sustainability.
            </p>

            <p className='desc centered-text '>
              In our pursuit of a greener future, Isetricity actively explores
              innovative technologies such as battery storage and spearheads the
              development of both small- and utility-scale solar projects. These
              endeavors align with our core principles of Environmental Respect
              and Customer Service, driving our commitment to providing
              sustainable and reliable energy solutions for our valued
              customers.
            </p>
          </div>
          <div className='w-1/4 flex-center mr-14 flex-col flex-between'>
            {/* <Image
              src='/tricelightning.jpg'
              alt='lightning over Jack Trice'
              width='450'
              height='225'
              className='mb-5 mr-14'
            /> */}
            <span className='max-md:hidden mt-7'>
              <ImageList />
            </span>
            <span className='max-md:hidden flex-center flex-col'>
              <div className='mt-3'>
                <span className='desc'>2024 </span>
                <span className='lightning-effect text-white'>&#x26A1;</span>
                <span className='desc'> Generation</span>
              </div>
              <DoughnutChart className='mt-5 max-h-fit' />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
