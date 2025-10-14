// app/(auth)/layout.tsx
import "../globals.css"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    )
}
