import Authentication from "@/components/auth/Authentication";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Authentication",
}

export default function AuthenticationPage() {
    return <Authentication />
}