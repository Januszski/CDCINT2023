"use client";

import Image from "next/image";
import "./globals.css";
import PieChart from "@/components/DoughnutChart";
import DoughnutChart from "@/components/DoughnutChart";
import ImageList from "@/components/ImageList";

export default function Home() {
  return (
    <>
      <section className='w-full flex-col gradientBackground home-page body'>
        <div className='flex-center mb-10'>
          <h1 className='head_text text-left'>
            Isetricity Energy
            <br className='max-md:hidden' />
            <span className='max-md:hidden text-center'>
              Delivering Reliable Service to the Midwest
            </span>
          </h1>
        </div>

        <div className='flex-row flex justify-around w-full '>
          <div className='flex-col flex-start'>
            <p className='desc centered-text '>
              At Isetricity, we proudly serve over 2 million customers
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
            <span className='max-md:hidden'>
              <ImageList />
            </span>
            <span className='max-md:hidden'>
              <DoughnutChart className='mt-5 max-h-fit' />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
