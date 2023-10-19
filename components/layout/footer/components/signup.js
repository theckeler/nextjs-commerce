"use server";
// import { getPage } from "lib/shopify";
// import shopify from "@shopify/shopify-api";

import { useState, useEffect } from "react";

import InputButton from "@/components/form/inputbutton";
import { TAGS } from "lib/constants";
import { shopifyFetch } from "lib/shopify";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { useState } from "react";

export default function BlockSignUp() {

  const [state, setState] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://yourapi.com");
    };
  }, []);

  // const handleClick = async (e) => {
  //   const emailAddress = e.currentTarget.closest("#email-form").querySelector("input").value;
  //   console.log("emailAddress", emailAddress);

  //   try {
  //     const data = await shopify.rest.Customer.count({
  //       session: session
  //     }).json();
  //     setData(data);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // export async function POST() {
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY
  //     },
  //     body: JSON.stringify({ time: new Date().toISOString() })
  //   });

  //   const data = await res.json();

  //   return Response.json(data);
  // }

  // const client = new shopify.clients.Rest({ session });
  // const response = client.get({ path: "shop" });
  // console.log(response);



  return (
    <ul>
      <li>
        {/* <form
          data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/MCSubscription-FooterSubscribe"
          id="email-subscribe-form"
          role="form"
          autoComplete="on"
        > */}
        <h2 className="relative mb-4 flex border-b p-4 font-bold dark:text-neutral-400 sm:p-0 sm:pb-1 lg:pb-3 2xl:text-lg">
          Sign up for Emails from Cub Cadet
        </h2>
        <div className="px-4">
          <label htmlFor="email-signup" className="mb-4 block text-xs dark:text-white">
            Sign up to receive communication on services, products and special offers. You may
            unsubscribe at any time. Please refer to our{" "}
            <a
              href="https://www.cubcadet.com/en_US/privacy-and-security/privacy-policy.html"
              className="underline"
            >
              Privacy Policy
            </a>
            .
          </label>

          <InputButton
            id="email-form"
            onClick={(e) => {
              e.preventDefault();
              handleClick(e);
              // const emailAddress = e.currentTarget
              //   .closest("#email-form")
              //   .querySelector("input").value;

              // async () => {
              //   console.log("emailAddress", emailAddress);
              // };
            }}
            {...{
              className: null,
              padding: "p-3",
              input: {
                id: "email-signup",
                placeholder: "Enter in your email address",
                name: "email-signup",
                className: "border-amber-400 border-2 dark:bg-neutral-800"
              },
              button: {
                title: "Next",
                ariaLabel: null,
                className: "bg-amber-400"
              }
            }}
          />
        </div>
        {/* </form> */}
      </li>
    </ul>
  );
}
