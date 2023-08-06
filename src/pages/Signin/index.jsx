import { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";




export default function index() {
    return (
        <section>
            <div>Sign in or create an account</div>
            <p>Unlock a world of rewards with one account across Expedia, <br />
               Hotels.com, and Vrbo.
            </p>

            <div>
                <img />
                <button>
                    Sign in with Google
                </button>
            </div>

            <form>
                <input 
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={() => {}}
                    value=""
                />

                <div>Please enter your email address.</div>

                <button>
                    Continue
                </button>
            </form>

            <div>Other ways to sign in</div>

            <div>
                <AiFillApple />
                <GrFacebook />
            </div>
        
        </section>
    )
}