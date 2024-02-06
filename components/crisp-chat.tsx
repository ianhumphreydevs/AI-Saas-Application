"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("affcba63-3e38-42e2-8dab-71ddd9ba8551")
    }, [])

    return null;
}