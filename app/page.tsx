"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Logo } from "@/components/ui/logo";
import { DiscordSection } from "@/components/ui/DiscordSection";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useState, useEffect } from "react";
import { preloadImage } from "@/lib/utils";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { motion } from "framer-motion";

export default function Home() {
  const { scrollPosition, direction, pastHero } = useScrollPosition();
  const isVisible = true; // Always visible on home page
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const MIN_LOADING_TIME = 1000; // 1 second minimum loading time
    const FADE_DURATION = 1000; // 1 second fade duration
    let startTime = Date.now();

    // Assets to preload
    const imagesToPreload = [
      '/images/hero-background.jpg',
      '/images/game.png',
      '/images/no-loafing.png'
    ];

    // Preload all images
    const preloadPromises = imagesToPreload.map(preloadImage);

    // Wait for all assets to load
    Promise.all(preloadPromises)
      .then(() => {
        const loadTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - loadTime);

        // Ensure minimum loading time
        setTimeout(() => {
          setFadeOut(true);
          
          // Remove loading screen after fade completes
          setTimeout(() => {
            setIsLoading(false);
          }, FADE_DURATION);
        }, remainingTime);
      })
      .catch(error => {
        console.error('Failed to load some assets:', error);
        // Still transition after minimum time in case of errors
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setIsLoading(false), FADE_DURATION);
        }, MIN_LOADING_TIME);
      });
  }, []);

  return (
    <main className="min-h-screen">
      {isLoading ? (
        <LoadingScreen fadeOut={fadeOut} />
      ) : (
        <div className="animate-fade-in">
          {/* Navigation */}
          <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 100 
          ? 'bg-gradient-to-r from-background/95 to-background/90 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex justify-between items-center transition-all duration-500 ease-in-out ${
            scrollPosition > 100 ? 'h-16' : 'h-20'
          }`}>
                <div className="flex items-center">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#3498db]/20 to-[#2980b9]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <Logo className={`relative transition-all duration-500 ease-in-out group-hover:scale-110 ${
                  scrollPosition > 100 ? 'text-xl' : 'text-2xl'
                }`} />
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  {['Games', 'Testimonials', 'Discord'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`relative px-4 py-2.5 transition-all duration-500 ease-in-out ${
                    scrollPosition > 100 
                      ? 'text-foreground hover:text-[#3498db]' 
                      : 'text-white/90 hover:text-white'
                  } rounded-lg group`}
                    >
                      <span className="relative z-10">{item}</span>
                      <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    scrollPosition > 100 ? 'bg-[#3498db]/10' : 'bg-white/10'
                  }`}></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="min-h-screen flex items-center relative overflow-hidden">
            <div className="fixed inset-0 z-0">
              <div className="absolute inset-0 bg-black/70 z-10" />
              <img
                src="/images/hero-background.jpg"
                alt="Roblox Pirate Adventure"
                className="w-full h-full object-cover fixed"
              />
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="relative z-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-relaxed flex flex-col">
                    <FlipWords
                      words={[
                        "Experience adventure",
                        "Build amazing worlds",
                        "Create epic stories",
                        "Join the community"
                      ]}
                      duration={2500}
                      className="text-[#3498db]"
                    />
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-3xl md:text-4xl mt-2"
                    >
                      &nbsp;No Loafing Games
                    </motion.span>
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-4 ml-1"
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Button
                      className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-6 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#3498db]/20"
                      onClick={() => {
                        const featuredSection = document.querySelector('#featured-game');
                        featuredSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <a 
                      href="https://www.roblox.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-white/20">
                        View us on Roblox
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          <BackgroundGradientAnimation
            gradientBackgroundStart="#010204"
            gradientBackgroundEnd="#030912"
            firstColor="13, 38, 55"
            secondColor="10, 32, 46"
            thirdColor="18, 18, 48"
            fourthColor="15, 22, 36"
            fifthColor="8, 49, 111"
            className="relative z-10"
            containerClassName="relative z-10"
          >
            {/* Featured Game */}
            <section id="games" className="pt-32 pb-20 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3498db]/5 to-transparent opacity-50"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#3498db]/20 via-[#2980b9]/20 to-[#3498db]/20 rounded-lg blur-lg"></div>
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <HeroVideoDialog
                        animationStyle="from-left"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="/images/game.png"
                        thumbnailAlt="Highlands Gameplay"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="lg:pl-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <h2 className="text-base font-semibold text-[#3498db] mb-2">Featured Game</h2>
                      <h3 className="text-3xl font-bold mb-6 text-white">The Highlands</h3>
                    </motion.div>
                    <div className="space-y-6 text-muted-foreground">
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        className="leading-relaxed"
                      >
                        Embark on an epic adventure in Highlands, where magic and mystery await at every turn. 
                        Explore vast landscapes, battle mythical creatures, and uncover ancient secrets in this 
                        immersive Roblox experience.
                      </motion.p>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="grid grid-cols-2 gap-4 text-sm"
                      >
                        <div className="space-y-2">
                          <div className="font-medium text-white">Features</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Vast open world</li>
                            <li>Epic boss battles</li>
                            <li>Unique magic system</li>
                            <li>Multiplayer quests</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <div className="font-medium text-white">Coming Soon</div>
                          <ul className="list-disc list-inside space-y-1">
                            <li>New dungeons</li>
                            <li>Pet system</li>
                            <li>Player housing</li>
                            <li>Trading system</li>
                          </ul>
                        </div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        className="pt-4"
                      >
                        <a 
                          href="https://www.roblox.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="relative inline-block"
                          >
                            <Button
                              className="relative bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 text-sm font-semibold transition-colors duration-200"
                            >
                              Play Now
                              <ChevronRight className="ml-2 h-4 w-4 inline-block" />
                            </Button>
                          </motion.div>
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Marquee Reviews */}
            <section id="testimonials" className="pt-32 pb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-base font-semibold text-[#3498db] text-center mb-2">Testimonials</h2>
                <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Players Say</h2>
              </motion.div>
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                {[
                  Array(3).fill([
                    { name: "Alex", username: "@alex", body: "The most innovative Roblox games I've ever played!", img: "https://avatar.vercel.sh/alex" },
                    { name: "Sarah", username: "@sarah", body: "Incredible attention to detail in every game. Simply amazing!", img: "https://avatar.vercel.sh/sarah" },
                    { name: "Mike", username: "@mike", body: "The community is fantastic. I've made so many friends here!", img: "https://avatar.vercel.sh/mike" }
                  ]),
                  Array(3).fill([
                    { name: "Emma", username: "@emma", body: "These games keep getting better and better!", img: "https://avatar.vercel.sh/emma" },
                    { name: "David", username: "@david", body: "The best Roblox game developer I've encountered!", img: "https://avatar.vercel.sh/david" },
                    { name: "Lisa", username: "@lisa", body: "Can't stop playing these amazing games!", img: "https://avatar.vercel.sh/lisa" }
                  ])
                ].map((row, idx) => (
                  <Marquee
                    key={idx}
                    reverse={idx === 1}
                    pauseOnHover
                    className="py-4"
                  >
                    {row.flat().map((review, reviewIdx) => (
                      <figure
                        key={`${review.username}-${reviewIdx}`}
                        className="relative h-full w-64 flex-none cursor-pointer overflow-hidden rounded-xl border p-4 bg-card border-border"
                      >
                        <div className="flex flex-row items-center gap-2">
                          <img
                            className="rounded-full"
                            width="32"
                            height="32"
                            alt={review.name}
                            src={review.img}
                          />
                          <div className="flex flex-col">
                            <figcaption className="text-sm font-medium text-card-foreground">
                              {review.name}
                            </figcaption>
                            <p className="text-xs font-medium text-muted-foreground">
                              {review.username}
                            </p>
                          </div>
                        </div>
                        <blockquote className="mt-2 text-sm text-muted-foreground">
                          {review.body}
                        </blockquote>
                      </figure>
                    ))}
                  </Marquee>
                ))}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
              </div>
            </section>

            {/* Discord Section */}
            <section id="discord" className="pb-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <DiscordSection />
              </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-base font-semibold text-[#3498db] mb-2"
                  >
                    Stay up to date
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-3xl font-bold text-white"
                  >
                    Get notified on any news and updates
                  </motion.h3>
                </motion.div>
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="max-w-md mx-auto"
                >
                  <div className="flex gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      autoComplete="email"
                      className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#3498db] sm:text-sm/6"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-[#3498db] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2980b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3498db]"
                    >
                      Subscribe
                    </button>
                  </div>
                </motion.form>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-20 pb-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">© 2025 No Loafing. All rights reserved.</div>
                </div>
              </div>
            </footer>
          </BackgroundGradientAnimation>
        </div>
      )}
    </main>
  );
}