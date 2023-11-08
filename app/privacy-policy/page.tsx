import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import React from 'react'

function privacy() {
  return (
    <article className="container relative max-w-3xl top-10 py-6 lg:py-10">
      
      <div>
        
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
        Privacy Policy
        </h1>  
      </div>
      <div>
      <h2 className="mt-2 inline-block font-heading text-3xl leading-tight lg:text-4xl">Privacy Policy for iAbhi</h2>
      </div>
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">At iAbhi.com, accessible from https://www.iabhi.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by iAbhi.com and how we use it.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at abhi@iabhi.com</p>
      </div>
      <div>
        <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-3xl">Log Files</h3>
      </div>
      <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">iAbhi.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>
      </div>
      <div>
        <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-3xl">Cookies and Web Beacons</h3>
      </div>
      <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Like any other website, iAbhi.com uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>
      </div>
      <div>
        <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-3xl">Google DoubleClick DART Cookie</h3>
      </div>
      <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to iabhi.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads</p>
      </div>
      <div>
        <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-3xl">Privacy Policies</h3>
      </div>
      <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on iAbhi.com, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">Note that iAbhi.com has no access to or control over these cookies that are used by third-party advertisers.</p>
      </div>
      <div>
        <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-3xl">Third-Party Privacy Policies</h3>
      </div>
      <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">iAbhi.com’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?</p>
      </div>
      <div>
        <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-3xl">Children’s Information</h3>
      </div>
      <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">iAbhi.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
      </div>
      <div>
        <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-3xl">Online Privacy Policy Only</h3>
      </div>
      <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in iAbhi.com. This policy is not applicable to any information collected offline or via channels other than this website.</p>
      </div>
      <div>
        <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-3xl">Consent</h3>
      </div>
      <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
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

export default privacy