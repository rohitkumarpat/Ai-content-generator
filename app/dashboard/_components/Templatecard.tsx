"use client"

import React from "react"
import { Template } from "./templateslist"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Templatecard(item: Template) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 
                 rounded-2xl shadow-lg hover:shadow-2xl 
                 p-6 flex flex-col items-center gap-4 
                 text-white cursor-pointer"
    >
      {/* Icon */}
      <div className="bg-white/20 p-3 rounded-full">
        <Image
          src={item.icon}
          alt={item.name}
          width={50}
          height={50}
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-center">{item.name}</h2>

      {/* Description */}
      <p className="text-sm text-gray-200 text-center line-clamp-3">
        {item.desc}
      </p>

      {/* Button */}
      <button className="mt-3 px-4 py-2 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-100 transition">
        Try Now
      </button>
    </motion.div>
  )
}
