"use client";
import React, { useState, useEffect } from "react";
import GlobalApi from "../Shared/GlobalApi";

const Input = () => {
  const [test, setTest] = useState(["vedika", "divya"]);
  const [testingHash, setTestingHash] = useState(["HASH"]);
  let testHash = [];

  async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  }

  const findSha = (word) => {
    sha256(word).then((hash) => {
      console.log("SHA-256 Hash:", hash);
      console.log(`before testHash: ${testHash}`);
      testHash.push(hash);
      console.log(`after testHash: ${testHash}`);
      setTestingHash(testHash);
    });
  };
  console.log(`testhash out of return ${testingHash}`);
  return (
    <div className="grid w-[100vw] h-[100vh]">
      <div className="place-self-center grid">
        <h1>Enter words separated by commas:</h1>
        <input
          type="text"
          className="rounded-md m-3 border-2 border-black border-solid px-3 py-1"
          onChange={(e) => {
            setTest(e.target.value.split(","));
            console.log(test);
          }}
        />
        <button
          className="hover:bg-[#eeeeee] place-self-center w-fit rounded-full border-2 border-black border-solid px-6 py-1"
          onClick={() => {
            test.map((word) => {
              findSha(word);
            });
          }}
        >
          TEST
        </button>
        <div className="grid grid-flow-col gap-1">
          <div>
            {test.map((word) => {
              return (
                <h1 className="my-1 text-md text-[#eeeeee] bg-[#0e0e0e] rounded-md px-3">
                  {word}:
                </h1>
              );
            })}
          </div>
          <div>
            {" "}
            {testingHash.map((hash) => {
              console.log(`hash ${hash}`);
              return (
                <h1 className="my-1 text-md text-[#eeeeee] bg-[#0e0e0e] rounded-md px-3">
                  {hash}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
