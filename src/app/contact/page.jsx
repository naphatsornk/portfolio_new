'use client'

import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaLine, FaFacebook } from 'react-icons/fa'
import { useState } from "react"
import { FaDatabase, FaRobot, FaChartBar } from "react-icons/fa";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function ContactPage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <PageTransition>

      <main className="min-h-screen scroll-smooth bg-[#f8f9fb] text-[#111]">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
          min-h-screen
          flex
          items-center
          px-6 md:px-24
          bg-gradient-to-br
          from-[#f8f9fb]
          via-[#e6f2f1]
          to-[#bed3d0]
          relative
          overflow-hidden
        "
        >

          {/* glow bg */}
          <div className="absolute w-[500px] h-[500px] bg-[#e29b2f] opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-[#015b64] opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />


          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">


            {/* LEFT */}
            <div>

              {/* intro */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#015b64] mb-4 text-lg"
              >
                Hello, my name is
              </motion.p>


              {/* NAME */}
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="
                text-5xl md:text-7xl
                font-extrabold
                leading-tight
                text-[#015b64]
                "
              >
                Naphatsorn Kongngam
              </motion.h1>


              {/* TITLE */}
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="
                text-2xl md:text-4xl
                font-bold
                text-[#e29b2f]
                mt-4
                "
              >
                Data Analyst • Machine Learning • Dashboard
              </motion.h2>


              {/* DESCRIPTION */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 max-w-lg text-gray-600 text-lg"
              >
                Passionate about data analytics, forecasting,
                and building intelligent dashboards.
                I enjoy turning raw data into meaningful insights.
              </motion.p>


              {/* SOCIAL */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex gap-5 mt-8 text-2xl text-[#015b64]"
              >
                <a
                  href="https://github.com/naphatsornk"
                  className="hover:text-black transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=naphatsorn.290346@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="tel:0919859589"
                  className="hover:text-green-500 transition"
                >
                  <FaPhone />
                </a>

                <a
                  href="https://line.me/ti/p/nps_fah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                >
                  <FaLine />
                </a>

                <a
                  href="https://www.facebook.com/fahnaphats.kongngam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebook />
                </a>
                
              </motion.div>


              {/* scroll */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.8,
                }}
                className="mt-12 text-gray-400 text-sm"
              >
                scroll down ↓
              </motion.div>

            </div>



            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center"
            >

              <div
                className="
                w-64 h-64 md:w-80 md:h-80
                rounded-full
                overflow-hidden
                shadow-2xl
                border-4 border-white
                "
              >

                <Image
                  src="/IMG_5641.jpg"
                  alt="profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />

              </div>

            </motion.div>


          </div>

        </motion.section>

        {/* ABOUT */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="min-h-screen px-6 md:px-24 py-24 bg-[#bed3d0]"
        >
          <div className="max-w-6xl mx-auto">

            {/* TITLE */}
            <h2 className="text-4xl font-bold text-[#015b64] mb-12">
              About Me
            </h2>


            <div className="grid md:grid-cols-2 gap-12 items-center">


              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 text-[#4f6366]"
              >

                {/* TEXT */}
                <div className="space-y-4">

                  <p>
                    Graduated with a B.Sc. in Business and Information Technology.
                    Experienced in data analysis, dashboard development,
                    and machine learning projects.
                  </p>

                  <p>
                    Seeking a Data Analyst / Business Analyst role.
                    Responsible, adaptable, and eager to learn new skills.
                  </p>

                </div>


                {/* BUTTON */}
                <div className="flex gap-4">

                  <a
                    href="/Black and White Minimalist Accountant Resume.png"
                    className="px-5 py-2 bg-[#015b64] text-white rounded-lg
                    hover:bg-[#01474f] transition"
                  >
                    Download Resume
                  </a>

                  <a
                    href="#project"
                    className="px-5 py-2 border border-[#015b64]
                    text-[#015b64] rounded-lg
                    hover:bg-[#015b64] hover:text-white transition"
                  >
                    View Projects
                  </a>

                </div>


                {/* SOCIAL */}
                <div className="flex gap-4 text-2xl text-[#015b64]">

                  <a
                  href="https://github.com/naphatsornk"
                  className="hover:text-black transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=naphatsorn.290346@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="tel:0919859589"
                  className="hover:text-green-500 transition"
                >
                  <FaPhone />
                </a>

                <a
                  href="https://line.me/ti/p/nps_fah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                >
                  <FaLine />
                </a>

                <a
                  href="https://www.facebook.com/fahnaphats.kongngam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebook />
                </a>

                </div>



                {/* EDUCATION */}
                <div className="pt-6">

                  <h3 className="text-2xl font-semibold text-[#e29b2f] mb-5">
                    Education
                  </h3>


                  <div className="space-y-5">


                    {/* CARD */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-[#95c1c5] rounded-xl shadow-md p-5 flex gap-4 items-center"
                    >

                      <Image
                        src="/logo.svg"
                        alt="kmitl"
                        width={60}
                        height={60}
                      />

                      <div>
                        <p className="font-semibold text-[#015b64]">
                          KMITL
                        </p>

                        <p className="text-sm">
                          Data Science & Business Analytics
                        </p>

                        <p className="text-sm text-gray-600">
                          2021 – 2025
                        </p>
                      </div>

                    </motion.div>


                    {/* CARD */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-[#95c1c5] rounded-xl shadow-md p-5 flex gap-4 items-center"
                    >

                      <Image
                        src="/crulogo.png"
                        alt="school"
                        width={60}
                        height={60}
                      />

                      <div>
                        <p className="font-semibold text-[#015b64]">
                          Chonradsadornumrung School
                        </p>

                        <p className="text-sm">
                          Eng – Math
                        </p>

                        <p className="text-sm text-gray-600">
                          2018 – 2021
                        </p>
                      </div>

                    </motion.div>

                  </div>

                </div>

              </motion.div>



              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >

                <div
                  className="
                  w-64 h-64 md:w-80 md:h-80
                  rounded-2xl
                  overflow-hidden
                  shadow-2xl
                  hover:scale-105
                  transition
                  duration-300
                  "
                >

                  <Image
                    src="/IMG_5641.jpg"
                    alt="profile"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />

                </div>

              </motion.div>


            </div>

          </div>
        </motion.section>



        {/* SKILLS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="min-h-screen px-6 md:px-24 py-24 bg-[#f8f9fb]"
        >
          <div className="max-w-6xl mx-auto text-center">

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#015b64] mb-4">
              What I Do
            </h2>

            <p className="text-gray-500 mb-16">
              Skills and technologies that I use in my projects
            </p>


            <div className="grid md:grid-cols-3 gap-10">

              {/* CARD 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#bed3d0] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >

                <div className="text-5xl text-[#e29b2f] mb-4 flex justify-center">
                  <FaDatabase />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Data & Programming
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-left">
                  <li>Python</li>
                  <li>SQL</li>
                  <li>JavaScript</li>
                  <li>Pandas</li>
                </ul>

              </motion.div>


              {/* CARD 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >

                <div className="text-5xl text-[#e29b2f] mb-4 flex justify-center">
                  <FaRobot />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Machine Learning
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-left">
                  <li>Machine Learning</li>
                  <li>Scikit-learn</li>
                  <li>YOLO</li>
                  <li>Excel</li>
                </ul>

              </motion.div>


              {/* CARD 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-[#bed3d0] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >

                <div className="text-5xl text-[#e29b2f] mb-4 flex justify-center">
                  <FaChartBar />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Dashboard & Web
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-left">
                  <li>Power BI</li>
                  <li>Tableau</li>
                  <li>Grafana</li>
                  <li>HTML / CSS</li>
                  <li>React / Next.js</li>
                </ul>

              </motion.div>

            </div>

            {/* Soft Skill */}
            <div className="mt-20 text-left max-w-3xl mx-auto">

            <h3 className="text-2xl font-bold text-[#015b64] mb-8 text-center">
              Soft Skill
            </h3>


            {/* Communication */}
            <div className="mb-6">
              <p className="mb-1 font-medium">Communication</p>

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#e29b2f] h-3 rounded-full"
                />
              </div>

            </div>


            {/* Problem Solving */}
            <div className="mb-6">
              <p className="mb-1 font-medium">Problem Solving</p>

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#015b64] h-3 rounded-full"
                />
              </div>

            </div>


            {/* Teamwork */}
            <div className="mb-6">
              <p className="mb-1 font-medium">Teamwork</p>

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#e29b2f] h-3 rounded-full"
                />
              </div>

            </div>


            {/* Adaptability */}
            <div className="mb-6">
              <p className="mb-1 font-medium">Adaptability</p>

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#015b64] h-3 rounded-full"
                />
              </div>

            </div>


            {/* Time Management */}
            <div className="mb-6">
              <p className="mb-1 font-medium">Time Management</p>

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#e29b2f] h-3 rounded-full"
                />
              </div>

            </div>

          </div>

          </div>
        </motion.section>


        {/* PROJECT */}
        <motion.section
            id="project"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="px-6 md:px-24 py-20 bg-[#f8f9fb]"
          >
          <div className="max-w-6xl mx-auto">

            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#015b64]">
              Some Things I've Built
            </h2>

            <div className="space-y-20">

              {/* ===== PROJECT 1 ===== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >

                  <Image
                    src="/Capture1.PNG"
                    alt="project"
                    width={700}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />

                  {/* ปุ่มเพิ่มเติม */}
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="
                      px-4 py-2
                      bg-[#015b64]
                      text-white
                      rounded-md
                      text-sm
                      hover:bg-[#01474f]
                      transition
                    "
                  >
                    {showMore ? "show less" : "show more"}
                  </button>

                  {/* รูปเพิ่มเติม */}
                  {showMore && (
                    <div className="grid grid-cols-2 gap-3">
                      <Image
                        src="/S__36724746.jpg"
                        alt="detail"
                        width={400}
                        height={150}
                        className="rounded-md"
                      />

                      <Image
                        src="/co.PNG"
                        alt="detail"
                        width={400}
                        height={250}
                        className="rounded-md"
                      />
                    </div>
                  )}

                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <p className="text-sm text-[#e29b2f]">Featured Project</p>

                  <h3 className="text-xl md:text-2xl font-bold">
                    Web Application for Dental Instruments Detection
                  </h3>
                  
                  <div className="inline-block bg-[#ffe7d6] text-[#bd501d] px-3 py-1 rounded-full text-xs font-semibold">
                    🏆 2nd Runner-Up – Data Science & Business Analytics Project, KMITL 2024
                  </div>

                  <p className="text-gray-600 text-sm md:text-base">
                    Developed deep learning model and web prototype
                    for identifying and counting dental instruments.
                  </p>

                  <div className="flex flex-wrap gap-2 text-sm text-[#015b64]">
                    <span>Python</span>
                    <span>Deep Learning</span>
                    <span>Computer Vision</span>
                    <span>Web App</span>
                  </div>
                </motion.div>

              </div>


              {/* ===== PROJECT 2 ===== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4 order-2 md:order-1"
                >
                  <p className="text-sm text-[#e29b2f]">Featured Project</p>

                  <h3 className="text-xl md:text-2xl font-bold">
                    Demographic Data Warehouse & Dashboard
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base">
                    Built data warehouse using ETL process and created
                    dashboard for demographic data analysis.
                  </p>

                  <div className="flex flex-wrap gap-2 text-sm text-[#015b64]">
                    <span>SQL</span>
                    <span>ETL</span>
                    <span>Data Warehouse</span>
                    <span>Dashboard</span>
                  </div>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="order-1 md:order-2"
                >
                  <Image
                    src="/Capture3.PNG"
                    alt="project"
                    width={700}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </motion.div>

              </div>


              {/* ===== MORE PROJECTS ===== */}
              {showMore && (
                <>

                  {/* PROJECT 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src="/Capture5.PNG"
                        alt="project"
                        width={700}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <p className="text-sm text-[#e29b2f]">Featured Project</p>

                      <h3 className="text-xl md:text-2xl font-bold">
                        Data Mining & Big Data Analysis
                      </h3>

                      <p className="text-gray-600 text-sm md:text-base">
                        Developed clustering and forecasting model
                        using demographic data.
                      </p>

                      <div className="flex flex-wrap gap-2 text-sm text-[#015b64]">
                        <span>Python</span>
                        <span>Data Mining</span>
                        <span>Big Data</span>
                        <span>Clustering</span>
                      </div>

                    </motion.div>

                  </div>


                  {/* PROJECT 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src="/Capture4.PNG"
                        alt="project"
                        width={700}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <p className="text-sm text-[#e29b2f]">Featured Project</p>

                      <h3 className="text-xl md:text-2xl font-bold">
                        Business Analysis – Vintage Clothing Store
                      </h3>

                      <p className="text-gray-600 text-sm md:text-base">
                        Designed database and front-end system for
                        second-hand clothing store using HTML, CSS, JS.
                      </p>

                      <div className="flex flex-wrap gap-2 text-sm text-[#015b64]">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>System Design</span>
                      </div>

                    </motion.div>

                  </div>
                  
                  {/* PROJECT 5 */}
                  <div className="space-y-8">

                    {/* DESCRIPTION */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="max-w-3xl"
                    >

                      <p className="text-sm text-[#e29b2f] font-semibold">
                        Featured Project
                      </p>

                      <h3 className="text-xl md:text-2xl font-bold text-[#015b64]">
                        Design and develop a database system for fitness.
                      </h3>

                      <p className="text-gray-700 mt-2 leading-relaxed">
                        Designed and developed a database system for a fitness application,
                        including conceptual design, logical design, and database schema.
                        Structured and organized data to support efficient storage,
                        retrieval, and system functionality.
                      </p>

                      <div className="flex flex-wrap gap-3 mt-3 text-sm text-[#015b64]">
                        <span>Database Design</span>
                        <span>SQL</span>
                        <span>Data Modeling</span>
                        <span>System Design</span>
                        <span>Data Structure</span>
                      </div>

                    </motion.div>



                    {/* IMAGE GRID */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* IMAGE 1 */}
                        <div className="space-y-2">

                          <Image
                            src="/C5.PNG"
                            alt=""
                            width={1000}
                            height={500}
                            className="
                            w-full
                            h-80
                            object-cover
                            rounded-xl
                            shadow-lg
                            hover:scale-105
                            transition
                            "
                          />

                          <p className="text-sm text-gray-600">
                            Logical Design Model/Conceptual Design Model
                          </p>

                        </div>


                        {/* IMAGE 2 */}
                        <div className="space-y-2">

                          <Image
                            src="/C6.PNG"
                            alt=""
                            width={1000}
                            height={500}
                            className="
                            w-full
                            h-80
                            object-cover
                            rounded-xl
                            shadow-lg
                            hover:scale-105
                            transition
                            "
                          />

                          <p className="text-sm text-gray-600">
                            Database Schema
                          </p>

                        </div>
                      </div>

                    </motion.div>

                  </div>
                  

                  {/* PROJECT 5 */}
                  <div className="space-y-8">

                    {/* DESCRIPTION */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="max-w-3xl"
                    >

                      <p className="text-sm text-[#e29b2f] font-semibold">
                        Featured Project
                      </p>

                      <h3 className="text-xl md:text-2xl font-bold text-[#015b64]">
                        Presenting information using a dashboard.
                      </h3>

                      <p className="text-gray-700 mt-2 leading-relaxed">
                        Developed interactive dashboard for data visualization using Power BI.
                        Cleaned data, built model, and created visual reports to analyze
                        energy consumption and system performance.
                      </p>

                      <div className="flex flex-wrap gap-3 mt-3 text-sm text-[#015b64]">
                        <span>Power BI</span>
                        <span>Python</span>
                        <span>SQL</span>
                        <span>Data Visualization</span>
                        <span>Dashboard</span>
                      </div>

                    </motion.div>



                    {/* IMAGE GRID */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* IMAGE 1 */}
                        <div className="space-y-2">

                          <Image
                            src="/C1.PNG"
                            alt=""
                            width={1000}
                            height={500}
                            className="
                            w-full
                            h-80
                            object-cover
                            rounded-xl
                            shadow-lg
                            hover:scale-105
                            transition
                            "
                          />

                          <p className="text-sm text-gray-600">
                            Overview of product return
                          </p>

                        </div>


                        {/* IMAGE 2 */}
                        <div className="space-y-2">

                          <Image
                            src="/C2.PNG"
                            alt=""
                            width={1000}
                            height={500}
                            className="
                            w-full
                            h-80
                            object-cover
                            rounded-xl
                            shadow-lg
                            hover:scale-105
                            transition
                            "
                          />

                          <p className="text-sm text-gray-600">
                            Transforming Financial Landscape Overview
                          </p>

                        </div>


                        {/* IMAGE 3 */}
                        <div className="space-y-2">

                          <Image
                            src="/C3.PNG"
                            alt=""
                            width={1000}
                            height={500}
                            className="
                            w-full
                            h-80
                            object-cover
                            rounded-xl
                            shadow-lg
                            hover:scale-105
                            transition
                            "
                          />

                          <p className="text-sm text-gray-600">
                            dashboard displays demographic data.
                          </p>

                        </div>


                        {/* IMAGE 4 */}
                        <div className="space-y-2">

                          <Image
                            src="/C4.PNG"
                            alt=""
                            width={1000}
                            height={500}
                            className="
                            w-full
                            h-80
                            object-cover
                            rounded-xl
                            shadow-lg
                            hover:scale-105
                            transition
                            "
                          />

                          <p className="text-sm text-gray-600">
                            Webtoon overview Analysis Dashboard
                          </p>

                        </div>

                      </div>

                    </motion.div>

                  </div>

                </>
              )}


              {/* BUTTON */}
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="px-6 py-2 rounded-lg bg-[#e29b2f] text-white font-semibold hover:bg-[#d18f29] transition"
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>

            </div>
          </div>
        </motion.section>


        {/* WORK EXPERIENCE */}
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="min-h-screen px-6 md:px-24 py-24 bg-[#e29b2f]"
        >
          <div className="max-w-7xl mx-auto">

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#015b64] mb-16">
              Work Experience
            </h2>



            {/* ===== GRID MAIN ===== */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* ================= LEFT ================= */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >

                {/* company */}
                <div className="flex items-center gap-4">

                  <Image
                    src="/logo.c898ad7.svg"
                    alt="logo"
                    width={50}
                    height={50}
                  />

                  <div>
                    <p className="font-semibold text-[#015b64] text-xl">
                      SKY ICT Public Company Limited
                    </p>

                    <p className="text-sm text-gray-700">
                      Data Analyst Intern | 2024
                    </p>
                  </div>

                </div>


                {/* description */}
                <p className="text-gray-800 leading-relaxed">
                  Worked on energy consumption analysis, created Power BI dashboards,
                  and developed machine learning model for HVAC energy forecasting.
                  Built data pipeline, performed feature engineering,
                  and optimized prediction accuracy using Python.
                </p>


                {/* tech */}
                <div className="flex flex-wrap gap-2">

                  {[
                    "Python",
                    "Power BI",
                    "SQL",
                    "Machine Learning",
                    "Dashboard",
                    "Data Analysis",
                  ].map((t) => (
                    <span
                      key={t}
                      className="
                      px-3 py-1
                      bg-white
                      rounded-full
                      text-sm
                      shadow
                      hover:scale-105
                      transition
                    "
                    >
                      {t}
                    </span>
                  ))}

                </div>



                {/* PROJECT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >

                  <Image
                    src="/Capture2.PNG"
                    alt="project"
                    width={800}
                    height={400}
                    className="
                    rounded-xl
                    shadow-xl
                    w-full
                    h-auto
                    hover:scale-105
                    transition
                  "
                  />

                </motion.div>
                {/* ปุ่มเพิ่มเติม */}
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="
                      px-4 py-2
                      bg-[#015b64]
                      text-white
                      rounded-md
                      text-sm
                      hover:bg-[#01474f]
                      transition
                    "
                  >
                    {showMore ? "Show less" : "Show more"}
                  </button>

                  {/* รูปเพิ่มเติม */}
                  {showMore && (
                    <div className="grid grid-cols-2 gap-3">
                      <Image
                        src="/S__36724743.jpg"
                        alt="detail"
                        width={400}
                        height={150}
                        className="rounded-md"
                      />

                      <Image
                        src="/S__36724748.jpg"
                        alt="detail"
                        width={400}
                        height={250}
                        className="rounded-md"
                      />
                    </div>
                  )}

              </motion.div>



              {/* ================= RIGHT ================= */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >

                <div className="grid grid-cols-2 gap-4">

                  {/* big */}
                  <div className="col-span-2">
                    <Image
                      src="/t4.jpg"
                      alt=""
                      width={600}
                      height={400}
                      className="
                      rounded-2xl
                      shadow-xl
                      object-cover
                      w-full
                      h-64
                      hover:scale-105
                      transition
                      duration-300
                    "
                    />
                  </div>

                  {/* small */}
                  {["/t1.jpg", "/t2.jpg", "/t3.jpg", "/t5.jpg"].map(
                    (img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt=""
                        width={300}
                        height={200}
                        className="
                        rounded-xl
                        object-cover
                        w-full
                        h-36
                        shadow-md
                        hover:scale-105
                        transition
                      "
                      />
                    )
                  )}

                </div>

              </motion.div>

            </div>



          </div>
        </motion.section>


        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          min-h-screen
          flex
          flex-col
          justify-center
          items-center
          text-center
          px-6
          bg-gradient-to-br
          from-[#f8f9fb]
          via-[#e6f2f1]
          to-[#bed3d0]
          relative
          overflow-hidden
        "
        >

          {/* glow */}
          <div className="absolute w-[400px] h-[400px] bg-[#e29b2f] opacity-20 blur-[120px] rounded-full top-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-[#015b64] opacity-20 blur-[120px] rounded-full bottom-[-100px]" />


          {/* title */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#015b64] mb-6"
          >
            Get In Touch
          </motion.h2>


          {/* subtitle */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-gray-600 mb-8"
          >
            I'm currently looking for opportunities in Data Analyst,
            Business Analyst, or Machine Learning roles.
            Feel free to contact me anytime.
          </motion.p>


          {/* button */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&to=naphatsorn.290346@gmail.com",
                "_blank"
              )
            }
            className="
              px-8 py-3
              bg-[#015b64]
              text-white
              rounded-lg
              font-semibold
              mb-10
            "
          >
            Say Hello
          </motion.button>



          {/* social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8 text-3xl text-[#015b64]"
          >

            <a
                  href="https://github.com/naphatsornk"
                  className="hover:text-black transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=naphatsorn.290346@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="tel:0919859589"
                  className="hover:text-green-500 transition"
                >
                  <FaPhone />
                </a>

                <a
                  href="https://line.me/ti/p/nps_fah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                >
                  <FaLine />
                </a>

                <a
                  href="https://www.facebook.com/fahnaphats.kongngam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebook />
                </a>

          </motion.div>

        </motion.section>


      </main>

    </PageTransition>
  )
}