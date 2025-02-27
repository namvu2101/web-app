'use-client'

import { featuredCollections } from '@/app/data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Link } from 'lucide-react'
import React from 'react'

export function Body() {
    return (
        <div>
            <main className="flex-1">
                <section className="relative h-screen">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RmxqOHwFyklXgtbNjEpNw66kZI7MpS.png')",
                            filter: "brightness(0.7)",
                        }}
                    />
                    <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6">Elevate Your Bathroom Experience</h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
                            Discover our curated collection of luxury bathroom utensils designed for the modern connoisseur
                        </p>
                        <Button className="bg-white text-black hover:bg-white/90 transition-colors" size="lg">
                            Shop Collection
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif text-center mb-16">Featured Collections</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {featuredCollections.map((collection) => (
                                <div key={collection.id} className="group cursor-pointer">
                                    <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                        <img
                                            src={collection.image || "/placeholder.svg"}
                                            alt={collection.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-xl font-medium mb-2">{collection.name}</h3>
                                    <p className="text-neutral-600">{collection.description}</p>
                                    <Link href="#" className="inline-flex items-center mt-4 text-sm font-medium hover:underline">
                                        Explore Collection
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
