'use client'

import { Users, Code, Gamepad2, MessagesSquare } from "lucide-react"
import { motion } from "framer-motion";

const features = [
  {
    name: 'Game Development Community',
    description:
      'Connect with fellow Roblox developers, share your experiences, and get feedback on your games from our active community.',
    icon: Code,
  },
  {
    name: 'Beta Testing',
    description: 'Join exclusive beta testing sessions for upcoming game features and help shape the future of our games.',
    icon: Gamepad2,
  },
  {
    name: 'Live Events & Updates',
    description: 'Stay informed about game updates, special events, and participate in live Q&A sessions with our dev team.',
    icon: MessagesSquare,
  },
]

export function DiscordSection() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-base font-semibold text-[#3498db] mb-2">Join Our Discord</h2>
              <h3 className="text-3xl font-bold text-white mb-12">Help Us Build Amazing Games</h3>
              <p className="mt-6 text-base text-gray-300">
                Join our thriving Discord community where Roblox developers and players come together. Get early access to features, participate in events, and help shape the future of our games.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white text-sm">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#3498db]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-sm">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-[#3498db] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2980b9] transition-colors duration-200"
                >
                  Join Discord
                </motion.a>
              </div>
            </motion.div>
            <div className="relative lg:order-last">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex items-center justify-center h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3498db]/20 via-[#2980b9]/20 to-[#3498db]/20 rounded-lg blur-lg"></div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative"
                >
                  <img
                    src="/images/discord.png"
                    alt="Discord Community"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-white/10 my-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}