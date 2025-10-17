import "../globals.css"
import { AuthProvider } from "@/components/auth-provider"
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    )
}
