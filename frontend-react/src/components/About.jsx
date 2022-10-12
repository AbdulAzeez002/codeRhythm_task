import React from 'react'

function About() {
  return (
    <div className="mt-20">
      <div className="flex justify-center space-x-6">
        <div
          style={{ backgroundColor: "#f9f8ff" }}
          class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a className="flex justify-center" href="#">
            <img
              class="rounded-t-lg h-40"
              src="https://coderythm.com/wp-content/uploads/2022/05/mission-goals.png"
              alt=""
            />
          </a>
          <p className="text-center mt-6 font-bold text-xl">Mission</p>
          <p class=" px-4 mt-4 mb-3 font-normal text-gray-500 dark:text-gray-400">
            CodeRythm aims to digitize the business operations of our customers
            by intelligent use of technology to enhance the productivity of our
            customer's business.
          </p>
        </div>

        <div
          style={{ backgroundColor: "#fffcf6" }}
          class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a className="flex justify-center" href="#">
            <img
              class="rounded-t-lg h-40"
              src="https://coderythm.com/wp-content/uploads/2022/05/business-vision.png"
              alt=""
            />
          </a>
          <p className="text-center mt-6 font-bold text-xl">Vision</p>
          <p class=" px-4 mt-4 mb-3 font-normal text-gray-500 dark:text-gray-400">
          To transform local and global businesses for the better, with the power of technology, and help them achieve their fullest potential.
          </p>
        </div>

        <div
          style={{ backgroundColor: "#f0fffc" }}
          class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a className="flex justify-center" href="#">
            <img
              class="rounded-t-lg h-40"
              src="https://coderythm.com/wp-content/uploads/2022/05/agreement-between-business-partners.png"
              alt=""
            />
          </a>
          <p className="text-center mt-6 font-bold text-xl">Core Values</p>
          <p class=" px-4 mt-4 mb-3 font-normal text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
                  <li>Reliable Service to our partners.</li>
                  <li>Innovative Approach in our solutions.</li>
                  <li>Customer Centric at work.</li>
                  <li>Integrity in everything that we do.</li>
            </ul>
         
          </p>
        </div>
      </div>
    </div>
  )
}

export default About