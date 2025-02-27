'use-client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function Footer() {
    return (
        <div>
            <footer className="bg-neutral-900 text-white py-12">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-serif mb-4">LUXBATH</h3>
                            <p className="text-neutral-400">
                                Elevating everyday bathroom experiences with luxury utensils and
                                accessories since 2010.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">Shop</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Collections
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        New Arrivals
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Bestsellers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Gift Cards
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">About</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Craftsmanship
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Sustainability
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Press
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">Customer Care</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Shipping & Returns
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        Care Instructions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-400 hover:text-white">
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-neutral-400 text-sm">
                            © 2025 LUXBATH. All rights reserved.
                        </p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-neutral-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                                <span className="sr-only">Facebook</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-neutral-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-neutral-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                                <span className="sr-only">Twitter</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-neutral-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
