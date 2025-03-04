"use client"

import Image from "next/image"
import f1GPTLogo from "./assets/f1GPTLogo.jpeg"
import { useChat } from "ai/react"
import { Message } from "ai"

const Home = () => {
    return (
        <main>
            <Image src={f1GPTLogo} width="250" alt="F1GPT logo" />
        </main>
    )
}

export default Home