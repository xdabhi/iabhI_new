import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import React from 'react'

function about() {
  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      
      <div>
        
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          About & Contact
        </h1>
        
        
      </div>
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">iAbhi.com is a tech blog and a personal blog as well. Abhishek, the man behind iAbhi.com is an amateur blogger, tech enthusiast, and defense nerd.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">His interest ranges from the latest techs in science to an unnoticed problem in society. Via this blog, he expresses his opinions on such problems. He also likes to guide people through a laborious tech journey.</p>
      </div>
      <div>
        <h2 className="mt-2 inline-block font-heading text-3xl leading-tight lg:text-4xl">Contact:</h2>
      </div>
      <div className="mt-4 flex space-x-4">
        <Link
          key="abhishek"
          href={`https://twitter.com/XDAbhishek`}
          className="flex items-center space-x-2 text-sm"
          >
            <Image
              src="/images/avatars/abhi.png"
              alt="Abhishek"
              width={42}
              height={42}
              className="rounded-full bg-white"
              />
              <div className="flex-1 text-left leading-tight">
                <p className="font-medium">Abhishek</p>
                <p className="text-[12px] text-muted-foreground">
                  @XDAbhishek
                </p>
              </div>
          </Link>
       </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Email : abhi "at" iabhi "dot" com</p>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  )
}

export default about